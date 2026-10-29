"""Figuras propias del temario de Psicología: historia, ciencia y profesión. python3 tools/figuras.py → img/*"""
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
COLS = [P, G, Y, V, A, T, '#8A6A50']


def timeline(ev, name, w=7.8, h=3.1, xl=13):
    """ev: lista de (año, autor, detalle). Alterna arriba/abajo."""
    fig, ax = canvas(w, h, xl, 5)
    n = len(ev); xs = np.linspace(.7, xl - .7, n)
    ax.plot([.25, xl - .25], [2.5, 2.5], color=MUTE, lw=2)
    for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
        up = i % 2 == 0; c = COLS[i % len(COLS)]
        ax.plot([x], [2.5], 'o', color=c, ms=8)
        ax.text(x, 2.1 if up else 2.9, str(yr), ha='center', va='top' if up else 'bottom', fontsize=8.2, color=c, weight='bold')
        ax.text(x, 3.2 if up else 1.8, a, ha='center', va='bottom' if up else 'top', fontsize=7.6, color=INK, weight='bold', linespacing=1.15)
        if d: ax.text(x, 4.2 if up else .85, d, ha='center', va='bottom' if up else 'top', fontsize=7.0, color=MUTE, linespacing=1.15)
    save(fig, name)


# U1 · matriz historiográfica
if want('historiografia'):
    fig, ax = canvas(7.2, 4.0, 12, 7)
    ax.text(7, 6.6, 'Qué explica el cambio científico', ha='center', fontsize=9.5, color=INK, weight='bold')
    ax.text(4.6, 6.0, 'Internalismo\n(ideas, datos, métodos)', ha='center', fontsize=8.4, color=P, weight='bold')
    ax.text(9.4, 6.0, 'Externalismo\n(sociedad, instituciones)', ha='center', fontsize=8.4, color=G, weight='bold')
    ax.text(.9, 3.2, 'Cómo se mira\nel pasado', ha='center', va='center', fontsize=9.2, color=INK, weight='bold', rotation=90)
    ax.text(1.9, 4.3, 'Presentismo', ha='center', va='center', fontsize=8.4, color=A, weight='bold', rotation=90)
    ax.text(1.9, 1.8, 'Historicismo', ha='center', va='center', fontsize=8.4, color=V, weight='bold', rotation=90)
    cells = [(4.6, 4.3, 'Historia «whig»: el pasado\ncomo marcha de las ideas\nhacia la psicología actual', '#E6EEF4'),
             (9.4, 4.3, 'Usar el contexto social\nsolo para explicar por qué\n«se tardó» en acertar', '#E8F2EC'),
             (4.6, 1.8, 'Reconstruir los problemas\ny argumentos tal como\nlos veían sus autores', '#E6EEF4'),
             (9.4, 1.8, '«Nueva historia»: ideas\nen su contexto social,\neconómico e institucional', '#E8F2EC')]
    for x, y, t, c in cells: box(ax, x, y, 4.5, 2.2, t, c, 8.2, tc=INK, bold=False, ec=MUTE)
    save(fig, 'historiografia.png')

# U1 · ciclo de Kuhn
if want('kuhn'):
    fig, ax = canvas(7.0, 3.9, 12, 6.6)
    st = [('Ciencia\nnormal', P), ('Anomalías', Y), ('Crisis', A), ('Revolución', V), ('Nuevo\nparadigma', G)]
    cx, cy, r = 6, 3.3, 2.45
    ang = np.deg2rad([90, 18, -54, -126, -198])
    pts = [(cx + r * 1.55 * np.cos(a), cy + r * np.sin(a)) for a in ang]
    for (t, c), (x, y) in zip(st, pts): box(ax, x, y, 2.3, .95, t, c, 8.8, tc=INK if c == Y else 'white')
    for i in range(5):
        a, b = pts[i], pts[(i + 1) % 5]
        dx, dy = b[0] - a[0], b[1] - a[1]; d = np.hypot(dx, dy)
        arr(ax, (a[0] + dx / d * 1.25, a[1] + dy / d * .62), (b[0] - dx / d * 1.25, b[1] - dy / d * .62), INK, rad=-.15)
    ax.text(cx, cy, 'Kuhn (1962)', ha='center', va='center', fontsize=9, color=MUTE, weight='bold')
    ax.text(cx, .05, '¿Se aplica a la psicología? En debate: ¿multiparadigmática o preparadigmática?', ha='center', fontsize=7.8, color=A)
    save(fig, 'kuhn.png')

# U2 · Weber y Fechner
if want('weber-fechner'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.0))
    I = np.linspace(1, 100, 200)
    a1.plot(I, .1 * I, color=P, lw=2.2); a1.set_title('Ley de Weber: ΔI / I = k'); a1.set_xlabel('Intensidad de partida (I)'); a1.set_ylabel('Umbral diferencial (ΔI)')
    a1.annotate('el doble de I exige\nel doble de ΔI', (60, 6), (8, 7.6), fontsize=7.6, color=INK, arrowprops=dict(arrowstyle='->', color=MUTE))
    a2.plot(I, np.log10(I), color=A, lw=2.2); a2.set_title('Ley de Fechner: S = k log I'); a2.set_xlabel('Intensidad física (I)'); a2.set_ylabel('Sensación (S)')
    for a in (a1, a2): clean(a); a.set_xticks([]); a.set_yticks([])
    note(a1, y=-.3)
    save(fig, 'weber-fechner.png')

# U2 · localización
if want('localizacion'):
    timeline([('≈1810', 'Gall y\nSpurzheim', 'frenología:\nfacultades en\nel cráneo'), (1824, 'Flourens', 'ablaciones;\nequipotencialidad'),
              (1861, 'Broca', 'Leborgne («Tan»):\nproducción\ndel habla'), (1870, 'Fritsch y\nHitzig', 'estimulación de la\ncorteza motora'),
              (1874, 'Wernicke', 'afasia de\ncomprensión')], 'localizacion.png', w=7.8, h=3.2, xl=12)

# U3 · línea 1850‑1913
if want('linea-1850-1913'):
    timeline([(1850, 'Helmholtz', 'velocidad\nnerviosa'), (1860, 'Fechner', 'psicofísica'), (1869, 'Galton', 'Hereditary\nGenius'),
              (1879, 'Wundt', 'Leipzig'), (1885, 'Ebbinghaus', 'memoria'), (1889, 'París', '1.er congreso\ninternacional'),
              (1890, 'James', 'Principles'), (1892, 'Hall', 'APA'), (1898, 'Titchener', 'estructural /\nfuncional'),
              ('1899‑1900', 'Freud', 'interpretación\nde los sueños'), (1904, 'Pávlov', 'Nobel\n(digestión)'), (1905, 'Binet y\nSimon', 'escala'),
              (1912, 'Wertheimer', 'fenómeno phi'), (1913, 'Watson', 'manifiesto')], 'linea-1850-1913.png', w=9.4, h=3.3, xl=17)

# U3 · árbol de Wundt
if want('arbol-wundt'):
    fig, ax = canvas(7.2, 3.6, 12, 6)
    box(ax, 6, 5.1, 3.4, .95, 'Wundt · Leipzig', P, 10)
    ds = [('Hall', 'Johns Hopkins,\nClark; APA'), ('Cattell', 'Columbia;\nmental tests'), ('Titchener', 'Cornell;\nestructuralismo'),
          ('Külpe', 'Würzburgo'), ('Münsterberg', 'Harvard;\npsicotecnia'), ('Spearman', 'Londres;\nfactor g')]
    xs = np.linspace(1.1, 10.9, 6)
    for (n, d), x, c in zip(ds, xs, [G, Y, V, A, T, '#8A6A50']):
        arr(ax, (6, 4.6), (x, 3.3), MUTE, lw=1.1)
        box(ax, x, 2.85, 1.75, .8, n, c, 8.6, tc=INK if c == Y else 'white'); ax.text(x, 2.25, d, ha='center', va='top', fontsize=7.4, color=INK)
    ax.text(6, .3, 'Algunos discípulos formados en Leipzig y dónde trabajaron', ha='center', fontsize=7.6, color=MUTE)
    save(fig, 'arbol-wundt.png')

# U4 · Ebbinghaus
if want('ebbinghaus'):
    t = np.array([20 / 60, 1, 8.8, 24, 48, 144, 744]); s = np.array([58, 44, 36, 34, 28, 25, 21])
    fig, ax = plt.subplots(figsize=(6.4, 3.2))
    ax.plot(t, s, 'o-', color=P, lw=2, ms=6); ax.set_xscale('log'); ax.set_ylim(0, 70)
    ax.set_xticks(t); ax.set_xticklabels(['20 min', '1 h', '≈9 h', '1 d', '2 d', '6 d', '31 d'])
    for x, y in zip(t, s): ax.text(x, y + 3, f'≈{y}', ha='center', fontsize=7.8, color=INK)
    ax.set_ylabel('Ahorro en el reaprendizaje (%)'); ax.set_xlabel('Intervalo de retención (escala logarítmica)'); clean(ax)
    ax.text(0, -.32, 'Datos aproximados de Ebbinghaus (1885)', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'ebbinghaus.png')

# U4 · Binet
if want('binet-escala'):
    fig, ax = canvas(7.4, 3.2, 12.5, 5.2)
    ev = [(1905, 'Binet y Simon', 'primera escala'), (1908, 'Revisión', 'edad mental'), (1911, 'Revisión', 'última de Binet'), (1912, 'Stern', 'cociente mental'), (1916, 'Terman', 'Stanford‑Binet; CI')]
    xs = np.linspace(1.2, 11.3, 5); ax.plot([.5, 12], [3.4, 3.4], color=MUTE, lw=2)
    for (y, a, d), x, c in zip(ev, xs, COLS):
        ax.plot([x], [3.4], 'o', color=c, ms=9); ax.text(x, 3.85, str(y), ha='center', fontsize=8.8, color=c, weight='bold')
        ax.text(x, 2.95, a, ha='center', va='top', fontsize=8, color=INK, weight='bold'); ax.text(x, 2.45, d, ha='center', va='top', fontsize=7.4, color=MUTE)
    box(ax, 6.25, .75, 6.8, .95, 'CI = (edad mental / edad cronológica) × 100', SOFT, 9.4, tc=INK, ec=MUTE)
    save(fig, 'binet-escala.png')

# U5 · Clever Hans
if want('hans-diseno'):
    fig, ax = canvas(6.4, 3.6, 11, 6.2)
    ax.text(6.6, 5.85, '¿El interrogador conoce la respuesta?', ha='center', fontsize=8.8, color=INK, weight='bold')
    ax.text(4.4, 5.25, 'Sí', ha='center', fontsize=8.6, color=P, weight='bold'); ax.text(8.8, 5.25, 'No', ha='center', fontsize=8.6, color=P, weight='bold')
    ax.text(.55, 2.6, '¿Hans lo ve?', ha='center', va='center', rotation=90, fontsize=8.8, color=INK, weight='bold')
    ax.text(1.6, 3.85, 'Sí', ha='center', va='center', fontsize=8.6, color=P, weight='bold'); ax.text(1.6, 1.45, 'No', ha='center', va='center', fontsize=8.6, color=P, weight='bold')
    for x, y, t, c in [(4.4, 3.85, 'Acierta', G), (8.8, 3.85, 'Falla', A), (4.4, 1.45, 'Falla', A), (8.8, 1.45, 'Falla', A)]:
        box(ax, x, y, 4.0, 2.1, t, c, 11)
    ax.text(5.5, .05, 'Hans solo acierta si puede ver señales involuntarias de quien sabe la respuesta (Pfungst, 1907)', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'hans-diseno.png')

# U5 · fases de Pávlov
if want('pavlov-fases'):
    fig, ax = plt.subplots(figsize=(7.6, 3.0))
    x1 = np.arange(1, 11); y1 = 10 * (1 - np.exp(-x1 / 2.5))
    x2 = np.arange(11, 19); y2 = y1[-1] * np.exp(-(x2 - 10) / 2.2)
    x3 = np.arange(21, 27); y3 = 4.2 * np.exp(-(x3 - 21) / 1.6)
    ax.plot(x1, y1, 'o-', color=P, lw=2, ms=4); ax.plot(x2, y2, 'o-', color=A, lw=2, ms=4); ax.plot(x3, y3, 'o-', color=V, lw=2, ms=4)
    ax.axvline(10.5, color=MUTE, ls=':'); ax.axvspan(18.6, 20.4, color=SOFT); ax.axvline(20.5, color=MUTE, ls=':')
    for x, t, c in [(5.5, 'Adquisición\n(EC + EI)', P), (14.5, 'Extinción\n(solo EC)', A), (19.5, 'Pausa', MUTE), (23.8, 'Recuperación\nespontánea', V)]:
        ax.text(x, 11.3, t, ha='center', fontsize=8, color=c, weight='bold')
    ax.set_ylim(0, 13.5); ax.set_xticks([]); ax.set_yticks([]); ax.set_xlabel('Ensayos'); ax.set_ylabel('Magnitud de la RC\n(salivación)'); clean(ax)
    note(ax, y=-.18)
    save(fig, 'pavlov-fases.png')

# U6 · modelos de Freud
if want('freud-modelos'):
    fig, ax = canvas(7.6, 3.7, 13.5, 6.4)
    ax.text(3.0, 6.0, 'Modelo topográfico (1900)', ha='center', fontsize=9, color=INK, weight='bold')
    for y, h, t, c in [(4.8, .9, 'Consciente', '#C9D4DC'), (3.7, .9, 'Preconsciente', '#8FB2CC'), (1.95, 2.2, 'Inconsciente', P)]:
        box(ax, 3.0, y, 4.6, h, t, c, 9, tc=INK if c != P else 'white', r=.05)
    ax.text(10.0, 6.0, 'Modelo estructural (1923)', ha='center', fontsize=9, color=INK, weight='bold')
    box(ax, 10.0, 1.6, 3.4, 1.5, 'Ello\npulsiones;\nprincipio de placer', A, 7.8)
    box(ax, 8.0, 4.5, 3.2, 1.5, 'Yo\nmedia con la\nrealidad; defensas', G, 7.8)
    box(ax, 12.0, 4.5, 2.7, 1.5, 'Superyó\nnormas\ninteriorizadas', V, 7.8)
    arr(ax, (8.6, 2.35), (8.3, 3.7), MUTE); arr(ax, (8.0, 3.7), (8.9, 2.35), MUTE); arr(ax, (10.6, 4.5), (9.65, 4.5), MUTE); arr(ax, (11.3, 3.75), (10.7, 2.4), MUTE)
    save(fig, 'freud-modelos.png')

# U6 · tres planos
if want('psicoanalisis-planos'):
    fig, ax = canvas(7.4, 3.3, 13, 5.6)
    rows = [('Metapsicología\n(teoría general)', 'Poco contrastable (Grünbaum, 1984)', A),
            ('Conceptos generales', 'Procesos no conscientes y defensas: apoyo indirecto,\nreformulados por la psicología cognitiva', Y),
            ('Terapias\npsicodinámicas', 'Evidencia de eficacia (Shedler, 2010): d ≈ 0,97;\n≈ 1,51 en el seguimiento', G)]
    for i, (t, d, c) in enumerate(rows):
        y = 4.6 - i * 1.7; box(ax, 2.4, y, 3.8, 1.3, t, c, 8.8, tc=INK if c == Y else 'white')
        ax.text(4.7, y, d, va='center', fontsize=8.2, color=INK)
    save(fig, 'psicoanalisis-planos.png')

# U7 · leyes de la Gestalt
if want('gestalt-leyes'):
    fig, axs = plt.subplots(1, 6, figsize=(9.2, 2.2))
    for a in axs: a.set_xlim(0, 4); a.set_ylim(0, 4); a.axis('off'); a.set_aspect('equal')
    a = axs[0]
    for gx in (0.6, 1.1, 2.6, 3.1):
        for gy in (.8, 1.6, 2.4, 3.2): a.add_patch(Circle((gx, gy), .16, color=P))
    a = axs[1]
    for i, gx in enumerate((.7, 1.5, 2.3, 3.1)):
        for gy in (.8, 1.6, 2.4, 3.2): a.add_patch(Circle((gx, gy), .16, color=P if i % 2 == 0 else A))
    a = axs[2]
    th = np.linspace(0, 2 * np.pi, 200)
    for s, e in [(.2, 1.3), (1.7, 2.9), (3.3, 4.4), (4.8, 6.0)]:
        m = (th > s) & (th < e); a.plot(2 + 1.3 * np.cos(th[m]), 2 + 1.3 * np.sin(th[m]), color=P, lw=3)
    a = axs[3]
    x = np.linspace(.3, 3.7, 100); a.plot(x, 2 + 1.1 * np.sin((x - .3) * 1.8), color=P, lw=3); a.plot(x, 3.4 - (x - .3) * .8, color=A, lw=3)
    a = axs[4]
    for gx, gy in [(.8, 1.0), (1.6, .6), (2.4, 1.2), (3.2, .8), (.8, 2.8), (2.0, 3.2), (3.2, 2.6)]: a.add_patch(Circle((gx, gy), .17, color=MUTE))
    for gx, gy in [(1.2, 2.0), (2.0, 2.0), (2.8, 2.0)]:
        a.add_patch(Circle((gx, gy), .17, color=A)); a.annotate('', (gx + .5, gy + .5), (gx + .1, gy + .1), arrowprops=dict(arrowstyle='->', color=A, lw=1.4))
    a = axs[5]
    yy = np.linspace(0, 4, 400)
    prof = np.interp(yy, [0, .5, .9, 1.25, 1.5, 1.75, 2.0, 2.25, 2.6, 3.0, 3.5, 4], [1.15, 1.15, .9, 1.0, .85, 1.05, 1.25, 1.0, .85, .95, 1.2, 1.25])
    a.fill_betweenx(yy, 0, prof, color=P); a.fill_betweenx(yy, 4 - prof, 4, color=P)
    a.add_patch(Rectangle((0, 0), 4, 4, fill=False, ec=MUTE, lw=.8))
    for a, t in zip(axs, ['Proximidad', 'Semejanza', 'Cierre', 'Buena\ncontinuación', 'Destino común', 'Figura‑fondo']): a.set_title(t, fontsize=8.6, color=INK)
    save(fig, 'gestalt-leyes.png')

# U7 · insight frente a ensayo y error
if want('insight-ensayo'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 2.8), sharey=True)
    rng = np.random.default_rng(3); n = np.arange(1, 21)
    te = 150 * np.exp(-n / 6) + 15 + rng.normal(0, 14, 20) * np.exp(-n / 10); te = np.clip(te, 12, None)
    a1.plot(n, te, 'o-', color=P, lw=1.8, ms=4); a1.set_title('Ensayo y error (Thorndike)')
    ti = np.where(n < 8, 160 + rng.normal(0, 6, 20), 15 + rng.normal(0, 2, 20))
    a2.plot(n, ti, 'o-', color=A, lw=1.8, ms=4); a2.set_title('Insight (Köhler)'); a2.annotate('solución súbita', (8, 30), (11, 110), fontsize=8, arrowprops=dict(arrowstyle='->', color=MUTE))
    for a in (a1, a2): clean(a); a.set_xlabel('Ensayos'); a.set_xticks([]); a.set_yticks([])
    a1.set_ylabel('Tiempo hasta la solución'); note(a1, y=-.25)
    save(fig, 'insight-ensayo.png')

# U8 · mapa de escuelas
if want('mapa-escuelas'):
    fig, ax = canvas(8.6, 3.6, 15, 6)
    cols = [('Alemania', 'Wundt\nWürzburgo\nEbbinghaus\nGestalt', P), ('Austria', 'Brentano\nPsicoanálisis', A), ('Reino Unido', 'Galton\nPearson, Spearman\nPsicología animal\nBartlett', G),
            ('Francia', 'Charcot\nJanet\nBinet y Simon', V), ('Rusia', 'Séchenov\nPávlov\nBéjterev', Y), ('EE. UU.', 'Estructuralismo\nFuncionalismo\nConductismo\nNeoconductismo', T)]
    for i, (p, t, c) in enumerate(cols):
        x = 1.25 + i * 2.5; box(ax, x, 5.2, 2.2, .75, p, c, 9, tc=INK if c == Y else 'white')
        box(ax, x, 2.75, 2.2, 3.6, t, SOFT, 8.0, tc=INK, bold=False, ec=c)
    ax.text(7.5, .3, 'Principales focos de la psicología científica hasta 1939', ha='center', fontsize=7.6, color=MUTE)
    save(fig, 'mapa-escuelas.png')

# U9 · caja problema
if want('caja-problema'):
    fig = plt.figure(figsize=(8.0, 3.2)); ax = fig.add_axes([0, .05, .46, .9]); a2 = fig.add_axes([.56, .2, .41, .7])
    ax.set_xlim(0, 10); ax.set_ylim(0, 7); ax.axis('off')
    ax.add_patch(Rectangle((1, 1), 5.2, 4.4, fill=False, ec=INK, lw=2))
    for xx in np.arange(1.5, 6.2, .55): ax.plot([xx, xx], [1, 5.4], color=MUTE, lw=.8)
    ax.add_patch(Rectangle((5.95, 1.3), .25, 2.6, color=Y)); ax.text(6.4, 2.4, 'puerta', fontsize=7.6, color=INK)
    ax.plot([3.4, 3.4], [5.4, 3.3], color=A, lw=1.6); ax.add_patch(Circle((3.4, 3.2), .14, color=A)); ax.text(2.0, 3.15, 'cuerda', fontsize=7.6, color=A)
    ax.plot([3.4, 6.1], [5.4, 4.2], color=A, lw=1.2, ls='--'); ax.text(6.4, 4.4, 'pestillo', fontsize=7.6, color=A)
    ax.add_patch(FancyBboxPatch((1.8, 1.25), 1.6, .9, boxstyle='round,pad=0.05', fc=MUTE, ec='none')); ax.text(2.6, 1.7, 'gato', ha='center', va='center', fontsize=7.8, color='white')
    ax.add_patch(Circle((8.3, 1.6), .5, color=G)); ax.text(8.3, .7, 'comida', ha='center', fontsize=7.6, color=G)
    ax.text(3.6, 6.2, 'Caja problema (esquema)', ha='center', fontsize=9, color=INK, weight='bold')
    rng = np.random.default_rng(7); n = np.arange(1, 25)
    lat = 160 * np.exp(-n / 6) + 10 + np.abs(rng.normal(0, 25, 24)) * np.exp(-n / 9)
    a2.plot(n, lat, 'o-', color=P, lw=1.6, ms=3.5); a2.set_xlabel('Ensayos'); a2.set_ylabel('Tiempo de escape'); a2.set_xticks([]); a2.set_yticks([]); clean(a2)
    a2.set_title('Descenso gradual e irregular', fontsize=9)
    a2.text(0, -.24, 'Esquema ilustrativo, no datos', transform=a2.transAxes, fontsize=7.4, color=MUTE)
    fig.savefig(f'{OUT}/caja-problema.png', dpi=200); plt.close(fig); print('ok caja-problema.png')

# U9 · Little Albert
if want('little-albert'):
    fig, ax = canvas(7.8, 3.3, 13, 5.4)
    st = [('≈9 meses', 'Prueba basal', 'Sin miedo a la rata,\nel conejo, el perro\nni las máscaras', P),
          ('≈11 meses', 'Condicionamiento', 'Rata blanca (EC) +\ngolpe a una barra\nmetálica (EI)', A),
          ('Días\ndespués', 'Generalización', 'Conejo, perro, abrigo\nde piel, máscara:\nrespuestas desiguales', Y),
          ('≈1 año', 'Última prueba', 'Sale del hospital\nsin descondicionar', V)]
    for i, (e, t, d, c) in enumerate(st):
        x = 1.7 + i * 3.2; box(ax, x, 4.1, 2.7, .9, t, c, 8.8, tc=INK if c == Y else 'white')
        ax.text(x, 4.85, e, ha='center', va='bottom', fontsize=8, color=c, weight='bold'); ax.text(x, 3.4, d, ha='center', va='top', fontsize=7.8, color=INK)
        if i < 3: arr(ax, (x + 1.4, 4.1), (x + 1.8, 4.1))
    ax.text(6.5, .35, 'Basado en Watson y Rayner (1920); edades aproximadas', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'little-albert.png')

# U9 · identidad de Albert
if want('albert-identidad'):
    fig, ax = canvas(7.4, 2.8, 13, 4.6)
    box(ax, 3.3, 3.9, 5.6, .85, 'Douglas Merritte', MUTE, 9.4)
    ax.text(3.3, 3.2, 'Beck, Levinson e Irons (2009)\nFridlund et al. (2012)\nhidrocefalia; murió en 1925 a los 6 años', ha='center', va='top', fontsize=8, color=INK)
    box(ax, 9.7, 3.9, 5.6, .85, 'William Albert Barger', G, 9.4)
    ax.text(9.7, 3.2, 'Powell, Digdon, Harris y Smithson (2014)\ncoinciden nombre, peso y madre nodriza;\nvivió hasta 2007', ha='center', va='top', fontsize=8, color=INK)
    arr(ax, (4.8, .75), (8.2, .75), G, lw=2.2); ax.text(6.5, .25, 'Hacia dónde se inclina hoy la evidencia', ha='center', fontsize=8.2, color=G, weight='bold')
    save(fig, 'albert-identidad.png')

# U10 · Tolman y Honzik
if want('tolman-honzik'):
    d = np.arange(1, 18)
    rew = 3 + 7 * np.exp(-(d - 1) / 3.5); nor = 7 + 3 * np.exp(-(d - 1) / 6)
    lat = np.where(d <= 11, nor, 2.6 + .3 * np.exp(-(d - 12)))
    fig, ax = plt.subplots(figsize=(6.6, 3.2))
    ax.plot(d, rew, 'o-', color=P, lw=2, ms=4, label='Siempre recompensado'); ax.plot(d, nor, 's-', color=MUTE, lw=2, ms=4, label='Nunca recompensado')
    ax.plot(d, lat + np.where(d <= 11, .35, 0), '^-', color=A, lw=2, ms=4, label='Recompensado desde el día 11'); ax.axvline(11, color=A, ls=':')
    ax.set_xlabel('Días'); ax.set_ylabel('Errores medios'); ax.set_yticks([]); clean(ax); ax.legend(fontsize=7.6, frameon=False)
    note(ax, y=-.28)
    save(fig, 'tolman-honzik.png')

# U10 · Hull
if want('hull'):
    fig, ax = canvas(7.4, 3.2, 13, 5.4)
    box(ax, 2.0, 3.9, 3.2, 1.2, 'sHr\nfuerza del hábito', P, 8.8); ax.text(2.0, 2.95, 'nº de ensayos reforzados', ha='center', va='top', fontsize=7.6, color=MUTE)
    ax.text(4.1, 3.9, '×', ha='center', va='center', fontsize=20, color=INK)
    box(ax, 6.2, 3.9, 3.2, 1.2, 'D\nimpulso', A, 8.8); ax.text(6.2, 2.95, 'horas de privación', ha='center', va='top', fontsize=7.6, color=MUTE)
    ax.text(8.3, 3.9, '=', ha='center', va='center', fontsize=20, color=INK)
    box(ax, 10.8, 3.9, 3.6, 1.2, 'sEr\npotencial excitatorio', G, 8.8); ax.text(10.8, 2.95, '→ probabilidad y fuerza\nde la respuesta', ha='center', va='top', fontsize=7.6, color=MUTE)
    box(ax, 6.5, .9, 9.0, .9, '1952: añade K (incentivo), V (intensidad del estímulo) e inhibición', SOFT, 8.4, tc=INK, ec=MUTE)
    save(fig, 'hull.png')

# U11 · programas de refuerzo
if want('programas-refuerzo'):
    fig, axs = plt.subplots(1, 4, figsize=(8.4, 2.7), sharey=True)
    t = np.linspace(0, 10, 1000)
    ph = t % 2.0; inc = np.where(ph < .5, 0, 1.0); rf = np.cumsum(inc) * (10 / 1000) * 2.2
    rv = t * 3.0; iv = t * 1.4
    ph2 = (t % 2.5) / 2.5; ifx = np.cumsum(ph2 ** 3) * (10 / 1000) * 3.2
    for a, y, ttl, c in zip(axs, [rf, rv, ifx, iv], ['Razón fija', 'Razón variable', 'Intervalo fijo', 'Intervalo variable'], [P, G, A, V]):
        a.plot(t, y, color=c, lw=2); a.set_title(ttl, fontsize=9); a.set_xticks([]); a.set_yticks([]); clean(a); a.set_xlabel('Tiempo', fontsize=8)
    for a, txt in zip(axs, ['pausa tras el\nrefuerzo y carrera', 'tasa alta\ny constante', 'festoneado', 'tasa moderada\ny constante']):
        a.text(.05, .93, txt, transform=a.transAxes, fontsize=7.2, color=INK, va='top')
    axs[0].set_ylabel('Respuestas acumuladas', fontsize=8.4); note(axs[0], y=-.3)
    save(fig, 'programas-refuerzo.png')

# U11 · Garcia y Koelling
if want('garcia-koelling'):
    fig, ax = canvas(6.6, 3.5, 11, 6)
    ax.text(6.8, 5.6, 'Estímulo que se prueba después', ha='center', fontsize=8.8, color=INK, weight='bold')
    ax.text(4.8, 5.0, 'Sabor', ha='center', fontsize=8.6, color=P, weight='bold'); ax.text(8.8, 5.0, 'Luz y sonido', ha='center', fontsize=8.6, color=P, weight='bold')
    ax.text(.5, 2.55, 'Consecuencia', rotation=90, ha='center', va='center', fontsize=8.8, color=INK, weight='bold')
    ax.text(1.75, 3.7, 'Malestar\n(radiación\no LiCl)', ha='center', va='center', fontsize=8, color=INK); ax.text(1.75, 1.4, 'Descarga\neléctrica', ha='center', va='center', fontsize=8, color=INK)
    for x, y, t, c in [(4.8, 3.7, 'Evitación\nfuerte', G), (8.8, 3.7, 'Evitación\ndébil', '#C9D4DC'), (4.8, 1.4, 'Evitación\ndébil', '#C9D4DC'), (8.8, 1.4, 'Evitación\nfuerte', G)]:
        box(ax, x, y, 3.7, 2.0, t, c, 9.4, tc='white' if c == G else INK)
    ax.text(5.6, .0, 'Garcia y Koelling (1966): no todas las asociaciones se aprenden igual', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'garcia-koelling.png')

# U12 · línea cognitiva
if want('linea-cognitiva'):
    timeline([(1948, 'Hixon', 'Lashley: orden\nserial'), (1956, 'MIT', 'Newell y Simon;\nChomsky; Miller'), (1956, 'Miller', '7 ± 2'), (1956, 'Bruner et al.', 'A Study of\nThinking'),
              (1958, 'Broadbent', 'filtro'), (1959, 'Chomsky', 'reseña de\nSkinner'), (1960, 'Harvard', 'Centro de\nEstudios Cognitivos'), (1960, 'Miller et al.', 'Plans'),
              (1967, 'Neisser', 'Cognitive\nPsychology'), (1968, 'Atkinson y\nShiffrin', 'modelo modal'), (1986, 'PDP', 'conexionismo'), (2001, 'Cowan', '≈4 ± 1')],
             'linea-cognitiva.png', w=9.4, h=3.3, xl=16)

# U12 · Miller y Cowan
if want('miller-cowan'):
    fig, ax = plt.subplots(figsize=(4.2, 3.0))
    ax.bar([0, 1], [7, 4], yerr=[2, 1], color=[P, A], width=.55, capsize=8, error_kw=dict(ecolor=INK, lw=1.2))
    ax.set_xticks([0, 1]); ax.set_xticklabels(['Miller (1956)\n7 ± 2', 'Cowan (2001)\n≈4 ± 1']); ax.set_ylabel('Fragmentos (chunks)'); ax.set_ylim(0, 10); clean(ax)
    save(fig, 'miller-cowan.png')

# U12 · OSC 2015
if want('osc-2015'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(6.8, 3.0))
    a1.bar([0, 1], [97, 36], color=[P, A], width=.55); a1.set_xticks([0, 1]); a1.set_xticklabels(['Originales', 'Réplicas']); a1.set_ylim(0, 110)
    a1.set_title('Estudios con p < 0,05 (%)'); [a1.text(i, v + 3, f'{v} %', ha='center', fontsize=9, color=INK, weight='bold') for i, v in enumerate([97, 36])]
    a2.bar([0, 1], [.403, .197], color=[P, A], width=.55); a2.set_xticks([0, 1]); a2.set_xticklabels(['Originales', 'Réplicas']); a2.set_ylim(0, .5)
    a2.set_title('Tamaño del efecto medio (r)'); [a2.text(i, v + .015, f'{v:.3f}'.replace('.', ','), ha='center', fontsize=9, color=INK, weight='bold') for i, v in enumerate([.403, .197])]
    for a in (a1, a2): clean(a); a.set_yticks([])
    a1.text(0, -.2, 'Datos: Open Science Collaboration (2015), 100 estudios', transform=a1.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'osc-2015.png')

# U13 · posfreudianos
if want('posfreudianos'):
    fig, ax = canvas(8.4, 3.8, 15, 6.4)
    box(ax, 7.5, 5.7, 2.6, .8, 'Freud', P, 10)
    box(ax, 1.4, 5.7, 2.2, .7, 'Adler (1911)', MUTE, 8.2); box(ax, 13.6, 5.7, 2.2, .7, 'Jung (1913)', MUTE, 8.2)
    arr(ax, (6.2, 5.7), (2.55, 5.7), MUTE, ls='--'); arr(ax, (8.8, 5.7), (12.45, 5.7), MUTE, ls='--')
    ax.text(4.4, 5.95, 'disidencias tempranas', ha='center', fontsize=7.2, color=MUTE)
    br = [('Psicología del yo', 'Anna Freud (1936)\nHartmann (1939)', G), ('Relaciones de objeto', 'Klein\nWinnicott\nFairbairn (1952)', A),
          ('Culturalismo', 'Horney (1937)\nFromm (1941)\nSullivan (1953)', V), ('Hermenéutico', 'Ricoeur (1965)\nLacan (1966)\nHabermas (1968)', Y)]
    for i, (t, d, c) in enumerate(br):
        x = 1.9 + i * 3.73; arr(ax, (7.5, 5.25), (x, 4.0), MUTE, lw=1)
        box(ax, x, 3.6, 3.3, .75, t, c, 8.6, tc=INK if c == Y else 'white'); ax.text(x, 3.0, d, ha='center', va='top', fontsize=7.8, color=INK)
    save(fig, 'posfreudianos.png')

# U14 · Davis y McDermid
if want('davis-mcdermid'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.6, 3.5))
    lv = ['Fisiológicas', 'Seguridad', 'Pertenencia', 'Estima', 'Autorrealización']; cs = [P, T, G, Y, A]
    a1.set_xlim(0, 11.5); a1.set_ylim(0, 10); a2.set_xlim(0, 13); a2.set_ylim(0, 10)
    for a in (a1, a2): a.axis('off')
    for i, (l, c) in enumerate(zip(lv, cs)):
        a1.add_patch(Rectangle((.3 + i * 1.65, .8 + i * 1.6), 3.4, 1.4, color=c)); a1.text(2.0 + i * 1.65, 1.5 + i * 1.6, l, ha='center', va='center', fontsize=7.2, color='white' if c != Y else INK, weight='bold')
        y0 = .8 + i * 1.6; hw0 = 4.5 * (1 - i / 5); hw1 = 4.5 * (1 - (i + 1) / 5)
        a2.add_patch(plt.Polygon([(5 - hw0, y0), (5 + hw0, y0), (5 + hw1, y0 + 1.6), (5 - hw1, y0 + 1.6)], color=c, ec='white'))
        if i < 4: a2.text(5, y0 + .75, l, ha='center', va='center', fontsize=7.0, color='white' if c != Y else INK, weight='bold')
    a2.annotate('Autorrealización', (5.4, 7.6), (7.2, 8.9), fontsize=7.4, color=A, weight='bold', arrowprops=dict(arrowstyle='-', color=A))
    a1.set_title('Escalera (Davis, 1957)', fontsize=9); a2.set_title('Pirámide (McDermid, 1960)', fontsize=9)
    fig.text(.5, .02, 'Maslow (1943, 1954) no dibujó ninguna pirámide (Bridgman et al., 2019). Esquema ilustrativo.', ha='center', fontsize=7.6, color=A)
    save(fig, 'davis-mcdermid.png')

# U15 · cronología España
if want('cronologia-espana'):
    r1 = [(1902, 'Simarro', 'cátedra en\nMadrid'), ('1910‑20', 'Institutos', 'orientación\nprofesional'), (1939, 'Guerra Civil', 'exilio de\nMira i López'),
          (1946, 'Revista', 'Psicología General\ny Aplicada'), (1948, 'CSIC', 'Dpto. Psicología\nExperimental'), (1952, 'SEP', 'Sociedad\nEspañola'),
          ('1953‑54', 'Escuela', 'de Madrid'), (1968, 'Universidad', 'especialidad en\nFilosofía y Letras')]
    r2 = [(1979, 'Ley 43/1979', 'Colegio Oficial'), (1987, 'Código', 'Deontológico'), (1990, 'RD 1428/1990', 'licenciatura'), (1993, 'PIR', '1.ª convocatoria\nestatal'),
          (1998, 'RD 2490/1998', 'Psicología\nClínica'), (2003, 'Ley 44/2003', 'LOPS'), (2011, 'Ley 33/2011', 'Psicólogo General\nSanitario'), (2025, 'Plan de Acción', 'Salud Mental\n2025‑2027')]
    fig, ax = canvas(8.6, 5.4, 14, 9)
    for row, (evs, y0, ttl) in enumerate([(r1, 6.6, 'De la psicotecnia a la universidad'), (r2, 2.2, 'La profesión regulada')]):
        ax.text(.2, y0 + 1.95, ttl, fontsize=8.8, color=INK, weight='bold')
        xs = np.linspace(.9, 13.1, len(evs)); ax.plot([.4, 13.6], [y0, y0], color=MUTE, lw=2)
        for i, ((yr, a, d), x) in enumerate(zip(evs, xs)):
            c = COLS[(i + row) % len(COLS)]; ax.plot([x], [y0], 'o', color=c, ms=8)
            ax.text(x, y0 + .3, str(yr), ha='center', va='bottom', fontsize=8.2, color=c, weight='bold')
            ax.text(x, y0 - .3, a, ha='center', va='top', fontsize=7.6, color=INK, weight='bold')
            ax.text(x, y0 - .8, d, ha='center', va='top', fontsize=7.0, color=MUTE, linespacing=1.15)
    save(fig, 'cronologia-espana.png')

# U16 · confidencialidad
if want('confidencialidad'):
    fig, ax = canvas(7.8, 4.0, 13, 6.8)
    qs = ['¿Riesgo grave para el\npaciente o para terceros?', '¿Mandato judicial?', '¿Menor en situación\nde riesgo?']
    for i, q in enumerate(qs):
        y = 5.8 - i * 1.75; box(ax, 3.2, y, 4.6, 1.1, q, P, 8.4)
        if i < 2: arr(ax, (3.2, y - .58), (3.2, y - 1.15)); ax.text(3.4, y - .85, 'no', fontsize=7.6, color=MUTE)
        arr(ax, (5.55, y), (7.5, y), A); ax.text(6.5, y + .12, 'sí', ha='center', fontsize=7.8, color=A, weight='bold')
    box(ax, 10.2, 4.05, 5.0, 3.6, 'Excepción al secreto:\n\nrevelar solo lo mínimo\nimprescindible, a quien\ncorresponda; informar al\npaciente si es posible;\ndocumentar la decisión', A, 8.2)
    arr(ax, (3.2, 2.3 - .58), (3.2, 1.1)); ax.text(3.4, 1.4, 'no', fontsize=7.6, color=MUTE)
    box(ax, 3.2, .6, 4.6, .85, 'Mantener el secreto profesional', G, 8.6)
    ax.text(10.2, 1.4, 'Esquema conceptual: no sustituye\nal código ni a la ley', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'confidencialidad.png')

# U16 · Milgram y Burger
if want('milgram-burger'):
    fig, ax = plt.subplots(figsize=(4.4, 3.0))
    ax.bar([0, 1], [82.5, 70], color=[P, A], width=.55); ax.set_ylim(0, 100)
    for i, v in enumerate([82.5, 70]): ax.text(i, v + 2.5, pct(v), ha='center', fontsize=9.5, color=INK, weight='bold')
    ax.set_xticks([0, 1]); ax.set_xticklabels(['Milgram (1963)', 'Burger (2009)']); ax.set_ylabel('Dispuestos a seguir\npasados 150 V (%)'); clean(ax)
    ax.text(0, -.25, 'Diferencia no significativa (Burger, 2009)', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'milgram-burger.png')
