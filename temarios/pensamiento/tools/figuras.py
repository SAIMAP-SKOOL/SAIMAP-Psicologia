"""Figuras propias del temario de Psicología del Pensamiento. python3 tools/figuras.py → img/*"""
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



# Plantilla de figura: copiar este archivo a temarios/<id>/tools/figuras.py y añadir un bloque por figura.
# if want('nombre'):
#     fig, ax = canvas(7.4, 3, 12, 5)
os.makedirs(OUT, exist_ok=True)


def bars(ax, labels, vals, cols, fmt=pct, ymax=100, fs=9):
    ax.bar(range(len(vals)), vals, color=cols, width=.62)
    for i, v in enumerate(vals): ax.text(i, v + ymax * .02, fmt(v), ha='center', fontsize=fs, weight='bold', color=INK)
    ax.set_xticks(range(len(vals)), labels, fontsize=8.2); ax.set_ylim(0, ymax); clean(ax)


# U1 · línea del tiempo
if want('hitos'):
    fig, ax = canvas(8.6, 3.6, 22, 7)
    H = [(1879, 'Wundt\nlaboratorio de Leipzig', P), (1904, 'Würzburg\n(1901–1907)', V), (1913, 'Watson\nconductismo', MUTE),
         (1934, 'Vygotsky\nPensamiento y lenguaje', G), (1945, 'Duncker\nfijeza funcional', Y), (1956, 'Logic Theorist\nrevolución cognitiva', P),
         (1972, 'Newell y Simon\nHuman Problem Solving', P), (1977, 'Tversky y Kahneman\n(1974, 1979)', A), (1983, 'Johnson-Laird\nmodelos mentales', V),
         (2015, 'Réplicas a gran escala\n(2014–2016)', G)]
    x0, x1 = 1870, 2025
    X = lambda yr: 1 + (yr - x0) / (x1 - x0) * 20
    ax.plot([1, 21], [3.5, 3.5], color=INK, lw=2)
    LV = {1879: 5.6, 1904: 1.5, 1913: 5.6, 1934: 1.5, 1945: 5.6, 1956: 0.3, 1972: 6.8, 1977: 1.5, 1983: 5.4, 2015: 5.6}
    DX = {1983: .7, 1956: -.2}
    for i, (yr, t, c) in enumerate(H):
        x = X(yr); y = LV[yr]; up = y > 3.5
        ax.plot([x, x], [3.5, y + (-.6 if up else .6)], color=c, lw=1.2)
        ax.add_patch(Circle((x, 3.5), .16, color=c, zorder=3))
        lab = {1904: '1901–07', 1977: '1974–79', 2015: '2014–16'}.get(yr, str(yr))
        ax.text(x, 3.5 + (.45 if not up else -.45), lab, ha='center', va='center', fontsize=7.4, color=MUTE)
        ax.text(x + DX.get(yr, 0), y, t, ha='center', va='center', fontsize=7.6, color=c if c != MUTE else INK, weight='bold', linespacing=1.2)
    ax.set_ylim(-.5, 7.5)
    save(fig, 'hitos.png')

# U3 · protocolos verbales
if want('protocolos'):
    fig, ax = canvas(7.6, 3.4, 12, 6)
    L = [('Nivel 1', 'Verbalizar lo que ya está\nen forma verbal\n(«diez por tres, treinta…»)', G, 'No altera el proceso'),
         ('Nivel 2', 'Recodificar en palabras\ncontenidos no verbales\n(imágenes, posiciones)', G, 'No altera la secuencia;\npuede hacerlo más lento'),
         ('Nivel 3', 'Explicar o justificar\npor qué se hace algo', A, 'Altera el proceso')]
    for i, (n, d, c, e) in enumerate(L):
        x = 2 + i * 4
        box(ax, x, 4.6, 3.4, .8, n, c, 10)
        box(ax, x, 3.0, 3.6, 1.7, d, SOFT, 8.2, tc=INK, bold=False, ec=MUTE)
        ax.text(x, 1.45, e, ha='center', va='center', fontsize=8.4, color=c, weight='bold')
    ax.text(6, .45, 'Protocolos verbales concurrentes según Ericsson y Simon (1980; 1993)', ha='center', fontsize=8, color=MUTE, style='italic')
    note(ax, y=-.06)
    save(fig, 'protocolos.png')

# U4 · conceptos
if want('conceptos'):
    fig, axs = plt.subplots(1, 3, figsize=(8.4, 3.7))
    for ax in axs: ax.set_xlim(0, 10); ax.set_ylim(0, 10); ax.axis('off'); ax.set_aspect('equal')
    a = axs[0]; a.add_patch(Rectangle((1.5, 2), 7, 6, fc='#E6EEF4', ec=P, lw=2))
    for (x, y) in [(3, 6), (5, 4.5), (7, 6.5), (4, 3.2), (6.5, 3.5)]: a.add_patch(Circle((x, y), .45, color=P))
    a.add_patch(Circle((9.4, 5), .45, color=MUTE))
    a.set_title('Clásica\nrasgos necesarios y suficientes;\nlímite nítido', fontsize=8.6)
    a = axs[1]
    for r, al in [(4.2, .18), (2.9, .3), (1.6, .5)]: a.add_patch(Circle((5, 5), r, color=G, alpha=al, lw=0))
    a.text(5, 5, 'petirrojo', ha='center', va='center', fontsize=8.4, weight='bold', color=INK)
    a.text(5, 2.6, 'gallina', ha='center', fontsize=8, color=INK); a.text(5, 1.1, 'pingüino', ha='center', fontsize=8, color=INK)
    a.set_title('Prototipos (Rosch, 1975)\nestructura graduada:\nmás y menos típicos', fontsize=8.6)
    a = axs[2]
    pts = [(2.5, 7), (4, 8), (6.5, 7.5), (7.5, 5), (3, 4), (5.5, 3)]
    for (x, y) in pts: a.add_patch(Circle((x, y), .42, color=V))
    a.add_patch(Circle((5, 5.6), .5, fc='white', ec=A, lw=2)); a.text(5, 5.6, '?', ha='center', va='center', color=A, weight='bold')
    for (x, y) in pts: a.plot([5, x], [5.6, y], color=A, lw=.8, ls=':')
    a.set_title('Ejemplares\nse compara el caso nuevo\ncon casos almacenados', fontsize=8.6)
    fig.subplots_adjust(top=.76, bottom=.06)
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
    save(fig, 'conceptos.png')

# U5 · relatividad lingüística
if want('relatividad'):
    fig = plt.figure(figsize=(8.6, 3.4))
    ax = fig.add_axes([.02, .12, .55, .8]); ax.set_xlim(0, 12); ax.set_ylim(0, 6); ax.axis('off')
    ax.add_patch(FancyArrowPatch((.5, 4.2), (11.5, 4.2), arrowstyle='<|-|>', mutation_scale=14, color=INK, lw=1.6))
    ax.text(.5, 5.0, 'Determinismo\n(versión fuerte, abandonada)', fontsize=8.2, color=A, weight='bold', va='center')
    ax.text(11.5, 5.0, 'Influencia\n(versión débil, evidencia mixta)', fontsize=8.2, color=G, weight='bold', va='center', ha='right')
    for x, t, c in [(7.0, 'Número:\nlos numerales\ncomo herramienta', G), (10.3, 'Color:\nefectos\ncategoriales\nmodulados', P), (3.7, 'Tiempo vertical\nen mandarín:\nno replicado', A)]:
        ax.add_patch(Circle((x, 4.2), .17, color=c, zorder=3)); ax.text(x, 2.6, t, ha='center', va='center', fontsize=7.6, color=c, weight='bold')
    ax.text(0.5, .5, 'Esquema ilustrativo', fontsize=7.4, color=MUTE)
    b = fig.add_axes([.66, .2, .32, .65])
    bars(b, ['Emparejamiento\nuno a uno', 'Tareas con\nmemoria'], [54, 24], [G, A], fmt=lambda v: f'{v}/56', ymax=60)
    b.set_ylabel('Ensayos correctos (de 56)', fontsize=8); b.set_title('Pirahã (Frank et al., 2008)', fontsize=9)
    fig.savefig(f'{OUT}/relatividad.png', dpi=200); plt.close(fig); print('ok relatividad.png')

# U6 · procesamiento dual
if want('dual'):
    fig, ax = canvas(8.4, 4.4, 14, 8)
    box(ax, 3.6, 6.4, 6.2, 1.0, 'Procesos Tipo 1', Y, 11, tc=INK)
    box(ax, 3.6, 4.8, 6.2, 1.9, 'Definitorio: autónomos, no requieren\nmemoria de trabajo\nCorrelatos: rápidos, alta capacidad,\na menudo inconscientes', SOFT, 8.2, tc=INK, bold=False, ec=MUTE)
    box(ax, 10.4, 6.4, 6.2, 1.0, 'Procesos Tipo 2', P, 11)
    box(ax, 10.4, 4.8, 6.2, 1.9, 'Definitorio: memoria de trabajo y\ndesacoplamiento cognitivo\nCorrelatos: lentos, capacidad limitada,\nconscientes', SOFT, 8.2, tc=INK, bold=False, ec=MUTE)
    box(ax, 10.4, 2.4, 3.0, 1.1, 'Mente reflexiva\n(disposiciones)', V, 8.4)
    box(ax, 13.0, 2.4, 1.9, 1.1, 'Mente\nalgorítmica\n(capacidad)', G, 7.6)
    arr(ax, (8.9, 2.4), (6.7, 4.0), c=V, rad=-.2); ax.text(6.0, 2.2, '¿intervenir y\ncorregir la\nrespuesta intuitiva?', fontsize=7.6, color=V, ha='center')
    ax.text(7, .55, 'Debate: un sistema único (Kruglanski y Gigerenzer, 2011) o un modelo híbrido con «lógica intuitiva» (De Neys)', ha='center', fontsize=7.8, color=A)
    note(ax, 'Esquema basado en Evans y Stanovich (2013), no datos', y=-.04)
    save(fig, 'dual.png')

# U6 · CRT
if want('crt'):
    fig, ax = plt.subplots(figsize=(6.2, 3.2)); x = np.arange(4); w = .38
    g = [33, 28, 23, 17]; m = [7, 16, 30, 48]
    ax.bar(x - w / 2, g, w, color=MUTE, label='Muestra global (N = 3.428)'); ax.bar(x + w / 2, m, w, color=P, label='MIT (n = 61)')
    for i in range(4):
        ax.text(i - w / 2, g[i] + 1, f'{g[i]} %', ha='center', fontsize=8, color=INK); ax.text(i + w / 2, m[i] + 1, f'{m[i]} %', ha='center', fontsize=8, color=INK, weight='bold')
    ax.set_xticks(x, ['0', '1', '2', '3']); ax.set_xlabel('Aciertos en el CRT (de 3)'); ax.set_ylabel('% de participantes'); ax.set_ylim(0, 56)
    ax.legend(frameon=False, fontsize=8); clean(ax); ax.set_title('Datos de Frederick (2005)', fontsize=9)
    save(fig, 'crt.png')

# U7 · Linda
if want('linda'):
    fig, ax = canvas(7.0, 3.2, 12, 5.6); ax.set_aspect('equal')
    from matplotlib.patches import Ellipse
    ax.add_patch(Ellipse((3.6, 2.8), 6.4, 4.6, fc='#E6EEF4', ec=P, lw=2)); ax.text(1.6, 4.6, 'Cajeras', color=P, weight='bold', fontsize=9.5)
    ax.add_patch(Ellipse((4.4, 2.4), 3.0, 2.0, fc=A, alpha=.85, ec='none')); ax.text(4.4, 2.4, 'cajeras\nfeministas', ha='center', va='center', color='white', fontsize=8.6, weight='bold')
    ax.text(9.6, 3.6, 'P(A y B) ≤ P(A)', ha='center', fontsize=12, color=INK, weight='bold')
    ax.text(9.6, 2.3, 'el 85 % de 142 estudiantes\njuzgó más probable\n«cajera y feminista»', ha='center', fontsize=8.6, color=A, weight='bold')
    ax.text(9.6, .8, 'Tversky y Kahneman (1983)', ha='center', fontsize=7.8, color=MUTE)
    save(fig, 'linda.png')

# U7 · taxi
if want('taxi'):
    fig, ax = canvas(7.8, 3.6, 14, 6.4)
    box(ax, 1.4, 3.2, 2.2, .9, '100 taxis', INK, 9)
    box(ax, 5, 5, 2.6, .9, '15 azules', P, 9); box(ax, 5, 1.4, 2.6, .9, '85 verdes', G, 9)
    arr(ax, (2.5, 3.4), (3.7, 4.8)); arr(ax, (2.5, 3.0), (3.7, 1.6))
    box(ax, 9.2, 5.6, 3.4, .8, '12 dice «azul» (80 %)', P, 8.4); box(ax, 9.2, 4.4, 3.4, .8, '3 dice «verde»', SOFT, 8.4, tc=INK, ec=MUTE)
    box(ax, 9.2, 2.0, 3.4, .8, '17 dice «azul» (20 %)', A, 8.4); box(ax, 9.2, .8, 3.4, .8, '68 dice «verde»', SOFT, 8.4, tc=INK, ec=MUTE)
    for y in (5.6, 4.4): arr(ax, (6.3, 5.0), (7.5, y))
    for y in (2.0, .8): arr(ax, (6.3, 1.4), (7.5, y))
    ax.text(12.6, 3.6, 'P(azul | «azul»)\n= 12 / (12 + 17)\n≈ 0,41', ha='center', va='center', fontsize=9.4, weight='bold', color=INK)
    ax.text(12.6, 2.0, 'respuesta típica\n≈ 0,80 (aprox.)', ha='center', fontsize=8.2, color=A)
    note(ax, 'Esquema numérico del problema del taxi', y=-.04)
    save(fig, 'taxi.png')

# U8 · Wallas
if want('wallas'):
    fig, ax = canvas(8.4, 2.9, 16, 5)
    E = [('Preparación', 'trabajo consciente\nsobre el problema', P), ('Incubación', 'se deja el problema;\nno se trabaja en él', V), ('Iluminación', 'la idea aparece\nde forma súbita', Y), ('Verificación', 'se comprueba y\ndesarrolla la idea', G)]
    for i, (t, d, c) in enumerate(E):
        x = 2 + i * 4; box(ax, x, 3.6, 3.2, 1.0, t, c, 10, tc='white' if c != Y else INK)
        ax.text(x, 2.2, d, ha='center', va='center', fontsize=8.2, color=INK)
        if i < 3: arr(ax, (x + 1.7, 3.6), (x + 2.3, 3.6))
    ax.text(6, .6, 'Sio y Ormerod (2009): 117 estudios; efecto de la incubación d = 0,29 (ponderado)', ha='center', fontsize=8, color=V, weight='bold')
    note(ax, 'Etapas de Wallas (1926). Esquema ilustrativo', y=-.06)
    save(fig, 'wallas.png')

# U8 · analogía
if want('analogia'):
    fig = plt.figure(figsize=(7.8, 3.2))
    ax = fig.add_axes([.02, .05, .52, .9]); ax.set_xlim(0, 10); ax.set_ylim(0, 6); ax.axis('off')
    box(ax, 2.4, 4.8, 4.2, 1.0, 'Fortaleza (análogo)', Y, 9, tc=INK)
    ax.text(2.4, 3.3, 'Pequeños grupos de soldados\nllegan por varios caminos\ny convergen en la fortaleza', ha='center', va='center', fontsize=7.8, color=INK)
    box(ax, 7.6, 4.8, 4.2, 1.0, 'Radiación (Duncker)', P, 9)
    ax.text(7.6, 3.3, 'Rayos débiles desde varias\ndirecciones convergen\nen el tumor', ha='center', va='center', fontsize=7.8, color=INK)
    arr(ax, (4.6, 4.8), (5.4, 4.8), c=A); ax.text(5, 1.4, 'Se transfiere la estructura\n(dividir y converger),\nno los rasgos superficiales', ha='center', fontsize=8, color=A, weight='bold')
    b = fig.add_axes([.64, .2, .33, .65])
    bars(b, ['Historia\n+ pista', 'Historia\nsin pista'], [92, 20], [G, A], ymax=100)
    b.set_ylabel('% que resuelve', fontsize=8); b.set_title('Gick y Holyoak (1980, Exp. IV)', fontsize=8.6)
    fig.savefig(f'{OUT}/analogia.png', dpi=200); plt.close(fig); print('ok analogia.png')

# U9 · Euler
if want('euler'):
    fig, axs = plt.subplots(1, 2, figsize=(7.4, 3.2))
    for a in axs: a.set_xlim(0, 10); a.set_ylim(0, 8); a.axis('off'); a.set_aspect('equal')
    for k, a in enumerate(axs):
        a.add_patch(Circle((4.5, 4), 3.2, fc='#E6EEF4', ec=P, lw=2)); a.text(2.0, 6.6, 'B', color=P, weight='bold', fontsize=11)
        a.add_patch(Circle((3.6, 4), 1.4, fc=G, alpha=.8, ec='none')); a.text(3.6, 4, 'A', ha='center', va='center', color='white', weight='bold', fontsize=11)
    axs[0].add_patch(Circle((5.6, 4), 1.6, fc=A, alpha=.45, ec=A)); axs[0].text(6.4, 4.6, 'C', color=A, weight='bold', fontsize=11)
    axs[0].set_title('Modelo 1: algunos A son C', fontsize=9)
    axs[1].add_patch(Circle((7.0, 4), 1.4, fc=A, alpha=.45, ec=A)); axs[1].text(7.3, 4.6, 'C', color=A, weight='bold', fontsize=11)
    axs[1].set_title('Modelo 2: ningún A es C', fontsize=9)
    fig.suptitle('«Todos los A son B; algunos B son C» ⇒ ¿«algunos A son C»?  No se sigue: inválido', fontsize=9.4, color=INK, weight='bold')
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
    save(fig, 'euler.png')

# U9 · sesgo de creencia
if want('creencia'):
    fig, ax = plt.subplots(figsize=(6.0, 3.2)); x = np.arange(2); w = .36
    cre = [89, 71]; inc = [56, 10]
    ax.bar(x - w / 2, cre, w, color=G, label='Conclusión creíble'); ax.bar(x + w / 2, inc, w, color=A, label='Conclusión increíble')
    for i in range(2):
        ax.text(i - w / 2, cre[i] + 2, f'{cre[i]} %', ha='center', fontsize=9, weight='bold', color=INK); ax.text(i + w / 2, inc[i] + 2, f'{inc[i]} %', ha='center', fontsize=9, weight='bold', color=INK)
    ax.set_xticks(x, ['Argumento válido', 'Argumento inválido']); ax.set_ylim(0, 105); ax.set_ylabel('% que acepta la conclusión')
    ax.legend(frameon=False, fontsize=8, loc='upper right'); clean(ax)
    ax.set_title('Evans, Barston y Pollard (1983): media de 3 experimentos', fontsize=9)
    save(fig, 'creencia.png')

# U10 · condicionales
if want('condicionales'):
    fig, ax = plt.subplots(figsize=(6.2, 3.2))
    bars(ax, ['Modus ponens\n(válida)', 'Modus tollens\n(válida)', 'Afirmación del\nconsecuente\n(falacia)', 'Negación del\nantecedente\n(falacia)'], [97, 57, 44, 38], [G, G, A, A], fmt=lambda v: f'{v} %')
    ax.set_ylabel('% que acepta la inferencia'); ax.set_title('Condicionales abstractos (Oberauer, 2006)', fontsize=9)
    ax.text(3.4, 92, 'Valores orientativos:\nvarían con el material', ha='right', fontsize=7.6, color=MUTE)
    save(fig, 'condicionales.png')

# U10 · Wason
if want('wason'):
    fig, ax = canvas(8.6, 3.4, 18, 7)
    def card(x, y, t, ok, modal=False):
        ax.add_patch(FancyBboxPatch((x - .8, y - 1.1), 1.6, 2.2, boxstyle='round,pad=0.02,rounding_size=0.15', fc=G if ok else 'white', ec=Y if modal else INK, lw=3 if modal else 1.4))
        ax.text(x, y, t, ha='center', va='center', fontsize=12 if len(t) < 3 else 7.8, weight='bold', color='white' if ok else INK)
    ax.text(4.6, 6.4, 'Versión abstracta', ha='center', fontsize=9.6, weight='bold', color=INK)
    ax.text(4.6, 5.6, '«Si una carta tiene vocal por un lado,\ntiene número par por el otro»', ha='center', va='center', fontsize=8, color=INK)
    for i, (t, ok, m) in enumerate([('E', 1, 1), ('K', 0, 0), ('4', 0, 1), ('7', 1, 0)]): card(1.4 + i * 2.1, 3.0, t, ok, m)
    ax.text(13.4, 6.4, 'Versión de la edad para beber', ha='center', fontsize=9.6, weight='bold', color=INK)
    ax.text(13.4, 5.6, '«Si alguien bebe cerveza,\ndebe tener más de 18 años»', ha='center', va='center', fontsize=8, color=INK)
    for i, (t, ok) in enumerate([('cerveza', 1), ('refresco', 0), ('22 años', 0), ('16 años', 1)]): card(10.2 + i * 2.1, 3.0, t, ok)
    ax.add_patch(Rectangle((1.2, .5), .5, .35, fc=G)); ax.text(1.9, .67, 'cartas que hay que girar (p y no-q)', fontsize=8, va='center', color=INK)
    ax.add_patch(Rectangle((9.4, .5), .5, .35, fc='white', ec=Y, lw=2.5)); ax.text(10.1, .67, 'elección más frecuente en la versión abstracta (E y 4)', fontsize=8, va='center', color=INK)
    save(fig, 'wason.png')

# U10 · contenido en Wason
if want('wason-contenido'):
    fig, ax = plt.subplots(figsize=(6.6, 3.3))
    bars(ax, ['Abstracta\n(letras y números)', 'Wason y\nShapiro (1971)', 'Regla postal\n(Johnson-Laird\net al., 1972)', 'Edad para beber\n(Griggs y\nCox, 1982)'], [9, 62.5, 81, 74], [MUTE, P, G, G], fmt=lambda v: '< 10 %' if v == 9 else ('≈ 74 %' if v == 74 else pct(v)))
    ax.set_ylabel('% de selecciones correctas'); ax.set_title('El contenido mejora la tarea de selección', fontsize=9)
    save(fig, 'wason-contenido.png')

# U10 · modelos mentales
if want('modelos-mentales'):
    fig, ax = canvas(7.8, 3.3, 14, 6)
    ax.text(3.4, 5.4, 'Modelo inicial', ha='center', fontsize=9.6, weight='bold', color=P)
    box(ax, 3.4, 4.0, 3.2, .9, '[p]   q', P, 11); box(ax, 3.4, 2.8, 3.2, .9, '…', SOFT, 12, tc=INK, ec=MUTE)
    ax.text(3.4, 1.6, 'basta para modus ponens\n(principio de verdad: solo\nlo que hace verdadera la regla)', ha='center', va='center', fontsize=7.8, color=INK)
    arr(ax, (5.4, 3.4), (8.0, 3.4), c=A); ax.text(6.7, 3.9, 'desplegar', ha='center', fontsize=8, color=A)
    ax.text(10.6, 5.4, 'Modelos completos', ha='center', fontsize=9.6, weight='bold', color=G)
    for i, t in enumerate(['p     q', '¬p    q', '¬p   ¬q']): box(ax, 10.6, 4.3 - i * 1.0, 3.2, .8, t, G, 10.5)
    ax.text(10.6, .9, 'necesarios para modus tollens:\n más modelos, más carga y más errores', ha='center', va='center', fontsize=7.8, color=INK)
    note(ax, 'Esquema basado en Johnson-Laird y Byrne (1991), no datos', y=-.05)
    save(fig, 'modelos-mentales.png')

# U11 · similitud-cobertura
if want('similitud-cobertura'):
    fig, axs = plt.subplots(1, 2, figsize=(7.6, 3.2))
    for a, (n2, x2, c, tt) in zip(axs, [('rinocerontes', 6.2, A, 'Argumento más débil'), ('hámsteres', 7.6, G, 'Argumento más fuerte')]):
        a.set_xlim(0, 10); a.set_ylim(0, 7); a.axis('off')
        a.add_patch(FancyBboxPatch((.3, .8), 9.4, 4.6, boxstyle='round,pad=0.02,rounding_size=0.4', fc='#E6EEF4', ec=P, lw=1.6)); a.text(.6, 4.9, 'MAMÍFEROS', color=P, fontsize=8.4, weight='bold')
        for (x, y, t) in [(2.4, 3.0, 'hipopótamos'), (x2 if n2 == 'rinocerontes' else x2, 3.0 if n2 == 'rinocerontes' else 2.0, n2)]:
            a.add_patch(Circle((x if t == 'hipopótamos' else (4.0 if n2 == 'rinocerontes' else 7.6), y), .9, color=c, alpha=.85))
            a.text(x if t == 'hipopótamos' else (4.0 if n2 == 'rinocerontes' else 7.6), y - 1.3, t, ha='center', fontsize=8, color=INK)
        a.set_title(f'{tt}\n(premisas {"parecidas: cubren poco" if n2 == "rinocerontes" else "diversas: cubren más"})', fontsize=8.6, color=c)
    fig.text(.01, .02, 'Esquema basado en Osherson et al. (1990), no datos', fontsize=7.4, color=MUTE)
    save(fig, 'similitud-cobertura.png')

# U11 · tarea 2-4-6
if want('tarea-246'):
    fig, ax = canvas(7.6, 3.4, 13, 6)
    from matplotlib.patches import Ellipse
    ax.add_patch(Ellipse((4.6, 3.1), 8.4, 5.0, fc='#E6EEF4', ec=P, lw=2)); ax.text(1.2, 5.0, 'Regla real: cualquier serie ascendente', color=P, fontsize=8.6, weight='bold')
    ax.add_patch(Ellipse((4.0, 2.7), 4.0, 2.2, fc=Y, alpha=.85, ec='none')); ax.text(4.0, 2.9, 'Hipótesis: «de 2 en 2»', ha='center', fontsize=8.4, weight='bold', color=INK)
    ax.text(4.0, 2.2, '8-10-12 → «sí»', ha='center', fontsize=8, color=INK)
    ax.text(6.9, 1.6, '1-5-20 → «sí»', ha='center', fontsize=8, color=G, weight='bold')
    ax.text(10.9, 3.6, '10-8-6 → «no»', ha='center', fontsize=8, color=INK)
    ax.text(10.9, 2.0, 'Probar solo series «+2»\nconfirma siempre\ny nunca revela el error', ha='center', va='center', fontsize=8, color=A, weight='bold')
    ax.text(6.5, .1, 'Wason (1960): 6 de 29 participantes aciertan sin anunciar antes reglas incorrectas', ha='center', fontsize=7.8, color=MUTE)
    save(fig, 'tarea-246.png')

# U11 · frecuencias naturales
if want('frecuencias'):
    fig, ax = canvas(8.2, 3.6, 15, 6.4)
    box(ax, 1.8, 3.2, 2.6, 1.0, '1.000 mujeres', INK, 9.4)
    box(ax, 5.8, 5.0, 2.8, .9, '10 con cáncer', A, 9); box(ax, 5.8, 1.4, 2.8, .9, '990 sin cáncer', G, 9)
    arr(ax, (3.1, 3.4), (4.4, 4.8)); arr(ax, (3.1, 3.0), (4.4, 1.6))
    box(ax, 10, 5.6, 3.0, .8, '8 positivo', A, 8.6); box(ax, 10, 4.5, 3.0, .8, '2 negativo', SOFT, 8.6, tc=INK, ec=MUTE)
    box(ax, 10, 2.0, 3.0, .8, '95 positivo', Y, 8.6, tc=INK); box(ax, 10, .9, 3.0, .8, '895 negativo', SOFT, 8.6, tc=INK, ec=MUTE)
    for y in (5.6, 4.5): arr(ax, (7.2, 5.0), (8.5, y))
    for y in (2.0, .9): arr(ax, (7.2, 1.4), (8.5, y))
    ax.text(13.5, 3.4, 'Positivas: 8 + 95 = 103\nCon cáncer: 8\n8 / 103 ≈ 7,8 %', ha='center', va='center', fontsize=9.2, weight='bold', color=INK)
    ax.text(7.5, .05, 'Problema de la mamografía en frecuencias naturales (Gigerenzer y Hoffrage, 1995)', ha='center', fontsize=7.8, color=MUTE)
    save(fig, 'frecuencias.png')

# U11 · formato bayesiano
if want('formato-bayes'):
    fig, ax = plt.subplots(figsize=(6.0, 3.2)); x = np.arange(2); w = .36
    p = [16, 28]; f = [46, 50]
    ax.bar(x - w / 2, p, w, color=MUTE, label='Formato de probabilidades'); ax.bar(x + w / 2, f, w, color=G, label='Frecuencias naturales')
    for i in range(2):
        ax.text(i - w / 2, p[i] + 1.2, f'{p[i]} %', ha='center', fontsize=9, color=INK); ax.text(i + w / 2, f[i] + 1.2, f'{f[i]} %', ha='center', fontsize=9, weight='bold', color=INK)
    ax.set_xticks(x, ['Menú estándar', 'Menú corto']); ax.set_ylim(0, 62); ax.set_ylabel('% de respuestas bayesianas')
    ax.legend(frameon=False, fontsize=8, loc='upper left'); clean(ax); ax.set_title('Gigerenzer y Hoffrage (1995)', fontsize=9)
    save(fig, 'formato-bayes.png')

# U13 · nueve puntos
if want('nueve-puntos'):
    fig, axs = plt.subplots(1, 2, figsize=(5.6, 2.8))
    for a in axs:
        a.set_xlim(-1.6, 3.6); a.set_ylim(-1.6, 3.6); a.axis('off'); a.set_aspect('equal')
        for i in range(3):
            for j in range(3): a.add_patch(Circle((i, j), .13, color=INK, zorder=3))
    axs[0].set_title('Unir los 9 puntos con\n4 rectas sin levantar el lápiz', fontsize=8.6)
    PATH = [(0, 0), (0, 3), (3, 0), (0, 0), (2, 2)]
    axs[1].plot([p[0] for p in PATH], [p[1] for p in PATH], color=A, lw=2.2, zorder=2)
    axs[1].add_patch(Circle(PATH[0], .2, fc='none', ec=G, lw=2, zorder=4))
    axs[1].set_title('Solución: las líneas salen\ndel «cuadrado» imaginario', fontsize=8.6)
    save(fig, 'nueve-puntos.png')

# U13 · vela
if want('vela'):
    fig = plt.figure(figsize=(7.8, 3.2))
    ax = fig.add_axes([.02, .08, .56, .86]); ax.set_xlim(0, 12); ax.set_ylim(0, 6.4); ax.axis('off')
    def vela(x, y): ax.add_patch(Rectangle((x - .18, y), .36, 1.3, fc='#F3E6C9', ec=INK, lw=1)); ax.add_patch(Circle((x, y + 1.5), .14, color=Y))
    ax.text(3, 6.0, 'Material', ha='center', fontsize=9.4, weight='bold', color=INK)
    ax.add_patch(Rectangle((1.0, 2.2), 1.6, 1.1, fc='#D9C3A0', ec=INK)); ax.text(1.8, 2.75, 'chinchetas', ha='center', fontsize=7, color=INK)
    ax.add_patch(Rectangle((3.0, 2.2), 1.4, 1.1, fc='#D9C3A0', ec=INK)); ax.text(3.7, 2.75, 'cerillas', ha='center', fontsize=7, color=INK)
    vela(5.2, 2.2); ax.text(3, 1.4, 'Fijar la vela a la pared\npara que alumbre sin gotear', ha='center', fontsize=7.8, color=INK)
    ax.text(9.2, 6.0, 'Solución', ha='center', fontsize=9.4, weight='bold', color=G)
    ax.add_patch(Rectangle((10.8, .6), .25, 5.0, fc=MUTE, ec='none')); ax.text(11.35, 3.2, 'pared', rotation=90, va='center', fontsize=7.4, color=MUTE)
    ax.add_patch(Rectangle((8.6, 2.6), 2.2, .9, fc='#D9C3A0', ec=INK)); ax.plot([10.6, 10.9], [3.05, 3.05], color=INK, lw=2)
    vela(9.7, 3.5); ax.text(9.2, 1.6, 'la caja vacía, clavada,\nsirve de repisa', ha='center', fontsize=7.8, color=INK)
    b = fig.add_axes([.67, .2, .3, .65])
    bars(b, ['Cajas\nvacías', 'Cajas\nllenas'], [86, 41], [G, A], fmt=lambda v: f'≈ {v} %')
    b.set_ylabel('% que resuelve', fontsize=8); b.set_title('Adamson (1952), aprox.', fontsize=8.6)
    fig.savefig(f'{OUT}/vela.png', dpi=200); plt.close(fig); print('ok vela.png')

# U13 · Luchins
if want('luchins'):
    fig, ax = canvas(7.8, 3.5, 14, 6.4)
    cols = ['Problema', 'Jarra A', 'Jarra B', 'Jarra C', 'Objetivo', 'Método']
    rows = [('Entrenamiento', 21, 127, 3, 100, 'B − A − 2C', P), ('Entrenamiento', 14, 163, 25, 99, 'B − A − 2C', P),
            ('Crítico', 23, 49, 3, 20, 'B − A − 2C  o  A − C', Y), ('Crítico', 15, 39, 3, 18, 'B − A − 2C  o  A + C', Y), ('Extinción', 28, 76, 3, 25, 'solo A − C', A)]
    xs = [1.4, 3.6, 5.0, 6.4, 7.9, 11.0]
    for x, c in zip(xs, cols): ax.text(x, 5.8, c, ha='center', fontsize=8.6, weight='bold', color=INK)
    for i, (t, a, b, c, o, m, col) in enumerate(rows):
        y = 4.9 - i * .95; ax.add_patch(Rectangle((.2, y - .38), 13.6, .76, fc=col, alpha=.14, ec='none'))
        for x, v in zip(xs, [t, a, b, c, o, m]): ax.text(x, y, str(v), ha='center', va='center', fontsize=8.2, color=INK, weight='bold' if x == xs[-1] else 'normal')
    ax.text(7, .1, 'Ejemplos ilustrativos de la estructura del procedimiento de Luchins (1942); capacidades en unidades de volumen', ha='center', fontsize=7.6, color=MUTE)
    save(fig, 'luchins.png')

# U13 · sueño e insight
if want('sueno-insight'):
    fig, ax = plt.subplots(figsize=(5.0, 3.1))
    bars(ax, ['Tras dormir', 'Tras vigilia'], [59.1, 22.7], [V, MUTE])
    ax.set_ylim(0, 75); ax.set_ylabel('% que descubre la regla oculta'); ax.set_title('Wagner et al. (2004): 13/22 frente a 5/22', fontsize=9)
    save(fig, 'sueno-insight.png')

# U13 · sentimiento de calor
if want('calor'):
    fig, ax = plt.subplots(figsize=(6.0, 3.2)); t = np.arange(1, 9)
    ax.plot(t, [2, 2.8, 3.6, 4.4, 5.2, 6.0, 6.8, 7.6], '-o', color=P, lw=2.2, label='Problemas algebraicos (no de insight)')
    ax.plot(t, [2, 2.1, 2.0, 2.2, 2.1, 2.3, 2.4, 9.2], '-o', color=A, lw=2.2, label='Problemas de insight')
    ax.set_xlabel('Intervalos hasta la solución'); ax.set_ylabel('«Calor» (cercanía percibida)'); ax.set_yticks([]); ax.set_xticks([])
    ax.legend(frameon=False, fontsize=8, loc='upper left'); clean(ax); ax.set_title('Metcalfe y Wiebe (1987)', fontsize=9)
    note(ax, y=-.18); save(fig, 'calor.png')

# U14 · Torre de Hanói (grafo de estados)
if want('hanoi'):
    import itertools
    C = {0: (0, 0), 1: (-1, -1.7320508), 2: (1, -1.7320508)}
    def pos(s, d, size, perm=(0, 1, 2)):
        # triángulo de Sierpinski: el disco mayor elige el subtriángulo; dentro, se intercambian las otras dos esquinas
        if d == 0: return (0, 0)
        c = perm[s[d - 1]]; o = [k for k in (0, 1, 2) if k != c]
        sw = {c: c, o[0]: o[1], o[1]: o[0]}
        sub = pos(s, d - 1, size / 2, tuple(sw[perm[k]] for k in range(3))); k = size / 2
        return (C[c][0] * k + sub[0], C[c][1] * k + sub[1])
    states = list(itertools.product(range(3), repeat=3))
    P2 = {s: pos(s, 3, 4) for s in states}
    def legal(a, b):
        diff = [i for i in range(3) if a[i] != b[i]]
        if len(diff) != 1: return False
        d = diff[0]
        return all(a[j] not in (a[d], b[d]) for j in range(d))
    fig, ax = plt.subplots(figsize=(7.2, 4.6)); ax.axis('off'); ax.set_aspect('equal')
    for a, b in itertools.combinations(states, 2):
        if legal(a, b): ax.plot([P2[a][0], P2[b][0]], [P2[a][1], P2[b][1]], color=MUTE, lw=1, zorder=1)
    opt = [(0, 0, 0), (2, 0, 0), (2, 1, 0), (1, 1, 0), (1, 1, 2), (0, 1, 2), (0, 2, 2), (2, 2, 2)]
    for a, b in zip(opt, opt[1:]): ax.plot([P2[a][0], P2[b][0]], [P2[a][1], P2[b][1]], color=A, lw=3, zorder=2)
    for s in states: ax.add_patch(Circle(P2[s], .16, color=P if s not in opt else A, zorder=3))
    ax.text(P2[(0, 0, 0)][0], P2[(0, 0, 0)][1] + .45, 'Inicio: los 3 discos en la varilla 1', ha='center', fontsize=8.4, color=INK, weight='bold')
    ax.text(P2[(2, 2, 2)][0] + .3, P2[(2, 2, 2)][1] - .45, 'Meta: los 3 en la varilla 3', ha='center', fontsize=8.4, color=INK, weight='bold')
    ax.text(-4.4, -7.0, '27 estados (nodos) · cada línea = un movimiento legal\nEn rojo, el camino mínimo: 7 movimientos (2³ − 1)', fontsize=8.2, color=INK)
    ax.set_xlim(-4.6, 4.6); ax.set_ylim(-7.6, .9)
    save(fig, 'hanoi.png')

# U15 · función de valor
if want('valor'):
    fig, ax = plt.subplots(figsize=(6.2, 4.0)); x = np.linspace(-100, 100, 401); a = .88
    v = lambda lam: np.where(x >= 0, np.abs(x) ** a, -lam * np.abs(x) ** a)
    ax.plot(x, v(2.25), color=A, lw=2.4, label='λ = 2,25 (Tversky y Kahneman, 1992)')
    ax.plot(x, v(1.955), color=P, lw=2.2, ls='--', label='λ = 1,955 (Brown et al., 2024)')
    ax.axhline(0, color=MUTE, lw=1); ax.axvline(0, color=MUTE, lw=1)
    ax.text(55, 15, 'Ganancias:\ncóncava\n(aversión al riesgo)', fontsize=8, color=INK); ax.text(-98, -40, 'Pérdidas: convexa\ny más pronunciada\n(búsqueda de riesgo)', fontsize=8, color=INK)
    ax.text(3, -150, 'punto de\nreferencia', fontsize=7.6, color=MUTE)
    ax.set_xticks([]); ax.set_yticks([]); ax.set_xlabel('Pérdidas  ←  resultado  →  Ganancias'); ax.set_ylabel('Valor subjetivo')
    ax.legend(frameon=False, fontsize=8, loc='upper left'); clean(ax)
    note(ax, 'Esquema con α = 0,88; solo λ cambia entre curvas', y=-.13); save(fig, 'valor.png')

# U15 · ponderación
if want('ponderacion'):
    fig, ax = plt.subplots(figsize=(4.6, 4.0)); p = np.linspace(0.001, .999, 300); g = .61
    w = p ** g / (p ** g + (1 - p) ** g) ** (1 / g)
    ax.plot([0, 1], [0, 1], color=MUTE, ls=':', lw=1.4, label='Ponderación objetiva')
    ax.plot(p, w, color=V, lw=2.4, label='Ponderación de la decisión')
    ax.annotate('probabilidades bajas\nsobreponderadas', (.05, w[15]), (.18, .45), fontsize=7.8, arrowprops=dict(arrowstyle='->', color=INK))
    ax.annotate('medias y altas\ninfraponderadas', (.7, .7 ** g / (.7 ** g + .3 ** g) ** (1 / g)), (.52, .9), fontsize=7.8, arrowprops=dict(arrowstyle='->', color=INK))
    ax.set_xlabel('Probabilidad objetiva'); ax.set_ylabel('Peso en la decisión'); ax.set_xlim(0, 1); ax.set_ylim(0, 1)
    ax.legend(frameon=False, fontsize=7.8, loc='lower right'); clean(ax); note(ax, y=-.2); save(fig, 'ponderacion.png')

# U15 · efecto marco
if want('marco'):
    fig, ax = plt.subplots(figsize=(6.0, 3.3)); x = np.arange(2); w = .36
    seg = [72, 22]; rie = [28, 78]
    ax.bar(x - w / 2, seg, w, color=G, label='Programa seguro'); ax.bar(x + w / 2, rie, w, color=A, label='Programa arriesgado')
    for i in range(2):
        ax.text(i - w / 2, seg[i] + 1.5, f'{seg[i]} %', ha='center', fontsize=9, weight='bold', color=INK); ax.text(i + w / 2, rie[i] + 1.5, f'{rie[i]} %', ha='center', fontsize=9, weight='bold', color=INK)
    ax.set_xticks(x, ['Marco de ganancia\n(«se salvarán 200»; n = 152)', 'Marco de pérdida\n(«morirán 400»; n = 155)'], fontsize=8.2)
    ax.set_ylim(0, 92); ax.set_ylabel('% que elige'); ax.legend(frameon=False, fontsize=8, loc='upper center', ncol=2); clean(ax)
    ax.set_title('Problema de la enfermedad asiática (Tversky y Kahneman, 1981)', fontsize=9)
    save(fig, 'marco.png')

# U16 · réplicas
if want('replicas'):
    fig, ax = plt.subplots(figsize=(7.6, 3.6))
    lab = ['Marco: original', 'Marco: Many Labs 1', 'Agotamiento del ego\n(RRR, 23 laboratorios)', 'Sobrecarga de elección\n(metaanálisis)', 'Nudges: sin corregir', 'Nudges: sesgo de\npublicación severo']
    val = [1.13, .60, .04, .02, .43, .08]; col = [MUTE, G, A, A, Y, A]
    y = np.arange(len(val))[::-1]
    ax.barh(y, val, color=col, height=.6)
    for yi, v in zip(y, val): ax.text(v + .02, yi, f'{v:.2f}'.replace('.', ','), va='center', fontsize=8.6, weight='bold', color=INK)
    ax.set_yticks(y, lab, fontsize=8); ax.set_xlim(0, 1.3); ax.set_xlabel('Tamaño del efecto (d de Cohen; D en sobrecarga)'); clean(ax)
    ax.axvline(.2, color=MUTE, ls=':', lw=1); ax.text(.21, 5.45, 'efecto pequeño (0,2)', fontsize=7.2, color=MUTE)
    ax.set_title('Klein et al. (2014); Hagger et al. (2016); Scheibehenne et al. (2010); Mertens et al. (2022)', fontsize=8.2)
    save(fig, 'replicas.png')
