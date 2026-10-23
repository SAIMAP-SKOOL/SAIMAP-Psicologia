"""Lista las líneas de texto (con caja) que detecta tesseract en una imagen. python3 ocr_lines.py img.png"""
import sys, subprocess, csv, io
from PIL import Image
f = sys.argv[1]
im = Image.open(f).convert('RGBA'); bg = Image.new('RGBA', im.size, 'white'); bg.alpha_composite(im)
tmp = '/tmp/_ocr.png'; bg.convert('RGB').save(tmp)
out = subprocess.run(['tesseract', tmp, '-', '--psm', '11', 'tsv'], capture_output=True, text=True).stdout
rows = [r for r in csv.DictReader(io.StringIO(out), delimiter='\t') if r['text'] and r['text'].strip() and float(r['conf']) > 30]
lines = {}
for r in rows:
    k = (r['block_num'], r['par_num'], r['line_num'])
    x, y, w, h = (int(r[c]) for c in ('left', 'top', 'width', 'height'))
    L = lines.setdefault(k, [10**9, 10**9, 0, 0, []])
    L[0] = min(L[0], x); L[1] = min(L[1], y); L[2] = max(L[2], x + w); L[3] = max(L[3], y + h); L[4].append(r['text'])
for i, (x0, y0, x1, y1, t) in enumerate(sorted(lines.values(), key=lambda v: (v[1], v[0]))):
    print(f'{i}\t{x0},{y0},{x1},{y1}\t{" ".join(t)}')
