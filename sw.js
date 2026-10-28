// SAIMAP Psicología · service worker (caché para usar la app sin conexión)
const CACHE = 'sp-1.1.0-5e8a5116';
const FILES = ["./", "app.js", "borrar-cuenta.html", "catalog.js", "cursos/aprendizaje.js", "cursos/atencion-percepcion.js", "cursos/bases-biologicas.js", "cursos/estadistica-1.js", "cursos/interaccion-social.js", "cursos/memoria.js", "cursos/motivacion-emocion.js", "engine.js", "firebase-config.js", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "index.html", "manifest.webmanifest", "mascot.js", "privacidad.html", "scenes.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); if (res.ok) caches.open(CACHE).then(c => c.put(e.request, cp)); return res; })));
});
