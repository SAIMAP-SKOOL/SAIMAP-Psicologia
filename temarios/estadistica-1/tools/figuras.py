"""Figuras del temario de Fundamentos de Estadística (matplotlib + datos verificados).
python3 tools/figuras.py   → img/*.png
"""
import os, numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle
from scipy import stats
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'img'); SRC = os.path.join(OUT, 'src')
P, A, G, Y, INK, MUTE = '#2D5A7B', '#C8553D', '#5FA47A', '#E0A83A', '#26323A', '#8A949B'
LP, LA = '#A9C3D6', '#EDB9AC'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10, 'axes.edgecolor': MUTE, 'axes.labelcolor': INK,
                     'xtick.color': MUTE, 'ytick.color': MUTE, 'axes.titlesize': 10.5, 'axes.titlecolor': INK})
rng = np.random.default_rng(2026)

def clean(ax, left=True):
    for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
    if not left: ax.spines['left'].set_visible(False); ax.set_yticks([])

def save(fig, name):
    fig.tight_layout(); fig.savefig(f'{OUT}/{name}', dpi=200); plt.close(fig); print('ok', name)

# ---------------------------------------------------------------- 1. Ciclo del método científico
fig, ax = plt.subplots(figsize=(7.2, 3.3)); ax.set_xlim(0, 10); ax.set_ylim(0, 4.6); ax.axis('off')
steps = ['Problema', 'Hipótesis', 'Diseño y\nrecogida de datos', 'Análisis\nestadístico', 'Conclusión y\ncomunicación']
cols = [P, '#3F6FA8', G, Y, A]
xs = np.linspace(1.0, 9.0, 5)
for i, (x, s, c) in enumerate(zip(xs, steps, cols)):
    ax.add_patch(FancyBboxPatch((x - .85, 2.3), 1.7, 1.3, boxstyle='round,pad=0.05,rounding_size=0.18', fc=c, ec='none'))
    ax.text(x, 2.95, s, ha='center', va='center', color='white', fontsize=9.2, weight='bold')
    if i < 4: ax.add_patch(FancyArrowPatch((x + .9, 2.95), (xs[i + 1] - .9, 2.95), arrowstyle='-|>', mutation_scale=13, color=INK, lw=1.4))
ax.add_patch(FancyArrowPatch((xs[4], 2.25), (xs[0], 2.25), connectionstyle='arc3,rad=-0.28', arrowstyle='-|>', mutation_scale=14, color=MUTE, lw=1.4, ls='--'))
ax.text(5, 0.55, 'Los resultados generan nuevas preguntas (el conocimiento es provisional y acumulativo)', ha='center', color=MUTE, fontsize=8.8, style='italic')
ax.text(xs[3], 4.05, 'aquí entra la estadística', ha='center', color=Y, fontsize=8.5, weight='bold')
save(fig, 'metodo-ciclo.png')

# ---------------------------------------------------------------- 2. Población y muestra
fig, ax = plt.subplots(figsize=(7.2, 3.2)); ax.set_xlim(0, 10); ax.set_ylim(0, 4.4); ax.axis('off'); ax.set_aspect('equal')
pts = rng.uniform(0, 1, (260, 2)); pts = pts[((pts - .5) ** 2).sum(1) < .25]
px, py = 0.4 + pts[:, 0] * 3.6, 0.3 + pts[:, 1] * 3.6
idx = rng.choice(len(px), 24, replace=False)
ax.scatter(px, py, s=14, color=LP, zorder=2); ax.scatter(px[idx], py[idx], s=22, color=A, zorder=3)
ax.add_patch(Circle((2.2, 2.1), 1.85, fc='none', ec=P, lw=1.5))
ax.text(2.2, 4.15, 'Población (N)', ha='center', color=P, weight='bold')
ax.add_patch(Circle((7.7, 2.1), 1.05, fc='none', ec=A, lw=1.5))
sx, sy = 7.7 + (px[idx] - 2.2) * 0.5, 2.1 + (py[idx] - 2.1) * 0.5
ax.scatter(sx, sy, s=22, color=A, zorder=3)
ax.text(7.7, 3.4, 'Muestra (n)', ha='center', color=A, weight='bold')
ax.add_patch(FancyArrowPatch((4.2, 2.6), (6.5, 2.6), arrowstyle='-|>', mutation_scale=14, color=INK, lw=1.4))
ax.text(5.35, 2.85, 'muestreo', ha='center', fontsize=9, color=INK)
ax.add_patch(FancyArrowPatch((6.5, 1.6), (4.2, 1.6), arrowstyle='-|>', mutation_scale=14, color=MUTE, lw=1.4, ls='--'))
ax.text(5.35, 1.15, 'inferencia', ha='center', fontsize=9, color=MUTE)
ax.text(2.2, -0.05, 'parámetros: μ, σ, π', ha='center', fontsize=9, color=P)
ax.text(7.7, 0.75, 'estadísticos: x̄, s, p', ha='center', fontsize=9, color=A)
save(fig, 'poblacion-muestra.png')

# ---------------------------------------------------------------- 3. Barras vs sectores (variable categórica)
cat = ['Ansiedad', 'Depresión', 'Estrés', 'Sueño', 'Otros']; fr = np.array([18, 14, 9, 5, 4])  # n = 50
fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.0), gridspec_kw={'width_ratios': [1.25, 1]})
a1.bar(cat, fr, color=P, width=.62); clean(a1)
for i, f in enumerate(fr): a1.text(i, f + .4, f'{f}', ha='center', fontsize=8.5, color=INK)
a1.set_ylabel('Frecuencia absoluta (nᵢ)'); a1.set_title('Diagrama de barras'); a1.tick_params(axis='x', labelsize=8.4)
a2.pie(fr, labels=[f'{c}\n{f / fr.sum():.0%}' for c, f in zip(cat, fr)], colors=[P, '#3F6FA8', G, Y, A], startangle=90, counterclock=False,
       wedgeprops={'ec': 'white', 'lw': 1.5}, textprops={'fontsize': 8.2, 'color': INK})
a2.set_title('Diagrama de sectores')
save(fig, 'barras-sectores.png')

# ---------------------------------------------------------------- 4. Histograma, polígono y ojiva
x = np.clip(np.round(rng.normal(24, 6, 120)), 6, 44)
edges = np.arange(5, 50, 5); n, _ = np.histogram(x, edges); mid = (edges[:-1] + edges[1:]) / 2
fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.0))
a1.bar(mid, n, width=5, color=LP, ec='white'); a1.plot(np.r_[mid[0] - 5, mid, mid[-1] + 5], np.r_[0, n, 0], color=A, marker='o', ms=3.5, lw=1.6)
a1.set_title('Histograma y polígono de frecuencias'); a1.set_xlabel('Puntuación en ansiedad'); a1.set_ylabel('nᵢ'); clean(a1)
a2.plot(edges, np.r_[0, np.cumsum(n)] / n.sum() * 100, color=P, marker='o', ms=3.5, lw=1.8)
a2.axhline(50, color=MUTE, ls=':', lw=1); a2.text(6, 53, '50 % → mediana', fontsize=8, color=MUTE)
a2.set_title('Ojiva (frecuencias acumuladas)'); a2.set_xlabel('Puntuación en ansiedad'); a2.set_ylabel('% acumulado'); clean(a2)
save(fig, 'histograma-ojiva.png')

# ---------------------------------------------------------------- 5. Asimetría: media, mediana y moda
fig, axs = plt.subplots(1, 3, figsize=(7.4, 2.5))
xx = np.linspace(0, 1, 400)
for ax, (a, b, t) in zip(axs, [(5, 2, 'Asimetría negativa'), (4, 4, 'Simétrica'), (2, 5, 'Asimetría positiva')]):
    d = stats.beta(a, b); ax.fill_between(xx, d.pdf(xx), color=LP, alpha=.8); ax.plot(xx, d.pdf(xx), color=P, lw=1.6)
    mo, me, mu = (a - 1) / (a + b - 2), d.median(), d.mean(); top = d.pdf(mo)
    for v, c, l in [(mo, INK, 'Mo'), (me, G, 'Md'), (mu, A, 'x̄')]:
        ax.plot([v, v], [0, d.pdf(v)], color=c, lw=1.4, ls='-' if l != 'Md' else '--')
    if a == b: ax.text(.5, top * 1.05, 'x̄ = Md = Mo', ha='center', fontsize=8.2, color=INK)
    else:
        order = sorted([(mo, 'Mo', INK), (me, 'Md', G), (mu, 'x̄', A)])
        for k, (v, l, c) in enumerate(order): ax.text(v, top * (1.04 + .13 * (k % 2)), l, ha='center', fontsize=8.4, color=c, weight='bold')
    ax.set_title(t, pad=14); ax.set_ylim(0, top * 1.3); clean(ax, left=False); ax.set_xticks([])
save(fig, 'asimetria.png')

# ---------------------------------------------------------------- 6. Curtosis
xx = np.linspace(-5, 5, 500); fig, ax = plt.subplots(figsize=(6.4, 2.6))
for d, c, l in [(stats.laplace(scale=1 / np.sqrt(2)), A, 'Leptocúrtica (más apuntada, colas pesadas)'), (stats.norm(), P, 'Mesocúrtica (normal)'),
                (stats.uniform(-np.sqrt(3), 2 * np.sqrt(3)), G, 'Platicúrtica (más aplanada)')]:
    ax.plot(xx, d.pdf(xx), color=c, lw=2, label=l)
ax.legend(frameon=False, fontsize=8.4, loc='upper right'); clean(ax, left=False); ax.set_xticks([]); ax.set_title('Tres distribuciones con la misma media y la misma varianza')
save(fig, 'curtosis.png')

# ---------------------------------------------------------------- 7. Misma media, distinta dispersión
xx = np.linspace(40, 160, 500); fig, ax = plt.subplots(figsize=(6.4, 2.5))
for s, c, l in [(5, A, 'Grupo A: x̄ = 100, s = 5'), (15, P, 'Grupo B: x̄ = 100, s = 15')]:
    ax.fill_between(xx, stats.norm(100, s).pdf(xx), color=c, alpha=.18); ax.plot(xx, stats.norm(100, s).pdf(xx), color=c, lw=2, label=l)
ax.axvline(100, color=INK, ls=':', lw=1); ax.legend(frameon=False, fontsize=8.6); clean(ax, left=False); ax.set_xlabel('Puntuación')
save(fig, 'dispersion.png')

# ---------------------------------------------------------------- 8. Anatomía del diagrama de caja
d = np.array([3, 5, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 14, 15, 24])
q1, md, q3 = np.percentile(d, [25, 50, 75]); iqr = q3 - q1; lo, hi = q1 - 1.5 * iqr, q3 + 1.5 * iqr
wl, wh = d[d >= lo].min(), d[d <= hi].max(); out = d[(d < lo) | (d > hi)]
fig, ax = plt.subplots(figsize=(7.2, 2.7))
ax.add_patch(plt.Rectangle((q1, .7), q3 - q1, .6, fc=LP, ec=P, lw=1.6)); ax.plot([md, md], [.7, 1.3], color=A, lw=2.6)
for a_, b_ in [(wl, q1), (q3, wh)]: ax.plot([a_, b_], [1, 1], color=P, lw=1.5)
for w in (wl, wh): ax.plot([w, w], [.85, 1.15], color=P, lw=1.5)
ax.scatter(out, [1] * len(out), s=40, facecolor='white', edgecolor=A, lw=1.6, zorder=3)
for v, t, y in [(wl, 'bigote inferior\n(mín. no atípico)', .25), (q1, f'Q₁ = {q1:g}'.replace('.', ','), 1.55), (md, f'Md = {md:g}', 1.85), (q3, f'Q₃ = {q3:g}', 1.55),
                (wh, 'bigote superior\n(máx. no atípico)', .25), (out[0], 'valor atípico', 1.55)]:
    ax.text(v, y, t, ha='center', fontsize=8.3, color=INK)
ax.annotate('', (q1, .58), (q3, .58), arrowprops=dict(arrowstyle='<->', color=G, lw=1.3)); ax.text((q1 + q3) / 2, .1, f'RIC = {iqr:g}\n(50 % central)'.replace('.', ','), ha='center', fontsize=8.3, color=G)
ax.axvline(hi, ymin=.08, ymax=.92, color=MUTE, ls=':', lw=1); ax.text(hi, 2.15, f'Q₃ + 1,5·RIC = {hi:g}'.replace('.', ','), ha='center', fontsize=7.8, color=MUTE)
ax.set_ylim(-.1, 2.4); ax.set_xlim(0, 27); clean(ax, left=False); ax.set_xlabel('Puntuación')
save(fig, 'boxplot.png')
print('  caja:', q1, md, q3, iqr, lo, hi, wl, wh, out)

# ---------------------------------------------------------------- 9. Normal 68-95-99,7
xx = np.linspace(-4, 4, 800); f = stats.norm.pdf(xx); fig, ax = plt.subplots(figsize=(7.2, 3.0))
for k, c in [(3, '#DCE7EF'), (2, LP), (1, '#6F98B6')]:
    m = np.abs(xx) <= k; ax.fill_between(xx[m], f[m], color=c)
ax.plot(xx, f, color=P, lw=2)
for k, t, y in [(1, '68,3 %', .2), (2, '95,4 %', .1), (3, '99,7 %', .03)]:
    ax.annotate('', (-k, y), (k, y), arrowprops=dict(arrowstyle='<->', color=INK, lw=1)); ax.text(0, y + .008, t, ha='center', fontsize=8.6, color=INK, weight='bold', bbox=dict(fc='white', ec='none', pad=1))
ax.set_xticks(range(-3, 4)); ax.set_xticklabels(['μ−3σ', 'μ−2σ', 'μ−σ', 'μ', 'μ+σ', 'μ+2σ', 'μ+3σ'])
ax2 = ax.secondary_xaxis(-0.18); ax2.set_xticks(range(-3, 4)); ax2.set_xticklabels([f'z = {k}' if k == 0 else f'{k:+d}'.replace('-', '−') for k in range(-3, 4)], fontsize=8.4)
ax2.spines['bottom'].set_visible(False); ax2.tick_params(length=0)
clean(ax, left=False); ax.set_title('La distribución normal: porcentaje de casos a 1, 2 y 3 desviaciones típicas')
save(fig, 'normal-68-95.png')

# ---------------------------------------------------------------- 10. Área bajo la normal para z = 1,5 (ejemplo resuelto)
fig, ax = plt.subplots(figsize=(6.4, 2.5)); m = xx <= 1.5
ax.fill_between(xx[m], f[m], color=LP); ax.plot(xx, f, color=P, lw=2); ax.axvline(1.5, ymax=.42, color=A, lw=1.6)
ax.text(-.2, .15, f'P(Z ≤ 1,5) = {stats.norm.cdf(1.5):.4f}'.replace('.', ','), ha='center', fontsize=9.2, color=INK, weight='bold')
ax.text(2.35, .06, f'{1 - stats.norm.cdf(1.5):.4f}'.replace('.', ','), ha='center', fontsize=8.8, color=A)
ax.set_xticks([-3, -2, -1, 0, 1, 1.5, 2, 3]); ax.set_xticklabels(['−3', '−2', '−1', '0', '1', '1,5', '2', '3']); ax.set_xlabel('z'); clean(ax, left=False)
save(fig, 'normal-z15.png')

# ---------------------------------------------------------------- 11. Árbol de frecuencias naturales (cribado, Bayes)
fig, ax = plt.subplots(figsize=(7.2, 3.4)); ax.set_xlim(0, 10); ax.set_ylim(0, 5); ax.axis('off')
def box(x, y, t, c, w=2.1):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - .38), w, .76, boxstyle='round,pad=0.03,rounding_size=0.12', fc=c, ec='none')); ax.text(x, y, t, ha='center', va='center', color='white', fontsize=8.6, weight='bold')
def ln(a, b, t):
    ax.plot([a[0], b[0]], [a[1], b[1]], color=MUTE, lw=1.2); ax.text((a[0] + b[0]) / 2 + (.12 if b[0] > a[0] else -.12), (a[1] + b[1]) / 2 + .1, t, fontsize=7.8, color=MUTE, ha='left' if b[0] > a[0] else 'right')
box(5, 4.5, '10 000 personas', INK, 2.4)
box(2.6, 3.0, '100 con el trastorno', A, 2.5); box(7.4, 3.0, '9 900 sin el trastorno', P, 2.6)
ln((5, 4.1), (2.6, 3.4), 'prevalencia 1 %'); ln((5, 4.1), (7.4, 3.4), '99 %')
box(1.3, 1.4, '90 positivos', A, 1.9); box(3.9, 1.4, '10 negativos', '#B9867B', 1.9)
box(6.1, 1.4, '495 positivos', '#7A9DB8', 1.9); box(8.7, 1.4, '9 405 negativos', P, 2.0)
ln((2.6, 2.6), (1.3, 1.8), 'sensibilidad 90 %'); ln((2.6, 2.6), (3.9, 1.8), '10 %'); ln((7.4, 2.6), (6.1, 1.8), '5 % falsos +'); ln((7.4, 2.6), (8.7, 1.8), 'especificidad 95 %')
ax.text(5, .35, 'De 90 + 495 = 585 positivos, solo 90 tienen el trastorno: P(T | +) = 90 / 585 ≈ 0,15', ha='center', fontsize=9.2, color=INK, weight='bold')
save(fig, 'bayes-arbol.png')

# ---------------------------------------------------------------- 12. Diagramas de dispersión con distintos r
def corr_sample(r, n=80):
    z = rng.standard_normal((n, 2)); x_ = z[:, 0]; y_ = r * x_ + np.sqrt(1 - r * r) * z[:, 1]; return x_, y_
fig, axs = plt.subplots(1, 6, figsize=(7.6, 1.85))
for ax, r in zip(axs[:5], [-.9, -.5, 0, .5, .9]):
    for _ in range(200):
        x_, y_ = corr_sample(r)
        if abs(np.corrcoef(x_, y_)[0, 1] - r) < .02: break
    ax.scatter(x_, y_, s=5, color=P); ax.set_title(f'r = {np.corrcoef(x_, y_)[0, 1]:.2f}'.replace('.', ',').replace('-', '−'), fontsize=9)
xq = np.linspace(-2, 2, 80); yq = xq ** 2 + rng.normal(0, .3, 80)
axs[5].scatter(xq, yq, s=5, color=A); axs[5].set_title(f'r = {np.corrcoef(xq, yq)[0, 1]:.2f}'.replace('.', ',').replace('-', '−') + '\n(curvilínea)', fontsize=8.5)
for ax in axs: ax.set_xticks([]); ax.set_yticks([]); [ax.spines[s].set_color('#C9D3DB') for s in ax.spines]
save(fig, 'dispersion-r.png')

# ---------------------------------------------------------------- 13. Cuarteto de Anscombe (1973)
x1 = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5]
an = {'I': (x1, [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68]),
      'II': (x1, [9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74]),
      'III': (x1, [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73]),
      'IV': ([8, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8], [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.50, 5.56, 7.91, 6.89])}
fig, axs = plt.subplots(1, 4, figsize=(7.6, 2.25), sharey=True)
for ax, (k, (xa, ya)) in zip(axs, an.items()):
    xa, ya = np.array(xa), np.array(ya); b, a0 = np.polyfit(xa, ya, 1); r = np.corrcoef(xa, ya)[0, 1]
    ax.scatter(xa, ya, s=16, color=P, zorder=3); gx = np.array([3, 20]); ax.plot(gx, a0 + b * gx, color=A, lw=1.4)
    ax.set_title(f'{k}   r = {r:.3f}'.replace('.', ','), fontsize=9); ax.set_xlim(2, 21); ax.set_ylim(2, 14); clean(ax)
    print('  anscombe', k, round(xa.mean(), 2), round(ya.mean(), 2), round(ya.var(ddof=1), 3), round(r, 3), round(a0, 2), round(b, 3))
save(fig, 'anscombe.png')

# ---------------------------------------------------------------- 14. Paradoja de Simpson (datos simulados)
fig, ax = plt.subplots(figsize=(6.4, 3.0)); allx, ally = [], []
for i, (cx, cy, c, l) in enumerate([(2, 8, P, 'Grupo 1'), (5, 5, G, 'Grupo 2'), (8, 2, A, 'Grupo 3')]):
    xg = rng.normal(cx, .8, 30); yg = cy + .8 * (xg - cx) + rng.normal(0, .45, 30)
    ax.scatter(xg, yg, s=12, color=c, label=l); b, a0 = np.polyfit(xg, yg, 1); gx = np.array([xg.min(), xg.max()]); ax.plot(gx, a0 + b * gx, color=c, lw=1.6)
    allx += list(xg); ally += list(yg)
b, a0 = np.polyfit(allx, ally, 1); gx = np.array([0, 10]); ax.plot(gx, a0 + b * gx, color=INK, lw=1.6, ls='--', label='Todos juntos')
ax.text(6.2, 7.6, f'r global = {np.corrcoef(allx, ally)[0, 1]:.2f}'.replace('.', ',').replace('-', '−'), ha='left', fontsize=8.6, color=INK)
ax.text(.3, 10.6, 'Dentro de cada grupo, r > 0', fontsize=8.6, color=MUTE)
ax.legend(frameon=False, fontsize=8, loc='upper right'); ax.set_xlabel('X'); ax.set_ylabel('Y'); clean(ax)
save(fig, 'simpson.png')

# ---------------------------------------------------------------- 15. Restricción de rango
xr, yr = corr_sample(.6, 400); m = xr > 1
fig, ax = plt.subplots(figsize=(6.4, 2.8))
ax.scatter(xr[~m], yr[~m], s=7, color=LP); ax.scatter(xr[m], yr[m], s=9, color=A)
ax.axvline(1, color=INK, ls=':', lw=1)
ax.text(-3.2, 2.7, f'Toda la muestra: r = {np.corrcoef(xr, yr)[0, 1]:.2f}'.replace('.', ','), fontsize=8.8, color=P)
ax.text(1.1, -2.7, f'Solo los seleccionados (X > 1): r = {np.corrcoef(xr[m], yr[m])[0, 1]:.2f}'.replace('.', ','), fontsize=8.8, color=A)
ax.set_xlabel('Prueba de admisión (X)'); ax.set_ylabel('Rendimiento posterior (Y)'); clean(ax)
save(fig, 'restriccion-rango.png')

# ---------------------------------------------------------------- 16. Teorema central del límite
pop = stats.expon(scale=1); fig, axs = plt.subplots(1, 4, figsize=(7.6, 2.2))
xe = np.linspace(0, 5, 300); axs[0].fill_between(xe, pop.pdf(xe), color=LA); axs[0].plot(xe, pop.pdf(xe), color=A, lw=1.6); axs[0].set_title('Población\n(muy asimétrica)', fontsize=8.8)
for ax, n in zip(axs[1:], [2, 10, 30]):
    means = rng.exponential(1, (20000, n)).mean(1); ax.hist(means, bins=50, density=True, color=LP, ec='none')
    g = np.linspace(means.min(), means.max(), 200); ax.plot(g, stats.norm(1, 1 / np.sqrt(n)).pdf(g), color=P, lw=1.5)
    ax.set_title(f'Medias de muestras\nn = {n}', fontsize=8.8); ax.set_xlim(0, 3)
for ax in axs: clean(ax, left=False)
save(fig, 'tcl.png')

# ---------------------------------------------------------------- 17. Cobertura de intervalos de confianza al 95 %
mu, sig, n = 100, 15, 25; fig, ax = plt.subplots(figsize=(7.2, 3.0)); miss = 0
for i in range(40):
    s_ = rng.normal(mu, sig, n); m_ = s_.mean(); e = 1.96 * sig / np.sqrt(n); bad = abs(m_ - mu) > e; miss += bad
    ax.plot([i, i], [m_ - e, m_ + e], color=A if bad else P, lw=1.8); ax.plot(i, m_, 'o', ms=3, color=A if bad else P)
ax.axhline(mu, color=INK, ls='--', lw=1); ax.text(40.6, mu + .6, 'μ = 100', va='center', fontsize=8.6, color=INK)
ax.set_xlabel('Muestra (n = 25 cada una)'); ax.set_ylabel('IC 95 % de la media'); ax.set_xlim(-1, 44); clean(ax)
ax.set_title(f'40 intervalos de 40 muestras distintas: {40 - miss} contienen μ y {miss} no (en rojo)', fontsize=9.5)
save(fig, 'ic-cobertura.png')

# ---------------------------------------------------------------- 18. Región de rechazo bilateral y valor p
xx = np.linspace(-4, 4, 800); f = stats.norm.pdf(xx); fig, ax = plt.subplots(figsize=(6.8, 2.6))
ax.plot(xx, f, color=P, lw=2)
for m in (xx <= -1.96, xx >= 1.96): ax.fill_between(xx[m], f[m], color=A, alpha=.75)
ax.axvline(2.3, ymax=.12, color=INK, lw=1.6); ax.text(2.3, .07, 'z observado\n= 2,30', ha='center', fontsize=8.2, color=INK)
ax.text(0, .17, 'Región de no rechazo\n(95 %)', ha='center', fontsize=8.8, color=P)
ax.text(-2.75, .05, 'α/2 = 0,025', ha='center', fontsize=8.4, color=A); ax.text(3.05, .045, 'α/2 = 0,025', ha='center', fontsize=8.4, color=A)
ax.set_xticks([-1.96, 0, 1.96]); ax.set_xticklabels(['−1,96', '0', '1,96']); clean(ax, left=False)
ax.set_title(f'Contraste bilateral con α = 0,05 · z = 2,30 → p = {2 * (1 - stats.norm.cdf(2.3)):.3f}'.replace('.', ','))
save(fig, 'region-rechazo.png')

# ---------------------------------------------------------------- 19. Errores tipo I y II y potencia
xx = np.linspace(-4.2, 6.5, 900); h0, h1 = stats.norm(0, 1), stats.norm(2.5, 1); c = 1.645
fig, ax = plt.subplots(figsize=(7.2, 2.9))
ax.plot(xx, h0.pdf(xx), color=P, lw=2); ax.plot(xx, h1.pdf(xx), color=A, lw=2)
m = xx >= c; ax.fill_between(xx[m], h0.pdf(xx[m]), color=P, alpha=.55); ax.fill_between(xx[m], h1.pdf(xx[m]), color=A, alpha=.15)
m = xx < c; ax.fill_between(xx[m], h1.pdf(xx[m]), color=Y, alpha=.55)
ax.axvline(c, color=INK, ls='--', lw=1); ax.text(c + .08, .515, 'valor crítico', ha='left', fontsize=8.2, color=INK)
ax.text(-.4, .41, 'Distribución si H₀\nes verdadera', ha='center', fontsize=8.6, color=P); ax.text(3.1, .41, 'Distribución si H₁\nes verdadera', ha='center', fontsize=8.6, color=A)
ax.annotate(f'α = 0,05\n(error tipo I)', (1.9, .03), (-4.0, .1), fontsize=8.4, color=P, arrowprops=dict(arrowstyle='->', color=P))
ax.annotate(f'β = {h1.cdf(c):.2f}\n(error tipo II)'.replace('.', ','), (1.2, .08), (-4.0, .26), fontsize=8.4, color='#9A6E05', arrowprops=dict(arrowstyle='->', color='#9A6E05'))
ax.text(4.3, .14, f'Potencia = 1 − β\n= {1 - h1.cdf(c):.2f}'.replace('.', ','), fontsize=8.6, color=A)
ax.set_ylim(0, .55); clean(ax, left=False); ax.set_xticks([])
save(fig, 'errores-potencia.png')

# ---------------------------------------------------------------- 20. Potencia según n y tamaño del efecto (t de dos muestras, α = 0,05 bilateral)
ns = np.arange(5, 201); fig, ax = plt.subplots(figsize=(6.6, 2.8))
for d_, col, l in [(.2, MUTE, 'd = 0,2 (pequeño)'), (.5, P, 'd = 0,5 (mediano)'), (.8, A, 'd = 0,8 (grande)')]:
    df = 2 * ns - 2; tc = stats.t.ppf(.975, df); ncp = d_ * np.sqrt(ns / 2)
    pw = 1 - stats.nct.cdf(tc, df, ncp) + stats.nct.cdf(-tc, df, ncp); ax.plot(ns, pw, color=col, lw=2, label=l)
    n80 = ns[np.argmax(pw >= .8)] if (pw >= .8).any() else None; print('  n por grupo para potencia 0,80 con', d_, '→', n80)
ax.axhline(.8, color=INK, ls=':', lw=1); ax.text(200, .82, 'potencia 0,80', ha='right', fontsize=8.2, color=INK)
ax.set_xlabel('Participantes por grupo'); ax.set_ylabel('Potencia'); ax.set_ylim(0, 1.02); ax.legend(frameon=False, fontsize=8.4, loc='lower right'); clean(ax)
save(fig, 'potencia-n.png')

# ---------------------------------------------------------------- Imágenes históricas (Wikimedia Commons)
def jpg(im, name, w=1400):
    im = im.convert('RGB'); im.thumbnail((w, w)); im.save(f'{OUT}/{name}', quality=86, optimize=True); print('ok', name, im.size)
jpg(Image.open(f'{SRC}/nightingale.jpg'), 'nightingale.jpg', 1600)
sn = Image.open(f'{SRC}/snow.jpg'); W, H = sn.size; k = W / 900
jpg(sn.crop((int(240 * k), int(220 * k), int(720 * k), int(620 * k))), 'snow.jpg', 1400)
gb = Image.open(f'{SRC}/galton-box.jpg'); kg = gb.size[0] / 600
jpg(gb.crop(tuple(int(v * kg) for v in (112, 285, 503, 732))), 'galton-box.jpg', 900)
# Mosaico de retratos con nombre
fnt = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30); fs = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 24)
por = [('galton.jpg', 'Francis Galton', '1822–1911', None), ('pearson.jpg', 'Karl Pearson', '1857–1936', (250, 105, 610, 590)),
       ('gosset.jpg', 'W. S. Gosset («Student»)', '1876–1937', None), ('fisher.jpg', 'Ronald A. Fisher', '1890–1962', None)]
cw, ch = 420, 520; can = Image.new('RGB', (cw * 4 + 30 * 3, ch + 90), 'white'); dr = ImageDraw.Draw(can)
for i, (f_, nm, yrs, crop) in enumerate(por):
    im = Image.open(f'{SRC}/{f_}').convert('L').convert('RGB')
    if crop: kk = im.size[0] / 900; im = im.crop(tuple(int(v * kk) for v in crop))
    r_ = max(cw / im.size[0], ch / im.size[1]); im = im.resize((int(im.size[0] * r_) + 1, int(im.size[1] * r_) + 1))
    l = (im.size[0] - cw) // 2; im = im.crop((l, 0, l + cw, ch)); x0 = i * (cw + 30); can.paste(im, (x0, 0))
    tw = dr.textlength(nm, font=fnt if len(nm) < 18 else fs); dr.text((x0 + (cw - tw) / 2, ch + 12), nm, font=fnt if len(nm) < 18 else fs, fill=INK)
    tw = dr.textlength(yrs, font=fs); dr.text((x0 + (cw - tw) / 2, ch + 52), yrs, font=fs, fill=MUTE)
jpg(can, 'pioneros.jpg', 1600)
