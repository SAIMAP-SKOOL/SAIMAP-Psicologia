"""Figuras propias del temario de Psicología del Lenguaje. python3 tools/figuras.py → img/*"""
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




os.makedirs(OUT, exist_ok=True)

# U1 · lengua, lenguaje y habla
if want('lengua-lenguaje-habla'):
    fig, ax = canvas(7.4, 3.4, 12, 6)
    for (x, y, w, h, c, t) in [(3.4, 3.0, 6.4, 5.4, P, ''), (3.8, 2.6, 4.8, 3.8, G, ''), (4.2, 2.2, 3.2, 2.0, Y, '')]:
        ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h, boxstyle='round,pad=0.02,rounding_size=0.3', fc=c, ec='white', lw=2, alpha=.92))
    ax.text(3.4, 5.25, 'LENGUAJE · facultad humana de comunicarse\ncon signos combinables según reglas', ha='center', va='center', color='white', fontsize=8.6, weight='bold')
    ax.text(3.8, 4.05, 'LENGUA · sistema social compartido\n(español, euskera, LSE…)', ha='center', va='center', color='white', fontsize=8.4, weight='bold')
    ax.text(4.2, 2.2, 'HABLA\nacto individual y concreto', ha='center', va='center', color=INK, fontsize=8.4, weight='bold')
    box(ax, 9.6, 4.2, 4.2, 1.3, 'Saussure (1916)\nlangue (sistema) / parole (acto)', SOFT, 8.4, tc=INK, ec=MUTE)
    box(ax, 9.6, 2.2, 4.2, 1.3, 'Chomsky (1965)\ncompetencia / actuación', SOFT, 8.4, tc=INK, ec=MUTE)
    ax.text(9.6, .75, 'Distinciones parecidas, no idénticas: la langue es social;\nla competencia, el conocimiento del hablante ideal', ha='center', fontsize=7.6, color=MUTE, style='italic')
    save(fig, 'lengua-lenguaje-habla.png')

# U2 · estrechamiento perceptivo
if want('estrechamiento'):
    fig, ax = plt.subplots(figsize=(6.2, 3.1))
    x = np.arange(3); lab = ['6–8 meses', '8–10 meses', '10–12 meses']
    ax.plot(x, [95, 92, 94], '-o', color=G, lw=2.4, ms=7, label='Contraste de la lengua materna')
    ax.plot(x, [90, 55, 15], '-o', color=A, lw=2.4, ms=7, label='Contraste no nativo (p. ej., del hindi)')
    ax.set_xticks(x, lab); ax.set_ylim(0, 105); ax.set_ylabel('Bebés que discriminan'); ax.set_yticks([0, 50, 100], ['pocos', '', 'casi todos'])
    ax.legend(frameon=False, fontsize=8.2, loc='lower left'); clean(ax)
    note(ax, 'Esquema ilustrativo basado en Werker y Tees (1984), no datos', -.26)
    save(fig, 'estrechamiento.png')

# U2 · Saffran
if want('saffran'):
    fig, ax = canvas(7.6, 2.7, 15, 4.4)
    syl = ['bi', 'da', 'ku', 'pa', 'do', 'ti', 'go', 'la', 'bu', 'bi', 'da', 'ku']
    cols = [P, P, P, G, G, G, Y, Y, Y, P, P, P]
    for i, (s, c) in enumerate(zip(syl, cols)):
        box(ax, 1 + i * 1.18, 2.9, 1.0, .8, s, c, 10, tc='white' if c != Y else INK)
    for i in range(11):
        xm = 1 + i * 1.18 + .59; inside = (i % 3) != 2
        ax.text(xm, 1.95, '1,0' if inside else '≈0,33', ha='center', fontsize=7.6, color=G if inside else A, weight='bold')
        if not inside: ax.plot([xm, xm], [2.3, 3.5], color=A, lw=1.6, ls='--')
    ax.text(7.5, 4.05, 'Habla sintética continua, sin pausas ni acentos', ha='center', fontsize=8.6, color=INK)
    ax.text(7.5, 1.25, 'Probabilidad de transición entre sílabas: alta dentro de una «palabra», baja entre palabras.\nLos cortes (líneas rojas) caen donde la probabilidad baja.', ha='center', va='top', fontsize=8, color=INK)
    note(ax, 'Esquema ilustrativo basado en Saffran, Aslin y Newport (1996)', -.02)
    save(fig, 'saffran.png')

# U2 · Kuhl
if want('kuhl'):
    fig, ax = plt.subplots(figsize=(5.4, 3.1))
    lab = ['Mandarín\nen vivo', 'Control\n(inglés)', 'Mandarín\nen DVD', 'Mandarín\nsolo audio']
    v = [65.7, 56.7, None, None]
    ax.bar(0, 65.7, color=G, width=.6); ax.bar(1, 56.7, color=MUTE, width=.6)
    for i in (2, 3): ax.bar(i, 56.7, color='white', edgecolor=A, hatch='//', width=.6)
    ax.text(0, 67.5, '65,7 %', ha='center', fontsize=9, weight='bold', color=INK); ax.text(1, 58.5, '56,7 %', ha='center', fontsize=9, weight='bold', color=INK)
    for i in (2, 3): ax.text(i, 58.5, '≈ control\n(sin aprendizaje)', ha='center', fontsize=7.6, color=A)
    ax.axhline(50, color=MUTE, ls=':', lw=1); ax.text(-.45, 50.6, 'azar', fontsize=7.4, color=MUTE, ha='left')
    ax.set_xticks(range(4), lab, fontsize=8.2); ax.set_ylim(40, 75); ax.set_ylabel('% de aciertos (contraste del mandarín)'); clean(ax)
    ax.set_title('Bebés de ≈9 meses, 12 sesiones de 25 min', fontsize=9)
    save(fig, 'kuhl.png')

# U2 · hitos
if want('hitos'):
    fig, ax = plt.subplots(figsize=(8.2, 4.0))
    H = [('Llanto diferenciado', 0, 3, MUTE), ('Arrullos y gorjeos', 2, 4, V), ('Balbuceo canónico', 6, 10, V), ('Atención conjunta y gestos', 9, 12, P),
         ('Primeras palabras', 10, 15, G), ('≈50 palabras', 16, 20, G), ('Combinaciones de dos palabras', 18, 24, Y), ('Explosión gramatical', 24, 36, Y),
         ('Oraciones subordinadas', 36, 60, A), ('Conciencia fonológica y lectura', 60, 72, A)]
    for i, (t, a, b, c) in enumerate(H):
        y = len(H) - i; ax.barh(y, b - a, left=a, color=c, height=.62)
        ax.text(b + 1, y, t, va='center', fontsize=8.2, color=INK)
    ax.set_xlim(0, 96); ax.set_xticks([0, 6, 12, 18, 24, 36, 48, 60, 72]); ax.set_yticks([]); ax.set_xlabel('Edad (meses)'); clean(ax); ax.spines['left'].set_visible(False)
    note(ax, 'Rangos orientativos: la variabilidad individual es amplia', -.17)
    save(fig, 'hitos.png')

# U3 · periodo sensible
if want('periodo-sensible'):
    fig, ax = plt.subplots(figsize=(6.4, 3.9))
    x = np.linspace(0, 40, 400)
    ax.plot(x, np.where(x < 13, 95, 45), color=A, lw=2.2, ls='--', label='«Ventana que se cierra» (escalón en la pubertad)')
    y = np.where(x < 17.5, 95 - .3 * x, 95 - .3 * 17.5 - 1.5 * (x - 17.5)); y = np.clip(y, 40, 100)
    ax.plot(x, y, color=P, lw=2.6, label='Declive gradual (Hakuta et al., 2003; Hartshorne et al., 2018)')
    ax.axvline(17.5, color=MUTE, ls=':', lw=1); ax.text(18, 97, 'inflexión ≈17–18 años\n(capacidad de aprender gramática)', fontsize=7.6, color=MUTE, va='top')
    ax.set_xlabel('Edad de inicio del aprendizaje de la L2 (años)'); ax.set_ylabel('Dominio gramatical final'); ax.set_yticks([]); ax.set_ylim(35, 105)
    ax.legend(frameon=False, fontsize=7.8, loc='upper left', bbox_to_anchor=(0, -.2)); clean(ax)
    note(ax, 'Esquema ilustrativo, no datos', -.48)
    save(fig, 'periodo-sensible.png')

# U4 · teorías
if want('teorias'):
    fig, ax = plt.subplots(figsize=(7.4, 4.2))
    ax.set_xlim(0, 10); ax.set_ylim(0, 10); ax.set_xticks([]); ax.set_yticks([])
    ax.axhline(5, color=MUTE, lw=.8); ax.axvline(5, color=MUTE, lw=.8)
    for x, y, t, c in [(2.1, 3.0, 'Chomsky · Pinker\nLAD, Gramática Universal', A), (8.0, 2.4, 'Skinner\nrefuerzo e imitación', MUTE),
                       (5.2, 3.6, 'Piaget\nfunción simbólica', V), (7.7, 7.9, 'Vygotsky · Bruner\nZDP, habla privada, LASS', G), (4.6, 6.6, 'Tomasello\nlectura de intenciones\n+ detección de patrones', P)]:
        box(ax, x, y, 3.0, 1.35, t, c, 8.2)
    ax.set_xlabel('más innato  ←→  más aprendido'); ax.set_ylabel('individual  ←→  social'); clean(ax)
    ax.text(.15, 9.5, 'Hoy: modelos integradores (sesgos biológicos + aprendizaje estadístico + interacción)', fontsize=7.8, color=INK, style='italic')
    note(ax, 'Esquema ilustrativo: la posición de cada enfoque es orientativa', -.1)
    save(fig, 'teorias.png')

# U5 · TDL
if want('tdl'):
    fig, ax = canvas(6.6, 3.3, 10.5, 5.4)
    for i in range(100):
        r, c = divmod(i, 20); x = .4 + c * .42; y = 4.6 - r * .62
        col = A if i < 8 else (Y if i < 10 else '#C9D3DA')
        ax.add_patch(Circle((x, y), .19, fc=col, ec='none'))
    ax.text(10.1, 4.4, '■', color=A, fontsize=12, ha='center'); ax.text(10.1, 4.0, '≈8 de cada 100\ncon TDL (7,58 %)', fontsize=7.6, ha='center', va='top', color=INK)
    ax.text(10.1, 2.7, '■', color=Y, fontsize=12, ha='center'); ax.text(10.1, 2.3, '≈2 con trastorno\nasociado a otra\ncondición (2,34 %)', fontsize=7.6, ha='center', va='top', color=INK)
    ax.text(5.0, .55, 'Niños de 4–5 años (Norbury et al., 2016; N = 7.267). Unos dos por aula de 30.', ha='center', fontsize=8, color=INK)
    save(fig, 'tdl.png')

# U6 · Jakobson
if want('jakobson'):
    fig, ax = canvas(7.8, 3.8, 14, 7)
    items = [(2.2, 3.6, 'EMISOR', 'expresiva', '«¡Qué alegría!»', V), (11.8, 3.6, 'RECEPTOR', 'conativa', '«Cierra la puerta»', A),
             (7, 3.6, 'MENSAJE', 'poética', 'un refrán, un verso', Y), (7, 6.1, 'CONTEXTO', 'referencial', '«Llueve en Bilbao»', P),
             (7, 1.15, 'CANAL', 'fática', '«¿Me oyes?»', G), (11.8, 6.1, 'CÓDIGO', 'metalingüística', '«¿Qué significa “ósmosis”?»', T)]
    for x, y, f, fn, ej, c in items:
        box(ax, x, y, 3.3, 1.35, f'{f}\nfunción {fn}', c, 8.6, tc='white' if c != Y else INK)
        ax.text(x, y - .95, ej, ha='center', va='top', fontsize=7.6, color=INK, style='italic')
    arr(ax, (3.9, 3.6), (5.3, 3.6)); arr(ax, (8.7, 3.6), (10.1, 3.6))
    note(ax, 'Esquema basado en Jakobson (1960)', -.02)
    save(fig, 'jakobson.png')

# U7 · Hockett
if want('hockett'):
    rasgos = ['Semanticidad', 'Arbitrariedad', 'Desplazamiento', 'Productividad', 'Dualidad de patrón', 'Transmisión cultural', 'Recursividad']
    esp = ['Abeja', 'Mono vervet', 'Carbonero\njaponés', 'Chimpancé\nentrenado', 'Ser humano']
    M = [[1, 0, 2, 1, 0, 0, 0], [2, 1, 0, 0, 0, 1, 0], [2, 1, 0, 1, 0, 1, 0], [2, 2, 1, 1, 0, 1, 0], [2, 2, 2, 2, 2, 2, 2]]
    fig, ax = plt.subplots(figsize=(7.4, 3.9))
    sym = {2: ('sí', G), 1: ('parcial', Y), 0: ('no', '#D7DDE1')}
    for j, row in enumerate(M):
        for i, v in enumerate(row):
            t, c = sym[v]; ax.add_patch(Rectangle((j, len(rasgos) - 1 - i), .95, .9, fc=c, ec='white'))
            ax.text(j + .475, len(rasgos) - 1 - i + .45, t, ha='center', va='center', fontsize=8, color=INK)
    ax.set_xlim(0, 5); ax.set_ylim(0, len(rasgos)); ax.set_xticks([j + .475 for j in range(5)], esp, fontsize=8.2); ax.xaxis.tick_top()
    ax.set_yticks([len(rasgos) - 1 - i + .45 for i in range(len(rasgos))], rasgos, fontsize=8.4)
    for s in ax.spines.values(): s.set_visible(False)
    ax.tick_params(length=0)
    note(ax, 'Valoración docente orientativa: varios rasgos se discuten (p. ej., el desplazamiento en abejas es limitado)', -.08)
    save(fig, 'hockett.png')

# U7 · Watzlawick
if want('watzlawick'):
    fig, ax = canvas(8.4, 3.6, 15, 6.2)
    ax_ = [('1', 'Es imposible\nno comunicar', 'Callarse en una discusión\ntambién dice algo', P),
           ('2', 'Contenido\ny relación', '«Siéntate» como orden\no como invitación', G),
           ('3', 'Puntuación de\nla secuencia', '«Grito porque te alejas» /\n«Me alejo porque gritas»', Y),
           ('4', 'Digital\ny analógica', 'Las palabras y el tono\no los gestos', V),
           ('5', 'Simétrica o\ncomplementaria', 'Dos compañeros / profesor\ny alumno', A)]
    for i, (n, t, e, c) in enumerate(ax_):
        x = 1.5 + i * 3
        box(ax, x, 4.3, 2.7, 1.7, f'Axioma {n}\n{t}', c, 8.4, tc='white' if c != Y else INK)
        ax.text(x, 3.1, e, ha='center', va='top', fontsize=7.4, color=INK, style='italic')
    ax.text(7.5, .5, 'Watzlawick, Beavin y Jackson (1967)', ha='center', fontsize=8, color=MUTE)
    save(fig, 'watzlawick.png')

# U8 · actos de habla
if want('actos-habla'):
    fig, ax = canvas(7.6, 2.8, 14, 4.6)
    box(ax, 2.3, 2.6, 3.6, 1.8, 'Acto LOCUTIVO\nDecir «Hace frío\naquí»', P, 8.8)
    box(ax, 7, 2.6, 3.6, 1.8, 'Acto ILOCUTIVO\nPedir que se cierre\nla ventana', G, 8.8)
    box(ax, 11.7, 2.6, 3.6, 1.8, 'Acto PERLOCUTIVO\nAlguien se levanta\ny la cierra', A, 8.8)
    arr(ax, (4.2, 2.6), (5.1, 2.6)); arr(ax, (8.9, 2.6), (9.8, 2.6))
    ax.text(2.3, 1.2, 'lo que se dice', ha='center', fontsize=8, color=MUTE); ax.text(7, 1.2, 'lo que se hace al decirlo\n(fuerza ilocutiva)', ha='center', va='top', fontsize=8, color=MUTE)
    ax.text(11.7, 1.2, 'el efecto en el oyente', ha='center', fontsize=8, color=MUTE)
    note(ax, 'Esquema basado en Austin (1962)', -.04)
    save(fig, 'actos-habla.png')

# U8 · Grice
if want('grice'):
    fig, ax = canvas(8.6, 4.4, 15, 7.6); ax.set_xlim(0, 15); ax.set_ylim(-.4, 7.6)
    rows = [('CANTIDAD', 'Di lo necesario,\nni más ni menos', '—¿Qué tal el examen?\n—Aprobé tres de cinco.', '—¿Qué tal la cita?\n—El restaurante era bonito.\n→ la cita fue mal', P),
            ('CUALIDAD', 'Di lo que crees\nverdadero', '—¿Llueve?\n—Sí, está diluviando.', '«¡Qué día tan estupendo!»\n(bajo la tormenta)\n→ ironía', G),
            ('RELACIÓN', 'Sé pertinente', '—¿Hay pan?\n—Sí, en el armario.', '—¿Vienes a la fiesta?\n—Mañana tengo examen.\n→ no voy', Y),
            ('MODO', 'Sé claro\ny ordenado', 'Instrucciones en orden,\nsin ambigüedad', '«Ella emitió una serie de sonidos\nparecidos a una canción»\n→ cantó mal', V)]
    for j, h in enumerate(['Máxima', 'Cumplirla', 'Burlarla abiertamente → implicatura']):
        ax.text([1.9, 6.4, 12.1][j], 7.2, h, ha='center', fontsize=8.8, weight='bold', color=INK)
    for i, (m, d, ok, imp, c) in enumerate(rows):
        y = 5.8 - i * 1.72
        box(ax, 1.9, y, 3.4, 1.5, f'{m}\n{d}', c, 7.8, tc='white' if c != Y else INK)
        box(ax, 6.4, y, 4.4, 1.5, ok, SOFT, 7.6, tc=INK, bold=False, ec=MUTE)
        box(ax, 12.1, y, 5.4, 1.5, imp, SOFT, 7.6, tc=INK, bold=False, ec=A)
    note(ax, 'Ejemplos propios basados en Grice (1975)', -.03)
    save(fig, 'grice.png')

# U8 · Sally y Ana
if want('sally-ana'):
    fig = plt.figure(figsize=(7.4, 3.1)); ax1 = fig.add_axes([0, 0, .5, 1]); ax2 = fig.add_axes([.6, .2, .38, .68])
    ax1.set_xlim(0, 10); ax1.set_ylim(0, 6); ax1.axis('off')
    steps = ['1. Sally guarda la\ncanica en su cesta', '2. Sally se va', '3. Ana la cambia\na su caja', '4. ¿Dónde buscará\nSally la canica?']
    for i, s in enumerate(steps):
        x = 2.6 + (i % 2) * 4.8; y = 4.3 - (i // 2) * 2.6
        box(ax1, x, y, 4.2, 1.6, s, [P, MUTE, G, A][i], 8.2)
    ax1.text(5, .25, 'Respuesta correcta: en la cesta (donde ella cree)', ha='center', fontsize=7.8, color=INK, style='italic')
    v = [85, 86, 20]; ax2.bar(range(3), v, color=[G, P, A], width=.6)
    for i, x in enumerate(v): ax2.text(i, x + 2, f'{x} %', ha='center', fontsize=8.6, weight='bold', color=INK)
    ax2.set_xticks(range(3), ['Desarrollo\ntípico', 'Síndrome\nde Down', 'Autismo'], fontsize=8); ax2.set_ylim(0, 100); ax2.set_ylabel('% que acierta', fontsize=8.4); clean(ax2)
    ax2.set_title('Baron-Cohen, Leslie y Frith (1985)', fontsize=8.4)
    fig.savefig(f'{OUT}/sally-ana.png', dpi=200, bbox_inches='tight'); plt.close(fig); print('ok sally-ana.png')

# U9 · percepción categórica
if want('percepcion-categorica'):
    fig, ax = plt.subplots(figsize=(6.2, 3.1))
    x = np.linspace(0, 10, 200); idp = 100 / (1 + np.exp(-(x - 5) * 2.2))
    ax.plot(x, idp, color=P, lw=2.6, label='Identificación como /pa/ (%)')
    disc = 35 + 55 * np.exp(-((x - 5) ** 2) / 1.2)
    ax.plot(x, disc, color=A, lw=2.2, ls='--', label='Discriminación de pares vecinos')
    ax.set_xticks([0, 10], ['/ba/', '/pa/']); ax.set_xlabel('Continuo de tiempo de inicio de la sonoridad (VOT) →'); ax.set_yticks([0, 50, 100]); ax.set_ylim(-5, 110)
    ax.axvline(5, color=MUTE, ls=':', lw=1); ax.text(5.15, 104, 'frontera de categoría', fontsize=7.6, color=MUTE)
    ax.legend(frameon=False, fontsize=8, loc='upper left'); clean(ax)
    note(ax, 'Esquema ilustrativo, no datos', -.3)
    save(fig, 'percepcion-categorica.png')

# U9 · doble ruta
if want('doble-ruta'):
    fig, ax = canvas(7.6, 4.6, 14, 9)
    box(ax, 7, 8.3, 4, .8, 'Palabra escrita', INK, 9)
    box(ax, 7, 7.0, 4, .8, 'Análisis visual (letras)', MUTE, 8.6)
    box(ax, 3.6, 5.3, 4.2, .9, 'Léxico ortográfico\n(palabras conocidas)', P, 8.4)
    box(ax, 3.6, 3.5, 4.2, .9, 'Sistema semántico\n(significado)', G, 8.4)
    box(ax, 3.6, 1.8, 4.2, .9, 'Léxico fonológico', P, 8.4)
    box(ax, 10.6, 3.5, 4.2, 1.2, 'Conversión\ngrafema → fonema\n(ruta subléxica)', Y, 8.4, tc=INK)
    box(ax, 7, .5, 4, .75, 'Habla', INK, 9)
    for a, b in [((7, 7.9), (7, 7.42)), ((6.2, 6.6), (4.4, 5.78)), ((7.8, 6.6), (10.2, 4.13)), ((3.6, 4.85), (3.6, 3.97)), ((3.6, 3.05), (3.6, 2.27)), ((3.6, 1.35), (6.0, .7)), ((10.6, 2.9), (8.0, .7))]:
        arr(ax, a, b)
    arr(ax, (5.7, 5.1), (5.7, 2.0), c=P, ls='--', rad=-.25)
    ax.text(.2, 5.3, 'ruta\nléxica', fontsize=8, color=P, weight='bold', va='center')
    ax.text(12.5, 6.1, '✗ falla en la\ndislexia fonológica\n(pseudopalabras)', ha='center', fontsize=7.6, color=A)
    ax.text(.9, 6.65, '✗ falla en la dislexia superficial\n(palabras irregulares)', fontsize=7.6, color=A)
    ax.text(7.3, 3.5, '✗ dislexia profunda:\nerrores semánticos\n+ déficit fonológico', ha='center', fontsize=7.4, color=A)
    note(ax, 'Esquema simplificado del modelo de doble ruta (Coltheart et al., 2001)', -.03)
    save(fig, 'doble-ruta.png')

# U9 · McGurk
if want('mcgurk'):
    fig, ax = plt.subplots(figsize=(6.2, 3.0))
    bins = np.arange(0, 101, 10); h = [30, 7, 4, 3, 3, 3, 3, 4, 7, 36]
    cols = [A if i in (0, 9) else '#C9D3DA' for i in range(10)]
    ax.bar(bins[:-1] + 5, h, width=9, color=cols)
    ax.set_xlabel('% de ensayos en que la persona percibe la fusión McGurk'); ax.set_ylabel('Proporción de personas'); ax.set_yticks([])
    ax.text(50, 30, '≈77 % de las personas están\ncerca de los extremos', ha='center', fontsize=8.6, color=INK, weight='bold')
    ax.set_xticks([0, 25, 50, 75, 100]); clean(ax)
    note(ax, 'Forma esquemática de la distribución; dato anotado de Basu Mallick et al. (2015), N = 360', -.3)
    save(fig, 'mcgurk.png')

# U10 · acceso léxico
if want('acceso-lexico'):
    fig, axs = plt.subplots(1, 3, figsize=(8.4, 3.4))
    for a in axs: a.set_xlim(0, 10); a.set_ylim(0, 10); a.axis('off')
    a = axs[0]; a.set_title('Logogén (Morton, 1969)', fontsize=9)
    for i, (w, lv, th) in enumerate([('gato', 8.2, 6), ('gafa', 4.0, 6.5), ('pato', 3.0, 6.5)]):
        x = 2 + i * 3; a.add_patch(Rectangle((x - .6, 1.5), 1.2, lv * .8, fc=G if lv * .8 > th * .8 else '#C9D3DA'))
        a.plot([x - .9, x + .9], [1.5 + th * .8] * 2, color=A, lw=1.6); a.text(x, .8, w, ha='center', fontsize=8.4)
    a.text(5, 8.6, 'acumulan evidencia; responde\nel que supera su umbral', ha='center', fontsize=7.4, color=INK)
    a = axs[1]; a.set_title('Cohorte (Marslen-Wilson)', fontsize=9)
    st = [('/k/', 'casa, coco, cocodrilo,\ncolor, cuna…'), ('/ko/', 'coco, cocodrilo,\ncolor, cofre…'), ('/koko/', 'coco, cocodrilo'), ('/kokod/', 'cocodrilo ✓')]
    for i, (s, c) in enumerate(st):
        y = 8.3 - i * 2.2; w = 9.6 - i * 1.5
        a.add_patch(FancyBboxPatch((5 - w / 2, y - .8), w, 1.6, boxstyle='round,pad=0.02,rounding_size=0.2', fc=[SOFT, '#E6EEF4', '#D3E0EA', P][i], ec='none'))
        a.text(5, y, f'{s}  {c}', ha='center', va='center', fontsize=7.2, color='white' if i == 3 else INK)
    a.text(5, -.4, 'punto de unicidad', ha='center', fontsize=7.6, color=A, weight='bold')
    a = axs[2]; a.set_title('TRACE (McClelland y Elman, 1986)', fontsize=9)
    for y, t, c in [(8.2, 'Palabras', P), (5.0, 'Fonemas', G), (1.8, 'Rasgos acústicos', Y)]:
        box(a, 5, y, 6, 1.4, t, c, 8.6, tc='white' if c != Y else INK)
    for y in (2.6, 5.8):
        arr(a, (4.2, y), (4.2, y + 1.5)); arr(a, (5.8, y + 1.5), (5.8, y), c=A)
    a.text(5, -.4, 'activación ascendente y\nretroalimentación descendente', ha='center', fontsize=7.2, color=INK, va='top')
    fig.text(.01, .01, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
    save(fig, 'acceso-lexico.png')

# U11 · vía muerta vs restricciones
if want('via-muerta'):
    fig, ax = canvas(8.4, 4.0, 15, 7.4); ax.set_xlim(0, 15.6)
    ax.text(3.6, 7.0, 'Modelo de vía muerta (Frazier)', ha='center', fontsize=9.4, weight='bold', color=P)
    for i, (t, c) in enumerate([('1. Sintaxis: una sola estructura\n(adjunción mínima, cierre tardío)', P), ('2. Interpretación semántica\ny contextual', G), ('3. Reanálisis si hay conflicto', A)]):
        box(ax, 3.6, 5.7 - i * 1.6, 6.2, 1.15, t, c, 8.2)
        if i < 2: arr(ax, (3.6, 5.1 - i * 1.6), (3.6, 4.7 - i * 1.6))
    ax.text(11.2, 7.0, 'Modelos de restricciones', ha='center', fontsize=9.4, weight='bold', color=V)
    for i, t in enumerate(['Frecuencia\nléxica', 'Semántica\n(animacidad)', 'Contexto\nreferencial', 'Prosodia']):
        x = 8.3 + (i % 2) * 5.8 if False else [8.5, 14.0, 8.5, 14.0][i]; y = [5.8, 5.8, 3.4, 3.4][i]
        box(ax, x, y, 2.6, 1.0, t, SOFT, 8, tc=INK, ec=V)
        arr(ax, (x + (1.35 if x < 11 else -1.35), y), (11.2 - (.9 if x < 11 else -.9), 4.6), c=V)
    box(ax, 11.2, 4.6, 1.8, 1.0, 'En\nparalelo', V, 8.2)
    box(ax, 7.5, .75, 14.4, 1.05, 'En español: «Alguien disparó contra el criado de la actriz que estaba en el balcón» → se prefiere que estuviera EL CRIADO\n(adjunción alta; Cuetos y Mitchell, 1988), al contrario de lo que predice el cierre tardío', '#E6EEF4', 7.8, tc=INK, bold=False)
    note(ax, 'Esquema ilustrativo', -.03)
    save(fig, 'via-muerta.png')

# U11 · ERP
if want('erp'):
    t = np.linspace(0, 900, 500)
    def bump(c, w, a): return a * np.exp(-((t - c) ** 2) / (2 * w ** 2))
    base = bump(100, 30, 1.5) - bump(180, 35, 2.0)
    fig, ax = plt.subplots(figsize=(6.4, 3.2))
    ax.plot(t, base, color=INK, lw=2, label='Correcta')
    ax.plot(t, base - bump(400, 70, 4), color=A, lw=2, label='Anomalía semántica')
    ax.plot(t, base + bump(620, 110, 3.6), color=P, lw=2, label='Anomalía sintáctica')
    ax.invert_yaxis(); ax.axhline(0, color=MUTE, lw=.6)
    ax.text(400, -4.6, 'N400', ha='center', color=A, weight='bold', fontsize=9); ax.text(620, 4.3, 'P600', ha='center', color=P, weight='bold', fontsize=9)
    ax.set_xlabel('Tiempo desde la palabra crítica (ms)'); ax.set_ylabel('Amplitud (negativo arriba)'); ax.set_yticks([])
    ax.legend(frameon=False, fontsize=7.8, loc='upper right'); clean(ax)
    note(ax, 'Esquema ilustrativo, no datos', -.3)
    save(fig, 'erp.png')

# U11 · discurso
if want('discurso'):
    fig, ax = canvas(7.6, 3.6, 14, 6.8); ax.set_xlim(0, 14.6)
    for i, (t, d, c) in enumerate([('Superficie', '«Lucía cerró la tienda\ny volvió a casa en bici»', MUTE), ('Texto base', 'CERRAR(Lucía, tienda)\nVOLVER(Lucía, casa, bici)', P), ('Modelo de situación', 'Lo que ocurre en el mundo descrito', G)]):
        y = 5.8 - i * 2.0; box(ax, 2.6, y, 4.2, 1.3, t, c, 9); ax.text(5.1, y, d, va='center', fontsize=8.2, color=INK, style='italic' if i < 2 else 'normal')
        if i < 2: arr(ax, (2.6, y - .7), (2.6, y - 1.3))
    for j, d in enumerate(['tiempo', 'espacio', 'causalidad', 'intencionalidad', 'protagonistas']):
        box(ax, 5.5 + j * 2.0, 1.0, 1.9, .75, d, Y, 7.2, tc=INK)
    ax.text(.3, .2, 'Se olvida pronto la superficie; dura el modelo de situación (Zwaan y Radvansky, 1998)', fontsize=7.4, color=MUTE)
    save(fig, 'discurso.png')

# U11 · afasias
if want('afasias'):
    fig, ax = canvas(8.6, 4.4, 16, 8.2)
    box(ax, 8, 7.6, 3.4, .8, '¿Habla fluente?', INK, 9)
    box(ax, 4, 6.1, 4.0, .8, 'NO fluente: ¿comprensión?', P, 8.2); box(ax, 12, 6.1, 4.0, .8, 'Fluente: ¿comprensión?', G, 8.2)
    arr(ax, (7, 7.2), (4.6, 6.5)); arr(ax, (9, 7.2), (11.4, 6.5))
    leaves = [(2, 'buena', [('Broca', 'repetición mala'), ('Transcortical\nmotora', 'repetición BUENA')]),
              (6, 'mala', [('Global', 'repetición mala'), ('Transcortical\nmixta', 'repetición BUENA')]),
              (10, 'buena', [('Conducción', 'repetición MUY mala'), ('Anómica', 'repetición buena')]),
              (14, 'mala', [('Wernicke', 'repetición mala'), ('Transcortical\nsensorial', 'repetición BUENA')])]
    for x, comp, ls in leaves:
        par = 4 if x < 8 else 12
        ax.text(x, 4.75, f'comprensión {comp}', ha='center', fontsize=7.6, color=INK); arr(ax, (par + (x - par) * .2, 5.7), (x, 5.0))
        for k, (n, r) in enumerate(ls):
            xx = x - .95 + k * 1.9; c = A if 'BUENA' not in r else Y
            box(ax, xx, 3.4, 1.8, 1.25, n, c, 7.6, tc='white' if c == A else INK); ax.text(xx, 2.55, r, ha='center', va='top', fontsize=6.6, color=INK)
            arr(ax, (x, 4.55), (xx, 4.05), lw=1)
    ax.text(8, 1.2, 'Regla: «transcortical» = repetición conservada. La anomia aparece en casi todas.', ha='center', fontsize=8.2, color=A, weight='bold')
    note(ax, 'Esquema simplificado de la clasificación de Boston; los casos reales suelen ser mixtos', -.02)
    save(fig, 'afasias.png')

# U12 · Levelt
if want('levelt'):
    fig, ax = canvas(7.8, 4.6, 14, 9)
    box(ax, 4, 8.0, 5, 1.1, 'CONCEPTUALIZADOR\nintención → mensaje preverbal', V, 8.6)
    box(ax, 4, 5.4, 5, 2.0, 'FORMULADOR\n· codificación gramatical (lemas)\n· codificación fonológica (formas)\n→ plan fonético', P, 8.4)
    box(ax, 4, 2.8, 5, 1.0, 'ARTICULADOR', G, 8.8)
    box(ax, 4, 1.0, 3.2, .8, 'Habla abierta', INK, 8.6)
    box(ax, 10.6, 5.4, 3.4, 1.4, 'LÉXICO MENTAL\nlemas · formas', Y, 8.4, tc=INK)
    box(ax, 10.6, 2.0, 3.4, 1.1, 'Sistema de\ncomprensión', MUTE, 8.4)
    box(ax, 10.6, 8.0, 3.4, 1.0, 'Monitor', A, 8.6)
    arr(ax, (4, 7.4), (4, 6.45)); arr(ax, (4, 4.35), (4, 3.35)); arr(ax, (4, 2.25), (4, 1.45))
    arr(ax, (8.85, 5.4), (6.6, 5.4)); arr(ax, (6.6, 5.0), (8.85, 5.0))
    arr(ax, (5.7, 1.0), (8.85, 1.8), c=MUTE); arr(ax, (6.6, 4.6), (8.85, 2.3), c=MUTE, ls='--')
    arr(ax, (10.6, 2.6), (10.6, 7.45), c=A); arr(ax, (8.85, 8.0), (6.6, 8.0), c=A)
    ax.text(12.4, 4.0, 'bucle\ninterno\ny externo', fontsize=7.4, color=A)
    note(ax, 'Esquema simplificado del modelo de Levelt (1989)', -.02)
    save(fig, 'levelt.png')

# U12 · tiempos
if want('tiempos'):
    fig, ax = plt.subplots(figsize=(7.0, 2.6))
    seg = [(0, 175, 'Preparación\nconceptual', V), (175, 250, 'Lema', P), (250, 330, 'Código\nfonológico', G), (330, 455, 'Silabificación', Y), (455, 600, 'Codificación\nfonética', A)]
    for a_, b_, tx, c in seg:
        ax.barh(0, b_ - a_, left=a_, color=c, height=.6, edgecolor='white'); ax.text((a_ + b_) / 2, 0, tx, ha='center', va='center', fontsize=7.4, color='white' if c != Y else INK, weight='bold')
    ax.set_xlim(0, 640); ax.set_ylim(-.5, .9); ax.set_xticks([0, 175, 250, 330, 455, 600]); ax.set_yticks([]); ax.set_xlabel('ms desde la presentación del dibujo'); clean(ax); ax.spines['left'].set_visible(False)
    ax.text(600, .4, 'inicio de la\narticulación', fontsize=7.4, color=INK, ha='center', va='bottom')
    fig.subplots_adjust(left=.03, right=.97, top=.95, bottom=.32)
    fig.text(.03, .03, 'Estimaciones de Indefrey y Levelt (2004) para una latencia de ≈600 ms', fontsize=7.4, color=MUTE)
    fig.savefig(f'{OUT}/tiempos.png', dpi=200); plt.close(fig); print('ok tiempos.png')

# U13 · turnos
if want('turnos'):
    fig, ax = plt.subplots(figsize=(6.6, 3.1))
    x = np.linspace(-1000, 1500, 500); y = np.exp(-((x - 100) ** 2) / (2 * 230 ** 2)) + .25 * np.exp(-((x - 600) ** 2) / (2 * 400 ** 2))
    ax.fill_between(x, y, color='#D3E0EA'); ax.plot(x, y, color=P, lw=2)
    ax.axvspan(0, 200, color=G, alpha=.25); ax.text(100, 1.13, 'moda: 0–200 ms', ha='center', fontsize=8, color=G, weight='bold')
    for v, t in [(7, 'japonés ≈7 ms'), (470, 'danés ≈470 ms')]:
        ax.axvline(v, color=A, ls='--', lw=1); ax.text(v - 20 if v < 100 else v + 15, .55, t, fontsize=7.6, color=A, ha='right' if v < 100 else 'left')
    ax.annotate('', xy=(600, .0), xytext=(0, .0), arrowprops=dict(arrowstyle='<->', color=INK)); ax.text(300, -.05, va='top', s= 'planificar una palabra ≈600 ms', ha='center', fontsize=7.6, color=INK)
    ax.set_xlabel('Tiempo entre el final de un turno y el inicio del siguiente (ms)  · negativo = solapamiento'); ax.set_yticks([]); ax.set_ylim(-.24, 1.25); clean(ax)
    note(ax, 'Forma esquemática; medias anotadas de Stivers et al. (2009), 10 lenguas', -.3)
    save(fig, 'turnos.png')

# U13 · cortesía
if want('cortesia'):
    fig, ax = canvas(7.4, 3.6, 13, 6.6); ax.set_xlim(0, 14.6)
    st = [('1. Abierta, sin compensación', '«Préstame tus apuntes»', P), ('2. Cortesía positiva', '«Tú que tomas unos apuntes geniales…»', G), ('3. Cortesía negativa', '«Perdona, ¿podrías dejarme…?»', Y),
          ('4. Encubierta (off record)', '«Vaya, no tengo apuntes de ayer…»', V), ('5. No realizar el acto', '(no pedirlos)', MUTE)]
    for i, (t, e, c) in enumerate(st):
        x = 1.6 + i * 2.0; y = .9 + i * 1.05
        box(ax, x + 1.6, y, 3.9, .8, t, c, 7.4, tc='white' if c != Y else INK); ax.text(x + 3.7, y, e, va='center', fontsize=7.2, color=INK, style='italic')
    arr(ax, (.4, .5), (.4, 6.0), c=A, lw=2); ax.text(.65, 6.0, 'más riesgo para la imagen\n(distancia + poder + imposición)', fontsize=7.4, color=A, va='top')
    note(ax, 'Esquema basado en Brown y Levinson (1987)', -.03)
    save(fig, 'cortesia.png')

# U14 · Whorf
if want('whorf'):
    fig, ax = canvas(8.4, 3.6, 16, 6.6)
    ax.add_patch(FancyArrowPatch((.6, 4.6), (15.4, 4.6), arrowstyle='<|-|>', mutation_scale=16, color=INK, lw=2))
    for x, t in [(1.6, 'Determinismo\n(versión fuerte)'), (8, 'Relativismo débil'), (14.4, 'Universalismo')]:
        ax.text(x, 5.6, t, ha='center', fontsize=8.8, weight='bold', color=INK)
    ax.text(1.6, 3.7, 'descartado', ha='center', fontsize=8, color=A, style='italic')
    for x, y, t, c in [(5.0, 2.9, 'Winawer et al. (2007)\nazules rusos', P), (5.0, 1.4, 'Martinovic et al. (2020)\nno lo replica', MUTE),
                       (8.2, 2.9, 'Pirahã y números\n(Gordon; Frank et al.)', P), (8.2, 1.4, 'Levinson\nmarcos espaciales', P),
                       (11.4, 2.9, 'Boroditsky (2001)\ntiempo en mandarín', MUTE), (11.4, 1.4, 'réplicas fallidas\n(Chen; January y Kako)', MUTE),
                       (14.4, 2.9, 'Berlin y Kay (1969)\nuniversales del color', G), (14.4, 1.4, 'Heider (1972)\nlos dani', G)]:
        box(ax, x, y, 2.9, 1.15, t, c, 7.4)
    note(ax, 'Esquema ilustrativo; los recuadros grises indican resultados no replicados', -.03)
    save(fig, 'whorf.png')

# U15 · metaanálisis bilingüe
if want('bilingue-meta'):
    fig, ax = plt.subplots(figsize=(6.2, 2.4))
    for y, (g, lo, hi, t, c) in enumerate([(-.08, -.17, .01, 'Corregido por sesgo de publicación', A), (.06, .01, .10, 'Sin corregir', P)]):
        ax.errorbar(g, y, xerr=[[g - lo], [hi - g]], fmt='s', color=c, ms=9, capsize=5, lw=2)
        ax.text(.2, y, f'g = {g:.2f} [{lo:.2f}; {hi:.2f}]'.replace('.', ',').replace('-', '−'), va='center', fontsize=8.6, color=INK)
    ax.axvline(0, color=INK, lw=1); ax.set_yticks([0, 1], ['Corregido por sesgo\nde publicación', 'Sin corregir']); ax.set_ylim(-.6, 1.6); ax.set_xlim(-.3, .45)
    ax.set_xticks([-.2, -.1, 0, .1, .2, .3, .4], ['−0,2', '−0,1', '0', '0,1', '0,2', '0,3', '0,4']); ax.set_xlabel('Ventaja bilingüe en funciones ejecutivas (g de Hedges)'); clean(ax)
    ax.set_title('Lehtonen et al. (2018): 152 estudios, 891 tamaños del efecto', fontsize=8.8)
    save(fig, 'bilingue-meta.png')

# U16 · proxemia
if want('proxemia'):
    fig, ax = canvas(6.4, 4.0, 10, 6.4)
    for r, c, t, d in [(3.0, '#E6EEF4', 'Pública', '> 3,6 m'), (2.25, '#D3E0EA', 'Social', '1,2–3,6 m'), (1.45, '#A9C1D3', 'Personal', '45 cm–1,2 m'), (.7, P, 'Íntima', '0–45 cm')]:
        ax.add_patch(Circle((3.4, 3.2), r, fc=c, ec='white', lw=2)); ax.text(3.4, 3.2 + r - .38, f'{t}\n{d}', ha='center', va='center', fontsize=7.8, color='white' if c == P else INK, weight='bold')
    ax.add_patch(Circle((3.4, 3.2), .14, fc=A))
    ax.text(7.0, 4.6, 'Hall (1966), estadounidenses\nde clase media', fontsize=8, color=INK)
    ax.text(7.0, 2.6, 'Las distancias cambian con\nla cultura, la relación\ny la situación', fontsize=8, color=A, style='italic')
    note(ax, 'Esquema ilustrativo (no a escala)', .0)
    save(fig, 'proxemia.png')
