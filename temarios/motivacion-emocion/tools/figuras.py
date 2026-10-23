"""Figuras del temario de Motivación y Emoción. python3 tools/figuras.py → img/*"""
import os, numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Wedge
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'img'); SRC = os.path.join(OUT, 'src')
P, A, G, Y, V, INK, MUTE = '#2D5A7B', '#C8553D', '#5FA47A', '#E0A83A', '#7A5BA8', '#26323A', '#8A949B'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10, 'axes.edgecolor': MUTE, 'axes.labelcolor': INK,
                     'xtick.color': MUTE, 'ytick.color': MUTE, 'axes.titlesize': 10.5, 'axes.titlecolor': INK})

def clean(ax):
    for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
def save(fig, name):
    fig.tight_layout(); fig.savefig(f'{OUT}/{name}', dpi=200); plt.close(fig); print('ok', name)
def box(ax, x, y, w, h, t, c, fs=9, tc='white', bold=True):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h, boxstyle='round,pad=0.02,rounding_size=0.12', fc=c, ec='none'))
    ax.text(x, y, t, ha='center', va='center', color=tc, fontsize=fs, weight='bold' if bold else 'normal')
def arr(ax, a, b, c=INK, ls='-', rad=0, lw=1.4):
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-|>', mutation_scale=12, color=c, lw=lw, ls=ls, connectionstyle=f'arc3,rad={rad}'))

# 1. Continuo de autodeterminación (teoría de la integración organísmica)
fig, ax = plt.subplots(figsize=(7.6, 3.0)); ax.set_xlim(0, 12); ax.set_ylim(0, 4.2); ax.axis('off')
cols = ['#8A949B', '#C8553D', '#D98A4E', '#E0A83A', '#8DB86B', '#5FA47A']
labs = ['Amotivación', 'Regulación\nexterna', 'Regulación\nintroyectada', 'Regulación\nidentificada', 'Regulación\nintegrada', 'Motivación\nintrínseca']
why = ['«No sé para\nqué lo hago»', 'premios,\ncastigos', 'culpa,\norgullo', 'lo valoro\nimportante', 'encaja con\nquién soy', 'interés,\ndisfrute']
for i in range(6):
    x = 1 + i * 2; box(ax, x, 2.6, 1.82, 1.0, labs[i], cols[i], fs=8.3)
    ax.text(x, 1.75, why[i], ha='center', va='top', fontsize=7.8, color=INK)
ax.annotate('', (11.9, 3.55), (0.1, 3.55), arrowprops=dict(arrowstyle='-|>', color=INK, lw=1.4))
ax.text(6, 3.8, 'más autodeterminación', ha='center', fontsize=8.8, color=INK)
for x0, x1, t, c in [(2.1, 6.0, 'Motivación extrínseca controlada', A), (6.1, 9.9, 'Motivación extrínseca autónoma', G)]:
    ax.plot([x0, x1], [0.55, 0.55], color=c, lw=3, solid_capstyle='round'); ax.text((x0 + x1) / 2, 0.15, t, ha='center', fontsize=8.4, color=c, weight='bold')
save(fig, 'tad-continuo.png')

# 2. Yerkes-Dodson: la versión original (interacción con la dificultad) y la «U invertida» popular
x = np.linspace(0, 1, 300); fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 2.8))
for opt, c, l in [(.72, G, 'tarea sencilla'), (.38, A, 'tarea difícil')]:
    a1.plot(x, np.exp(-((x - opt) / .28) ** 2), color=c, lw=2.2, label=l); a1.axvline(opt, color=c, ls=':', lw=1)
a1.set_title('Interacción activación × dificultad'); a1.legend(frameon=False, fontsize=8.4, loc='lower center')
a2.plot(x, np.exp(-((x - .5) / .27) ** 2), color=P, lw=2.4); a2.set_title('«U invertida» popular (Hebb, 1955)')
a2.text(.5, 1.04, 'nivel óptimo', ha='center', fontsize=8.4, color=P)
for ax in (a1, a2):
    ax.set_xlabel('Activación'); ax.set_ylabel('Rendimiento'); ax.set_xticks([]); ax.set_yticks([]); ax.set_ylim(0, 1.15); clean(ax)
save(fig, 'yerkes-dodson.png')

# 3. Maslow: necesidades de déficit y de crecimiento (sin pirámide)
fig, ax = plt.subplots(figsize=(7.2, 3.1)); ax.set_xlim(0, 10); ax.set_ylim(0, 5.6); ax.axis('off')
lv = [('Fisiológicas', 'hambre, sed, sueño', '#C8553D'), ('Seguridad', 'protección, estabilidad', '#D98A4E'), ('Pertenencia y amor', 'afecto, aceptación', '#E0A83A'),
      ('Estima', 'respeto, competencia', '#8DB86B'), ('Autorrealización', 'desarrollar el propio potencial', '#5FA47A')]
for i, (t, d, c) in enumerate(lv):
    y = .6 + i * 1.0; box(ax, 2.6, y, 4.4, .78, t, c, fs=9.2); ax.text(5.05, y, d, va='center', fontsize=8.6, color=INK)
ax.plot([8.1, 8.1], [.25, 4.0], color=A, lw=2.5); ax.text(8.3, 2.1, 'Necesidades de\ndéficit (D)', va='center', fontsize=8.6, color=A, weight='bold')
ax.plot([8.1, 8.1], [4.2, 4.95], color=G, lw=2.5); ax.text(8.3, 4.6, 'Necesidad de\ncrecimiento (B)', va='center', fontsize=8.6, color=G, weight='bold')
save(fig, 'maslow-necesidades.png')

# 4. Atkinson: tendencia de logro según la probabilidad de éxito
ps = np.linspace(0, 1, 200); fig, ax = plt.subplots(figsize=(6.4, 2.8))
ax.plot(ps, 3 * ps * (1 - ps), color=G, lw=2.4, label='Motivo de éxito > miedo al fracaso')
ax.plot(ps, -3 * ps * (1 - ps), color=A, lw=2.4, label='Miedo al fracaso > motivo de éxito')
ax.axhline(0, color=MUTE, lw=1); ax.axvline(.5, color=INK, ls=':', lw=1); ax.text(.51, .85, 'Ps = 0,5', fontsize=8.4, color=INK)
ax.set_xlabel('Probabilidad subjetiva de éxito (Ps)'); ax.set_ylabel('Tendencia resultante'); ax.set_yticks([]); ax.set_xticks([0, .25, .5, .75, 1]); ax.set_xticklabels(['0', '0,25', '0,5', '0,75', '1']); ax.legend(frameon=False, fontsize=8.2, loc='upper center', bbox_to_anchor=(.5, 1.22), ncol=2); clean(ax)
save(fig, 'atkinson.png')

# 5. Regulación del hambre (esquema)
fig, ax = plt.subplots(figsize=(7.4, 3.6)); ax.set_xlim(0, 12); ax.set_ylim(0, 6); ax.axis('off')
box(ax, 1.6, 5.0, 2.8, .8, 'Estómago vacío\n→ GRELINA', A, 8.4); box(ax, 1.6, 3.4, 2.8, .8, 'Tejido adiposo\n→ LEPTINA', P, 8.4); box(ax, 1.6, 1.8, 2.8, .8, 'Páncreas\n→ INSULINA', P, 8.4)
box(ax, 1.6, .5, 2.8, .7, 'Intestino → CCK, PYY, GLP-1', '#3F6FA8', 7.8)
ax.add_patch(FancyBboxPatch((4.0, .9), 3.6, 4.6, boxstyle='round,pad=0.02,rounding_size=0.2', fc='#F3F0EA', ec=MUTE)); ax.text(5.8, 5.2, 'Núcleo arqueado (hipotálamo)', ha='center', fontsize=8.4, color=INK, weight='bold')
box(ax, 5.8, 4.1, 3.1, .85, 'Neuronas NPY/AgRP\n(orexígenas)', A, 8.4); box(ax, 5.8, 2.2, 3.1, .85, 'Neuronas POMC/CART\n(anorexígenas)', G, 8.4)
arr(ax, (3.0, 5.0), (4.25, 4.25), A); arr(ax, (3.0, 3.4), (4.25, 2.45), G); arr(ax, (3.0, 1.8), (4.25, 2.05), G); arr(ax, (3.0, .6), (4.4, 1.5), G, ls='--')
ax.text(3.35, 3.0, '+', color=G, fontsize=11, weight='bold'); ax.text(3.3, 4.85, '+', color=A, fontsize=11, weight='bold')
ax.plot([3.0, 4.25], [3.4, 3.95], color=P, lw=1.2, ls=':'); ax.text(3.45, 3.78, '−', color=P, fontsize=12, weight='bold')
box(ax, 9.8, 4.1, 3.2, .85, 'Hipotálamo lateral\n(orexina, MCH)', '#B9867B', 8.2); box(ax, 9.8, 2.2, 3.2, .85, 'Núcleo paraventricular\n(receptores MC4R)', '#6E9C83', 8.2)
arr(ax, (7.4, 4.1), (8.15, 4.1), A); arr(ax, (7.4, 2.2), (8.15, 2.2), G); arr(ax, (7.4, 3.9), (8.15, 2.5), MUTE, ls='--')
ax.text(9.8, 5.1, 'Más hambre', ha='center', color=A, fontsize=9, weight='bold'); ax.text(9.8, 1.25, 'Saciedad', ha='center', color=G, fontsize=9, weight='bold')
save(fig, 'hambre-circuito.png')

# 6. Dos tipos de sed
fig, ax = plt.subplots(figsize=(7.4, 3.4)); ax.set_xlim(0, 12); ax.set_ylim(-.4, 5); ax.axis('off')
for x0, c, steps in [(3.0, P, ['Sed OSMÓTICA', 'Más solutos en el líquido\nextracelular (p. ej., comer salado)', 'Osmorreceptores del OVLT\ny del órgano subfornical', 'Vasopresina (ADH) + sed\nde agua']),
                     (9.0, A, ['Sed HIPOVOLÉMICA', 'Pérdida de volumen\n(hemorragia, diarrea, sudor)', 'Barorreceptores · riñón:\nrenina → angiotensina II', 'Sed + vasopresina +\naldosterona (apetito de sal)'])]:
    for i, t in enumerate(steps):
        y = 4.5 - i * 1.25; box(ax, x0, y, 5.2, .9 if i else .6, t, c if i == 0 else c, 8.6 if i == 0 else 8.0, bold=i == 0)
        if i: ax.patches[-1].set_alpha(.82)
        if i < 3: arr(ax, (x0, y - (.32 if i == 0 else .47)), (x0, y - .78))
ax.text(6, -.3, 'Ambos sistemas convergen en el núcleo preóptico mediano', ha='center', fontsize=8.6, color=MUTE, style='italic')
save(fig, 'sed-tipos.png')

# 7. Hipnograma (ficticio, típico de un adulto joven)
st = {'Vigilia': 4, 'REM': 3, 'N1': 2, 'N2': 1, 'N3': 0}
seq = [('Vigilia', 10), ('N1', 6), ('N2', 15), ('N3', 40), ('N2', 15), ('REM', 10),
       ('N2', 25), ('N3', 30), ('N2', 15), ('REM', 20),
       ('N2', 35), ('N3', 10), ('N2', 15), ('REM', 28), ('Vigilia', 3),
       ('N2', 45), ('REM', 32), ('N1', 5), ('N2', 40), ('REM', 35), ('Vigilia', 6)]
t, y = [0], []
for s, d in seq: y += [st[s]]; t.append(t[-1] + d)
order = [3, 4, 2, 1, 0]
fig, ax = plt.subplots(figsize=(7.4, 2.7))
for i, (s, d) in enumerate(seq):
    yy = [None, 2, 1, 0, 3][0] if False else None
ylev = {'Vigilia': 4, 'REM': 3, 'N1': 2, 'N2': 1, 'N3': 0}
xs, ys = [], []
for (s, d), t0 in zip(seq, t[:-1]):
    xs += [t0 / 60, (t0 + d) / 60]; ys += [ylev[s], ylev[s]]
ax.plot(xs, ys, color=P, lw=1.8, drawstyle='default')
for (s, d), t0 in zip(seq, t[:-1]):
    if s == 'REM': ax.add_patch(plt.Rectangle((t0 / 60, 2.85), d / 60, .3, color=A, alpha=.85))
ax.set_yticks([0, 1, 2, 3, 4]); ax.set_yticklabels(['N3', 'N2', 'N1', 'REM', 'Vigilia']); ax.invert_yaxis()
ax.set_xlabel('Horas de sueño'); ax.set_xlim(0, t[-1] / 60); ax.set_ylim(4.4, -0.4); clean(ax)
ax.text(0.85, -0.25, 'N3 abunda al principio', fontsize=8.2, color=P); ax.text(4.75, 3.75, 'REM más largo al final', fontsize=8.2, color=A)
save(fig, 'hipnograma.png'); print('  duración total h', t[-1] / 60)

# 8. Modelo de dos procesos (Borbély)
h = np.linspace(0, 48, 1000); fig, ax = plt.subplots(figsize=(7.2, 2.8))
S = np.zeros_like(h); s = .25
for i in range(1, len(h)):
    dt = h[i] - h[i - 1]; tod = (h[i] + 7) % 24; awake = not (tod >= 23 or tod < 7)
    s = s + (1 - s) * dt / 18 if awake else s * np.exp(-dt / 4.2); S[i] = s
S[0] = .25; C = .55 + .22 * np.sin(2 * np.pi * (h + 7 - 10) / 24)
ax.plot(h, S, color=P, lw=2.2, label='Proceso S (presión homeostática de sueño)'); ax.plot(h, C, color=A, lw=2.2, label='Proceso C (ritmo circadiano de alerta)')
for d in (0, 24):
    ax.axvspan(16 + d, 24 + d, color='#26323A', alpha=.07)
ax.set_xticks([0, 8, 16, 24, 32, 40, 48]); ax.set_xticklabels(['7:00', '15:00', '23:00', '7:00', '15:00', '23:00', '7:00'])
ax.set_yticks([]); ax.set_ylim(0, 1.2); ax.legend(frameon=False, fontsize=8.2, loc='upper left', ncol=1); ax.text(19.8, .05, 'sueño', ha='center', fontsize=8.2, color=MUTE); ax.text(43.8, .05, 'sueño', ha='center', fontsize=8.2, color=MUTE); clean(ax)
save(fig, 'procesos-s-c.png')

# 9. Teorías clásicas de la emoción: secuencias
fig, ax = plt.subplots(figsize=(7.6, 4.2)); ax.set_xlim(0, 12.4); ax.set_ylim(0, 8.4); ax.axis('off')
rows = [('James-Lange', [('Estímulo', MUTE), ('Cambios\ncorporales', A), ('Experiencia\nemocional', P)], 'serie'),
        ('Cannon-Bard', [('Estímulo', MUTE), ('Tálamo', V), ('Cambios corporales\ny experiencia', P)], 'simul'),
        ('Schachter-Singer', [('Estímulo', MUTE), ('Activación\ninespecífica', A), ('Etiqueta\ncognitiva', Y), ('Emoción', P)], 'serie'),
        ('Lazarus', [('Estímulo', MUTE), ('Evaluación\ncognitiva', Y), ('Emoción\n(respuesta y vivencia)', P)], 'serie')]
for r, (name, steps, kind) in enumerate(rows):
    y = 7.5 - r * 2.05; ax.text(0.05, y, name, va='center', fontsize=9.6, weight='bold', color=INK)
    n = len(steps); xs = np.linspace(4.0, 11.0, n)
    for i, (t, c) in enumerate(steps):
        box(ax, xs[i], y, 1.85 if n == 4 else 2.5, .95, t, c, 7.6)
        if i: arr(ax, (xs[i - 1] + (1.27 if n == 3 else .95), y), (xs[i] - (1.27 if n == 3 else .95), y))
save(fig, 'teorias-emocion.png')

# 10. Modelo circunflejo (Russell, 1980): posiciones aproximadas, solo ilustrativas
fig, ax = plt.subplots(figsize=(5.6, 5.0)); ax.set_xlim(-1.35, 1.35); ax.set_ylim(-1.3, 1.3); ax.set_aspect('equal'); ax.axis('off')
ax.add_patch(plt.Circle((0, 0), 1, fill=False, color=MUTE, lw=1.2))
ax.annotate('', (1.25, 0), (-1.25, 0), arrowprops=dict(arrowstyle='<|-|>', color=INK, lw=1.2)); ax.annotate('', (0, 1.22), (0, -1.22), arrowprops=dict(arrowstyle='<|-|>', color=INK, lw=1.2))
ax.text(1.27, .06, 'Agradable', ha='right', va='bottom', fontsize=9, weight='bold', color=G); ax.text(-.25, .06, 'Desagradable', ha='right', va='bottom', fontsize=9, weight='bold', color=A)
ax.text(.06, 1.2, 'Alta activación', fontsize=9, weight='bold', color=P); ax.text(.06, -1.25, 'Baja activación', fontsize=9, weight='bold', color=P)
for ang, w in [(80, 'alerta'), (60, 'excitación'), (35, 'entusiasmo'), (12, 'alegría'), (-20, 'satisfacción'), (-45, 'serenidad'), (-65, 'relajación'), (-95, 'somnolencia'),
               (-130, 'aburrimiento'), (-155, 'tristeza'), (-172, 'desdicha'), (150, 'malestar'), (125, 'ira'), (108, 'miedo'), (97, 'tensión')]:
    a = np.radians(ang); x_, y_ = np.cos(a), np.sin(a); ax.plot(x_, y_, 'o', ms=5, color=G if x_ > .05 else A if x_ < -.05 else P)
    ax.text(x_ * 1.07, y_ * 1.07, w, ha='left' if x_ > .05 else 'right' if x_ < -.05 else 'center', va='center', fontsize=8.4, color=INK)
save(fig, 'circunflejo.png')

# 11. Rueda de Plutchik (8 emociones primarias, 3 intensidades)
prim = [('alegría', 'éxtasis', 'serenidad', '#F2C14E'), ('confianza', 'admiración', 'aceptación', '#8DC56C'), ('miedo', 'terror', 'temor', '#3E9B5F'), ('sorpresa', 'asombro', 'distracción', '#4FA7C9'),
        ('tristeza', 'pena', 'melancolía', '#4F72B8'), ('asco', 'aversión', 'aburrimiento', '#8E6BB8'), ('ira', 'furia', 'enfado', '#D9534F'), ('anticipación', 'vigilancia', 'interés', '#EE9A4D')]
fig, ax = plt.subplots(figsize=(5.8, 5.8)); ax.set_xlim(-1.15, 1.15); ax.set_ylim(-1.15, 1.15); ax.set_aspect('equal'); ax.axis('off')
for i, (m, hi, lo, c) in enumerate(prim):
    th = 90 - i * 45; a0, a1 = th - 21, th + 21
    for r0, r1, alpha, word in [(0.05, .38, 1, hi), (.38, .7, .7, m), (.7, 1.0, .38, lo)]:
        ax.add_patch(Wedge((0, 0), r1, a0, a1, width=r1 - r0, fc=c, alpha=alpha, ec='white', lw=1.5))
        rm = (r0 + r1) / 2 + (.02 if r0 > .1 else .03); a = np.radians(th)
        ax.text(rm * np.cos(a), rm * np.sin(a), word, ha='center', va='center', fontsize=7.0 if r0 < .1 else 8.0, rotation=0,
                color='white' if alpha > .6 else INK, weight='bold' if r0 == .38 else 'normal')
ax.text(0, -1.12, 'Las emociones opuestas ocupan posiciones enfrentadas', ha='center', fontsize=8.4, color=MUTE, style='italic')
save(fig, 'plutchik.png')

# 12. Modelo procesual de regulación emocional (Gross)
fig, ax = plt.subplots(figsize=(7.6, 3.3)); ax.set_xlim(0, 12.4); ax.set_ylim(0, 5); ax.axis('off')
st_ = ['Situación', 'Atención', 'Valoración', 'Respuesta']; xs = [1.4, 4.6, 7.8, 11.0]
for x_, t_ in zip(xs, st_): box(ax, x_, 3.9, 2.1, .8, t_, P, 9.2)
for i in range(3): arr(ax, (xs[i] + 1.1, 3.9), (xs[i + 1] - 1.1, 3.9))
strat = [(0.7, '1. Selección\nde la situación'), (2.2, '2. Modificación\nde la situación'), (4.6, '3. Despliegue\natencional'), (7.8, '4. Cambio cognitivo\n(reevaluación)'), (11.0, '5. Modulación de la\nrespuesta (supresión)')]
for x_, t_ in strat:
    box(ax, x_, 1.6, 2.15 if x_ > 3 else 1.32, 1.05, t_, Y if x_ < 10 else A, 7.6 if x_ > 3 else 6.8); arr(ax, (x_, 2.15), (x_, 3.45), MUTE, lw=1.1)
ax.plot([.1, 9.3], [.55, .55], color=Y, lw=3); ax.text(4.7, .18, 'Centradas en los antecedentes (antes de la respuesta)', ha='center', fontsize=8.2, color='#9A6E05')
ax.plot([9.8, 12.2], [.55, .55], color=A, lw=3); ax.text(11.0, .18, 'Centrada en la respuesta', ha='center', fontsize=8.2, color=A)
save(fig, 'gross.png')

# 13. Eje hipotálamo-hipófisis-suprarrenal
fig, ax = plt.subplots(figsize=(5.8, 4.0)); ax.set_xlim(0, 8); ax.set_ylim(0, 6); ax.axis('off')
box(ax, 3, 5.4, 3.0, .7, 'Estresor', MUTE, 9); box(ax, 3, 4.2, 3.0, .75, 'Hipotálamo', P, 9); box(ax, 3, 2.85, 3.0, .75, 'Hipófisis anterior', '#3F6FA8', 9); box(ax, 3, 1.5, 3.0, .75, 'Corteza suprarrenal', G, 9)
arr(ax, (3, 5.05), (3, 4.6)); arr(ax, (3, 3.82), (3, 3.25)); arr(ax, (3, 2.47), (3, 1.9))
ax.text(3.15, 3.5, 'CRH', fontsize=9, weight='bold', color=P); ax.text(3.15, 2.15, 'ACTH', fontsize=9, weight='bold', color='#3F6FA8')
arr(ax, (3, 1.12), (3, .45)); ax.text(3, .2, 'CORTISOL → glucosa, energía, inmunidad', ha='center', fontsize=8.6, weight='bold', color=A)
ax.plot([5.3, 6.0, 6.0], [.2, .2, 4.2], color=A, ls='--', lw=1.4); arr(ax, (6.0, 4.2), (4.55, 4.2), A, ls='--'); ax.text(6.15, 2.3, 'retroalimentación\nnegativa', ha='left', fontsize=8.4, color=A); ax.set_xlim(0, 8.6)
save(fig, 'eje-hha.png')

# 14. Síndrome general de adaptación (Selye)
t_ = np.linspace(0, 10, 500); np.seterr(invalid='ignore'); r = np.where(t_ < 1, 1 - .35 * np.sin(np.pi * t_), 0)
r = np.where((t_ >= 1) & (t_ < 2.2), 1 + .8 * np.sin((t_ - 1) / 1.2 * np.pi / 2), r)
r = np.where((t_ >= 2.2) & (t_ < 7), 1.8, r); r = np.where(t_ >= 7, 1.8 - 1.5 * ((t_ - 7) / 3) ** 1.3, r)
from scipy.ndimage import gaussian_filter1d
fig, ax = plt.subplots(figsize=(6.8, 2.7)); ax.plot(t_, gaussian_filter1d(r, 6), color=P, lw=2.4); ax.axhline(1, color=MUTE, ls=':', lw=1); ax.text(4.6, .88, 'nivel normal de resistencia', ha='center', va='top', fontsize=8, color=MUTE)
for x0, x1, t2, c in [(0, 2.2, 'Alarma', A), (2.2, 7, 'Resistencia', Y), (7, 10, 'Agotamiento', '#8A949B')]:
    ax.axvspan(x0, x1, color=c, alpha=.1); ax.text((x0 + x1) / 2, 2.15, t2, ha='center', fontsize=9, weight='bold', color=c if c != Y else '#9A6E05')
ax.set_ylim(0, 2.4); ax.set_xticks([]); ax.set_yticks([]); ax.set_xlabel('Tiempo de exposición al estresor'); ax.set_ylabel('Resistencia del organismo'); clean(ax)
save(fig, 'selye.png')

# ---------- imágenes de Commons ----------
def jpg(im, name, w=1400):
    im = im.convert('RGB'); im.thumbnail((w, w)); im.save(f'{OUT}/{name}', quality=86, optimize=True); print('ok', name, im.size)
jpg(Image.open(f'{SRC}/darwin-plate5.jpg'), 'darwin-lamina.jpg', 1100)
jpg(Image.open(f'{SRC}/duchenne.jpg'), 'duchenne.jpg', 900)
import shutil; shutil.copy(os.path.join(HERE, '..', '..', 'bases-biologicas', 'img', 'limbico.jpg'), f'{OUT}/limbico.jpg')
fnt = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30); fs = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 24)
por = [('darwin.jpg', 'Charles Darwin', '1809–1882', None), ('james.jpg', 'William James', '1842–1910', None), ('cannon.jpg', 'Walter B. Cannon', '1871–1945', None), ('maslow.jpg', 'Abraham Maslow', '1908–1970', 'maslow')]
cw, ch = 420, 520; can = Image.new('RGB', (cw * 4 + 30 * 3, ch + 90), 'white'); dr = ImageDraw.Draw(can)
for i, (f_, nm, yrs, crop) in enumerate(por):
    im = Image.open(f'{SRC}/{f_}').convert('L').convert('RGB')
    if crop == 'maslow': W, H = im.size; im = im.crop((int(W * .02), 0, int(W * .62), int(H * .95)))
    r_ = max(cw / im.size[0], ch / im.size[1]); im = im.resize((int(im.size[0] * r_) + 1, int(im.size[1] * r_) + 1))
    l = (im.size[0] - cw) // 2; im = im.crop((l, 0, l + cw, ch)); x0 = i * (cw + 30); can.paste(im, (x0, 0))
    tw = dr.textlength(nm, font=fnt); dr.text((x0 + (cw - tw) / 2, ch + 12), nm, font=fnt, fill=INK)
    tw = dr.textlength(yrs, font=fs); dr.text((x0 + (cw - tw) / 2, ch + 52), yrs, font=fs, fill=MUTE)
jpg(can, 'pioneros.jpg', 1600)
