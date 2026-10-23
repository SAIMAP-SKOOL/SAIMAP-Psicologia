"""Recorre la vista de teoría (#/c/<id>/t/<u>/<m>) en móvil, en modo claro y oscuro, y comprueba que carga sin desbordar.
Uso: python3 tests/test_teoria_ui.py [id ...]   (sin ids: todas las asignaturas de dist/teoria)"""
import os, sys, glob, threading, http.server, functools, re
from playwright.sync_api import sync_playwright

DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'dist')
ids = sys.argv[1:] or sorted(os.path.basename(p) for p in glob.glob(os.path.join(DIST, 'teoria', '*')))
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST); H.log_message = lambda *a: None
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8766), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:8766/'
errs = []
with sync_playwright() as p:
    exe = (glob.glob('/opt/pw-browsers/chromium-*/chrome-linux/chrome') or [None])[0]
    b = p.chromium.launch(executable_path=exe) if exe else p.chromium.launch()
    for scheme in ('light', 'dark'):
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=scheme); pg = ctx.new_page()
        pg.route(re.compile(r'^https?://(?!127\.0\.0\.1)'), lambda r: r.abort())
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(URL); pg.evaluate("localStorage.setItem('sp.g', JSON.stringify({route:'grado', onboarded:true}))")
        for cid in ids:
            for u in range(1, 17):
                for m in range(1, 6):
                    pg.goto(f'{URL}#/c/{cid}/t/{u}/{m}'); pg.reload(); pg.wait_for_selector('.tbody:not([aria-busy])')
                    w = pg.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth')
                    if w > 1: errs.append(f'{scheme} {cid} {u}.{m} desborda {w}px')
                    if 'No se ha podido' in pg.locator('.tbody').inner_text(): errs.append(f'{cid} {u}.{m} sin cargar')
        ctx.close()
    b.close()
srv.shutdown(); print('\n'.join(errs) or f'OK ({", ".join(ids)})')
