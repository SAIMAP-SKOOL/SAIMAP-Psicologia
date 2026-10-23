"""Figuras propias del temario de Psicología de la Interacción Social. python3 tools/figuras.py → img/*"""
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


# U1 · criterios para definir un grupo
if want('grupo-criterios'):
    fig, ax = canvas(7.4, 3.4, 12, 5.6)
    box(ax, 6, 4.9, 4.4, .8, 'GRUPO', P, 11)
    for x, t, d, c in [(2, 'Interacción', 'los miembros se\ninfluyen cara a cara\no a distancia', G), (6, 'Interdependencia', 'el destino y la tarea\nde cada uno dependen\nde los demás', Y), (10, 'Identidad compartida', 'se definen y son\ndefinidos como\nmiembros', V)]:
        box(ax, x, 3.35, 3.3, .75, t, c, 9.4); ax.text(x, 2.75, d, ha='center', va='top', fontsize=8.4, color=INK)
        arr(ax, (x, 3.75), (6 + (x - 6) * .35, 4.5), MUTE)
    ax.plot([.4, 11.6], [.95, .95], color=MUTE, lw=.8, ls=':')
    ax.text(3.2, .45, 'Agregado: personas en una parada de autobús', ha='center', fontsize=8.4, color=MUTE)
    ax.text(9.0, .45, 'Categoría social: «los zurdos», «los mayores de 65»', ha='center', fontsize=8.4, color=MUTE)
    ax.text(6, .02, 'No son grupos en sentido estricto: falta interacción, interdependencia o identidad compartida', ha='center', fontsize=7.8, color=MUTE, style='italic')
    save(fig, 'grupo-criterios.png')

# U2 · socialización grupal de Moreland y Levine
if want('moreland-levine'):
    fig, ax = plt.subplots(figsize=(7.8, 3.3))
    x = np.array([0, 1, 2, 3, 4, 5, 6]); y = np.array([.15, .45, .7, .88, .55, .3, .12])
    xs = np.linspace(0, 6, 300); ys = np.interp(xs, x, y)
    from numpy import convolve, ones
    ys = convolve(np.r_[np.full(20, ys[0]), ys, np.full(20, ys[-1])], ones(41) / 41, mode='valid')
    ax.plot(xs, ys, color=P, lw=2.6)
    trans = [(1, 'Entrada'), (2.6, 'Aceptación'), (4, 'Divergencia'), (5.4, 'Salida')]
    for xv, t in trans:
        ax.axvline(xv, color=A, ls='--', lw=1.1); ax.text(xv, 1.02, t, ha='center', fontsize=8.4, color=A, weight='bold')
    fases = [(.5, 'Investigación'), (1.8, 'Socialización'), (3.3, 'Mantenimiento'), (4.7, 'Resocialización'), (5.75, 'Recuerdo')]
    roles = [(.5, 'futuro\nmiembro'), (1.8, 'miembro\nnuevo'), (3.3, 'miembro\npleno'), (4.7, 'miembro\nmarginal'), (5.75, 'ex\nmiembro')]
    for (xv, t), (_, r) in zip(fases, roles):
        ax.text(xv, -.16, t, ha='center', fontsize=8.2, color=INK, weight='bold'); ax.text(xv, -.36, r, ha='center', va='top', fontsize=7.6, color=MUTE)
    ax.set_ylim(-.62, 1.1); ax.set_xlim(0, 6); ax.set_yticks([]); ax.set_xticks([]); ax.set_ylabel('Compromiso'); ax.set_xlabel('')
    for sp in ('top', 'right', 'bottom'): ax.spines[sp].set_visible(False)
    ax.axhline(0, color=MUTE, lw=.8); ax.text(6, .04, 'tiempo →', ha='right', fontsize=8, color=MUTE)
    save(fig, 'moreland-levine.png')

# U2 · Tuckman
if want('tuckman'):
    fig, ax = canvas(7.8, 2.4, 13, 3.6)
    fs = [('Formación', 'forming', 'orientación,\ndependencia', P), ('Conflicto', 'storming', 'resistencia,\ndesacuerdos', A), ('Normalización', 'norming', 'normas,\ncohesión', Y),
          ('Desempeño', 'performing', 'energía en\nla tarea', G), ('Disolución', 'adjourning', 'cierre y\ndespedida', MUTE)]
    for i, (t, e, d, c) in enumerate(fs):
        x = 1.35 + i * 2.58; box(ax, x, 2.45, 2.25, .9, f'{t}\n({e})', c, 8.6)
        ax.text(x, 1.7, d, ha='center', va='top', fontsize=8.2, color=INK)
        if i < 4: arr(ax, (x + 1.15, 2.45), (x + 1.43, 2.45))
    ax.text(1.35 + 2.58 * 1.5, 3.35, 'Tuckman (1965)', ha='center', fontsize=8.6, color=P, weight='bold')
    ax.plot([.25, 10.45], [3.15, 3.15], color=P, lw=1.2)
    ax.text(11.67, 3.35, 'Tuckman y Jensen (1977)', ha='center', fontsize=8.2, color=MUTE, weight='bold')
    ax.plot([10.7, 12.6], [3.15, 3.15], color=MUTE, lw=1.2)
    save(fig, 'tuckman.png')

# U2 · ciclo de Worchel
if want('worchel'):
    fig, ax = canvas(5.6, 5.0, 10, 9)
    fs = ['Descontento', 'Acontecimiento\nprecipitante', 'Identificación\ncon el grupo', 'Productividad\ngrupal', 'Individualización', 'Declive']
    cs = [MUTE, A, P, G, Y, '#B9867B']
    cx, cy, R = 5, 4.4, 3.2
    ang = [90 - i * 60 for i in range(6)]
    pts = [(cx + R * np.cos(np.radians(a)), cy + R * np.sin(np.radians(a))) for a in ang]
    for i, ((x, y), t) in enumerate(zip(pts, fs)):
        box(ax, x, y, 2.9, .95, t, cs[i], 8.6)
    for i in range(6):
        a0, a1 = np.radians(ang[i] - 13), np.radians(ang[i] - 47)
        arr(ax, (cx + R * .93 * np.cos(a0), cy + R * .93 * np.sin(a0)), (cx + R * .93 * np.cos(a1), cy + R * .93 * np.sin(a1)), INK, rad=-.25)
    ax.text(cx, cy, 'el ciclo\npuede repetirse', ha='center', va='center', fontsize=8.6, color=MUTE, style='italic')
    save(fig, 'worchel.png')

# U3 · Bales, IPA
if want('bales-ipa'):
    fig, ax = canvas(7.8, 4.1, 13, 6.4)
    ax.set_ylim(-.2, 6.4)
    areas = [('Socioemocional\npositiva', G, ['1 Muestra solidaridad', '2 Alivia la tensión', '3 Está de acuerdo']),
             ('Tarea:\nrespuestas', P, ['4 Da sugerencias', '5 Da opiniones', '6 Da orientación']),
             ('Tarea:\npreguntas', T, ['7 Pide orientación', '8 Pide opiniones', '9 Pide sugerencias']),
             ('Socioemocional\nnegativa', A, ['10 Está en desacuerdo', '11 Muestra tensión', '12 Muestra antagonismo'])]
    for i, (t, c, cats) in enumerate(areas):
        y = 5.6 - i * 1.55
        box(ax, 1.9, y - .45, 3.3, 1.25, t, c, 9)
        for j, k in enumerate(cats):
            box(ax, 4.65 + j * 2.85, y - .45, 2.7, .8, k, '#FFFFFF', 7.9, tc=INK, bold=False, ec=c)
    save(fig, 'bales-ipa.png')

# U3 · roles de Benne y Sheats
if want('roles-benne-sheats'):
    fig, ax = canvas(7.2, 3.6, 12, 6)
    fam = [('Roles de tarea', 'hacen avanzar el trabajo', P, ['iniciador', 'buscador de información', 'elaborador', 'evaluador-crítico']),
           ('Roles de mantenimiento', 'cuidan el clima y la cohesión', G, ['animador', 'armonizador', 'conciliador', 'guardián']),
           ('Roles individuales', 'sirven a metas personales', A, ['agresor', 'bloqueador', 'buscador de\nreconocimiento', 'dominador'])]
    for i, (t, d, c, ej) in enumerate(fam):
        x = 2 + i * 4
        box(ax, x, 5.1, 3.6, .8, t, c, 9.4); ax.text(x, 4.45, d, ha='center', fontsize=8.2, color=INK, style='italic')
        for j, e in enumerate(ej):
            box(ax, x, 3.6 - j * .95, 3.0, .75, e, '#FFFFFF', 8.3, tc=INK, bold=False, ec=c)
    save(fig, 'roles-benne-sheats.png')

# U4 · Schachter (esquema)
if want('schachter'):
    t = np.linspace(0, 1, 300)
    fig, ax = plt.subplots(figsize=(6.4, 2.9))
    dev = 1.0 * np.exp(-((t - .5) / .24) ** 2) + .12
    dev[t > .72] = np.interp(t[t > .72], [.72, 1], [dev[t <= .72][-1], .08])
    ax.plot(t, dev, color=A, lw=2.4, label='hacia el miembro desviado')
    ax.plot(t, .22 + .05 * np.sin(t * 6), color=P, lw=2.2, label='hacia el miembro modal')
    ax.annotate('intentos de\npersuasión', (.47, 1.08), (.2, 1.0), fontsize=8.2, color=INK, arrowprops=dict(arrowstyle='->', color=MUTE))
    ax.annotate('rechazo: se deja\nde hablarle', (.9, .14), (.8, .62), fontsize=8.2, color=INK, arrowprops=dict(arrowstyle='->', color=MUTE))
    ax.set_xlabel('Transcurso de la discusión'); ax.set_ylabel('Comunicaciones dirigidas'); ax.set_xticks([]); ax.set_yticks([]); ax.set_ylim(0, 1.3)
    ax.legend(frameon=False, fontsize=8.2, loc='upper right'); clean(ax)
    ax.text(0, -.12, 'Esquema ilustrativo, no datos', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'schachter.png')

# U4 · cohesión y rendimiento
if want('cohesion'):
    fig, ax = canvas(6.8, 3.2, 11, 5.2)
    for i, (t, c) in enumerate([('Atracción\ninterpersonal', G), ('Compromiso\ncon la tarea', P), ('Orgullo\nde grupo', Y)]):
        box(ax, 2.0, 4.2 - i * 1.55, 3.0, 1.05, t, c, 9)
    ax.add_patch(FancyBboxPatch((.3, .25), 3.4, 4.65, boxstyle='round,pad=0.02,rounding_size=0.2', fc='none', ec=MUTE, ls='--'))
    ax.text(2.0, 5.05, 'COHESIÓN', ha='center', fontsize=9.5, color=INK, weight='bold')
    box(ax, 9.0, 2.65, 2.9, 1.2, 'RENDIMIENTO', A, 10)
    arr(ax, (3.85, 3.0), (7.5, 3.0), INK, lw=1.4); arr(ax, (7.5, 2.25), (3.85, 2.25), INK, lw=3.4, ms=16)
    ax.text(5.68, 3.3, 'cohesión → rendimiento', ha='center', fontsize=8.2, color=INK)
    ax.text(5.68, 1.65, 'rendimiento → cohesión\n(efecto más fuerte)', ha='center', fontsize=8.2, color=INK, weight='bold')
    save(fig, 'cohesion.png')

# U5 · proceso de comunicación
if want('comunicacion'):
    fig, ax = canvas(7.8, 3.1, 13, 5.2)
    ax.add_patch(FancyBboxPatch((.2, .3), 12.6, 4.6, boxstyle='round,pad=0.02,rounding_size=0.25', fc=SOFT, ec='none'))
    ax.text(12.6, 4.55, 'CONTEXTO', ha='right', fontsize=8.6, color=MUTE, weight='bold')
    box(ax, 1.6, 2.9, 2.2, 1.0, 'Emisor', P, 9.6); box(ax, 11.4, 2.9, 2.2, 1.0, 'Receptor', G, 9.6)
    box(ax, 6.5, 2.9, 3.0, 1.0, 'Mensaje\n(por un canal)', Y, 9, tc=INK)
    arr(ax, (2.75, 2.9), (4.95, 2.9)); arr(ax, (8.05, 2.9), (10.25, 2.9))
    ax.text(3.85, 3.15, 'codifica', ha='center', fontsize=8.2, color=INK); ax.text(9.15, 3.15, 'descodifica', ha='center', fontsize=8.2, color=INK)
    arr(ax, (11.4, 2.35), (1.6, 2.35), A, rad=-.22, ls='--'); ax.text(6.5, .5, 'retroalimentación', ha='center', fontsize=8.6, color=A, weight='bold')
    ax.text(6.5, 4.2, '≈≈  ruido  ≈≈', ha='center', fontsize=9, color=MUTE, weight='bold')
    ax.text(6.5, 3.85, 'físico, semántico o psicológico', ha='center', fontsize=7.8, color=MUTE)
    save(fig, 'comunicacion.png')

# U5 · estilos de comunicación
if want('estilos-comunicacion'):
    fig, ax = canvas(7.4, 3.0, 12, 4.8)
    est = [('Pasivo', 'no defiende sus derechos', '«Bueno… da igual,\nlo hago yo»', MUTE), ('Asertivo', 'se respeta y respeta', '«Hoy no puedo; ¿lo\nvemos el jueves?»', G),
           ('Agresivo', 'impone sin respetar', '«Siempre me toca\na mí, sois unos vagos»', A)]
    for i, (t, d, f, c) in enumerate(est):
        x = 2 + i * 4; box(ax, x, 3.9, 3.4, .8, t, c, 10.5); ax.text(x, 3.15, d, ha='center', fontsize=8.6, color=INK)
        box(ax, x, 1.75, 3.5, 1.4, f, '#FFFFFF', 8.6, tc=INK, bold=False, ec=c)
    ax.annotate('', (11.9, .45), (.1, .45), arrowprops=dict(arrowstyle='<|-|>', color=MUTE))
    ax.text(.1, .05, 'respeto a los demás, sin respeto a uno mismo', fontsize=7.6, color=MUTE); ax.text(11.9, .05, 'respeto a uno mismo, sin respeto a los demás', ha='right', fontsize=7.6, color=MUTE)
    save(fig, 'estilos-comunicacion.png')

# U6 · ELM
if want('elm'):
    fig, ax = canvas(7.8, 3.8, 13, 6.4)
    box(ax, 1.5, 3.2, 2.3, 1.0, 'Mensaje\npersuasivo', P, 9.2)
    box(ax, 4.6, 4.6, 2.5, .95, '¿Motivación\npara pensar?', '#FFFFFF', 8.8, tc=INK, ec=P)
    box(ax, 4.6, 1.8, 2.5, .95, '¿Capacidad\npara pensar?', '#FFFFFF', 8.8, tc=INK, ec=P)
    arr(ax, (2.7, 3.5), (3.35, 4.4)); arr(ax, (4.6, 4.1), (4.6, 2.3)); ax.text(4.75, 3.2, 'sí', fontsize=8.6, color=G, weight='bold')
    box(ax, 9.1, 1.8, 3.7, 1.2, 'RUTA CENTRAL\nse evalúa la calidad\nde los argumentos', G, 8.2)
    box(ax, 9.1, 4.6, 3.7, 1.2, 'RUTA PERIFÉRICA\nseñales: atractivo,\nexperto, nº de argumentos', A, 8.0)
    arr(ax, (5.9, 1.8), (7.25, 1.8)); ax.text(6.55, 2.0, 'sí', fontsize=8.6, color=G, weight='bold')
    arr(ax, (5.9, 4.75), (7.25, 4.75)); ax.text(6.55, 4.95, 'no', fontsize=8.6, color=A, weight='bold')
    arr(ax, (5.75, 2.2), (7.25, 4.25), rad=-.2); ax.text(6.0, 3.25, 'no', fontsize=8.6, color=A, weight='bold')
    ax.text(11.15, 1.8, '→ cambio duradero,\nresistente y que\npredice la conducta', va='center', fontsize=8.2, color=INK)
    ax.text(11.15, 4.6, '→ cambio temporal\ny más frágil', va='center', fontsize=8.2, color=INK)
    ax.set_xlim(0, 14)
    save(fig, 'elm.png')

# U7 · RNR
if want('rnr'):
    fig, ax = canvas(7.8, 3.6, 13, 6)
    pr = [('RIESGO', '¿a quién?', 'intensidad de la intervención\nproporcional al nivel de riesgo', P), ('NECESIDAD', '¿qué?', 'intervenir las necesidades\ncriminógenas (factores dinámicos)', A),
          ('RESPONSIVIDAD', '¿cómo?', 'enfoque cognitivo-conductual\nadaptado a la persona', G)]
    for i, (t, q, d, c) in enumerate(pr):
        x = 2.2 + i * 4.3; box(ax, x, 5.15, 3.6, .8, f'{t} · {q}', c, 9); ax.text(x, 4.5, d, ha='center', va='top', fontsize=8.0, color=INK)
    ax.text(6.5, 3.05, 'Los ocho factores centrales', ha='center', fontsize=9.2, color=INK, weight='bold')
    f8 = ['historia\ndelictiva', 'personalidad\nantisocial', 'cogniciones\nantisociales', 'amistades\nantisociales', 'familia\no pareja', 'escuela\no trabajo', 'ocio', 'consumo de\nsustancias']
    for i, f in enumerate(f8):
        x = 1.75 + (i % 4) * 3.2; y = 2.05 - (i // 4) * 1.15
        box(ax, x, y, 3.0, .9, f, '#E9D8D3' if i == 0 else '#F6E7E3', 8.2, tc=INK, bold=False)
    ax.text(12.8, .2, 'la historia delictiva es estática; los otros siete son dinámicos', ha='right', fontsize=7.6, color=MUTE, style='italic')
    save(fig, 'rnr.png')

# U8 · Moffitt (esquema)
if want('moffitt'):
    age = np.linspace(8, 40, 400)
    lim = 1.0 * np.exp(-((age - 17) / 3.0) ** 2)
    per = .32 + .1 * np.exp(-((age - 18) / 6) ** 2) - .005 * (age - 8)
    fig, ax = plt.subplots(figsize=(6.6, 2.9))
    ax.fill_between(age, lim, color=A, alpha=.18); ax.plot(age, lim, color=A, lw=2.3, label='limitada a la adolescencia (mayoría)')
    ax.plot(age, per, color=P, lw=2.3, label='persistente a lo largo de la vida (minoría)')
    ax.axvline(17, color=MUTE, ls=':', lw=1); ax.text(17.4, 1.02, 'pico ≈ 17 años', fontsize=8.2, color=INK)
    ax.set_xlabel('Edad'); ax.set_ylabel('Conducta antisocial'); ax.set_yticks([]); ax.set_xticks([10, 15, 20, 25, 30, 35, 40]); ax.set_ylim(0, 1.15)
    ax.legend(frameon=False, fontsize=8.2, loc='upper right'); clean(ax)
    ax.text(0, -.25, 'Esquema ilustrativo, no datos', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'moffitt.png')

# U9 · estilos de gestión del conflicto (Thomas-Kilmann)
def plano(name, xlab, ylab, pts, title=None):
    fig, ax = plt.subplots(figsize=(5.2, 4.3)); ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    for (x, y, t, c) in pts:
        box(ax, x, y, 2.9, .95, t, c, 9.2)
    ax.set_xlabel(xlab); ax.set_ylabel(ylab); ax.set_xticks([1, 9]); ax.set_xticklabels(['baja', 'alta']); ax.set_yticks([1, 9]); ax.set_yticklabels(['baja', 'alta'])
    clean(ax)
    if title: ax.set_title(title)
    save(fig, name)

if want('estilos-conflicto'):
    plano('estilos-conflicto.png', 'Cooperatividad (satisfacer al otro)', 'Asertividad (satisfacer lo propio)',
          [(2, 8.5, 'Competir', A), (8, 8.5, 'Colaborar', G), (5, 5, 'Comprometer', Y), (2, 1.5, 'Evitar', MUTE), (8, 1.5, 'Acomodarse', P)])
if want('vliert'):
    plano('vliert.png', 'Agradabilidad', 'Actividad',
          [(2.2, 8.5, 'Competir', A), (7.8, 8.5, 'Colaborar', G), (6.2, 5.2, 'Comprometer', Y), (2.2, 1.5, 'Evitar', MUTE), (7.8, 1.5, 'Acomodarse', P)])

# U10 · zona de posible acuerdo
if want('zopa'):
    fig, ax = canvas(7.6, 2.8, 12, 4.4)
    ax.annotate('', (11.6, 1.6), (.4, 1.6), arrowprops=dict(arrowstyle='-|>', color=INK, lw=1.3)); ax.text(11.6, 1.15, 'precio', ha='right', fontsize=8.4, color=MUTE)
    ax.add_patch(Rectangle((4.5, 1.25), 3.4, .7, color=G, alpha=.35)); ax.text(6.2, 2.1, 'Zona de posible acuerdo', ha='center', fontsize=9, color=G, weight='bold')
    ax.annotate('', (1.0, 3.45), (7.9, 3.45), arrowprops=dict(arrowstyle='-|>', color=P, lw=2)); ax.text(4.45, 3.65, 'precios que acepta el comprador', ha='center', fontsize=8.2, color=P)
    ax.annotate('', (11.0, 2.75), (4.5, 2.75), arrowprops=dict(arrowstyle='-|>', color=A, lw=2)); ax.text(7.75, 2.95, 'precios que acepta el vendedor', ha='center', fontsize=8.2, color=A)
    for x, t, c in [(4.5, 'precio de reserva\ndel vendedor\n(según su MAAN)', A), (7.9, 'precio de reserva\ndel comprador\n(según su MAAN)', P)]:
        ax.plot([x, x], [1.25, 1.95], color=c, lw=2.2); ax.text(x, 1.05, t, ha='center', va='top', fontsize=8.0, color=c)
    ax.set_ylim(-.3, 4.4)
    save(fig, 'zopa.png')

# U11 · Piliavin
if want('piliavin'):
    fig, ax = canvas(6.6, 4.2, 10, 7)
    cells = [((3.7, 4.4), 'Ayuda directa', G), ((7.6, 4.4), 'Ayuda indirecta o\nreinterpretar la situación', Y),
             ((3.7, 2.0), 'Decisión según las\nnormas y la persona', MUTE), ((7.6, 2.0), 'Abandonar, negar\no huir', A)]
    for (x, y), t, c in cells: box(ax, x, y, 3.6, 2.0, t, c, 9.2)
    ax.text(3.7, 5.95, 'bajo', ha='center', fontsize=9, color=INK); ax.text(7.6, 5.95, 'alto', ha='center', fontsize=9, color=INK)
    ax.text(5.65, 6.55, 'Coste de ayudar', ha='center', fontsize=9.5, color=INK, weight='bold')
    ax.text(1.55, 4.4, 'alto', ha='center', va='center', fontsize=9, color=INK); ax.text(1.55, 2.0, 'bajo', ha='center', va='center', fontsize=9, color=INK)
    ax.text(.5, 3.2, 'Coste de no ayudar', ha='center', va='center', rotation=90, fontsize=9.5, color=INK, weight='bold')
    save(fig, 'piliavin.png')

# U12 · Latané y Darley
if want('latane-darley'):
    fig, ax = canvas(7.8, 3.4, 13, 5.4)
    st = ['Advertir\nel suceso', 'Interpretarlo\ncomo emergencia', 'Asumir la\nresponsabilidad', 'Decidir\ncómo ayudar', 'Actuar']
    why = ['prisa,\ndistracción', 'ignorancia\npluralista', 'difusión de la\nresponsabilidad', 'falta de\ncompetencia', 'aprensión a la\nevaluación, costes']
    for i, (s, w) in enumerate(zip(st, why)):
        x = 1.3 + i * 2.6; box(ax, x, 4.2, 2.3, 1.05, s, P, 8.6)
        if i < 4: arr(ax, (x + 1.17, 4.2), (x + 1.43, 4.2))
        ax.text(x + .15, 3.3, 'no', fontsize=8, color=A, weight='bold'); arr(ax, (x, 3.65), (x, 2.45), A)
        ax.text(x, 2.3, w, ha='center', va='top', fontsize=8.0, color=INK)
    box(ax, 6.5, .45, 4.4, .65, 'NO SE AYUDA', A, 9.5)
    ax.text(12.9, 4.2, '→ ayuda', ha='left', va='center', fontsize=9, color=G, weight='bold'); ax.set_xlim(0, 14)
    save(fig, 'latane-darley.png')

# U12 · Darley y Latané (1968)
if want('darley-latane-1968'):
    fig, ax = plt.subplots(figsize=(5.4, 2.9))
    lab = ['Solo\n(nadie más)', 'Con 1 testigo\nmás', 'Con 4 testigos\nmás']; v = [85, 62, 31]
    b = ax.bar(lab, v, color=[G, Y, A], width=.6)
    for r, val in zip(b, v): ax.text(r.get_x() + r.get_width() / 2, val + 2, f'{val} %', ha='center', fontsize=9.5, color=INK, weight='bold')
    ax.set_ylim(0, 100); ax.set_ylabel('% que ayudó antes de que\nterminara el ataque'); clean(ax)
    save(fig, 'darley-latane-1968.png')

# U13 · Sherif (esquema)
if want('sherif'):
    fig, ax = plt.subplots(figsize=(6.2, 2.9))
    s = np.arange(1, 5)
    for y, c, n in [([2, 3.5, 4.3, 4.6], P, 'persona A'), ([7.5, 6.0, 5.2, 4.9], A, 'persona B'), ([4.6, 4.8, 4.7, 4.75], G, 'persona C')]:
        ax.plot(s, y, '-o', color=c, lw=2, label=n)
    ax.axvspan(.7, 1.3, color=SOFT); ax.text(1, 8.3, 'solos', ha='center', fontsize=8.2, color=MUTE)
    ax.text(3, 8.3, 'en grupo', ha='center', fontsize=8.2, color=MUTE)
    ax.set_xticks(s); ax.set_xticklabels(['sesión 1', 'sesión 2', 'sesión 3', 'sesión 4']); ax.set_ylabel('Movimiento estimado\nde la luz (cm)'); ax.set_ylim(0, 9)
    ax.legend(frameon=False, fontsize=8.2, loc='lower right', ncol=3); clean(ax)
    ax.text(0, -.24, 'Esquema ilustrativo, no datos', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'sherif.png')

# U14 · variantes de Milgram
if want('milgram-variantes'):
    fig, ax = plt.subplots(figsize=(6.4, 3.0))
    lab = ['Retroalimentación\nremota', 'Se oye\nla voz', 'Misma\nsala', 'Contacto\nfísico', 'Órdenes por\nteléfono']; v = [65, 62.5, 40, 30, 22.5]
    b = ax.bar(lab, v, color=[P, P, Y, A, MUTE], width=.62)
    for r, val in zip(b, v): ax.text(r.get_x() + r.get_width() / 2, val + 2, pct(val), ha='center', fontsize=9, color=INK, weight='bold')
    ax.set_ylim(0, 80); ax.set_ylabel('% que llegó a 450 V'); ax.tick_params(axis='x', labelsize=8.4); clean(ax)
    save(fig, 'milgram-variantes.png')

# U15 · pensamiento grupal (Janis)
if want('janis'):
    fig, ax = canvas(7.8, 3.6, 13, 6)
    box(ax, 1.9, 3.0, 3.3, 4.6, 'ANTECEDENTES\n\nalta cohesión\n\naislamiento\n\nliderazgo directivo\n\nfalta de\nprocedimientos\n\nestrés, amenaza', P, 8.2)
    box(ax, 4.85, 3.0, 1.9, 2.2, 'Búsqueda\nde\nconcordancia', Y, 8.4, tc=INK)
    box(ax, 7.9, 3.0, 3.6, 4.6, 'SÍNTOMAS\n\nilusión de invulnerabilidad\nracionalización colectiva\ncreencia en la moralidad\ndel grupo\nestereotipos del exogrupo\npresión sobre disidentes\nautocensura\nilusión de unanimidad\n«guardianes de la mente»', A, 7.9)
    box(ax, 11.6, 3.0, 2.6, 2.6, 'DECISIÓN\nDEFECTUOSA\n\npocas alternativas,\nriesgos sin\nexaminar', '#6B4E47', 8.0)
    arr(ax, (3.6, 3.0), (3.85, 3.0)); arr(ax, (5.85, 3.0), (6.05, 3.0)); arr(ax, (9.75, 3.0), (10.25, 3.0)); ax.set_xlim(0, 13.2)
    save(fig, 'janis.png')

# U15 · polarización
if want('polarizacion'):
    fig, ax = plt.subplots(figsize=(6.4, 2.8))
    pre = np.array([5.2, 5.8, 6.1, 6.5, 6.9, 7.3]); post = pre + np.array([1.5, 1.3, 1.2, 1.0, .9, .8])
    for i, (a, b) in enumerate(zip(pre, post)):
        y = 1 - i * .12
        ax.plot([a], [y], 'o', color=MUTE, ms=7); ax.plot([b], [y], 'o', color=A, ms=7); ax.annotate('', (b - .08, y), (a + .08, y), arrowprops=dict(arrowstyle='->', color=INK, lw=1))
    ax.axvline(pre.mean(), color=MUTE, ls=':', lw=1.1); ax.axvline(post.mean(), color=A, ls=':', lw=1.1)
    ax.text(pre.mean() - .1, 1.17, 'media antes', ha='right', fontsize=8.2, color=MUTE); ax.text(post.mean() + .1, 1.17, 'media después', ha='left', fontsize=8.2, color=A)
    ax.set_xlim(1, 10); ax.set_ylim(.25, 1.3); ax.set_yticks([]); ax.set_xticks([1, 5.5, 10]); ax.set_xticklabels(['muy en contra', 'neutral', 'muy a favor'])
    ax.set_xlabel('Postura de cada miembro sobre la propuesta'); clean(ax); ax.spines['left'].set_visible(False)
    ax.text(0, -.32, 'Esquema ilustrativo, no datos', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'polarizacion.png')

# U16 · Zajonc
if want('zajonc'):
    fig, ax = canvas(7.4, 3.0, 12, 4.8)
    box(ax, 1.6, 2.4, 2.6, 1.0, 'Presencia\nde otros', P, 9.2); box(ax, 4.75, 2.4, 2.3, 1.0, 'Más\nactivación', Y, 9.2, tc=INK)
    box(ax, 7.75, 2.4, 2.4, 1.2, 'Se emite la\nrespuesta\ndominante', V, 8.8)
    box(ax, 10.6, 3.6, 2.6, 1.15, 'Tarea fácil o\nbien aprendida:\nMEJORA', G, 8.4); box(ax, 10.6, 1.2, 2.6, 1.15, 'Tarea difícil\no nueva:\nEMPEORA', A, 8.4)
    arr(ax, (2.95, 2.4), (3.55, 2.4)); arr(ax, (5.95, 2.4), (6.5, 2.4)); arr(ax, (9.0, 2.75), (9.25, 3.4)); arr(ax, (9.0, 2.05), (9.25, 1.4))
    save(fig, 'zajonc.png')

# U16 · Ringelmann
if want('ringelmann'):
    fig, ax = plt.subplots(figsize=(5.8, 2.9))
    n = [1, 2, 3, 8]; v = [100, 93, 85, 49]
    ax.plot(n, v, '-o', color=A, lw=2.4, ms=7, label='rendimiento por persona')
    ax.plot([1, 8], [100, 100], color=MUTE, ls='--', lw=1.2, label='sin pérdidas')
    for x, y in zip(n, v): ax.text(x, y - 9, f'{y} %', ha='center', fontsize=9, color=INK, weight='bold')
    ax.set_xticks(range(1, 9)); ax.set_xlabel('Personas tirando de la cuerda'); ax.set_ylabel('% del esfuerzo individual'); ax.set_ylim(30, 110)
    ax.legend(frameon=False, fontsize=8.2, loc='lower left'); clean(ax)
    ax.text(0, -.26, 'Valores aproximados citados en la literatura secundaria', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'ringelmann.png')

# U13 · tarjetas de Asch (dibujo propio)
if want('asch'):
    fig, ax = canvas(6.4, 3.2, 12, 6)
    for x0, t in [(.4, 'Línea de referencia'), (6.2, 'Líneas de comparación')]:
        ax.add_patch(FancyBboxPatch((x0, .5), 5.4, 4.6, boxstyle='round,pad=0.02,rounding_size=0.15', fc='white', ec=MUTE, lw=1.4))
        ax.text(x0 + 2.7, 5.45, t, ha='center', fontsize=9.5, color=INK, weight='bold')
    ax.plot([3.1, 3.1], [1.3, 4.3], color=INK, lw=4, solid_capstyle='butt')
    for x, h, l in [(7.4, 2.25, 'A'), (8.9, 3.0, 'B'), (10.4, 3.55, 'C')]:
        ax.plot([x, x], [1.3, 1.3 + h], color=INK, lw=4, solid_capstyle='butt'); ax.text(x, .85, l, ha='center', fontsize=11, color=INK, weight='bold')
    save(fig, 'asch.png')

# U14 · montaje del experimento de Milgram (dibujo propio)
if want('milgram'):
    fig, ax = canvas(5.6, 3.6, 10, 6.4)
    ax.add_patch(Rectangle((.2, .3), 6.2, 5.6, fc=SOFT, ec=MUTE, lw=1.2)); ax.add_patch(Rectangle((6.6, .3), 3.2, 5.6, fc='#EFE9F2', ec=MUTE, lw=1.2))
    ax.text(3.3, 5.5, 'Sala del experimentador', ha='center', fontsize=8.6, color=MUTE); ax.text(8.2, 5.5, 'Sala contigua', ha='center', fontsize=8.6, color=MUTE)
    def persona(x, y, l, c, t):
        ax.add_patch(Circle((x, y + .95), .38, fc=c, ec='none')); ax.add_patch(FancyBboxPatch((x - .55, y - .55), 1.1, 1.05, boxstyle='round,pad=0.02,rounding_size=0.3', fc=c, ec='none'))
        ax.text(x, y - .05, l, ha='center', va='center', fontsize=12, color='white', weight='bold'); ax.text(x, y - .95, t, ha='center', va='top', fontsize=8.2, color=INK)
    persona(1.6, 3.4, 'E', P, 'experimentador'); persona(4.0, 3.4, 'M', A, 'maestro\n(participante)'); persona(8.2, 3.4, 'A', V, 'alumno\n(cómplice)')
    ax.add_patch(Rectangle((3.35, 1.0), 1.3, .55, fc=INK)); ax.text(4.0, .62, 'generador de «descargas»', ha='center', fontsize=7.4, color=INK)
    for i in range(6): ax.add_patch(Rectangle((3.45 + i * .19, 1.18), .12, .2, fc=Y))
    arr(ax, (2.25, 3.9), (3.35, 3.9), P); ax.text(2.8, 4.15, 'órdenes', ha='center', fontsize=7.8, color=P)
    arr(ax, (4.7, 1.35), (7.6, 2.95), Y, ls='--'); ax.text(5.55, 2.25, 'descargas\n(simuladas)', ha='center', fontsize=7.6, color=INK, rotation=0)
    save(fig, 'milgram.png')
