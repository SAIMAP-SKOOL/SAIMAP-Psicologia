"""python build_epub.py <temario_dir> [salida.epub]

EPUB 3 de un temario SAIMAP Psicología a partir de los mismos Markdown y book.json que el PDF.
Un archivo XHTML por archivo de book.json, índice navegable (capítulos y unidades), recuadros con estilo,
figuras reducidas a 1200 px y portada generada con los colores del libro.
"""
import os, sys, re, json, html as H, uuid, zipfile, io, datetime
import markdown
from PIL import Image, ImageDraw, ImageFont

D = os.path.abspath(sys.argv[1])
CFG = json.load(open(os.path.join(D, 'book.json'), encoding='utf-8'))
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(D, 'pdf', CFG['pdf'].replace('.pdf', '.epub'))
C = CFG['colors']; P, A, TINT = C['P'], C['A'], C['TINT']
BOX = {n: cls for cls, names in CFG.get('boxes', {}).items() for n in names}
TITLE = re.sub(r'<br\s*/?>', ' ', CFG['cover_title']).replace('  ', ' ').strip()

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
# reutiliza el conversor de énfasis del constructor del PDF sin ejecutarlo
_src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'build_temario.py'), encoding='utf-8').read()
_m = re.search(r'def emphasis\(src, fn\):.*?\n    return .*?\n', _src, re.S)
exec(_m.group(0))

ENT = re.compile(r'&([a-zA-Z][a-zA-Z0-9]*);')
def xmlsafe(h):
    h = ENT.sub(lambda m: m.group(0) if m.group(1) in ('amp', 'lt', 'gt', 'quot', 'apos') else H.unescape(m.group(0)), h)
    h = re.sub(r'<(img|br|hr)([^>]*?)\s*/?>', r'<\1\2 />', h)
    return h

images, chapters, nav = {}, [], []
n = 0
for idx, fn in enumerate(CFG['files']):
    src = open(os.path.join(D, fn), encoding='utf-8').read()
    src = re.sub(r'_{3,}', '<span class="gap"></span>', src)
    def _cells(line):  # asterisco de nota suelto al final de una celda (número impar de asteriscos)
        if not line.lstrip().startswith('|'): return line
        return '|'.join(re.sub(r'\*(\s*)$', r'∗\1', c) if c.count('*') % 2 else c for c in line.split('|'))
    src = '\n'.join(_cells(l) for l in src.split('\n'))
    src = src.replace('(*)', '(∗)')
    src = emphasis(src, fn)
    h = markdown.markdown(src, extensions=['tables', 'nl2br', 'sane_lists'], output_format='xhtml')
    def img(m):
        size, name = m.group(1), m.group(2)
        images[name] = True
        return f'<p class="fig {size}"><img src="img/{name}" alt="" /></p>'
    h = re.sub(r'<p><img alt="([^"]*)" src="([^"]+)" ?/?></p>', img, h)
    h = re.sub(r'(<p class="fig[^"]*">.*?</p>)\s*<p>(Figura .*?)</p>', r'<figure>\1<figcaption>\2</figcaption></figure>', h, flags=re.S)
    h = re.sub(r'<thead>\s*<tr>\s*(?:<th></th>\s*)+</tr>\s*</thead>', '', h)
    parts = re.split(r'(?=<h[123][ >])', h); out = ''
    for part in parts:
        m = re.match(r'<h3>(.*?)</h3>', part, flags=re.S)
        if m:
            cls = BOX.get(H.unescape(re.sub('<[^>]+>', '', m.group(1))).strip())
            if cls: part = f'<div class="blk {cls}">{part}</div>'
        out += part
    xfile = f'c{idx:02d}.xhtml'
    def hrep(m):
        global n
        n += 1; a = f's{n}'
        nav.append((int(m.group(1)), H.unescape(re.sub('<[^>]+>', '', m.group(2))).strip(), f'{xfile}#{a}'))
        return f'<h{m.group(1)} id="{a}">{m.group(2)}</h{m.group(1)}>'
    out = re.sub(r'<h([12])>(.*?)</h\1>', hrep, out, flags=re.S)
    ctitle = next((t for l, t, f in nav if f.startswith(xfile) and l == 1), TITLE)
    chapters.append((xfile, ctitle, xmlsafe(out)))

CSS = f'''body{{font-family:serif;line-height:1.45;margin:0 3%}}
h1{{color:{P};font-size:1.6em;border-bottom:2px solid {P};padding-bottom:.2em;margin-top:1em}}
h2{{color:#fff;background:{P};font-size:1.25em;padding:.35em .6em;border-radius:.4em;margin-top:1.4em;page-break-before:always}}
section.plain h2{{color:{P};background:none;padding:0;page-break-before:auto}}
h3{{color:{A};font-size:1.08em;margin:1.2em 0 .4em}}
table{{border-collapse:collapse;width:100%;font-size:.88em;margin:.6em 0}}
th,td{{border:1px solid #c9d2d8;padding:.25em .4em;vertical-align:top;text-align:left}}
th{{background:{TINT}}}
figure{{margin:1em 0;text-align:center;page-break-inside:avoid}}
p.fig{{margin:0;text-align:center}} p.fig img{{max-width:100%}} p.fig.m img{{max-width:75%}} p.fig.s img{{max-width:55%}}
figcaption{{font-size:.85em;color:#55626b;text-align:left;margin-top:.3em}}
.blk{{margin:1em 0;padding:.5em .8em;border-radius:.4em}}
.blk h3{{margin-top:.2em}}
.blk.consenso{{background:#EEF6F0;border-left:4px solid #3E8E5E}} .blk.consenso h3{{color:#2F6E48}}
.blk.mito{{background:#FBF6EC;border-left:4px solid #E0A83A}} .blk.mito h3{{color:#A8741A}}
.blk.pir{{border:1px solid {A}}}
.blk.claves{{background:{TINT}}} .blk.claves h3{{color:{P}}} .blk.claves td,.blk.claves th{{background:#fff}}
.blk.answers{{background:#F3F4F5;font-size:.9em}} .blk.answers h3{{color:#5b6770}}
.blk.ejemplo{{border:1px solid #c9d2d8}}
.gap{{display:inline-block;width:3em;border-bottom:1px solid currentColor}}
.cover{{text-align:center;margin:0;padding:0}} .cover img{{max-width:100%;max-height:100%}}
'''

def xhtml(title, body, cls=''):
    return f'''<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="es" lang="es">
<head><meta charset="utf-8" /><title>{H.escape(title)}</title><link rel="stylesheet" type="text/css" href="style.css" /></head>
<body{f' class="{cls}"' if cls else ''}>{body}</body></html>'''

def cover_png():
    W, Hh = 1600, 2400
    im = Image.new('RGB', (W, Hh), 'white'); d = ImageDraw.Draw(im)
    for i, c in enumerate(C['STRIPE']): d.rectangle([140 + i * 150, 220, 140 + i * 150 + 140, 250], fill=c)
    def font(sz, bold=True):
        for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']:
            if os.path.exists(f): return ImageFont.truetype(f, sz)
        return ImageFont.load_default()
    y = 420
    for line in re.split(r'<br\s*/?>', CFG['cover_title']):
        d.text((140, y), line.strip(), fill=P, font=font(150)); y += 185
    d.text((140, y + 40), CFG.get('subtitle', 'Temario SAIMAP · Psicología'), fill='#26323A', font=font(60, False))
    y += 200
    words, line, fb = CFG.get('blurb', '').split(), '', font(44, False)
    for w in words:
        t = (line + ' ' + w).strip()
        if d.textlength(t, font=fb) > W - 280: d.text((140, y), line, fill='#5b6770', font=fb); y += 62; line = w
        else: line = t
    if line: d.text((140, y), line, fill='#5b6770', font=fb)
    d.text((140, Hh - 260), 'SAIMAP PSICOLOGÍA', fill=A, font=font(64))
    b = io.BytesIO(); im.save(b, 'PNG', optimize=True); return b.getvalue()

def img_bytes(name):
    p = os.path.join(D, 'img', name)
    im = Image.open(p)
    if im.width > 1200: im = im.resize((1200, round(im.height * 1200 / im.width)), Image.LANCZOS)
    b = io.BytesIO()
    if name.lower().endswith(('.jpg', '.jpeg')):
        im.convert('RGB').save(b, 'JPEG', quality=86); mt = 'image/jpeg'
    elif name.lower().endswith('.gif'):
        im.save(b, 'GIF'); mt = 'image/gif'
    else:
        im.save(b, 'PNG', optimize=True); mt = 'image/png'
    return b.getvalue(), mt

uid = 'urn:uuid:' + str(uuid.uuid5(uuid.NAMESPACE_URL, 'saimap-psicologia/' + os.path.basename(D)))
now = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
os.makedirs(os.path.dirname(OUT), exist_ok=True)
manifest, spine = [], []
with zipfile.ZipFile(OUT, 'w') as z:
    z.writestr(zipfile.ZipInfo('mimetype'), 'application/epub+zip', compress_type=zipfile.ZIP_STORED)
    zc = lambda name, data: z.writestr(name, data, compress_type=zipfile.ZIP_DEFLATED)
    zc('META-INF/container.xml', '<?xml version="1.0"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>')
    zc('OEBPS/style.css', CSS); manifest.append('<item id="css" href="style.css" media-type="text/css"/>')
    zc('OEBPS/cover.png', cover_png()); manifest.append('<item id="cover-img" href="cover.png" media-type="image/png" properties="cover-image"/>')
    zc('OEBPS/cover.xhtml', xhtml(TITLE, '<div class="cover"><img src="cover.png" alt="Portada" /></div>', 'cover'))
    manifest.append('<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>'); spine.append('<itemref idref="cover" linear="yes"/>')
    # índice navegable
    li, open_ul = '', False
    for lvl, t, href in nav:
        if lvl == 1:
            if open_ul: li += '</ol></li>'; open_ul = False
            li += f'<li><a href="{href}">{H.escape(t)}</a>'
            li += '<ol>'; open_ul = True
        else:
            if not open_ul: li += '<li><a href="' + href + '">' + H.escape(t) + '</a><ol>'; open_ul = True; continue
            li += f'<li><a href="{href}">{H.escape(t)}</a></li>'
    if open_ul: li += '</ol></li>'
    li = li.replace('<ol></ol>', '')
    zc('OEBPS/nav.xhtml', xhtml('Índice', f'<nav epub:type="toc" id="toc"><h1>Índice</h1><ol>{li}</ol></nav>'))
    manifest.append('<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>'); spine.append('<itemref idref="nav"/>')
    for i, (xf, t, body) in enumerate(chapters):
        cls = 'units' if CFG['files'][i] in CFG['unit_files'] else 'plain'
        zc('OEBPS/' + xf, xhtml(t, f'<section class="{cls}">{body}</section>'))
        manifest.append(f'<item id="c{i}" href="{xf}" media-type="application/xhtml+xml"/>'); spine.append(f'<itemref idref="c{i}"/>')
    for k, name in enumerate(sorted(images)):
        data, mt = img_bytes(name)
        zc('OEBPS/img/' + name, data); manifest.append(f'<item id="i{k}" href="img/{name}" media-type="{mt}"/>')
    opf = f'''<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="es">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="bookid">{uid}</dc:identifier><dc:title>{H.escape(TITLE)}</dc:title><dc:language>es</dc:language>
<dc:creator>SAIMAP Psicología</dc:creator><dc:publisher>SAIMAP</dc:publisher><dc:description>{H.escape(CFG.get('blurb', ''))}</dc:description>
<meta property="dcterms:modified">{now}</meta><meta name="cover" content="cover-img"/>
</metadata>
<manifest>{''.join(manifest)}</manifest>
<spine>{''.join(spine)}</spine>
</package>'''
    zc('OEBPS/content.opf', opf)
print('epub', OUT, os.path.getsize(OUT) // 1024, 'KB', len(chapters), 'capítulos', len(images), 'imágenes', len([x for x in nav if x[0] == 2]), 'secciones h2')
