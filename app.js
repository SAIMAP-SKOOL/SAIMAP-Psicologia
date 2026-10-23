// SAIMAP Psicología · interfaz (vanilla JS, sin dependencias)
(function () {
  'use strict';
  const P = window.PsicoEngine, CAT = window.SP_CATALOG;
  const $app = document.getElementById('app');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- iconos ----------
  const I = {
    fire: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 1.7s.7 2.6.7 4.7c0 2-1.3 3.7-3.4 3.7S7.4 8.4 7.4 6.4l.1-.9C5.4 8 4.2 11.2 4.2 14.6 4.2 19 7.7 22.5 12 22.5s7.8-3.5 7.8-7.9c0-5.3-2.5-10-6.3-12.9zM11.7 19.5c-1.6 0-2.9-1.3-2.9-2.8 0-1.5.9-2.5 2.6-2.9 1.7-.3 3.5-1.2 4.5-2.5.4 1.3.6 2.6.6 4 0 2.3-2 4.2-4.8 4.2z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-7-2a2 2 0 0 1 4 0v2h-4z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 3V2H6v1H2v3a5 5 0 0 0 4.4 5A6 6 0 0 0 11 14.9V18H8v3h8v-3h-3v-3.1A6 6 0 0 0 17.6 11 5 5 0 0 0 22 6V3zM4 6V5h2v3.8A3 3 0 0 1 4 6zm16 0a3 3 0 0 1-2 2.8V5h2z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="17" rx="3"/><path d="M8 2.5v4M16 2.5v4M3 10h18"/><path d="m9 15 2 2 4-4"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/><path d="M22 9v6"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
    neuron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5A3 3 0 0 0 6.6 4.2 3 3 0 0 0 4.1 8.5a3.2 3.2 0 0 0 .2 5.6A3 3 0 0 0 7.5 19a3 3 0 0 0 4.5.8z"/><path d="M12 5.5a3 3 0 0 1 5.4-1.3 3 3 0 0 1 2.5 4.3 3.2 3.2 0 0 1-.2 5.6 3 3 0 0 1-3.2 4.9 3 3 0 0 1-4.5.8z"/><path d="M12 5.5v14.3M8.5 9.5c1 0 1.8.6 2.2 1.5M15.5 9.5c-1 0-1.8.6-2.2 1.5M8 15c.9-.2 1.8.1 2.4.8M16 15c-.9-.2-1.8.1-2.4.8"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>',
    sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-9"/><path d="M12 12C12 7 8.5 5 4 5c0 4.5 3 7 8 7zM12 10c0-4 3-6 7-6 0 4-2.5 6-7 6z"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M17.5 14.6c2.2.4 3.6 2 4 4.4"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="11" r="2.5"/><path d="M5.5 17c.6-1.8 1.9-2.6 3.5-2.6s2.9.8 3.5 2.6M15 10h3.5M15 14h3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M12 20.5S3 15 3 8.8A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 9 2.2C21 15 12 20.5 12 20.5z"/><path d="M7 12h2.5l1.5-3 2 6 1.5-3H17"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  const areaOf = id => CAT.areas.find(a => a.id === id) || { ico: 'book', t: '' };
  const courseMeta = id => CAT.courses.find(c => c.id === id);

  // ---------- almacenamiento ----------
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
  };
  let G = Object.assign(P.blankGlobal(), LS.get('sp.g', {}));
  const saveG = () => { LS.set('sp.g', G); queuePush('_global'); };
  const courseState = id => Object.assign(P.blankCourse(), LS.get('sp.c.' + id, {}));
  const saveC = (id, S) => { LS.set('sp.c.' + id, S); queuePush(id); };
  const localCourses = () => { try { return Object.keys(localStorage).filter(k => k.startsWith('sp.c.')).map(k => k.slice(5)); } catch (e) { return []; } };
  function clearLocal() { try { Object.keys(localStorage).filter(k => k.startsWith('sp.c.') || k === 'sp.g').forEach(k => localStorage.removeItem(k)); } catch (e) { } G = Object.assign(P.blankGlobal(), { route: G.route }); LS.set('sp.g', G); }

  // ---------- cuenta SAIMAP (Firebase: Google o correo) y progreso sincronizado ----------
  // Firestore: users/<uid>/psicologia/_global (racha, XP, meta) y users/<uid>/psicologia/<asignatura> (progreso de cada una).
  // Sin Firebase (vista previa o sin conexión) la app funciona igual y guarda el progreso solo en el dispositivo.
  const Cloud = { on: false, ready: false, uid: null, name: '', email: '', photo: '', err: '', auth: null, col: null };
  let pushTimer = 0, dirty = new Set(), formMsg = '';
  function queuePush(id) {
    if (!Cloud.col) return;
    dirty.add(id); clearTimeout(pushTimer); pushTimer = setTimeout(flush, 1200);
  }
  function flush() {
    clearTimeout(pushTimer); if (!Cloud.col || !dirty.size) return Promise.resolve();
    const ids = [...dirty]; dirty = new Set();
    return Promise.all(ids.map(id => Cloud.col.doc(id).set(JSON.parse(JSON.stringify(id === '_global' ? G : courseState(id))))))
      .then(() => { if (Cloud.err) { Cloud.err = ''; refreshAcct(); } }, () => { ids.forEach(i => dirty.add(i)); Cloud.err = 'No se ha podido guardar en tu cuenta. Se reintentará al terminar la próxima lección.'; refreshAcct(); });
  }
  async function pull() {
    const snap = await Cloud.col.get(), remote = {};
    snap.forEach(d => { remote[d.id] = d.data(); });
    const g0 = JSON.stringify(G); G = P.mergeGlobal(G, remote._global || null); LS.set('sp.g', G);
    if (!remote._global || JSON.stringify(G) !== JSON.stringify(P.mergeGlobal(P.blankGlobal(), remote._global)) || g0 !== JSON.stringify(G)) dirty.add('_global');
    for (const id of new Set([...localCourses(), ...Object.keys(remote).filter(k => k !== '_global')])) {
      const loc = courseState(id), m = P.mergeCourse(loc, remote[id] || null); LS.set('sp.c.' + id, m);
      if (!remote[id] || JSON.stringify(m) !== JSON.stringify(P.mergeCourse(P.blankCourse(), remote[id]))) dirty.add(id);
    }
    if (dirty.size) flush();
  }
  function initCloud() {
    const cfg = window.SAIMAP_FIREBASE;
    if (!window.firebase || !cfg || !cfg.apiKey || window.SP_NO_SW) { Cloud.ready = true; return; }
    try {
      firebase.initializeApp(cfg);
      const auth = firebase.auth(), fs = firebase.firestore();
      Cloud.on = true; Cloud.auth = auth; Cloud.fs = fs; auth.languageCode = 'es';
      auth.getRedirectResult().catch(e => { formMsg = authMsg(e); refreshAcct(); });
      auth.onAuthStateChanged(async u => {
        if (u) {
          Object.assign(Cloud, { uid: u.uid, name: u.displayName || '', email: u.email || '', photo: u.photoURL || '' });
          Cloud.col = fs.collection('users').doc(u.uid).collection('psicologia');
          try { await pull(); Cloud.err = ''; } catch (e) { Cloud.err = 'No se ha podido cargar el progreso de tu cuenta.'; }
          if (!L) route(true);
        } else Object.assign(Cloud, { uid: null, col: null, name: '', email: '', photo: '' });
        const first = !Cloud.ready; Cloud.ready = true; refreshAcct();
        if (!u && first && !L) route(true);   // muestra el aviso de iniciar sesión
      });
    } catch (e) { Cloud.on = false; Cloud.ready = true; }
  }
  const authMsg = e => ({ 'auth/invalid-credential': 'Correo o contraseña incorrectos.', 'auth/wrong-password': 'Correo o contraseña incorrectos.', 'auth/user-not-found': 'No hay ninguna cuenta con ese correo.', 'auth/email-already-in-use': 'Ya existe una cuenta con ese correo. Pulsa «Entrar».', 'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.', 'auth/invalid-email': 'Escribe un correo válido.', 'auth/missing-password': 'Escribe la contraseña.', 'auth/popup-closed-by-user': 'Has cerrado la ventana de Google antes de terminar.', 'auth/network-request-failed': 'No hay conexión. Inténtalo de nuevo.', 'auth/too-many-requests': 'Demasiados intentos. Espera un poco y vuelve a probar.', 'auth/account-exists-with-different-credential': 'Ese correo ya tiene cuenta con otro método. Entra con el que usaste la primera vez.' }[e && e.code] || 'No se ha podido iniciar sesión. Inténtalo de nuevo.');
  function google() {
    const p = new firebase.auth.GoogleAuthProvider(); formMsg = '';
    Cloud.auth.signInWithPopup(p).catch(e => { if (e && (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment')) return Cloud.auth.signInWithRedirect(p); formMsg = authMsg(e); refreshAcct(); });
  }
  function emailAuth(create, m, p) { formMsg = ''; Cloud.auth[create ? 'createUserWithEmailAndPassword' : 'signInWithEmailAndPassword'](m, p).catch(e => { formMsg = authMsg(e); refreshAcct(); }); }
  function resetPass(m) {
    if (!/.+@.+\..+/.test(m)) { formMsg = 'Escribe tu correo arriba y vuelve a pulsar «¿Has olvidado la contraseña?».'; return refreshAcct(); }
    Cloud.auth.sendPasswordResetEmail(m).then(() => { formMsg = 'Te hemos enviado un correo a ' + m + ' para crear una contraseña nueva. Mira también en spam.'; refreshAcct(); }, e => { formMsg = authMsg(e); refreshAcct(); });
  }
  function signOut() { flush().catch(() => { }).then(() => Cloud.auth.signOut()).then(() => { clearLocal(); formMsg = ''; refreshAcct(); route(true); }); }
  // Borra la cuenta SAIMAP: el progreso de todas las apps SAIMAP (Psicología y Lingo) y después el usuario.
  async function deleteAccount(pass, msg) {
    const u = Cloud.auth.currentUser; if (!u) return;
    const isPass = u.providerData.some(p => p.providerId === 'password'), isGoogle = u.providerData.some(p => p.providerId === 'google.com');
    msg('Borrando…');
    try {
      if (isPass && !isGoogle) await u.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(u.email, pass || ''));
      else if (isGoogle) await u.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
      clearTimeout(pushTimer); dirty = new Set(); const col = Cloud.col; Cloud.col = null;
      const base = Cloud.fs.collection('users').doc(u.uid);
      for (const name of ['psicologia', 'courses']) { const s = await base.collection(name).get(); await Promise.all(s.docs.map(d => d.ref.delete())); }
      await base.delete(); await u.delete();
      clearLocal(); formMsg = 'Tu cuenta y tu progreso se han borrado.'; return true;
    } catch (e) {
      if (Cloud.uid && !Cloud.col) Cloud.col = Cloud.fs.collection('users').doc(Cloud.uid).collection('psicologia');
      msg(e && (e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential' || e.code === 'auth/missing-password') ? 'La contraseña no es correcta.' : e && e.code === 'auth/popup-closed-by-user' ? 'Has cerrado la ventana de Google sin confirmar.' : e && e.code === 'auth/requires-recent-login' ? 'Por seguridad, cierra sesión, vuelve a entrar y repite el borrado.' : 'No se ha podido borrar la cuenta. Comprueba la conexión e inténtalo de nuevo.');
      return false;
    }
  }
  let acctBox = null;   // tarjeta de cuenta abierta en Ajustes (se repinta al cambiar el estado)
  function refreshAcct() { if (acctBox && document.body.contains(acctBox)) paintAcct(acctBox); }
  function paintAcct(box) {
    if (!Cloud.on) { box.innerHTML = `<h3>Cuenta</h3><p class="small">${Cloud.ready ? 'Aquí no se pueden usar cuentas: el progreso se guarda solo en este dispositivo.' : 'Conectando…'}</p>`; return; }
    if (!Cloud.uid) {
      box.innerHTML = `<h3>Inicia sesión</h3><p class="small">Guarda tu progreso en tu cuenta SAIMAP y continúa en cualquier dispositivo. Es opcional: sin cuenta, el progreso se queda en este dispositivo.</p>
        <button class="btn gbtn" data-a="google"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.8-5.5 3.8-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.2 14.6 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12s4.4 9.8 9.8 9.8c5.7 0 9.4-4 9.4-9.6 0-.6-.1-1.1-.2-1.6H12z"/></svg>Continuar con Google</button>
        <form class="form" id="mailform" novalidate><input id="email" type="email" autocomplete="email" placeholder="Correo electrónico" aria-label="Correo electrónico"><input id="pass" type="password" autocomplete="current-password" placeholder="Contraseña (mínimo 6 caracteres)" aria-label="Contraseña">
        <div class="two"><button class="btn plain" type="submit">Entrar</button><button class="btn plain" type="button" data-a="signup">Crear cuenta</button></div>
        <button class="linkbtn" type="button" data-a="reset">¿Has olvidado la contraseña?</button></form>${formMsg ? `<p class="msg" aria-live="polite">${esc(formMsg)}</p>` : ''}`;
      const val = () => [box.querySelector('#email').value.trim(), box.querySelector('#pass').value];
      box.querySelector('#mailform').onsubmit = e => { e.preventDefault(); const [m, p] = val(); emailAuth(false, m, p); };
    } else {
      box.innerHTML = `<h3>Tu cuenta</h3><div class="who"><span class="av">${Cloud.photo ? `<img alt="" src="${esc(Cloud.photo)}" referrerpolicy="no-referrer">` : esc((Cloud.name || Cloud.email || '?')[0].toUpperCase())}</span><div><b>${esc(Cloud.name || Cloud.email)}</b><small>${Cloud.name && Cloud.email ? esc(Cloud.email) + ' · ' : ''}progreso sincronizado</small></div></div>
        ${Cloud.err ? `<p class="msg err">${esc(Cloud.err)}</p>` : ''}<button class="btn plain" data-a="signout">Cerrar sesión</button><button class="linkbtn danger" data-a="askdel">Borrar mi cuenta</button>`;
    }
    box.onclick = e => {
      const b = e.target.closest('[data-a]'); if (!b) return; const a = b.dataset.a;
      if (a === 'google') google();
      else if (a === 'signup') { const m = box.querySelector('#email').value.trim(), p = box.querySelector('#pass').value; emailAuth(true, m, p); }
      else if (a === 'reset') resetPass(box.querySelector('#email').value.trim());
      else if (a === 'signout') signOut();
      else if (a === 'askdel') askDelete();
    };
  }
  function askDelete() {
    const u = Cloud.auth.currentUser; if (!u) return;
    const needPass = u.providerData.some(p => p.providerId === 'password') && !u.providerData.some(p => p.providerId === 'google.com');
    const sh = sheet(`<h2>¿Borrar tu cuenta?</h2><p class="sub">Se borran tu cuenta SAIMAP y todo tu progreso, en la nube y en este dispositivo (también el de SAIMAP Lingo, si lo usas con la misma cuenta). No se puede deshacer.</p>
      ${needPass ? '<input id="delpass" class="field" type="password" autocomplete="current-password" placeholder="Tu contraseña, para confirmar" aria-label="Contraseña">' : '<p class="small">Te pediremos confirmar con tu cuenta de Google.</p>'}
      <p class="msg" id="delmsg" aria-live="polite"></p><button class="btn warn" id="delgo">Borrar mi cuenta</button><button class="btn plain" data-x>Cancelar</button>`);
    sh.el.querySelector('[data-x]').onclick = sh.close;
    sh.el.querySelector('#delgo').onclick = async ev => {
      ev.target.disabled = true;
      const ok = await deleteAccount((sh.el.querySelector('#delpass') || {}).value, t => { sh.el.querySelector('#delmsg').textContent = t; });
      if (ok) { sh.close(); route(); } else ev.target.disabled = false;
    };
  }
  const prefs = Object.assign({ theme: 'auto' }, LS.get('sp.prefs', {}));
  const applyTheme = () => { if (prefs.theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', prefs.theme); };
  applyTheme();

  // ---------- cursos (se cargan bajo demanda) ----------
  const COURSES = {}, ENGINES = {};
  window.SP = { register(c) { COURSES[c.id] = c; } };
  function loadCourse(id) {
    if (COURSES[id]) return Promise.resolve(COURSES[id]);
    return new Promise((ok, ko) => { const s = document.createElement('script'); s.src = 'cursos/' + id + '.js'; s.onload = () => COURSES[id] ? ok(COURSES[id]) : ko(new Error('curso vacío')); s.onerror = () => ko(new Error('no se pudo cargar')); document.head.appendChild(s); });
  }
  const engine = id => ENGINES[id] || (ENGINES[id] = P.Engine(COURSES[id]));

  // ---------- utilidades de vista ----------
  const stars = n => '<div class="stars">' + [1, 2, 3].map(i => I.star.replace('<svg', '<svg class="' + (i <= n ? 'on' : '') + '"')).join('') + '</div>';
  function topbar(left) {
    const s = P.liveStreak(G);
    return `<header class="top">${left || `<div class="brand"><span class="logo" aria-hidden="true">Ψ</span><span>SAIMAP <i>Psicología</i></span></div>`}
      <span class="stat fire ${s ? 'lit' : ''}" title="Racha de días">${I.fire}${s}</span>
      <span class="stat xp" title="Puntos de experiencia">${I.bolt}${G.xp}</span>
      <button class="iconbtn" data-act="settings" aria-label="Ajustes">${I.gear}</button></header>`;
  }
  function sheet(html, onClose) {
    const v = document.createElement('div'); v.className = 'veil';
    v.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
    v.addEventListener('click', e => { if (e.target === v) close(); });
    const close = () => { v.remove(); onClose && onClose(); };
    document.body.appendChild(v);
    return { el: v.querySelector('.sheet'), close };
  }
  function greet() { const h = new Date().getHours(); return h < 6 ? 'Buenas noches' : h < 14 ? 'Buenos días' : h < 21 ? 'Buenas tardes' : 'Buenas noches'; }
  const scrollTop = () => window.scrollTo(0, 0);

  // ---------- ajustes ----------
  function openSettings() {
    const sh = sheet(`<h2>Ajustes</h2>
      <div class="acct"></div>
      <div class="setrow"><span>Tema</span><div class="seg">${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Oscuro']].map(([k, t]) => `<button data-th="${k}" class="${prefs.theme === k ? 'on' : ''}">${t}</button>`).join('')}</div></div>
      <div class="setrow"><span>Meta diaria</span><div class="seg">${[20, 30, 50].map(n => `<button data-goal="${n}" class="${G.goal === n ? 'on' : ''}">${n} XP</button>`).join('')}</div></div>
      <button class="btn plain" data-route>Cambiar de ruta</button>
      <button class="btn plain" data-reset>Borrar mi progreso</button>
      <p class="small"><a href="privacidad.html">Política de privacidad</a> · <a href="borrar-cuenta.html">Borrar la cuenta</a></p>
      <p class="small">SAIMAP Psicología tiene una finalidad exclusivamente educativa y no sustituye la evaluación ni el consejo de un profesional sanitario. Proyecto independiente, no vinculado a ninguna universidad.</p>
      <button class="btn" data-close>Cerrar</button>`, () => { acctBox = null; });
    acctBox = sh.el.querySelector('.acct'); paintAcct(acctBox);
    sh.el.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || b.closest('.acct')) return;
      if (b.dataset.th) { prefs.theme = b.dataset.th; LS.set('sp.prefs', prefs); applyTheme(); sh.el.querySelectorAll('[data-th]').forEach(x => x.classList.toggle('on', x === b)); }
      else if (b.dataset.goal) { G.goal = +b.dataset.goal; saveG(); sh.el.querySelectorAll('[data-goal]').forEach(x => x.classList.toggle('on', x === b)); }
      else if (b.hasAttribute('data-route')) { sh.close(); showWelcome(); }
      else if (b.hasAttribute('data-reset')) {
        if (b.dataset.sure) {
          clearLocal(); dirty = new Set();
          if (Cloud.col) { const col = Cloud.col; col.get().then(snap => Promise.all(snap.docs.map(d => d.ref.delete()))).then(() => queuePush('_global'), () => { Cloud.err = 'No se ha podido borrar el progreso de tu cuenta.'; }); }
          sh.close(); route();
        }
        else { b.dataset.sure = 1; b.textContent = 'Pulsa otra vez para confirmar'; b.classList.replace('plain', 'warn'); }
      }
      else if (b.hasAttribute('data-close')) sh.close();
    });
  }
  $app.addEventListener('click', e => { if (e.target.closest('[data-act="settings"]')) openSettings(); });

  // ---------- bienvenida: elegir ruta ----------
  function showWelcome() {
        $app.innerHTML = `<section class="welcome">
      <div class="mascot-hi">${window.psique ? psique('wow') : ''}<p class="bubble">¡Hola! Soy <b>Psique</b>. En griego, <i>psyché</i> significa «alma» y también «mariposa»: por eso la psicología lleva una Ψ.</p></div>
      <h1>¿Qué quieres hacer?</h1>
      <p>Elige una ruta. Puedes cambiarla cuando quieras: tu progreso se guarda en cada asignatura y cuenta en todas las rutas.</p>
      ${CAT.routes.map(r => `<button class="rcard" data-r="${r.id}"><span class="cico">${I[r.ico]}</span><span><b>${esc(r.t)}</b><small>${esc(r.sub)}</small></span></button>`).join('')}
    </section>`;
    $app.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { G.route = b.dataset.r; saveG(); go('#/'); });
    scrollTop();
  }

  // ---------- inicio ----------
  function courseCard(id, extra) {
    const m = courseMeta(id); if (!m) return '';
    const a = areaOf(m.area);
    if (m.estado !== 'ok') return `<div class="ccard soon"><span class="cico">${I[a.ico]}</span><div><b>${esc(m.t)}</b><small>${esc(a.t)}</small></div><span class="pill">Pronto</span></div>`;
    const S = courseState(id), done = Object.keys(S.done).length, tot = (m.units || 16) * 5, pct = Math.round(100 * done / tot);
    return `<button class="ccard c${m.color || 1}" data-c="${id}"><span class="cico">${I[a.ico]}</span><div><b>${esc(m.t)}</b>
      <div class="meter" aria-label="Progreso ${pct} %"><i style="width:${pct}%"></i></div><small>${pct ? pct + ' % completado' : 'Sin empezar'} · ${esc(a.t)}</small></div>${extra || ''}</button>`;
  }
  function showHome() {
    if (!G.route) return showWelcome();
    const r = CAT.routes.find(x => x.id === G.route) || CAT.routes[0];
    const xpToday = P.todayXp(G), goal = G.goal || 30;
    let body = '';
    if (r.groups) {
      body = r.groups.map(gr => {
        const ok = gr.courses.filter(c => (courseMeta(c) || {}).estado === 'ok').length;
        return `<section class="group"><h2>${esc(gr.t)}<small>${ok} de ${gr.courses.length} disponibles</small></h2>
          ${gr.courses.map(c => courseCard(c, r.id === 'pir' && c === 'bases-biologicas' ? '<span class="pill pir">PIR</span>' : '')).join('')}</section>`;
      }).join('');
    } else {
      body = CAT.areas.map(a => {
        const cs = CAT.courses.filter(c => c.area === a.id).sort((x, y) => (x.estado === 'ok' ? 0 : 1) - (y.estado === 'ok' ? 0 : 1));
        return cs.length ? `<section class="group"><h2>${esc(a.t)}</h2>${cs.map(c => courseCard(c.id)).join('')}</section>` : '';
      }).join('');
    }
    // repaso del día: con el curso empezado más reciente
    const started = CAT.courses.filter(c => c.estado === 'ok').map(c => [c.id, courseState(c.id)]).filter(([, S]) => Object.keys(S.it).length).sort((a, b) => b[1].t - a[1].t);
    let daily = '';
    if (started.length) {
      const [cid, S] = started[0], dd = S.dr === P.dayStr();
      daily = `<button class="daily ${dd ? 'done' : ''}" data-daily="${cid}"><span class="dico">${I.cal}</span><div><b>${dd ? 'Repaso del día hecho' : 'Repaso del día'}</b><p>${esc(courseMeta(cid).t)} · ${dd ? 'Puedes repetirlo cuando quieras' : '20 preguntas de lo que ya has visto, empezando por lo más flojo'}</p></div></button>`;
    }
    $app.innerHTML = topbar() + `
      <section class="hero"><span class="mascot">${window.psique ? psique(xpToday >= goal ? 'wow' : 'happy') : 'Ψ'}</span><div><h1>${greet()}</h1><p>${xpToday >= goal ? '¡Meta diaria conseguida!' : 'Unos minutos al día bastan para avanzar.'}</p>
      <div class="goal"><div class="meter"><i style="width:${Math.min(100, Math.round(100 * xpToday / goal))}%"></i></div><span>${xpToday} / ${goal} XP hoy</span></div></div></section>
      ${daily}
      ${Cloud.on && Cloud.ready && !Cloud.uid ? `<div class="notice"><span>Inicia sesión para guardar tu progreso en tu cuenta y usarlo en cualquier dispositivo.</span><button class="btn plain sm" data-act="settings">Entrar</button></div>` : ''}
      <nav class="tabs" aria-label="Rutas">${CAT.routes.map(x => `<button class="tab ${x.id === r.id ? 'on' : ''}" data-tab="${x.id}">${I[x.ico]}${esc(x.t)}</button>`).join('')}</nav>
      ${body}
      <footer class="foot"><span>Contenido original de SAIMAP, basado en el consenso científico actual.</span><span>Finalidad educativa: no sustituye la atención de un profesional.</span><a href="privacidad.html">Privacidad</a></footer>`;
    $app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { G.route = b.dataset.tab; saveG(); showHome(); });
    $app.querySelectorAll('[data-c]').forEach(b => b.onclick = () => go('#/c/' + b.dataset.c));
    $app.querySelectorAll('[data-daily]').forEach(b => b.onclick = () => startDaily(b.dataset.daily));
  }

  // ---------- curso ----------
  async function showCourse(id) {
    $app.innerHTML = topbar(`<button class="iconbtn" data-home aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px">Cargando…</div>`);
    try { await loadCourse(id); } catch (e) { $app.innerHTML = topbar() + `<p class="empty-note">No se ha podido cargar el curso. Comprueba la conexión y vuelve a intentarlo.</p>`; return; }
    const C = COURSES[id], E = engine(id), S = courseState(id), pr = E.progress(S), nx = E.nextUp(S);
    const weak = E.weakItems(S).length;
    let html = topbar(`<button class="iconbtn" data-home aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px;min-width:0"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(C.short || C.title)}</span></div>`);
    html += `<section class="chead"><h1>${esc(C.title)}</h1><div class="meter"><i style="width:${pr.pct}%"></i></div>
      <small>${pr.done} de ${pr.total} lecciones · ${pr.pct} %</small>
      <div class="row">${C.temario ? `<a class="chip" href="temarios/${esc(C.temario)}" target="_blank" rel="noopener">${I.book}Temario</a>` : ''}
      ${weak ? `<button class="chip" data-weak>${I.redo}Repasar fallos (${weak})</button>` : ''}</div></section>`;
    let flip = false;
    for (const cap of C.capitulos) {
      html += `<div class="cap"><b>CAP. ${cap.n}</b><h2>${esc(cap.t)}</h2></div>`;
      for (let n = cap.from; n <= cap.to; n++) {
        const u = C.units[n - 1]; if (!u) continue;
        const open = E.unlocked(S, n, 1), col = 1 + ((n - 1) % 5);
        const sc = window.SP_SCENES && window.SP_SCENES[id] ? window.SP_SCENES[id](n) : null;
        html += `<section class="unit c${col} ${flip ? 'flip' : ''}" id="u${n}"><div class="uhead ${open ? '' : 'locked'}"><span class="badge">${n}</span><div><small>Unidad ${n}${u.pir ? `<span class="pirtag">PIR ${esc(u.pir)}</span>` : ''}</small><h2>${esc(u.t)}</h2></div></div>` +
          (sc ? `<div class="path scn" data-road="${sc.road}" style="--tint:${sc.tint}"><div class="scene">${sc.svg}</div><svg class="road" aria-hidden="true"></svg>` : `<div class="path">`);
        for (let m = 1; m <= 5; m++) {
          const id2 = E.modId(n, m), d = S.done[id2], op = E.unlocked(S, n, m), now = nx && nx.u === n && nx.m === m;
          const t = m <= 4 ? u.mods[m - 1].t : 'Repaso de la unidad';
          html += `<button class="node ${d ? 'done' : op ? 'open' : 'shut'} ${now ? 'now' : ''}" data-u="${n}" data-m="${m}" ${op ? '' : 'aria-disabled="true"'}>
            <span class="disc">${d ? (m === 5 ? I.trophy : I.check) : op ? (m === 5 ? I.trophy : I.play) : I.lock}</span><b>${esc(t)}</b>${d ? stars(d.s) : ''}</button>`;
        }
        html += `</div></section>`; flip = !flip;
      }
    }
    html += `<footer class="foot"><span>${E.ITEMS.length} preguntas en ${C.units.length} unidades.</span><span>Ilustraciones y fuentes: consulta el temario.</span></footer>`;
    $app.innerHTML = html;
    $app.querySelector('[data-home]').onclick = () => go('#/');
    const wb = $app.querySelector('[data-weak]'); if (wb) wb.onclick = () => startLesson(id, 0, 0, 'weak');
    $app.querySelectorAll('.node').forEach(b => b.onclick = () => openNode(id, +b.dataset.u, +b.dataset.m));
    drawRoads();
    const target = nx ? document.getElementById('u' + nx.u) : null;
    if (target && nx.u > 1) target.scrollIntoView({ block: 'start' }); else scrollTop();
  }
  function openNode(id, u, m) { go('#/c/' + id + '/t/' + u + '/' + m); }

  // ---------- teoría: el apartado íntegro del temario antes de cada lección ----------
  const THEORY = {};
  function loadTheory(id, u) {
    const k = id + '/' + u;
    if (!THEORY[k]) THEORY[k] = fetch('teoria/' + id + '/u' + String(u).padStart(2, '0') + '.json').then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).catch(e => { delete THEORY[k]; throw e; });
    return THEORY[k];
  }
  async function showTheory(id, u, m) {
    $app.innerHTML = topbar(`<button class="iconbtn" data-back aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px">Cargando…</div>`);
    try { await loadCourse(id); } catch (e) { $app.innerHTML = topbar() + `<p class="empty-note">No se ha podido cargar el curso. Comprueba la conexión y vuelve a intentarlo.</p>`; return; }
    const C = COURSES[id], E = engine(id), S = courseState(id), unit = C.units[u - 1];
    if (!unit || m < 1 || m > 5) return go('#/c/' + id);
    const info = m <= 4 ? E.modInfo(u, m) : null, op = E.unlocked(S, u, m), d = S.done[E.modId(u, m)];
    const col = 1 + ((u - 1) % 5);
    $app.innerHTML = topbar(`<button class="iconbtn" data-back aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px;min-width:0"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(C.short || C.title)}</span></div>`) +
      `<article class="theory c${col}"><header class="thead"><small>Unidad ${u} · ${m <= 4 ? 'Lección ' + m + ' de 4' : 'Repaso'}</small>
        <h1>${esc(m <= 4 ? u + '.' + m + ' ' + info.t : 'Cierre de la unidad ' + u)}</h1>
        ${m === 5 ? `<p class="sub">${esc(unit.t)}. Antes del repaso, los recuadros finales del tema: ejemplos, consenso y debate, mitos, conceptos clave y la clave PIR.</p>` : ''}
        ${!op ? `<p class="sub">Termina la lección anterior para desbloquear esta. Puedes leer el temario y practicarla igualmente.</p>` : ''}
        ${d ? `<p class="sub">Mejor resultado: ${'★'.repeat(d.s)}${'☆'.repeat(3 - d.s)} · Hecha ${d.n} ${d.n === 1 ? 'vez' : 'veces'}</p>` : ''}
        <button class="skip" data-go>${I.play}Ir directamente a los ejercicios</button></header>
        <div class="tbody" aria-busy="true"><p class="sub">Cargando el temario…</p></div></article>
      <div class="tbar"><button class="btn" data-go>${d ? 'Repetir la lección' : m === 5 ? 'Empezar el repaso' : op ? 'Empezar la lección' : 'Practicar igualmente'}</button></div>`;
    $app.querySelector('[data-back]').onclick = () => go('#/c/' + id);
    $app.querySelectorAll('[data-go]').forEach(b => b.onclick = () => startLesson(id, u, m));
    scrollTop();
    const body = $app.querySelector('.tbody');
    try {
      const T = await loadTheory(id, u);
      if (!body.isConnected) return;
      const h = m <= 4 ? T.m[m - 1] : T.c;
      body.innerHTML = h || (m <= 4 ? `<div class="tip"><b>La idea clave</b>${esc(info.tip)}</div>` : '<p class="sub">Esta unidad no tiene recuadros finales.</p>');
    } catch (e) {
      if (!body.isConnected) return;
      body.innerHTML = (m <= 4 ? `<div class="tip"><b>La idea clave</b>${esc(info.tip)}</div>` : '') + `<p class="sub">No se ha podido cargar el temario de este apartado. Comprueba la conexión; también puedes abrir el PDF desde la página del curso.</p>`;
    }
    body.removeAttribute('aria-busy');
    body.querySelectorAll('figure img').forEach(im => im.onclick = () => { const s = sheet(`<img class="zoom" src="${im.getAttribute('src')}" alt=""><button class="btn plain" data-x>Cerrar</button>`); s.el.querySelector('[data-x]').onclick = s.close; });
  }

  // ---------- caminos sobre los escenarios (como en SAIMAP Lingo) ----------
  function drawRoads() {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.path.scn').forEach(p => {
      const r = p.getBoundingClientRect(), sv = p.querySelector('svg.road');
      if (!r.width) return;
      const pts = [...p.querySelectorAll('.node')].map(n => { const b = n.getBoundingClientRect(); return [b.left + b.width / 2 - r.left, b.top + 34 - r.top]; });
      if (!pts.length) return;
      pts.unshift([pts[0][0], -10]); pts.push([pts[pts.length - 1][0], r.height + 10]);
      let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
      for (let i = 0; i < pts.length - 1; i++) {   // Catmull-Rom → Bézier
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += ' C' + c1.map(v => v.toFixed(1)).join(' ') + ' ' + c2.map(v => v.toFixed(1)).join(' ') + ' ' + p2.map(v => v.toFixed(1)).join(' ');
      }
      sv.setAttribute('viewBox', '0 0 ' + r.width + ' ' + r.height);
      const kind = p.dataset.road, R = window.SP_ROADS || {};
      sv.innerHTML = (R[kind] || R.ink)(d);
      const pc = (window.SP_ROAD_PULSE || {})[kind];
      if (pc && !still) sv.insertAdjacentHTML('beforeend', `<circle r="7" fill="${pc}" opacity=".9"><animateMotion dur="5s" repeatCount="indefinite" path="${d}"/></circle>`);
    });
  }
  let rzT; window.addEventListener('resize', () => { clearTimeout(rzT); rzT = setTimeout(drawRoads, 120); });

  // ---------- lección ----------
  let L = null;   // estado de la lección en curso
  async function startDaily(id) { await loadCourse(id); startLesson(id, 0, 0, 'daily'); }
  function startLesson(id, u, m, mode) {
    const E = engine(id), S = courseState(id);
    const ex = mode === 'daily' ? E.genDaily(S) : mode === 'weak' ? E.genWeak(S) : E.gen(S, u, m);
    if (!ex.length) { sheet(`<h2>Aún no hay suficiente</h2><p class="sub">Haz alguna lección más y vuelve.</p><button class="btn" onclick="this.closest('.veil').remove()">Vale</button>`); return; }
    L = { id, u, m, mode, E, S, queue: ex.slice(), total: ex.length, done: 0, ok: 0, firstTry: 0, retried: new Set(), start: Date.now() };
    renderEx();
  }
  function quitLesson() {
    const sh = sheet(`<h2>¿Salir de la lección?</h2><p class="sub">Perderás el progreso de esta lección.</p><button class="btn warn" data-q>Salir</button><button class="btn plain" data-s>Seguir aprendiendo</button>`);
    sh.el.querySelector('[data-q]').onclick = () => { sh.close(); L = null; route(); };
    sh.el.querySelector('[data-s]').onclick = sh.close;
  }
  const KIND = { match: 'Empareja', cd: '¿Qué significa?', dc: '¿Qué concepto es?', type: 'Escribe el concepto', gap: 'Completa la frase', tf: 'Verdadero o falso', q: 'Elige la respuesta', inc: 'Elige la INCORRECTA', seq: 'Ordena', cls: 'Clasifica' };
  function renderEx() {
    const ex = L.queue[0];
    if (!ex) return showResult();
    const pct = Math.round(100 * L.done / (L.total + L.retried.size));
    $app.innerHTML = `<div class="lesson"><div class="lbar"><button class="x" data-quit aria-label="Salir">${I.x}</button><div class="meter"><i style="width:${pct}%"></i></div></div>
      <div class="stage"><div class="kind">${KIND[ex.type]}${ex.review ? '<span class="rv">Repaso</span>' : ''}</div><div id="body"></div></div>
      <div class="checkbar" id="bar"><button class="btn" id="chk" disabled>Comprobar</button></div></div>`;
    $app.querySelector('[data-quit]').onclick = quitLesson;
    const body = $app.querySelector('#body'), chk = $app.querySelector('#chk');
    const R = RENDER[ex.type](ex, body, chk);
    chk.onclick = () => { if (!chk.disabled) { const res = R.check(); feedback(ex, res); } };
    scrollTop();
  }
  function options(ex, body, chk, labels) {
    const keys = 'ABCD';
    body.insertAdjacentHTML('beforeend', `<div class="choice">${ex.options.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${keys[i]}</span><span>${esc(labels ? labels(o) : o)}</span></button>`).join('')}</div>`);
    let sel = -1;
    const btns = body.querySelectorAll('.opt');
    btns.forEach(b => b.onclick = () => { if (b.disabled) return; sel = +b.dataset.i; btns.forEach(x => x.classList.toggle('sel', x === b)); chk.disabled = false; });
    return {
      check() {
        const ok = ex.options[sel] === ex.answer;
        btns.forEach(b => { b.disabled = true; const o = ex.options[+b.dataset.i]; if (o === ex.answer) b.classList.add('right'); else if (+b.dataset.i === sel) b.classList.add('wrong'); b.classList.remove('sel'); });
        return { ok };
      }
    };
  }
  const RENDER = {
    cd(ex, body, chk) { body.innerHTML = `<p class="prompt">${esc(ex.prompt)}</p>`; return options(ex, body, chk); },
    dc(ex, body, chk) { body.innerHTML = `<p class="prompt def">${esc(ex.prompt)}</p>`; return options(ex, body, chk); },
    gap(ex, body, chk) {
      const [a, b] = ex.item.q.split('___');
      body.innerHTML = `<p class="prompt def">${esc(a)}<span class="gapw" id="gw">&nbsp;</span>${esc(b || '')}</p>`;
      const r = options(ex, body, chk), gw = body.querySelector('#gw');
      body.querySelectorAll('.opt').forEach(btn => btn.addEventListener('click', () => { gw.textContent = ex.options[+btn.dataset.i]; }));
      return r;
    },
    q(ex, body, chk) { body.innerHTML = `<p class="prompt def">${esc(ex.item.q)}</p>`; return options(ex, body, chk); },
    inc(ex, body, chk) { body.innerHTML = `<p class="prompt def">${esc(ex.item.q.replace(/[\s,;:.]*(¿\s*cu[aá]l es (la )?incorrecta\s*\??|se[ñn]ala la incorrecta\.?)\s*$/i, '').replace(/[,;:]\s*$/, ''))}, ¿qué afirmación es <u>incorrecta</u>?</p><p class="sub">Dos opciones son correctas. Marca la que no lo es.</p>`; return options(ex, body, chk); },
    tf(ex, body, chk) {
      body.innerHTML = `<p class="prompt stmt">${esc(ex.item.q)}</p><div class="tfrow"><button class="opt" data-v="V">Verdadero</button><button class="opt" data-v="F">Falso</button><button class="opt ns" data-v="?">No lo sé</button></div>`;
      let sel = null; const btns = body.querySelectorAll('.opt');
      btns.forEach(b => b.onclick = () => { if (b.disabled) return; sel = b.dataset.v; btns.forEach(x => x.classList.toggle('sel', x === b)); chk.disabled = false; });
      return { check() { const ok = sel === ex.answer; btns.forEach(b => { b.disabled = true; b.classList.remove('sel'); if (b.dataset.v === ex.answer) b.classList.add('right'); else if (b.dataset.v === sel) b.classList.add('wrong'); }); return { ok, unsure: sel === '?' }; } };
    },
    type(ex, body, chk) {
      body.innerHTML = `<p class="prompt def">${esc(ex.prompt)}</p><input class="typein" id="ti" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe el concepto" aria-label="Tu respuesta"><p class="small">Empieza por «${esc(ex.answer.slice(0, 1))}» · ${ex.answer.split(/\s+/).length} ${ex.answer.split(/\s+/).length === 1 ? 'palabra' : 'palabras'}</p>`;
      const ti = body.querySelector('#ti'); ti.focus();
      ti.oninput = () => { chk.disabled = !ti.value.trim(); };
      ti.onkeydown = e => { if (e.key === 'Enter' && ti.value.trim()) chk.click(); };
      return { check() { ti.disabled = true; const r = P.checkType(ex, ti.value); return { ok: r !== 'no', accent: r === 'accent' }; } };
    },
    match(ex, body, chk) {
      const items = ex.items, cs = P.shuffle(items), ds = P.shuffle(items);
      body.innerHTML = `<div class="match"><p class="sub">Toca un concepto y luego su definición.</p><div class="mchips">${cs.map(i => `<button class="mchip" data-k="${i.k}">${esc(i.c)}</button>`).join('')}</div><div class="mdefs">${ds.map(i => `<button class="mdef" data-k="${i.k}">${esc(i.d)}</button>`).join('')}</div></div>`;
      let a = null, b = null, errors = 0, left = items.length; const miss = new Set();
      const tryPair = () => {
        if (!a || !b) return;
        const ea = body.querySelector(`.mchip[data-k="${a}"]`), eb = body.querySelector(`.mdef[data-k="${b}"]`);
        if (a === b) { ea.classList.add('gone'); eb.classList.add('gone'); ea.disabled = eb.disabled = true; left--; P.record(L.S, a, !miss.has(a)); }
        else { errors++; miss.add(a); [ea, eb].forEach(x => { x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 450); }); }
        ea.classList.remove('sel'); eb.classList.remove('sel'); a = b = null;
        if (!left) { chk.disabled = false; chk.textContent = 'Continuar'; }
      };
      body.querySelectorAll('.mchip').forEach(x => x.onclick = () => { if (x.disabled) return; body.querySelectorAll('.mchip').forEach(y => y.classList.toggle('sel', y === x)); a = x.dataset.k; tryPair(); });
      body.querySelectorAll('.mdef').forEach(x => x.onclick = () => { if (x.disabled) return; body.querySelectorAll('.mdef').forEach(y => y.classList.toggle('sel', y === x)); b = x.dataset.k; tryPair(); });
      return { check() { return { ok: errors === 0, recorded: true, silent: true }; } };
    },
    seq(ex, body, chk) {
      body.innerHTML = `<p class="prompt">${esc(ex.item.q)}</p><p class="sub">Toca los pasos en el orden correcto. Toca uno colocado para quitarlo.</p><div class="slots" id="sl"><p class="empty">Aquí irá tu secuencia</p></div><div class="bank">${ex.bank.map((s, i) => `<button class="step" data-i="${i}">${esc(s)}</button>`).join('')}</div>`;
      const chosen = [], sl = body.querySelector('#sl');
      const draw = () => {
        sl.innerHTML = chosen.length ? chosen.map((i, n) => `<button class="step" data-c="${n}"><i>${n + 1}</i>${esc(ex.bank[i])}</button>`).join('') : '<p class="empty">Aquí irá tu secuencia</p>';
        body.querySelectorAll('.bank .step').forEach(b => b.classList.toggle('used', chosen.includes(+b.dataset.i)));
        sl.querySelectorAll('[data-c]').forEach(b => b.onclick = () => { if (sl.dataset.lock) return; chosen.splice(+b.dataset.c, 1); draw(); });
        chk.disabled = chosen.length !== ex.bank.length;
      };
      body.querySelectorAll('.bank .step').forEach(b => b.onclick = () => { if (sl.dataset.lock || chosen.includes(+b.dataset.i)) return; chosen.push(+b.dataset.i); draw(); });
      return { check() { sl.dataset.lock = 1; const got = chosen.map(i => ex.bank[i]), ok = P.checkSeq(ex, got); sl.querySelectorAll('.step').forEach((b, n) => b.classList.add(got[n] === ex.answer[n] ? 'right' : 'wrong')); return { ok }; } };
    },
    cls(ex, body, chk) {
      body.innerHTML = `<p class="prompt">${esc(ex.item.q)}</p><p class="sub">¿A qué categoría pertenece cada elemento?</p><div id="cur"></div><div class="cats">${ex.cats.map((c, i) => `<button class="cat" data-i="${i}"><b>${esc(c)}</b></button>`).join('')}</div>`;
      let n = 0, errors = 0; const cur = body.querySelector('#cur'), cats = body.querySelectorAll('.cat');
      const show = () => { cur.innerHTML = n < ex.cards.length ? `<div class="card1">${esc(ex.cards[n].t)}</div><p class="small" style="text-align:center;margin-top:8px">${n + 1} de ${ex.cards.length}</p>` : `<p class="sub" style="text-align:center">¡Todo clasificado!</p>`; };
      show();
      cats.forEach(b => b.onclick = () => {
        if (n >= ex.cards.length) return;
        const card = ex.cards[n], right = ex.cats.indexOf(card.cat), okk = +b.dataset.i === right;
        if (!okk) { errors++; b.classList.add('flash'); setTimeout(() => b.classList.remove('flash'), 400); }
        cats[right].insertAdjacentHTML('beforeend', `<span class="${okk ? '' : 'bad'}">${esc(card.t)}</span>`);
        n++; show(); if (n >= ex.cards.length) chk.disabled = false;
      });
      return { check() { return { ok: errors === 0, errors }; } };
    }
  };
  function feedback(ex, res) {
    const bar = $app.querySelector('#bar');
    if (!res.recorded && ex.item) P.record(L.S, ex.item.k, res.ok);
    if (res.ok) L.ok++;
    L.done++;
    // un fallo vuelve una vez al final de la lección
    if (!res.ok && ex.type !== 'match' && !ex.retry) { const again = L.E.build(ex.item, ex.type === 'cd' || ex.type === 'dc' || ex.type === 'type' ? 'cd' : ex.type, true); again.retry = true; L.retried.add(again); L.queue.push(again); }
    L.queue.shift();
    if (res.silent) { saveC(L.id, L.S); return renderEx(); }
    let detail = '';
    const it = ex.item;
    if (ex.type === 'cd' || ex.type === 'dc' || ex.type === 'type') detail = `<b>${esc(it.c)}</b>: ${esc(it.d)}`;
    else if (ex.type === 'gap') detail = res.ok ? '' : `${esc(it.q.replace('___', '«' + it.a + '»'))}`;
    else if (ex.type === 'tf') detail = (it.a ? 'Es <b>verdadera</b>.' : 'Es <b>falsa</b>. ') + (it.why ? ' ' + esc(it.why) : '');
    else if (ex.type === 'q' || ex.type === 'inc') detail = (res.ok ? '' : `${ex.type === 'inc' ? 'La incorrecta era' : 'Respuesta'}: <b>${esc(it.a)}</b>. `) + esc(it.why);
    else if (ex.type === 'seq') detail = res.ok ? '' : 'Orden correcto: ' + it.steps.map((s, i) => `${i + 1}. ${esc(s)}`).join(' · ');
    else if (ex.type === 'cls') detail = res.ok ? '' : `${res.errors} ${res.errors === 1 ? 'elemento mal colocado' : 'elementos mal colocados'}; están marcados en rojo en su categoría correcta.`;
    const title = res.ok ? (res.accent ? '¡Bien! Ojo con las tildes' : ['¡Correcto!', '¡Muy bien!', '¡Exacto!', '¡Eso es!'][Math.floor(Math.random() * 4)]) : res.unsure ? 'Sin problema: así se aprende' : 'No exactamente';
    bar.className = 'checkbar ' + (res.ok ? 'ok' : 'no');
    bar.innerHTML = `<div class="fb"><span class="fi">${res.ok ? I.check : I.x}</span><div><h3>${title}</h3>${detail ? `<p>${detail}</p>` : ''}${!res.ok && ex.type === 'type' ? `<p>Respuesta: <b>${esc(ex.answer)}</b></p>` : ''}</div></div><button class="btn ${res.ok ? 'good' : 'warn'}" id="next">Continuar</button>`;
    const nb = bar.querySelector('#next'); nb.focus();
    nb.onclick = () => { saveC(L.id, L.S); renderEx(); };
  }
  function showResult() {
    const acc = L.done ? L.ok / L.done : 1;
    const id = L.mode ? null : L.E.modId(L.u, L.m);
    const r = P.finish(G, L.S, id, acc, L.mode === 'daily');
    saveC(L.id, L.S); saveG();
    const mins = Math.max(1, Math.round((Date.now() - L.start) / 60000));
    const title = L.mode === 'daily' ? 'Repaso del día completado' : L.mode === 'weak' ? 'Fallos repasados' : L.m === 5 ? '¡Unidad ' + L.u + ' completada!' : '¡Lección completada!';
    $app.innerHTML = `<div class="lesson"><div class="result">
      <div class="mascot big">${window.psique ? psique(acc >= 0.99 ? 'wink' : acc >= 0.9 ? 'wow' : acc >= 0.7 ? 'happy' : 'calm') : ''}</div>
      <div class="bigstars">${[1, 2, 3].map(i => I.star.replace('<svg', `<svg class="${i <= r.stars ? 'on' : ''}"`)).join('')}</div>
      <h1>${title}</h1><p class="sub">${acc >= 0.9 ? 'Lo dominas.' : acc >= 0.7 ? 'Buen trabajo. Lo que falló volverá en los repasos.' : 'Lo que ha costado volverá en los repasos hasta que salga solo.'}</p>
      <div class="kpis"><div class="kpi"><b>+${r.gain}</b><small>XP</small></div><div class="kpi"><b>${Math.round(acc * 100)} %</b><small>aciertos</small></div><div class="kpi"><b>${mins}′</b><small>minutos</small></div></div>
      <div class="kpis" style="grid-template-columns:1fr 1fr"><div class="kpi"><b>${P.liveStreak(G)}</b><small>${P.liveStreak(G) === 1 ? 'día de racha' : 'días de racha'}</small></div><div class="kpi"><b>${P.todayXp(G)} / ${G.goal}</b><small>XP de hoy</small></div></div>
      <button class="btn" id="cont">Continuar</button></div></div>`;
    const back = L.id; L = null;
    $app.querySelector('#cont').onclick = () => {   // desde la teoría, «Continuar» sustituye esa entrada del historial
      if (/\/t\//.test(CUR)) { CUR = '#/c/' + back; try { history.replaceState(null, '', CUR); } catch (e) { } route(); } else go('#/c/' + back);
    };
    scrollTop();
  }

  // ---------- router ----------
  let CUR = location.hash || '#/';
  function go(h) { CUR = h; try { history.pushState(null, '', h); } catch (e) { } route(); }
  function route(keepSheets) {
    if (L) return;
    if (keepSheets !== true) document.querySelectorAll('.veil').forEach(v => v.remove());
    const h = CUR;
    const m = h.match(/^#\/c\/([\w-]+)(?:\/t\/(\d+)\/(\d))?/);
    if (m && courseMeta(m[1]) && courseMeta(m[1]).estado === 'ok') m[2] ? showTheory(m[1], +m[2], +m[3]) : showCourse(m[1]);
    else showHome();
  }
  window.addEventListener('popstate', () => { CUR = location.hash || '#/'; route(); });
  route();
  initCloud();
  window.SPCloud = Cloud;

  if ('serviceWorker' in navigator && location.protocol === 'https:' && !window.SP_NO_SW) navigator.serviceWorker.register('sw.js').catch(() => { });
})();
