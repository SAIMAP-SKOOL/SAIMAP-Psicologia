"""python build_temario.py <temario_dir>

Temarios SAIMAP Psicología. Adaptado del constructor de libros de SAIMAP Lingo.
Construye <dir>/pdf/<pdf> a partir de los Markdown listados en <dir>/book.json.
El tema de color va en book.json: "colors": {"P":..., "A":..., "TINT":..., "STRIPE":[...]}.
"""
import sys, os, subprocess, re, json, glob, html as H
import markdown
from playwright.sync_api import sync_playwright
from pypdf import PdfReader

D = os.path.abspath(sys.argv[1])
CFG = json.load(open(os.path.join(D, 'book.json'), encoding='utf-8'))
# FORMATO=a4 (por defecto: PDF de la app) o FORMATO=7x10 (interior de imprenta para KDP, 7 × 10 in)
FORMATO = os.environ.get('FORMATO', 'a4').lower()
FMT = {'a4': dict(w='210mm', h='297mm', top='18mm', bottom='20mm', side='16mm', cover='255mm', t='46pt', s='19pt', d='130mm', suf='', foot='0'),
       '7x10': dict(w='7in', h='10in', top='15mm', bottom='18mm', side='16.5mm', cover='214mm', t='36pt', s='16pt', d='118mm', suf='_7x10', foot='5mm')}[FORMATO]
_C = CFG['colors']
P, A, TINT = _C['P'], _C['A'], _C['TINT']          # primary, accent, primary tint
STRIPE = _C['STRIPE']

BOX = {}
for cls, names in CFG.get('boxes', {}).items():
    for n in names:
        BOX[n] = cls

def emphasis(src, fn):
    """Convert *em*, **strong** and any nesting of them to HTML ourselves: Markdown parsers
    disagree on nested and intra-word cases (*He **works***, w**or**k), which this book uses a lot."""
    TAG = {'*': 'em', '**': 'strong'}
    out = []
    for ln, line in enumerate(src.split('\n'), 1):
        cells = line.split('|') if line.lstrip().startswith('|') else [line]
        res = []
        for cell in cells:
            stack = []; buf = ''
            for tok in re.split(r'(\*+)', cell):
                if not tok.startswith('*'):
                    buf += tok; continue
                k = len(tok)
                while k:
                    top = stack[-1] if stack else None
                    if (top == '**' and k >= 2) or (top == '*' and k == 1) or (top == '*' and k >= 3 and '**' in stack):
                        t = stack.pop(); buf += f'</{TAG[t]}>'; k -= len(t)
                    elif k >= 3 and not stack:
                        stack += ['*', '**']; buf += '<em><strong>'; k -= 3
                    elif k >= 2 and '**' not in stack:
                        stack.append('**'); buf += '<strong>'; k -= 2
                    elif '*' not in stack:
                        stack.append('*'); buf += '<em>'; k -= 1
                    else:
                        print(f'EMPHASIS? {fn}:{ln}: {cell.strip()[:90]}'); k = 0
            if stack:
                print(f'UNCLOSED {fn}:{ln}: {cell.strip()[:90]}')
                buf += ''.join(f'</{TAG[t]}>' for t in reversed(stack))
            res.append(buf)
        out.append('|'.join(res))
    return '\n'.join(out)


toc = []
n = 0
body = ''
for fn in CFG['files']:
    src = open(os.path.join(D, fn), encoding='utf-8').read()
    src = re.sub(r'_{3,}', '<span class="gap"></span>', src)
    src = emphasis(src, fn)
    h = markdown.markdown(src, extensions=['tables', 'nl2br', 'sane_lists'])
    h = re.sub(r'<p><img alt="([^"]*)" src="([^"]+)" ?/?></p>', lambda m: f'<p class="fig {m.group(1)}"><img src="img/{m.group(2)}" alt=""></p>', h)
    h = re.sub(r'(<p class="fig[^"]*">.*?</p>)\s*<p>(Figura .*?)</p>', r'<figure>\1<p class="cap">\2</p></figure>', h, flags=re.S)
    h = re.sub(r'<thead>\s*<tr>\s*(?:<th></th>\s*)+</tr>\s*</thead>', '', h)
    units = fn in CFG['unit_files']

    # wrap each h3 block so that special sections can be styled as boxes
    parts = re.split(r'(?=<h[123][ >])', h)
    out = ''
    for part in parts:
        m = re.match(r'<h3>(.*?)</h3>', part, flags=re.S)
        if m:
            name = H.unescape(re.sub('<[^>]+>', '', m.group(1))).strip()
            cls = BOX.get(name)
            if cls:
                if cls == 'test':
                    hh, rest = part[:m.end()], part[m.end():]
                    part = f'{hh}<div class="cols">{rest}</div>'
                part = f'<div class="blk {cls}">{part}</div>'
        out += part
    h = out

    def hrep(m):
        global n
        lvl, txt = m.group(1), m.group(2)
        n += 1
        a = f'sec{n}'
        toc.append((int(lvl), H.unescape(re.sub('<[^>]+>', '', txt)), a))
        return f'<h{lvl} id="{a}">{txt}</h{lvl}>'
    h = re.sub(r'<h([12])>(.*?)</h\1>', hrep, h, flags=re.S)
    body += f'<section class="tab {"units" if units else "plain"}">{h}</section>'

stray = re.findall(r'[^<>\n]{0,30}\*[^<>\n]{0,30}', re.sub(r'<[^>]+>', '', body))
if stray:
    print('STRAY ASTERISKS:', len(stray)); [print('   ', s) for s in stray[:40]]

CSS = '''
@page { size: PAGEW PAGEH; margin: PAGEM; }
* { box-sizing: border-box; }
body { font-family: "Liberation Sans", "DejaVu Sans", Arial, sans-serif; font-size: 10pt; line-height: 1.4; color: #26323A; margin: 0; }
h1 { font-size: 25pt; color: P; margin: 0 0 6mm; padding-bottom: 3mm; border-bottom: 2.5pt solid P; break-before: page; }
h2 { font-size: 17pt; color: P; margin: 9mm 0 3mm; break-after: avoid; }
section.units h2 { break-before: page; margin-top: 0; padding: 3.5mm 5mm; background: P; color: #fff; border-radius: 3mm; }
section.units h1 + p { font-size: 12pt; color: #5b6770; }
section.units h1 + p + h2 { break-before: auto; margin-top: 6mm; }
h3 { font-size: 12.5pt; color: A; margin: 6mm 0 2mm; break-after: avoid; }
p { margin: 0 0 2.4mm; orphans: 2; widows: 2; }
p.fig { margin: 3mm 0 4mm; text-align: center; break-inside: avoid; }
p.fig img { width: 100%; border-radius: 3mm; }
table { border-collapse: collapse; width: 100%; margin: 2mm 0 4mm; font-size: 9.4pt; }
th { background: TINT; color: P; text-align: left; font-weight: 700; }
th, td { border: 0.6pt solid #C9D3CD; padding: 1.3mm 2mm; vertical-align: top; }
tr { break-inside: avoid; }
thead { display: table-header-group; }
ul, ol { margin: 0 0 3mm; padding-left: 6mm; }
li { margin-bottom: 1mm; } li p { margin: 0; }
hr { border: 0; border-top: 0.8pt solid #C9D3CD; margin: 6mm 0 4mm; }
strong { font-weight: 700; }
.gap { display: inline-block; width: 13mm; border-bottom: 0.8pt solid #26323A; transform: translateY(-0.4mm); }
.blk h3 { margin-top: 0; }
.blk.dialogue p, .blk.text p { margin: 0 0 2mm; }
.blk.dialogue, .blk.text { margin: 5mm 0 3mm; padding: 4mm 5mm 2.5mm; background: #FBF6EC; border-left: 2.5pt solid #E0A83A; border-radius: 0 3mm 3mm 0; }
.blk.dialogue strong { color: P; }
.blk.sound { margin: 5mm 0 3mm; padding: 4mm 5mm 2mm; background: TINT; border-radius: 3mm; break-inside: avoid; }
.blk.sound h3 { color: P; }
.blk.sound th { background: #fff; }
.blk.sound td { background: #fff; }
.blk.warn { margin: 5mm 0 3mm; padding: 4mm 5mm 1.5mm; border: 1pt solid A; border-radius: 3mm; break-inside: avoid; }
.blk.answers { margin-top: 3mm; padding: 3mm 5mm 1.5mm; background: #F3F4F5; border-radius: 3mm; font-size: 9pt; }
.blk.answers h3 { font-size: 10.5pt; color: #5b6770; margin-bottom: 1.5mm; }
.blk.consenso { margin: 5mm 0 3mm; padding: 4mm 5mm 1.5mm; background: #EEF6F0; border-left: 2.5pt solid #3E8E5E; border-radius: 0 3mm 3mm 0; }
.blk.consenso h3 { color: #2F6E48; }
.blk.mito { margin: 5mm 0 3mm; padding: 4mm 5mm 1.5mm; background: #FBF6EC; border-left: 2.5pt solid #E0A83A; border-radius: 0 3mm 3mm 0; }
.blk.mito h3 { color: #A8741A; }
.blk.pir { margin: 5mm 0 3mm; padding: 3.5mm 5mm 1.5mm; border: 1pt solid A; border-radius: 3mm; break-inside: avoid; }
.blk.claves { margin: 5mm 0 3mm; padding: 4mm 5mm 1.5mm; background: TINT; border-radius: 3mm; }
.blk.claves h3 { color: P; }
.blk.claves th, .blk.claves td { background: #fff; }
.blk.test { margin-top: 5mm; font-size: 9.4pt; }
.blk.test .cols { column-count: 2; column-gap: 7mm; }
.blk.test .cols p { break-inside: avoid; }
.blk.test ol { padding-left: 6mm; }
.blk.test ol ol, .blk.test ul { list-style: none; padding-left: 2mm; margin: 0.5mm 0 1.5mm; }
p.fig.small img { width: 78%; }
p.fig.m img { width: 62%; }
p.fig.s img { width: 46%; }
figure { margin: 4mm 0 5mm; break-inside: avoid; }
figure p.fig { margin: 0 0 1.5mm; }
p.cap { font-size: 8pt; color: #6b767d; line-height: 1.35; text-align: center; margin: 0 6mm; }
p.cap strong { color: #26323A; }
.cover { height: COVERH; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 0 8mm; break-after: page; }
.cover .flag { display: flex; width: 60mm; height: 5mm; margin-bottom: 14mm; }
.cover .flag i { flex: 1; }
.cover .t { font-size: COVERT; font-weight: 700; color: P; line-height: 1.05; }
.cover .s { font-size: COVERS; margin-top: 6mm; color: #26323A; }
.cover .d { font-size: 12pt; margin-top: 10mm; color: #5b6770; max-width: COVERD; }
.cover .b { margin-top: auto; font-size: 13pt; font-weight: 700; letter-spacing: 2pt; color: A; }
.cover .lv { display: flex; gap: 2.5mm; margin-top: 16mm; }
.cover .lv span { padding: 2mm 4.5mm; border-radius: 2.5mm; color: #fff; font-weight: 700; font-size: 13pt; }
.toc h1 { break-before: auto; }
.blk.answers.t1 { font-size: 8.4pt; line-height: 1.3; padding-top: 2mm; } .blk.test.t1 { font-size: 8.9pt; line-height: 1.32; }
.blk.answers.t2 { font-size: 8pt; line-height: 1.25; padding: 1.6mm 4mm 1mm; margin-top: 2mm; } .blk.test.t2 { font-size: 8.5pt; line-height: 1.28; margin-top: 3mm; }
.blk.answers.t3 { font-size: 7.8pt; line-height: 1.2; padding: 1.4mm 4mm 1mm; margin-top: 1.6mm; } .blk.test.t3 { font-size: 8.2pt; line-height: 1.22; margin-top: 2mm; }
.toc .l1 { font-weight: 700; color: P; margin-top: 3.2mm; font-size: 11.5pt; }
.toc .row { display: flex; align-items: baseline; gap: 2mm; font-size: 9.6pt; line-height: 1.32; }
.toc .row a { color: inherit; text-decoration: none; }
.toc .dots { flex: 1; border-bottom: 0.6pt dotted #9aa5ab; transform: translateY(-1mm); }
.toc .l2 { padding-left: 5mm; }
'''
CSS = (CSS.replace('PAGEW', FMT['w']).replace('PAGEH', FMT['h']).replace('PAGEM', f"{FMT['top']} {FMT['side']} {FMT['bottom']} {FMT['side']}")
       .replace('COVERH', FMT['cover']).replace('COVERT', FMT['t']).replace('COVERS', FMT['s']).replace('COVERD', FMT['d']))
CSS = re.sub(r'\bTINT\b', TINT, CSS)
CSS = re.sub(r'(?<![\w#-])P(?=[;\s])', P, CSS)
CSS = re.sub(r'(?<![\w#-])A(?=[;\s])', A, CSS)

LV = ['#8FBF9F', '#5FA47A', '#2E7D5B', '#3F6FA8', '#5B4A6B', '#C8443C']


TIGHT = {}
# KDP=1: interior de imprenta sin portada; el índice y la presentación van sin número y la numeración
# empieza en 1 en el primer capítulo (página impar), como pide KDP. Salida: <pdf>_<formato>_KDP-interior.pdf
KDP = os.environ.get('KDP') == '1'
F_PHYS = [None]   # página física (sin portada) del primer capítulo


def first_main():
    for lvl, txt, a in toc:
        if re.match(r'(Cap[ií]tulo|Unidad|Tema|Parte)\b', txt): return a
    return toc[0][2]


def disp(pages):
    if not KDP or not F_PHYS[0]: return pages
    return {a: p - F_PHYS[0] + 1 for a, p in pages.items() if p >= F_PHYS[0]}   # anclas de unidad -> nivel de ajuste (para evitar páginas con 1-3 líneas sueltas)
def tighten(html):
    for a, lv in TIGHT.items():
        m = re.search(f'id="{a}"', html)
        if not m: continue
        nx = re.compile(r'<h[12] id="sec\d+"').search(html, m.end()); end = nx.start() if nx else len(html)
        seg = re.sub(r'class="blk (answers|test)"', rf'class="blk \1 t{lv}"', html[m.end():end])
        html = html[:m.end()] + seg + html[end:]
    return html


def build(pages):
    t = f'<section class="toc"><h1>{CFG["toc_title"]}</h1>'
    for lvl, txt, a in toc:
        t += f'<div class="row l{lvl}"><a href="#{a}">{H.escape(txt)}</a><span class="dots"></span><span>{pages.get(a, "")}</span></div>'
    t += '</section>'
    stripe = ''.join(f'<i style="background:{c if c.upper() != "#FFFFFF" else "#f1efe8"}"></i>' for c in STRIPE)
    cover = (f'<div class="cover"><div class="flag">{stripe}</div><div class="t">{CFG["cover_title"]}</div>'
             f'<div class="s">{CFG["subtitle"]}</div><div class="d">{CFG["blurb"]}</div><div class="lv">'
             + ''.join(f'<span style="background:{c}">{l}</span>' for l, c in zip(CFG['tags'], CFG.get('tag_colors', LV))) +
             '</div><div class="b">SAIMAP PSICOLOGÍA</div></div>')
    if KDP: cover = ''
    return (f'<!doctype html><html lang="{CFG["lang"]}"><head><meta charset="utf-8"><title>{CFG["title"]}</title>'
            f'<style>{CSS}</style></head><body>{cover}{t}{tighten(body)}</body></html>')


FOOT = ('<div style="width:100%;font-size:8pt;color:#8A949B;font-family:Liberation Sans,Arial;padding:0 ' + FMT['side'] + ' ' + FMT['foot'] + ';display:flex;justify-content:space-between">'
        f'<span>{CFG["footer"]}</span>' + ('' if KDP else '<span class="pageNumber"></span>') + '</div>')
HTML = os.path.join(D, 'book.html')
os.makedirs(os.path.join(D, 'pdf'), exist_ok=True)
OUT = os.path.join(D, 'pdf', CFG['pdf'][:-4] + FMT['suf'] + ('_KDP-interior' if KDP else '') + '.pdf')


def render(pages):
    open(HTML, 'w', encoding='utf-8').write(build(pages))
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=next((x for x in ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome', '/opt/pw-browsers/chromium'] if os.path.exists(x)), None))
        pg = b.new_page()
        pg.goto('file://' + HTML)
        pg.wait_for_load_state('networkidle')
        pg.pdf(path=OUT, width=FMT['w'], height=FMT['h'], print_background=True, display_header_footer=True, header_template='<span></span>',
               footer_template=FOOT, margin={'top': FMT['top'], 'bottom': FMT['bottom'], 'left': FMT['side'], 'right': FMT['side']})
        b.close()


def paginate():
    render({})
    r = PdfReader(OUT); pages = {}
    nd = r.named_destinations
    for lvl, txt, a in toc:
        for k in (a, '/' + a):
            if k in nd:
                pages[a] = r.get_destination_page_number(nd[k]) + 1
    print('toc', len(toc), 'resolved', len(pages), 'pages', len(r.pages))
    if KDP: F_PHYS[0] = pages.get(first_main())
    render(disp(pages))
    r2 = PdfReader(OUT)
    assert len(r2.pages) == len(r.pages), 'page count changed between passes'
    return pages, len(r2.pages)


def sparse(pages, npg):
    """Páginas con ≤ 6 líneas de texto seguidas de un comienzo de capítulo o unidad → ancla de la unidad que se desborda."""
    starts = set(pages.values()); out = {}
    for pnum in range(2 if KDP else 3, npg):
        if pnum + 1 not in starts: continue
        txt = subprocess.run(['pdftotext', '-f', str(pnum), '-l', str(pnum), '-layout', OUT, '-'], capture_output=True, text=True).stdout
        lines = [l for l in txt.splitlines() if l.strip()][:-1]          # sin el pie de página
        if 0 < len(lines) <= 6 and not any(pages.get(a) == pnum for _, _, a in toc):
            a = [x[2] for x in toc if pages.get(x[2], 10**6) <= pnum][-1]   # última sección (en orden) que empieza antes
            out[pnum] = a
    return out


pages, npg = paginate()
if FORMATO != 'a4':
    for it in range(4):
        bad = sparse(pages, npg)
        if not bad: break
        changed = False
        for pnum, a in bad.items():
            if TIGHT.get(a, 0) < 3: TIGHT[a] = TIGHT.get(a, 0) + 1; changed = True
        print('ajuste de soluciones en', len(bad), 'unidades:', sorted(bad))
        if not changed: break
        pages, npg = paginate()
    left = sparse(pages, npg)
    if left: print('AVISO: quedan páginas casi vacías:', sorted(left))
if KDP:
    # página en blanco para que el primer capítulo caiga en impar (derecha) y números de página desde 1
    import io
    from pypdf import PdfWriter
    from reportlab.pdfgen import canvas
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    FONT = 'Helvetica'   # se incrusta Liberation Sans (la del pie): KDP pide todas las fuentes incrustadas
    for fp in ['/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'] + glob.glob('/usr/share/fonts/**/LiberationSans-Regular.ttf', recursive=True):
        if os.path.exists(fp): pdfmetrics.registerFont(TTFont('LibSans', fp)); FONT = 'LibSans'; break
    r = PdfReader(OUT); w = PdfWriter(); F = F_PHYS[0]
    pw_, ph_ = float(r.pages[0].mediabox.width), float(r.pages[0].mediabox.height)
    for i, pg_ in enumerate(r.pages, 1):
        if i == F and len(w.pages) % 2 == 1: w.add_blank_page(pw_, ph_)
        w.add_page(pg_)
    F2 = F + (len(w.pages) - len(r.pages))
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(pw_, ph_), initialFontName=FONT, initialFontSize=8)   # sin Helvetica sin incrustar
    side = float(FMT['side'][:-2]) * 72 / 25.4
    for i in range(1, len(w.pages) + 1):
        if i >= F2:
            c.setFont(FONT, 8); c.setFillColorRGB(0x8A / 255, 0x94 / 255, 0x9B / 255)
            c.drawRightString(pw_ - side, ph_ - 689.2 * ph_ / 720, str(i - F2 + 1))
        c.showPage()
    c.save(); nums = PdfReader(io.BytesIO(buf.getvalue()))
    for i, pg_ in enumerate(w.pages):
        if i + 1 >= F2: pg_.merge_page(nums.pages[i])
        if '/Annots' in pg_: del pg_['/Annots']      # sin enlaces internos: en papel no sirven y KDP los marca
    w.write(OUT); npg = len(w.pages)
    print('KDP: primer capítulo en la página física', F2, '(número 1)')
print('final pages', npg, os.path.getsize(OUT), OUT)
