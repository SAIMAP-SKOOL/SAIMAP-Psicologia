"""Extrae el temario íntegro de cada asignatura, apartado por apartado, para la app.

python3 build_teoria.py <dist>   (lo llama build.py)

Para cada curso con temario en ../temarios/<id>/ genera:
  <dist>/teoria/<id>/uNN.json  {"m": [html 1.1, html 1.2, html 1.3, html 1.4], "c": html del cierre de la unidad}
  <dist>/teoria/<id>/img/*.webp (solo las figuras que se usan, reducidas para móvil)

- El texto de cada apartado N.k va antes de la lección k de la unidad N (los «Objetivos» de la unidad, en la lección 1).
- El cierre (Ejemplo resuelto, Consenso y debate, Mito frecuente, Conceptos clave, Clave PIR) va antes del repaso.
- La Autoevaluación y sus Soluciones no se incluyen: en la app, los ejercicios cumplen esa función.
"""
import sys, os, re, json, glob, html as H
import markdown
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, 'kit'))

BOX = {'Consenso y debate': 'consenso', 'Mito frecuente': 'mito', 'Clave PIR': 'pir',
       'Conceptos clave': 'claves', 'Ejemplo resuelto': 'ejemplo'}
SKIP = ('Autoevaluación', 'Soluciones')
CIERRE_ORDEN = ['ejemplo', 'consenso', 'mito', 'claves', 'pir']
MAXW = 1100


def emphasis(src):
    """*em* y **strong** (también anidados), igual que el constructor del libro."""
    TAG = {'*': 'em', '**': 'strong'}
    out = []
    for line in src.split('\n'):
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
                        k = 0
            buf += ''.join(f'</{TAG[t]}>' for t in reversed(stack))
            res.append(buf)
        out.append('|'.join(res))
    return '\n'.join(out)


def to_html(md, cid, used):
    md = re.sub(r'_{3,}', '<span class="gap"></span>', md)
    h = markdown.markdown(emphasis(md), extensions=['tables', 'nl2br', 'sane_lists'])

    def img(m):
        size, f = m.group(1), m.group(2)
        used.add(f)
        name = os.path.splitext(f)[0] + '.webp'
        return f'<p class="fig {size}"><img src="teoria/{cid}/img/{name}" alt="" loading="lazy" decoding="async"></p>'
    h = re.sub(r'<p><img alt="([^"]*)" src="([^"]+)" ?/?></p>', img, h)
    h = re.sub(r'(<p class="fig[^"]*">.*?</p>)\s*<p>(Figura .*?)</p>', r'<figure>\1<figcaption>\2</figcaption></figure>', h, flags=re.S)
    h = re.sub(r'<thead>\s*<tr>\s*(?:<th></th>\s*)+</tr>\s*</thead>', '', h)
    # fórmulas: conservar los espacios que separan expresiones en una misma línea
    h = re.sub(r'<blockquote>.*?</blockquote>', lambda m: re.sub(r'(?<=\S) {2,}(?=\S)', '<span class="sp"></span>', m.group(0)), h, flags=re.S)
    h = re.sub(r'<table>', '<div class="tw"><table>', h).replace('</table>', '</table></div>')
    return h


def split_units(src):
    """→ {n: {'intro': md, 'secs': {k: md}, 'boxes': [(cls, título, md)]}}"""
    units = {}
    cur = None; sec = None
    for line in src.split('\n'):
        m = re.match(r'^## Unidad (\d+) · (.*)$', line)
        if m:
            cur = units.setdefault(int(m.group(1)), {'intro': [], 'secs': {}, 'boxes': []}); sec = ('intro', None); continue
        if line.startswith('# ') or (line.startswith('## ') and not m):
            cur = None; continue
        if cur is None:
            continue
        m3 = re.match(r'^### (.*)$', line)
        if m3:
            title = m3.group(1).strip()
            mk = re.match(r'^(\d+)\.(\d) ', title)
            if mk:
                cur['secs'][int(mk.group(2))] = []; sec = ('sec', int(mk.group(2)))
            else:
                base = title.split(' · ')[0].strip()
                if base in SKIP:
                    sec = ('skip', None)
                elif base in BOX:
                    cur['boxes'].append([BOX[base], title, []]); sec = ('box', len(cur['boxes']) - 1)
                else:
                    print('AVISO: recuadro desconocido', title); sec = ('skip', None)
            continue
        kind, k = sec
        if kind == 'intro': cur['intro'].append(line)
        elif kind == 'sec': cur['secs'][k].append(line)
        elif kind == 'box': cur['boxes'][k][2].append(line)
    return units


def build(dist):
    total = 0
    for cdir in sorted(glob.glob(os.path.join(ROOT, 'cursos', '*', 'course.js'))):
        cid = os.path.basename(os.path.dirname(cdir))
        tdir = os.path.join(ROOT, 'temarios', cid)
        if not os.path.exists(os.path.join(tdir, 'book.json')):
            print('AVISO: sin temario para', cid); continue
        cfg = json.load(open(os.path.join(tdir, 'book.json'), encoding='utf-8'))
        units = {}
        for fn in cfg['unit_files']:
            units.update(split_units(open(os.path.join(tdir, fn), encoding='utf-8').read()))
        out = os.path.join(dist, 'teoria', cid); os.makedirs(os.path.join(out, 'img'), exist_ok=True)
        used = set(); size = 0
        for n in sorted(units):
            u = units[n]
            assert sorted(u['secs']) == [1, 2, 3, 4], f'{cid} U{n}: apartados {sorted(u["secs"])}'
            mods = []
            for k in range(1, 5):
                md = '\n'.join(u['secs'][k]).strip()
                if k == 1:
                    intro = '\n'.join(u['intro']).strip()
                    if intro:
                        md = intro + '\n\n' + md
                mods.append(to_html(md, cid, used))
            if mods[0].startswith('<p><strong>Objetivos:</strong>'):
                mods[0] = re.sub(r'^<p><strong>Objetivos:</strong>\s*(\w)', lambda m: '<p class="obj"><strong>Objetivos de la unidad</strong>' + m.group(1).upper(), mods[0], count=1)
            boxes = list(u['boxes'])
            if len(re.sub(r'<[^>]+>', '', mods[3])) < 400 and boxes and boxes[0][0] in ('mito', 'consenso', 'ejemplo'):
                # apartado que es solo la entrada de un recuadro (p. ej. «Mitos generales sobre el cerebro»): el recuadro va con él
                cls, t, lines = boxes.pop(0)
                mods[3] += f'<div class="blk {cls}"><h3>{H.escape(t)}</h3>{to_html(chr(10).join(lines).strip(), cid, used)}</div>'
            boxes = sorted(boxes, key=lambda b: CIERRE_ORDEN.index(b[0]))
            cierre = ''.join(f'<div class="blk {cls}"><h3>{H.escape(t)}</h3>{to_html(chr(10).join(lines).strip(), cid, used)}</div>'
                             for cls, t, lines in boxes)
            js = json.dumps({'m': mods, 'c': cierre}, ensure_ascii=False, separators=(',', ':'))
            open(os.path.join(out, f'u{n:02d}.json'), 'w', encoding='utf-8').write(js)
            size += len(js.encode())
        assert sorted(units) == list(range(1, 17)), f'{cid}: unidades {sorted(units)}'
        isz = 0
        for f in sorted(used):
            src = os.path.join(tdir, 'img', f)
            im = Image.open(src)
            im = im.convert('RGBA') if im.mode in ('RGBA', 'LA', 'P') else im.convert('RGB')
            if im.mode == 'RGBA':      # fondo blanco: las figuras se ven sobre una tarjeta blanca también en modo oscuro
                bg = Image.new('RGB', im.size, 'white'); bg.paste(im, mask=im.split()[3]); im = bg
            if im.width > MAXW:
                im = im.resize((MAXW, round(im.height * MAXW / im.width)), Image.LANCZOS)
            dst = os.path.join(out, 'img', os.path.splitext(f)[0] + '.webp')
            im.save(dst, 'WEBP', quality=80, method=6)
            isz += os.path.getsize(dst)
        print(f'teoría {cid}: 16 unidades, texto {size // 1024} KB, {len(used)} figuras {isz // 1024} KB')
        total += size + isz
    print('teoría total', total // 1024, 'KB')


if __name__ == '__main__':
    build(sys.argv[1])
