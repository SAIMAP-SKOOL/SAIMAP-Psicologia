"""Figuras propias del temario de Psicología de la Memoria. python3 tools/figuras.py → img/*"""
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


def note(ax, t='Esquema ilustrativo, no datos', y=-.24):
    ax.text(0, y, t, transform=ax.transAxes, fontsize=7.4, color=MUTE)


# U1 · procesos
if want('procesos'):
    fig, ax = canvas(7.4, 2.5, 12, 4)
    for i, (t, d, c) in enumerate([('Codificación', 'la información se\ntransforma en huella', P), ('Almacenamiento', 'la huella se\nmantiene en el tiempo', G), ('Recuperación', 'la huella se usa\nen el momento preciso', Y)]):
        x = 2 + i * 4; box(ax, x, 2.6, 3.2, .9, t, c, 10, tc='white' if c != Y else INK); ax.text(x, 1.85, d, ha='center', va='top', fontsize=8.4, color=INK)
        if i < 2: arr(ax, (x + 1.65, 2.6), (x + 2.35, 2.6))
    ax.text(6, .25, 'El olvido puede deberse a un fallo en cualquiera de los tres pasos', ha='center', fontsize=8.2, color=A, style='italic')
    save(fig, 'procesos.png')

# U1 · fuentes de datos
if want('fuentes'):
    fig, ax = plt.subplots(figsize=(5.8, 3.9))
    for x, y, t, c in [(8.6, 2.2, 'Experimental\nde laboratorio', P), (6.4, 4.6, 'Neuroimagen', V), (4.6, 6.6, 'Neuropsicológica\n(pacientes)', A), (2.0, 8.4, 'Estudios de\ndiario', G)]:
        box(ax, x, y, 2.9, 1.1, t, c, 8.6)
    ax.set_xlim(0, 10.5); ax.set_ylim(0, 10); ax.set_xticks([]); ax.set_yticks([])
    ax.set_xlabel('Control experimental →'); ax.set_ylabel('Validez ecológica →'); clean(ax)
    note(ax, 'Esquema orientativo', -.1)
    save(fig, 'fuentes.png')

# U2 · Ebbinghaus
if want('ebbinghaus'):
    h = np.array([20 / 60, 1, 9, 24, 48, 144, 744]); v = [58, 44, 36, 34, 28, 25, 21]
    lab = ['20 min', '1 h', '9 h', '1 día', '2 días', '6 días', '31 días']
    fig, ax = plt.subplots(figsize=(6.4, 3.0))
    xs = np.log10(h); ax.plot(xs, v, '-o', color=A, lw=2.4, ms=6)
    for x, y in zip(xs, v): ax.text(x, y + 3.5, f'{y} %', ha='center', fontsize=8.6, color=INK, weight='bold')
    ax.set_xticks(xs); ax.set_xticklabels(lab, fontsize=8.4); ax.set_ylim(0, 72); ax.set_ylabel('Ahorro (%)'); ax.set_xlabel('Tiempo desde el aprendizaje (escala logarítmica)'); clean(ax)
    note(ax, 'Valores aproximados de Ebbinghaus (1885)', -.3)
    save(fig, 'ebbinghaus.png')

# U2 · hitos
if want('hitos'):
    ev = [(1885, 'Ebbinghaus', 'curva del olvido'), (1932, 'Bartlett', 'memoria\nreconstructiva'), (1956, 'Miller', '7 ± 2'), (1967, 'Neisser', 'Psicología\ncognitiva'),
          (1968, 'Atkinson y\nShiffrin', 'modelo modal'), (1972, 'Craik y Lockhart;\nTulving', 'niveles; episódica\ny semántica'), (1974, 'Baddeley y Hitch;\nLoftus y Palmer', 'memoria de trabajo;\ndesinformación')]
    fig, ax = canvas(7.8, 3.0, 13, 5)
    xs = [.8, 2.6, 4.6, 6.4, 8.1, 9.9, 11.9]
    ax.plot([.3, 12.7], [2.5, 2.5], color=MUTE, lw=2)
    for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
        up = i % 2 == 0; c = [P, G, Y, V, A, T, '#8A6A50'][i]
        ax.plot([x], [2.5], 'o', color=c, ms=9); ax.text(x, 2.05 if up else 2.85, str(yr), ha='center', va='top' if up else 'bottom', fontsize=8.6, color=c, weight='bold')
        ax.text(x, 3.15 if up else 1.85, a, ha='center', va='bottom' if up else 'top', fontsize=8.0, color=INK, weight='bold')
        ax.text(x, 4.25 if up else .75, d, ha='center', va='bottom' if up else 'top', fontsize=7.6, color=MUTE)
    save(fig, 'hitos.png')

# U3 · Atkinson y Shiffrin
if want('atkinson-shiffrin'):
    fig, ax = canvas(7.8, 2.9, 13, 4.6)
    ax.text(.55, 2.6, 'Estímulo', ha='center', va='center', fontsize=8.8, color=INK, weight='bold')
    box(ax, 3.0, 2.6, 2.9, 1.1, 'Registros\nsensoriales', Y, 9, tc=INK); box(ax, 6.8, 2.6, 2.9, 1.1, 'Almacén a\ncorto plazo', P, 9); box(ax, 11.3, 2.6, 2.9, 1.1, 'Almacén a\nlargo plazo', G, 9)
    arr(ax, (1.1, 2.6), (1.5, 2.6)); arr(ax, (4.5, 2.6), (5.3, 2.6)); arr(ax, (8.3, 2.85), (9.8, 2.85)); arr(ax, (9.8, 2.35), (8.3, 2.35), MUTE)
    ax.text(9.05, 3.05, 'transferencia', ha='center', fontsize=7.6, color=INK); ax.text(9.05, 1.98, 'recuperación', ha='center', fontsize=7.6, color=MUTE)
    ax.add_patch(FancyArrowPatch((6.3, 3.2), (7.3, 3.2), connectionstyle='arc3,rad=-1.4', arrowstyle='-|>', mutation_scale=11, color=P, lw=1.3)); ax.text(6.8, 4.25, 'repaso', ha='center', fontsize=8, color=P, weight='bold')
    for x, t in [(3.0, 'decaimiento\nen < 1 s'), (6.8, 'desplazamiento\no decaimiento'), (11.3, 'interferencia,\nfallo de recuperación')]:
        arr(ax, (x, 2.0), (x, 1.15), A, ls='--'); ax.text(x, 1.0, t, ha='center', va='top', fontsize=7.6, color=A)
    save(fig, 'atkinson-shiffrin.png')

# U3 · niveles de procesamiento
if want('niveles'):
    fig, ax = canvas(6.6, 3.2, 11, 5.2)
    lv = [('Estructural', '«¿Está escrita\nen mayúsculas?»', '#C9D4DC', 3.6), ('Fonológico', '«¿Rima con\n“tren”?»', '#8FB2CC', 2.5), ('Semántico', '«¿Encaja en: “Se\nsentó en un ___”?»', P, 1.4)]
    for i, (t, q, c, y) in enumerate(lv):
        w = 4.4 - i * .7; box(ax, 3.0, y + .6, w, .9, t, c, 9.2, tc=INK if i < 2 else 'white'); ax.text(6.1, y + .6, q, va='center', fontsize=8.2, color=INK)
    ax.annotate('', (1.0, 1.4), (1.0, 4.9), arrowprops=dict(arrowstyle='-|>', color=A, lw=2)); ax.text(.55, 3.1, 'más\nprofundidad\n=\nmás\nretención', ha='center', va='center', fontsize=7.6, color=A, weight='bold')
    save(fig, 'niveles.png')

# U4 · Sperling
if want('sperling'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.8, 3.0), gridspec_kw={'width_ratios': [1, 1.25]})
    a1.set_xlim(0, 5); a1.set_ylim(0, 4.6); a1.axis('off')
    a1.add_patch(FancyBboxPatch((.3, .5), 3.6, 3.4, boxstyle='round,pad=0.02,rounding_size=0.1', fc='#26323A'))
    rows = ['K Z R A', 'Q B T P', 'S G N F']
    for i, r in enumerate(rows): a1.text(2.1, 3.25 - i * 1.05, r, ha='center', va='center', fontsize=15, color='white', family='DejaVu Sans Mono', weight='bold')
    for i, t in enumerate(['agudo', 'medio', 'grave']): a1.text(4.05, 3.25 - i * 1.05, '♪ ' + t, va='center', fontsize=8, color=INK)
    a1.text(2.1, .15, '50 ms', ha='center', fontsize=8.4, color=MUTE)
    d = np.array([0, .15, .3, .5, 1.0]); disp = np.array([9.1, 8.2, 6.9, 5.6, 4.6])
    a2.plot(d, disp, '-o', color=A, lw=2.2, label='informe parcial (letras disponibles)')
    a2.axhline(4.5, color=P, ls='--', lw=1.8, label='informe total')
    a2.set_xlabel('Demora del tono (s)'); a2.set_ylabel('Letras disponibles'); a2.set_ylim(0, 12); a2.set_xticks([0, .25, .5, .75, 1]); a2.set_xticklabels(['0', '0,25', '0,5', '0,75', '1'])
    a2.legend(frameon=False, fontsize=7.8, loc='upper right'); clean(a2); note(a2, 'Valores aproximados', -.3)
    save(fig, 'sperling.png')

# U4 · posición serial
if want('posicion-serial'):
    x = np.arange(1, 16)
    inm = 30 + 38 * np.exp(-(x - 1) / 1.6) + 48 * np.exp(-(15 - x) / 1.5)
    dem = 30 + 38 * np.exp(-(x - 1) / 1.6) + 2 * np.exp(-(15 - x) / 1.5)
    fig, ax = plt.subplots(figsize=(6.2, 2.9))
    ax.plot(x, inm, '-', color=P, lw=2.4, label='recuerdo inmediato'); ax.plot(x, dem, '--', color=A, lw=2.2, label='tras 30 s de distracción')
    ax.text(1.2, 74, 'primacía', fontsize=8.4, color=INK, weight='bold'); ax.text(12.4, 84, 'recencia', fontsize=8.4, color=INK, weight='bold')
    ax.set_xlabel('Posición en la lista'); ax.set_ylabel('% de recuerdo'); ax.set_ylim(0, 100); ax.set_xticks([1, 5, 10, 15]); ax.legend(frameon=False, fontsize=8, loc='upper center'); clean(ax); note(ax)
    save(fig, 'posicion-serial.png')

# U5 · Baddeley
if want('baddeley'):
    fig, ax = canvas(7.6, 3.9, 12, 6.2)
    box(ax, 6, 5.3, 4.2, .95, 'Ejecutivo central', A, 10.5)
    box(ax, 2.2, 3.4, 3.3, 1.05, 'Bucle\nfonológico', P, 9.5); box(ax, 6, 3.4, 3.0, 1.05, 'Retén\nepisódico', V, 9.5); box(ax, 9.8, 3.4, 3.3, 1.05, 'Agenda\nvisoespacial', G, 9.5)
    for x in (2.2, 6, 9.8): arr(ax, (6 + (x - 6) * .35, 4.8), (x, 3.95), INK); arr(ax, (x, 2.85), (x, 1.75), MUTE); arr(ax, (x + .25, 1.75), (x + .25, 2.85), MUTE)
    ax.add_patch(FancyBboxPatch((.4, .4), 11.2, 1.3, boxstyle='round,pad=0.02,rounding_size=0.15', fc=SOFT, ec=MUTE, ls='--'))
    for x, t in [(2.2, 'Lenguaje'), (6, 'Memoria episódica\na largo plazo'), (9.8, 'Semántica visual')]: ax.text(x, 1.05, t, ha='center', va='center', fontsize=8.4, color=INK)
    ax.text(11.5, .55, 'sistemas «cristalizados» (MLP)', ha='right', fontsize=7.4, color=MUTE, style='italic')
    save(fig, 'baddeley.png')

# U5 · longitud de palabra
if want('longitud-palabra'):
    fig, ax = plt.subplots(figsize=(5.6, 2.9)); w = .34; xs = np.array([0, 1])
    ax.bar(xs - w / 2, [5.6, 4.3], w, color=P, label='palabras cortas'); ax.bar(xs + w / 2, [3.8, 3.6], w, color=Y, label='palabras largas')
    ax.set_xticks(xs); ax.set_xticklabels(['Sin supresión', 'Con supresión articulatoria']); ax.set_ylabel('Amplitud (palabras)'); ax.set_yticks([]); ax.legend(frameon=False, fontsize=8.2); clean(ax); note(ax)
    save(fig, 'longitud-palabra.png')

# U6 · Squire
if want('squire'):
    fig, ax = canvas(7.8, 3.9, 13, 6.4)
    box(ax, 6.5, 5.7, 4.2, .8, 'Memoria a largo plazo', INK, 10)
    box(ax, 3.0, 4.2, 3.6, .8, 'Declarativa (explícita)', P, 9.4); box(ax, 9.6, 4.2, 4.0, .8, 'No declarativa (implícita)', G, 9.4)
    arr(ax, (5.6, 5.3), (3.6, 4.6)); arr(ax, (7.4, 5.3), (9.0, 4.6))
    for x, t, s in [(1.8, 'Episódica\n(sucesos)', 'lóbulo temporal\nmedial, diencéfalo'), (4.3, 'Semántica\n(hechos)', '')]:
        box(ax, x, 2.6, 2.2, .95, t, '#8FB2CC', 8.6, tc=INK); arr(ax, (3.0, 3.8), (x, 3.1), MUTE)
    ax.text(3.0, 1.55, 'lóbulo temporal medial\ny diencéfalo', ha='center', va='top', fontsize=7.6, color=MUTE)
    nd = [(7.0, 'Procedimental', 'estriado'), (8.85, 'Priming', 'neocorteza'), (10.7, 'Condicionamiento\nclásico simple', 'amígdala\ny cerebelo'), (12.5, 'No\nasociativo', 'vías\nreflejas')]
    for x, t, s in nd:
        box(ax, x, 2.6, 1.75, .95, t, '#A9D3B6', 7.6, tc=INK); arr(ax, (9.6, 3.8), (x, 3.1), MUTE); ax.text(x, 1.95, s, ha='center', va='top', fontsize=7.4, color=MUTE)
    ax.set_xlim(0, 13.6)
    save(fig, 'squire.png')

# U7 · pico de reminiscencia
if want('reminiscencia'):
    a = np.linspace(0, 70, 400)
    y = .02 + .5 * np.exp(-((a - 20) / 7) ** 2) + .9 * np.exp(-(70 - a) / 4) + .08
    y[a < 4] = np.linspace(0, .1, (a < 4).sum())
    fig, ax = plt.subplots(figsize=(6.4, 2.9)); ax.fill_between(a, y, color=P, alpha=.18); ax.plot(a, y, color=P, lw=2.3)
    ax.annotate('amnesia\ninfantil', (2, .05), (5, .55), fontsize=8.2, color=INK, arrowprops=dict(arrowstyle='->', color=MUTE))
    ax.text(20, .66, 'pico de reminiscencia\n(10–30 años)', ha='center', fontsize=8.2, color=INK, weight='bold'); ax.text(63, .9, 'recencia', fontsize=8.2, color=INK, weight='bold')
    ax.set_xlabel('Edad a la que ocurrió el suceso (persona de 70 años)'); ax.set_ylabel('Recuerdos'); ax.set_yticks([]); ax.set_ylim(0, 1.1); clean(ax); note(ax, y=-.3)
    save(fig, 'reminiscencia.png')

# U7 · recuerdos flash
if want('flash'):
    t = np.array([1, 7, 42, 224])
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.2, 2.8), sharey=True)
    a1.plot(t, [10, 8.2, 7.4, 7.0], '-o', color=A, lw=2.2, label='recuerdo flash'); a1.plot(t, [10, 8.0, 7.2, 6.8], '-o', color=MUTE, lw=2.2, label='recuerdo cotidiano'); a1.set_title('Consistencia')
    a2.plot(t, [10, 9.8, 9.7, 9.6], '-o', color=A, lw=2.2); a2.plot(t, [10, 8.4, 7.6, 7.0], '-o', color=MUTE, lw=2.2); a2.set_title('Confianza')
    for ax in (a1, a2): ax.set_xscale('log'); ax.set_xticks(t); ax.set_xticklabels(['1', '7', '42', '224']); ax.set_xlabel('Días desde el suceso'); ax.set_yticks([]); clean(ax)
    a1.legend(frameon=False, fontsize=7.8, loc='lower left'); note(a1, 'Esquema basado en Talarico y Rubin (2003)', -.32)
    save(fig, 'flash.png')

# U8 · estrategias de estudio
if want('estrategias'):
    fig, ax = canvas(6.8, 3.0, 11, 4.8)
    box(ax, 2.9, 4.1, 5.0, .75, 'Utilidad ALTA', G, 10); box(ax, 8.2, 4.1, 5.0, .75, 'Utilidad BAJA', A, 10)
    for i, t in enumerate(['Práctica de recuperación\n(autoexámenes, tarjetas)', 'Práctica distribuida\n(sesiones espaciadas)']): box(ax, 2.9, 2.95 - i * 1.25, 4.6, 1.0, t, '#FFFFFF', 8.6, tc=INK, bold=False, ec=G)
    for i, t in enumerate(['Releer', 'Subrayar', 'Resumir', 'Palabra clave (en general)']): box(ax, 8.2, 3.2 - i * .78, 4.6, .62, t, '#FFFFFF', 8.4, tc=INK, bold=False, ec=A)
    note(ax, 'Según Dunlosky et al. (2013)', -.02)
    save(fig, 'estrategias.png')

# U9 · prototipos
if want('prototipos'):
    fig, ax = canvas(5.6, 4.0, 10, 7.2)
    for r, c in [(3.2, '#EEF3F8'), (2.2, '#DCE7F0'), (1.1, '#C6D7E6')]: ax.add_patch(Circle((5, 3.6), r, fc=c, ec='none'))
    ax.text(5, 3.6, 'PROTOTIPO\nde «pájaro»', ha='center', va='center', fontsize=8.6, color=P, weight='bold')
    for (x, y, t) in [(5.9, 4.9, 'gorrión'), (3.7, 4.5, 'petirrojo'), (6.8, 2.8, 'paloma'), (3.0, 2.2, 'gallina'), (7.6, 5.6, 'avestruz'), (2.2, 5.9, 'pingüino')]:
        ax.plot([x], [y], 'o', color=A, ms=6); ax.text(x + .2, y + .15, t, fontsize=8.4, color=INK)
    ax.text(5, .1, 'más cerca del centro = más típico, más rápido de verificar', ha='center', fontsize=8, color=MUTE, style='italic')
    save(fig, 'prototipos.png')

# U9 · nivel básico
if want('nivel-basico'):
    fig, ax = canvas(6.4, 3.0, 11, 5)
    box(ax, 5.5, 4.2, 2.6, .8, 'Animal', '#C9D4DC', 9.6, tc=INK); box(ax, 5.5, 2.6, 2.6, .9, 'Perro', A, 11)
    for x, t in [(2.6, 'Caniche'), (5.5, 'Pastor alemán'), (8.4, 'Galgo')]: box(ax, x, 1.0, 2.4, .75, t, '#C9D4DC', 9, tc=INK); arr(ax, (5.5, 2.15), (x, 1.4), MUTE)
    arr(ax, (5.5, 3.8), (5.5, 3.05), MUTE)
    for y, t in [(4.2, 'superordinado'), (2.6, 'BÁSICO: el que se\naprende y nombra antes'), (1.0, 'subordinado')]: ax.text(10.9, y, t, ha='right', va='center', fontsize=8, color=INK if 'B' in t else MUTE, weight='bold' if 'B' in t else 'normal')
    ax.set_xlim(0, 11.2)
    save(fig, 'nivel-basico.png')

# U10 · Collins y Quillian
if want('collins-quillian'):
    fig, ax = canvas(7.8, 3.8, 13, 6.2)
    def node(x, y, t, props, c):
        box(ax, x, y, 2.3, .75, t, c, 9.4); ax.text(x, y - .5, props, ha='center', va='top', fontsize=7.4, color=INK)
    node(6.5, 5.5, 'Animal', 'come, respira, tiene piel', P)
    node(3.4, 3.6, 'Pájaro', 'tiene alas, vuela,\ntiene plumas', G); node(9.6, 3.6, 'Pez', 'tiene aletas, nada,\ntiene branquias', T)
    for x, t, p in [(1.6, 'Canario', 'canta, es amarillo'), (4.9, 'Avestruz', 'es alto, no vuela'), (8.1, 'Tiburón', 'muerde, es peligroso'), (11.3, 'Salmón', 'es rosa, se come')]:
        node(x, 1.4, t, p, '#8A949B')
    for a, b in [((6.5, 5.1), (3.4, 4.0)), ((6.5, 5.1), (9.6, 4.0)), ((3.4, 2.75), (1.6, 1.8)), ((3.4, 2.75), (4.9, 1.8)), ((9.6, 2.75), (8.1, 1.8)), ((9.6, 2.75), (11.3, 1.8))]: arr(ax, a, b, MUTE)
    save(fig, 'collins-quillian.png')

# U10 · Collins y Loftus
if want('collins-loftus'):
    fig, ax = canvas(6.4, 4.0, 10, 6.4)
    nodes = {'camión de\nbomberos': (5, 3.4), 'rojo': (2.6, 4.7), 'fuego': (7.3, 5.1), 'coche': (3.0, 1.9), 'ambulancia': (6.9, 1.6), 'manzana': (.9, 5.9), 'cereza': (1.2, 3.2), 'calle': (1.4, .6), 'casa': (9.0, 4.0)}
    edges = [('camión de\nbomberos', 'rojo'), ('camión de\nbomberos', 'fuego'), ('camión de\nbomberos', 'coche'), ('camión de\nbomberos', 'ambulancia'), ('rojo', 'manzana'), ('rojo', 'cereza'), ('coche', 'calle'), ('fuego', 'casa'), ('rojo', 'fuego'), ('coche', 'ambulancia')]
    for a, b in edges: ax.plot(*zip(nodes[a], nodes[b]), color=MUTE, lw=1.4)
    for t, (x, y) in nodes.items():
        c = A if t.startswith('camión') else '#FFFFFF'; box(ax, x, y, 1.9 if t.startswith('camión') else 1.5, .7, t, c, 8.2, tc='white' if c == A else INK, ec=P)
    ax.text(5, .05, 'enlaces más cortos = conceptos más relacionados', ha='center', fontsize=8, color=MUTE, style='italic')
    save(fig, 'collins-loftus.png')

# U11 · doble proceso
if want('doble-proceso'):
    fig, ax = canvas(6.8, 3.0, 11, 4.8)
    for x, t, d, c in [(2.8, 'Familiaridad', '«Me suena»\nrápida, sin detalles\ncorteza perirrinal\n(simplificación)', Y), (8.2, 'Recolección', '«Recuerdo dónde y cuándo»\nmás lenta, con contexto\nhipocampo\n(simplificación)', P)]:
        box(ax, x, 4.0, 4.4, .8, t, c, 10, tc=INK if c == Y else 'white'); ax.text(x, 3.3, d, ha='center', va='top', fontsize=8.4, color=INK)
    ax.text(5.5, .35, 'En el procedimiento recordar/saber: «saber» ≈ familiaridad; «recordar» ≈ recolección', ha='center', fontsize=7.8, color=MUTE, style='italic')
    save(fig, 'doble-proceso.png')

# U12 · Godden y Baddeley (diseño)
if want('godden-baddeley'):
    fig, ax = canvas(5.8, 3.6, 10, 6.2)
    ax.text(6.1, 5.75, 'Recuerdo', ha='center', fontsize=9.5, color=INK, weight='bold')
    for x, t in [(4.4, 'en tierra'), (7.8, 'bajo el agua')]: ax.text(x, 5.15, t, ha='center', fontsize=9, color=INK)
    ax.text(.4, 2.75, 'Aprendizaje', rotation=90, va='center', fontsize=9.5, color=INK, weight='bold')
    for y, t in [(3.9, 'en tierra'), (1.6, 'bajo el agua')]: ax.text(1.3, y, t, va='center', fontsize=9, color=INK)
    for (x, y, m) in [(4.4, 3.9, 1), (7.8, 3.9, 0), (4.4, 1.6, 0), (7.8, 1.6, 1)]:
        box(ax, x, y, 3.0, 1.9, 'mismo contexto' if m else 'contexto distinto', G if m else '#C9D4DC', 9, tc='white' if m else INK)
    save(fig, 'godden-baddeley.png')

# U12 · ánimo
if want('animo'):
    fig, ax = canvas(7.4, 3.2, 12, 5.2)
    ax.text(3, 4.8, 'Dependencia del estado de ánimo', ha='center', fontsize=9.4, color=P, weight='bold'); ax.text(9, 4.8, 'Congruencia con el estado de ánimo', ha='center', fontsize=9.4, color=A, weight='bold')
    box(ax, 1.6, 3.4, 2.2, .8, 'aprende\ncon ánimo X', P, 8.4); box(ax, 4.4, 3.4, 2.2, .8, 'recupera\ncon ánimo X', P, 8.4); arr(ax, (2.75, 3.4), (3.25, 3.4))
    ax.text(3, 2.4, 'mejor recuerdo cuando coincide\nel estado al aprender y al recordar\n(sea cual sea el material)', ha='center', va='top', fontsize=8.2, color=INK)
    box(ax, 7.6, 3.4, 2.2, .8, 'ánimo triste\nahora', A, 8.4); box(ax, 10.4, 3.4, 2.2, .8, 'recuerda más\nsucesos tristes', A, 8.4); arr(ax, (8.75, 3.4), (9.25, 3.4))
    ax.text(9, 2.4, 'se recupera mejor el material\ncuya valencia coincide\ncon el ánimo actual', ha='center', va='top', fontsize=8.2, color=INK)
    ax.plot([6, 6], [.4, 5.0], color=MUTE, ls=':', lw=1)
    save(fig, 'animo.png')

# U13 · testigos
if want('testigos'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.2, 2.9))
    c = np.array([1, 2, 3]); a1.bar(c, [.45, .7, .95], color=[MUTE, Y, G], width=.6); a1.set_xticks(c); a1.set_xticklabels(['baja', 'media', 'alta'])
    a1.set_title('Confianza inicial\n(procedimiento prístino)'); a1.set_ylabel('Exactitud'); a1.set_yticks([]); a1.set_ylim(0, 1.1)
    t = ['rueda', 'semanas\ndespués', 'juicio']; a2.plot(t, [.55, .8, .97], '-o', color=A, lw=2.2, label='confianza'); a2.plot(t, [.55, .55, .55], '-o', color=P, lw=2.2, label='exactitud')
    a2.set_title('Lo que ocurre después'); a2.set_yticks([]); a2.set_ylim(0, 1.1); a2.legend(frameon=False, fontsize=8, loc='lower right')
    for ax in (a1, a2): clean(ax)
    note(a1, 'Esquema basado en Wixted y Wells (2017)', -.3)
    save(fig, 'testigos.png')

# U14 · interferencia
if want('interferencia'):
    fig, ax = canvas(7.8, 3.3, 13, 5.4)
    def row(y, label, cells, col):
        ax.text(.2, y, label, va='center', fontsize=8.8, color=INK, weight='bold')
        for i, (t, hl) in enumerate(cells): box(ax, 3.8 + i * 3.0, y, 2.6, .7, t, col if hl else '#FFFFFF', 8.4, tc='white' if hl else INK, ec=col)
    ax.text(3.8, 5.05, 'Fase 1', ha='center', fontsize=8.6, color=MUTE); ax.text(6.8, 5.05, 'Fase 2', ha='center', fontsize=8.6, color=MUTE); ax.text(9.8, 5.05, 'Prueba', ha='center', fontsize=8.6, color=MUTE)
    ax.text(.2, 4.55, 'PROACTIVA', fontsize=9, color=A, weight='bold'); row(3.95, 'Experimental', [('aprende A-B', 1), ('aprende A-C', 0), ('recuerda A-C', 0)], A); row(3.1, 'Control', [('descansa', 0), ('aprende A-C', 0), ('recuerda A-C', 0)], A)
    ax.text(.2, 2.25, 'RETROACTIVA', fontsize=9, color=P, weight='bold'); row(1.65, 'Experimental', [('aprende A-B', 0), ('aprende A-C', 1), ('recuerda A-B', 0)], P); row(.8, 'Control', [('aprende A-B', 0), ('descansa', 0), ('recuerda A-B', 0)], P)
    ax.text(12.9, 3.5, 'lo antiguo\nperjudica\nlo nuevo', ha='right', va='center', fontsize=8, color=A); ax.text(12.9, 1.2, 'lo nuevo\nperjudica\nlo antiguo', ha='right', va='center', fontsize=8, color=P)
    save(fig, 'interferencia.png')

# U14 · reconsolidación
if want('reconsolidacion'):
    fig, ax = canvas(7.8, 2.6, 13, 4.2)
    st = [('Aprendizaje', P), ('Consolidación', Y), ('Recuerdo\nestable', G), ('Reactivación', V), ('Recuerdo\nlábil', A), ('Reconsolidación\n(o modificación)', G)]
    for i, (t, c) in enumerate(st):
        x = 1.15 + i * 2.15; box(ax, x, 2.4, 1.95, 1.0, t, c, 8.2, tc=INK if c == Y else 'white')
        if i < 5: arr(ax, (x + 1.0, 2.4), (x + 1.15, 2.4))
    ax.text(9.75, 1.45, 'ventana en la que el recuerdo\npuede alterarse (en animales)', ha='center', va='top', fontsize=7.8, color=A)
    save(fig, 'reconsolidacion.png')

# U15 · olvido inducido por la recuperación
if want('rif'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 2.9), gridspec_kw={'width_ratios': [1.2, 1]})
    a1.set_xlim(0, 10); a1.set_ylim(0, 6); a1.axis('off')
    for i, (t, d, c) in enumerate([('1 · Estudio', 'FRUTA–naranja, FRUTA–plátano\nBEBIDA–vodka, BEBIDA–ron', P), ('2 · Práctica', 'FRUTA–na___ (solo algunos\nejemplares de algunas categorías)', Y), ('3 · Prueba', 'recuerdo de todos\nlos ejemplares', G)]):
        box(a1, 2.0, 5.0 - i * 1.9, 3.6, .8, t, c, 8.6, tc=INK if c == Y else 'white'); a1.text(4.1, 5.0 - i * 1.9, d, va='center', fontsize=7.4, color=INK)
    a2.bar(['Rp+', 'Nrp', 'Rp−'], [.9, .6, .48], color=[G, MUTE, A], width=.6); a2.set_ylabel('Recuerdo'); a2.set_yticks([]); a2.set_ylim(0, 1.05); clean(a2)
    note(a2, 'Esquema: Rp− por debajo de la línea base', -.2)
    save(fig, 'rif.png')

# U16 · DRM
if want('drm'):
    fig, ax = canvas(6.0, 3.0, 10, 5)
    ws = ['cama', 'descanso', 'despierto', 'cansado', 'noche', 'almohada', 'bostezo', 'siesta', 'roncar', 'pijama']
    for i, w in enumerate(ws): ax.text(1.2 + (i % 2) * 2.4, 4.3 - (i // 2) * .8, w, fontsize=9.4, color=INK)
    ax.text(2.4, 4.85, 'Lista estudiada', ha='center', fontsize=9.2, color=P, weight='bold')
    box(ax, 7.6, 2.8, 3.0, 1.2, '«dormir»', A, 13); ax.text(7.6, 1.85, 'señuelo crítico:\nnunca se presentó,\npero se «recuerda»', ha='center', va='top', fontsize=8.4, color=INK)
    arr(ax, (5.3, 2.8), (6.05, 2.8), A, ls='--')
    save(fig, 'drm.png')

# U16 · Loftus y Palmer
if want('loftus-palmer'):
    fig, ax = plt.subplots(figsize=(6.0, 2.9))
    lab = ['smashed\n(se estrellaron)', 'collided\n(colisionaron)', 'bumped\n(chocaron)', 'hit\n(golpearon)', 'contacted\n(contactaron)']; v = [40.8, 39.3, 38.1, 34.0, 31.8]
    b = ax.bar(lab, v, color=[A, '#D98A4E', Y, '#8FB2CC', P], width=.62)
    for r, val in zip(b, v): ax.text(r.get_x() + r.get_width() / 2, val + .8, f'{val:.1f}'.replace('.', ','), ha='center', fontsize=8.8, color=INK, weight='bold')
    ax.set_ylim(0, 48); ax.set_ylabel('Velocidad estimada (mph)'); ax.tick_params(axis='x', labelsize=7.8); clean(ax); note(ax, 'Valores aproximados de Loftus y Palmer (1974)', -.32)
    save(fig, 'loftus-palmer.png')

# U16 · siete pecados
if want('pecados'):
    fig, ax = canvas(7.4, 3.2, 12, 5.2)
    gr = [('Omisión (olvidar)', P, ['Transitoriedad', 'Distractibilidad', 'Bloqueo']), ('Comisión (distorsionar)', A, ['Atribución errónea', 'Sugestibilidad', 'Sesgo']), ('No poder olvidar', V, ['Persistencia'])]
    for i, (t, c, it) in enumerate(gr):
        x = 2.1 + i * 3.9; box(ax, x, 4.5, 3.5, .75, t, c, 9.2)
        for j, k in enumerate(it): box(ax, x, 3.4 - j * .9, 3.1, .7, k, '#FFFFFF', 8.8, tc=INK, bold=False, ec=c)
    save(fig, 'pecados.png')
