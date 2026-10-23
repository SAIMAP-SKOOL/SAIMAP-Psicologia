"""Figuras del temario de Atención y Percepción. python3 tools/figuras.py → img/*"""
import os, numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle, Polygon, Rectangle, Ellipse
from scipy import stats
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'img'); SRC = os.path.join(OUT, 'src')
P, A, G, Y, V, INK, MUTE = '#2D5A7B', '#C8553D', '#5FA47A', '#E0A83A', '#7A5BA8', '#26323A', '#8A949B'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10, 'axes.edgecolor': MUTE, 'axes.labelcolor': INK,
                     'xtick.color': MUTE, 'ytick.color': MUTE, 'axes.titlesize': 10.5, 'axes.titlecolor': INK})
rng = np.random.default_rng(7)
def clean(ax):
    for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
def save(fig, name):
    fig.tight_layout(); fig.savefig(f'{OUT}/{name}', dpi=200); plt.close(fig); print('ok', name)
def box(ax, x, y, w, h, t, c, fs=9, tc='white'):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h, boxstyle='round,pad=0.02,rounding_size=0.12', fc=c, ec='none'))
    ax.text(x, y, t, ha='center', va='center', color=tc, fontsize=fs, weight='bold')
def arr(ax, a, b, c=INK, ls='-', lw=1.4):
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-|>', mutation_scale=12, color=c, lw=lw, ls=ls))
dec = lambda v, n=2: f'{v:.{n}f}'.replace('.', ',')

# 1. Función psicométrica y umbral absoluto
x = np.linspace(0, 10, 300); fig, ax = plt.subplots(figsize=(6.4, 2.8))
ax.plot(x, stats.norm.cdf(x, 5, 1.3) * 100, color=P, lw=2.4)
ax.axhline(50, color=MUTE, ls=':', lw=1); ax.axvline(5, ymax=.5 / 1.05, color=A, ls='--', lw=1.2)
ax.text(5.15, 8, 'umbral absoluto\n(50 % de detecciones)', fontsize=8.6, color=A)
ax.set_xlabel('Intensidad del estímulo'); ax.set_ylabel('% de respuestas «sí, lo noto»'); ax.set_ylim(0, 105); ax.set_xticks([]); clean(ax)
save(fig, 'psicometrica.png')

# 2. Ley de Stevens: exponentes típicos (aproximados)
x = np.linspace(0, 3, 300); fig, ax = plt.subplots(figsize=(6.2, 3.0))
for n, c, l in [(3.5, A, 'descarga eléctrica (n ≈ 3,5): expansión'), (1.0, G, 'longitud de una línea (n ≈ 1)'), (0.33, P, 'brillo (n ≈ 0,33): compresión')]:
    ax.plot(x, x ** n, color=c, lw=2.2, label=l)
ax.set_ylim(0, 6); ax.set_xlim(0, 3); ax.set_xlabel('Intensidad física (I)'); ax.set_ylabel('Magnitud percibida (S = k · Iⁿ)')
ax.legend(frameon=False, fontsize=8.3, loc='upper left'); ax.set_xticks([]); ax.set_yticks([]); clean(ax)
save(fig, 'stevens.png')

# 3. Teoría de detección de señales: distribuciones, d' y criterio
x = np.linspace(-4, 6, 600); dp, c0 = 1.5, .9; fig, ax = plt.subplots(figsize=(7.0, 2.9))
n, s = stats.norm.pdf(x, 0, 1), stats.norm.pdf(x, dp, 1)
ax.plot(x, n, color=P, lw=2.2); ax.plot(x, s, color=A, lw=2.2)
m = x >= c0; ax.fill_between(x[m], s[m], color=A, alpha=.25); ax.fill_between(x[m], n[m], color=P, alpha=.35)
ax.axvline(c0, color=INK, lw=1.4, ls='--'); ax.text(c0 + .08, .3, 'criterio', fontsize=8.6, color=INK)
ax.text(-1.6, .36, 'Solo ruido', color=P, fontsize=9, weight='bold', ha='center'); ax.text(3.0, .36, 'Señal + ruido', color=A, fontsize=9, weight='bold', ha='center')
ax.text(2.3, .1, f'aciertos\n({dec(1 - stats.norm.cdf(c0, dp, 1))})', color=A, fontsize=8.4, ha='center')
ax.annotate(f'falsas alarmas ({dec(1 - stats.norm.cdf(c0))})', (1.3, .05), (3.0, .33), color=P, fontsize=8.2, arrowprops=dict(arrowstyle='->', color=P))
ax.annotate('', (dp, .415), (0, .415), arrowprops=dict(arrowstyle='<->', color=G, lw=1.4)); ax.text(dp / 2, .425, "d′ = 1,5", ha='center', fontsize=8.8, color=G, weight='bold')
ax.text(-3.4, .2, '«No»', fontsize=9, color=MUTE); ax.text(4.6, .2, '«Sí»', fontsize=9, color=MUTE)
ax.set_ylim(0, .47); ax.set_yticks([]); ax.set_xticks([]); ax.set_xlabel('Actividad sensorial interna'); clean(ax)
save(fig, 'tds.png')
print('  TDS H, FA', 1 - stats.norm.cdf(c0, dp, 1), 1 - stats.norm.cdf(c0))

# 4. Curvas ROC
fa = np.linspace(0, 1, 300); fig, ax = plt.subplots(figsize=(4.4, 4.0))
for d_, c in [(0, MUTE), (1, Y), (2, A)]:
    h = 1 - stats.norm.cdf(stats.norm.ppf(1 - fa) - d_); ax.plot(fa, h, color=c, lw=2.2, label=f"d′ = {d_}")
for cc in (-.5, .5, 1.5):
    ax.plot(1 - stats.norm.cdf(cc), 1 - stats.norm.cdf(cc - 2), 'o', color=A, ms=5)
ax.text(.13, .93, 'criterio laxo', fontsize=7.8, color=INK); ax.text(.02, .37, 'criterio\nconservador', fontsize=7.8, color=INK)
ax.set_xlabel('Proporción de falsas alarmas'); ax.set_ylabel('Proporción de aciertos'); ax.set_xlim(0, 1); ax.set_ylim(0, 1.02); ax.set_aspect('equal')
ax.set_xticks([0, .5, 1]); ax.set_xticklabels(['0', '0,5', '1']); ax.set_yticks([0, .5, 1]); ax.set_yticklabels(['0', '0,5', '1'])
ax.legend(frameon=False, fontsize=8.4, loc='lower right'); clean(ax)
save(fig, 'roc.png')

# 5. Principios de la Gestalt
fig, axs = plt.subplots(1, 5, figsize=(7.6, 1.9))
ax = axs[0]
for i in range(4):
    for j in range(4): ax.plot([i * .5 + (j // 2) * 1.2], [j * .5 if False else 0], 'o')
ax.cla()
for col in range(6):
    for row in range(5): ax.plot(col * .35 + (.6 if col >= 3 else 0), row * .35, 'o', color=P, ms=6)
ax.set_title('Proximidad', fontsize=9)
ax = axs[1]
for col in range(5):
    for row in range(5): ax.plot(col * .35, row * .35, 'o' if row % 2 else 's', color=A if row % 2 else P, ms=6, mfc=A if row % 2 else 'white')
ax.set_title('Semejanza', fontsize=9)
ax = axs[2]; t = np.linspace(0, 2 * np.pi, 200)
for a0 in np.arange(0, 2 * np.pi, np.pi / 4): tt = np.linspace(a0 + .08, a0 + np.pi / 4 - .08, 20); ax.plot(np.cos(tt), np.sin(tt), color=P, lw=3)
ax.set_title('Cierre', fontsize=9)
ax = axs[3]; xx = np.linspace(-1, 1, 100); ax.plot(xx, xx * .8, color=P, lw=3); ax.plot(xx, -xx * .8, color=A, lw=3); ax.set_title('Buena continuidad', fontsize=9)
ax = axs[4]
for k, (x0, c) in enumerate([(0, P), (1.1, P)]): ax.add_patch(FancyBboxPatch((x0 - .05, -.25), .9, 1.6, boxstyle='round,pad=0.02', fc='#EEF2F6', ec=MUTE))
for col in range(4):
    for row in range(4): ax.plot(col * .55 + .1, row * .35, 'o', color=P, ms=6)
ax.set_title('Región común', fontsize=9)
for ax in axs: ax.set_aspect('equal'); ax.axis('off')
save(fig, 'gestalt.png')

# 6. Ilusiones geométricas (dibujadas con medidas exactas)
fig, axs = plt.subplots(1, 4, figsize=(7.8, 2.4))
ax = axs[0]
for y, inw in [(1.0, True), (0, False)]:
    ax.plot([0, 2], [y, y], color=INK, lw=2.4)
    for x0, s in [(0, 1), (2, -1)]:
        d_ = .3 * s * (1 if inw else -1)
        ax.plot([x0, x0 + d_], [y, y + .3], color=INK, lw=2.4); ax.plot([x0, x0 + d_], [y, y - .3], color=INK, lw=2.4)
ax.set_title('Müller-Lyer', fontsize=9); ax.set_xlim(-.6, 2.6); ax.set_ylim(-.6, 1.6)
ax = axs[1]; ax.plot([-.2, .9], [0, 3], color=INK, lw=2); ax.plot([2.2, 1.1], [0, 3], color=INK, lw=2)
ax.plot([.5, 1.5], [2.4, 2.4], color=A, lw=4); ax.plot([.5, 1.5], [.5, .5], color=A, lw=4); ax.set_title('Ponzo', fontsize=9)
ax = axs[2]
for cx, big in [(0, True), (3.2, False)]:
    ax.add_patch(Circle((cx, 0), .45, color=A))
    for k in range(6 if big else 8):
        a = k * 2 * np.pi / (6 if big else 8); r_ = 1.25 if big else .72; rr = .5 if big else .17
        ax.add_patch(Circle((cx + np.cos(a) * r_, np.sin(a) * r_), rr, color=P))
ax.set_xlim(-2, 4.2); ax.set_ylim(-2, 2); ax.set_title('Ebbinghaus', fontsize=9)
ax = axs[3]
for cx, cy, a0 in [(0, 1.0, 300), (-.87, -.5, 60), (.87, -.5, 180)]:
    from matplotlib.patches import Wedge
    ax.add_patch(Wedge((cx, cy), .38, a0 + 0, a0 + 300, color=INK))
for (x0, y0), (x1, y1), (x2, y2) in [((-.87, .5), (.87, .5), (0, -1.0))]:
    pass
tri = np.array([[-.87, .5], [.87, .5], [0, -1.0]])
ax.set_xlim(-1.5, 1.5); ax.set_ylim(-1.2, 1.6); ax.set_title('Triángulo de Kanizsa', fontsize=9)
for ax in axs: ax.set_aspect('equal'); ax.axis('off')
save(fig, 'ilusiones.png')

# 7. Figura ambigua: cubo de Necker
fig, ax = plt.subplots(figsize=(2.6, 2.4)); s0 = np.array([[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]); off = np.array([.45, .35])
ax.plot(*s0.T, color=INK, lw=2); ax.plot(*(s0 + off).T, color=INK, lw=2)
for p_ in s0[:4]: ax.plot([p_[0], p_[0] + off[0]], [p_[1], p_[1] + off[1]], color=INK, lw=2)
ax.set_aspect('equal'); ax.axis('off')
save(fig, 'necker.png')

# 8. Sensibilidad espectral de los conos (forma aproximada)
wl = np.linspace(380, 700, 400)
def cone(peak, w):
    return np.exp(-.5 * ((np.log(wl) - np.log(peak)) / w) ** 2)
fig, ax = plt.subplots(figsize=(6.6, 2.9))
import colorsys
for i in range(len(wl) - 1):
    h_ = max(0, min(.8, (650 - wl[i]) / 270 * .75)); ax.axvspan(wl[i], wl[i + 1], ymin=0, ymax=.05, color=colorsys.hsv_to_rgb(h_, .85, .95), lw=0)
for pk, wd, c, l in [(420, .055, '#4F72B8', 'Conos S (~420 nm)'), (534, .07, '#3E9B5F', 'Conos M (~534 nm)'), (564, .075, '#D9534F', 'Conos L (~564 nm)')]:
    ax.plot(wl, cone(pk, wd), color=c, lw=2.3, label=l)
ax.set_xlabel('Longitud de onda (nm)'); ax.set_ylabel('Sensibilidad relativa'); ax.set_yticks([]); ax.set_xlim(380, 700); ax.set_ylim(0, 1.08)
ax.legend(frameon=False, fontsize=8.3, loc='upper right'); clean(ax)
save(fig, 'conos.png')

# 9. Canales oponentes
fig, ax = plt.subplots(figsize=(6.8, 3.0)); ax.set_xlim(0, 12); ax.set_ylim(0, 5); ax.axis('off')
for x0, t, c in [(2, 'Conos S', '#4F72B8'), (5, 'Conos M', '#3E9B5F'), (8, 'Conos L', '#D9534F')]: box(ax, x0, 4.2, 2.2, .7, t, c, 9)
for x0, t, c in [(2, 'Azul – amarillo\nS − (L + M)', '#4F72B8'), (6, 'Rojo – verde\nL − M', '#D9534F'), (10, 'Claro – oscuro\nL + M', '#5E6F80')]: box(ax, x0, 1.3, 3.2, 1.1, t, c, 8.8)
for a, b, s in [((2, 3.85), (2, 1.85), '+'), ((5, 3.85), (2.6, 1.85), '−'), ((8, 3.85), (2.9, 1.85), '−'), ((8, 3.85), (6.3, 1.85), '+'), ((5, 3.85), (5.7, 1.85), '−'), ((5, 3.85), (9.6, 1.85), '+'), ((8, 3.85), (10.2, 1.85), '+')]:
    arr(ax, a, b, MUTE, lw=1.1); ax.text(a[0] + (b[0] - a[0]) * .55 + .12, a[1] + (b[1] - a[1]) * .55, s, fontsize=11, weight='bold', color=G if s == '+' else A)
save(fig, 'oponentes.png')

# 10. Búsqueda visual: rasgo (pop-out) frente a conjunción, y tiempos
fig = plt.figure(figsize=(7.8, 2.8)); gs = fig.add_gridspec(1, 3, width_ratios=[1, 1, 1.35])
def disp(ax, items, title):
    for x_, y_, c, sh in items: ax.plot(x_, y_, sh, color=c, ms=11, mfc=c if sh == 'o' else 'none', mew=2.5)
    ax.set_title(title, fontsize=9); ax.set_xlim(-.5, 4.5); ax.set_ylim(-.5, 4.5); ax.set_aspect('equal'); ax.set_xticks([]); ax.set_yticks([])
    for s_ in ax.spines.values(): s_.set_color('#C9D3DB')
pos = [(x_, y_) for x_ in range(5) for y_ in range(5)]; rng.shuffle(pos); pos = pos[:14]
a1 = fig.add_subplot(gs[0]); disp(a1, [(x_, y_, P, 'o') for x_, y_ in pos[1:]] + [(pos[0][0], pos[0][1], A, 'o')], 'Búsqueda de un rasgo\n(salta a la vista)')
a2 = fig.add_subplot(gs[1]); disp(a2, [(x_, y_, P if k % 2 else A, 'o' if k % 2 else 's') for k, (x_, y_) in enumerate(pos[1:])] + [(pos[0][0], pos[0][1], A, 'o')], 'Búsqueda de una conjunción\n(círculo rojo)')
a3 = fig.add_subplot(gs[2]); ns = np.array([4, 8, 16, 32])
a3.plot(ns, 450 + 2 * ns, 'o-', color=G, lw=2, label='Rasgo: pendiente casi plana'); a3.plot(ns, 450 + 25 * ns, 's-', color=A, lw=2, label='Conjunción: crece con el n.º de elementos')
a3.set_xlabel('Número de elementos'); a3.set_ylabel('Tiempo de reacción (ms)'); a3.legend(frameon=False, fontsize=7.4, loc='upper left'); clean(a3)
save(fig, 'busqueda-visual.png')

# 11. Paradigma de señalización de Posner
fig, ax = plt.subplots(figsize=(7.4, 2.6)); ax.set_xlim(0, 15); ax.set_ylim(0, 4.4); ax.axis('off')
def screen(x0, cue=None, target=None, label=''):
    ax.add_patch(Rectangle((x0, 1.2), 3.2, 2.2, fc='#F4F6F8', ec=MUTE)); ax.text(x0 + 1.6, 2.3, '+', ha='center', va='center', fontsize=13)
    for side, cx in (('i', x0 + .6), ('d', x0 + 2.6)):
        ax.add_patch(Rectangle((cx - .35, 1.95), .7, .7, fc='none', ec=Y if cue == side else INK, lw=3 if cue == side else 1.2))
        if target == side: ax.text(cx, 2.3, '✱', ha='center', va='center', fontsize=12, color=A)
    if cue == 'c': ax.text(x0 + 1.6, 2.85, '→', ha='center', fontsize=13, color=Y, weight='bold')
    ax.text(x0 + 1.6, .75, label, ha='center', fontsize=8.4, color=INK)
screen(.2, label='Fijación'); screen(4.0, cue='d', label='Señal (periférica)'); screen(7.8, target='d', label='Ensayo válido'); screen(11.6, target='i', label='Ensayo inválido')
for x0 in (3.5, 7.3, 11.1): arr(ax, (x0, 2.3), (x0 + .4, 2.3), MUTE)
ax.text(7.5, 4.0, 'Válido: TR más rápido (beneficio)  ·  Inválido: TR más lento (coste)', ha='center', fontsize=8.8, color=INK, weight='bold')
save(fig, 'posner.png')

# 12. Modelos de filtro
fig, axs = plt.subplots(3, 1, figsize=(7.4, 4.2))
specs = [('Broadbent (1958): filtro temprano de «todo o nada»', [('Registro\nsensorial', MUTE), ('FILTRO\n(rasgos físicos)', A), ('Análisis del\nsignificado', P), ('Conciencia', G)], [3, 3, 1, 1]),
         ('Treisman (1964): atenuación', [('Registro\nsensorial', MUTE), ('ATENUADOR', Y), ('Diccionario\n(umbrales)', P), ('Conciencia', G)], [3, 3, 2, 1]),
         ('Deutsch y Deutsch (1963): selección tardía', [('Registro\nsensorial', MUTE), ('Análisis del\nsignificado', P), ('SELECCIÓN', A), ('Respuesta', G)], [3, 3, 3, 1])]
for ax, (title, steps, nlines) in zip(axs, specs):
    ax.set_xlim(0, 12); ax.set_ylim(0, 1.6); ax.axis('off'); ax.text(0, 1.45, title, fontsize=9, weight='bold', color=INK)
    xs = [1.4, 4.4, 7.4, 10.4]
    for i, ((t, c), x0) in enumerate(zip(steps, xs)):
        box(ax, x0, .6, 2.2, .85, t, c, 8)
        if i < 3:
            k = nlines[i + 1] if i + 1 < len(nlines) else 1
            for j in range(nlines[i] if i == 0 else k):
                pass
            n_in = 3 if i == 0 else nlines[i]
            n_out = nlines[i + 1]
            for j in range(n_out):
                yy = .6 + (j - (n_out - 1) / 2) * .22
                ax.plot([x0 + 1.12, xs[i + 1] - 1.12], [yy, yy], color=INK if j == 0 else MUTE, lw=1.6 if j == 0 else 1, ls='-' if j == 0 or 'ATEN' not in steps[1][0] or i != 1 else '--')
save(fig, 'filtros.png')

# 13. Parpadeo atencional (datos ilustrativos)
lags = np.arange(1, 9); acc = np.array([.82, .50, .48, .58, .70, .80, .85, .87])
fig, ax = plt.subplots(figsize=(6.0, 2.7)); ax.plot(lags, acc * 100, 'o-', color=P, lw=2.2)
ax.axvspan(1.6, 5.4, color=A, alpha=.08); ax.text(3.5, 92, 'parpadeo atencional\n(≈ 200–500 ms)', ha='center', fontsize=8.4, color=A)
ax.annotate('preservación\ndel lag 1', (1, 82), (1.5, 60), fontsize=8.2, color=G, arrowprops=dict(arrowstyle='->', color=G))
ax.set_xlabel('Posición de T2 tras T1 (lag; ≈ 100 ms cada uno)'); ax.set_ylabel('% de T2 detectados\n(cuando T1 fue correcto)'); ax.set_ylim(30, 105); clean(ax)
save(fig, 'parpadeo.png')

# 14. Heminegligencia: bisección de líneas y cancelación (ejemplo ilustrativo)
fig, axs = plt.subplots(1, 2, figsize=(7.4, 2.6))
ax = axs[0]
for y, L in [(3, 6), (2, 5), (1, 7)]:
    ax.plot([-L / 2, L / 2], [y, y], color=INK, lw=2); mid = 0; mark = L * .17
    ax.plot([mid, mid], [y - .18, y + .18], color=MUTE, lw=1, ls=':'); ax.plot([mark, mark], [y - .25, y + .25], color=A, lw=2.5)
ax.text(0, .2, 'Marca del paciente (rojo) desplazada a la derecha', ha='center', fontsize=8, color=A)
ax.set_xlim(-4, 4); ax.set_ylim(0, 3.6); ax.set_title('Bisección de líneas', fontsize=9)
ax = axs[1]; pts = rng.uniform([-4, 0], [4, 3], (40, 2))
for x_, y_ in pts:
    ax.plot([x_ - .15, x_ + .15], [y_, y_], color=INK, lw=1.6)
    if x_ > -.5: ax.plot([x_ - .2, x_ + .2], [y_ - .2, y_ + .2], color=A, lw=1.6)
ax.axvline(-.5, color=MUTE, ls=':', lw=1); ax.set_xlim(-4.4, 4.4); ax.set_ylim(-.4, 3.4); ax.set_title('Cancelación: solo tacha los del lado derecho', fontsize=9)
for ax in axs: ax.axis('off')
save(fig, 'negligencia.png')

# 15. Teoría de la puerta de control (esquema)
fig, ax = plt.subplots(figsize=(6.8, 3.0)); ax.set_xlim(0, 12); ax.set_ylim(0, 5); ax.axis('off')
box(ax, 1.8, 4.0, 3.0, .8, 'Fibras gruesas Aβ\n(tacto, frotar)', G, 8.4); box(ax, 1.8, 1.0, 3.0, .8, 'Fibras finas Aδ y C\n(nocicepción)', A, 8.4)
ax.add_patch(FancyBboxPatch((4.6, 1.6), 3.0, 1.8, boxstyle='round,pad=0.02', fc='#F3F0EA', ec=MUTE)); ax.text(6.1, 3.15, 'Asta dorsal de la médula', ha='center', fontsize=8, color=INK)
box(ax, 5.4, 2.3, 1.3, .7, 'Interneurona\ninhibidora', '#6E9C83', 7); box(ax, 7.0, 2.3, 1.1, .7, 'Célula T', P, 8)
box(ax, 10.2, 2.3, 2.8, .8, 'Al cerebro:\ndolor percibido', V, 8.4); box(ax, 10.2, 4.3, 2.8, .7, 'Control descendente\n(atención, emoción)', Y, 7.8)
arr(ax, (3.3, 4.0), (5.4, 2.7), G); arr(ax, (3.3, 1.0), (6.9, 1.95), A); arr(ax, (3.3, 1.0), (5.3, 1.95), A, ls='--')
arr(ax, (6.05, 2.3), (6.45, 2.3), INK); arr(ax, (7.55, 2.3), (8.8, 2.3), INK); arr(ax, (10.2, 3.95), (7.4, 2.75), Y, ls='--')
ax.text(4.0, 3.55, '+', color=G, fontsize=12, weight='bold'); ax.text(6.1, 1.95, '−', color=A, fontsize=12, weight='bold'); ax.text(6.2, 2.75, '⊣', color=INK, fontsize=12)
ax.text(6, .25, 'Las fibras gruesas «cierran» la puerta; las finas la «abren»', ha='center', fontsize=8.4, color=MUTE, style='italic')
save(fig, 'puerta-control.png')

# 16. Localización: diferencias interaurales de tiempo e intensidad
fig, ax = plt.subplots(figsize=(6.4, 3.0)); ax.set_xlim(-6, 6); ax.set_ylim(-2.6, 3); ax.set_aspect('equal'); ax.axis('off')
ax.add_patch(Circle((0, 0), 1.3, fc='#F2D7C9', ec=INK, lw=1.5)); ax.add_patch(Ellipse((-1.35, 0), .35, .7, fc='#E7B9A6', ec=INK)); ax.add_patch(Ellipse((1.35, 0), .35, .7, fc='#E7B9A6', ec=INK))
ax.text(0, 1.55, 'vista desde arriba', ha='center', fontsize=7.5, color=MUTE)
ax.plot(4.6, 1.8, 'o', ms=14, color=A); ax.text(4.6, 2.4, 'fuente', ha='center', fontsize=8.4, color=A)
for r_ in (1.2, 2.0, 2.8): ax.add_patch(matplotlib.patches.Arc((4.6, 1.8), r_ * 2, r_ * 2, angle=0, theta1=160, theta2=250, color=A, lw=1.2, alpha=.6))
ax.add_patch(Polygon([[-1.3, .6], [-1.3, -.6], [-3.6, -1.2], [-3.6, 1.2]], fc=P, alpha=.12, ec='none')); ax.text(-3.0, -1.9, 'sombra acústica\n(sonidos agudos: ILD)', ha='center', fontsize=8, color=P)
ax.text(3.6, -1.6, 'llega antes y con más intensidad\nal oído derecho (ITD útil en graves)', ha='center', fontsize=8, color=INK)
save(fig, 'itd-ild.png')

# 17. Onda sonora: frecuencia y amplitud
t = np.linspace(0, 1, 800); fig, axs = plt.subplots(1, 2, figsize=(7.2, 2.2), sharey=True)
axs[0].plot(t, np.sin(2 * np.pi * 3 * t), color=P, lw=2, label='grave (baja frecuencia)'); axs[0].plot(t, np.sin(2 * np.pi * 9 * t), color=A, lw=1.4, alpha=.8, label='agudo (alta frecuencia)')
axs[0].set_title('Frecuencia → tono', fontsize=9); axs[0].legend(frameon=False, fontsize=7.4, loc='lower left', ncol=1)
axs[1].plot(t, 1.0 * np.sin(2 * np.pi * 4 * t), color=P, lw=2, label='intenso'); axs[1].plot(t, .4 * np.sin(2 * np.pi * 4 * t), color=G, lw=2, label='débil')
axs[1].set_title('Amplitud → sonoridad', fontsize=9); axs[1].legend(frameon=False, fontsize=7.4, loc='lower left')
for ax in axs: ax.set_xticks([]); ax.set_yticks([]); ax.set_ylim(-1.6, 1.3); ax.set_xlabel('Tiempo'); clean(ax)
save(fig, 'onda-sonora.png')

# 18. Efecto Stroop
fig, axs = plt.subplots(1, 2, figsize=(6.4, 2.0))
words = ['ROJO', 'VERDE', 'AZUL', 'AMARILLO']; cols = {'ROJO': '#D9534F', 'VERDE': '#3E9B5F', 'AZUL': '#4F72B8', 'AMARILLO': '#D9A400'}
order = ['VERDE', 'AMARILLO', 'ROJO', 'AZUL']
for i, w in enumerate(words): axs[0].text(.5, .85 - i * .23, w, ha='center', fontsize=13, weight='bold', color=cols[w])
for i, (w, c) in enumerate(zip(words, order)): axs[1].text(.5, .85 - i * .23, w, ha='center', fontsize=13, weight='bold', color=cols[c])
axs[0].set_title('Congruente', fontsize=9); axs[1].set_title('Incongruente (más lento)', fontsize=9)
for ax in axs: ax.axis('off'); ax.set_ylim(0, 1)
save(fig, 'stroop.png')

# ---------- imágenes de Commons ----------
def jpg(path, name, w=1400, crop=None):
    im = Image.open(path).convert('RGBA'); bg = Image.new('RGBA', im.size, 'white'); bg.alpha_composite(im); im = bg.convert('RGB')
    if crop: im = im.crop(crop)
    im.thumbnail((w, w)); im.save(f'{OUT}/{name}', quality=88, optimize=True); print('ok', name, im.size)
jpg(f'{SRC}/ojo-es.png', 'ojo.jpg', 1100)
jpg(f'{SRC}/retina.png', 'retina.jpg', 1400)
jpg(f'{SRC}/ventral-dorsal.png', 'ventral-dorsal.jpg', 1100)
jpg(f'{SRC}/coclea-es.jpg', 'coclea.jpg', 900)
jpg(f'{SRC}/olfato.png', 'olfato.jpg', 1300)
jpg(f'{SRC}/adelson.png', 'adelson.jpg', 1000)
from PIL import ImageDraw, ImageFont
def rotlabel(path, erase, center, text, size):
    im = Image.open(path).convert('RGB'); d = ImageDraw.Draw(im); d.rectangle(erase, fill='white')
    f = ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf', size); w = int(d.textlength(text, font=f)) + 10
    lab = Image.new('RGB', (w, size + 14), 'white'); ImageDraw.Draw(lab).text((5, 4), text, font=f, fill='black'); lab = lab.rotate(90, expand=True)
    im.paste(lab, (center[0] - lab.width // 2, center[1] - lab.height // 2)); im.save(path)
rotlabel(f'{OUT}/fotorreceptores.png', [0, 120, 92, 1120], (45, 600), 'Receptores por mm²', 38)
rotlabel(f'{OUT}/oido.png', [20, 1180, 85, 1395], (52, 1250), 'Pabellón auricular', 44)
for f in ('oido.png', 'piel-receptores.png', 'fotorreceptores.png', 'via-visual.png'):
    jpg(f'{OUT}/{f}', f.replace('.png', '.jpg'), 1400)
