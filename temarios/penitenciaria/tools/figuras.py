"""Figuras propias del temario de Psicología Penitenciaria. python3 tools/figuras.py → img/*"""
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
    fig.tight_layout(); fig.savefig(f'{OUT}/{name}', dpi=200); plt.close(fig)
    from PIL import Image, ImageChops
    im = Image.open(f'{OUT}/{name}').convert('RGB'); bg = Image.new('RGB', im.size, 'white')
    bb = ImageChops.difference(im, bg).point(lambda v: 255 if v > 12 else 0).getbbox()
    if bb:
        m = 30; im.crop((max(0, bb[0] - m), max(0, bb[1] - m), min(im.width, bb[2] + m), min(im.height, bb[3] + m))).save(f'{OUT}/{name}')
    print('ok', name)
def save2(fig, name):
    _tl = fig.tight_layout; fig.tight_layout = lambda *a, **k: None; save(fig, name)

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

def txt(ax, x, y, t, fs=8.4, c=INK, **k):
    k.setdefault('ha', 'center'); k.setdefault('va', 'center'); ax.text(x, y, t, fontsize=fs, color=c, **k)

# U1 · criterios de anormalidad

def txt(ax, x, y, t, fs=8.4, c=INK, **k):
    k.setdefault('ha', 'center'); k.setdefault('va', 'center'); ax.text(x, y, t, fontsize=fs, color=c, **k)

def table(name, head, rows, widths, hcols=None, w=8.0, rh=1.0, fs=7.8, hfs=8.6, first_bold=True):
    """Tabla dibujada: head = títulos de columna; rows = listas de celdas; widths en unidades."""
    W = sum(widths); H = len(rows) * rh + .9
    fig, ax = canvas(w, .42 * H + .3, W, H)
    xs = np.cumsum([0] + widths)
    hcols = hcols or [P] * len(head)
    for j, h in enumerate(head):
        if h: box(ax, (xs[j] + xs[j + 1]) / 2, H - .4, widths[j] - .12, .62 if '\n' not in h else .74, h, hcols[j], hfs if '\n' not in h else hfs - .8, tc=INK if hcols[j] == Y else 'white')
    for i, r in enumerate(rows):
        y = H - .8 - rh * (i + .5)
        if i % 2 == 0: ax.add_patch(Rectangle((0, y - rh / 2), W, rh, color=SOFT, zorder=0))
        for j, c in enumerate(r):
            txt(ax, (xs[j] + xs[j + 1]) / 2, y, c, fs, INK, weight='bold' if (j == 0 and first_bold) else 'normal', linespacing=1.2)
    save(fig, name)

def hbars(name, labels, vals, colors, xlabel, src, w=6.4, h=3.0, fmt=None, xmax=None):
    fig, ax = plt.subplots(figsize=(w, h))
    y = np.arange(len(labels))[::-1]
    ax.barh(y, vals, color=colors, height=.62)
    ax.set_yticks(y); ax.set_yticklabels(labels, fontsize=8.6, color=INK)
    m = xmax or max(vals) * 1.22; ax.set_xlim(0, m)
    for yi, v in zip(y, vals): ax.text(v + m * .012, yi, fmt(v) if fmt else f'{v:,}'.replace(',', '.'), va='center', fontsize=8.4, color=INK)
    ax.set_xlabel(xlabel, fontsize=8.6); clean(ax); ax.tick_params(axis='y', length=0)
    ax.xaxis.set_major_locator(matplotlib.ticker.MaxNLocator(5)); ax.xaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, p: f'{int(v):,}'.replace(',', '.')))
    ax.text(0, -.3, src, transform=ax.transAxes, fontsize=7.2, color=MUTE)
    save(fig, name)

def timeline(name, ev, w=8.4, h=3.2, cols=(P, G, Y, V, A, T)):
    n = len(ev); fig, ax = canvas(w, h, n * 1.1 + .6, 5)
    ax.plot([.3, n * 1.1 + .3], [2.5, 2.5], color=MUTE, lw=2)
    for i, (yr, d) in enumerate(ev):
        x = .85 + i * 1.1; up = i % 2 == 0; c = cols[i % len(cols)]
        ax.plot([x], [2.5], 'o', color=c, ms=8)
        txt(ax, x, 2.15 if up else 2.85, yr, 7.6, c, weight='bold', va='top' if up else 'bottom')
        txt(ax, x, 3.15 if up else 1.85, d, 7.0, INK, va='bottom' if up else 'top', linespacing=1.15)
    save(fig, name)

# ---------------- U1 ----------------
if want('linea-tiempo-prision'):
    timeline('linea-tiempo-prision.png', [('1764', 'Beccaria:\nDe los delitos\ny de las penas'), ('1777', 'Howard:\ninspección\nde cárceles'), ('1791', 'Panóptico\nde Bentham'),
             ('años 1820', 'Auburn:\nsilencio y\ntrabajo común'), ('1829', 'Eastern State:\naislamiento\ncelular'), ('1834-1854', 'Montesinos\nen el presidio\nde Valencia'),
             ('1840', 'Maconochie:\nsistema de\nmarcas'), ('años 1850', 'Crofton:\nsistema\nirlandés'), ('1876', 'Elmira:\ncondena\nindeterminada'),
             ('1931', 'Victoria Kent,\ndirectora general\nde Prisiones'), ('1979', 'LOGP:\nindividualización\ncientífica')], w=9.0, h=3.4)

if want('sistemas-penitenciarios'):
    table('sistemas-penitenciarios.png', ['', 'Filadélfico o celular', 'Auburniano', 'Progresivo'],
          [['Día', 'Aislamiento en la celda', 'Trabajo en común', 'Según la fase'],
           ['Noche', 'Aislamiento', 'Aislamiento', 'Según la fase'],
           ['Comunicación', 'Ninguna con otros presos', 'Regla del silencio', 'Aumenta al avanzar'],
           ['Idea de fondo', 'Reflexión y\narrepentimiento', 'Disciplina y\nproductividad', 'La libertad se gana\ncon la conducta'],
           ['Ejemplos', 'Walnut Street (1790),\nEastern State (1829)', 'Auburn, Nueva York\n(años 1820)', 'Maconochie, Crofton,\nMontesinos']],
          [2.2, 3.2, 3.2, 3.2], [INK, P, G, A], w=8.2, rh=1.15)

# ---------------- U2 ----------------
if want('fuentes-derecho'):
    fig, ax = canvas(8.0, 4.4, 13, 7.4)
    lv = [('Constitución Española\n(art. 25.2; art. 15)', A, 3.0), ('LOGP (LO 1/1979)\nCódigo Penal (LO 10/1995)', P, 4.6),
          ('Reglamento Penitenciario (RD 190/1996)', G, 6.2), ('Instrucciones y circulares de la SGIP', Y, 7.8)]
    for i, (t, c, wd) in enumerate(lv):
        box(ax, 4.6, 6.4 - i * 1.55, wd, 1.2, t, c, 8.2, tc=INK if c == Y else 'white', r=.05)
    txt(ax, 4.6, .4, 'más rango  ↑   ·   ↓  más detalle', 7.6, MUTE)
    box(ax, 11.1, 4.0, 3.4, 5.6, 'Normas\ninternacionales\n\nReglas Mandela\n(ONU, 2015)\n\nReglas de Bangkok\n(ONU, 2010)\n\nReglas Penitenciarias\nEuropeas (2006, rev. 2020)\n\nConvenio contra la\ntortura y CPT (1987)', V, 7.6, r=.1)
    arr(ax, (9.3, 4.0), (8.7, 4.0), V)
    note(ax, 'Esquema ilustrativo, no datos', y=-.05)
    save(fig, 'fuentes-derecho.png')

if want('competencias-territoriales'):
    fig, ax = plt.subplots(figsize=(7.4, 2.8))
    labs = ['Administración General\ndel Estado', 'Cataluña']; v = [48951, 8028]; r = ['120,6', '100,1']
    ax.barh([1, 0], v, color=[P, A], height=.55)
    for yi, vv, rr in zip([1, 0], v, r): ax.text(vv + 700, yi, f'{vv:,}'.replace(',', '.') + f' presos  ·  {rr} por 100.000', va='center', fontsize=8.4, color=INK)
    ax.set_yticks([1, 0]); ax.set_yticklabels(labs, fontsize=8.6); ax.set_xlim(0, 105000); ax.set_xticks([])
    for s in ('top', 'right', 'bottom'): ax.spines[s].set_visible(False)
    ax.tick_params(axis='y', length=0)
    ax.text(0, -.2, 'SPACE I agrupa al País Vasco (competencias desde el 1-10-2021)\ncon la Administración del Estado. Fuente: SPACE I 2024 (Consejo de Europa), datos a 31-1-2024.', transform=ax.transAxes, fontsize=7.2, color=MUTE, va='top')
    save(fig, 'competencias-territoriales.png')

# ---------------- U3 ----------------
if want('itinerario'):
    fig, ax = canvas(9.0, 4.4, 15, 7.2)
    box(ax, 1.4, 5.8, 2.2, 1.0, 'Ingreso', INK, 9)
    box(ax, 4.6, 5.8, 3.4, 1.3, 'Clasificación inicial\nJunta de Tratamiento propone\n(≤ 2 meses) · Centro\nDirectivo resuelve', P, 7.4)
    arr(ax, (2.5, 5.8), (2.9, 5.8))
    gs = [('1.er grado\nrégimen cerrado', A, 4.0), ('2.º grado\nrégimen ordinario', P, 2.6), ('3.er grado\nrégimen abierto', G, 1.2)]
    for t, c, y in gs:
        box(ax, 8.6, y + 0.6, 2.8, 1.0, t, c, 7.8); arr(ax, (6.3, 5.5), (7.2, y + .7), MUTE, lw=1)
    ax.annotate('', xy=(10.15, 1.8), xytext=(10.15, 4.6), arrowprops=dict(arrowstyle='<|-|>', color=MUTE, lw=1.2))
    txt(ax, 10.75, 3.2, 'progresión\ny regresión\n(revisión\n≤ 6 meses)', 6.8, MUTE)
    box(ax, 13.2, 5.8, 3.0, 1.0, 'Permisos ordinarios\n(desde 1/4 de la condena)', Y, 7.4, tc=INK)
    box(ax, 13.2, 4.3, 3.0, .9, 'Art. 100.2 RP\n(flexibilidad)', V, 7.6)
    box(ax, 13.2, 2.8, 3.0, .9, 'Libertad condicional\n(art. 90 CP)', T, 7.6)
    box(ax, 13.2, 1.3, 3.0, .9, 'Libertad definitiva', INK, 8)
    arr(ax, (13.2, 3.85), (13.2, 3.25)); arr(ax, (13.2, 2.35), (13.2, 1.75)); arr(ax, (13.2, 5.3), (13.2, 4.75))
    arr(ax, (10.0, 1.8), (11.7, 2.7), MUTE, lw=1)
    box(ax, 4.6, 1.3, 4.6, 1.0, 'Juez de Vigilancia Penitenciaria:\nrecursos y control de legalidad', SOFT, 7.6, tc=INK, ec=MUTE)
    arr(ax, (4.6, 1.8), (4.6, 5.1), MUTE, ls='--', lw=1)
    note(ax, y=-.03)
    save(fig, 'itinerario.png')

if want('grados-sexo'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.2, 3.0), gridspec_kw={'width_ratios': [1.3, 1]})
    v = [1.1, 80.8, 18.1]; n = [422, 29989, 6704]; lb = ['1.er grado', '2.º grado', '3.er grado']
    a1.bar(lb, v, color=[A, P, G], width=.6)
    for i, (vv, nn) in enumerate(zip(v, n)): a1.text(i, vv + 2, pct(vv) + f'\n({nn:,})'.replace(',', '.'), ha='center', fontsize=8, color=INK)
    a1.set_ylim(0, 100); a1.set_ylabel('% de penados clasificados', fontsize=8.4); clean(a1); a1.set_title('Penados por grado (AGE)', fontsize=9.2)
    a2.bar(['Mujeres', 'Hombres'], [32.0, 17.0], color=[V, P], width=.55)
    for i, vv in enumerate([32.0, 17.0]): a2.text(i, vv + 1, pct(vv), ha='center', fontsize=8.4)
    a2.set_ylim(0, 40); clean(a2); a2.set_title('% en tercer grado, por sexo', fontsize=9.2)
    fig.tight_layout(); fig.subplots_adjust(bottom=.2)
    fig.text(.01, .01, 'Fuente: SGIP, datos de la Administración General del Estado a 31-12-2024.', fontsize=7.2, color=MUTE)
    save2(fig, 'grados-sexo.png')

if want('permisos-requisitos'):
    fig, ax = canvas(7.6, 3.8, 12, 6.2)
    box(ax, 3.2, 5.4, 5.6, .8, 'Requisitos (art. 47.2 LOGP; art. 154 RP)', P, 8.6)
    for i, t in enumerate(['Estar clasificado en 2.º o 3.er grado', 'Haber cumplido 1/4 de la condena', 'No observar mala conducta', 'Informe preceptivo del Equipo Técnico']):
        box(ax, 3.2, 4.3 - i * .95, 5.6, .75, '✓  ' + t, SOFT, 8, tc=INK, bold=False, ec=MUTE)
    box(ax, 9.2, 5.4, 4.6, .8, 'Límites', A, 8.6)
    for i, t in enumerate(['Hasta 7 días por permiso', 'Máximo 36 días al año\nen 2.º grado', 'Máximo 48 días al año\nen 3.er grado']):
        box(ax, 9.2, 4.25 - i * 1.25, 4.6, 1.0, t, SOFT, 8, tc=INK, bold=False, ec=MUTE)
    note(ax, y=-.03)
    save(fig, 'permisos-requisitos.png')

if want('tipologia-delictiva'):
    hbars('tipologia-delictiva.png', ['Contra el patrimonio', 'Contra la salud pública', 'Violencia de género', 'Contra la libertad sexual'],
          [18054, 7531, 5497, 4190], [P, G, A, V], 'Personas presas (31-12-2024)', 'Fuente: Fiscalía General del Estado, Memoria 2025 (datos de la SGIP).', h=2.7)

if want('poblacion-reclusa'):
    fig, ax = plt.subplots(figsize=(6.0, 3.0))
    yrs = ['2013', '2021', '2023', '2024']; v = [66765, 55097, 56698, 59226]
    ax.bar(yrs, v, color=[MUTE, A, P, P], width=.55)
    for x, y in enumerate(v): ax.text(x, y + 800, f'{y:,}'.replace(',', '.'), ha='center', fontsize=8.6, color=INK)
    ax.set_ylim(0, 75000); clean(ax); ax.set_ylabel('Personas presas (31 de diciembre)', fontsize=8.4)
    ax.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, p: f'{int(v):,}'.replace(',', '.')))
    fig.tight_layout(); fig.subplots_adjust(bottom=.2)
    fig.text(.01, .01, 'Años con dato verificado; 2021 fue el mínimo de la serie. Fuente: Fiscalía General del Estado, Memoria 2025.', fontsize=7, color=MUTE)
    save2(fig, 'poblacion-reclusa.png')

if want('tasa-europa'):
    hbars('tasa-europa.png', ['Media europea', 'España: AGE', 'Mediana europea', 'Cataluña'], [127, 124, 110, 107], [MUTE, P, MUTE, A],
          'Personas presas por 100.000 habitantes', 'Fuente: SPACE I 2025 (Consejo de Europa).', h=2.6, xmax=160)

# ---------------- U4-U5 ----------------
if want('fines-pena'):
    table('fines-pena.png', ['Enfoque', 'Pregunta', 'Idea central', 'Autores'],
          [['Absolutas\n(retribución)', '¿Por qué castigar?', 'Se castiga porque se delinquió\n(quia peccatum est)', 'Kant, Hegel'],
           ['Prevención general\nnegativa', '¿Para qué? Para todos', 'Intimidar a la población', 'Feuerbach'],
           ['Prevención general\npositiva', '¿Para qué? Para todos', 'Reafirmar la vigencia\nde la norma', 'Jakobs'],
           ['Prevención especial\nnegativa', '¿Para qué? Para el autor', 'Inocuizar: impedir que\nvuelva a delinquir', '—'],
           ['Prevención especial\npositiva', '¿Para qué? Para el autor', 'Resocializar, reeducar', 'Von Liszt (1882)'],
           ['Mixtas', 'Combinación', 'Retribución como límite +\nprevención como fin', 'Dominantes en España'],
           ['Provención', 'Antes del conflicto', 'Atender necesidades básicas\ncuya frustración genera conflicto', 'Burton (1990)']],
          [2.6, 2.4, 3.6, 2.2], [INK, P, G, A], w=8.4, rh=1.05)

if want('medidas-alternativas'):
    table('medidas-alternativas.png', ['Medida', 'Artículos CP', 'Rasgo clave'],
          [['Suspensión de la ejecución', '80–87', 'Penas ≤ 2 años; extraordinaria (80.3);\ndrogodependientes hasta 5 años (80.5)'],
           ['Expulsión de extranjeros', '89', 'Sustituye la pena de prisión'],
           ['Trabajos en beneficio\nde la comunidad', '49 (RD 840/2011)', 'Requieren consentimiento;\nactividades de utilidad pública'],
           ['Localización permanente', '37', 'Cumplimiento en domicilio\no lugar fijado'],
           ['Multa', '50–53', 'Sistema de días-multa'],
           ['Libertad condicional', '90–92', 'Desde 2015, suspensión del resto\nde la pena; regla general 3/4']],
          [3.2, 2.2, 5.0], [P, G, A], w=8.2, rh=1.05)

# ---------------- U6 ----------------
if want('cronologia-profesion'):
    timeline('cronologia-profesion.png', [('1967', 'Central\nPenitenciaria de\nObservación'), ('1968', 'Decreto\n162/1968'), ('1970', 'Ley 39/1970:\nCuerpo Técnico'),
             ('1979', 'LOGP'), ('1981', 'Reglamento:\nart. 282\n(funciones)'), ('1996', 'Reglamento\nvigente\n(RD 190/1996)'), ('2025', 'Instrucción\n3/2025\n(art. 100.2)')], w=7.4, h=3.2)

if want('junta-equipo'):
    fig, ax = canvas(8.6, 4.4, 14, 7.4)
    box(ax, 3.6, 6.6, 6.4, .8, 'Junta de Tratamiento (arts. 272–273 RP)', P, 9)
    for i, t in enumerate(['Director (preside)', 'Subdirector de Tratamiento', 'Subdirector Médico', 'Técnicos de IIPP que intervinieron', 'Trabajador social', 'Educador', 'Jefe de Servicios']):
        txt(ax, 1.0, 5.8 - i * .52, '• ' + t, 8, INK, ha='left')
    box(ax, 3.6, 1.2, 6.4, 1.4, 'Propone: clasificación, progresiones\ny regresiones, permisos, art. 100.2,\nlibertad condicional · diseña el PIT', SOFT, 7.8, tc=INK, bold=False, ec=P)
    box(ax, 10.6, 6.6, 6.0, .8, 'Equipo Técnico (arts. 274–275 RP)', G, 9)
    for i, t in enumerate(['Psicólogo', 'Jurista', 'Trabajador social', 'Educador', 'Otros profesionales']):
        txt(ax, 8.2, 5.8 - i * .52, '• ' + t, 8, INK, ha='left')
    box(ax, 10.6, 1.2, 6.0, 1.4, 'Ejecuta: observación, programas\nde tratamiento, informes\n(p. ej., para permisos)', SOFT, 7.8, tc=INK, bold=False, ec=G)
    arr(ax, (7.6, 3.6), (6.9, 3.6), INK); txt(ax, 7.25, 4.05, 'informa', 7.2, MUTE)
    note(ax, y=-.03)
    save(fig, 'junta-equipo.png')

# ---------------- U7-U8 ----------------
if want('dolores-sykes'):
    fig, ax = canvas(6.8, 4.0, 11, 6.6)
    box(ax, 5.5, 3.3, 3.2, 1.1, 'Los dolores del\nencarcelamiento\n(Sykes, 1958)', INK, 8.6)
    it = [('Libertad', P), ('Bienes y servicios', G), ('Relaciones\nheterosexuales', V), ('Autonomía', Y), ('Seguridad', A)]
    for k, (t, c) in enumerate(it):
        an = np.pi / 2 + k * 2 * np.pi / 5; x = 5.5 + 3.9 * np.cos(an); y = 3.3 + 2.55 * np.sin(an)
        box(ax, x, y, 2.6, .9, 'Privación de\n' + t.lower() if k != 2 else 'Privación de\nrelaciones\nheterosexuales', c, 7.6, tc=INK if c == Y else 'white')
        arr(ax, (5.5 + 1.7 * np.cos(an), 3.3 + .75 * np.sin(an)), (x - 1.0 * np.cos(an), y - .5 * np.sin(an)), MUTE, lw=1)
    note(ax, y=-.03)
    save(fig, 'dolores-sykes.png')

if want('privacion-importacion'):
    fig, ax = canvas(7.6, 3.4, 13, 5.6)
    box(ax, 3.0, 4.2, 5.0, 1.6, 'Modelo de privación\n(Sykes, 1958)\nla subcultura responde a las\ncarencias del encierro', P, 7.8)
    box(ax, 10.0, 4.2, 5.0, 1.6, 'Modelo de importación\n(Irwin y Cressey, 1962)\nlos internos traen valores\ny vínculos del exterior', A, 7.8)
    box(ax, 6.5, 1.1, 6.6, 1.3, 'Modelo integrado: la adaptación depende\nde la institución y de la persona', G, 8.2)
    arr(ax, (3.6, 3.35), (5.2, 1.8)); arr(ax, (9.4, 3.35), (7.8, 1.8))
    note(ax, y=-.03)
    save(fig, 'privacion-importacion.png')

if want('stanford-bbc'):
    table('stanford-bbc.png', ['', 'Experimento de Stanford\n(Zimbardo, 1971)', 'BBC Prison Study\n(Reicher y Haslam, 2006)'],
          [['Diseño', 'Universitarios asignados al azar a\nguardias o presos; previsto para 2 semanas', 'Asignación al azar a guardias o presos;\ngrabado para televisión'],
           ['Lo que se contó', 'Los guardias se volvieron crueles\nde forma espontánea; se detuvo a los 6 días', 'Los guardias no asumieron la tiranía;\ncambios según identidad de grupo'],
           ['Críticas', 'Guardias orientados por el equipo;\nsin grupo de control; efectos de demanda\n(Le Texier, 2019)', 'Situación televisada; un solo estudio'],
           ['Conclusión actual', 'No demuestra que la situación\nconvierta a cualquiera en verdugo', 'La identidad social y el liderazgo\nexplican mejor la conducta del grupo']],
          [2.3, 4.6, 4.6], [INK, A, G], w=8.6, rh=1.35)

# ---------------- U9-U10 ----------------
if want('teorias-delito'):
    fig, ax = canvas(9.0, 4.8, 15, 8.0)
    cols = [('Biológico', A, ['Lombroso (1876)', 'Genética conductual\n(Rhee y Waldman, 2002)', 'MAOA × maltrato\n(Caspi et al., 2002)', 'Neurocriminología\n(Raine, 2013)']),
            ('Psicológico', P, ['Eysenck (1964)', 'Asociación diferencial\n(Sutherland, 1939)', 'Aprendizaje social\n(Akers; Bandura, 1973)', 'Psicopatía\n(Cleckley, 1941; Hare)']),
            ('Sociológico', G, ['Anomia (Merton, 1938);\ntensión (Agnew, 1992)', 'Subculturas (Cohen, 1955)', 'Control (Hirschi, 1969);\nautocontrol (1990)', 'Etiquetamiento (Lemert,\n1951; Becker, 1963)', 'Actividades rutinarias\n(Cohen y Felson, 1979)', 'Curso vital (Sampson y\nLaub, 1993); Moffitt (1993)'])]
    for j, (t, c, its) in enumerate(cols):
        x = 2.5 + j * 5.0; box(ax, x, 7.4, 4.4, .7, t, c, 9.2)
        for i, s in enumerate(its): box(ax, x, 6.4 - i * .9, 4.4, .78, s, SOFT, 7.2, tc=INK, bold=False, ec=c)
    box(ax, 7.5, .45, 14.6, .95, 'Modelos integradores: RNR (Andrews, Bonta y Hoge, 1990) · Triple Riesgo Delictivo (Redondo, 2008)\nGood Lives Model (Ward, 2002) · desistimiento (Maruna, 2001)', V, 7.8)
    save(fig, 'teorias-delito.png')

if want('central-eight'):
    fig, ax = canvas(7.4, 3.8, 12, 6.2)
    box(ax, 6, 5.6, 6.4, .7, '«Big Four»: los predictores más potentes', A, 8.6)
    for i, t in enumerate(['Historia de conducta\nantisocial', 'Patrón de personalidad\nantisocial', 'Cogniciones\nantisociales', 'Asociaciones\nantisociales']):
        box(ax, 1.6 + i * 2.95, 4.3, 2.75, 1.1, t, A if i == 0 else '#D9775F', 7.6)
    box(ax, 6, 2.6, 6.4, .7, 'Otros cuatro factores', P, 8.6)
    for i, t in enumerate(['Familia y pareja', 'Escuela y trabajo', 'Ocio y tiempo libre', 'Consumo de\nsustancias']):
        box(ax, 1.6 + i * 2.95, 1.3, 2.75, 1.0, t, '#5D82A0', 7.6)
    txt(ax, 6, .2, 'Todos salvo la historia antisocial son dinámicos: necesidades criminógenas (Andrews y Bonta)', 7.2, MUTE)
    save(fig, 'central-eight.png')

if want('rnr'):
    fig, ax = canvas(7.6, 3.4, 12, 5.4)
    for i, (t, q, d, c) in enumerate([('Riesgo', '¿A quién?', 'Intensidad del\ntratamiento\nproporcional\nal riesgo', A), ('Necesidad', '¿Qué?', 'Intervenir sobre\nnecesidades\ncriminógenas\n(dinámicas)', P),
                                      ('Responsividad', '¿Cómo?', 'General: métodos\ncognitivo-conductuales.\nEspecífica: adaptar a\nla persona', G)]):
        x = 2.0 + i * 4.0; box(ax, x, 4.5, 3.4, .8, t, c, 9.4); txt(ax, x, 3.7, q, 8.6, c, weight='bold')
        box(ax, x, 2.0, 3.4, 2.2, d, SOFT, 7.8, tc=INK, bold=False, ec=c)
    note(ax, y=-.03)
    save(fig, 'rnr.png')

if want('triple-riesgo'):
    fig, ax = canvas(7.6, 3.6, 12, 6.0)
    for (x, y, t, c) in [(2.2, 4.6, 'Riesgos\npersonales\n(impulsividad,\ncreencias...)', A), (9.8, 4.6, 'Carencias de\napoyo prosocial\n(familia, escuela,\nrecursos)', P), (6.0, 4.9, 'Oportunidades\ndelictivas\n(objetivos sin\nprotección)', Y)]:
        box(ax, x, y, 3.2, 1.8, t, c, 7.8, tc=INK if c == Y else 'white'); arr(ax, (x, y - .95), (6.0, 1.75), MUTE)
    box(ax, 6.0, 1.15, 5.4, 1.0, 'Riesgo de conducta antisocial\n(Triple Riesgo Delictivo; Redondo, 2008)', INK, 8)
    note(ax, y=-.03)
    save(fig, 'triple-riesgo.png')

# ---------------- U11-U13 ----------------
if want('areas-evaluacion'):
    fig, ax = canvas(7.6, 3.8, 12, 6.2)
    for i, (t, c) in enumerate([('Historia personal\ny familiar', P), ('Proceso de\nsocialización', G), ('Área cognitiva', V), ('Área personal\ny emocional', A)]):
        box(ax, 1.6 + i * 2.95, 4.9, 2.7, 1.1, t, c, 8)
    box(ax, 6, 3.0, 10.6, 1.0, 'Integración de fuentes múltiples → informe y propuesta\n(clasificación, PIT, permisos, riesgo)', INK, 7.8)
    for i, t in enumerate(['Entrevista', 'Observación\nen el módulo', 'Tests e\ninstrumentos', 'Expediente\npenitenciario']):
        box(ax, 1.6 + i * 2.95, 1.0, 2.7, 1.0, t, SOFT, 7.8, tc=INK, ec=MUTE)
        arr(ax, (1.6 + i * 2.95, 1.55), (1.6 + i * 2.95, 2.55), MUTE, lw=1)
        arr(ax, (1.6 + i * 2.95, 4.3), (1.6 + i * 2.95, 3.45), MUTE, lw=1)
    note(ax, y=-.03)
    save(fig, 'areas-evaluacion.png')

if want('enfoques-riesgo'):
    table('enfoques-riesgo.png', ['', 'Juicio clínico\nno estructurado', 'Actuarial', 'Juicio profesional\nestructurado'],
          [['Cómo decide', 'Criterio libre\ndel profesional', 'Fórmula fija con\nfactores ponderados', 'Guía de factores +\njuicio final razonado'],
           ['Ejemplos', '—', 'Static-99R, VRAG,\nLSI-R', 'HCR-20 v3, SVR-20,\nSARA, RisCanvi'],
           ['Ventaja', 'Flexible, atiende\nal caso concreto', 'Fiable y transparente', 'Combina evidencia\ny flexibilidad;\norienta la gestión'],
           ['Límite', 'Poco fiable;\nsesgos', 'Factores sobre todo\nestáticos; rígido', 'Requiere formación;\nprecisión similar\nal actuarial']],
          [2.0, 3.0, 3.0, 3.0], [INK, MUTE, P, G], w=8.4, rh=1.3)

if want('precision-riesgo'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.2, 3.0), gridspec_kw={'width_ratios': [1, 1]})
    a1.bar(['Valor predictivo\npositivo', 'Valor predictivo\nnegativo'], [41, 91], color=[A, G], width=.55)
    for i, v in enumerate([41, 91]): a1.text(i, v + 2, f'{v} %', ha='center', fontsize=9)
    a1.set_ylim(0, 105); clean(a1); a1.set_title('Instrumentos de riesgo de violencia\n(medianas; Fazel et al., 2012)', fontsize=8.6); a1.tick_params(axis='x', labelsize=8)
    a2.bar(['Reincidencia\nviolenta', 'Reincidencia\ngeneral'], [.72, .70], color=[P, P], width=.55)
    for i, v in enumerate([.72, .70]): a2.text(i, v + .01, f'{v:.2f}'.replace('.', ','), ha='center', fontsize=9)
    a2.axhline(.5, color=MUTE, ls='--', lw=1); a2.text(1.42, .505, 'azar', fontsize=7.4, color=MUTE, ha='right', va='bottom')
    a2.set_ylim(.4, .8); a2.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, p: f'{v:.1f}'.replace('.', ','))); clean(a2); a2.set_title('AUC de RisCanvi\n(Karimi-Haghighi y Castillo, 2021)', fontsize=8.6); a2.tick_params(axis='x', labelsize=8)
    save(fig, 'precision-riesgo.png')

if want('reincidencia-cataluna'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(8.4, 3.2), gridspec_kw={'width_ratios': [1.5, 1]})
    l = ['Libertad sexual', 'Drogas', 'Violencia de género', 'Propiedad violenta', 'Propiedad no violenta']; v = [5.3, 5.5, 17.7, 27.4, 38.4]
    y = np.arange(5)[::-1]; a1.barh(y, v, color=[V, G, A, Y, P], height=.6); a1.set_yticks(y); a1.set_yticklabels(l, fontsize=8.2)
    for yi, vv in zip(y, v): a1.text(vv + .6, yi, pct(vv), va='center', fontsize=8)
    a1.set_xlim(0, 48); clean(a1); a1.set_title('Por delito principal', fontsize=9); a1.tick_params(axis='y', length=0)
    a2.bar(['Bajo', 'Medio', 'Alto'], [11, 25.1, 46], color=[G, Y, A], width=.6)
    for i, vv in enumerate([11, 25.1, 46]): a2.text(i, vv + 1, pct(vv), ha='center', fontsize=8)
    a2.set_ylim(0, 55); clean(a2); a2.set_title('Por nivel de riesgo RisCanvi', fontsize=9)
    fig.tight_layout(); fig.subplots_adjust(bottom=.18)
    fig.text(.01, .01, 'Reincidencia penitenciaria a 5 años de las personas excarceladas en 2015 en Cataluña. Fuente: CEJFE (2023).', fontsize=7.2, color=MUTE)
    save2(fig, 'reincidencia-cataluna.png')

if want('serie-reincidencia'):
    fig, ax = plt.subplots(figsize=(5.6, 2.9))
    lb = ['Estudio\n1992', 'Excarcelados\nen 2002', 'Estudio\n2014', 'Estudio\n2020']; v = [37.9, 40.3, 30.2, 21.1]
    ax.plot(range(4), v, color=A, lw=2, marker='o', ms=7)
    for i, vv in enumerate(v): ax.text(i, vv + 1.8, pct(vv), ha='center', fontsize=8.4)
    ax.set_xticks(range(4)); ax.set_xticklabels(lb, fontsize=8); ax.set_ylim(0, 50); ax.set_ylabel('% reincidencia penitenciaria', fontsize=8.4); clean(ax)
    ax.text(0, -.38, 'Cataluña. Fuente: CEJFE. No extrapolable al resto de España.', transform=ax.transAxes, fontsize=7.2, color=MUTE)
    save(fig, 'serie-reincidencia.png')

if want('clinico-forense'):
    table('clinico-forense.png', ['', 'Rol terapéutico', 'Rol pericial o evaluador'],
          [['Destinatario', 'La persona atendida', 'Tribunal, Junta de Tratamiento,\nJuez de Vigilancia'],
           ['Confidencialidad', 'Amplia', 'Limitada: lo dicho puede\nconstar en el informe'],
           ['Actitud', 'Apoyo y empatía', 'Neutralidad y escepticismo\nmetódico'],
           ['Fuentes', 'Sobre todo el relato\nde la persona', 'Fuentes múltiples: expediente,\nobservación, terceros, tests'],
           ['Objetivo', 'Aliviar el malestar\ny promover el cambio', 'Responder a una pregunta\n(riesgo, evolución, capacidad)']],
          [2.4, 4.2, 4.6], [INK, G, P], w=8.2, rh=1.2)

# ---------------- U15-U16 ----------------
if want('eficacia-programas'):
    fig, ax = plt.subplots(figsize=(7.6, 3.3))
    grp = ['Programas cognitivo-conductuales\n(Landenberger y Lipsey, 2005)', 'Tratamiento de agresores sexuales\n(Schmucker y Lösel, 2015)', 'SOTP británico\n(Mews et al., 2017)']
    sin = [40, 13.7, 8.0]; con = [30, 10.1, 10.0]
    x = np.arange(3); w = .34
    ax.bar(x - w / 2, sin, w, color=MUTE, label='Sin tratamiento (control)'); ax.bar(x + w / 2, con, w, color=[G, G, A], label='Con tratamiento')
    for i in range(3):
        ax.text(i - w / 2, sin[i] + .8, pct(sin[i]), ha='center', fontsize=8); ax.text(i + w / 2, con[i] + .8, pct(con[i]), ha='center', fontsize=8)
    ax.set_xticks(x); ax.set_xticklabels(grp, fontsize=7.8); ax.set_ylabel('% reincidencia', fontsize=8.4); ax.set_ylim(0, 48); clean(ax)
    ax.legend(fontsize=7.8, frameon=False)
    ax.text(0, -.36, 'Cada estudio mide un tipo de reincidencia distinto (general o sexual): compárense solo dentro de cada pareja de barras.', transform=ax.transAxes, fontsize=7, color=MUTE)
    save(fig, 'eficacia-programas.png')

if want('salud-mental-prision'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(8.4, 3.2), gridspec_kw={'width_ratios': [1.2, 1]})
    l = ['Trastorno por\nconsumo de sustancias', 'Ansiedad', 'Afectivos', 'Psicosis']; v = [76.2, 45.3, 41, 10.7]
    y = np.arange(4)[::-1]; a1.barh(y, v, color=[Y, P, V, A], height=.6); a1.set_yticks(y); a1.set_yticklabels(l, fontsize=8)
    for yi, vv in zip(y, v): a1.text(vv + 1, yi, pct(vv), va='center', fontsize=8)
    a1.set_xlim(0, 95); clean(a1); a1.tick_params(axis='y', length=0); a1.set_title('Prevalencia vital, varones presos en España\n(PRECA; Vicens et al., 2011)', fontsize=8.6)
    x = np.arange(2); w = .34
    a2.bar(x - w / 2, [3.6, 10.2], w, color=P, label='Hombres'); a2.bar(x + w / 2, [3.9, 14.1], w, color=V, label='Mujeres')
    for i, (h, m) in enumerate([(3.6, 3.9), (10.2, 14.1)]):
        a2.text(i - w / 2, h + .4, pct(h), ha='center', fontsize=7.8); a2.text(i + w / 2, m + .4, pct(m), ha='center', fontsize=7.8)
    a2.set_xticks(x); a2.set_xticklabels(['Psicosis', 'Depresión mayor'], fontsize=8); a2.set_ylim(0, 17); clean(a2); a2.legend(fontsize=7.6, frameon=False)
    a2.set_title('Prevalencia actual, 24 países\n(Fazel y Seewald, 2012)', fontsize=8.6)
    a2.set_yticks([0, 5, 10, 15])
    fig.tight_layout(); fig.subplots_adjust(bottom=.18)
    fig.text(.01, .01, 'Las medidas no son comparables entre sí: prevalencia vital (izquierda) frente a prevalencia actual (derecha).', fontsize=7.2, color=MUTE)
    save2(fig, 'salud-mental-prision.png')
