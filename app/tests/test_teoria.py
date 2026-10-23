"""Comprueba dist/teoria: 16 unidades × (4 apartados + cierre) por curso, sin restos de Markdown, figuras presentes."""
import os, re, json, glob
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'dist')
bad = []
for cdir in sorted(glob.glob(os.path.join(D, 'teoria', '*'))):
    cid = os.path.basename(cdir); nfig = 0
    for n in range(1, 17):
        T = json.load(open(os.path.join(cdir, f'u{n:02d}.json'), encoding='utf-8'))
        if len(T['m']) != 4: bad.append(f'{cid} U{n}: {len(T["m"])} apartados')
        for k, h in enumerate(T['m'] + [T['c']], 1):
            txt = re.sub(r'<[^>]+>', '', h)
            if k <= 4 and len(txt) < 450: bad.append(f'{cid} U{n}.{k}: texto corto ({len(txt)})')
            if re.search(r'\*\*|^#+ |!\[', txt, re.M): bad.append(f'{cid} U{n}.{k}: restos de Markdown')
            if re.search(r'Autoevaluación|Soluciones</h3>', h): bad.append(f'{cid} U{n}.{k}: incluye autoevaluación')
            for src in re.findall(r'src="([^"]+)"', h):
                nfig += 1
                if not os.path.exists(os.path.join(D, src)): bad.append(f'{cid} U{n}.{k}: falta {src}')
            if h.count('<figure>') != h.count('<figcaption>'): bad.append(f'{cid} U{n}.{k}: figura sin pie')
            if '<p class="fig' in h and h.count('<p class="fig') != h.count('<figure>'): bad.append(f'{cid} U{n}.{k}: figura sin pie')
    print(cid, 'figuras referenciadas', nfig)
print('\n'.join(bad) if bad else 'TEORÍA SIN ERRORES')
