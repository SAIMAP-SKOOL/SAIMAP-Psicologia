"""Prueba de cuentas con Firebase simulado: login con Google, fusión del progreso, cierre de sesión y borrado de cuenta.
Uso: python3 tests/test_cuenta.py [--shots DIR]"""
import os, sys, glob, json, threading, http.server, functools, re
from playwright.sync_api import sync_playwright
DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'dist')
SHOTS = sys.argv[sys.argv.index('--shots') + 1] if '--shots' in sys.argv else None
H = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST); H.log_message = lambda *a: None
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8767), H); threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = 'http://127.0.0.1:8767/'
MOCK = r"""
(() => {
  const store = JSON.parse(localStorage.getItem('__fbstore') || '{}');
  const persist = () => localStorage.setItem('__fbstore', JSON.stringify(store));
  window.__fb = { store, writes: 0 };
  const docRef = path => ({ path, set: d => { store[path] = JSON.parse(JSON.stringify(d)); window.__fb.writes++; persist(); return Promise.resolve(); },
    get: () => Promise.resolve({ exists: path in store, data: () => store[path] }), delete: () => { delete store[path]; persist(); return Promise.resolve(); },
    collection: n => colRef(path + '/' + n) });
  const colRef = path => ({ doc: id => docRef(path + '/' + id), get: () => { const docs = Object.keys(store).filter(k => k.startsWith(path + '/') && !k.slice(path.length + 1).includes('/')).map(k => ({ id: k.slice(path.length + 1), data: () => store[k], ref: docRef(k) })); return Promise.resolve({ docs, forEach: f => docs.forEach(f) }); } });
  let cb = null; const user = { uid: 'u1', displayName: 'Ana Prueba', email: 'ana@example.com', photoURL: '', providerData: [{ providerId: 'google.com' }], delete: () => { auth.currentUser = null; cb && cb(null); return Promise.resolve(); }, reauthenticateWithPopup: () => Promise.resolve() };
  const auth = { currentUser: localStorage.getItem('__fbuser') ? user : null, languageCode: '', getRedirectResult: () => Promise.resolve(null),
    onAuthStateChanged: f => { cb = f; setTimeout(() => f(auth.currentUser), 50); },
    signInWithPopup: () => { auth.currentUser = user; localStorage.setItem('__fbuser', '1'); setTimeout(() => cb(user), 30); return Promise.resolve(); },
    signOut: () => { auth.currentUser = null; localStorage.removeItem('__fbuser'); cb(null); return Promise.resolve(); } };
  const fs = { collection: n => colRef(n) };
  const firebase = { initializeApp: () => { }, auth: () => auth, firestore: () => fs };
  firebase.auth.GoogleAuthProvider = function () { }; firebase.auth.EmailAuthProvider = { credential: () => ({}) };
  Object.defineProperty(window, 'firebase', { get: () => firebase, set: () => { }, configurable: true });
})();
"""
errs = []
def check(c, m):
    if not c: errs.append(m)
with sync_playwright() as p:
    exe = (glob.glob('/opt/pw-browsers/chromium-*/chrome-linux/chrome') or [None])[0]
    b = p.chromium.launch(executable_path=exe) if exe else p.chromium.launch()
    for scheme in ('light', 'dark'):
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, color_scheme=scheme); pg = ctx.new_page()
        pg.route(re.compile(r'^https?://(?!127\.0\.0\.1)'), lambda r: r.abort())
        pg.on('pageerror', lambda e: errs.append('pageerror ' + str(e)))
        pg.add_init_script(MOCK)
        pg.goto(URL)
        # nube con progreso previo de otro dispositivo; dispositivo con progreso de invitado
        pg.evaluate("""localStorage.clear(); localStorage.setItem('__fbstore', JSON.stringify({'users/u1/psicologia/_global': {v:1,xp:500,dx:0,day:'2026-10-20',streak:4,days:['2026-10-20'],goal:50,route:'grado',t:5},
          'users/u1/psicologia/memoria': {v:1,done:{'1.1':{s:3,n:1}},it:{},dr:'',t:5}, 'users/u1/courses/it': {xp:9}, 'users/u1': {xp:1}}));
          localStorage.setItem('sp.g', JSON.stringify({v:1,xp:40,dx:0,day:'2026-10-21',streak:1,days:['2026-10-21'],goal:30,route:'grado',onboarded:true,t:9}));
          localStorage.setItem('sp.c.memoria', JSON.stringify({v:1,done:{'1.2':{s:2,n:1}},it:{},dr:'',t:9}));""")
        pg.reload(); pg.wait_for_timeout(400)
        check(pg.locator('.notice').count() == 1, f'{scheme}: falta el aviso de iniciar sesión')
        pg.click('[data-act="settings"]'); pg.wait_for_selector('.acct .gbtn')
        if SHOTS: pg.screenshot(path=f'{SHOTS}/{scheme}-login.png')
        w = pg.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth'); check(w <= 1, f'{scheme}: desborda {w}px')
        pg.click('.acct .gbtn'); pg.wait_for_selector('.acct .who', timeout=4000); pg.wait_for_timeout(1700)
        check(pg.locator('.veil').count() == 1, f'{scheme}: los ajustes se han cerrado al iniciar sesión')
        if SHOTS: pg.screenshot(path=f'{SHOTS}/{scheme}-cuenta.png')
        st = pg.evaluate("({g: JSON.parse(localStorage.getItem('sp.g')), c: JSON.parse(localStorage.getItem('sp.c.memoria')), s: window.__fb.store})")
        check(st['g']['xp'] == 500 and st['g']['day'] == '2026-10-21' and set(st['g']['days']) == {'2026-10-20', '2026-10-21'}, f'{scheme}: global mal fusionado {st["g"]}')
        check(set(st['c']['done']) == {'1.1', '1.2'}, f'{scheme}: curso mal fusionado {st["c"]}')
        check(set(st['s']['users/u1/psicologia/memoria']['done']) == {'1.1', '1.2'}, f'{scheme}: la nube no recibió la fusión')
        # cerrar y volver a entrar: sigue con sesión
        pg.click('[data-a="signout"]'); pg.wait_for_selector('.acct .gbtn'); pg.wait_for_timeout(200)
        check(pg.evaluate("localStorage.getItem('sp.c.memoria')") is None, f'{scheme}: no se borró el progreso local al cerrar sesión')
        pg.click('.acct .gbtn'); pg.wait_for_selector('.acct .who'); pg.wait_for_timeout(300)
        check(set(json.loads(pg.evaluate("localStorage.getItem('sp.c.memoria')"))['done']) == {'1.1', '1.2'}, f'{scheme}: no se recuperó el progreso de la nube')
        pg.click('[data-a="askdel"]'); pg.wait_for_selector('#delgo')
        if SHOTS: pg.screenshot(path=f'{SHOTS}/{scheme}-borrar.png')
        pg.click('#delgo'); pg.wait_for_timeout(600)
        left = pg.evaluate("Object.keys(window.__fb.store)")
        check(left == [], f'{scheme}: quedan datos tras borrar la cuenta: {left}')
        check(pg.evaluate("localStorage.getItem('sp.c.memoria')") is None, f'{scheme}: queda progreso local tras borrar')
        ctx.close()
    b.close()
srv.shutdown(); print('\n'.join(errs) or 'CUENTAS OK')
