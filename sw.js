// SAIMAP Psicología · service worker (caché para usar la app sin conexión)
const CACHE = 'sp-1.2.0-a3cb82c7';
const FILES = ["./", "app.js", "borrar-cuenta.html", "catalog.js", "cursos/aprendizaje.js", "cursos/atencion-percepcion.js", "cursos/bases-biologicas.js", "cursos/desarrollo-infancia.js", "cursos/estadistica-1.js", "cursos/evaluacion-1.js", "cursos/evaluacion-2.js", "cursos/historia.js", "cursos/interaccion-social.js", "cursos/memoria.js", "cursos/motivacion-emocion.js", "cursos/social.js", "engine.js", "firebase-config.js", "fonts/OFL-Bricolage.txt", "fonts/OFL-Nunito.txt", "fonts/bricolage-600.woff", "fonts/bricolage-800.woff", "fonts/nunito-500.woff", "fonts/nunito-700.woff", "fonts/nunito-800.woff", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest", "mascot.js", "privacidad.html", "scenes.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && !k.startsWith('sp-off-')).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// teoría y cursos: primero la red (contenido al día) y, sin conexión, lo guardado; el resto, primero la caché
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (/\/(teoria|cursos)\//.test(u.pathname)) {
    e.respondWith(fetch(e.request).then(res => { const cp = res.clone(); if (res.ok) caches.open(CACHE).then(c => c.put(e.request, cp)); return res; }).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); if (res.ok) caches.open(CACHE).then(c => c.put(e.request, cp)); return res; })));
});
// recordatorio diario: el sistema despierta al service worker de vez en cuando (Periodic Background Sync)
const remState = () => new Promise(ok => { try { const r = indexedDB.open('sp-rem', 1); r.onupgradeneeded = () => r.result.createObjectStore('kv');
  r.onsuccess = () => { const q = r.result.transaction('kv').objectStore('kv').get('state'); q.onsuccess = () => ok(q.result || null); q.onerror = () => ok(null); }; r.onerror = () => ok(null); } catch (e) { ok(null); } });
const ds = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
async function remind() {
  const st = await remState(), now = new Date(), today = ds(now);
  if (!st || !st.on || now.getHours() < st.hour) return;
  const xp = st.day === today ? st.dx : 0; if (xp >= st.goal) return;
  const shown = await self.registration.getNotifications({ tag: 'sp-rem-' + today }); if (shown.length) return;
  const c = await caches.open('sp-rem-flag'); if (await c.match('/' + today)) return; await c.put('/' + today, new Response('1'));
  await self.registration.showNotification('Psique te espera', { tag: 'sp-rem-' + today, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', lang: 'es',
    body: xp ? 'Te quedan ' + (st.goal - xp) + ' XP para tu meta de hoy.' : st.streak ? 'Haz una lección para no perder tu racha de ' + st.streak + (st.streak === 1 ? ' día.' : ' días.') : 'Unos minutos de estudio y llegas a tu meta de hoy.' });
}
self.addEventListener('periodicsync', e => { if (e.tag === 'sp-recordatorio') e.waitUntil(remind()); });
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(self.clients.matchAll({ type: 'window' }).then(ws => ws.length ? ws[0].focus() : self.clients.openWindow('./'))); });
