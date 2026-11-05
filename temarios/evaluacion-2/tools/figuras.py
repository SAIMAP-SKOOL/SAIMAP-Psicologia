"""Figuras propias del temario de Evaluación Psicológica II. python3 tools/figuras.py → img/*"""
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
from scipy.stats import norm

def card(ax, x, y, w, h, title, body, c, fs=8.2):
    ax.add_patch(FancyBboxPatch((x, y), w, h, boxstyle='round,pad=0.02,rounding_size=0.12', fc='white', ec=c, lw=1.6))
    ax.add_patch(FancyBboxPatch((x, y + h - .55), w, .55, boxstyle='round,pad=0.02,rounding_size=0.12', fc=c, ec=c, lw=1.6))
    ax.text(x + w / 2, y + h - .28, title, ha='center', va='center', color='white', fontsize=fs + .6, weight='bold')
    ax.text(x + w / 2, y + (h - .55) / 2, body, ha='center', va='center', color=INK, fontsize=fs, linespacing=1.3)

def table(ax, x0, y0, colw, rowh, rows, head_c=P, fs=8, zebra=SOFT, bold_first=True):
    """rows[0] = cabecera. Dibuja de arriba (y0) hacia abajo."""
    y = y0
    for i, r in enumerate(rows):
        x = x0
        for j, (cell, w) in enumerate(zip(r, colw)):
            fc = head_c if i == 0 else (zebra if i % 2 == 0 else 'white')
            ax.add_patch(Rectangle((x, y - rowh), w, rowh, fc=fc, ec='#D5D9DC', lw=.6))
            ax.text(x + .12, y - rowh / 2, cell, va='center', ha='left', fontsize=fs, color='white' if i == 0 else INK,
                    weight='bold' if (i == 0 or (j == 0 and bold_first)) else 'normal', linespacing=1.15)
            x += w
        y -= rowh


def timeline(ax, items, y=2.0, x0=.6, x1=None, cols=None):
    cols = cols or [P, A, G, Y, V, T]
    n = len(items); x1 = x1 or ax.get_xlim()[1] - .6
    xs = np.linspace(x0, x1, n)
    ax.plot([x0 - .3, x1 + .3], [y, y], color=MUTE, lw=2, zorder=1)
    for k, (x, (yr, who, what)) in enumerate(zip(xs, items)):
        c = cols[k % len(cols)]; up = k % 2 == 0
        ax.scatter([x], [y], s=70, color=c, zorder=3)
        ax.text(x, y + (.45 if up else -.45), yr, ha='center', va='bottom' if up else 'top', fontsize=8.4, color=c, weight='bold')
        ax.text(x, y + (.95 if up else -.95), who, ha='center', va='bottom' if up else 'top', fontsize=7.6, color=INK, weight='bold')
        ax.text(x, y + (1.45 if up else -1.5), what, ha='center', va='bottom' if up else 'top', fontsize=6.9, color=MUTE, linespacing=1.15)

# U1 · mapa de técnicas
if want('tecnicas-mapa'):
    fig, ax = plt.subplots(figsize=(6.4, 4.4))
    pts = [('Técnicas\nsubjetivas', 5.2, 2.6, V), ('Autoinformes\npsicométricos', 8.6, 2.0, P), ('Técnicas\nobjetivas', 8.4, 8.2, G), ('Técnicas\nproyectivas', 1.8, 8.4, A)]
    for t, x, y, c in pts:
        ax.add_patch(Circle((x, y), 1.45, fc=c, alpha=.85)); ax.text(x, y, t, ha='center', va='center', color='white', fontsize=7.8, weight='bold')
    ax.set_xlim(0, 10.5); ax.set_ylim(0, 10.5); ax.set_aspect('equal')
    ax.set_xlabel('Estructuración del estímulo y de la respuesta →'); ax.set_ylabel('Enmascaramiento del objetivo →')
    ax.set_xticks([]); ax.set_yticks([]); clean(ax); note(ax, y=-.13)
    save(fig, 'tecnicas-mapa.png')

# U1 · psicofisiología
if want('psicofisiologia'):
    fig, ax = canvas(6.6, 5.2, 13.2, 10.4)
    sil = dict(fc='#E3E7EA', ec=MUTE, lw=1.2)
    ax.add_patch(Circle((6.6, 8.6), 1.05, **sil))
    ax.add_patch(FancyBboxPatch((5.3, 3.9), 2.6, 3.6, boxstyle='round,pad=0.05,rounding_size=0.5', **sil))
    ax.add_patch(FancyBboxPatch((4.2, 4.3), .9, 3.0, boxstyle='round,pad=0.05,rounding_size=0.4', **sil))
    ax.add_patch(FancyBboxPatch((8.1, 4.3), .9, 3.0, boxstyle='round,pad=0.05,rounding_size=0.4', **sil))
    ax.add_patch(FancyBboxPatch((5.5, .5), .9, 3.3, boxstyle='round,pad=0.05,rounding_size=0.4', **sil))
    ax.add_patch(FancyBboxPatch((6.8, .5), .9, 3.3, boxstyle='round,pad=0.05,rounding_size=0.4', **sil))
    pts = [((6.6, 9.55), (1.0, 9.7), 'EEG y potenciales evocados', 'actividad eléctrica cerebral (P300)', P),
           ((7.0, 8.75), (9.4, 9.7), 'Pupilometría', 'dilatación de la pupila', V),
           ((6.2, 8.1), (1.0, 7.5), 'EMG facial', 'tensión y expresión muscular', Y),
           ((6.2, 6.6), (1.0, 5.3), 'ECG y frecuencia cardiaca', 'ritmo y variabilidad cardiaca', A),
           ((7.0, 5.6), (9.4, 6.6), 'Respiración', 'banda torácica: ritmo y amplitud', T),
           ((8.55, 4.3), (9.4, 3.6), 'Actividad electrodérmica', 'sudoración en los dedos (conductancia)', G)]
    for (px, py), (tx, ty), t, d, c in pts:
        ax.scatter([px], [py], s=60, color=c, zorder=4, ec='white')
        ax.plot([px, tx + (2.0 if tx < 5 else 0)], [py, ty - .2], color=c, lw=1, ls=':')
        ax.text(tx, ty, t, fontsize=8.2, color=c, weight='bold', ha='left'); ax.text(tx, ty - .45, d, fontsize=7.2, color=INK, ha='left')
    ax.text(.2, .1, 'Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'psicofisiologia.png')

# U1 · polígrafo y tasa base
if want('poligrafo-tasa-base'):
    fig, ax = canvas(6.8, 3.6, 13.6, 7.2)
    ax.text(6.8, 6.8, 'Cribado de 1.000 personas · 10 culpables · sensibilidad = especificidad = 0,85', ha='center', fontsize=8.8, color=INK, weight='bold')
    cells = [('8,5', 'culpables\ndetectados', G, 3.2, 4.4), ('148,5', 'inocentes\nseñalados', A, 6.2, 4.4), ('1,5', 'culpables no\ndetectados', A, 3.2, 1.9), ('841,5', 'inocentes\ndescartados', G, 6.2, 1.9)]
    ax.text(3.2, 5.75, 'Culpables (10)', ha='center', fontsize=8.4, color=INK, weight='bold'); ax.text(6.2, 5.75, 'Inocentes (990)', ha='center', fontsize=8.4, color=INK, weight='bold')
    for v, t, c, x, y in cells:
        ax.add_patch(FancyBboxPatch((x - 1.3, y - 1.0), 2.6, 2.0, boxstyle='round,pad=0.02,rounding_size=0.1', fc=c, alpha=.18, ec=c))
        ax.text(x, y + .35, v, ha='center', fontsize=13, weight='bold', color=INK); ax.text(x, y - .45, t, ha='center', va='center', fontsize=7.4, color=INK)
    ax.text(1.3, 4.4, 'Positivo', ha='right', va='center', fontsize=8.2, weight='bold', color=INK); ax.text(1.3, 1.9, 'Negativo', ha='right', va='center', fontsize=8.2, weight='bold', color=INK)
    ax.text(10.6, 4.3, 'De cada 157 «positivos»,\nsolo unos 8–9 son culpables', ha='center', fontsize=8.6, color=A, weight='bold')
    ax.text(10.6, 2.9, 'VPP ≈ 8,5 / 157 ≈ 5 %', ha='center', fontsize=11, color=P, weight='bold')
    ax.text(.2, .1, 'Caso hipotético; cifras calculadas. Filas: resultado del polígrafo; columnas: situación real.', fontsize=7.0, color=MUTE)
    save(fig, 'poligrafo-tasa-base.png')

# U2 · diferencial semántico
if want('diferencial-semantico'):
    fig, ax = plt.subplots(figsize=(6.6, 4.4))
    pares = [('bueno', 'malo', 2, 'E'), ('agradable', 'desagradable', 3, 'E'), ('útil', 'inútil', 2, 'E'), ('fuerte', 'débil', 3, 'P'), ('grande', 'pequeño', 4, 'P'),
             ('pesado', 'ligero', 2, 'P'), ('activo', 'pasivo', 2, 'A'), ('rápido', 'lento', 3, 'A'), ('vivo', 'apagado', 4, 'A')]
    cmap = {'E': P, 'P': A, 'A': G}
    for i, (l, r, v, f) in enumerate(pares):
        y = len(pares) - i
        ax.plot([1, 7], [y, y], color='#D5D9DC', lw=1, zorder=1)
        for k in range(1, 8): ax.scatter([k], [y], s=22, color='white', ec=MUTE, zorder=2)
        ax.text(.6, y, l, ha='right', va='center', fontsize=8.4, color=INK); ax.text(7.4, y, r, ha='left', va='center', fontsize=8.4, color=INK)
        ax.scatter([v], [y], s=70, color=cmap[f], zorder=4)
    ys = [len(pares) - i for i in range(len(pares))]; ax.plot([p[2] for p in pares], ys, color=INK, lw=1.2, zorder=3)
    for f, lab, y in [('E', 'Evaluación', 8), ('P', 'Potencia', 5), ('A', 'Actividad', 2)]:
        ax.text(10.4, y, lab, color=cmap[f], fontsize=9, weight='bold', va='center')
    ax.set_xlim(-1.8, 11.8); ax.set_ylim(.3, 9.9); ax.axis('off')
    ax.set_title('Concepto evaluado: «Mi trabajo» (escala de 7 puntos)', fontsize=9.4, color=INK)
    ax.text(-1.8, -.2, 'Datos inventados para el ejemplo. Osgood, Suci y Tannenbaum (1957).', fontsize=7.2, color=MUTE)
    save(fig, 'diferencial-semantico.png')

# U2 · rejilla de Kelly
if want('rejilla-kelly'):
    elems = ['Yo actual', 'Yo ideal', 'Madre', 'Padre', 'Pareja', 'Me cae mal']
    cons = [('Tranquilo', 'Nervioso'), ('Cercano', 'Distante'), ('Seguro', 'Inseguro'), ('Generoso', 'Egoísta'), ('Alegre', 'Triste'), ('Organizado', 'Caótico')]
    M = np.array([[5, 1, 2, 5, 3, 6], [3, 1, 2, 4, 2, 6], [6, 2, 3, 5, 3, 5], [2, 1, 2, 2, 2, 7], [5, 1, 2, 3, 2, 6], [4, 2, 2, 5, 3, 6]], float)
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(9.0, 3.9), gridspec_kw={'width_ratios': [1.35, 1]})
    a1.axis('off'); a1.set_xlim(0, 10); a1.set_ylim(0, 7.6)
    for j, e in enumerate(elems):
        a1.text(3.4 + j * 1.0 + .5, 7.1, e, rotation=35, ha='left', va='bottom', fontsize=7.4, color=INK, weight='bold')
    for i, (l, r) in enumerate(cons):
        y = 6.2 - i * 1.0
        a1.text(3.3, y, l + ' (1)', ha='right', va='center', fontsize=7.6, color=INK)
        for j in range(6):
            v = M[i, j]; c = plt.cm.RdBu(.15 + (v - 1) / 6 * .7)
            a1.add_patch(Rectangle((3.4 + j, y - .45), .95, .9, fc=c, ec='white'))
            a1.text(3.4 + j + .47, y, int(v), ha='center', va='center', fontsize=8.4, color='white' if abs(v - 4) > 1.5 else INK, weight='bold')
        a1.text(9.5, y, '(7) ' + r, ha='left', va='center', fontsize=7.6, color=INK)
    X = M.T - M.T.mean(0); U, s, Vt = np.linalg.svd(X, full_matrices=False); pc = U[:, :2] * s[:2]
    cols = [A, G, P, P, V, MUTE]
    for (x, y), e, c in zip(pc, elems, cols):
        a2.scatter([x], [y], s=60, color=c, zorder=3)
    for (x, y), e in zip(pc, elems): pass
    a2.plot([pc[0, 0], pc[1, 0]], [pc[0, 1], pc[1, 1]], color=A, ls='--', lw=1.3)
    from matplotlib import patheffects as pe
    used = []
    for (x, y), e in zip(pc, elems):
        dy = .35
        while any(abs(x - ux) < 2.2 and abs(y + dy - uy) < .45 for ux, uy in used): dy -= .5
        used.append((x, y + dy)); a2.text(x, y + dy, e, fontsize=7.4, color=INK, ha='center', path_effects=[pe.withStroke(linewidth=3, foreground='white')])
    a2.text(0.02, .04, '- - distancia yo actual–yo ideal', transform=a2.transAxes, fontsize=7, color=A)
    a2.axhline(0, color='#D5D9DC', lw=.8); a2.axvline(0, color='#D5D9DC', lw=.8)
    a2.set_xlabel('Componente 1'); a2.set_ylabel('Componente 2'); a2.set_xticks([]); a2.set_yticks([]); clean(a2)
    lim = np.abs(pc).max() * 1.35; a2.set_xlim(-lim, lim); a2.set_ylim(-lim, lim)
    fig.text(.01, .01, 'Datos inventados para el ejemplo. Puntuación de 1 (polo izquierdo) a 7 (polo derecho). Kelly (1955).', fontsize=7.2, color=MUTE)
    save(fig, 'rejilla-kelly.png')

# U3 · clasificación proyectivas
if want('proyectivas-arbol'):
    fig, ax = canvas(7.4, 3.8, 14.8, 7.6)
    box(ax, 7.4, 6.8, 4.4, .9, 'Técnicas proyectivas', P, 10)
    cats = [('Asociación', 'Rorschach', A), ('Construcción', 'TAT, CAT', G), ('Completamiento', 'frases incompletas,\nfábulas de Düss', Y), ('Ordenación o\nelección', 'elegir u ordenar\nláminas', V), ('Expresivas', 'árbol, figura humana,\nfamilia, HTP;\ntest del pueblo', T)]
    for k, (t, ex, c) in enumerate(cats):
        x = 1.5 + k * 2.95
        arr(ax, (7.4, 6.3), (x, 4.95), MUTE, lw=1)
        box(ax, x, 4.4, 2.6, 1.0, t, c, 8.6, tc=INK if c == Y else 'white')
        ax.text(x, 3.6, ex, ha='center', va='top', fontsize=7.6, color=INK, linespacing=1.25)
    ax.text(.2, .2, 'Clasificación de Lindzey (1959). Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'proyectivas-arbol.png')

# U3 · estructura Rorschach
if want('rorschach-estructura'):
    fig, ax = canvas(7.6, 4.0, 15.2, 8.0)
    tipos = ['acr', 'nr', 'nr', 'acr', 'acr', 'acr', 'acr', 'col', 'col', 'col']
    cmap = {'acr': ('#5A6670', 'acromática'), 'nr': (A, 'negro y rojo'), 'col': (Y, 'color')}
    rom = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    for k, (t, r) in enumerate(zip(tipos, rom)):
        x = .6 + k * 1.45
        ax.add_patch(FancyBboxPatch((x, 5.6), 1.2, 1.6, boxstyle='round,pad=0.02,rounding_size=0.1', fc=cmap[t][0], alpha=.85, ec='none'))
        ax.text(x + .6, 6.4, r, ha='center', va='center', color='white', fontsize=10, weight='bold')
    for k, (key, (c, lab)) in enumerate(cmap.items()):
        ax.add_patch(Rectangle((.6 + k * 3.4, 4.85), .35, .35, fc=c)); ax.text(1.1 + k * 3.4, 5.02, lab, va='center', fontsize=7.8, color=INK)
    box(ax, 2.6, 3.4, 4.2, .8, '1 · Respuesta libre', P, 8.6); box(ax, 2.6, 2.2, 4.2, .8, '2 · Indagación o encuesta', P, 8.6)
    arr(ax, (2.6, 2.95), (2.6, 2.65), INK)
    ax.text(.6, 1.2, 'Administración', fontsize=8.2, color=MUTE, weight='bold')
    codes = ['Localización', 'Determinantes', 'Contenido', 'Populares', 'Calidad formal']
    for k, cd in enumerate(codes):
        box(ax, 7.9 + (k % 3) * 2.45, 3.4 - (k // 3) * 1.2, 2.3, .8, cd, G, 8.2)
    ax.text(6.8, 1.2, 'Codificación de cada respuesta', fontsize=8.2, color=MUTE, weight='bold')
    ax.text(.2, .25, 'Esquema ilustrativo, no datos. No se reproducen las láminas.', fontsize=7.2, color=MUTE)
    save(fig, 'rorschach-estructura.png')

# U4 · Mihura
if want('mihura'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.0, 3.3), gridspec_kw={'width_ratios': [1.1, 1]})
    a1.bar([0, 1], [.27, .08], color=[G, MUTE], width=.55)
    for x, v, k in [(0, .27, 'k = 770'), (1, .08, 'k = 386')]:
        a1.text(x, v + .008, f'r = {v:.2f}'.replace('.', ','), ha='center', fontsize=9.4, weight='bold', color=INK); a1.text(x, -.035, k, ha='center', fontsize=7.6, color=MUTE)
    a1.set_xticks([0, 1]); a1.set_xticklabels(['Criterios\nexternos', 'Autoinformes'], fontsize=8.4); a1.set_ylim(-.05, .33); a1.set_ylabel('Validez media (r)')
    a1.set_yticks([0, .1, .2, .3]); a1.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, p: f'{v:.2f}'.replace('.', ','))); clean(a1)
    a2.axis('off'); a2.set_xlim(0, 10); a2.set_ylim(0, 10)
    box(a2, 5, 8.3, 8.6, 1.5, '65 variables del\nSistema Comprehensivo', P, 9)
    box(a2, 5, 5.5, 8.6, 1.5, '30 con apoyo\nbueno o excelente', G, 9)
    box(a2, 5, 2.7, 8.6, 1.5, '22 sin apoyo\no sin estudios', A, 9)
    fig.text(.01, .01, 'Mihura, Meyer, Dumitrascu y Bombel (2013). Datos reales.', fontsize=7.2, color=MUTE)
    save(fig, 'mihura.png')

# U5 · modelos factoriales
if want('modelos-factoriales'):
    fig, ax = canvas(9.0, 4.6, 18, 9.2)
    mods = [('Spearman', '1904', 'g + factores\nespecíficos (s)', 'bif'), ('Thurstone', '1938', 'aptitudes mentales\nprimarias', 'flat'), ('Vernon', '1950', 'modelo\njerárquico', 'hier'),
            ('Guilford', '1967', 'estructura del\nintelecto: operaciones\n× contenidos\n× productos', 'cube'), ('Cattell y Horn', '1963', 'inteligencia\nfluida (Gf) y\ncristalizada (Gc)', 'two'), ('Carroll', '1993', 'tres estratos\n(g, amplias, estrechas)', 'hier3'), ('CHC', '1997–2018', 'síntesis\nCattell-Horn-Carroll', 'hier3')]
    cols = [P, A, G, V, Y, T, P]
    for k, (n, yr, d, kind) in enumerate(mods):
        x = 1.25 + k * 2.55; c = cols[k]
        ax.text(x, 8.6, n, ha='center', fontsize=9, weight='bold', color=c); ax.text(x, 8.0, yr, ha='center', fontsize=8, color=MUTE)
        cy = 5.6
        if kind == 'bif':
            ax.add_patch(Circle((x, cy + .9), .38, fc=c)); ax.text(x, cy + .9, 'g', color='white', ha='center', va='center', weight='bold')
            for dx in (-.8, 0, .8): ax.add_patch(Rectangle((x + dx - .25, cy - 1.1), .5, .45, fc=c, alpha=.35)); ax.plot([x, x + dx], [cy + .52, cy - .65], color=c, lw=.9)
        elif kind == 'flat':
            for i in range(7): ax.add_patch(Circle((x - .9 + (i % 4) * .6, cy + .5 - (i // 4) * .8), .24, fc=c, alpha=.8))
        elif kind in ('hier', 'hier3'):
            ax.add_patch(Circle((x, cy + 1.0), .3, fc=c)); ax.text(x, cy + 1.0, 'g', color='white', ha='center', va='center', fontsize=8, weight='bold')
            for dx in (-.6, .6):
                ax.plot([x, x + dx], [cy + .7, cy + .1], color=c, lw=.9); ax.add_patch(Circle((x + dx, cy), .22, fc=c, alpha=.7))
                for ddx in (-.25, .25): ax.plot([x + dx, x + dx + ddx], [cy - .2, cy - .75], color=c, lw=.7); ax.add_patch(Circle((x + dx + ddx, cy - .85), .12, fc=c, alpha=.45))
        elif kind == 'cube':
            for i in range(3):
                for j in range(3): ax.add_patch(Rectangle((x - .75 + i * .5, cy - .6 + j * .5), .5, .5, fc=c, alpha=.25 + .15 * ((i + j) % 2), ec='white'))
        elif kind == 'two':
            for dx, t in ((-.5, 'Gf'), (.5, 'Gc')): ax.add_patch(Circle((x + dx, cy + .2), .42, fc=c)); ax.text(x + dx, cy + .2, t, color=INK, ha='center', va='center', fontsize=8.4, weight='bold')
        ax.text(x, 3.6, d, ha='center', va='top', fontsize=6.6, color=INK, linespacing=1.25)
    ax.text(.2, .3, 'Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'modelos-factoriales.png')

# U5 · CHC
if want('chc-estratos'):
    fig, ax = canvas(7.6, 4.2, 15.2, 8.4)
    box(ax, 7.6, 7.4, 1.6, .8, 'g', P, 12); ax.text(.3, 7.4, 'Estrato III', fontsize=8, color=MUTE, va='center')
    amp = [('Gf', 'razonamiento\nfluido'), ('Gc', 'conocimiento\ncomprensión'), ('Gv', 'visoespacial'), ('Ga', 'auditivo'), ('Gwm', 'memoria de\ntrabajo'), ('Gl/Gr', 'aprendizaje y\nrecuperación'), ('Gs', 'velocidad de\nprocesamiento'), ('Gq', 'cuantitativo'), ('Grw', 'lectura y\nescritura')]
    for k, (a, d) in enumerate(amp):
        x = 2.0 + k * 1.45
        arr(ax, (7.6, 6.95), (x, 5.55), MUTE, lw=.8, ms=8)
        box(ax, x, 5.1, 1.25, .75, a, G, 9); ax.text(x, 4.5, d, ha='center', va='top', fontsize=6.6, color=INK, linespacing=1.1)
    ax.text(.3, 5.1, 'Estrato II', fontsize=8, color=MUTE, va='center')
    est = {0: ['inducción', 'razonamiento\ncuantitativo'], 1: ['vocabulario', 'información\ngeneral'], 6: ['rapidez\nperceptiva', 'fluidez de\ncálculo']}
    for k, lst in est.items():
        x = 2.0 + k * 1.45
        for j, t in enumerate(lst):
            xx = x - .55 + j * 1.1 + (-.45 if k == 0 else (.45 if k == 1 else 0))
            ax.plot([x, xx], [3.3, 2.6], color=MUTE, lw=.7)
            ax.add_patch(FancyBboxPatch((xx - .52, 1.65), 1.04, .9, boxstyle='round,pad=0.02,rounding_size=0.08', fc=SOFT, ec=MUTE, lw=.7))
            ax.text(xx, 2.1, t, ha='center', va='center', fontsize=6.2, color=INK, linespacing=1.05)
    ax.text(.3, 3.0, 'Estrato I', fontsize=8, color=MUTE, va='center')
    ax.text(.3, .4, 'Modelo CHC (Schneider y McGrew, 2018), simplificado. Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'chc-estratos.png')

# U6 · línea inteligencia
if want('linea-inteligencia'):
    fig, ax = canvas(9.4, 3.2, 18.8, 4.6)
    items = [('1884', 'Galton', 'laboratorio\nantropométrico'), ('1905', 'Binet y Simon', 'primera escala\nde inteligencia'), ('1912', 'Stern', 'cociente\nintelectual'), ('1916', 'Terman', 'Stanford-Binet'),
             ('1917', 'Army', 'Alpha y Beta'), ('1938', 'Raven', 'matrices\nprogresivas'), ('1939', 'Wechsler', 'CI de\ndesviación'), ('1963', 'Cattell', 'Gf y Gc'), ('1983', 'Gardner', 'inteligencias\nmúltiples'),
             ('1993', 'Carroll', 'tres estratos'), ('2014', 'WISC-V', '5 índices\nprimarios'), ('2024', 'WAIS-5', '5 índices\nprimarios')]
    timeline(ax, items, y=2.3)
    save(fig, 'linea-inteligencia.png')

# U6 · Flynn
if want('flynn'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.0))
    yrs = np.arange(1920, 2001, 10); a1.plot(yrs, 100 - (2000 - yrs) / 10 * 2.8, color=P, lw=2.2, marker='o', ms=4)
    a1.set_title('Ganancias generacionales\n(≈ 2–3 puntos por década)', fontsize=8.4); a1.set_xlabel('Año de nacimiento'); a1.set_ylabel('CI medio (tendencia)'); a1.set_yticks([]); clean(a1)
    c = np.arange(1962, 1992); y2 = np.where(c <= 1975, (c - 1962) * .25, (1975 - 1962) * .25 - (c - 1975) * .2)
    a2.plot(c, y2, color=A, lw=2.2); a2.axvline(1975, color=MUTE, ls=':', lw=1); a2.text(1976.5, y2.max() - 1.0, 'pico:\ncohorte\nde 1975', fontsize=7.4, color=INK)
    a2.set_title('Inversión en Noruega\n(reclutas por cohorte)', fontsize=8.4); a2.set_xlabel('Cohorte de nacimiento'); a2.set_yticks([]); a2.set_ylabel('CI (tendencia)'); clean(a2)
    fig.text(.01, .01, 'Esquema basado en Trahan et al. (2014) y Bratsberg y Rogeberg (2018); las curvas son ilustrativas.', fontsize=7.0, color=MUTE)
    save(fig, 'flynn.png')

# U7 · curva CI
if want('curva-ci'):
    fig, ax = plt.subplots(figsize=(6.6, 3.0))
    x = np.linspace(40, 160, 600); y = norm.pdf(x, 100, 15); ax.plot(x, y, color=P, lw=2)
    bands = [(40, 70, '2,1 %', A), (70, 85, '13,6 %', Y), (85, 100, '34,1 %', G), (100, 115, '34,1 %', G), (115, 130, '13,6 %', Y), (130, 160, '2,1 %', A)]
    for a, b, t, c in bands:
        m = (x >= a) & (x <= b); ax.fill_between(x[m], y[m], color=c, alpha=.25)
        xm = (a + b) / 2 if a > 40 and b < 160 else (63 if a == 40 else 137)
        ax.text(xm, min(norm.pdf(xm, 100, 15) * .45, .011) if a > 40 and b < 160 else norm.pdf(xm, 100, 15) + .0015, t, ha='center', fontsize=8, color=INK, weight='bold')
    ax.set_xticks([55, 70, 85, 100, 115, 130, 145]); ax.set_yticks([]); ax.set_xlabel('CI (media 100, DT 15)'); clean(ax); ax.spines['left'].set_visible(False)
    fig.text(.01, .01, 'Porcentajes aproximados; por debajo de 55 y por encima de 145 queda ≈ 0,1 % en cada extremo.', fontsize=7.0, color=MUTE)
    save(fig, 'curva-ci.png')

# U7 · índices Wechsler
if want('wechsler-indices'):
    fig, ax = canvas(9.4, 4.0, 19.6, 8)
    colsd = [('WAIS-IV', '16–89 años · España 2012', ['Comprensión Verbal', 'Razonamiento Perceptivo', 'Memoria de Trabajo', 'Velocidad de Procesamiento']),
             ('WAIS-5', '16–90 años · EE. UU. 2024', ['Comprensión Verbal', 'Visoespacial', 'Razonamiento Fluido', 'Memoria de Trabajo', 'Velocidad de Procesamiento']),
             ('WISC-V', '6–16 años · España 2015', ['Comprensión Verbal', 'Visoespacial', 'Razonamiento Fluido', 'Memoria de Trabajo', 'Velocidad de Procesamiento'])]
    cc = {'Comprensión Verbal': P, 'Razonamiento Perceptivo': V, 'Visoespacial': V, 'Razonamiento Fluido': '#9B7FC4', 'Memoria de Trabajo': G, 'Velocidad de Procesamiento': Y}
    for k, (n, sub, idx) in enumerate(colsd):
        x = .8 + k * 6.4
        ax.text(x + 1.7, 7.5, n, ha='center', fontsize=11, weight='bold', color=INK); ax.text(x + 1.7, 6.95, sub, ha='center', fontsize=7.6, color=MUTE)
        for j, t in enumerate(idx):
            box(ax, x + 1.7, 6.1 - j * 1.05, 4.2, .8, t, cc[t], 8.2, tc=INK if cc[t] == Y else 'white')
        ax.text(x + 1.7, 6.1 - len(idx) * 1.05 + .2, '+ CI total (CIT)', ha='center', fontsize=7.8, color=INK, weight='bold')
    arr(ax, (3.9 + 1.1, 5.05), (7.0 + .5, 4.55), A, lw=1.4); ax.text(6.25, 5.55, 'RP → VE + RF', ha='center', fontsize=8.2, color=A, weight='bold')
    save(fig, 'wechsler-indices.png')

# U8 · DAT
if want('aptitudes-dat'):
    fig, ax = plt.subplots(figsize=(6.4, 3.4))
    apt = ['Razonamiento\nverbal', 'Razonamiento\nnumérico', 'Razonamiento\nabstracto', 'Razonamiento\nmecánico', 'Relaciones\nespaciales', 'Ortografía', 'Velocidad y\nprecisión']
    v = [72, 55, 80, 35, 60, 68, 45]
    ax.barh(range(len(apt))[::-1], v, color=[G if x >= 60 else (Y if x >= 40 else A) for x in v], height=.6)
    for i, x in zip(range(len(apt))[::-1], v): ax.text(x + 1.5, i, f'P{x}', va='center', fontsize=8.2, color=INK)
    ax.axvline(50, color=MUTE, ls=':', lw=1); ax.set_yticks(range(len(apt))[::-1]); ax.set_yticklabels(apt, fontsize=7.8); ax.set_xlim(0, 100); ax.set_xlabel('Percentil'); clean(ax)
    ax.text(0, -1.6, 'Perfil de ejemplo; datos inventados.', fontsize=7.2, color=MUTE)
    save(fig, 'aptitudes-dat.png')

# U9 · sesgos y control
if want('sesgos-control'):
    fig, ax = canvas(9.0, 3.6, 18, 7.2)
    rows = [['Sesgo de respuesta', 'Estrategia de control', 'Ejemplo'],
            ['Deseabilidad social', 'Escalas de deseabilidad o defensividad', 'L y K del MMPI-2; IM del BIDR'],
            ['Aquiescencia', 'Ítems en sentido directo e inverso', 'TRIN del MMPI-2'],
            ['Respuesta aleatoria', 'Pares de ítems de contenido parecido', 'VRIN del MMPI-2'],
            ['Simulación (exagerar síntomas)', 'Ítems de frecuencia muy baja', 'F, F(p) y FBS del MMPI-2'],
            ['Falseamiento positivo', 'Elección forzada entre opciones de igual deseabilidad', 'EPPS de Edwards (puntuación ipsativa)']]
    table(ax, .2, 7.0, [4.6, 7.0, 6.0], 1.1, rows, fs=8)
    save(fig, 'sesgos-control.png')

# U10 · estrategias de construcción
if want('construccion-estrategias'):
    fig, ax = canvas(9.0, 3.6, 18, 7.2)
    st = [('Racional o teórica', '¿Qué dice la teoría\nque debe preguntarse?', 'Woodworth (1917)', P), ('Empírica de\ncriterio externo', '¿Qué ítems distinguen\nal grupo clínico?', 'MMPI', A),
          ('Factorial', '¿Qué ítems se agrupan\nestadísticamente?', '16PF, EPQ, NEO', G), ('Secuencial o mixta', 'Teoría + análisis de ítems\n+ validación externa', 'PRF de Jackson,\nMCMI, PAI', V)]
    for k, (t, q, e, c) in enumerate(st):
        x = .3 + k * 4.45
        card(ax, x, .5, 4.1, 6.3, t.replace('\n', ' '), q + '\n\n\nEjemplo:\n' + e, c, 8.0)
    save(fig, 'construccion-estrategias.png')

# U10 · familia MMPI
if want('mmpi-familia'):
    fig, ax = canvas(9.0, 2.9, 18, 5.8)
    rows = [['Versión', 'Año', 'Adaptación española', 'Ítems', 'Escalas'],
            ['MMPI', '1943', '—', '566', 'L, F, K y 10 clínicas'],
            ['MMPI-2', '1989', '1999 (TEA)', '567', 'Validez, clínicas, contenido, suplementarias, PSY-5'],
            ['MMPI-2-RF', '2008', 'TEA', '338', '51 escalas; clínicas reestructuradas (RC)'],
            ['MMPI-3', '2020', 'Hogrefe TEA, 2026', '335', '52 escalas (nuevas: alimentación, compulsividad…)']]
    table(ax, .2, 5.6, [2.4, 1.4, 4.4, 1.4, 8.2], 1.05, rows, fs=8)
    save(fig, 'mmpi-familia.png')

# U10 · perfil MMPI
if want('perfil-mmpi'):
    fig, ax = plt.subplots(figsize=(7.0, 3.3))
    lab = ['L', 'F', 'K', '1\nHs', '2\nD', '3\nHy', '4\nPd', '5\nMf', '6\nPa', '7\nPt', '8\nSc', '9\nMa', '0\nSi']
    val = [52, 58, 48, 62, 74, 60, 55, 50, 57, 70, 61, 45, 60]
    ax.axhspan(65, 100, color=A, alpha=.08); ax.axhline(65, color=A, lw=1.2, ls='--'); ax.text(13.1, 65.6, 'T = 65', fontsize=7.8, color=A, ha='right')
    ax.axhline(50, color=MUTE, lw=.8, ls=':')
    ax.plot(range(3), val[:3], color=V, marker='o', lw=1.8); ax.plot(range(3, 13), val[3:], color=P, marker='o', lw=1.8)
    ax.axvline(2.5, color='#D5D9DC', lw=1)
    ax.set_xticks(range(13)); ax.set_xticklabels(lab, fontsize=7.8); ax.set_ylim(30, 100); ax.set_ylabel('Puntuación T'); clean(ax)
    ax.text(1, 95, 'Validez', ha='center', fontsize=8, color=V, weight='bold'); ax.text(7.5, 95, 'Escalas clínicas', ha='center', fontsize=8, color=P, weight='bold')
    ax.text(-.5, 18, 'Perfil de ejemplo; datos inventados.', fontsize=7.2, color=MUTE)
    save(fig, 'perfil-mmpi.png')

# U11 · Big Five y PID-5
if want('big-five-pid5'):
    fig, ax = canvas(8.0, 4.0, 16, 8)
    ff = ['Neuroticismo', 'Extraversión', 'Amabilidad', 'Responsabilidad', 'Apertura']
    pid = ['Afectividad negativa', 'Desapego', 'Antagonismo', 'Desinhibición', 'Psicoticismo']
    rel = ['directa', 'inversa', 'inversa', 'inversa', 'débil y discutida']
    ax.text(2.2, 7.4, 'Cinco grandes', ha='center', fontsize=9.4, weight='bold', color=INK); ax.text(7.6, 7.4, 'PID-5 (DSM-5)', ha='center', fontsize=9.4, weight='bold', color=INK)
    for k in range(5):
        y = 6.3 - k * 1.25
        box(ax, 2.2, y, 3.6, .8, ff[k], P, 8.4); box(ax, 7.6, y, 3.6, .8, pid[k], A, 8.4)
        ax.plot([4.05, 5.75], [y, y], color=MUTE if k == 4 else INK, lw=1.3, ls=':' if k == 4 else '-'); ax.text(4.9, y + .18, rel[k], ha='center', fontsize=6.8, color=MUTE)
    ax.add_patch(FancyBboxPatch((10.6, .9), 5.1, 6.2, boxstyle='round,pad=0.02,rounding_size=0.15', fc=SOFT, ec=G, lw=1.2))
    ax.text(13.15, 6.55, 'CIE-11: especificadores\nde rasgo', ha='center', fontsize=8.6, weight='bold', color=G)
    for k, t in enumerate(['Afectividad negativa', 'Desapego', 'Disocialidad', 'Desinhibición', 'Anancastia']): ax.text(13.15, 5.3 - k * .9, t, ha='center', fontsize=8.2, color=INK)
    ax.text(.2, .25, 'Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'big-five-pid5.png')

# U12 · batería fija y flexible
if want('bateria-fija-flexible'):
    fig, ax = canvas(8.4, 4.0, 16.8, 8)
    rows = [['', 'Batería fija', 'Batería flexible o de proceso'],
            ['Procedimiento', 'Las mismas pruebas para todos,\nen el mismo orden', 'Pruebas elegidas según las hipótesis;\nse analizan también los errores'],
            ['Ventajas', 'Comparabilidad entre casos;\nútil para investigar', 'Adaptada al caso; más breve;\ninforma del «cómo» del fallo'],
            ['Inconvenientes', 'Larga y rígida; puede evaluar\nlo que no hace falta', 'Depende más de la pericia\ndel evaluador; menos comparable'],
            ['Ejemplos', 'Halstead-Reitan;\nLuria-Nebraska', 'Enfoque de Boston (Kaplan);\nla práctica más extendida hoy']]
    table(ax, .2, 7.6, [3.0, 6.6, 6.8], 1.4, rows, fs=8)
    save(fig, 'bateria-fija-flexible.png')

# U13 · MoCA vs MMSE
if want('moca-mmse'):
    fig, ax = plt.subplots(figsize=(6.4, 3.2))
    g = ['Sensibilidad\nDCL', 'Sensibilidad\nAlzheimer leve', 'Especificidad']
    mo = [90, 100, 87]; mm = [18, 78, 100]; xs = np.arange(3); w = .36
    ax.bar(xs - w / 2, mo, w, color=P, label='MoCA (corte 26)'); ax.bar(xs + w / 2, mm, w, color=Y, label='MMSE')
    for x, v in zip(list(xs - w / 2) + list(xs + w / 2), mo + mm): ax.text(x, v + 1.5, f'{v} %', ha='center', fontsize=8.2, color=INK)
    ax.set_xticks(xs); ax.set_xticklabels(g, fontsize=8.2); ax.set_ylim(0, 115); ax.set_ylabel('%'); ax.legend(frameon=False, fontsize=8, loc='upper left', ncol=2); clean(ax)
    ax.text(-.6, -32, 'Nasreddine et al. (2005): 94 DCL, 93 Alzheimer leve, 90 controles. Datos reales.', fontsize=7.2, color=MUTE)
    save(fig, 'moca-mmse.png')

# U13 · funciones y pruebas
if want('funciones-pruebas'):
    fig, ax = canvas(9.0, 3.8, 18, 7.6)
    funcs = ['Atención y velocidad', 'Funciones ejecutivas', 'Memoria verbal', 'Memoria visual y\nvisoconstrucción', 'Lenguaje']
    tests = ['TMT-A', 'TMT-B', 'Stroop', 'WCST', 'Fluidez\nfonética', 'Fluidez\nsemántica', 'RAVLT', 'TAVEC', 'Figura\nde Rey']
    M = {(0, 0), (0, 2), (1, 1), (1, 2), (1, 3), (1, 4), (2, 6), (2, 7), (3, 8), (4, 5), (4, 4)}
    for j, t in enumerate(tests): ax.text(5.0 + j * 1.42, 7.0, t, ha='center', va='center', fontsize=7.6, weight='bold', color=INK)
    for i, f in enumerate(funcs):
        y = 5.8 - i * 1.15
        ax.text(4.2, y, f, ha='right', va='center', fontsize=8.2, color=INK, weight='bold')
        for j in range(len(tests)):
            on = (i, j) in M
            ax.add_patch(Rectangle((4.32 + j * 1.42, y - .5), 1.36, 1.0, fc=[P, V, G, Y, T][i] if on else SOFT, alpha=.85 if on else 1, ec='white'))
            if on: ax.text(5.0 + j * 1.42, y, '●', ha='center', va='center', color='white', fontsize=9)
    ax.text(.2, .2, 'Función principal que evalúa cada prueba (simplificado). Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'funciones-pruebas.png')

# U14 · hexágono RIASEC
if want('hexagono-riasec'):
    fig, ax = canvas(6.0, 4.6, 12, 9.2)
    lab = [('R', 'Realista'), ('I', 'Investigador'), ('A', 'Artístico'), ('S', 'Social'), ('E', 'Emprendedor'), ('C', 'Convencional')]
    ang = np.deg2rad(np.array([150, 90, 30, -30, -90, -150])); cx, cy, r = 5.2, 4.6, 3.0
    pts = [(cx + r * np.cos(a), cy + r * np.sin(a)) for a in ang]
    cols = [A, P, V, G, Y, T]
    for k in range(6): ax.plot([pts[k][0], pts[(k + 1) % 6][0]], [pts[k][1], pts[(k + 1) % 6][1]], color=INK, lw=1.4)
    ax.plot([pts[0][0], pts[3][0]], [pts[0][1], pts[3][1]], color=MUTE, ls=':', lw=1); ax.text(cx - .2, cy + .35, 'opuestos:\nconsistencia baja', fontsize=7, color=MUTE, ha='center')
    for (x, y), (l, n), c in zip(pts, lab, cols):
        ax.add_patch(Circle((x, y), .55, fc=c)); ax.text(x, y, l, ha='center', va='center', color='white' if c != Y else INK, fontsize=12, weight='bold')
        ax.text(x + (.75 if x > cx else -.75), y, n, ha='left' if x > cx else 'right', va='center', fontsize=8.2, color=INK)
    ax.text(cx + 1.9, cy + 3.6, 'adyacentes: consistencia alta', fontsize=7.4, color=INK, ha='left')
    ax.text(10.6, 1.0, 'Ejemplo de código:\nSAE', fontsize=9, color=G, weight='bold', ha='center')
    ax.text(.2, .2, 'Holland. Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'hexagono-riasec.png')

# U15 · escalas de actitudes
if want('escalas-actitudes'):
    fig, axs = plt.subplots(1, 3, figsize=(10.0, 3.6), gridspec_kw={'width_ratios': [1, 1.15, 1.1]})
    for a in axs: a.axis('off'); a.set_xlim(0, 10); a.set_ylim(0, 10)
    a = axs[0]; a.text(5, 9.4, 'Likert (1932)', ha='center', fontsize=10, weight='bold', color=P)
    a.text(5, 7.7, '«El transporte público debería\nser gratuito para menores de 26»', ha='center', fontsize=8, color=INK)
    opts = ['Muy en\ndesacuerdo', 'En\ndesacuerdo', 'Neutral', 'De\nacuerdo', 'Muy de\nacuerdo']
    for k, o in enumerate(opts):
        x = .9 + k * 2.05; a.add_patch(Circle((x, 5.2), .38, fc='white', ec=P, lw=1.3)); a.text(x, 5.2, k + 1, ha='center', va='center', fontsize=8, color=P)
        a.text(x, 4.4, o, ha='center', va='top', fontsize=5.8, color=INK)
    a.text(5, 1.6, 'Puntuación sumativa:\nse suman los ítems', ha='center', fontsize=8, color=MUTE)
    a = axs[1]; a.text(5, 9.4, 'Thurstone (1929)', ha='center', fontsize=10, weight='bold', color=A)
    items = [('1,2', 'El transporte público es un gasto inútil'), ('5,8', 'El transporte público tiene ventajas e inconvenientes'), ('10,1', 'El transporte público es imprescindible')]
    for k, (v, t) in enumerate(items):
        y = 7.4 - k * 2.0; a.add_patch(FancyBboxPatch((.2, y - .55), 1.6, 1.1, boxstyle='round,pad=0.02,rounding_size=0.1', fc=A, ec='none'))
        a.text(1.0, y, v, ha='center', va='center', color='white', fontsize=9, weight='bold'); a.text(2.1, y, t, va='center', fontsize=7.2, color=INK, wrap=True)
    a.text(5, 1.0, 'Valor escalar = mediana de los jueces (1–11);\nse puntúa con los ítems que la persona acepta', ha='center', fontsize=7.4, color=MUTE)
    a = axs[2]; a.text(5, 9.4, 'Guttman (1944)', ha='center', fontsize=10, weight='bold', color=G)
    pat = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 0], [1, 1, 1, 0, 0], [1, 1, 0, 1, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    for j in range(5): a.text(2.6 + j * 1.3, 8.2, f'Í{j + 1}', ha='center', fontsize=7.6, weight='bold', color=INK)
    for i, row in enumerate(pat):
        y = 7.3 - i * .95; a.text(1.4, y, f'S{i + 1}', ha='center', va='center', fontsize=7.6, color=INK)
        for j, v in enumerate(row):
            err = (i == 3 and j in (2, 3))
            a.add_patch(Rectangle((2.0 + j * 1.3, y - .4), 1.2, .8, fc=(A if err else G) if v else SOFT, alpha=.85 if v else 1, ec='white'))
            a.text(2.6 + j * 1.3, y, v, ha='center', va='center', fontsize=8, color='white' if v else MUTE)
    a.text(5, .9, 'S4 rompe el patrón acumulativo (1 error)\nReproductibilidad = 1 − 1/30 ≈ 0,97', ha='center', fontsize=7.4, color=INK)
    fig.text(.01, .01, 'Ítems y datos inventados para el ejemplo.', fontsize=7.2, color=MUTE)
    save(fig, 'escalas-actitudes.png')

# U16 · modelo salud
if want('salud-modelo'):
    fig, ax = canvas(9.0, 3.6, 18, 7.2)
    st = [('Personalidad', 'tipo D · hostilidad', 'DS14', V), ('Estrés percibido', 'demandas que superan\nlos recursos', 'PSS', A), ('Afrontamiento', 'estrategias para\nmanejar el estrés', 'COPE, Brief COPE', P), ('Malestar emocional', 'ansiedad y depresión\nen contexto médico', 'HADS', Y), ('Salud y calidad\nde vida', 'percepción de la\npropia salud', 'SF-36, EQ-5D,\nWHOQOL-BREF', G)]
    for k, (t, d, ins, c) in enumerate(st):
        x = 1.8 + k * 3.6
        box(ax, x, 4.6, 3.1, 1.2, t, c, 8.6, tc=INK if c == Y else 'white')
        ax.text(x, 3.75, d, ha='center', va='top', fontsize=7.4, color=INK, linespacing=1.2)
        ax.text(x, 2.35, ins, ha='center', va='top', fontsize=7.8, color=c if c != Y else '#B07F14', weight='bold')
        if k < 4: arr(ax, (x + 1.6, 4.6), (x + 2.0, 4.6), INK)
    box(ax, 9.0, 6.6, 5.2, .8, 'Apoyo social (modulador)', T, 8.4)
    for k in (1, 2, 3): arr(ax, (9.0 + (k - 2) * 1.2, 6.2), (1.8 + k * 3.6, 5.25), T, ls='--', lw=1)
    ax.text(.2, .3, 'Esquema ilustrativo, no datos', fontsize=7.2, color=MUTE)
    save(fig, 'salud-modelo.png')
