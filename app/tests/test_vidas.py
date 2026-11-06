"""Vidas y Premium con la función activada (sp.feat) y la facturación simulada: python3 tests/test_vidas.py"""
import os, threading, http.server, functools, re, json
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); DIST = os.path.join(HERE, '..', 'dist')
SH = '/tmp/sp_vidas'; os.makedirs(SH, exist_ok=True)
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST); H.log_message = lambda *a: None
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8767), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:8767/'; errs = []
def check(c, m):
    if not c: errs.append(m)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path=next((x for x in ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'] if os.path.exists(x)), None))
    ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    pg = ctx.new_page()
    pg.on('pageerror', lambda e: errs.append('error JS: ' + str(e)))
    pg.on('console', lambda m: m.type == 'error' and 'firebase' not in m.text.lower() and 'ERR_FAILED' not in m.text and errs.append('consola: ' + m.text))
    pg.route(re.compile(r'^https?://(?!127\.0\.0\.1)'), lambda r: r.abort())
    pg.add_init_script("localStorage.setItem('sp.feat', JSON.stringify({vidas:true}))")
    pg.goto(URL); pg.wait_for_selector('.welcome'); pg.click('[data-r="grado"]'); pg.wait_for_selector('.ccard')
    check(pg.locator('.stat.life').count() == 1, 'no aparece el contador de vidas')
    check('5' in pg.locator('.stat.life').text_content(), 'no empieza con 5 vidas')
    pg.click('[data-c="bases-biologicas"]'); pg.wait_for_selector('.node')
    pg.click('.node[data-u="1"][data-m="1"]'); pg.wait_for_selector('.tbody:not([aria-busy])')
    pg.click('.tbar [data-go]'); pg.wait_for_selector('.stage')
    check(pg.locator('.lifebar').count() == 1, 'no hay barra de vidas en la lección')
    # fallar a propósito: escribir mal / elegir la última opción
    lost = False
    for step in range(40):
        pg.wait_for_timeout(100)
        if pg.locator('.sheet .nolives').count(): lost = True; break
        if pg.locator('.result').count(): break
        if pg.locator('.mchip').count():
            ks = pg.eval_on_selector_all('.mchip', 'els => els.map(e => e.dataset.k)')
            pg.click(f'.mchip[data-k="{ks[0]}"]'); pg.click(f'.mdef[data-k="{ks[-1]}"]'); pg.wait_for_timeout(250)
            for k in ks:
                if pg.locator(f'.mchip[data-k="{k}"]').count() and pg.locator(f'.mchip[data-k="{k}"]').is_enabled(): pg.click(f'.mchip[data-k="{k}"]'); pg.click(f'.mdef[data-k="{k}"]')
        elif pg.locator('.bank .step').count():
            for i in reversed(range(pg.locator('.bank .step').count())): pg.locator('.bank .step').nth(i).click()
        elif pg.locator('.cat').count():
            while pg.locator('.card1').count(): pg.locator('.cat').last.click(); pg.wait_for_timeout(30)
        elif pg.locator('#ti').count(): pg.fill('#ti', 'zzzz')
        elif pg.locator('.tfrow').count(): pg.locator('.tfrow .opt').last.click()
        else: pg.locator('.choice .opt').last.click()
        if pg.locator('#chk').count() and pg.locator('#chk').is_enabled(): pg.click('#chk')
        if step == 2: pg.screenshot(path=f'{SH}/1-leccion.png')
        if pg.locator('#next').count(): pg.click('#next')
    n = pg.evaluate("JSON.parse(localStorage.getItem('sp.g')||'{}').en")
    print('vidas tras fallar:', n)
    check(n and n['n'] < 5, 'no se han perdido vidas al fallar')
    if lost:
        pg.screenshot(path=f'{SH}/2-sin-vidas.png')
        check('Premium' in pg.locator('.sheet').text_content(), 'la hoja sin vidas no ofrece Premium')
        pg.click('.sheet [data-x]'); pg.wait_for_selector('.tbody, .node'); pg.goto(URL + '#/c/bases-biologicas/t/1/2'); pg.wait_for_selector('.tbody:not([aria-busy])')
        pg.click('.tbar [data-go]'); pg.wait_for_selector('.sheet .nolives')
        check(pg.locator('.stage').count() == 0, 'sin vidas se puede empezar una lección nueva')
        pg.click('.sheet [data-p]'); pg.wait_for_selector('.prem')
    else:
        errs.append('no se llegó a quedarse sin vidas (¿demasiadas preguntas acertadas?)'); pg.goto(URL + '#/premium'); pg.wait_for_selector('.prem')
    pg.wait_for_timeout(300); pg.screenshot(path=f'{SH}/3-premium.png', full_page=True)
    check(pg.locator('.plan').count() == 2, 'faltan los planes')
    pg.click('[data-plan="mensual"]'); check(pg.locator('.plan.on').get_attribute('data-plan') == 'mensual', 'no cambia el plan')
    w = pg.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth'); check(w <= 1, f'desbordamiento {w}px')
    check('Android' in pg.locator('#buy').text_content(), 'fuera de la app no remite a Android')
    # con Digital Goods simulado: precios de la tienda y compra sin sesión → pide iniciar sesión
    pg2 = ctx.new_page(); pg2.on('pageerror', lambda e: errs.append('error JS 2: ' + str(e)))
    pg2.route(re.compile(r'^https?://(?!127\.0\.0\.1)'), lambda r: r.abort())
    pg2.add_init_script("""window.getDigitalGoodsService = async () => ({
      getDetails: async ids => ids.map(id => ({ itemId: id, price: { currency: 'USD', value: id === 'premium_anual' ? '9.99' : '1.99' } })),
      listPurchases: async () => [] });""")
    pg2.goto(URL + '#/premium'); pg2.wait_for_selector('.prem'); pg2.wait_for_timeout(500)
    t = pg2.locator('[data-price="premium_anual"]').text_content(); print('precio tienda:', t)
    check('9,99' in t and ('US$' in t or '$' in t), 'no usa el precio de la tienda')
    check('Suscribirme' == pg2.locator('#buy').text_content().strip(), 'en la app no ofrece suscribirse')
    pg2.click('#buy'); pg2.wait_for_timeout(300)
    check('Inicia sesión' in pg2.locator('#pmsg').text_content(), 'compra sin sesión no pide iniciar sesión')
    pg2.screenshot(path=f'{SH}/4-premium-app.png')
    # Premium activo (simulado sin nube): infinito
    pg3 = ctx.new_page(); pg3.route(re.compile(r'^https?://(?!127\.0\.0\.1)'), lambda r: r.abort())
    pg3.add_init_script("localStorage.setItem('sp.ent', JSON.stringify({premium:true, until: Date.now()+864e5*30, source:'play', product:'premium_anual'}))")
    pg3.goto(URL + '#/'); pg3.wait_for_selector('.stat.life')
    check(pg3.locator('.stat.life .inf, .stat.life svg').count() >= 1, 'Premium no muestra infinito')
    pg3.goto(URL + '#/premium'); pg3.wait_for_selector('.prem'); pg3.wait_for_timeout(700); pg3.screenshot(path=f'{SH}/5-premium-activo.png')
    check('Eres Premium' in pg3.locator('.phero').text_content(), 'no indica Premium activo')
    b.close()
print('\n'.join(errs) if errs else 'vidas-ok')
