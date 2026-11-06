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
    heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.2S2.5 15.4 2.5 8.9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 2.9c0 6.5-9.5 12.3-9.5 12.3z"/></svg>',
    gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21 8 9l4-6 4 6z"/></svg>',
    inf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 12c-2-2.7-3.7-4-5.5-4a4 4 0 0 0 0 8c1.8 0 3.5-1.3 5.5-4zm0 0c2 2.7 3.7 4 5.5 4a4 4 0 0 0 0-8c-1.8 0-3.5 1.3-5.5 4z"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 20h14"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };
  const areaOf = id => CAT.areas.find(a => a.id === id) || { ico: 'book', t: '' };
  const courseMeta = id => CAT.courses.find(c => c.id === id);
  const COLOR_HUE = { 1: 201, 2: 158, 3: 10, 4: 262, 5: 188 };
  const hueOf = id => { const m = courseMeta(id) || {}; return m.hue != null ? m.hue : COLOR_HUE[m.color || 1]; };
  const setHue = h => document.documentElement.style.setProperty('--h', h == null ? 201 : h);

  // ---------- almacenamiento ----------
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
  };
  let G = Object.assign(P.blankGlobal(), LS.get('sp.g', {}));
  const saveG = () => { LS.set('sp.g', G); queuePush('_global'); remSync(); };
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
      try { if (firebase.functions) Cloud.fn = firebase.app().functions('europe-west1'); } catch (e) { }
      auth.getRedirectResult().catch(e => { formMsg = authMsg(e); refreshAcct(); });
      auth.onAuthStateChanged(async u => {
        if (u) {
          Object.assign(Cloud, { uid: u.uid, name: u.displayName || '', email: u.email || '', photo: u.photoURL || '' });
          Cloud.col = fs.collection('users').doc(u.uid).collection('psicologia');
          try { await pull(); Cloud.err = ''; } catch (e) { Cloud.err = 'No se ha podido cargar el progreso de tu cuenta.'; }
          if (FEAT.vidas) await loadEnt();
          if (!L) route(true);
        } else { Object.assign(Cloud, { uid: null, col: null, name: '', email: '', photo: '' }); if (ENT) setEnt(null); }
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
  const prefs = Object.assign({ theme: 'auto', vib: true, snd: false, motion: 'auto', fs: 16.5, rem: false, remH: 19 }, LS.get('sp.prefs', {}));
  const savePrefs = () => LS.set('sp.prefs', prefs);
  const applyTheme = () => { if (prefs.theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', prefs.theme); };
  const applyMotion = () => document.documentElement.classList.toggle('still', prefs.motion === 'reduce');
  const still = () => prefs.motion === 'reduce' || matchMedia('(prefers-reduced-motion: reduce)').matches;
  applyTheme(); applyMotion();

  // ---------- efectos: vibración, sonidos (sintetizados, sin archivos) y confeti ----------
  const FX = {
    buzz(kind) { if (!prefs.vib || !navigator.vibrate) return; try { navigator.vibrate(kind === 'ok' ? 18 : kind === 'no' ? [40, 60, 40] : [20, 40, 20, 40, 60]); } catch (e) { } },
    ac: null,
    tone(kind) {
      if (!prefs.snd) return;
      try {
        const A = FX.ac || (FX.ac = new (window.AudioContext || window.webkitAudioContext)()), t0 = A.currentTime;
        const seq = kind === 'ok' ? [[660, 0, .09], [990, .08, .14]] : kind === 'no' ? [[220, 0, .12], [175, .1, .18]] : [[523, 0, .1], [659, .1, .1], [784, .2, .1], [1047, .3, .25]];
        seq.forEach(([f, d, len]) => {
          const o = A.createOscillator(), g = A.createGain(); o.type = kind === 'no' ? 'triangle' : 'sine'; o.frequency.value = f;
          g.gain.setValueAtTime(0.0001, t0 + d); g.gain.exponentialRampToValueAtTime(0.16, t0 + d + .015); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d + len);
          o.connect(g).connect(A.destination); o.start(t0 + d); o.stop(t0 + d + len + .02);
        });
      } catch (e) { }
    },
    confetti() {
      if (still()) return;
      const box = document.createElement('div'); box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
      const cols = ['#F5B81F', '#D2553C', '#1D5C7E', '#17875A', '#6A4FC0', '#4CC6D8'];
      box.innerHTML = Array.from({ length: 90 }, () => `<i style="left:${Math.random() * 100}%;background:${cols[Math.floor(Math.random() * cols.length)]};--dx:${Math.round((Math.random() - .5) * 160)}px;--rot:${Math.round(Math.random() * 720)}deg;animation-duration:${(1.6 + Math.random() * 1.4).toFixed(2)}s;animation-delay:${(Math.random() * .4).toFixed(2)}s"></i>`).join('');
      document.body.appendChild(box); setTimeout(() => box.remove(), 3600);
    }
  };

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
      <button class="stat fire ${s ? 'lit' : ''}" data-act="stats" aria-label="Racha: ${s} ${s === 1 ? 'día' : 'días'}. Ver estadísticas">${I.fire}${s}</button>
      <button class="stat xp" data-act="stats" aria-label="${G.xp} puntos de experiencia. Ver estadísticas">${I.bolt}${G.xp}</button>
      ${FEAT.vidas ? (isPremium() ? `<button class="stat life inf" data-act="premium" aria-label="Premium: vidas infinitas">${I.heart}${I.inf.replace('<svg', '<svg style="width:18px;height:18px"')}</button>` : `<button class="stat life ${lives().n ? '' : 'empty'}" data-act="premium" aria-label="${lives().n} vidas">${I.heart}${lives().n}</button>`) : ''}
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

  // ---------- vidas (energía) ----------
  // 5 vidas. Solo se pierde una con el primer fallo de cada pregunta en una lección nueva; los repasos nunca gastan.
  // Se recupera una cada 4 horas y otra al terminar un repaso (de fallos o del día). Premium: vidas infinitas.
  const FEAT = Object.assign({ vidas: false }, CAT.features || {}, LS.get('sp.feat', {}));
  const LIFE_MAX = 5, REGEN = 4 * 3600e3;
  function lives() {
    const e = Object.assign({ n: LIFE_MAX, t: Date.now() }, G.en || {}), now = Date.now();
    if (e.n >= LIFE_MAX) { e.n = LIFE_MAX; e.t = now; }
    else { const k = Math.floor((now - e.t) / REGEN); if (k > 0) { e.n = Math.min(LIFE_MAX, e.n + k); e.t = e.n >= LIFE_MAX ? now : e.t + k * REGEN; } }
    G.en = e; return e;
  }
  const nextLife = () => { const e = lives(); return e.n >= LIFE_MAX ? 0 : Math.max(0, REGEN - (Date.now() - e.t)); };
  const fmtWait = ms => { const m = Math.ceil(ms / 60000), h = Math.floor(m / 60); return h ? `${h} h ${m % 60} min` : `${m} min`; };
  const usesLives = () => FEAT.vidas && !isPremium();
  function loseLife() { const e = lives(); if (e.n >= LIFE_MAX) e.t = Date.now(); e.n = Math.max(0, e.n - 1); saveG(); }
  function gainLife() { const e = lives(); if (e.n < LIFE_MAX) { e.n++; if (e.n >= LIFE_MAX) e.t = Date.now(); saveG(); return true; } return false; }

  // ---------- Premium: estado (lo escribe el servidor en ent/<uid>) ----------
  let ENT = LS.get('sp.ent', null);   // { uid, premium, until, product, source }
  function isPremium() {
    if (!ENT || !ENT.premium || !(ENT.until > Date.now())) return false;
    // con la cuenta cargada, Premium debe ser de esa cuenta; sin Firebase (sin conexión al abrir) o mientras carga, vale lo guardado
    return Cloud.on && Cloud.ready ? !!Cloud.uid && ENT.uid === Cloud.uid : true;
  }
  function setEnt(e) { ENT = e && Cloud.uid ? Object.assign({ uid: Cloud.uid }, e) : null; LS.set('sp.ent', ENT); }
  const callFn = (name, data) => Cloud.fn ? Cloud.fn.httpsCallable(name)(Object.assign({ app: 'psicologia' }, data || {})).then(r => r.data) : Promise.reject(new Error('Sin conexión con el servidor.'));
  async function loadEnt() {
    if (!Cloud.uid) { setEnt(null); return; }
    try { const d = await Cloud.fs.collection('ent').doc(Cloud.uid).get(); const e = d.exists && (d.data() || {}).psicologia; setEnt(e ? { premium: !!e.premium, until: e.until || 0, product: e.product || null, source: e.source || 'play' } : null); } catch (e) { }
    const last = LS.get('sp.entChk', 0);
    if (Date.now() - last > 20 * 3600e3 || (ENT && ENT.until < Date.now())) {
      try { setEnt(await callFn('comprobarPremium')); LS.set('sp.entChk', Date.now()); } catch (e) { }
    }
    if (!isPremium()) Bill.restore().catch(() => { });
  }

  // ---------- pago con Google Play (Digital Goods API + Payment Request, dentro de la app de Android) ----------
  const PAY = 'https://play.google.com/billing', SKUS = { anual: 'premium_anual', mensual: 'premium_mensual' };
  const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.saimap.psicologia';
  var Bill = {
    svc: undefined,
    get() {
      if (!Bill.svc) Bill.svc = 'getDigitalGoodsService' in window ? window.getDigitalGoodsService(PAY).catch(() => null) : Promise.resolve(null);
      return Bill.svc;
    },
    async prices() {
      const svc = await Bill.get(); if (!svc) return {};
      try {
        const out = {};
        for (const d of await svc.getDetails(Object.values(SKUS))) {
          const f = v => new Intl.NumberFormat('es-ES', { style: 'currency', currency: d.price.currency }).format(v);
          out[d.itemId] = f(+d.price.value); if (d.itemId === SKUS.anual) out.anualMes = f(Math.floor(+d.price.value / 12 * 100) / 100);
        }
        return out;
      } catch (e) { return {}; }
    },
    async buy(sku) {
      const svc = await Bill.get(); if (!svc) throw new Error('Las suscripciones se gestionan desde la app de Android.');
      const req = new PaymentRequest([{ supportedMethods: PAY, data: { sku } }], { total: { label: 'Total', amount: { currency: 'EUR', value: '0' } } });
      const res = await req.show();
      try { const r = await callFn('verificarCompra', { token: res.details.purchaseToken, product: sku }); setEnt(r); await res.complete(r.premium ? 'success' : 'fail'); return r; }
      catch (e) { try { await res.complete('fail'); } catch (e2) { } throw e; }
    },
    async restore() {
      const svc = await Bill.get(); if (!svc || !Cloud.uid) return false;
      for (const p of await svc.listPurchases()) {
        if (!Object.values(SKUS).includes(p.itemId)) continue;
        const r = await callFn('verificarCompra', { token: p.purchaseToken, product: p.itemId }); setEnt(r);
        if (r.premium) { if (!L) route(true); return true; }
      }
      return false;
    }
  };
  const manageUrl = () => 'https://play.google.com/store/account/subscriptions?package=com.saimap.psicologia' + (ENT && ENT.product && ENT.product !== 'tester' ? '&sku=' + ENT.product : '');

  // ---------- recordatorio diario: notificación local que el service worker comprueba en segundo plano ----------
  // (Periodic Background Sync de Chrome/Android: el sistema decide cuándo mirar, así que puede llegar con retraso)
  var REM = {
    db() { return new Promise((ok, ko) => { const r = indexedDB.open('sp-rem', 1); r.onupgradeneeded = () => r.result.createObjectStore('kv'); r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); }); },
    async put(v) { try { const d = await REM.db(); d.transaction('kv', 'readwrite').objectStore('kv').put(v, 'state'); } catch (e) { } },
    supported() { return 'serviceWorker' in navigator && 'Notification' in window && location.protocol === 'https:' && !window.SP_NO_SW; },
    async enable() {
      if (!REM.supported()) return 'Aquí no se pueden activar recordatorios. Funcionan en la app de Android y en Chrome.';
      let perm = Notification.permission; if (perm !== 'granted') perm = await Notification.requestPermission();
      if (perm !== 'granted') return 'Sin permiso para mostrar notificaciones. Puedes darlo en los ajustes del móvil.';
      const reg = await navigator.serviceWorker.ready;
      if (!reg.periodicSync) return 'Activado, pero este navegador no comprueba en segundo plano: solo te avisará si tienes la app abierta.';
      try { await reg.periodicSync.register('sp-recordatorio', { minInterval: 4 * 3600 * 1000 }); } catch (e) { return 'Activado. El sistema decidirá cuándo comprobarlo, así que el aviso puede llegar con algo de retraso.'; }
      return 'Activado. Te avisaremos a partir de esa hora si aún no has llegado a tu meta.';
    },
    async disable() { try { const reg = await navigator.serviceWorker.ready; if (reg.periodicSync) await reg.periodicSync.unregister('sp-recordatorio'); } catch (e) { } }
  };
  function remSync() { if (REM) REM.put({ on: !!prefs.rem, hour: prefs.remH, day: G.day || '', dx: P.todayXp(G), goal: G.goal || 30, streak: P.liveStreak(G) }); }

  // ---------- ajustes ----------
  function openSettings() {
    const sh = sheet(`<h2>Ajustes</h2>
      <div class="acct"></div>
      ${FEAT.vidas ? `<button class="btn ${isPremium() ? 'plain' : 'gold'}" data-prem>${isPremium() ? 'Premium activo · ver detalles' : 'Hazte Premium'}</button>` : ''}
      <div class="setrow"><span>Tema</span><div class="seg">${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Oscuro']].map(([k, t]) => `<button data-th="${k}" class="${prefs.theme === k ? 'on' : ''}">${t}</button>`).join('')}</div></div>
      <div class="setrow"><span>Meta diaria</span><div class="seg">${[20, 30, 50].map(n => `<button data-goal="${n}" class="${G.goal === n ? 'on' : ''}">${n} XP</button>`).join('')}</div></div>
      <div class="setrow"><span>Recordatorio diario</span><div style="display:flex;gap:8px;align-items:center"><select data-remh aria-label="Hora del recordatorio">${Array.from({ length: 15 }, (_, i) => i + 8).map(h => `<option value="${h}" ${prefs.remH === h ? 'selected' : ''}>${h}:00</option>`).join('')}</select><button class="togg" role="switch" aria-checked="${!!prefs.rem}" data-tg="rem" aria-label="Recordatorio diario"></button></div></div>
      <p class="setnote" id="remnote">${prefs.rem ? 'Te avisaremos a partir de esa hora si aún no has llegado a tu meta.' : 'Un aviso al día si aún no has llegado a tu meta.'}</p>
      <div class="setrow"><span>Sonidos</span><button class="togg" role="switch" aria-checked="${!!prefs.snd}" data-tg="snd" aria-label="Sonidos"></button></div>
      <div class="setrow"><span>Vibración</span><button class="togg" role="switch" aria-checked="${!!prefs.vib}" data-tg="vib" aria-label="Vibración"></button></div>
      <div class="setrow"><span>Animaciones</span><div class="seg">${[['auto', 'Normales'], ['reduce', 'Reducidas']].map(([k, t]) => `<button data-mo="${k}" class="${prefs.motion === k ? 'on' : ''}">${t}</button>`).join('')}</div></div>
      <button class="btn plain" data-route>Cambiar de ruta</button>
      <button class="btn plain" data-reset>Borrar mi progreso</button>
      <p class="small"><a href="privacidad.html">Política de privacidad</a> · <a href="borrar-cuenta.html">Borrar la cuenta</a></p>
      <p class="small">SAIMAP Psicología tiene una finalidad exclusivamente educativa y no sustituye la evaluación ni el consejo de un profesional sanitario. Proyecto independiente, no vinculado a ninguna universidad.</p>
      <button class="btn" data-close>Cerrar</button>`, () => { acctBox = null; });
    acctBox = sh.el.querySelector('.acct'); paintAcct(acctBox);
    sh.el.querySelector('[data-remh]').onchange = e => { prefs.remH = +e.target.value; savePrefs(); remSync(); };
    sh.el.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || b.closest('.acct')) return;
      if (b.dataset.th) { prefs.theme = b.dataset.th; LS.set('sp.prefs', prefs); applyTheme(); sh.el.querySelectorAll('[data-th]').forEach(x => x.classList.toggle('on', x === b)); }
      else if (b.dataset.goal) { G.goal = +b.dataset.goal; saveG(); sh.el.querySelectorAll('[data-goal]').forEach(x => x.classList.toggle('on', x === b)); }
      else if (b.dataset.mo) { prefs.motion = b.dataset.mo; savePrefs(); applyMotion(); sh.el.querySelectorAll('[data-mo]').forEach(x => x.classList.toggle('on', x === b)); }
      else if (b.dataset.tg) {
        const k = b.dataset.tg, on = !prefs[k]; prefs[k] = on; savePrefs(); b.setAttribute('aria-checked', on);
        if (k === 'snd' && on) FX.tone('ok'); if (k === 'vib' && on) FX.buzz('ok');
        if (k === 'rem') {
          const note = sh.el.querySelector('#remnote');
          if (on) { note.textContent = 'Activando…'; REM.enable().then(m => { note.textContent = m; if (/^(Aquí|Sin permiso)/.test(m)) { prefs.rem = false; savePrefs(); b.setAttribute('aria-checked', false); } remSync(); }); }
          else { REM.disable(); remSync(); note.textContent = 'Recordatorio desactivado.'; }
        }
      }
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
      else if (b.hasAttribute('data-prem')) { sh.close(); go('#/premium'); }
    });
  }
  $app.addEventListener('click', e => { if (e.target.closest('[data-act="settings"]')) openSettings(); else if (e.target.closest('[data-act="stats"]')) go('#/stats'); else if (e.target.closest('[data-act="premium"]')) isPremium() || !FEAT.vidas ? go('#/premium') : showNoLives(null); });

  // ---------- bienvenida: elegir ruta ----------
  function showWelcome() {
    setHue(null);
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
    return `<button class="ccard" style="--h:${hueOf(id)}" data-c="${id}"><span class="cico">${I[a.ico]}</span><div><b>${esc(m.t)}</b>
      <div class="meter" aria-label="Progreso ${pct} %"><i style="width:${pct}%"></i></div><small>${pct ? pct + ' % completado' : 'Sin empezar'} · ${esc(a.t)}</small></div>${extra || ''}</button>`;
  }
  // anillo de la meta diaria y semana de la racha
  function ring(v, max) {
    const C = 2 * Math.PI * 26, p = Math.min(1, v / max);
    return `<div class="ring" role="img" aria-label="${v} de ${max} XP hoy"><svg viewBox="0 0 64 64"><circle class="bg" cx="32" cy="32" r="26"/><circle class="fg" cx="32" cy="32" r="26" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - p)).toFixed(1)}"/></svg><span>${p >= 1 ? I.check.replace('<svg', '<svg style="width:26px;height:26px;color:var(--ok)"') : `<span>${v}<small>de ${max}</small></span>`}</span></div>`;
  }
  function weekStrip() {
    const days = new Set(G.days || []), now = new Date(), dow = (now.getDay() + 6) % 7, L = 'LMXJVSD';
    let h = '';
    for (let i = 0; i < 7; i++) {
      const d = new Date(now); d.setDate(now.getDate() - dow + i); const k = P.dayStr(d);
      const on = days.has(k), today = i === dow, fut = i > dow;
      h += `<div class="d ${on ? 'on' : ''} ${today ? 'today' : ''} ${fut ? 'future' : ''}" aria-label="${['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'][i]}${on ? ': estudiado' : ''}"><i>${on ? I.fire : ''}</i>${L[i]}</div>`;
    }
    return `<div class="week" role="group" aria-label="Esta semana">${h}</div>`;
  }
  // tarjeta «Continuar»: la siguiente lección de la asignatura usada más recientemente
  async function fillContinue(box) {
    const ok = CAT.courses.filter(c => c.estado === 'ok');
    const started = ok.map(c => [c.id, courseState(c.id)]).filter(([, S]) => Object.keys(S.done).length).sort((a, b) => (b[1].t || 0) - (a[1].t || 0));
    let id = started.length ? started[0][0] : null;
    if (!id) { const r = CAT.routes.find(x => x.id === G.route) || CAT.routes[0]; id = ((r.groups || [])[0] || { courses: [] }).courses.find(c => (courseMeta(c) || {}).estado === 'ok') || ok[0].id; }
    try { await loadCourse(id); } catch (e) { box.remove(); return; }
    if (!box.isConnected) return;
    const C = COURSES[id], E = engine(id), S = courseState(id), nx = E.nextUp(S), m = courseMeta(id);
    box.style.setProperty('--h', hueOf(id)); box.classList.remove('skel');
    if (!nx) { box.innerHTML = `<span class="play">${I.trophy}</span><div><small>Asignatura completada</small><b>${esc(m.t)}</b><p>Repasa cuando quieras o empieza otra.</p></div>`; box.onclick = () => go('#/c/' + id); return; }
    const u = C.units[nx.u - 1], lt = nx.m <= 4 ? u.mods[nx.m - 1].t : 'Repaso de la unidad';
    box.innerHTML = `<span class="play">${I.play}</span><div><small>${started.length ? 'Continúa' : 'Empieza'} · ${esc(C.short || m.t)}</small><b>${esc(lt)}</b><p>Unidad ${nx.u} · ${esc(u.t)}</p></div>`;
    box.setAttribute('aria-label', `${started.length ? 'Continuar' : 'Empezar'}: ${lt}, unidad ${nx.u} de ${C.short || m.t}`);
    box.onclick = () => openNode(id, nx.u, nx.m);
  }
  function showHome() {
    if (!G.route) return showWelcome();
    setHue(null);
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
      <section class="hero"><span class="mascot fly">${window.psique ? psique(xpToday >= goal ? 'wow' : 'happy') : 'Ψ'}</span><div><h1>${greet()}</h1><p>${xpToday >= goal ? '¡Meta diaria conseguida!' : xpToday ? `Te quedan ${goal - xpToday} XP para tu meta.` : 'Unos minutos al día bastan para avanzar.'}</p></div>${ring(xpToday, goal)}</section>
      ${weekStrip()}
      <button class="cont skel" id="cont" aria-label="Continuar"><span class="play">${I.play}</span><div><small>Cargando…</small></div></button>
      ${daily}
      <div class="linkrow"><button data-act="stats">${I.chart}Ver mis estadísticas</button></div>
      ${Cloud.on && Cloud.ready && !Cloud.uid ? `<div class="notice"><span>Inicia sesión para guardar tu progreso en tu cuenta y usarlo en cualquier dispositivo.</span><button class="btn plain sm" data-act="settings">Entrar</button></div>` : ''}
      <nav class="tabs" aria-label="Rutas">${CAT.routes.map(x => `<button class="tab ${x.id === r.id ? 'on' : ''}" data-tab="${x.id}">${I[x.ico]}${esc(x.t)}</button>`).join('')}</nav>
      ${body}
      <footer class="foot"><span>Contenido original de SAIMAP, basado en el consenso científico actual.</span><span>Finalidad educativa: no sustituye la atención de un profesional.</span><a href="privacidad.html">Privacidad</a></footer>`;
    $app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { G.route = b.dataset.tab; saveG(); showHome(); });
    $app.querySelectorAll('[data-c]').forEach(b => b.onclick = () => go('#/c/' + b.dataset.c));
    $app.querySelectorAll('[data-daily]').forEach(b => b.onclick = () => startDaily(b.dataset.daily));
    fillContinue($app.querySelector('#cont'));
  }

  // ---------- descargar una asignatura (curso + teoría + figuras) para usarla sin conexión ----------
  const OFF = LS.get('sp.off', {});
  async function downloadCourse(id, btn) {
    const set = t => { btn.innerHTML = I.down + esc(t); };
    if (!('caches' in window)) return set('No disponible en este navegador');
    btn.disabled = true;
    try {
      const C = COURSES[id], cache = await caches.open('sp-off-' + id), imgs = new Set();
      const urls = ['cursos/' + id + '.js'].concat(C.units.map((_, i) => 'teoria/' + id + '/u' + String(i + 1).padStart(2, '0') + '.json'));
      let n = 0;
      for (const u of urls) {
        const r = await fetch(u, { cache: 'no-cache' }); if (!r.ok) throw new Error(u);
        if (u.endsWith('.json')) { const j = await r.clone().json(); (j.m || []).concat(j.c || '').join(' ').replace(/src="([^"]+)"/g, (_, x) => imgs.add(x)); }
        await cache.put(u, r); set('Descargando… ' + Math.round(50 * ++n / urls.length) + ' %');
      }
      const list = [...imgs]; n = 0;
      for (const u of list) { const r = await fetch(u); if (r.ok) await cache.put(u, r); set('Descargando… ' + (50 + Math.round(50 * ++n / list.length)) + ' %'); }
      OFF[id] = Date.now(); LS.set('sp.off', OFF); btn.classList.add('ok'); set('Disponible sin conexión');
    } catch (e) { set('Error de conexión. Vuelve a intentarlo'); btn.disabled = false; }
  }

  // ---------- curso ----------
  async function showCourse(id) {
    setHue(hueOf(id));
    $app.innerHTML = topbar(`<button class="iconbtn" data-home aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px">Cargando…</div>`);
    try { await loadCourse(id); } catch (e) { $app.innerHTML = topbar() + `<p class="empty-note">No se ha podido cargar el curso. Comprueba la conexión y vuelve a intentarlo.</p>`; return; }
    const C = COURSES[id], E = engine(id), S = courseState(id), pr = E.progress(S), nx = E.nextUp(S);
    const weak = E.weakItems(S).length;
    let html = topbar(`<button class="iconbtn" data-home aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px;min-width:0"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(C.short || C.title)}</span></div>`);
    html += `<section class="chead"><h1>${esc(C.title)}</h1><div class="meter"><i style="width:${pr.pct}%"></i></div>
      <small>${pr.done} de ${pr.total} lecciones · ${pr.pct} %</small>
      <div class="row">${C.temario ? `<a class="chip" href="temarios/${esc(C.temario)}" target="_blank" rel="noopener">${I.book}Temario</a>` : ''}
      ${weak ? `<button class="chip" data-weak>${I.redo}Repasar fallos (${weak})</button>` : ''}
      <button class="chip ${OFF[id] ? 'ok' : ''}" data-off>${I.down}${OFF[id] ? 'Disponible sin conexión' : 'Descargar'}</button></div></section>`;
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
          html += `<button class="node ${d ? 'done' : op ? 'open' : 'shut'} ${now ? 'now' : ''}" data-u="${n}" data-m="${m}" ${op ? '' : 'aria-disabled="true"'} aria-label="${esc(t)}. ${d ? 'Hecha, ' + d.s + ' de 3 estrellas' : now ? 'Siguiente lección' : op ? 'Disponible' : 'Bloqueada'}">
            <span class="disc">${d ? (m === 5 ? I.trophy : I.check) : op ? (m === 5 ? I.trophy : I.play) : I.lock}</span><b>${esc(t)}</b>${d ? stars(d.s) : ''}</button>`;
        }
        html += `</div></section>`; flip = !flip;
      }
    }
    html += `<footer class="foot"><span>${E.ITEMS.length} preguntas en ${C.units.length} unidades.</span><span>Ilustraciones y fuentes: consulta el temario.</span></footer>`;
    $app.innerHTML = html;
    $app.querySelector('[data-home]').onclick = () => go('#/');
    const wb = $app.querySelector('[data-weak]'); if (wb) wb.onclick = () => startLesson(id, 0, 0, 'weak');
    const ob = $app.querySelector('[data-off]'); ob.onclick = () => { if (ob.classList.contains('ok')) return; if (usesLives()) return go('#/premium'); downloadCourse(id, ob); };
    if (usesLives() && !OFF[id]) ob.innerHTML = I.down + 'Descargar <span class="badge-prem">Premium</span>';
    if (nx) loadTheory(id, nx.u).catch(() => { });   // precarga la teoría de la siguiente lección
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
    setHue(hueOf(id));
    const info = m <= 4 ? E.modInfo(u, m) : null, op = E.unlocked(S, u, m), d = S.done[E.modId(u, m)];
    const col = 1 + ((u - 1) % 5);
    $app.innerHTML = topbar(`<button class="iconbtn" data-back aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px;min-width:0"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(C.short || C.title)}</span></div>`) +
      `<article class="theory c${col}"><header class="thead"><small>Unidad ${u} · ${m <= 4 ? 'Lección ' + m + ' de 4' : 'Repaso'}</small>
        <h1>${esc(m <= 4 ? u + '.' + m + ' ' + info.t : 'Cierre de la unidad ' + u)}</h1>
        ${m === 5 ? `<p class="sub">${esc(unit.t)}. Antes del repaso, los recuadros finales del tema: ejemplos, consenso y debate, mitos, conceptos clave y la clave PIR.</p>` : ''}
        ${!op ? `<p class="sub">Termina la lección anterior para desbloquear esta. Puedes leer el temario y practicarla igualmente.</p>` : ''}
        ${d ? `<p class="sub">Mejor resultado: ${'★'.repeat(d.s)}${'☆'.repeat(3 - d.s)} · Hecha ${d.n} ${d.n === 1 ? 'vez' : 'veces'}</p>` : ''}
        <div class="ttools"><button class="skip" data-go>${I.play}Ir directamente a los ejercicios</button><div class="fsz" role="group" aria-label="Tamaño del texto"><button data-fs="-1" aria-label="Texto más pequeño">A−</button><button data-fs="1" aria-label="Texto más grande">A+</button></div></div></header>
        <div class="tbody" aria-busy="true" style="--tfs:${prefs.fs}px"><p class="sub">Cargando el temario…</p></div></article>
      <div class="readbar" aria-hidden="true"><i></i></div>
      <div class="tbar"><button class="btn" data-go>${d ? 'Repetir la lección' : m === 5 ? 'Empezar el repaso' : op ? 'Empezar la lección' : 'Practicar igualmente'}</button></div>`;
    $app.querySelector('[data-back]').onclick = () => go('#/c/' + id);
    $app.querySelectorAll('[data-go]').forEach(b => b.onclick = () => startLesson(id, u, m));
    scrollTop();
    const body = $app.querySelector('.tbody');
    $app.querySelectorAll('[data-fs]').forEach(b => b.onclick = () => { prefs.fs = Math.max(14.5, Math.min(21, prefs.fs + (+b.dataset.fs) * 1.5)); savePrefs(); body.style.setProperty('--tfs', prefs.fs + 'px'); });
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
    body.querySelectorAll('figure img').forEach(im => im.onclick = () => { const s = sheet(`<img class="zoom" src="${im.getAttribute('src')}" alt="${esc(im.alt)}"><button class="btn plain" data-x>Cerrar</button>`); s.el.querySelector('[data-x]').onclick = s.close; });
    glossary(body, E.ITEMS.filter(i => i.kind === 'v' && i.u === u));
    if (u < C.units.length && m >= 4) loadTheory(id, u + 1).catch(() => { });   // precarga la unidad siguiente
  }
  // términos clave del apartado: se pueden tocar para ver su definición (sale de los «Conceptos clave» del curso)
  function glossary(body, items) {
    const norm = t => t.replace(/\s*\([^)]*\)\s*$/, '').trim();
    const terms = items.map(i => [norm(i.c), i]).filter(([t]) => t.length >= 4 && t.length <= 40).sort((a, b) => b[0].length - a[0].length);
    if (!terms.length) return;
    const used = new Set(), reEsc = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('h1,h2,h3,figcaption,th,.term,button,a,.blk.claves,.obj') || !n.parentElement.closest('p,li,td') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const [t, it] of terms) {
      if (used.has(t.toLowerCase())) continue;
      const re = new RegExp('(^|[^\\p{L}\\p{N}])(' + reEsc(t) + ')(?=$|[^\\p{L}\\p{N}])', 'iu');
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i], mm = re.exec(n.data); if (!mm) continue;
        const start = mm.index + mm[1].length, after = n.splitText(start), rest = after.splitText(mm[2].length);
        const b = document.createElement('button'); b.className = 'term'; b.type = 'button'; b.textContent = after.data; b.dataset.k = it.k;
        b.setAttribute('aria-label', after.data + ': ver definición');
        after.replaceWith(b); nodes.splice(i, 1, n, rest); used.add(t.toLowerCase()); break;
      }
    }
    body.addEventListener('click', e => {
      const b = e.target.closest('.term'); if (!b) return;
      const it = items.find(x => x.k === b.dataset.k); if (!it) return;
      const sh = sheet(`<div class="gloss"><b>${esc(it.c)}</b>${esc(it.d)}</div><button class="btn plain" data-x>Cerrar</button>`); sh.el.querySelector('[data-x]').onclick = sh.close;
    });
  }
  // barra de progreso de lectura en la teoría
  window.addEventListener('scroll', () => {
    const bar = document.querySelector('.readbar i'); if (!bar) return;
    const h = document.documentElement.scrollHeight - innerHeight; bar.style.width = (h > 0 ? Math.min(100, 100 * scrollY / h) : 0) + '%';
  }, { passive: true });

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
  const typeOfItem = (E, S, i) => i.kind === 'seq' || i.kind === 'cls' ? i.kind : E.typeFor(i, S);
  function startLesson(id, u, m, mode, items) {
    const E = engine(id), S = courseState(id);
    setHue(hueOf(id));
    if (!mode && usesLives() && lives().n <= 0) return showNoLives(id);
    const ex = mode === 'redo' ? P.shuffle(items).map(i => E.build(i, typeOfItem(E, S, i), true)) : mode === 'daily' ? E.genDaily(S) : mode === 'weak' ? E.genWeak(S) : E.gen(S, u, m);
    if (!ex.length) { sheet(`<h2>Aún no hay suficiente</h2><p class="sub">Haz alguna lección más y vuelve.</p><button class="btn" onclick="this.closest('.veil').remove()">Vale</button>`); return; }
    L = { id, u, m, mode, E, S, queue: ex.slice(), total: ex.length, done: 0, ok: 0, firstTry: 0, retried: new Set(), start: Date.now(), combo: 0, miss: [], xp0: P.todayXp(G) };
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
    $app.innerHTML = `<div class="lesson"><div class="lbar"><button class="x" data-quit aria-label="Salir">${I.x}</button><div class="meter" role="progressbar" aria-label="Progreso de la lección" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></div>${!L.mode && usesLives() ? `<span class="lifebar" aria-label="${lives().n} vidas">${I.heart}${lives().n}</span>` : ''}</div>
      <div class="stage"><div class="kind">${KIND[ex.type]}${ex.review ? '<span class="rv">Repaso</span>' : ''}</div><div id="body"></div></div>
      <div class="checkbar" id="bar" role="status" aria-live="polite"><button class="btn" id="chk" disabled>Comprobar</button></div></div>`;
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
    if (!res.ok && ex.item && !L.miss.some(x => x.item.k === ex.item.k)) L.miss.push({ item: ex.item, type: ex.type, answer: ex.answer });
    L.combo = res.ok ? L.combo + 1 : 0;
    const lost = !res.ok && !L.mode && !ex.retry && usesLives();
    if (lost) loseLife();
    const out = lost && lives().n <= 0;
    if (!res.silent) { FX.buzz(res.ok ? 'ok' : 'no'); FX.tone(res.ok ? 'ok' : 'no'); }
    if ([3, 5, 8, 12, 16].includes(L.combo)) showCombo(L.combo);
    // un fallo vuelve una vez al final de la lección
    if (!res.ok && ex.type !== 'match' && !ex.retry) { const again = L.E.build(ex.item, ex.type === 'cd' || ex.type === 'dc' || ex.type === 'type' ? 'cd' : ex.type, true); again.retry = true; L.retried.add(again); L.queue.push(again); }
    L.queue.shift();
    if (res.silent) { saveC(L.id, L.S); if (out) { const id0 = L.id; L = null; return showNoLives(id0, true); } return renderEx(); }
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
    bar.innerHTML = `<div class="fb">${window.psique ? `<span class="fm">${psique(res.ok ? (L.combo >= 3 ? 'wow' : 'happy') : res.unsure ? 'calm' : 'sad')}</span>` : `<span class="fi">${res.ok ? I.check : I.x}</span>`}<div><h3>${title}</h3>${detail ? `<p>${detail}</p>` : ''}${!res.ok && ex.type === 'type' ? `<p>Respuesta: <b>${esc(ex.answer)}</b></p>` : ''}</div></div><button class="btn ${res.ok ? 'good' : 'warn'}" id="next">Continuar</button>`;
    const nb = bar.querySelector('#next'); nb.focus();
    nb.onclick = () => { saveC(L.id, L.S); if (out) { const id0 = L.id; L = null; return showNoLives(id0, true); } renderEx(); };
    if (lost) { const lb = $app.querySelector('.lifebar'); if (lb) lb.innerHTML = I.heart + lives().n; }
  }
  function showCombo(n) {
    document.querySelectorAll('.combo').forEach(x => x.remove());
    const c = document.createElement('div'); c.className = 'combo'; c.setAttribute('aria-hidden', 'true');
    c.innerHTML = (window.psique ? psique('wow') : '') + `¡${n} seguidas!`;
    document.body.appendChild(c); setTimeout(() => c.remove(), 1500);
  }
  // una línea por fallo, para el resumen final
  function missLine(x) {
    const it = x.item;
    if (it.kind === 'v') return `<b>${esc(it.c)}</b>: ${esc(it.d)}`;
    if (it.kind === 'g') return esc(it.q.replace('___', '«' + it.a + '»'));
    if (it.kind === 'tf') return `${esc(it.q)}<small>Es ${it.a ? 'verdadera' : 'falsa'}.${it.why ? ' ' + esc(it.why) : ''}</small>`;
    if (it.kind === 'q' || it.kind === 'inc') return `${esc(it.q)}<small>${it.kind === 'inc' ? 'La incorrecta' : 'Respuesta'}: <b>${esc(it.a)}</b>${it.why ? '. ' + esc(it.why) : ''}</small>`;
    if (it.kind === 'seq') return `${esc(it.q)}<small>${it.steps.map((t, i) => (i + 1) + '. ' + esc(t)).join(' · ')}</small>`;
    return esc(it.q || '');
  }
  function showResult() {
    const acc = L.done ? L.ok / L.done : 1;
    const id = L.mode ? null : L.E.modId(L.u, L.m);
    const r = P.finish(G, L.S, id, acc, L.mode === 'daily');
    G.hist = G.hist || {}; G.hist[P.dayStr()] = P.todayXp(G);
    const hk = Object.keys(G.hist).sort(); if (hk.length > 240) hk.slice(0, hk.length - 240).forEach(k => delete G.hist[k]);
    saveC(L.id, L.S); saveG();
    const goalNow = L.xp0 < G.goal && P.todayXp(G) >= G.goal, party = r.stars === 3 || L.m === 5 || goalNow;
    if (party) { FX.confetti(); FX.buzz('win'); FX.tone('win'); }
    const lifeUp = L.mode && usesLives() && gainLife();
    const miss = L.miss.slice(), recap = miss.length ? `<div class="recap"><h2>Para repasar (${miss.length})</h2>${miss.slice(0, 6).map(x => `<div class="it">${missLine(x)}</div>`).join('')}${miss.length > 6 ? `<p class="small">y ${miss.length - 6} más</p>` : ''}</div>` : '';
    const mins = Math.max(1, Math.round((Date.now() - L.start) / 60000));
    const title = L.mode === 'daily' ? 'Repaso del día completado' : L.mode === 'weak' || L.mode === 'redo' ? 'Fallos repasados' : L.m === 5 ? '¡Unidad ' + L.u + ' completada!' : '¡Lección completada!';
    $app.innerHTML = `<div class="lesson"><div class="result">
      <div class="mascot big fly">${window.psique ? psique(acc >= 0.99 ? 'wink' : acc >= 0.9 ? 'wow' : acc >= 0.7 ? 'happy' : 'calm') : ''}</div>
      <div class="bigstars">${[1, 2, 3].map(i => I.star.replace('<svg', `<svg class="${i <= r.stars ? 'on' : ''}"`)).join('')}</div>
      <h1>${title}</h1><p class="sub">${acc >= 0.9 ? 'Lo dominas.' : acc >= 0.7 ? 'Buen trabajo. Lo que falló volverá en los repasos.' : 'Lo que ha costado volverá en los repasos hasta que salga solo.'}</p>
      <div class="kpis"><div class="kpi"><b>+${r.gain}</b><small>XP</small></div><div class="kpi"><b>${Math.round(acc * 100)} %</b><small>aciertos</small></div><div class="kpi"><b>${mins}′</b><small>minutos</small></div></div>
      <div class="kpis" style="grid-template-columns:1fr 1fr"><div class="kpi"><b>${P.liveStreak(G)}</b><small>${P.liveStreak(G) === 1 ? 'día de racha' : 'días de racha'}</small></div><div class="kpi"><b>${P.todayXp(G)} / ${G.goal}</b><small>${goalNow ? '¡Meta conseguida!' : 'XP de hoy'}</small></div></div>
      ${lifeUp ? `<div class="kpi" style="width:100%;border-color:var(--coral)"><b style="color:var(--coral)">+1 vida</b><small>por repasar · tienes ${lives().n} de ${LIFE_MAX}</small></div>` : ''}
      ${recap}
      ${miss.length ? `<button class="btn plain" id="redo">Repasar ${miss.length === 1 ? 'este fallo' : 'estos ' + miss.length + ' fallos'}</button>` : ''}
      <button class="btn" id="cont">Continuar</button></div></div>`;
    const back = L.id; L = null;
    const rb = $app.querySelector('#redo'); if (rb) rb.onclick = () => startLesson(back, 0, 0, 'redo', miss.map(x => x.item));
    $app.querySelector('#cont').onclick = () => {   // desde la teoría, «Continuar» sustituye esa entrada del historial
      if (/\/t\//.test(CUR)) { CUR = '#/c/' + back; try { history.replaceState(null, '', CUR); } catch (e) { } route(); } else go('#/c/' + back);
    };
    scrollTop();
  }

  // ---------- hoja de vidas ----------
  function showNoLives(id, ended) {
    const e = lives(), wait = nextLife(), S = id ? courseState(id) : null, E = id ? engine(id) : null;
    const weak = E ? E.weakItems(S).length : 0, daily = E ? E.dailyReady(S) : false;
    const sh = sheet(`<div class="nolives"><div class="mascot">${window.psique ? psique(e.n ? 'happy' : 'sad') : ''}</div>
      <h2>${e.n ? `Tienes ${e.n} ${e.n === 1 ? 'vida' : 'vidas'}` : 'Te has quedado sin vidas'}</h2>
      <div class="hearts" aria-hidden="true">${Array.from({ length: LIFE_MAX }, (_, i) => I.heart.replace('<svg', `<svg class="${i < e.n ? 'on' : ''}"`)).join('')}</div>
      <p class="sub">${ended ? 'La lección se ha quedado a medias. ' : ''}Pierdes una vida con el primer fallo de cada pregunta en las lecciones nuevas. La teoría y los repasos son siempre libres.</p>
      ${wait ? `<p class="timer">Próxima vida en ${fmtWait(wait)}</p>` : ''}</div>
      ${weak ? `<button class="btn" data-w>Repasar mis fallos (+1 vida)</button>` : daily ? `<button class="btn" data-d>Hacer el repaso del día (+1 vida)</button>` : ''}
      <button class="btn gold" data-p>${I.inf.replace('<svg', '<svg style="width:20px;height:20px;display:inline-block;vertical-align:-4px;margin-right:6px"')}Vidas infinitas con Premium</button>
      <button class="btn plain" data-x>${ended ? 'Salir' : 'Ahora no'}</button>`, () => { if (ended) route(); });
    const q = k => sh.el.querySelector(k);
    if (q('[data-w]')) q('[data-w]').onclick = () => { sh.close(); startLesson(id, 0, 0, 'weak'); };
    if (q('[data-d]')) q('[data-d]').onclick = () => { sh.close(); startLesson(id, 0, 0, 'daily'); };
    q('[data-p]').onclick = () => { sh.close(); go('#/premium'); };
    q('[data-x]').onclick = sh.close;
  }

  // ---------- Premium ----------
  async function showPremium() {
    setHue(null);
    const prem = isPremium();
    let sel = 'anual';
    const perks = [[I.inf, 'Vidas infinitas', 'Estudia sin límite y sin esperas'], [I.down, 'Asignaturas sin conexión', 'Descarga la teoría y las figuras para el tren o la biblioteca'], [I.gem, 'Insignia Premium', 'Y apoyas que haya asignaturas nuevas']];
    $app.innerHTML = topbar(`<button class="iconbtn" data-home aria-label="Volver">${I.back}</button>`) + `<section class="prem">
      <div class="phero"><div class="mascot fly">${window.psique ? psique('wow') : ''}</div><h1>SAIMAP Premium</h1><p>${prem ? (ENT.source === 'tester' ? 'Tienes Premium como tester. ¡Gracias por ayudar!' : 'Eres Premium hasta el ' + new Date(ENT.until).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }) + '. Se renueva automáticamente.') : 'Todo SAIMAP Psicología, sin límites.'}</p></div>
      <div class="perks">${perks.map(([ic, t, d]) => `<div class="perk"><i>${ic}</i><div><b>${t}</b><small>${d}</small></div></div>`).join('')}</div>
      ${prem ? (ENT.source === 'tester' ? '' : `<a class="btn plain" href="${manageUrl()}" target="_blank" rel="noopener">Gestionar mi suscripción</a>`) : `
      <div class="plans" role="radiogroup" aria-label="Plan">
        <button class="plan on" data-plan="anual" role="radio" aria-checked="true"><span class="save">Ahorra un 58 %</span><span class="t">Anual</span><b data-price="premium_anual">9,99 €</b><small>al año · <span data-price="anualMes">0,83 €</span>/mes</small></button>
        <button class="plan" data-plan="mensual" role="radio" aria-checked="false"><span class="t">Mensual</span><b data-price="premium_mensual">1,99 €</b><small>al mes</small></button>
      </div>
      <p class="msg" id="pmsg" aria-live="polite"></p>
      <button class="btn gold" id="buy">Suscribirme</button>
      <p class="fine">Precios con impuestos incluidos. La suscripción se cobra en tu cuenta de Google Play, se renueva automáticamente y puedes cancelarla cuando quieras en <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener">Google Play › Suscripciones</a>.</p>
      <button class="linkbtn" id="restore">Ya estoy suscrito: restaurar compra</button>`}
      <p class="fine"><a href="privacidad.html">Privacidad</a> · El temario, la teoría y los repasos son gratis para todo el mundo.</p>
    </section>`;
    $app.querySelector('[data-home]').onclick = () => history.length > 1 ? history.back() : go('#/');
    scrollTop();
    if (prem) return;
    const msg = $app.querySelector('#pmsg'), buy = $app.querySelector('#buy');
    $app.querySelectorAll('[data-plan]').forEach(b => b.onclick = () => { sel = b.dataset.plan; $app.querySelectorAll('[data-plan]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-checked', x === b); }); });
    Bill.prices().then(pr => { for (const [k, v] of Object.entries(pr)) { const el = $app.querySelector(`[data-price="${k}"]`); if (el) el.textContent = v; } });
    const svc = await Bill.get();
    if (!svc) { buy.textContent = 'Suscribirme en la app de Android'; buy.onclick = () => window.open(PLAY_URL, '_blank', 'noopener'); msg.textContent = 'Las suscripciones se hacen desde la app de Android de SAIMAP Psicología.'; }
    else buy.onclick = async () => {
      if (!Cloud.uid) { msg.textContent = 'Inicia sesión primero: Premium va unido a tu cuenta SAIMAP para que lo tengas en todos tus dispositivos.'; openSettings(); return; }
      buy.disabled = true; msg.textContent = '';
      try { const r = await Bill.buy(SKUS[sel]); if (r.premium) { FX.confetti(); FX.tone('win'); showPremium(); } else { msg.textContent = 'La compra no se ha completado.'; buy.disabled = false; } }
      catch (e) { msg.textContent = e && e.name === 'AbortError' ? '' : (e && e.message) || 'No se ha podido completar la compra.'; buy.disabled = false; }
    };
    $app.querySelector('#restore').onclick = async () => {
      if (!Cloud.uid) { msg.textContent = 'Inicia sesión con la cuenta con la que te suscribiste.'; openSettings(); return; }
      msg.textContent = 'Comprobando…';
      try { const ok = (await Bill.restore()) || ((await callFn('comprobarPremium').then(r => (setEnt(r), r.premium)).catch(() => false))); msg.textContent = ok ? '¡Premium activado!' : 'No hemos encontrado ninguna suscripción activa en esta cuenta.'; if (ok) showPremium(); }
      catch (e) { msg.textContent = 'No se ha podido comprobar. Revisa la conexión.'; }
    };
  }

  // ---------- estadísticas ----------
  async function showStats() {
    setHue(null);
    const days = new Set(G.days || []), hist = G.hist || {}, goal = G.goal || 30;
    let best = 0, run = 0, prev = null;
    for (const d of [...days].sort()) { const t = new Date(d + 'T12:00'); run = prev && (t - prev) / 864e5 < 1.5 ? run + 1 : 1; best = Math.max(best, run); prev = t; }
    const now = new Date(), dow = (now.getDay() + 6) % 7, W = 18, start = new Date(now); start.setDate(now.getDate() - dow - 7 * (W - 1));
    let cells = '';
    for (let i = 0; i < W * 7; i++) {
      const d = new Date(start); d.setDate(start.getDate() + i); const k = P.dayStr(d);
      if (d > now) { cells += '<i style="visibility:hidden"></i>'; continue; }
      const x = hist[k], lv = x != null ? (x >= goal ? 3 : x >= goal / 2 ? 2 : x > 0 ? 1 : 0) : days.has(k) ? 2 : 0;
      cells += `<i class="${lv ? 'l' + lv : ''} ${k === P.dayStr() ? 't' : ''}" title="${k}${x ? ' · ' + x + ' XP' : ''}"></i>`;
    }
    const started = CAT.courses.filter(c => c.estado === 'ok').map(c => [c, courseState(c.id)]).filter(([, S]) => Object.keys(S.done).length || Object.keys(S.it).length);
    const rows = started.map(([c, S]) => {
      const done = Object.keys(S.done).length, tot = (c.units || 16) * 5, pct = Math.round(100 * done / tot);
      let ok = 0, ko = 0; for (const v of Object.values(S.it)) { ok += v[0] || 0; ko += v[1] || 0; }
      const acc = ok + ko ? Math.round(100 * ok / (ok + ko)) : 0;
      return `<button class="crow" style="--h:${hueOf(c.id)}" data-c="${c.id}"><span class="dot"></span><div><b>${esc(c.t)}</b><div class="meter"><i style="width:${pct}%"></i></div><small>${done} de ${tot} lecciones · ${acc} % de aciertos</small></div></button>`;
    }).join('');
    $app.innerHTML = topbar(`<button class="iconbtn" data-home aria-label="Volver">${I.back}</button><div class="brand" style="font-size:17px">Estadísticas</div>`) + `<section class="stats">
      <h1>Tu progreso</h1>
      <div class="kgrid"><div class="kpi"><b>${P.liveStreak(G)}</b><small>días de racha</small></div><div class="kpi"><b>${best}</b><small>mejor racha</small></div><div class="kpi"><b>${G.xp}</b><small>XP en total</small></div><div class="kpi"><b>${days.size}</b><small>días estudiando</small></div></div>
      <h2>Actividad · últimas ${W} semanas</h2><div class="heat" role="img" aria-label="Días con actividad en las últimas ${W} semanas">${cells}</div>
      <h2>Asignaturas</h2>${rows || '<p class="empty-note">Aún no has empezado ninguna asignatura.</p>'}
      <h2>Lo que más te cuesta</h2><div class="weak" id="weak"><p class="sub">${started.length ? 'Calculando…' : 'Cuando hagas algunas lecciones, aquí verás los conceptos que más fallas.'}</p></div>
    </section>`;
    $app.querySelector('[data-home]').onclick = () => go('#/');
    $app.querySelectorAll('[data-c]').forEach(b => b.onclick = () => go('#/c/' + b.dataset.c));
    scrollTop();
    const box = $app.querySelector('#weak'), out = [];
    for (const [c, S] of started) {
      try { await loadCourse(c.id); } catch (e) { continue; }
      const E = engine(c.id);
      E.weakItems(S).map(i => [((S.it[i.k] || [])[1] || 0) - ((S.it[i.k] || [])[0] || 0) * .5, i]).filter(([sc]) => sc > 0).forEach(([sc, i]) => out.push([sc, i, c]));
    }
    if (!box.isConnected) return;
    out.sort((a, b) => b[0] - a[0]);
    box.innerHTML = out.length ? out.slice(0, 8).map(([, i, c]) => `<div><b>${esc(i.kind === 'v' ? i.c : (i.q || '').slice(0, 90) + ((i.q || '').length > 90 ? '…' : ''))}</b><small>${esc(courseMeta(c.id).t)} · unidad ${i.u}</small></div>`).join('') + `<p class="small">Puedes repasarlos con «Repasar fallos» en cada asignatura.</p>` : '<p class="sub">¡Nada destacable! No hay conceptos que se te resistan.</p>';
  }

  // ---------- router ----------
  let CUR = location.hash || '#/';
  // transiciones suaves entre pantallas (si el navegador las admite y no se han reducido las animaciones)
  const swap = fn => { if (document.startViewTransition && !still()) document.startViewTransition(fn); else fn(); };
  function go(h) { CUR = h; try { history.pushState(null, '', h); } catch (e) { } swap(() => route()); }
  function route(keepSheets) {
    if (L) return;
    if (keepSheets !== true) document.querySelectorAll('.veil').forEach(v => v.remove());
    const h = CUR;
    const m = h.match(/^#\/c\/([\w-]+)(?:\/t\/(\d+)\/(\d))?/);
    if (m && courseMeta(m[1]) && courseMeta(m[1]).estado === 'ok') m[2] ? showTheory(m[1], +m[2], +m[3]) : showCourse(m[1]);
    else if (h === '#/stats') showStats();
    else if (h === '#/premium' && FEAT.vidas) showPremium();
    else showHome();
  }
  window.addEventListener('popstate', () => { CUR = location.hash || '#/'; swap(() => route()); });
  route();
  initCloud();
  window.SPCloud = Cloud;
  remSync();

  if ('serviceWorker' in navigator && location.protocol === 'https:' && !window.SP_NO_SW) navigator.serviceWorker.register('sw.js').catch(() => { });
})();
