"""python build_kdp.py <carpeta_pdfs> <salida>

Cubiertas completas de tapa blanda para Amazon KDP (contraportada + lomo numerado + portada) de la
colección SAIMAP Psicología, 1.º de Grado, y los PDF de interior sin la portada.
- Formato A4 (8,27 × 11,69 in), sangrado de 0,125 in en los cuatro lados.
- Lomo: páginas del interior (redondeadas a par) × grosor por página del papel elegido (PAPEL).
- KDP solo permite texto en el lomo con 79 páginas o más; por debajo, el lomo va sin texto.
- La portada es la página 1 del PDF del temario, rasterizada a 300 ppp y sin el pie de página.
<carpeta_pdfs> contiene los PDF de los temarios con el nombre de book.json (en subcarpetas o no).
"""
import os, sys, re, json, glob, html as H, subprocess, base64
from pypdf import PdfReader, PdfWriter
from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
PAPEL = {'color-premium': 0.002347, 'color-estandar': 0.002252, 'bn-blanco': 0.002252, 'bn-crema': 0.0025}
GROSOR = PAPEL[os.environ.get('PAPEL', 'color-premium')]
FORMATO = os.environ.get('FORMATO', 'a4').lower()          # a4 | 7x10 (interiores generados con FORMATO=7x10 build_temario.py)
TW, TH = {'a4': (8.27, 11.69), '7x10': (7.0, 10.0)}[FORMATO]  # pulgadas
SUF = '' if FORMATO == 'a4' else '_' + FORMATO
TAPA = os.environ.get('TAPA', 'blanda')                     # blanda | dura | ambas
BL = 0.125                                                  # sangrado de la tapa blanda
# Tapa dura (estuche laminado): envoltura de ~15 mm alrededor y bisagra de 10 mm junto al lomo. KDP solo da el lomo exacto
# en su calculadora: aquí se estima y, si el visor de KDP pide otro tamaño, se fija en DURA (ancho × alto en pulgadas).
WRAP, HINGE, BOARD = 0.591, 0.394, 0.1175   # KDP 7×10, 84 pág.: 15,961 × 11,417 in (confirmado en el visor)
DURA = json.loads(os.environ.get('DURA', '{}'))             # {"bases-biologicas": [15.2, 11.418], ...} tamaños exactos de KDP
SERIE = [  # orden de la colección (1.º de Grado)
    ('bases-biologicas', 'Bases Biológicas del Comportamiento'),
    ('historia', 'Psicología: Historia, Ciencia y Profesión'),
    ('estadistica-1', 'Fundamentos de Estadística'),
    ('aprendizaje', 'Psicología del Aprendizaje'),
    ('memoria', 'Psicología de la Memoria'),
    ('atencion-percepcion', 'Psicología de la Atención y la Percepción'),
    ('motivacion-emocion', 'Motivación y Emoción'),
    ('desarrollo-infancia', 'Desarrollo: Infancia y Adolescencia'),
    ('social', 'Psicología Social'),
    ('interaccion-social', 'Psicología de la Interacción Social'),
]

def find_pdf(name):
    hits = glob.glob(os.path.join(SRC, '**', name), recursive=True)
    if not hits: sys.exit(f'falta {name}')
    return hits[0]

def front_png(pdf, out):
    base = out[:-4]
    subprocess.run(['pdftoppm', '-r', '300', '-f', '1', '-l', '1', '-png', '-singlefile', pdf, base], check=True)
    im = Image.open(base + '.png').convert('RGB')
    w, h = im.size
    im.paste((255, 255, 255), (0, int(h * (.948 if FORMATO == 'a4' else .925)), w, h))     # quita el pie de página (título y número)
    im.save(out, optimize=True)
    return out

def uri(path):
    return 'data:image/png;base64,' + base64.b64encode(open(path, 'rb').read()).decode()

CSS = '''
@page { margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: "Liberation Sans", "DejaVu Sans", Arial, sans-serif; color: #26323A; }
.wrap { position: relative; overflow: hidden; background: #fff; }
.panel { position: absolute; top: 0; height: 100%; }
.front img { position: absolute; display: block; }
.back .in { position: absolute; display: flex; flex-direction: column; }
.flag { display: flex; width: 48mm; height: 4mm; margin-bottom: 9mm; } .flag i { flex: 1; }
.serie { font-size: 10pt; font-weight: 700; letter-spacing: 1.6pt; text-transform: uppercase; color: A; }
.vol { display: inline-block; margin-top: 3mm; font-size: 10pt; font-weight: 700; color: #fff; background: P; padding: 1.3mm 3mm; border-radius: 1.6mm; align-self: flex-start; }
h1 { font-size: 30pt; line-height: 1.08; color: P; margin-top: 8mm; }
.blurb { font-size: 12.4pt; line-height: 1.5; margin-top: 7mm; color: #26323A; }
h2 { font-size: 11.5pt; color: P; margin-top: 10mm; text-transform: uppercase; letter-spacing: 1pt; }
ul.inc { list-style: none; margin-top: 3mm; font-size: 11.2pt; line-height: 1.45; }
ul.inc li { padding-left: 5.5mm; position: relative; margin-top: 1.8mm; }
ul.inc li::before { content: ""; position: absolute; left: 0; top: 1.9mm; width: 2.4mm; height: 2.4mm; border-radius: 50%; background: A; }
ol.col { list-style: none; margin-top: 2.5mm; display: grid; grid-template-columns: 1fr 1fr; gap: 2mm 6mm; font-size: 9.6pt; line-height: 1.25; }
ol.col li { display: flex; gap: 2mm; align-items: baseline; color: #5b6770; }
ol.col li b { display: inline-block; min-width: 5.8mm; text-align: center; font-size: 8.8pt; color: #fff; background: #9aa5ae; border-radius: 1.2mm; padding: .5mm 0; }
ol.col li.me { color: #26323A; font-weight: 700; } ol.col li.me b { background: P; }
.foot { margin-top: auto; display: flex; align-items: flex-end; justify-content: space-between; }
.brand { font-size: 12pt; font-weight: 700; letter-spacing: 2pt; color: A; }
.app { font-size: 8.6pt; color: #5b6770; margin-top: 1.5mm; max-width: 95mm; line-height: 1.35; }
.barcode { width: 2.15in; height: 1.3in; }   /* zona libre para el código de barras de KDP */
.spine { background: P; color: #fff; display: flex; flex-direction: column; align-items: center; }
.spine .num { font-weight: 800; color: #fff; line-height: 1; text-align: center; padding-bottom: 1.6mm; border-bottom: .5mm solid rgba(255,255,255,.7); }
.spine .txt { flex: 1; display: flex; align-items: center; justify-content: center; }
.spine .rot { transform: rotate(-90deg); white-space: nowrap; font-weight: 700; display: flex; gap: 4mm; align-items: center; line-height: 1.05; }
.spine .rot span { font-weight: 400; opacity: .85; }
'''

def spine_fits(spine_in): return (spine_in * 25.4 - 4.0) / (1.05 * 0.3528) >= 6


def page(meta, n, pages_int, front, spine_in, show_text, EX=BL, EY=BL, m=0.5, band=0.0, hg=0.0):
    """EX/EY: borde exterior (sangrado o envoltura); band: franja extra de color del lomo a cada lado (bisagra)."""
    P, A = meta['colors']['P'], meta['colors']['A']
    W = EX + TW + hg + spine_in + hg + TW + EX; Hh = TH + 2 * EY      # hg: bisagra a cada lado del lomo (tapa dura)
    xs = EX + TW + hg                 # comienzo del lomo
    xf = xs + spine_in + hg           # comienzo de la portada
    css = re.sub(r'(?<![\w#-])P(?=[;\s])', P, CSS); css = re.sub(r'(?<![\w#-])A(?=[;\s])', A, css)
    stripe = ''.join(f'<i style="background:{c}"></i>' for c in meta['colors']['STRIPE'])
    figs, title = meta['_figs'], meta['_title']
    inc = [f'16 unidades en 64 apartados, con objetivos y conceptos clave',
           'Recuadros de consenso y debate y de mitos frecuentes, con la evidencia más reciente',
           'Clave PIR en cada unidad y 80 preguntas de autoevaluación con soluciones comentadas',
           f'{figs} figuras y esquemas, y bibliografía verificada']
    col = ''.join(f'<li class="{"me" if i == n else ""}"><b>{i}</b>{H.escape(t)}</li>' for i, (_, t) in enumerate(SERIE, 1))
    m = 0.5   # margen de seguridad interior del panel trasero (in)
    back = f'''<div class="panel back" style="left:0;width:{xs}in">
      <div class="in" style="left:{EX + m}in;top:{EY + .72}in;width:{TW - 2 * m}in;height:{TH - .72 - m + .1}in">
        <div class="flag">{stripe}</div>
        <div class="serie">SAIMAP Psicología · Colección 1.º de Grado</div>
        <div class="vol">Volumen {n} de {len(SERIE)}</div>
        <h1>{H.escape(title)}</h1>
        <p class="blurb">{H.escape(meta['blurb'])}</p>
        <h2>Qué incluye</h2>
        <ul class="inc">{''.join(f'<li>{H.escape(x)}</li>' for x in inc)}</ul>
        <h2>La colección</h2>
        <ol class="col">{col}</ol>
        <div class="foot"><div><div class="brand">SAIMAP PSICOLOGÍA</div>
          <p class="app">Este temario es la base del curso interactivo de la app SAIMAP Psicología. Proyecto independiente, no vinculado a ninguna universidad.</p></div>
          <div class="barcode"></div></div>
      </div></div>'''
    sw = spine_in * 25.4   # mm
    # KDP exige ≥ 1,6 mm libres a cada lado del texto del lomo: se dejan 2 mm. El renglón ocupa ~1,05 em
    # (acentos y descendentes); si no cabe con al menos 6 pt, el lomo va sin texto.
    fs = min(9.5, (sw - 4.0) / (1.05 * 0.3528))
    if fs < 6: show_text = False
    if show_text:
        cap = sw - 4.0                                    # ancho útil con 2 mm a cada lado
        nd = min(cap / .72, cap / (.58 * len(str(n)))) * 2.835   # pt: cabe en alto y en ancho (cifra ≈ 0,72 × 0,56 em)
        stext = f'''<div style="height:{EY + .45}in"></div><div class="num" style="font-size:{nd:.1f}pt;width:{cap:.2f}mm">{n}</div>
          <div class="txt"><div class="rot" style="font-size:{fs:.1f}pt">{H.escape(title)}<span>SAIMAP Psicología</span></div></div>
          <div style="height:{EY + .45}in"></div>'''
    else:
        stext = ''
    spine = f'<div class="panel spine" style="left:{xs - band}in;width:{spine_in + 2 * band}in">{stext}</div>'
    fr = f'<div class="panel front" style="left:{xf}in;width:{TW + EX}in"><img src="{uri(front)}" style="left:0;top:{EY}in;width:{TW}in;height:{TH}in"></div>'
    return f'<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{css}</style></head><body><div class="wrap" style="width:{W}in;height:{Hh}in">{back}{spine}{fr}</div></body></html>', W, Hh

report = []
with sync_playwright() as pw:
    br = pw.chromium.launch()
    for n, (bid, title) in enumerate(SERIE, 1):
        if os.environ.get('SOLO') and bid not in os.environ['SOLO'].split(','): continue   # SOLO=bases-biologicas,historia
        D = os.path.join(ROOT, 'temarios', bid)
        meta = json.load(open(os.path.join(D, 'book.json'), encoding='utf-8'))
        meta['_title'] = title
        meta['_figs'] = sum(len(re.findall(r'^Figura \d', open(f, encoding='utf-8').read(), re.M)) for f in glob.glob(os.path.join(D, '0*.md')))
        pdf = find_pdf(meta['pdf'][:-4] + SUF + '.pdf'); base = meta['pdf'][:-4] + ('_KDP' if FORMATO == 'a4' else '_KDP-' + FORMATO)
        interior = os.path.join(OUT, f'{base}-interior.pdf')
        kdp_int = glob.glob(os.path.join(ROOT, 'temarios', bid, 'pdf', meta['pdf'][:-4] + SUF + '_KDP-interior.pdf'))
        if kdp_int:   # interior hecho con KDP=1 build_temario.py: sin portada y numerado desde el capítulo 1
            import shutil; shutil.copy(kdp_int[0], interior); npg = len(PdfReader(interior).pages)
        else:         # interior = temario sin la portada
            r = PdfReader(pdf); w = PdfWriter()
            for p in r.pages[1:]: w.add_page(p)
            w.write(interior); npg = len(r.pages) - 1
        npg_even = npg + (npg % 2)
        front = front_png(pdf, os.path.join(OUT, f'.{bid}-front.png'))
        tapas = ['blanda', 'dura'] if TAPA == 'ambas' else [TAPA]
        for tapa in tapas:
            if tapa == 'blanda':
                spine_in = round(npg_even * GROSOR, 4); show = npg_even >= 79 and spine_fits(spine_in)
                html, W, Hh = page(meta, n, npg_even, front, spine_in, show)
                name = f'{base}-cubierta' if FORMATO == 'a4' else f'{base}-cubierta-blanda'
            else:
                EY = WRAP + BOARD                     # 11,417 in de alto para 7 × 10 (confirmado por KDP)
                if bid in DURA:                       # tamaño exacto pedido por KDP
                    W0, H0 = DURA[bid]; EY = (H0 - TH) / 2
                    spine_in = round(W0 - 2 * (TW + WRAP) - HINGE, 4)
                else:
                    spine_in = round(npg_even * GROSOR + 0.189, 4)
                show = npg_even >= 75
                html, W, Hh = page(meta, n, npg_even, front, spine_in, show, EX=WRAP, EY=EY, m=0.8, hg=HINGE / 2)
                name = f'{base}-cubierta-dura'
            pg = br.new_page()
            pg.set_content(html, wait_until='load')
            cover = os.path.join(OUT, f'{name}.pdf')
            pg.pdf(path=cover, width=f'{W}in', height=f'{Hh}in', print_background=True)
            cr = PdfReader(cover); cw = PdfWriter(); p0 = cr.pages[0]     # tamaño exacto (Chromium redondea a píxeles)
            from pypdf.generic import RectangleObject
            box = RectangleObject([0, 0, round(W * 72, 3), round(Hh * 72, 3)])
            p0.mediabox = box; p0.cropbox = box; p0.trimbox = box; p0.bleedbox = box; cw.add_page(p0); cw.write(cover)
            pg.set_viewport_size({'width': int(W * 96), 'height': int(Hh * 96)})
            pg.screenshot(path=os.path.join(OUT, f'{name}-vista.png'))
            pg.close()
            report.append((n, title, tapa, npg, npg_even, spine_in, W, Hh, show))
        os.remove(front); os.remove(front[:-4] + '.png') if os.path.exists(front[:-4] + '.png') and front[:-4] + '.png' != front else None
    br.close()
print(f'Formato {FORMATO} · papel {os.environ.get("PAPEL", "color-premium")} ({GROSOR} in/página)')
for n, t, tapa, a, b, sp, W, Hh, show in report:
    print(f'{n:2d} {t[:44]:44s} {tapa:6s} interior {a} pág. (→{b}) · lomo {sp:.3f} in = {sp * 25.4:.2f} mm · cubierta {W:.3f} × {Hh:.3f} in · texto en lomo: {"sí" if show else "no"}')
