"""Traduce los rótulos de una ilustración: localiza cada rótulo inglés con tesseract,
lo tapa con el color de fondo y escribe encima el texto en español.

python3 relabel.py rotulos.json    (genera img/<salida> para cada entrada)

Formato de rotulos.json:
{ "salida.png": {"src": "src/original.png", "labels": [
    {"find": "Frontal lobe", "es": "Lóbulo frontal"},            # busca la frase en el OCR
    {"box": [x0,y0,x1,y1], "es": "Bulbo olfatorio", "align": "r"} # o caja manual
  ], "crop": [x0,y0,x1,y1], "erase": [[x0,y0,x1,y1]]}}
align: l (izquierda), r (derecha), c (centro). Por defecto según la posición en la imagen.
"""
import sys, os, json, re, subprocess, csv, io
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(HERE, '..', 'img')
FONT = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'
FONTB = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'
norm = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())


def flatten(path):
    im = Image.open(path).convert('RGBA')
    bg = Image.new('RGBA', im.size, 'white'); bg.alpha_composite(im)
    return bg.convert('RGB')


def words(im):
    im.save('/tmp/_ocr.png')
    out = subprocess.run(['tesseract', '/tmp/_ocr.png', '-', '--psm', '11', 'tsv'], capture_output=True, text=True).stdout
    ws = []
    for r in csv.DictReader(io.StringIO(out), delimiter='\t'):
        t = (r['text'] or '').strip()
        if t and norm(t):
            ws.append((norm(t), int(r['left']), int(r['top']), int(r['left']) + int(r['width']), int(r['top']) + int(r['height'])))
    return ws


def find(ws, phrase, used):
    target = [norm(p) for p in phrase.split() if norm(p)]
    n = len(target)
    # words are in reading order per line; try every start, allow matches on the same text line
    for i in range(len(ws)):
        if i in used: continue
        seq = ws[i:i + n]
        if len(seq) == n and all(a[0] == b for a, b in zip(seq, target)):
            if max(s[4] for s in seq) - min(s[2] for s in seq) < 2.2 * (seq[0][4] - seq[0][2]) + 4:
                used.update(range(i, i + n))
                return [min(s[1] for s in seq), min(s[2] for s in seq), max(s[3] for s in seq), max(s[4] for s in seq)]
    return None


def bgcolor(im, box, pad):
    x0, y0, x1, y1 = box
    px = []
    for x in range(max(0, x0 - pad), min(im.width, x1 + pad)):
        for y in (max(0, y0 - pad), min(im.height - 1, y1 + pad)):
            px.append(im.getpixel((x, y)))
    px.sort(key=sum)
    return px[len(px) * 3 // 4]  # light quantile: background, not the leader lines


def inkcolor(im, box):
    crop = im.crop(box); px = sorted(crop.getdata(), key=sum)
    return px[max(0, len(px) // 50)]


def run(spec):
    for out, cfg in spec.items():
        im = flatten(os.path.join(IMG, cfg['src']))
        ws = words(im)
        used = set(); d = ImageDraw.Draw(im); missing = []
        for x0, y0, x1, y1 in cfg.get('erase', []):
            d.rectangle([x0, y0, x1, y1], fill=bgcolor(im, (x0, y0, x1, y1), 3))
        jobs = []
        for L in cfg['labels']:
            box = L.get('box') or find(ws, L['find'], used)
            if not box:
                missing.append(L['find']); continue
            jobs.append((L, box, inkcolor(im, box)))
        # quitar el texto original: máscara de los píxeles del rótulo + inpainting (sin parches visibles)
        import numpy as np, cv2
        arr = np.array(im); mask = np.zeros(arr.shape[:2], np.uint8)
        for L, box, ink in jobs:
            pad = L.get('pad', 4)
            x0, y0, x1, y1 = max(0, box[0] - pad), max(0, box[1] - pad), min(im.width, box[2] + pad), min(im.height, box[3] + pad)
            if L.get('bg'):
                d.rectangle([x0, y0, x1, y1], fill=L['bg']); continue
            reg = arr[y0:y1, x0:x1].astype(int)
            med = np.median(reg.reshape(-1, 3), axis=0)
            diff = np.abs(reg - med).sum(axis=2)
            m = (diff > 90).astype(np.uint8) * 255
            m = cv2.dilate(m, np.ones((5, 5), np.uint8), iterations=2)
            mask[y0:y1, x0:x1] = np.maximum(mask[y0:y1, x0:x1], m)
        if jobs:
            arr = np.array(im)
            arr = cv2.inpaint(arr, mask, 7, cv2.INPAINT_TELEA)
            im = Image.fromarray(arr); d = ImageDraw.Draw(im)
        for L, box, ink in jobs:
            x0, y0, x1, y1 = box
            h = L.get('size') or cfg.get('size') or int((y1 - y0) * 1.12)
            font = ImageFont.truetype(FONTB if L.get('bold', cfg.get('bold')) else FONT, h)
            lines = L['es'].split('\n')
            tw = max(d.textlength(t, font=font) for t in lines)
            cx = (x0 + x1) / 2
            al = L.get('align') or ('r' if cx < im.width * 0.35 else 'l' if cx > im.width * 0.65 else 'c')
            ty = y0 - h * 0.12 - (len(lines) - 1) * h * 1.15 / 2 * (L.get('grow', 'both') == 'both')
            if L.get('grow') == 'down': ty = y0 - h * 0.12
            for t in lines:
                w = d.textlength(t, font=font)
                tx = x1 - w if al == 'r' else x0 if al == 'l' else cx - w / 2
                tx = min(max(2, tx), im.width - w - 2)
                col = L.get('color') or ink
                sw = L.get('stroke', cfg.get('stroke', 0))
                d.text((tx, ty), t, font=font, fill=col, stroke_width=sw, stroke_fill=(40, 30, 50))
                ty += h * 1.15
        if 'crop' in cfg: im = im.crop(cfg['crop'])
        im.save(os.path.join(IMG, out))
        print(out, 'OK' if not missing else 'NO ENCONTRADOS: ' + ' | '.join(missing))


if __name__ == '__main__':
    run(json.load(open(sys.argv[1], encoding='utf-8')))
