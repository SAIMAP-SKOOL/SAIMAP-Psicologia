"""python3 kit/build_kindle_cover.py temarios/<id> <volumen> [salida.jpg]

Portada del ebook Kindle (1600 × 2560 px, JPG), con el mismo diseño que la portada de tapa blanda (kit/build_kdp.py):
fondo blanco, franja de colores, título, subtítulo, resumen, etiquetas y «SAIMAP PSICOLOGÍA».
"""
import sys, os, re, json, glob, html as H
from playwright.sync_api import sync_playwright

D = os.path.abspath(sys.argv[1]); VOL = sys.argv[2] if len(sys.argv) > 2 else ''
CFG = json.load(open(os.path.join(D, 'book.json'), encoding='utf-8'))
OUT = sys.argv[3] if len(sys.argv) > 3 else os.path.join(D, 'pdf', CFG['pdf'].replace('.pdf', '_kindle-portada.jpg'))
C = CFG['colors']; P, A = C['P'], C['A']; ST = C['STRIPE']
tags = CFG.get('tags', []); tc = CFG.get('tag_colors', [P, '#5FA47A', A])
html = f'''<!doctype html><html><head><meta charset="utf-8"><style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:1600px;height:2560px;background:#fff;font-family:"Inter","Helvetica Neue",Arial,sans-serif;color:#26323A;padding:190px 140px 220px 150px;display:flex;flex-direction:column}}
.stripe{{display:flex}} .stripe i{{display:block;width:150px;height:38px}}
.vol{{margin-top:80px;font-weight:700;font-size:44px;letter-spacing:7px;color:{A};text-transform:uppercase}}
h1{{margin-top:70px;font-weight:800;font-size:150px;line-height:1.05;letter-spacing:-2px;color:{P}}}
.sub{{margin-top:60px;font-size:66px;color:#26323A}}
.blurb{{margin-top:70px;font-size:48px;line-height:1.45;color:#5A6770;max-width:1240px}}
.tags{{margin-top:90px;display:flex;gap:28px;flex-wrap:wrap}}
.tags span{{color:#fff;font-weight:700;font-size:50px;padding:22px 40px;border-radius:24px}}
.brand{{margin-top:auto;font-weight:700;font-size:58px;letter-spacing:12px;color:{A}}}
</style></head><body>
<div class="stripe">{''.join(f'<i style="background:{c}"></i>' for c in ST)}</div>
<div class="vol">Colección 1.º de Grado{(' · Volumen ' + VOL) if VOL else ''}</div>
<h1>{CFG['cover_title']}</h1>
<p class="sub">{H.escape(CFG.get('subtitle', ''))}</p>
<p class="blurb">{H.escape(CFG.get('blurb', ''))}</p>
<div class="tags">{''.join(f'<span style="background:{tc[i % len(tc)]}">{H.escape(t)}</span>' for i, t in enumerate(tags))}</div>
<div class="brand">SAIMAP PSICOLOGÍA</div>
</body></html>'''
tmp = OUT + '.html'; open(tmp, 'w', encoding='utf-8').write(html)
with sync_playwright() as p:
    exe = (glob.glob('/opt/pw-browsers/chromium-*/chrome-linux/chrome') or [None])[0]
    b = p.chromium.launch(executable_path=exe) if exe else p.chromium.launch()
    pg = b.new_page(viewport={'width': 1600, 'height': 2560}); pg.goto('file://' + tmp); pg.wait_for_timeout(300)
    pg.screenshot(path=OUT, type='jpeg', quality=92); b.close()
os.remove(tmp); print(OUT)
