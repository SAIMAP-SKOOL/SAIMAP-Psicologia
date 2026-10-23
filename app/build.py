"""Construye la web de SAIMAP Psicología en dist/.  python3 build.py

- Copia la app (src/), empaqueta cada curso de ../cursos/<id>/ en dist/cursos/<id>.js
- Extrae el temario íntegro por apartados en dist/teoria/ (build_teoria.py)
- Copia el PDF del temario de cada curso disponible
- Genera iconos, manifest y service worker (con versión, para que se actualice la caché)
"""
import os, re, json, shutil, glob, hashlib
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC, DIST = os.path.join(HERE, 'src'), os.path.join(HERE, 'dist')
VERSION = '1.0.0'

shutil.rmtree(DIST, ignore_errors=True)
os.makedirs(os.path.join(DIST, 'cursos')); os.makedirs(os.path.join(DIST, 'temarios')); os.makedirs(os.path.join(DIST, 'icons'))
for f in ('index.html', 'app.js', 'engine.js', 'catalog.js', 'mascot.js', 'scenes.js', 'privacidad.html'):
    shutil.copy(os.path.join(SRC, f), DIST)

# cursos: course.js + data-*.js envueltos en una función que recibe un "window" propio
for cdir in sorted(glob.glob(os.path.join(ROOT, 'cursos', '*', 'course.js'))):
    d = os.path.dirname(cdir); cid = os.path.basename(d)
    parts = [open(cdir, encoding='utf-8').read()] + [open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(d, 'data-*.js')))]
    js = '(function(window){\n' + '\n'.join(parts) + '\nSP.register(window.COURSE);\n})({});\n'
    open(os.path.join(DIST, 'cursos', cid + '.js'), 'w', encoding='utf-8').write(js)
    pdf = re.search(r'temario:\s*"([^"]+)"', parts[0])
    if pdf:
        src = os.path.join(ROOT, 'temarios', cid, 'pdf', pdf.group(1))
        if os.path.exists(src): shutil.copy(src, os.path.join(DIST, 'temarios'))
        else: print('AVISO: falta el temario', src)
    print('curso', cid, len(js) // 1024, 'KB')

# teoría: el temario íntegro, apartado por apartado (texto + figuras)
import build_teoria
build_teoria.build(DIST)

# iconos: Ψ blanca sobre azul petróleo
def icon(size, pad, path):
    im = Image.new('RGB', (size, size), '#1D5C7E'); d = ImageDraw.Draw(im)
    f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf', int((size - 2 * pad) * 0.78))
    w = d.textlength('Ψ', font=f); bb = d.textbbox((0, 0), 'Ψ', font=f)
    d.text(((size - w) / 2, (size - (bb[3] - bb[1])) / 2 - bb[1]), 'Ψ', font=f, fill='white')
    im.save(path)
icon(192, 22, os.path.join(DIST, 'icons', 'icon-192.png'))
icon(512, 60, os.path.join(DIST, 'icons', 'icon-512.png'))
icon(512, 110, os.path.join(DIST, 'icons', 'maskable-512.png'))

json.dump({
    'name': 'SAIMAP Psicología', 'short_name': 'SAIMAP Psico', 'lang': 'es', 'start_url': './', 'scope': './',
    'display': 'standalone', 'background_color': '#F1F5F8', 'theme_color': '#1D5C7E',
    'description': 'Aprende Psicología con lecciones cortas, repaso diario y rutas para el Grado y el PIR.',
    'icons': [{'src': 'icons/icon-192.png', 'sizes': '192x192', 'type': 'image/png'},
              {'src': 'icons/icon-512.png', 'sizes': '512x512', 'type': 'image/png'},
              {'src': 'icons/maskable-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}]
}, open(os.path.join(DIST, 'manifest.webmanifest'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

files = sorted(os.path.relpath(p, DIST).replace(os.sep, '/') for p in glob.glob(os.path.join(DIST, '**', '*'), recursive=True) if os.path.isfile(p) and not p.endswith('.pdf') and '/teoria/' not in p.replace(os.sep, '/'))
hh = hashlib.sha1()
for f in files: hh.update(open(os.path.join(DIST, f), 'rb').read())
h = hh.hexdigest()[:8]
sw = f"""// SAIMAP Psicología · service worker (caché para usar la app sin conexión)
const CACHE = 'sp-{VERSION}-{h}';
const FILES = {json.dumps(['./'] + files)};
self.addEventListener('install', e => {{ e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); }});
self.addEventListener('activate', e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener('fetch', e => {{
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {{ const cp = res.clone(); if (res.ok) caches.open(CACHE).then(c => c.put(e.request, cp)); return res; }})));
}});
"""
open(os.path.join(DIST, 'sw.js'), 'w', encoding='utf-8').write(sw)
print('dist listo:', len(files) + 1, 'archivos · versión', VERSION, h)

# Variante para la vista previa como Artifact: sin esqueleto HTML propio, sin manifest ni service worker.
ART = os.path.join(HERE, 'dist-artifact')
shutil.rmtree(ART, ignore_errors=True); shutil.copytree(DIST, ART)
for f in ('sw.js', 'manifest.webmanifest'): os.remove(os.path.join(ART, f))
html = open(os.path.join(DIST, 'index.html'), encoding='utf-8').read()
title = re.search(r'<title>.*?</title>', html).group(0)
style = re.search(r'<style>.*?</style>', html, re.S).group(0)
fonts = re.search(r'<link rel="stylesheet"[^>]+>', html).group(0)
body = re.search(r'<body>(.*)</body>', html, re.S).group(1).replace('<script src="catalog.js">', '<script>window.SP_NO_SW=1</script>\n<script src="catalog.js">')
open(os.path.join(ART, 'index.html'), 'w', encoding='utf-8').write(f'{title}\n<meta name="claude:viewport-fit-sides" content="cover">\n{fonts}\n{style}\n{body}')
print('vista previa lista en dist-artifact/')
