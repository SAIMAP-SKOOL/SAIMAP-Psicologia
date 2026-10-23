"""Prueba de la interfaz con Playwright: python3 tests/test_ui.py [--shots DIR]
Recorre bienvenida → inicio → curso → lección completa (todos los tipos) → resultados, en móvil, con errores de consola y desbordamiento."""
import sys, os, threading, http.server, functools, re
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__)); DIST = os.path.join(HERE, '..', 'dist')
SHOTS = sys.argv[sys.argv.index('--shots') + 1] if '--shots' in sys.argv else '/tmp/sp_shots'
os.makedirs(SHOTS, exist_ok=True)
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST)
H.log_message = lambda *a: None
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8765), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:8765/'
errs, seen = [], set()

def overflow(pg, tag):
    w = pg.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth')
    if w > 1: errs.append(f'desbordamiento horizontal {w}px en {tag}')

def play(pg, label, maxsteps=60):
    for step in range(maxsteps):
        pg.wait_for_timeout(120)
        if pg.locator('.result').count():
            return step
        kind = pg.locator('.kind').inner_text().split('\n')[0].strip()
        if kind not in seen: pg.screenshot(path=f'{SHOTS}/tipo-{len(seen):02d}.png')
        seen.add(kind)
        if len(seen) and step < 40: pg.screenshot(path=f'{SHOTS}/{label}-{step:02d}.png')
        overflow(pg, f'{label} paso {step} ({kind})')
        if pg.locator('.mchip').count():
            for k in pg.eval_on_selector_all('.mchip', 'els => els.map(e => e.dataset.k)'):
                pg.click(f'.mchip[data-k="{k}"]'); pg.click(f'.mdef[data-k="{k}"]')
        elif pg.locator('.bank .step').count():
            for i in range(pg.locator('.bank .step').count()): pg.locator('.bank .step').nth(i).click()
        elif pg.locator('.cat').count():
            while pg.locator('.card1').count(): pg.locator('.cat').first.click(); pg.wait_for_timeout(30)
        elif pg.locator('#ti').count():
            pg.fill('#ti', 'neurona')
        elif pg.locator('.tfrow').count():
            pg.locator('.tfrow .opt').first.click()
        else:
            pg.locator('.choice .opt').first.click()
        if pg.locator('#chk').is_enabled():
            pg.click('#chk')
        if pg.locator('#next').count():
            pg.screenshot(path=f'{SHOTS}/{label}-{step:02d}-fb.png') if step < 6 else None
            pg.click('#next')
    errs.append(f'{label}: la lección no terminó')

with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
    for scheme in ('light', 'dark'):
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, color_scheme=scheme)
        pg = ctx.new_page()
        pg.on('console', lambda m: m.type == 'error' and errs.append('consola: ' + m.text))
        pg.on('requestfailed', lambda r: '127.0.0.1' in r.url and errs.append('fallo de carga: ' + r.url))
        pg.on('pageerror', lambda e: errs.append('error JS: ' + str(e)))
        pg.route(re.compile(r'^https?://(?!127\.0\.0\.1)'), lambda r: r.abort())
        pg.goto(URL); pg.wait_for_selector('.welcome')
        pg.screenshot(path=f'{SHOTS}/{scheme}-1-bienvenida.png'); overflow(pg, 'bienvenida')
        pg.click('[data-r="grado"]'); pg.wait_for_selector('.ccard')
        pg.screenshot(path=f'{SHOTS}/{scheme}-2-inicio.png', full_page=True); overflow(pg, 'inicio')
        pg.click('[data-c="bases-biologicas"]'); pg.wait_for_selector('.node')
        pg.screenshot(path=f'{SHOTS}/{scheme}-3-curso.png'); overflow(pg, 'curso')
        pg.click('.node[data-u="1"][data-m="1"]'); pg.wait_for_selector('.tbody:not([aria-busy])')
        pg.wait_for_timeout(400); overflow(pg, 'teoría 1.1')
        if len(pg.locator('.tbody').inner_text()) < 1200: errs.append('teoría 1.1 casi vacía')
        pg.screenshot(path=f'{SHOTS}/{scheme}-4-teoria.png'); pg.screenshot(path=f'{SHOTS}/{scheme}-4-teoria-completa.png', full_page=True)
        pg.go_back(); pg.wait_for_selector('.node'); pg.go_forward(); pg.wait_for_selector('.tbody:not([aria-busy])')
        pg.click('.tbar [data-go]'); pg.wait_for_selector('.stage')
        n = play(pg, scheme + '-L1')
        pg.screenshot(path=f'{SHOTS}/{scheme}-5-resultado.png')
        pg.click('#cont'); pg.wait_for_selector('.node')
        if scheme == 'light':
            # varias lecciones más, un repaso de unidad y el repaso del día
            for (u, m) in [(1, 2), (1, 3), (1, 4), (1, 5), (7, 2), (12, 1), (14, 2), (16, 3)]:
                pg.click(f'.node[data-u="{u}"][data-m="{m}"]', force=True); pg.wait_for_selector('.tbody:not([aria-busy])')
                overflow(pg, f'teoría {u}.{m}'); pg.screenshot(path=f'{SHOTS}/teoria-{u}-{m}.png', full_page=True)
                pg.click('.tbar [data-go]'); pg.wait_for_selector('.stage')
                play(pg, f'U{u}M{m}'); pg.click('#cont'); pg.wait_for_selector('.node')
            pg.screenshot(path=f'{SHOTS}/light-6-curso-avanzado.png')
            pg.goto(URL + '#/'); pg.wait_for_selector('[data-daily]')
            pg.screenshot(path=f'{SHOTS}/light-7-inicio-diario.png')
            pg.click('[data-daily]'); pg.wait_for_selector('.stage'); play(pg, 'diario')
            pg.click('#cont'); pg.wait_for_selector('.node')
            if pg.locator('[data-weak]').count():
                pg.click('[data-weak]'); pg.wait_for_selector('.stage'); play(pg, 'fallos'); pg.click('#cont'); pg.wait_for_selector('.node')
            pg.goto(URL + '#/'); pg.wait_for_selector('.tab')
            pg.click('[data-tab="pir"]'); pg.screenshot(path=f'{SHOTS}/light-8-pir.png', full_page=True)
            pg.click('[data-tab="libre"]'); pg.screenshot(path=f'{SHOTS}/light-9-explorar.png', full_page=True)
            pg.click('[data-act="settings"]'); pg.wait_for_selector('.sheet'); pg.screenshot(path=f'{SHOTS}/light-10-ajustes.png')
            # escritorio
            pg.set_viewport_size({'width': 1280, 'height': 800}); pg.goto(URL + '#/c/bases-biologicas'); pg.wait_for_selector('.node')
            pg.screenshot(path=f'{SHOTS}/light-11-escritorio.png'); overflow(pg, 'escritorio')
        ctx.close()
    b.close()
srv.shutdown()
print('tipos vistos:', sorted(seen))
print('\n'.join(errs) if errs else 'SIN ERRORES')
