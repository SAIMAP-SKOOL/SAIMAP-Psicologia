"""Figuras propias del temario de Personalidad y Diferencias Individuales II. python3 tools/figuras.py → img/*"""
import os, sys, numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle, Rectangle

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'img')
P, A, G, Y, V, T, INK, MUTE = '#2D5A7B', '#C8553D', '#5FA47A', '#E0A83A', '#7A5BA8', '#3E8E9B', '#26323A', '#8A949B'
SOFT = '#F3F0EA'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10, 'axes.edgecolor': MUTE, 'axes.labelcolor': INK,
                     'xtick.color': MUTE, 'ytick.color': MUTE, 'axes.titlesize': 10.5, 'axes.titlecolor': INK})
ONLY = set(sys.argv[1:])


def want(n): return not ONLY or n in ONLY
def clean(ax):
    for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
def save(fig, name):
    fig.tight_layout(); fig.savefig(f'{OUT}/{name}', dpi=200); plt.close(fig); print('ok', name)
def canvas(w, h, xl, yl):
    fig, ax = plt.subplots(figsize=(w, h)); ax.set_xlim(0, xl); ax.set_ylim(0, yl); ax.axis('off'); return fig, ax
def box(ax, x, y, w, h, t, c, fs=9, tc='white', bold=True, ec='none', r=0.12):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h, boxstyle=f'round,pad=0.02,rounding_size={r}', fc=c, ec=ec, lw=1.2))
    ax.text(x, y, t, ha='center', va='center', color=tc, fontsize=fs, weight='bold' if bold else 'normal', linespacing=1.25)
def arr(ax, a, b, c=INK, ls='-', rad=0, lw=1.4, ms=12):
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-|>', mutation_scale=ms, color=c, lw=lw, ls=ls, connectionstyle=f'arc3,rad={rad}', shrinkA=2, shrinkB=2))
def pct(v): return f'{v:.1f}'.replace('.', ',').replace(',0', '') + ' %'


def dot(ax, x, y, t, c, ms=34, fs=12, tc='white'):
    ax.plot([x], [y], 'o', ms=ms, color=c, mec='none'); ax.text(x, y, t, ha='center', va='center', color=tc, fontsize=fs, weight='bold')


def note(ax, t='Esquema ilustrativo, no datos', y=-.24):
    ax.text(0, y, t, transform=ax.transAxes, fontsize=7.4, color=MUTE)



# Plantilla de figura: copiar este archivo a temarios/<id>/tools/figuras.py y añadir un bloque por figura.
# if want('nombre'):
#     fig, ax = canvas(7.4, 3, 12, 5)
#     box(ax, 3, 2.5, 3, 1, 'Concepto A', P); box(ax, 9, 2.5, 3, 1, 'Concepto B', G); arr(ax, (4.6, 2.5), (7.4, 2.5))
#     save(fig, 'nombre.png')
# Si un gráfico es un esquema y no datos reales, añade note(ax).
if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)

    # U1 · línea del tiempo
    if want('linea-tiempo-ci'):
        ev = [(1884, 'Galton', 'laboratorio\nantropométrico'), (1890, 'J. McK. Cattell', '«mental tests»'), (1904, 'Spearman', 'factor g'), (1905, 'Binet y Simon', 'escala\nBinet-Simon'),
              (1912, 'Stern', 'cociente\nintelectual'), (1916, 'Terman', 'Stanford-Binet'), (1917, 'Army Alpha\ny Beta', 'tests colectivos\n(EE. UU.)'), (1939, 'Wechsler', 'CI de\ndesviación'),
              (1983, 'Gardner', 'inteligencias\nmúltiples'), (1985, 'Sternberg', 'teoría\ntriárquica'), (1993, 'Carroll', 'tres estratos'), (1997, 'Gottfredson', 'declaración')]
        fig, ax = canvas(7.4, 3.4, 13, 5.6)
        ax.plot([.2, 12.8], [2.8, 2.8], color=MUTE, lw=2)
        cols = [P, G, Y, V, A, T, '#8A6A50']
        for i, (yr, a, d) in enumerate(ev):
            x = .65 + i * 1.07; up = i % 2 == 0; c = cols[i % 7]
            ax.plot([x], [2.8], 'o', color=c, ms=8)
            ax.text(x, 2.45 if up else 3.15, str(yr), ha='center', va='top' if up else 'bottom', fontsize=8.2, color=c, weight='bold')
            ax.plot([x, x], [3.0, 3.45] if up else [2.6, 2.15], color=c, lw=.8)
            ax.text(x, 3.55 if up else 2.05, a, ha='center', va='bottom' if up else 'top', fontsize=7.4, color=INK, weight='bold')
            ax.text(x, 4.35 if up else 1.25, d, ha='center', va='bottom' if up else 'top', fontsize=7.0, color=MUTE)
        note(ax, y=-.02)
        save(fig, 'linea-tiempo-ci.png')

    # U1 · CI de razón y de desviación
    if want('ci-desviacion'):
        fig, (a1, a2) = plt.subplots(2, 1, figsize=(7.4, 4.2), gridspec_kw={'height_ratios': [.8, 2]})
        a1.set_xlim(0, 12); a1.set_ylim(0, 2.4); a1.axis('off')
        a1.text(.2, 2.05, 'CI de razón', fontsize=9.4, color=P, weight='bold')
        a1.text(3.4, 1.15, r'CI = $\dfrac{\mathrm{edad\ mental}}{\mathrm{edad\ cronológica}}$ × 100', ha='center', va='center', fontsize=11, color=INK)
        a1.text(9.0, 1.15, r'Ejemplo: $\dfrac{10}{8}$ × 100 = 125', ha='center', va='center', fontsize=11, color=A)
        x = np.linspace(45, 155, 500); y = np.exp(-((x - 100) / 15) ** 2 / 2)
        a2.plot(x, y, color=P, lw=2.2); m = (x >= 85) & (x <= 115); a2.fill_between(x[m], y[m], color=P, alpha=.18)
        for v in (70, 85, 100, 115, 130): a2.plot([v, v], [0, np.exp(-((v - 100) / 15) ** 2 / 2)], color=MUTE, lw=.9, ls=':')
        a2.text(100, .45, '≈ 68 % entre\n85 y 115', ha='center', fontsize=9, color=P, weight='bold')
        a2.text(47, .9, 'CI de desviación\nmedia 100, DT 15', fontsize=9.4, color=P, weight='bold', va='top')
        a2.set_xticks([70, 85, 100, 115, 130]); a2.set_yticks([]); a2.set_ylim(0, 1.08); a2.set_xlim(45, 155); a2.set_xlabel('Puntuación de CI')
        clean(a2); a2.spines['left'].set_visible(False); note(a2, y=-.3)
        save(fig, 'ci-desviacion.png')

    # U2 · Spearman y Thurstone
    if want('spearman-thurstone'):
        fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.5), gridspec_kw={'width_ratios': [1, 1.35]})
        for a in (a1, a2): a.axis('off')
        a1.set_xlim(0, 8); a1.set_ylim(0, 6.4)
        a1.text(4, 6.15, 'Spearman: bifactorial', ha='center', fontsize=9.4, color=P, weight='bold')
        dot(a1, 4, 4.6, 'g', P, 36, 15)
        for i in range(4):
            x = 1.1 + i * 1.95; box(a1, x, 2.2, 1.5, .7, f'Test {i + 1}', '#C9D4DC', 8.4, tc=INK); arr(a1, (4 + (x - 4) * .2, 3.95), (x, 2.6), P)
            dot(a1, x, .75, f's{i + 1}', Y, 20, 8.4, INK); arr(a1, (x, 1.13), (x, 1.83), MUTE)
        a2.set_xlim(0, 11.4); a2.set_ylim(0, 6.4)
        a2.text(5.7, 6.15, 'Thurstone: aptitudes mentales primarias', ha='center', fontsize=9.4, color=G, weight='bold')
        box(a2, 5.7, 4.6, 4.4, .7, 'g de segundo orden', 'white', 8.6, tc=MUTE, ec=MUTE)
        a2.patches[-1].set_linestyle('--')
        ap = [('V', 'comprensión\nverbal'), ('W', 'fluidez\nverbal'), ('N', 'numérica'), ('S', 'espacial'), ('M', 'memoria'), ('P', 'rapidez\nperceptiva'), ('R', 'razona-\nmiento')]
        for i, (k, t) in enumerate(ap):
            x = .7 + i * 1.67; box(a2, x, 2.6, 1.25, .75, k, G, 11); a2.text(x, 2.05, t, ha='center', va='top', fontsize=7.1, color=INK)
            arr(a2, (5.7 + (x - 5.7) * .3, 4.22), (x, 3.0), MUTE, ls='--', lw=1)
        note(a1, y=-.02)
        save(fig, 'spearman-thurstone.png')

    # U2 · cubo de Guilford
    if want('cubo-guilford'):
        fig, ax = canvas(7.4, 4.3, 13, 7.6)
        x0, y0, cw, ch, dx, dy = 4.2, .9, .85, .62, .5, .3   # 4 contenidos × 6 productos × 5 operaciones
        W, H = 4 * cw, 6 * ch
        for k in range(5, -1, -1):  # capas de profundidad (líneas)
            ox, oy = x0 + k * dx, y0 + k * dy
            if k == 0: ax.add_patch(Rectangle((ox, oy), W, H, fc='#DCE7F0', ec=P, lw=1.2))
        for i in range(5):  # cara superior
            for j in range(4):
                pts = [(x0 + j * cw + i * dx, y0 + H + i * dy), (x0 + (j + 1) * cw + i * dx, y0 + H + i * dy), (x0 + (j + 1) * cw + (i + 1) * dx, y0 + H + (i + 1) * dy), (x0 + j * cw + (i + 1) * dx, y0 + H + (i + 1) * dy)]
                ax.add_patch(plt.Polygon(pts, fc='#EEF3F8', ec=P, lw=.8))
        for i in range(5):  # cara lateral
            for r in range(6):
                pts = [(x0 + W + i * dx, y0 + r * ch + i * dy), (x0 + W + (i + 1) * dx, y0 + r * ch + (i + 1) * dy), (x0 + W + (i + 1) * dx, y0 + (r + 1) * ch + (i + 1) * dy), (x0 + W + i * dx, y0 + (r + 1) * ch + i * dy)]
                ax.add_patch(plt.Polygon(pts, fc='#C6D7E6', ec=P, lw=.8))
        for j in range(1, 4): ax.plot([x0 + j * cw] * 2, [y0, y0 + H], color=P, lw=.8)
        for r in range(1, 6): ax.plot([x0, x0 + W], [y0 + r * ch] * 2, color=P, lw=.8)
        prod = ['unidades', 'clases', 'relaciones', 'sistemas', 'transformaciones', 'implicaciones']
        for r, t in enumerate(prod): ax.text(x0 - .12, y0 + H - (r + .5) * ch, t, ha='right', va='center', fontsize=7.6, color=INK)
        ax.text(x0 - 2.2, y0 + H / 2, 'PRODUCTOS', rotation=90, ha='center', va='center', fontsize=8.6, color=A, weight='bold')
        cont = ['figura-\ntivo', 'simbó-\nlico', 'semán-\ntico', 'conduc-\ntual']
        for j, t in enumerate(cont): ax.text(x0 + (j + .5) * cw, y0 - .1, t, ha='center', va='top', fontsize=7.2, color=INK, linespacing=1.05)
        ax.text(x0 + W / 2, y0 - .72, 'CONTENIDOS', ha='center', va='top', fontsize=8.6, color=G, weight='bold')
        ops = ['cognición', 'memoria', 'producción divergente', 'producción convergente', 'evaluación']
        for i, t in enumerate(ops):
            ax.text(x0 + (i + .5) * dx - .12, y0 + H + (i + .5) * dy, t, ha='right', va='center', fontsize=7.6, color=INK)
        ax.text(x0 + 5 * dx - .1, y0 + H + 5 * dy + .45, 'OPERACIONES', ha='right', va='center', fontsize=8.6, color=P, weight='bold')
        ax.plot([x0 + W + .3, x0 + W + 5 * dx + .3], [y0 + H + .45, y0 + H + 5 * dy + .45], color=MUTE, lw=0)
        box(ax, 11.75, 3.0, 2.3, 1.7, '5 × 4 × 6 = 120\n(1967)\n→ 150 (1977)\n→ 180 (1988)', SOFT, 8.2, tc=INK, ec=MUTE)
        note(ax, y=-.01)
        save(fig, 'cubo-guilford.png')

    # U3 · tres estratos de Carroll
    if want('tres-estratos'):
        fig, ax = canvas(7.4, 3.5, 13, 6)
        ax.text(.1, 5.0, 'Estrato III', fontsize=8.4, color=MUTE, weight='bold'); ax.text(.1, 3.0, 'Estrato II', fontsize=8.4, color=MUTE, weight='bold'); ax.text(.1, .85, 'Estrato I', fontsize=8.4, color=MUTE, weight='bold')
        box(ax, 7.1, 5.05, 1.6, .75, 'g', P, 13)
        br = ['inteligencia\nfluida', 'inteligencia\ncristalizada', 'memoria y\naprendizaje', 'percepción\nvisual', 'percepción\nauditiva', 'capacidad de\nrecuperación', 'velocidad\ncognitiva', 'velocidad de\nprocesamiento']
        for i, t in enumerate(br):
            x = 2.05 + i * 1.45; box(ax, x, 3.05, 1.38, .95, t, G, 6.5); arr(ax, (7.1 + (x - 7.1) * .15, 4.65), (x, 3.55), MUTE, lw=1)
            for k in (-.35, 0, .35): ax.plot([x, x + k], [2.55, 1.35], color=MUTE, lw=.6)
        ax.add_patch(FancyBboxPatch((1.6, .55), 11.2, .75, boxstyle='round,pad=0.02,rounding_size=0.12', fc=SOFT, ec=MUTE))
        ax.text(7.2, .92, 'decenas de aptitudes específicas', ha='center', va='center', fontsize=8.8, color=INK)
        ax.text(12.8, 5.3, 'Carroll (1993)', ha='right', fontsize=8, color=MUTE, style='italic')
        note(ax, y=-.03)
        save(fig, 'tres-estratos.png')

    # U3 · modelos de g
    if want('g-modelos'):
        fig, axs = plt.subplots(1, 3, figsize=(7.4, 3.3))
        for a in axs: a.set_xlim(0, 6); a.set_ylim(0, 6.6); a.axis('off')
        a1, a2, a3 = axs
        a1.text(3, 6.35, 'Causa común', ha='center', fontsize=9.2, color=P, weight='bold')
        dot(a1, 3, 4.6, 'g', P, 30, 14)
        for i in range(4):
            x = .8 + i * 1.47; box(a1, x, 1.9, 1.15, .65, f'T{i + 1}', '#C9D4DC', 8.4, tc=INK); arr(a1, (3 + (x - 3) * .2, 3.98), (x, 2.27), P)
        a2.text(3, 6.35, 'Mutualismo', ha='center', fontsize=9.2, color=G, weight='bold')
        pos = [(1.5, 4.5), (4.5, 4.5), (4.5, 2.2), (1.5, 2.2)]
        for i, (x, y) in enumerate(pos): dot(a2, x, y, f'P{i + 1}', G, 26, 8.6)
        for i, j in [(0, 1), (1, 2), (2, 3), (3, 0), (0, 2), (1, 3)]:
            (x1, y1), (x2, y2) = pos[i], pos[j]; d = np.hypot(x2 - x1, y2 - y1); u = ((x2 - x1) / d, (y2 - y1) / d)
            a2.add_patch(FancyArrowPatch((x1 + u[0] * .6, y1 + u[1] * .6), (x2 - u[0] * .6, y2 - u[1] * .6), arrowstyle='<|-|>', mutation_scale=9, color=MUTE, lw=1.1))
        a2.text(3, 1.1, 'sin g: los procesos\nse refuerzan entre sí', ha='center', va='top', fontsize=7.4, color=INK)
        a2.text(3, .15, 'van der Maas et al. (2006)', ha='center', fontsize=7.2, color=MUTE, style='italic')
        a3.text(3, 6.35, 'Superposición de procesos', ha='center', fontsize=9.2, color=V, weight='bold')
        a3.add_patch(FancyBboxPatch((.4, 4.15), 5.2, 1.0, boxstyle='round,pad=0.02,rounding_size=0.12', fc=V, ec='none', alpha=.9))
        a3.text(3, 4.65, 'procesos ejecutivos\ncompartidos', ha='center', va='center', color='white', fontsize=7.6, weight='bold')
        for i in range(4):
            x = .95 + i * 1.37; a3.add_patch(Rectangle((x - .55, 2.0), 1.1, 2.15, fc='#E4DCF0', ec=V, lw=.9, alpha=.85)); a3.text(x, 2.35, f'T{i + 1}', ha='center', fontsize=8.4, color=INK, weight='bold')
        a3.text(3, 1.6, 'g = índice resultante\ndel solapamiento', ha='center', va='top', fontsize=7.4, color=INK)
        a3.text(3, .15, 'Kovacs y Conway (2016)', ha='center', fontsize=7.2, color=MUTE, style='italic')
        note(a1, y=-.02)
        save(fig, 'g-modelos.png')

    # U4 · ley de Hick
    if want('hick'):
        fig, ax = plt.subplots(figsize=(6.2, 3.1))
        b = np.array([0, 1, 2, 3])
        ax.plot(b, 330 + 25 * b, '-o', color=G, lw=2.3, label='CI más alto (menor pendiente)')
        ax.plot(b, 350 + 55 * b, '-o', color=A, lw=2.3, label='CI más bajo (mayor pendiente)')
        ax.set_xticks(b); ax.set_xticklabels(['0 bits\n(1 alternativa)', '1 bit\n(2)', '2 bits\n(4)', '3 bits\n(8)'], fontsize=8.2)
        ax.set_xlabel('Información = log₂ del número de alternativas'); ax.set_ylabel('Tiempo de reacción'); ax.set_yticks([]); ax.set_ylim(280, 560); ax.set_xlim(-.3, 3.3)
        ax.legend(frameon=False, fontsize=8.2, loc='upper left'); clean(ax); note(ax, y=-.4)
        save(fig, 'hick.png')

    # U4 · transferencia del entrenamiento
    if want('transferencia'):
        fig, ax = canvas(7.4, 2.1, 12, 3.4)
        it = [('Tarea entrenada', 'mejora clara', G), ('Tareas parecidas\n(transferencia cercana)', 'mejora', Y), ('Inteligencia fluida y vida\ndiaria (transferencia lejana)', 'sin efecto fiable', A)]
        for i, (t, d, c) in enumerate(it):
            x = 2.0 + i * 4.0; box(ax, x, 2.6, 3.5, 1.15, t, c, 8.6, tc=INK if c == Y else 'white')
            ax.text(x, 1.75, d, ha='center', va='top', fontsize=9.2, color=c if c != Y else '#A9791F', weight='bold')
            if i < 2: arr(ax, (x + 1.8, 2.6), (x + 2.2, 2.6))
        ax.text(6, .6, 'Melby-Lervåg y Hulme (2013); Simons et al. (2016)', ha='center', fontsize=7.8, color=MUTE, style='italic')
        note(ax, y=-.02)
        save(fig, 'transferencia.png')

    # U5 · teoría triárquica
    if want('triarquica'):
        fig, ax = canvas(7.4, 3.9, 12, 6.4)
        ax.add_patch(plt.Polygon([(6, 4.5), (2.4, 1.7), (9.6, 1.7)], fc=SOFT, ec=MUTE, lw=1.2))
        ax.text(6, 2.55, 'Teoría\ntriárquica', ha='center', va='center', fontsize=9.4, color=MUTE, weight='bold')
        box(ax, 6, 4.5, 3.6, .8, 'Subteoría componencial', P, 9)
        ax.text(4.0, 5.35, 'metacomponentes, ejecución,\nadquisición de conocimiento', ha='center', va='bottom', fontsize=7.6, color=INK)
        ax.text(8.0, 5.35, '→ inteligencia analítica', ha='center', va='bottom', fontsize=8.4, color=P, weight='bold')
        for x, t, d, r, c in [(2.4, 'Subteoría experiencial', 'novedad y\nautomatización', 'creativa', G), (9.6, 'Subteoría contextual', 'adaptarse, modelar o\nseleccionar el ambiente', 'práctica', A)]:
            box(ax, x, 1.7, 3.6, .8, t, c, 9); ax.text(x, 1.15, d, ha='center', va='top', fontsize=7.6, color=INK)
            ax.text(x, .4, '→ inteligencia ' + r, ha='center', va='center', fontsize=8.4, color=c, weight='bold')
        note(ax, y=-.05)
        save(fig, 'triarquica.png')

    # U5 · inteligencias múltiples
    if want('gardner'):
        from matplotlib.patches import Wedge
        fig, ax = plt.subplots(figsize=(7.4, 3.7)); ax.set_xlim(-5.3, 6.3); ax.set_ylim(-2.95, 2.95); ax.set_aspect('equal'); ax.axis('off')
        ints = ['lingüística', 'lógico-\nmatemática', 'espacial', 'musical', 'corporal-\ncinestésica', 'interpersonal', 'intrapersonal', 'naturalista\n(1999)']
        cs = [P, A, G, Y, V, T, '#8A6A50', '#6F9A4E']
        for i, (t, c) in enumerate(zip(ints, cs)):
            a0 = 90 - (i + 1) * 45; ax.add_wedge = None
            ax.add_patch(Wedge((-1, 0), 2.35, a0, a0 + 45, width=1.5, fc=c, ec='white', lw=2))
            m = np.radians(a0 + 22.5); ax.text(-1 + 1.6 * np.cos(m), 1.6 * np.sin(m), str(i + 1), ha='center', va='center', color='white', fontsize=10, weight='bold')
            r = 2.6; ha = 'left' if np.cos(m) > .2 else 'right' if np.cos(m) < -.2 else 'center'
            ax.text(-1 + r * np.cos(m) + (.05 if ha == 'left' else -.05 if ha == 'right' else 0), r * np.sin(m), t, ha=ha, va='center', fontsize=8.4, color=INK, linespacing=1.05)
        ax.text(-1, 0, 'Gardner', ha='center', va='center', fontsize=8.6, color=MUTE, weight='bold')
        box(ax, 4.6, 0, 2.9, 1.0, 'Propuesta teórica\nsin validación\npsicométrica', '#FFFFFF', 8.4, tc=A, ec=A, r=.1)
        note(ax, y=.0)
        save(fig, 'gardner.png')

    # U6 · volumen cerebral e inteligencia
    if want('volumen'):
        rng = np.random.default_rng(7)
        fig, axs = plt.subplots(1, 2, figsize=(7.4, 3.3), sharey=True)
        for ax, r, c, src in [(axs[0], .24, P, 'Pietschnig et al. (2015)\n88 estudios, más de 8.000 personas'), (axs[1], .30, A, 'Gignac y Bates (2017)\ncon buenas medidas')]:
            z = rng.standard_normal((200, 2)); z = (z - z.mean(0)) / z.std(0)
            q, _ = np.linalg.qr(z); q = q / q.std(0); x = q[:, 0]; y = r * x + np.sqrt(1 - r ** 2) * q[:, 1]
            ax.scatter(x, y, s=10, color=c, alpha=.55, lw=0)
            k = np.polyfit(x, y, 1); xx = np.array([-3, 3]); ax.plot(xx, np.polyval(k, xx), color=INK, lw=1.5)
            ax.text(-3.1, 3.05, f'r = {str(r)[1:].replace(".", ",")}' if False else 'r = ' + f'{r:.2f}'[1:].replace('.', ','), fontsize=11, color=c, weight='bold', va='top')
            ax.text(3.1, -3.2, src, fontsize=7.4, color=INK, ha='right', va='bottom', bbox=dict(fc='white', ec='none', alpha=.9, pad=1.5))
            ax.set_xlim(-3.3, 3.3); ax.set_ylim(-3.4, 3.4); ax.set_xticks([-2, 0, 2]); ax.set_yticks([-2, 0, 2]); ax.set_xlabel('Volumen cerebral (unidades típicas)'); clean(ax)
            ax.set_xticklabels(['−2', '0', '2']); ax.set_yticklabels(['−2', '0', '2'])
        axs[0].set_ylabel('Inteligencia (unidades típicas)')
        axs[0].text(0, -.3, 'Puntos simulados para ilustrar el tamaño de cada correlación', transform=axs[0].transAxes, fontsize=7.4, color=MUTE)
        save(fig, 'volumen.png')

    # U6 · efecto Flynn inverso en Noruega
    if want('flynn'):
        yr = np.linspace(1962, 1991, 300); y = -((yr - 1975) / 14) ** 2 + .02 * (yr - 1975)
        y = np.where(yr > 1975, -((yr - 1975) / 16) ** 2, -((yr - 1975) / 14) ** 2)
        fig, ax = plt.subplots(figsize=(6.2, 3.0))
        ax.plot(yr, y, color=P, lw=2.6); ax.axvline(1975, color=MUTE, ls=':', lw=1)
        ax.text(1975, .12, 'máximo hacia la cohorte de 1975', ha='center', fontsize=8.2, color=INK, bbox=dict(fc='white', ec='none', pad=1))
        ax.text(1966, -.6, 'sube', fontsize=8.6, color=G, weight='bold'); ax.text(1984.5, -1.05, 'baja', fontsize=8.6, color=A, weight='bold')
        ax.set_xlim(1961, 1992); ax.set_ylim(-1.75, .45); ax.set_yticks([]); ax.set_xticks([1962, 1970, 1975, 1980, 1991])
        ax.set_xlabel('Año de nacimiento (reclutas noruegos)'); ax.set_ylabel('CI medio'); clean(ax)
        ax.text(1976.5, -1.62, 'El mismo patrón aparece entre hermanos\n(Bratsberg y Rogeberg, 2018)', fontsize=7.8, color=INK, style='italic', va='bottom')
        note(ax, y=-.34)
        save(fig, 'flynn.png')

    # U7 · modelos de inteligencia emocional
    if want('ie-modelos'):
        fig, ax = canvas(7.4, 3.3, 12, 5.4)
        cols = [('MODELO DE\nCAPACIDAD', P, 'Mayer y Salovey (1997)', 'percibir, usar,\ncomprender y\nregular emociones', 'test de rendimiento\n(MSCEIT)'),
                ('MODELOS\nMIXTOS', Y, 'Goleman; Bar-On (EQ-i)', 'capacidades\n+ rasgos\n+ motivación', 'autoinforme'),
                ('MODELO DE\nRASGO', V, 'Petrides (TEIQue)', 'autopercepciones\nemocionales', 'autoinforme;\nse solapa con\nla personalidad')]
        for i, (t, c, a, q, m) in enumerate(cols):
            x = 2.0 + i * 4.0
            ax.add_patch(FancyBboxPatch((x - 1.8, .25), 3.6, 4.2, boxstyle='round,pad=0.02,rounding_size=0.12', fc='white', ec=c, lw=1.3))
            box(ax, x, 4.75, 3.6, .85, t, c, 9, tc=INK if c == Y else 'white')
            ax.text(x, 3.95, a, ha='center', va='center', fontsize=7.8, color=MUTE, style='italic')
            ax.text(x, 3.55, 'Qué incluye', ha='center', va='top', fontsize=7.4, color=c if c != Y else '#A9791F', weight='bold')
            ax.text(x, 3.2, q, ha='center', va='top', fontsize=8.4, color=INK)
            ax.text(x, 1.75, 'Cómo se mide', ha='center', va='top', fontsize=7.4, color=c if c != Y else '#A9791F', weight='bold')
            ax.text(x, 1.4, m, ha='center', va='top', fontsize=8.4, color=INK)
        note(ax, y=-.05)
        save(fig, 'ie-modelos.png')

    # U7 · las cuatro c de la creatividad
    if want('cuatro-c'):
        fig, ax = canvas(7.4, 3.2, 12, 5.2)
        st = [('mini-c', 'aprendizaje personalmente\nsignificativo', '#A9C4D8'), ('little-c', 'creatividad\ncotidiana', '#6E9CBE'), ('Pro-c', 'creatividad\nprofesional', '#447A9E'), ('Big-C', 'creatividad\neminente', P)]
        for i, (t, d, c) in enumerate(st):
            x0 = .6 + i * 2.75; h = .9 + i * .95
            ax.add_patch(Rectangle((x0, .3), 2.75, h, fc=c, ec='white', lw=2))
            ax.text(x0 + 1.375, .3 + h - .3, t, ha='center', va='center', fontsize=10, color='white' if i else INK, weight='bold')
            ax.text(x0 + 1.375, .3 + h + .15, d, ha='center', va='bottom', fontsize=7.8, color=INK)
        ax.text(.6, 5.0, 'Kaufman y Beghetto (2009)', fontsize=8, color=MUTE, style='italic')
        note(ax, y=-.04)
        save(fig, 'cuatro-c.png')

    # U8 · autoeficacia
    if want('eficacia'):
        fig, ax = canvas(7.4, 3.4, 12, 5.6)
        for x, t, c in [(1.5, 'Persona', P), (6, 'Conducta', G), (10.5, 'Resultado', A)]: box(ax, x, 4.3, 2.3, .8, t, c, 9.6)
        arr(ax, (2.75, 4.3), (4.75, 4.3)); arr(ax, (7.25, 4.3), (9.25, 4.3))
        ax.text(3.75, 4.75, 'expectativa de eficacia:\n«¿seré capaz de hacerlo?»', ha='center', va='bottom', fontsize=7.8, color=P, weight='bold')
        ax.text(8.25, 4.75, 'expectativa de resultado:\n«si lo hago, ¿servirá?»', ha='center', va='bottom', fontsize=7.8, color=A, weight='bold')
        src = ['logros de\nejecución', 'experiencia\nvicaria', 'persuasión\nverbal', 'estados fisiológicos\ny emocionales']
        for i, t in enumerate(src):
            x = 1.5 + i * 3.0; box(ax, x, 1.35, 2.7, .95, t, '#FFFFFF', 8.4, tc=INK, bold=False, ec=P); ax.plot([x, x], [1.85, 2.25], color=P, lw=1.2)
        ax.plot([1.5, 10.5], [2.25, 2.25], color=P, lw=1.2)
        arr(ax, (3.75, 2.25), (3.75, 4.05), P, lw=1.6)
        ax.text(6.9, 2.5, 'Fuentes de la autoeficacia', ha='center', va='bottom', fontsize=9, color=P, weight='bold')
        note(ax, y=-.03)
        save(fig, 'eficacia.png')

    # U8 · atribuciones de Weiner
    if want('weiner'):
        fig, ax = canvas(7.4, 3.3, 12.4, 5.4)
        ax.text(2.6, 4.75, 'interno', ha='center', fontsize=9, color=INK, weight='bold'); ax.text(5.4, 4.75, 'externo', ha='center', fontsize=9, color=INK, weight='bold')
        ax.text(4.0, 5.2, 'LOCUS', ha='center', fontsize=8.4, color=MUTE, weight='bold')
        ax.text(.95, 3.55, 'estable', ha='right', va='center', fontsize=9, color=INK, weight='bold'); ax.text(.95, 1.75, 'inestable', ha='right', va='center', fontsize=9, color=INK, weight='bold')
        ax.text(-.75, 2.65, 'ESTABILIDAD', rotation=90, ha='center', va='center', fontsize=8.4, color=MUTE, weight='bold')
        for x, y, t, c in [(2.6, 3.55, 'capacidad', P), (5.4, 3.55, 'dificultad\nde la tarea', T), (2.6, 1.75, 'esfuerzo', G), (5.4, 1.75, 'suerte', Y)]:
            box(ax, x, y, 2.6, 1.6, t, c, 9.6, tc=INK if c == Y else 'white', r=.05)
        dims = [('locus', 'autoestima, orgullo', P), ('estabilidad', 'expectativas de futuro', G), ('controlabilidad', 'culpa, ira, compasión', A)]
        for i, (d, e, c) in enumerate(dims):
            y = 4.2 - i * 1.3; box(ax, 8.3, y, 2.2, .7, d, c, 8.6)
            arr(ax, (9.45, y), (10.2, y), c); ax.text(10.3, y, e, va='center', fontsize=8.2, color=INK)
        ax.plot([7.0, 7.0], [.6, 5.0], color=MUTE, ls=':', lw=1); ax.set_xlim(-1.0, 12.4)
        note(ax, y=-.03)
        save(fig, 'weiner.png')

    # U9 · diseño triádico e indefensión aprendida revisada
    if want('triadico'):
        fig, ax = canvas(7.4, 4.6, 12.4, 7.6)
        ax.text(.1, 7.3, 'Diseño triádico', fontsize=9.4, color=P, weight='bold')
        gr = [('Grupo escapable', 'puede cortar la descarga', G), ('Grupo acoplado', 'mismas descargas, sin control', A), ('Grupo sin descarga', '', MUTE)]
        for i, (t, d, c) in enumerate(gr):
            y = 6.45 - i * .95; box(ax, 2.35, y, 4.3, .75, t + ('\n' + d if d else ''), c, 8, r=.08)
            arr(ax, (4.55, y), (6.35, 5.5), MUTE, lw=1)
        box(ax, 7.8, 5.5, 2.7, 1.0, 'Fase de prueba:\ncaja lanzadera', P, 8.4)
        ax.text(9.35, 5.5, 'solo el grupo\nacoplado no\naprende a escapar', va='center', fontsize=8.2, color=A, weight='bold')
        ax.plot([.1, 12.3], [3.95, 3.95], color=MUTE, lw=.8, ls=':')
        ax.text(.1, 3.5, 'Revisión de Maier y Seligman (2016)', fontsize=9.4, color=V, weight='bold')
        for x, t, c in [(1.6, 'estrés\nprolongado', A), (4.6, 'rafe dorsal\n(serotonina)', A)]: box(ax, x, 2.55, 2.3, .85, t, c, 8.2)
        arr(ax, (2.8, 2.55), (3.4, 2.55)); arr(ax, (5.8, 2.55), (6.4, 2.55))
        box(ax, 8.4, 2.55, 3.6, .85, 'pasividad: respuesta\npor defecto', '#FFFFFF', 8.2, tc=A, ec=A)
        for x, t, c in [(1.6, 'detectar\ncontrol', G), (4.6, 'corteza prefrontal\nventromedial', G)]: box(ax, x, .85, 2.3, .85, t, c, 8.2)
        arr(ax, (2.8, .85), (3.4, .85)); arr(ax, (5.8, .85), (6.4, .85))
        box(ax, 8.4, .85, 3.6, .85, 'inhibe el rafe: lo que\nse aprende es el control', '#FFFFFF', 8.2, tc=G, ec=G)
        ax.add_patch(FancyArrowPatch((4.6, 1.3), (4.6, 2.1), arrowstyle='-[', mutation_scale=6, color=G, lw=1.4))
        note(ax, y=-.03)
        save(fig, 'triadico.png')

    # U9 · modelo de Wortman y Brehm
    if want('wortman-brehm'):
        x = np.linspace(0, 10, 400)
        def cur(a): return a * (1.1 * x * np.exp(-x / 1.6) - .55 * (1 - np.exp(-((x / 4.5) ** 3))))
        fig, ax = plt.subplots(figsize=(6.4, 3.1))
        ax.axhline(0, color=MUTE, lw=1, ls='--'); ax.text(10, .06, 'línea base', ha='right', va='bottom', fontsize=7.8, color=MUTE)
        ax.plot(x, cur(1), color=A, lw=2.4, label='resultado muy importante'); ax.plot(x, cur(.5), color=P, lw=2.2, ls='--', label='resultado poco importante')
        ax.text(1.8, .78, 'reactancia', ha='center', fontsize=8.8, color=INK, weight='bold'); ax.text(8.1, -.45, 'indefensión', ha='center', fontsize=8.8, color=INK, weight='bold')
        ax.set_xlabel('Cantidad de experiencia de falta de control'); ax.set_ylabel('Motivación para\nrecuperar el control'); ax.set_xticks([]); ax.set_yticks([])
        ax.set_ylim(-.75, .95); ax.legend(frameon=False, fontsize=8, loc='upper right'); clean(ax); note(ax, y=-.18)
        save(fig, 'wortman-brehm.png')

    # U10 · compartimentalización e integración (Showers)
    if want('showers'):
        fig, axs = plt.subplots(1, 2, figsize=(7.4, 3.0))
        pats = {'Compartimentalización': [['+', '+', '+'], ['−', '−', '−'], ['+', '+', '+']], 'Integración': [['+', '−', '+'], ['−', '+', '−'], ['+', '+', '−']]}
        for ax, (tit, pt), c in zip(axs, pats.items(), (P, V)):
            ax.set_xlim(0, 9); ax.set_ylim(0, 5.4); ax.axis('off')
            ax.text(4.5, 5.15, tit, ha='center', fontsize=9.6, color=c, weight='bold')
            for j, (asp, sg) in enumerate(zip(['estudiante', 'amigo', 'deportista'], pt)):
                x = 1.5 + j * 3.0
                ax.add_patch(FancyBboxPatch((x - 1.3, .6), 2.6, 3.7, boxstyle='round,pad=0.02,rounding_size=0.15', fc=SOFT, ec=c, lw=1.2))
                ax.text(x, 3.85, f'«{asp}»', ha='center', fontsize=8.4, color=INK, weight='bold')
                for k, g in enumerate(sg):
                    col = G if g == '+' else A; ax.plot([x], [2.95 - k * .85], 'o', ms=17, color=col, mec='none')
                    ax.text(x, 2.95 - k * .85, g, ha='center', va='center', color='white', fontsize=12, weight='bold')
        axs[0].text(4.5, .15, 'cada aspecto solo + o solo −', ha='center', fontsize=7.8, color=INK, style='italic')
        axs[1].text(4.5, .15, 'cada aspecto mezcla + y −', ha='center', fontsize=7.8, color=INK, style='italic')
        note(axs[0], y=-.08)
        save(fig, 'showers.png')

    # U10 · discrepancias del yo (Higgins)
    if want('higgins'):
        fig, ax = canvas(7.4, 1.9, 12, 3.0)
        box(ax, 6, 1.9, 2.4, 1.0, 'Yo REAL', INK, 10.5)
        box(ax, 1.5, 1.9, 2.6, 1.0, 'Yo IDEAL\n(aspiraciones)', P, 9.2); box(ax, 10.5, 1.9, 2.6, 1.0, 'Yo DEBIDO\n(obligaciones)', A, 9.2)
        for x1, x2, c, t in [(2.85, 4.75, P, 'abatimiento:\ntristeza, decepción'), (9.15, 7.25, A, 'agitación:\nansiedad, culpa')]:
            ax.add_patch(FancyArrowPatch((x2, 1.9), (x1, 1.9), arrowstyle='<|-|>', mutation_scale=11, color=c, lw=1.4, ls='--'))
            xm = (x1 + x2) / 2; ax.text(xm, 2.15, 'discrepancia', ha='center', va='bottom', fontsize=7.6, color=MUTE)
            ax.text(xm, 1.6, t, ha='center', va='top', fontsize=8.4, color=c, weight='bold')
        note(ax, y=.02)
        save(fig, 'higgins.png')

    # U11 · autoestima a lo largo de la vida
    if want('autoestima-edad'):
        from scipy.interpolate import PchipInterpolator
        a = np.linspace(4, 94, 400)
        y = PchipInterpolator([4, 8, 11, 14, 17, 20, 30, 40, 50, 60, 65, 70, 80, 88, 94], [.40, .47, .50, .51, .515, .53, .61, .69, .76, .80, .81, .80, .72, .58, .48])(a)
        fig, ax = plt.subplots(figsize=(6.4, 3.0))
        ax.plot(a, y, color=P, lw=2.6)
        ax.annotate('máximo hacia\nlos 60-70 años', (65, .81), (45, .9), fontsize=8.2, color=INK, va='center', ha='center', arrowprops=dict(arrowstyle='->', color=MUTE))
        ax.annotate('se frena en la\nadolescencia', (15, .51), (15, .3), fontsize=8.2, color=INK, ha='center', va='center', arrowprops=dict(arrowstyle='->', color=MUTE))
        ax.text(9, .58, 'sube en\nla infancia', fontsize=8.2, color=INK, ha='center')
        ax.text(38, .5, 'crece en\nla adultez', fontsize=8.2, color=INK, ha='center')
        ax.text(78, .45, 'descenso en\nla vejez avanzada', fontsize=8.2, color=INK, ha='center')
        ax.set_xlim(4, 94); ax.set_xticks([4, 20, 30, 40, 50, 60, 70, 80, 94]); ax.set_ylim(.2, 1.0); ax.set_yticks([])
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Autoestima media'); clean(ax)
        ax.text(94, 1.0, 'Según Orth, Erol y Luciano (2018)', ha='right', va='top', fontsize=7.8, color=MUTE, style='italic')
        note(ax, y=-.3)
        save(fig, 'autoestima-edad.png')

    # U12 · solapamiento de distribuciones
    if want('solapamiento'):
        fig, axs = plt.subplots(1, 2, figsize=(7.4, 3.0))
        x = np.linspace(-4, 5, 600); nd = lambda m: np.exp(-((x - m) ** 2) / 2) / np.sqrt(2 * np.pi)
        for ax, d, ov, src in [(axs[0], .21, 92, 'Diferencia media entre sexos\nen 106 metaanálisis\n(Zell, Krizan y Teeter, 2015)'), (axs[1], .93, 64, 'Intereses cosas-personas\n(Su, Rounds y Armstrong, 2009)')]:
            y1, y2 = nd(0), nd(d)
            ax.fill_between(x, np.minimum(y1, y2), color=MUTE, alpha=.3, lw=0)
            ax.plot(x, y1, color=P, lw=2.2); ax.plot(x, y2, color=A, lw=2.2)
            ax.text(-3.9, .5, 'd = ' + f'{d:.2f}'.replace('.', ','), fontsize=11, color=INK, weight='bold', va='top')
            ax.text(-3.9, .43, f'solapamiento ≈ {ov} %\n(zona gris)', fontsize=8.6, color=INK, va='top')
            ax.text(.5 + d / 2, -.04, src, ha='center', va='top', fontsize=7.4, color=MUTE)
            ax.set_xlim(-4, 5); ax.set_ylim(0, .52); ax.set_xticks([]); ax.set_yticks([]); clean(ax); ax.spines['left'].set_visible(False)
        save(fig, 'solapamiento.png')

    # U13 · diseños transversal, longitudinal y secuencial
    if want('schaie'):
        fig, ax = canvas(7.4, 3.3, 12, 5.4)
        ages = [[50, 60, 70], [40, 50, 60], [30, 40, 50]]
        for j, yr in enumerate([2000, 2010, 2020]): ax.text(4.6 + j * 2.0, 4.65, str(yr), ha='center', fontsize=9.2, color=INK, weight='bold')
        ax.text(6.6, 5.2, 'Año de medida', ha='center', fontsize=8.6, color=MUTE, weight='bold')
        for i, co in enumerate(['nacidos en 1950', 'nacidos en 1960', 'nacidos en 1970']):
            y = 3.7 - i * 1.15; ax.text(3.3, y, co, ha='right', va='center', fontsize=9, color=INK, weight='bold')
            for j in range(3): box(ax, 4.6 + j * 2.0, y, 1.75, .95, f'{ages[i][j]} años', '#FFFFFF', 9, tc=INK, bold=False, ec=MUTE, r=.05)
        ax.text(.25, 2.55, 'Cohorte', rotation=90, ha='center', va='center', fontsize=8.6, color=MUTE, weight='bold')
        ax.add_patch(FancyBboxPatch((3.65, .95), 1.9, 3.3, boxstyle='round,pad=0.02,rounding_size=0.1', fc='none', ec=P, lw=2.2))
        ax.add_patch(FancyBboxPatch((3.6, 3.15), 5.98, 1.1, boxstyle='round,pad=0.02,rounding_size=0.1', fc='none', ec=A, lw=2.2, ls='--'))
        ax.add_patch(FancyBboxPatch((3.45, .78), 6.3, 3.65, boxstyle='round,pad=0.02,rounding_size=0.15', fc='none', ec=G, lw=1.6, ls=':'))
        for y, t, c in [(4.0, 'una columna = diseño transversal', P), (3.2, 'una fila = diseño longitudinal', A), (2.4, 'el conjunto = diseño secuencial', G)]:
            ax.plot([10.15, 10.55], [y, y], color=c, lw=2.2, ls='-' if c == P else '--' if c == A else ':'); ax.text(10.65, y, t, va='center', fontsize=7.8, color=c, weight='bold')
        ax.set_xlim(0, 14.6)
        note(ax, y=-.02)
        save(fig, 'schaie.png')

    # U13 · inteligencia fluida y cristalizada con la edad
    if want('gf-gc-edad'):
        a = np.linspace(20, 80, 300)
        gf = .85 - .006 * (a - 20) - .00012 * (a - 20) ** 2
        gc = .5 + .32 * (1 - np.exp(-(a - 20) / 15)) - .25 * (1 / (1 + np.exp(-(a - 74) / 3.5)))
        fig, ax = plt.subplots(figsize=(6.4, 3.0))
        ax.plot(a, gf, color=A, lw=2.5); ax.plot(a, gc, color=P, lw=2.5)
        ax.text(26, .87, 'inteligencia fluida', fontsize=9, color=A, weight='bold'); ax.text(42, .83, 'inteligencia cristalizada', fontsize=9, color=P, weight='bold')
        ax.set_xlim(20, 80); ax.set_ylim(0, 1.0); ax.set_yticks([]); ax.set_xticks(range(20, 81, 10)); ax.set_xlabel('Edad (años)'); ax.set_ylabel('Rendimiento'); clean(ax)
        note(ax, y=-.3)
        save(fig, 'gf-gc-edad.png')

    # U13 · estabilidad del CI en las cohortes escocesas
    if want('estabilidad-ci'):
        fig, ax = plt.subplots(figsize=(6.2, 3.0))
        lab = ['a los 77 años\n(Aberdeen)', 'a los ≈ 80 años\n(Lothian)', 'a los 90 años\n ']; v = [.63, .66, .54]; src = ['Deary et al. (2000)', 'Deary et al. (2004)', 'Deary, Pattie y Starr (2013)']
        b = ax.bar(lab, v, color=[P, T, A], width=.55)
        for r, val, sr in zip(b, v, src):
            xc = r.get_x() + r.get_width() / 2
            ax.text(xc, val + .02, 'r = ' + f'{val:.2f}'[1:].replace('.', ','), ha='center', fontsize=9.4, color=INK, weight='bold')
            ax.text(xc, .04, sr, ha='center', va='bottom', fontsize=7.2, color='white', rotation=90)
        ax.set_ylim(0, .8); ax.set_yticks([0, .2, .4, .6, .8]); ax.set_yticklabels(['0', ',20', ',40', ',60', ',80'])
        ax.set_ylabel('Correlación con el CI\na los 11 años'); clean(ax)
        save(fig, 'estabilidad-ci.png')

    # U14 · modelo ACE y correlaciones genotipo-ambiente
    if want('ace'):
        fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.5), gridspec_kw={'width_ratios': [1, 1.05]})
        for a in (a1, a2): a.axis('off')
        a1.set_xlim(0, 10); a1.set_ylim(0, 7)
        a1.text(5, 6.7, 'Descomposición de la varianza', ha='center', fontsize=9.2, color=P, weight='bold')
        for x0, w, t, c in [(.3, 4.2, 'A\ngenética aditiva', P), (4.5, 2.4, 'C\nambiente\ncompartido', G), (6.9, 2.8, 'E\nno compartido\n+ error', Y)]:
            a1.add_patch(Rectangle((x0, 4.3), w, 1.8, fc=c, ec='white', lw=2)); a1.text(x0 + w / 2, 5.2, t, ha='center', va='center', fontsize=7.8, color='white' if c != Y else INK, weight='bold')
        a1.text(.3, 3.6, 'Fórmulas de Falconer', fontsize=8.4, color=INK, weight='bold')
        for i, f in enumerate(['h² ≈ 2(rMZ − rDZ)', 'c² ≈ 2rDZ − rMZ', 'e² = 1 − rMZ']):
            a1.text(.6, 2.85 - i * .8, f, fontsize=9.6, color=[P, G, '#A9791F'][i], family='DejaVu Sans', weight='bold')
        a2.set_xlim(0, 10); a2.set_ylim(0, 7)
        a2.text(5, 6.7, 'Correlación genotipo-ambiente', ha='center', fontsize=9.2, color=V, weight='bold')
        for i, (t, d) in enumerate([('Pasiva', 'los padres dan genes\ny ambiente'), ('Evocadora', 'el niño provoca\nreacciones'), ('Activa', 'la persona elige\nsus ambientes')]):
            y = 5.2 - i * 1.85; box(a2, 1.9, y, 3.0, 1.0, t, V, 9); a2.text(3.75, y, d, va='center', fontsize=8.4, color=INK)
        note(a1, y=-.02)
        save(fig, 'ace.png')

    # U14 · efecto Wilson
    if want('wilson'):
        fig, ax = plt.subplots(figsize=(6.2, 3.2))
        lab = ['infancia', 'adolescencia', 'adultez joven']; v = [.41, .55, .66]
        b = ax.bar(lab, v, color=P, width=.5, label='heredabilidad del CI (h², eje izquierdo)')
        for r, val in zip(b, v): ax.text(r.get_x() + r.get_width() / 2, val + .02, '≈ ' + f'{val:.2f}'[1:].replace('.', ','), ha='center', fontsize=9.4, color=INK, weight='bold')
        tw = ax.twinx(); tw.set_ylim(0, 1.0); tw.set_yticks([]); [tw.spines[k].set_visible(False) for k in ('top', 'right', 'left', 'bottom')]
        tw.plot([0, 1, 2], [.74, .44, .14], '--', color=G, lw=2.2)
        from matplotlib.lines import Line2D
        ax.set_ylim(0, 1.0); ax.set_yticks([0, .2, .4, .6, .8]); ax.set_yticklabels(['0', ',20', ',40', ',60', ',80']); ax.set_ylabel('Proporción de varianza')
        ax.legend(handles=[b, Line2D([], [], color=G, ls='--', lw=2.2, label='ambiente compartido (c²): solo tendencia')], frameon=False, fontsize=7.8, loc='upper left'); clean(ax)
        ax.text(2.3, .9, '≈ ,80 en adultos\nsegún Bouchard (2013)', ha='right', va='top', fontsize=8, color=INK, style='italic')
        ax.text(0, -.24, 'Valores aproximados de Haworth et al. (2010); la línea del ambiente compartido indica solo la tendencia', transform=ax.transAxes, fontsize=7.2, color=MUTE)
        save(fig, 'wilson.png')

    # U15 · modelos personalidad-salud
    if want('modelos-salud'):
        fig, ax = canvas(7.4, 4.0, 12.4, 6.8)
        box(ax, 1.4, 3.5, 2.3, 1.0, 'PERSONALIDAD', P, 8.8); box(ax, 11.0, 3.5, 2.3, 1.0, 'ENFERMEDAD', A, 8.8)
        rows = [(5.9, '1 · reactividad fisiológica'), (4.95, '2 · conductas de salud'), (4.0, '3 · transaccional: exposición, evaluación\ny afrontamiento del estrés')]
        for y, t in rows:
            box(ax, 6.2, y, 4.9, .75, t, '#FFFFFF', 8, tc=INK, bold=False, ec=P)
            arr(ax, (2.6, 3.5 + (y - 3.5) * .25), (3.7, y), MUTE, lw=1.1); arr(ax, (8.7, y), (9.8, 3.5 + (y - 3.5) * .25), MUTE, lw=1.1)
        box(ax, 6.2, 2.25, 4.4, .75, '4 · tercera variable biológica', V, 8.2)
        arr(ax, (4.0, 2.25), (1.6, 2.95), V, lw=1.3); arr(ax, (8.4, 2.25), (10.8, 2.95), V, lw=1.3)
        ax.text(6.2, 1.75, 'causa ambas', ha='center', va='top', fontsize=7.6, color=V)
        ax.add_patch(FancyArrowPatch((11.0, 2.95), (1.4, 2.95), connectionstyle='arc3,rad=-.32', arrowstyle='-|>', mutation_scale=12, color=A, lw=1.4, ls='--'))
        ax.text(6.2, .62, '5 · flecha inversa: la enfermedad cambia la personalidad', ha='center', fontsize=8, color=A, weight='bold')
        note(ax, y=-.02)
        save(fig, 'modelos-salud.png')

    # U16 · escolarización e inteligencia
    if want('escolarizacion'):
        fig, ax = plt.subplots(figsize=(6.2, 2.9))
        lab = ['control del\nCI previo', 'reformas de la\nescolaridad obligatoria', 'edad de corte de\nentrada a la escuela']; v = [1.2, 2.0, 5.2]
        b = ax.bar(lab, v, color=[P, T, G], width=.55)
        for r, val in zip(b, v): ax.text(r.get_x() + r.get_width() / 2, val + .12, '≈ ' + f'{val:.1f}'.replace('.', ',').replace(',0', ''), ha='center', fontsize=9.4, color=INK, weight='bold')
        ax.set_ylim(0, 6.2); ax.set_ylabel('Puntos de CI por año\nadicional de escuela'); ax.tick_params(axis='x', labelsize=8.2); clean(ax)
        ax.text(-.35, 5.9, 'Ritchie y Tucker-Drob (2018)', fontsize=8, color=MUTE, style='italic', va='top')
        save(fig, 'escolarizacion.png')

    # U16 · validez en selección de personal
    if want('seleccion'):
        fig, ax = plt.subplots(figsize=(6.6, 3.1))
        cats = ['pruebas de capacidad\ncognitiva', 'entrevista\nestructurada', 'tests de\nintegridad', 'inteligencia\nemocional']
        old = [.51, None, .41, None]; new = [.31, .42, .31, .22]; w = .36; xs = np.arange(4)
        for i in range(4):
            if old[i] is not None:
                ax.bar(xs[i] - w / 2, old[i], w, color='#C9D4DC'); ax.text(xs[i] - w / 2, old[i] + .012, f'{old[i]:.2f}'[1:].replace('.', ','), ha='center', fontsize=8.6, color=MUTE, weight='bold')
                xn = xs[i] + w / 2
            else: xn = xs[i]
            ax.bar(xn, new[i], w, color=P); ax.text(xn, new[i] + .012, f'{new[i]:.2f}'[1:].replace('.', ','), ha='center', fontsize=8.6, color=INK, weight='bold')
        ax.text(xs[0] - w / 2, .56, 'Schmidt y\nHunter (1998)', ha='center', va='bottom', fontsize=7, color=MUTE)
        from matplotlib.patches import Patch
        ax.legend(handles=[Patch(color='#C9D4DC', label='estimación anterior'), Patch(color=P, label='Sackett et al. (2022)')], frameon=False, fontsize=8, loc='upper right')
        ax.set_xticks(xs); ax.set_xticklabels(cats, fontsize=8.2); ax.set_ylim(0, .68); ax.set_yticks([0, .2, .4, .6]); ax.set_yticklabels(['0', ',20', ',40', ',60']); ax.set_ylabel('Validez operativa'); clean(ax)
        save(fig, 'seleccion.png')
