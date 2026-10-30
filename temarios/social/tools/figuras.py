"""Figuras propias del temario de Psicología Social. python3 tools/figuras.py → img/*"""
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

from matplotlib.ticker import FuncFormatter

def bars(name, labels, vals, colors, ylabel, ylim, fmt=pct, size=(5.2, 3.2), foot=None, ref=None, rot=0):
    fig, ax = plt.subplots(figsize=size)
    x = np.arange(len(vals)); ax.bar(x, vals, color=colors, width=.58)
    lo, hi = ylim; ax.set_ylim(lo, hi); span = hi - lo
    for i, v in enumerate(vals):
        ax.text(i, v + (span * .025 if v >= 0 else -span * .07), fmt(v), ha='center', fontsize=9.3, color=INK, weight='bold')
    ax.set_xticks(x); ax.set_xticklabels(labels, fontsize=8.3, rotation=rot); ax.set_ylabel(ylabel, fontsize=9); clean(ax)
    ax.yaxis.set_major_formatter(FuncFormatter(lambda v, _: f'{v:g}'.replace('.', ',').replace('-', '−')))
    if lo < 0: ax.axhline(0, color=MUTE, lw=.8)
    if ref is not None:
        ax.set_xlim(-.6, len(vals) - .4 + .75); ax.plot([-.6, len(vals) - .4], [ref[0]] * 2, color=MUTE, lw=.9, ls='--'); ax.text(len(vals) - .38, ref[0] + span * .015, ref[1], ha='left', va='bottom', fontsize=7.4, color=MUTE)
    if foot: ax.text(0, -.32 if not rot else -.42, foot, transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, name)

def num(v, d=2): return f'{v:+.{d}f}'.replace('.', ',') if v < 0 or d == 2 and v != abs(v) else f'{v:.{d}f}'.replace('.', ',')
def sgn(v, d=2): return (f'{v:+.{d}f}').replace('.', ',').replace('+', '+' if v > 0 else '')

# ---------- U1 ----------
if want('niveles-doise'):
    fig, ax = canvas(7.4, 3.8, 12, 6.4)
    lv = [('Nivel 4 · Ideológico', 'Creencias, valores y normas de la sociedad', '¿Por qué una cultura tolera ciertas desigualdades?', V),
          ('Nivel 3 · Posicional', 'Posición social y pertenencia a grupos', '¿Influye el estatus en cómo se percibe a alguien?', P),
          ('Nivel 2 · Interindividual y situacional', 'Interacción en una situación concreta', '¿Cambia mi conducta si otros me observan?', G),
          ('Nivel 1 · Intraindividual', 'Procesos dentro de la persona', '¿Cómo organizo la información sobre los demás?', Y)]
    for i, (t, d, q, c) in enumerate(lv):
        y = 5.6 - i * 1.5
        box(ax, 3.2, y, 6.0, 1.2, t + '\n' + d, c, 8.4, tc=INK if c == Y else 'white')
        ax.text(6.6, y, q, va='center', fontsize=8.6, color=INK, style='italic')
    ax.text(0.2, .05, 'Doise (1982): cuatro niveles de explicación que se complementan', fontsize=7.8, color=MUTE)
    note(ax, y=-.06); save(fig, 'niveles-doise.png')

if want('linea-tiempo'):
    fig, ax = canvas(9.0, 2.9, 30, 6.6)
    ev = [(1898, 'Triplett:\nciclistas y carretes'), (1908, 'Manuales de\nMcDougall y Ross'), (1924, 'F. H. Allport:\nSocial Psychology'),
          (1935, 'Sherif: normas\n(autocinético)'), (1946, 'Asch: formación\nde impresiones'), (1954, 'G. W. Allport:\ndefinición; prejuicio'),
          (1957, 'Festinger:\ndisonancia'), (1963, 'Milgram:\nobediencia'), (1970, 'Tajfel:\ngrupo mínimo'), (1980, 'Auge de la\ncognición social'),
          (2011, 'Comienza la crisis\nde replicación'), (2015, 'Open Science\nCollaboration'), (2024, 'Réplica multilab.\nde la disonancia')]
    x0, x1 = 1.0, 29.0
    ax.plot([x0, x1], [4, 4], color=MUTE, lw=2)  # eje
    cols = [P, A, G, Y, V, T]
    for i, (yr, t) in enumerate(ev):
        x = x0 + (x1 - x0) * i / (len(ev) - 1); c = cols[i % 6]; up = i % 2 == 0
        ax.plot([x, x], [4, 5.2 if up else 2.8], color=c, lw=1.4); ax.plot(x, 4, 'o', color=c, ms=7)
        ax.text(x, 4.0 + (.35 if not up else -.55), str(yr) if yr != 1980 else 'años 70‑80', ha='center', fontsize=7.6, weight='bold', color=INK)
        ax.text(x, 5.35 if up else 2.65, t, ha='center', va='bottom' if up else 'top', fontsize=7.6, color=INK, linespacing=1.15)
    note(ax, 'Esquema ilustrativo, no datos · espaciado no proporcional al tiempo', y=-.02); save(fig, 'linea-tiempo.png')

# ---------- U2 ----------
if want('rrr-flujo'):
    fig, ax = canvas(7.4, 2.6, 15, 4.4)
    st = [('Protocolo\ndetallado', P), ('Revisión por\npares antes de\nlos datos', V), ('Prerregistro\npúblico', G), ('Muchos\nlaboratorios\nindependientes', Y), ('Metaanálisis\nconjunto', A)]
    for i, (t, c) in enumerate(st):
        x = 1.5 + i * 3; box(ax, x, 2.4, 2.5, 1.7, t, c, 8.3, tc=INK if c == Y else 'white')
        if i < 4: arr(ax, (x + 1.3, 2.4), (x + 1.7, 2.4))
    ax.text(7.5, .55, 'Se publica el resultado sea cual sea: se evita el sesgo de publicación', ha='center', fontsize=8.2, color=INK)
    note(ax, y=-.04); save(fig, 'rrr-flujo.png')

if want('bosque-replicas'):
    fig, ax = plt.subplots(figsize=(7.4, 3.6))
    rows = [('Agotamiento del ego · Hagger et al. (2016)', .04, A), ('Agotamiento del ego · Vohs et al. (2021)', .06, A),
            ('Actor‑observador · Malle (2006)', 0.0, A), ('Amenaza del estereotipo · Shewach et al. (2019) |d|', .14, Y),
            ('Contacto, solo prerregistrados · Paluck et al. (2019)', .016, Y), ('Contacto · Paluck et al. (2019) Δ', .39, G),
            ('Sesgo de autoservicio · Mezulis et al. (2004)', .96, G)]
    for i, (t, v, c) in enumerate(rows[::-1]):
        ax.plot([0, v], [i, i], color=c, lw=2.2); ax.plot(v, i, 'o', color=c, ms=9)
        ax.text(v + .025, i, ('≈ 0' if v == 0 else f'{v:.3f}'.rstrip('0').replace('.', ',')), va='center', fontsize=8.4, color=INK)
    ax.set_yticks(range(len(rows))); ax.set_yticklabels([r[0] for r in rows[::-1]], fontsize=8.2)
    for r, lab in [(.2, 'pequeño'), (.5, 'medio'), (.8, 'grande')]:
        ax.axvline(r, color=MUTE, lw=.8, ls='--'); ax.text(r, len(rows) - .35, lab, ha='center', fontsize=7.6, color=MUTE)
    ax.axvline(0, color=INK, lw=.8); ax.set_xlim(-.02, 1.08); ax.set_ylim(-.6, len(rows) - .1)
    ax.set_xlabel('Tamaño del efecto (d o Δ)'); clean(ax); ax.xaxis.set_major_formatter(FuncFormatter(lambda v, _: f'{v:g}'.replace('.', ',')))
    save(fig, 'bosque-replicas.png')

# ---------- U3 ----------
if want('heuristicos'):
    fig, ax = canvas(7.6, 3.4, 15, 6.4)
    cols = [('Representatividad', '¿Se parece al\nprototipo de la categoría?', 'Ignorar las tasas base;\nfalacia de la conjunción', P),
            ('Disponibilidad', '¿Me vienen ejemplos\na la mente con facilidad?', 'Sobrestimar lo llamativo\ny lo reciente', G),
            ('Anclaje y ajuste', '¿De qué valor inicial\nparto?', 'Ajuste insuficiente\ndesde el ancla', A)]
    for i, (t, q, s, c) in enumerate(cols):
        x = 2.5 + i * 5
        box(ax, x, 5.5, 4.4, .9, t, c, 9.5)
        box(ax, x, 3.6, 4.4, 1.5, q, SOFT, 8.4, tc=INK, bold=False)
        arr(ax, (x, 2.8), (x, 2.3))
        box(ax, x, 1.5, 4.4, 1.3, s, 'white', 8.4, tc=c, ec=c)
    note(ax, 'Esquema ilustrativo, no datos · Tversky y Kahneman (1974)', y=-.03); save(fig, 'heuristicos.png')

# ---------- U4 ----------
if want('asch-calido-frio'):
    fig, ax = canvas(7.4, 3.4, 15, 6.4)
    base = ['inteligente', 'hábil', 'trabajador', None, 'decidido', 'práctico', 'prudente']
    for j, (w, c, imp) in enumerate([('CÁLIDO', A, 'Impresión global:\ngenerosa, sociable,\ncon sentido del humor'), ('FRÍO', P, 'Impresión global:\ndistante, calculadora,\npoco generosa')]):
        x = 2.4 + j * 6.6
        ax.text(x, 6.0, f'Lista {"A" if j == 0 else "B"}', ha='center', fontsize=9, weight='bold', color=INK)
        for i, t in enumerate(base):
            y = 5.4 - i * .62
            if t is None: box(ax, x, y, 2.6, .5, w, c, 8.6)
            else: ax.text(x, y, t, ha='center', va='center', fontsize=8.4, color=INK)
        arr(ax, (x + 1.5, 3.4), (x + 2.4, 3.4))
        box(ax, x + 3.6, 3.4, 2.3, 1.7, imp, SOFT, 7.6, tc=INK, bold=False)
    ax.text(7.5, .35, 'Con «educado / brusco» en el hueco, las impresiones apenas difieren: son rasgos periféricos', ha='center', fontsize=8, color=INK)
    note(ax, y=-.03); save(fig, 'asch-calido-frio.png')

if want('asch-anderson'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.6, 3.2))
    for a in (a1, a2): a.set_xlim(0, 10); a.set_ylim(0, 8); a.axis('off')
    a1.set_title('Asch: modelo configuracional', fontsize=9.5, weight='bold', color=P)
    pts = [(2.5, 5.8), (7.5, 5.8), (2.5, 2.4), (7.5, 2.4)]
    for (x, y), t in zip(pts, ['cálido', 'inteligente', 'decidido', 'prudente']):
        box(a1, x, y, 2.4, .9, t, P, 8.3)
    for i, j in [(0, 1), (2, 3), (0, 2), (1, 3)]:
            a1.plot([pts[i][0], pts[j][0]], [pts[i][1], pts[j][1]], color=MUTE, lw=.8, ls=':')
    a1.text(5, 4.1, 'Gestalt:\nel todo da\nsignificado\na cada rasgo', ha='center', va='center', fontsize=8, color=INK)
    a1.text(5, .5, 'Los rasgos centrales cambian\nel sentido de los demás', ha='center', fontsize=7.8, color=MUTE)
    a2.set_title('Anderson: promedio ponderado', fontsize=9.5, weight='bold', color=G)
    data = [('cálido', '+3', '× 0,30'), ('inteligente', '+2', '× 0,25'), ('decidido', '+1', '× 0,20'), ('prudente', '+1', '× 0,25')]
    for i, (t, v, w) in enumerate(data):
        y = 6.8 - i * 1.25
        a2.text(1.0, y, t, fontsize=8.5, va='center', color=INK); a2.text(5.2, y, v, fontsize=8.5, va='center', color=G, weight='bold'); a2.text(6.6, y, w, fontsize=8.5, va='center', color=MUTE)
    a2.plot([1, 9], [1.7, 1.7], color=MUTE, lw=.8)
    a2.text(5, 1.0, 'Impresión = Σ (valor × peso) / Σ pesos', ha='center', fontsize=8.2, color=INK)
    a2.text(1.0, .15, 'Valores y pesos inventados para el ejemplo', fontsize=7, color=MUTE)
    note(a1, y=-.06); save(fig, 'asch-anderson.png')

if want('ego-depletion'):
    bars('ego-depletion.png', ['Hagger et al. (2016)\n23 laboratorios', 'Vohs et al. (2021)\n36 laboratorios, N = 3.531'], [.04, .06], [A, A],
         'Tamaño del efecto (d)', (0, .32), fmt=lambda v: f'd = {v:.2f}'.replace('.', ','), size=(5.8, 3.1), ref=(.2, 'efecto pequeño (d = 0,2)'),
         foot='Réplicas multilaboratorio prerregistradas del agotamiento del ego')

# ---------- U5 ----------
if want('kelley-cubo'):
    fig, ax = canvas(7.8, 3.5, 17.4, 6.6)
    ax.text(8.7, 6.3, 'Ejemplo: «Ana se ríe con este cómico»', ha='center', fontsize=9, color=INK, style='italic')
    hdr = ['Consenso\n(¿los demás también?)', 'Distintividad\n(¿solo con este cómico?)', 'Consistencia\n(¿siempre que lo ve?)', 'Atribución']
    xs = [4.9, 8.5, 12.1, 15.6]
    for x, h in zip(xs, hdr): ax.text(x, 5.4, h, ha='center', va='center', fontsize=7.6, weight='bold', color=INK)
    rows = [('Persona', ['Bajo', 'Bajo', 'Alto'], 'A Ana:\n«le hace gracia todo»', P),
            ('Estímulo', ['Alto', 'Alto', 'Alto'], 'Al cómico:\n«es muy gracioso»', G),
            ('Circunstancias', ['Bajo', 'Alto', 'Bajo'], 'A la ocasión:\n«algo pasó ese día»', Y)]
    for i, (lab, v, res, c) in enumerate(rows):
        y = 4.0 - i * 1.45
        box(ax, 1.4, y, 2.4, 1.0, lab, c, 8.6, tc=INK if c == Y else 'white')
        for x, t in zip(xs[:3], v): box(ax, x, y, 2.2, .8, t, SOFT, 9, tc=INK)
        ax.text(xs[3], y, res, ha='center', va='center', fontsize=7.8, color=INK)
    note(ax, 'Esquema ilustrativo, no datos · Kelley (1967)', y=-.03); save(fig, 'kelley-cubo.png')

if want('weiner'):
    fig, ax = canvas(6.4, 3.6, 12, 7)
    ax.text(6.0, 6.6, 'Estabilidad', ha='center', fontsize=9, weight='bold', color=INK)
    ax.text(4.3, 5.8, 'Estable', ha='center', fontsize=8.6, color=INK); ax.text(8.9, 5.8, 'Inestable', ha='center', fontsize=8.6, color=INK)
    ax.text(-.2, 3.4, 'Locus', rotation=90, va='center', fontsize=9, weight='bold', color=INK)
    ax.text(1.25, 4.4, 'Interno', ha='center', va='center', fontsize=8.6, color=INK); ax.text(1.25, 2.3, 'Externo', ha='center', va='center', fontsize=8.6, color=INK)
    cells = [(4.3, 4.4, 'Capacidad', P), (8.9, 4.4, 'Esfuerzo\n(controlable)', G), (4.3, 2.3, 'Dificultad\nde la tarea', V), (8.9, 2.3, 'Suerte', Y)]
    for x, y, t, c in cells: box(ax, x, y, 4.0, 1.8, t, c, 9.5, tc=INK if c == Y else 'white')
    ax.text(6.4, .55, 'Estabilidad → expectativas futuras · Locus → orgullo y autoestima · Controlabilidad → culpa, ira o compasión', ha='center', fontsize=7.4, color=INK)
    note(ax, y=-.03); save(fig, 'weiner.png')

# ---------- U6 ----------
if want('jones-harris'):
    fig, ax = canvas(6.6, 3.4, 12, 6.6)
    ax.text(5.0, 6.2, 'Postura elegida', ha='center', fontsize=9, weight='bold', color=INK); ax.text(9.4, 6.2, 'Postura asignada', ha='center', fontsize=9, weight='bold', color=INK)
    ax.text(.3, 4.5, 'Ensayo a\nfavor de Castro', fontsize=8.5, va='center', color=INK); ax.text(.3, 2.2, 'Ensayo en\ncontra de Castro', fontsize=8.5, va='center', color=INK)
    c = [(5.0, 4.5, 'Se infiere actitud\nmuy favorable', G), (9.4, 4.5, 'Se sigue infiriendo\nactitud favorable', A), (5.0, 2.2, 'Se infiere actitud\nmuy desfavorable', G), (9.4, 2.2, 'Se sigue infiriendo\nactitud desfavorable', A)]
    for x, y, t, col in c: box(ax, x, y, 4.0, 1.6, t, col, 8.4)
    ax.text(6.0, .55, 'Aun sabiendo que el autor no eligió, se le atribuye la postura (algo más moderada)', ha='center', fontsize=7.8, color=INK)
    note(ax, 'Esquema ilustrativo, no datos · Jones y Harris (1967)', y=-.03); save(fig, 'jones-harris.png')

if want('falso-consenso'):
    bars('falso-consenso.png', ['Los que SÍ llevarían el cartel:\n% que creen que aceptaría', 'Los que NO lo llevarían:\n% que creen que se negaría'],
         [64.6, 68.8], [P, A], 'Estimación media (%)', (0, 100), size=(5.2, 3.2), ref=(50, '50 %'),
         foot='Ross, Greene y House (1977), estudio 3: cartel «Eat at Joe\'s» (decisión hipotética)')

# ---------- U7 ----------
if want('higgins'):
    fig, ax = canvas(7.0, 3.2, 14, 6)
    box(ax, 2.2, 3.0, 3.2, 1.3, 'Self real\ncómo me veo', P, 9)
    box(ax, 7.2, 4.6, 3.4, 1.2, 'Self ideal\ncómo me gustaría ser', G, 8.6)
    box(ax, 7.2, 1.4, 3.4, 1.2, 'Self debido\ncómo debería ser', V, 8.6)
    arr(ax, (3.9, 3.4), (5.4, 4.5)); arr(ax, (3.9, 2.6), (5.4, 1.5))
    box(ax, 11.8, 4.6, 3.6, 1.2, 'Abatimiento\ntristeza, decepción', SOFT, 8.4, tc=INK)
    box(ax, 11.8, 1.4, 3.6, 1.2, 'Agitación\nansiedad, culpa', SOFT, 8.4, tc=INK)
    arr(ax, (9.0, 4.6), (9.9, 4.6)); arr(ax, (9.0, 1.4), (9.9, 1.4))
    ax.text(4.6, 3.0, 'discrepancias', fontsize=7.6, color=MUTE, va='center')
    note(ax, 'Esquema ilustrativo, no datos · Higgins (1987)', y=-.04); save(fig, 'higgins.png')

# ---------- U8 ----------
if want('identidad-social'):
    fig, ax = canvas(8.0, 3.4, 17, 6.6)
    st = [('Categorización\n«nosotros» / «ellos»', P), ('Identificación\ncon el endogrupo', G), ('Comparación\nsocial', V), ('Búsqueda de\ndistintividad\npositiva', A)]
    for i, (t, c) in enumerate(st):
        x = 2.0 + i * 4.3; box(ax, x, 4.9, 3.4, 1.6, t, c, 8.6)
        if i < 3: arr(ax, (x + 1.75, 4.9), (x + 2.55, 4.9))
    ax.text(8.5, 3.3, 'Si la identidad resultante es negativa…', ha='center', fontsize=8.6, color=INK, style='italic')
    opts = [('Movilidad individual', 'dejar el grupo\n(fronteras permeables)'), ('Creatividad social', 'cambiar la dimensión\no el grupo de comparación'), ('Competición social', 'luchar por el estatus\n(fronteras impermeables)')]
    for i, (t, d) in enumerate(opts):
        x = 3.0 + i * 5.5; box(ax, x, 1.6, 4.6, 1.7, t + '\n' + d, SOFT, 8.2, tc=INK)
    note(ax, 'Esquema ilustrativo, no datos · Tajfel y Turner (1979)', y=-.03); save(fig, 'identidad-social.png')

# ---------- U9 ----------
if want('katz-funciones'):
    fig, ax = canvas(7.0, 3.4, 14, 6.6)
    f = [('Utilitaria', 'Me gusta el transporte público\nporque me ahorra dinero', P), ('De conocimiento', 'Ordena el mundo: «los productos\nde esta marca son fiables»', G),
         ('Expresiva de valores', 'Defender el reciclaje muestra\nquién soy y qué valoro', V), ('Defensiva del yo', 'Despreciar a otro grupo protege\nde dudas sobre uno mismo', A)]
    for i, (t, e, c) in enumerate(f):
        x = 3.6 + (i % 2) * 6.8; y = 4.8 - (i // 2) * 2.9
        box(ax, x, y + .55, 5.6, .8, t, c, 9.2); box(ax, x, y - .55, 5.6, 1.2, e, SOFT, 8.0, tc=INK, bold=False)
    note(ax, 'Esquema ilustrativo, no datos · Katz (1960)', y=-.03); save(fig, 'katz-funciones.png')

if want('escalas-actitud'):
    fig, ax = canvas(7.4, 3.6, 15, 7.2)
    ax.text(.2, 6.8, 'Escala Likert (sumativa)', fontsize=9.2, weight='bold', color=P)
    ax.text(.2, 6.1, '«El transporte público debería ser gratuito»', fontsize=8.6, color=INK)
    for i, t in enumerate(['Muy en\ndesacuerdo', 'En\ndesacuerdo', 'Ni de acuerdo\nni en desac.', 'De\nacuerdo', 'Muy de\nacuerdo']):
        x = 1.6 + i * 2.9; ax.add_patch(Circle((x, 5.2), .22, fc='white', ec=P, lw=1.4)); ax.text(x, 4.5, t, ha='center', va='center', fontsize=7.2, color=INK)
        ax.text(x, 5.2, str(i + 1), ha='center', va='center', fontsize=7.5, color=P)
    ax.text(.2, 3.4, 'Diferencial semántico (Osgood)', fontsize=9.2, weight='bold', color=G)
    for j, (a, b, d) in enumerate([('Malo', 'Bueno', 'evaluación'), ('Débil', 'Fuerte', 'potencia'), ('Pasivo', 'Activo', 'actividad')]):
        y = 2.6 - j * .85
        ax.text(1.6, y, a, ha='right', va='center', fontsize=8.4, color=INK); ax.text(10.4, y, b, ha='left', va='center', fontsize=8.4, color=INK)
        for k in range(7): ax.add_patch(Rectangle((2.0 + k * 1.12, y - .2), .4, .4, fc='white', ec=G, lw=1.2))
        ax.text(12.4, y, '(' + d + ')', va='center', fontsize=7.6, color=MUTE)
    note(ax, y=-.03); save(fig, 'escalas-actitud.png')

# ---------- U10 ----------
if want('lapiere'):
    fig, ax = plt.subplots(figsize=(5.2, 3.2))
    v = [100 / 251, 92]; x = [0, 1]
    ax.bar(x, v, color=[G, A], width=.55); ax.set_ylim(0, 105)
    ax.text(0, 4, '1 rechazo\nen 251 visitas\n(≈ 0,4 %)', ha='center', fontsize=8.6, color=INK, weight='bold')
    ax.text(1, 94, '≈ 92 % «No»', ha='center', fontsize=9.2, color=INK, weight='bold')
    ax.set_xticks(x); ax.set_xticklabels(['En persona\n(conducta)', 'Por carta, meses después\n(128 respuestas)']); ax.set_ylabel('Negativas a atender (%)'); clean(ax)
    ax.text(0, -.32, 'LaPiere (1934); el porcentaje por carta es aproximado', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'lapiere.png')

if want('tra-tpb'):
    fig, ax = canvas(8.0, 3.6, 16, 7)
    box(ax, 2.4, 5.6, 3.8, 1.1, 'Actitud hacia\nla conducta', P, 8.6)
    box(ax, 2.4, 3.5, 3.8, 1.1, 'Norma\nsubjetiva', G, 8.6)
    box(ax, 2.4, 1.4, 3.8, 1.1, 'Control conductual\npercibido (TPB)', A, 8.6)
    box(ax, 8.2, 3.5, 3.0, 1.2, 'Intención', V, 9.5)
    box(ax, 13.6, 3.5, 3.0, 1.2, 'Conducta', INK, 9.5)
    for y in (5.6, 3.5, 1.4): arr(ax, (4.35, y), (6.65, 3.5 + (y - 3.5) * .25))
    arr(ax, (9.75, 3.5), (12.05, 3.5)); arr(ax, (4.35, 1.2), (12.4, 2.85), A, ls='--', rad=.12)
    ax.text(2.4, 6.65, 'TRA (Fishbein y Ajzen, 1975): actitud + norma', ha='center', fontsize=7.6, color=MUTE)
    box(ax, 12.8, 6.0, 5.0, 1.4, 'Armitage y Conner (2001):\nintención 39 % · conducta 27 %\nde varianza explicada', SOFT, 7.6, tc=INK, bold=False)
    ax.text(8.7, .6, 'ruta directa del control percibido', fontsize=7.4, color=A)
    save(fig, 'tra-tpb.png')

if want('mode'):
    fig, ax = canvas(7.4, 3.4, 15, 6.6)
    box(ax, 2.0, 3.3, 3.2, 1.4, 'Objeto o\nsituación', INK, 9)
    box(ax, 6.4, 3.3, 3.6, 1.6, '¿Motivación\ny oportunidad\npara pensar?', Y, 8.6, tc=INK)
    arr(ax, (3.65, 3.3), (4.55, 3.3))
    box(ax, 11.6, 5.2, 5.0, 1.5, 'Sí → procesamiento deliberado:\nse sopesan costes y beneficios\n(tipo acción planificada)', P, 8.0)
    box(ax, 11.6, 1.4, 5.0, 1.7, 'No → espontáneo: la actitud\naccesible se activa sola, sesga\nla percepción y guía la conducta', A, 8.0)
    arr(ax, (8.25, 3.8), (9.05, 5.0)); arr(ax, (8.25, 2.8), (9.05, 1.6))
    note(ax, 'Esquema ilustrativo, no datos · Fazio (1990)', y=-.03); save(fig, 'mode.png')

# ---------- U11 ----------
if want('festinger-carlsmith'):
    bars('festinger-carlsmith.png', ['Control\n(sin mentir)', '20 $', '1 $'], [-.45, -.05, 1.35], [MUTE, P, A],
         'Agrado de la tarea (−5 a +5)', (-1, 2), fmt=lambda v: f'{v:+.2f}'.replace('.', ',').replace('-', '−'), size=(4.6, 3.2),
         foot='Festinger y Carlsmith (1959); n = 20 por grupo')

if want('vaidis'):
    bars('vaidis.png', ['Alta elección\ncontraactitudinal\n(n = 1.448)', 'Baja elección\ncontraactitudinal\n(n = 1.344)', 'Alta elección\nensayo neutro\n(n = 1.032)'],
         [2.60, 2.66, 2.14], [A, P, MUTE], 'Actitud tras el ensayo (media)', (0, 3.2), fmt=lambda v: f'{v:.2f}'.replace('.', ','), size=(5.4, 3.3),
         foot='Vaidis et al. (2024): alta frente a baja elección, d = −0,027 (n. s.)')

# ---------- U12 ----------
if want('elm'):
    fig, ax = canvas(8.2, 3.8, 17, 7.4)
    box(ax, 1.6, 4.0, 2.4, 1.2, 'Mensaje\npersuasivo', INK, 8.8)
    box(ax, 5.3, 4.0, 3.1, 1.5, '¿Motivación?\n(implicación,\nnecesidad\nde cognición)', Y, 7.4, tc=INK)
    box(ax, 9.0, 4.0, 2.8, 1.4, '¿Capacidad?\n(tiempo, sin\ndistracción)', Y, 7.6, tc=INK)
    arr(ax, (2.85, 4.0), (3.7, 4.0)); arr(ax, (6.9, 4.0), (7.55, 4.0), G); ax.text(7.1, 4.25, 'sí', fontsize=7.6, color=G, ha='center')
    box(ax, 14.0, 6.0, 5.2, 1.7, 'RUTA CENTRAL\nse piensa en los argumentos\ncambio duradero, resistente\ny que predice la conducta', P, 7.8)
    box(ax, 14.0, 1.7, 5.2, 1.7, 'RUTA PERIFÉRICA\nmandan las claves (atractivo,\npericia, nº de argumentos)\ncambio temporal y frágil', A, 7.8)
    arr(ax, (10.45, 4.4), (11.35, 5.7), G); ax.text(10.7, 5.25, 'sí', fontsize=7.6, color=G)
    arr(ax, (10.45, 3.6), (11.35, 2.0), A); ax.text(10.7, 2.5, 'no', fontsize=7.6, color=A)
    arr(ax, (5.3, 3.2), (11.35, 1.5), A, rad=.25); ax.text(6.4, 1.5, 'no', fontsize=7.6, color=A)
    note(ax, 'Esquema ilustrativo, no datos · Petty y Cacioppo (1986)', y=-.03); save(fig, 'elm.png')

if want('petty-1981'):
    fig, axs = plt.subplots(1, 2, figsize=(7.0, 3.0), sharey=True)
    for a, title, strong, weak in [(axs[0], 'Implicación ALTA', (1.0, 1.1), (-.8, -.7)), (axs[1], 'Implicación BAJA', (.1, .9), (-.2, .6))]:
        a.plot([0, 1], strong, '-o', color=G, lw=2, label='Argumentos fuertes'); a.plot([0, 1], weak, '-o', color=A, lw=2, label='Argumentos débiles')
        a.set_xticks([0, 1]); a.set_xticklabels(['Fuente\npoco experta', 'Fuente\nexperta'], fontsize=8.2); a.set_title(title, fontsize=9.5, weight='bold'); a.set_ylim(-1.3, 1.5); a.axhline(0, color=MUTE, lw=.6); clean(a)
    axs[0].set_ylabel('Actitud favorable'); axs[0].set_yticks([]); axs[1].legend(fontsize=7.6, frameon=False, loc='lower right')
    axs[0].text(0, -.36, 'Esquema ilustrativo, no datos · patrón de Petty, Cacioppo y Goldman (1981)', transform=axs[0].transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'petty-1981.png')

# ---------- U13 ----------
if want('scm'):
    fig, ax = plt.subplots(figsize=(5.6, 4.2))
    ax.set_xlim(0, 10); ax.set_ylim(0, 10); ax.axvline(5, color=MUTE, lw=.8); ax.axhline(5, color=MUTE, lw=.8)
    q = [(2.5, 7.5, 'PATERNALISMO\n(compasión)\npersonas mayores,\npersonas con discapacidad', Y), (7.5, 7.5, 'ADMIRACIÓN\n(orgullo)\nendogrupo, clase media', G),
         (2.5, 2.5, 'DESPRECIO\n(asco)\npersonas sin hogar', A), (7.5, 2.5, 'ENVIDIA\n(celos)\npersonas ricas,\nprofesionales', V)]
    for x, y, t, c in q:
        ax.add_patch(Rectangle((x - 2.4, y - 2.4), 4.8, 4.8, fc=c, alpha=.18, ec='none')); ax.text(x, y, t, ha='center', va='center', fontsize=8.2, color=INK)
    ax.set_xlabel('Competencia percibida  →  (estatus)'); ax.set_ylabel('Calidez percibida  →  (no competición)')
    ax.set_xticks([]); ax.set_yticks([]); clean(ax)
    ax.text(0, -.12, 'Esquema ilustrativo · Fiske, Cuddy, Glick y Xu (2002)', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'scm.png')

# ---------- U14 ----------
if want('prejuicio-sutil'):
    fig, ax = plt.subplots(figsize=(5.4, 3.8))
    ax.set_xlim(0, 10); ax.set_ylim(0, 10); ax.axvline(5, color=MUTE, lw=.8); ax.axhline(5, color=MUTE, lw=.8)
    for x, y, t, c in [(7.5, 7.5, 'FANÁTICOS\nalto manifiesto\ny alto sutil', A), (2.5, 7.5, 'SUTILES\nbajo manifiesto,\nalto sutil', Y), (2.5, 2.5, 'IGUALITARIOS\nbajo en ambos', G), (7.5, 2.5, 'Combinación\npoco frecuente', MUTE)]:
        ax.add_patch(Rectangle((x - 2.4, y - 2.4), 4.8, 4.8, fc=c, alpha=.18, ec='none')); ax.text(x, y, t, ha='center', va='center', fontsize=8.6, color=INK)
    ax.set_xlabel('Prejuicio manifiesto  →'); ax.set_ylabel('Prejuicio sutil  →'); ax.set_xticks([]); ax.set_yticks([]); clean(ax)
    ax.text(0, -.12, 'Esquema ilustrativo · Pettigrew y Meertens (1995)', transform=ax.transAxes, fontsize=7.4, color=MUTE)
    save(fig, 'prejuicio-sutil.png')

if want('contratacion'):
    bars('contratacion.png', ['Blancos frente a\nafroamericanos', 'Blancos frente a\nlatinos'], [136, 124], [A, Y],
         'Llamadas por cada 100 del\ngrupo minoritario', (0, 160), fmt=lambda v: f'{v:.0f}', size=(4.6, 3.2), ref=(100, 'igualdad = 100'),
         foot='Quillian et al. (2017): 28 experimentos de campo, EE. UU., 1989‑2015')

# ---------- U15 ----------
if want('asch-lineas'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.0, 3.0), gridspec_kw={'width_ratios': [1.1, 1]})
    a1.set_xlim(0, 10); a1.set_ylim(0, 10); a1.axis('off')
    a1.plot([1.5, 1.5], [2, 8], color=INK, lw=3); a1.text(1.5, 1.2, 'Estándar', ha='center', fontsize=8.2, color=INK)
    for x, h, t in [(4.5, 5.0, 'A'), (6.5, 6.0, 'B'), (8.5, 6.9, 'C')]:
        a1.plot([x, x], [2, 2 + h], color=P if t != 'B' else G, lw=3); a1.text(x, 1.2, t, ha='center', fontsize=9, color=INK, weight='bold')
    a1.text(5, 9.6, 'Correcta: B · los cómplices dicen A', ha='center', fontsize=7.8, color=A)
    a2.bar([0, 1], [.8, 36.8], color=[G, A], width=.55); a2.set_ylim(0, 45)
    a2.text(0, 2.2, '< 1 %', ha='center', fontsize=9.2, weight='bold', color=INK); a2.text(1, 38, '36,8 %', ha='center', fontsize=9.2, weight='bold', color=INK)
    a2.set_xticks([0, 1]); a2.set_xticklabels(['Solo\n(control)', 'Con mayoría\nunánime'], fontsize=8.2); a2.set_ylabel('Respuestas erróneas en\nensayos críticos (%)', fontsize=8.6); clean(a2)
    a2.text(-.15, -.36, 'Asch (1956); el valor del control se representa como 0,8 % para que se vea', transform=a2.transAxes, fontsize=7, color=MUTE)
    save(fig, 'asch-lineas.png')

if want('obediencia'):
    bars('obediencia.png', ['Milgram (1963)\nhasta 450 V', 'Milgram\npasan de 150 V', 'Burger (2009)\npasan de 150 V', 'Burger, con modelo\nque se niega', 'Doliński et al. (2017)\nmáximo (≈ 150 V)'],
         [65, 82.5, 70, 63.3, 90], [P, P, G, G, A], 'Participantes que continúan (%)', (0, 105), size=(7.6, 3.3), rot=0,
         foot='Los puntos de corte difieren: no se comparan directamente 450 V y 150 V')

if want('zajonc'):
    fig, ax = canvas(7.4, 3.0, 15, 5.6)
    box(ax, 1.8, 2.8, 2.8, 1.3, 'Presencia\nde otros', P, 8.8)
    box(ax, 5.4, 2.8, 2.6, 1.3, 'Activación\n(impulso)', V, 8.8)
    box(ax, 9.0, 2.8, 2.8, 1.3, 'Respuesta\ndominante', Y, 8.8, tc=INK)
    arr(ax, (3.25, 2.8), (4.05, 2.8)); arr(ax, (6.75, 2.8), (7.55, 2.8))
    box(ax, 13.0, 4.3, 3.6, 1.3, 'Tarea fácil o bien\naprendida: MEJORA', G, 8.2)
    box(ax, 13.0, 1.3, 3.6, 1.3, 'Tarea difícil o\nnueva: EMPEORA', A, 8.2)
    arr(ax, (10.45, 3.2), (11.15, 4.1)); arr(ax, (10.45, 2.4), (11.15, 1.5))
    ax.text(.2, .1, 'Zajonc (1965). Bond y Titus (1983): la mera presencia explica entre el 0,3 y el 3 % de la varianza', fontsize=7.6, color=INK)
    note(ax, y=-.06); save(fig, 'zajonc.png')

# ---------- U16 ----------
if want('espectador'):
    bars('espectador.png', ['Solo/a', 'Con 1 testigo', 'Con 4 testigos'], [85, 62, 31], [G, Y, A],
         'Informaron antes de acabar\nel ataque (%)', (0, 100), size=(4.6, 3.2), foot='Darley y Latané (1968), intercomunicador; testigos simulados')
