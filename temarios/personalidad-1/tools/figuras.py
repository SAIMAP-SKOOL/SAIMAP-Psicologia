"""Figuras propias del temario de Personalidad y Diferencias Individuales I. python3 tools/figuras.py → img/*"""
import os, sys, numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle, Rectangle, Ellipse, Polygon

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
#     box(ax, 3, 2.5, 3, 1, 'Concepto A', P); box(ax, 9, 2.5, 3, 1, 'Concepto B', G); arr(ax, (4.6, 2.5), (7.4, 2.5))
#     save(fig, 'nombre.png')
# Si un gráfico es un esquema y no datos reales, añade note(ax).
if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)

    # U1.2 · temperamento, carácter y personalidad
    if want('venn-tcp'):
        fig, ax = canvas(7.4, 3.6, 12, 5.8)
        ax.add_patch(Ellipse((6, 2.85), 11.6, 5.4, fc=SOFT, ec=P, lw=1.6))
        ax.text(6, 5.05, 'PERSONALIDAD', ha='center', fontsize=10.5, color=P, weight='bold')
        ax.text(6, 4.62, 'el conjunto más amplio', ha='center', fontsize=8, color=MUTE, style='italic')
        ax.add_patch(Ellipse((4.3, 2.75), 4.4, 2.9, fc=G, alpha=.22, ec=G, lw=1.4))
        ax.add_patch(Ellipse((7.0, 2.75), 4.4, 2.9, fc=Y, alpha=.25, ec=Y, lw=1.4))
        ax.text(3.6, 3.55, 'TEMPERAMENTO', ha='center', fontsize=9.2, color=INK, weight='bold')
        ax.text(3.45, 2.55, 'base biológica\naparición temprana\nestilo emocional', ha='center', va='center', fontsize=8, color=INK)
        ax.text(7.7, 3.55, 'CARÁCTER', ha='center', fontsize=9.2, color=INK, weight='bold')
        ax.text(7.85, 2.55, 'valores y\nhábitos\naprendidos', ha='center', va='center', fontsize=8, color=INK)
        ax.text(10.4, 2.75, 'capacidades', ha='center', va='center', fontsize=8.4, color=P, weight='bold')
        ax.text(6, .85, 'motivos', ha='center', va='center', fontsize=8.4, color=P, weight='bold')
        note(ax, y=-.06)
        save(fig, 'venn-tcp.png')

    # U2.2 · línea del tiempo
    if want('linea-tiempo'):
        ev = [('s. V a. C.–II', 'Hipócrates\ny Galeno', 'cuatro humores'), ('1869', 'Galton', 'Hereditary\nGenius'), ('1884', 'Galton', 'laboratorio\nantropométrico'),
              ('1890', 'J. McK. Cattell', '«mental test»'), ('1904', 'Spearman', ''), ('1905', 'Binet y\nSimon', ''), ('1937', 'Allport', ''), ('1938', 'Murray', ''),
              ('1957', 'Cronbach', '«dos\ndisciplinas»'), ('1968', 'Mischel', ''), ('1992', 'NEO-PI-R', ''), ('2019', 'King\'s College', 'informe sobre\nEysenck')]
        fig, ax = canvas(7.4, 2.4, 13, 3.9)
        xs = np.linspace(.65, 12.35, len(ev)); cols = [P, G, Y, V, A, T]
        ax.plot([.2, 12.8], [2.0, 2.0], color=MUTE, lw=2)
        for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
            up = i % 2 == 0; c = cols[i % 6]
            ax.plot([x], [2.0], 'o', color=c, ms=8)
            ax.text(x, 1.6 if up else 2.4, yr, ha='center', va='top' if up else 'bottom', fontsize=7.6 if i else 7.0, color=c, weight='bold')
            ax.text(x, 2.6 if up else 1.4, a, ha='center', va='bottom' if up else 'top', fontsize=7.6, color=INK, weight='bold')
            if d: ax.text(x, (2.6 + (.62 if '\n' in a else .32)) if up else (1.4 - (.62 if '\n' in a else .32)), d, ha='center', va='bottom' if up else 'top', fontsize=7.0, color=MUTE)
        ax.plot([xs[0] + .45, xs[1] - .45], [2.0, 2.0], color='white', lw=3); ax.text((xs[0] + xs[1]) / 2, 2.0, '//', ha='center', va='center', fontsize=8, color=MUTE)
        note(ax, y=-.02)
        save(fig, 'linea-tiempo.png')

    # U3.2 · iceberg
    if want('iceberg'):
        fig, ax = canvas(7.4, 4.2, 12, 6.8)
        ax.add_patch(Rectangle((0, 0), 12, 4.9, fc='#E4EEF5', ec='none')); ax.plot([0, 12], [4.9, 4.9], color=P, lw=1.4)
        ax.add_patch(Polygon([(3.6, 4.9), (4.6, 6.2), (5.3, 6.6), (6.2, 6.4), (7.3, 5.5), (8.0, 4.9)], fc='white', ec=P, lw=1.4))
        ax.add_patch(Polygon([(3.6, 4.9), (8.0, 4.9), (8.8, 3.9), (9.6, 1.8), (8.6, .3), (3.0, .3), (2.2, 2.2), (3.0, 3.9)], fc='#C4D6E4', ec=P, lw=1.4))
        ax.plot([2.95, 8.85], [3.9, 3.9], color=P, lw=1, ls='--')
        for y, t in [(5.7, 'CONSCIENTE'), (4.4, 'PRECONSCIENTE'), (2.1, 'INCONSCIENTE')]: ax.text(11.8, y, t, ha='right', va='center', fontsize=8.6, color=P, weight='bold')
        ax.text(.2, 5.15, 'superficie del agua', fontsize=7.4, color=MUTE, style='italic')
        # YO: franja de los tres niveles; SUPERYÓ: los tres niveles, sobre todo sumergido; ELLO: solo inconsciente
        ax.add_patch(FancyBboxPatch((4.55, 1.9), 1.0, 4.25, boxstyle='round,pad=0.02,rounding_size=0.15', fc=G, ec='none', alpha=.9))
        ax.text(5.05, 4.0, 'YO', ha='center', va='center', fontsize=9.5, color='white', weight='bold', rotation=90)
        ax.add_patch(FancyBboxPatch((6.05, .75), 1.0, 5.0, boxstyle='round,pad=0.02,rounding_size=0.15', fc=V, ec='none', alpha=.9))
        ax.text(6.55, 2.6, 'SUPERYÓ', ha='center', va='center', fontsize=9.5, color='white', weight='bold', rotation=90)
        ax.add_patch(Ellipse((4.2, 1.15), 3.0, 1.1, fc=A, ec='none', alpha=.92))
        ax.text(4.2, 1.15, 'ELLO', ha='center', va='center', fontsize=9.5, color='white', weight='bold')
        note(ax, y=-.06)
        save(fig, 'iceberg.png')

    # U3.4 · defensas de Vaillant
    if want('defensas'):
        fig, ax = canvas(7.4, 3.6, 12, 5.8)
        st = [('Psicóticas', 'negación psicótica, distorsión', A), ('Inmaduras', 'proyección, acting-out', Y), ('Neuróticas', 'represión, formación reactiva,\nintelectualización, desplazamiento', T), ('Maduras', 'sublimación, humor, altruismo,\nsupresión, anticipación', G)]
        for i, (t, d, c) in enumerate(st):
            x0 = .3 + i * 2.0; y0 = .3 + i * 1.25
            ax.add_patch(Rectangle((x0, y0), 11.6 - x0, 1.15, fc=c, ec='white', lw=1.5, alpha=.9))
            ax.text(x0 + .2, y0 + .575, t, va='center', fontsize=9.4, color='white' if c != Y else INK, weight='bold')
            ax.text(x0 + 2.05, y0 + .575, d, va='center', fontsize=8.2, color='white' if c != Y else INK, linespacing=1.2)
        ax.annotate('', (.55, 5.45), (.55, 1.75), arrowprops=dict(arrowstyle='-|>', color=INK, lw=1.6))
        ax.text(.8, 5.25, 'más madurez\ny adaptación', fontsize=7.8, color=INK, va='top')
        note(ax, y=-.06)
        save(fig, 'defensas.png')

    # U4.2 · Westen (1998)
    if want('westen'):
        fig, ax = canvas(7.4, 3.5, 12, 5.6)
        ax.text(3.9, 5.3, 'Conservan apoyo (Westen, 1998)', ha='center', fontsize=9.4, color=G, weight='bold')
        ax.text(10.0, 5.3, 'Sin apoyo', ha='center', fontsize=9.4, color=A, weight='bold')
        ideas = ['Procesos mentales inconscientes', 'Conflicto y ambivalencia', 'Huella de la infancia', 'Representaciones de uno mismo\ny de los otros', 'Desarrollo de la regulación\nde impulsos']
        for i, t in enumerate(ideas):
            y = 4.45 - i * .98
            ax.add_patch(Circle((.75, y), .3, fc=G, ec='none')); ax.text(.75, y, str(i + 1), ha='center', va='center', fontsize=9, color='white', weight='bold')
            box(ax, 4.1, y, 5.6, .8, t, '#FFFFFF', 8.6, tc=INK, bold=False, ec=G)
        ax.plot([7.55, 7.55], [.2, 5.5], color=MUTE, lw=.8, ls=':')
        for i, t in enumerate(['Edipo universal', 'Catarsis', 'Etapas psicosexuales\ncomo causa del carácter']):
            y = 4.2 - i * 1.35
            box(ax, 10.0, y, 3.9, 1.0, t, '#FFFFFF', 8.6, tc=INK, bold=False, ec=A)
            ax.text(8.3, y, '✗', ha='center', va='center', fontsize=12, color=A, weight='bold')
        note(ax, y=-.06)
        save(fig, 'westen.png')

    # U5.1 · congruencia
    if want('congruencia'):
        fig, ax = canvas(7.4, 2.8, 12, 4.55)
        for cx, d, t, sub, c in [(3.0, 1.35, 'INCONGRUENCIA', 'malestar, defensa', A), (9.0, .45, 'CONGRUENCIA', 'persona plenamente funcional', G)]:
            ax.add_patch(Circle((cx - d, 2.9), 1.45, fc=P, alpha=.25, ec=P, lw=1.4)); ax.add_patch(Circle((cx + d, 2.9), 1.45, fc=Y, alpha=.3, ec=Y, lw=1.4))
            ax.text(cx - d - (.55 if d > 1 else .7), 2.9, 'self', ha='center', va='center', fontsize=9, color=P, weight='bold')
            ax.text(cx + d + (.55 if d > 1 else .7), 2.9, 'expe-\nriencia', ha='center', va='center', fontsize=8.6, color='#8A6A1E', weight='bold')
            ax.text(cx, .95, t, ha='center', fontsize=9.6, color=c, weight='bold'); ax.text(cx, .45, sub, ha='center', fontsize=8.4, color=INK)
        note(ax, y=-.04)
        save(fig, 'congruencia.png')

    # U5.2 · Maslow en escalones
    if want('maslow'):
        fig, ax = canvas(7.4, 3.9, 12, 6.4)
        st = ['Fisiológicas', 'Seguridad', 'Pertenencia\ny amor', 'Estima', 'Autorrealización']
        cs = ['#C9D4DC', '#A9C1D3', '#7FA3BF', P, G]
        for i, (t, c) in enumerate(zip(st, cs)):
            x0 = .3 + i * 2.3; h = .9 + i * .85
            ax.add_patch(Rectangle((x0, 1.0), 2.25, h, fc=c, ec='white', lw=1.5))
            ax.text(x0 + 1.125, 1.0 + h - .3, t, ha='center', va='top', fontsize=8.2, color=INK if i < 2 else 'white', weight='bold')
        ax.plot([.3, 11.75], [1.0, 1.0], color=MUTE, lw=1)
        # llaves bajo los escalones
        def brace(x0, x1, y, t, c):
            ax.plot([x0, x0, x1, x1], [y + .15, y, y, y + .15], color=c, lw=1.4); ax.plot([(x0 + x1) / 2] * 2, [y, y - .15], color=c, lw=1.4)
            ax.text((x0 + x1) / 2, y - .25, t, ha='center', va='top', fontsize=8.4, color=c, weight='bold')
        brace(.35, 9.4, .78, 'necesidades de déficit', P); brace(9.55, 11.7, .78, 'necesidad de ser', G)
        ax.text(.4, 5.9, 'Maslow no dibujó una pirámide:\nel triángulo es de Davis (1957)\ny la pirámide, de McDermid (1960)', va='top', fontsize=7.8, color=A, style='italic', linespacing=1.3)
        note(ax, y=-.05)
        save(fig, 'maslow.png')

    # U6.2 · determinismo recíproco
    if want('reciproco'):
        fig, ax = canvas(4.5, 3.4, 7, 5.4)
        pts = {'P': (3.5, 4.5), 'C': (1.2, 1.3), 'A': (5.8, 1.3)}
        box(ax, 3.5, 4.5, 2.9, 1.05, 'Persona\n(cogniciones,\nexpectativas)', P, 8.4)
        box(ax, 1.2, 1.3, 2.0, .7, 'Conducta', G, 8.8); box(ax, 5.8, 1.3, 2.0, .7, 'Ambiente', Y, 8.8, tc=INK)
        def dbl(a, b):
            ax.add_patch(FancyArrowPatch(a, b, arrowstyle='<|-|>', mutation_scale=12, color=INK, lw=1.4))
        dbl((2.5, 3.9), (1.5, 1.7)); dbl((4.5, 3.9), (5.5, 1.7)); dbl((2.3, 1.3), (4.7, 1.3))
        note(ax, y=-.04)
        save(fig, 'reciproco.png')

    # U6.3 · mapa de modelos
    if want('mapa-modelos'):
        fig, ax = canvas(7.4, 3.3, 12, 5.4)
        cols = [(2.0, 'INTERNALISTAS', 'la conducta depende\nde la persona', 'psicoanálisis,\nrasgos,\nhumanismo', 'C = f(P)', P),
                (6.0, 'SITUACIONISTAS', 'la conducta depende\nde la situación', 'conductismo radical', 'C = f(S)', Y),
                (10.0, 'INTERACCIONISTAS', 'persona × situación', 'aprendizaje social\ncognitivo;\nMagnusson y Endler', 'C = f(P × S)', G)]
        for x, t, d, ej, f, c in cols:
            box(ax, x, 4.85, 3.6, .7, t, c, 9.6, tc=INK if c == Y else 'white')
            ax.text(x, 4.2, d, ha='center', va='top', fontsize=8.4, color=INK, style='italic')
            box(ax, x, 2.55, 3.4, 1.25, ej, '#FFFFFF', 8.4, tc=INK, bold=False, ec=c)
            box(ax, x, .9, 2.6, .65, f, SOFT, 10.5, tc=c if c != Y else '#8A6A1E', ec=c)
            arr(ax, (x, 1.88), (x, 1.27), MUTE)
        note(ax, y=-.05)
        save(fig, 'mapa-modelos.png')

    # U7.2 · fuentes de datos Cattell → Funder
    if want('fuentes-datos'):
        fig, ax = canvas(7.4, 3.4, 12, 6.3); ax.set_ylim(.75, 6.3)
        ax.text(2.0, 6.0, 'Cattell', ha='center', fontsize=10, color=P, weight='bold'); ax.text(6.75, 6.0, 'Funder', ha='center', fontsize=10, color=G, weight='bold')
        ca = {'L': (4.55, 'L · registros vitales y\nvaloraciones de observadores'), 'Q': (2.7, 'Q · cuestionario'), 'T': (1.45, 'T · tests objetivos')}
        for k, (y, t) in ca.items(): box(ax, 2.0, y, 3.6, .95 if k == 'L' else .7, t, P, 8.2)
        fu = [('L', 'resultados vitales', '«expediente\nacadémico, multas»', 5.15), ('I', 'informantes', '«valoración de un\ncompañero de piso»', 3.9), ('S', 'autoinforme', '«cuestionario NEO»', 2.7), ('B', 'conducta observada', '«minutos hablando en una\ntarea de laboratorio»', 1.45)]
        for k, t, ej, y in fu:
            box(ax, 6.75, y, 2.9, .7, f'{k} · {t}', G, 8.2)
            ax.text(8.45, y, ej, va='center', fontsize=7.8, color=INK, style='italic')
        arr(ax, (3.85, 4.75), (5.25, 5.1), MUTE); arr(ax, (3.85, 4.35), (5.25, 3.95), MUTE)
        arr(ax, (3.85, 2.7), (5.25, 2.7), MUTE); arr(ax, (3.85, 1.45), (5.25, 1.45), MUTE)
        ax.text(9.6, 6.0, 'ejemplo', ha='center', fontsize=8.4, color=MUTE, weight='bold')
        note(ax, y=-.04)
        save(fig, 'fuentes-datos.png')

    # U7.4 · modelo SOKA
    if want('soka'):
        fig, ax = plt.subplots(figsize=(7.4, 3.9))
        ax.set_xlim(0, 10); ax.set_ylim(0, 10); ax.set_xticks([]); ax.set_yticks([])
        ax.axvline(5, color=MUTE, lw=.8, ls=':'); ax.axhline(5, color=MUTE, lw=.8, ls=':')
        ax.add_patch(Rectangle((0, 5), 10, 5, fc=A, alpha=.08, ec='none'))
        ax.add_patch(Rectangle((0, 0), 5, 5, fc=P, alpha=.08, ec='none')); ax.add_patch(Rectangle((5, 0), 5, 5, fc=G, alpha=.1, ec='none'))
        ax.text(5, 7.5, 'Los demás aciertan más\n(inteligencia, creatividad)', ha='center', va='center', fontsize=9, color=A, weight='bold')
        ax.text(2.5, 2.5, 'Uno mismo\nacierta más\n(ansiedad)', ha='center', va='center', fontsize=9, color=P, weight='bold')
        ax.text(7.5, 2.5, 'Ambos por igual\n(extraversión)', ha='center', va='center', fontsize=9, color='#3E7A55', weight='bold')
        ax.set_xticks([1, 9]); ax.set_xticklabels(['baja', 'alta'], fontsize=8.4); ax.set_yticks([1, 9]); ax.set_yticklabels(['baja', 'alta'], fontsize=8.4)
        ax.tick_params(length=0)
        ax.set_xlabel('Observabilidad del rasgo →'); ax.set_ylabel('Carga evaluativa →'); clean(ax)
        note(ax, 'Esquema ilustrativo, no datos · modelo SOKA de Vazire (2010)', -.2)
        save(fig, 'soka.png')

    # U8.4 · tamaños del efecto
    if want('tamanos-efecto'):
        fig, ax = plt.subplots(figsize=(7.4, 2.7))
        ref = [(.05, 'muy\npequeño'), (.10, 'pequeño'), (.20, 'medio'), (.30, 'grande'), (.40, 'muy\ngrande')]
        cm = plt.get_cmap('Blues')
        for i in range(50): ax.add_patch(Rectangle((i / 100, 0), .01, 1, fc=cm(.15 + .7 * i / 50), ec='none'))
        for v, t in ref:
            ax.plot([v, v], [0, 1], color='white', lw=2)
            ax.text(v, -.12, f',{int(round(v * 100)):02d}', ha='center', va='top', fontsize=9, color=INK, weight='bold')
            ax.text(v, -.55, t, ha='center', va='top', fontsize=8.2, color=INK)
        ax.annotate('≈ ,21 media en psicología social\n(Richard et al., 2003)', (.21, 1.0), (.165, 2.35), ha='right', va='center', fontsize=7.8, color=A, arrowprops=dict(arrowstyle='-|>', color=A, lw=1.1))
        ax.annotate('≈ ,30 coeficiente de personalidad\nde Mischel (1968)', (.30, 1.0), (.345, 2.35), ha='left', va='center', fontsize=7.8, color=V, arrowprops=dict(arrowstyle='-|>', color=V, lw=1.1))
        ax.set_xlim(-.01, .51); ax.set_ylim(-1.25, 3.0); ax.axis('off')
        ax.text(0, -.12, 'r = 0', va='top', fontsize=8.4, color=MUTE); ax.text(.5, -.12, ',50', ha='right', va='top', fontsize=8.4, color=MUTE)
        ax.text(0, 2.95, 'Referencias de Funder y Ozer (2019); valores aproximados', fontsize=7.6, color=MUTE, va='top')
        save(fig, 'tamanos-efecto.png')

    # U9.1 · embudo léxico
    if want('embudo-lexico'):
        fig, ax = canvas(7.4, 3.6, 12, 6.0)
        lv = [('≈ 18.000 términos', 'Allport y Odbert (1936)', '#C9D4DC'), ('≈ 4.500 rasgos estables', 'Allport y Odbert (1936)', '#A9C1D3'),
              ('≈ 171 variables', 'Cattell', '#7FA3BF'), ('16 factores primarios', '16PF', P), ('5 factores globales', '16PF', '#1F4560')]
        for i, (t, src, c) in enumerate(lv):
            y = 5.2 - i * 1.08; w0 = 8.6 - i * 1.25; w1 = w0 - 1.25
            ax.add_patch(Polygon([(4.4 - w0 / 2, y + .48), (4.4 + w0 / 2, y + .48), (4.4 + w1 / 2, y - .48), (4.4 - w1 / 2, y - .48)], fc=c, ec='white', lw=1.5))
            ax.text(4.4, y, t, ha='center', va='center', fontsize=9 if i < 4 else 8.2, color=INK if i < 2 else 'white', weight='bold')
            ax.text(9.4, y, src, va='center', fontsize=8.2, color=MUTE, style='italic')
        ax.text(9.4, 5.85, 'Fuente', fontsize=8.2, color=MUTE, weight='bold')
        ax.text(0, -.02, 'Cifras de referencia (Allport y Odbert, 1936; Cattell)', transform=ax.transAxes, fontsize=7.4, color=MUTE)
        save(fig, 'embudo-lexico.png')

    # U9.3 · entramado dinámico
    if want('entramado'):
        fig, ax = canvas(7.4, 3.0, 12, 4.8)
        for x, t in [(2.0, 'ACTITUD'), (6.0, 'SENTIMIENTO'), (10.0, 'ERGIOS')]: ax.text(x, 4.5, t, ha='center', fontsize=9.4, color=INK, weight='bold')
        box(ax, 2.0, 2.4, 3.2, 1.0, '«Quiero aprobar\neste examen»', Y, 8.8, tc=INK, bold=False)
        box(ax, 6.0, 2.4, 3.2, 1.0, '«Mi carrera\nprofesional»', T, 8.8, bold=False)
        box(ax, 10.0, 3.25, 2.8, .8, '«Seguridad»', A, 8.8, bold=False); box(ax, 10.0, 1.55, 2.8, .8, '«Curiosidad»', A, 8.8, bold=False)
        arr(ax, (3.65, 2.4), (4.35, 2.4)); arr(ax, (7.65, 2.6), (8.55, 3.15)); arr(ax, (7.65, 2.2), (8.55, 1.65))
        for x, t in [(2.0, 'aprendida, concreta'), (6.0, 'aprendido, más general'), (10.0, 'innatos, básicos')]: ax.text(x, .55, t, ha='center', fontsize=7.8, color=MUTE, style='italic')
        ax.text(6.0, 4.05, 'subsidiación: cada nivel sirve al siguiente  →', ha='center', fontsize=7.8, color=INK)
        note(ax, y=-.05)
        save(fig, 'entramado.png')

    # U10.1 · jerarquía de Eysenck
    if want('jerarquia-eysenck'):
        fig, ax = canvas(7.4, 3.6, 12, 6.0)
        lv = [('Tipo o dimensión', 'Extraversión', A), ('Rasgos', 'sociabilidad · actividad · asertividad ·\nbúsqueda de sensaciones', Y),
              ('Respuestas habituales', 'lo que suele hacer en\nsituaciones parecidas', T), ('Respuestas específicas', 'lo que hace en una\nocasión concreta', P)]
        for i, (t, d, c) in enumerate(lv):
            y = 5.1 - i * 1.3; w0 = 2.6 + i * 1.15; w1 = w0 + 1.15
            ax.add_patch(Polygon([(3.75 - w0 / 2, y + .6), (3.75 + w0 / 2, y + .6), (3.75 + w1 / 2, y - .6), (3.75 - w1 / 2, y - .6)], fc=c, ec='white', lw=1.6))
            ax.text(3.75, y, t, ha='center', va='center', fontsize=8.8, color=INK if c == Y else 'white', weight='bold')
            ax.text(7.7, y, d, ha='left', va='center', fontsize=8.2 if i else 9.4, color=INK, weight='bold' if i == 0 else 'normal')
        note(ax, y=-.05)
        save(fig, 'jerarquia-eysenck.png')

    # U10.2 · círculo de Galeno y Eysenck
    if want('circulo-galeno'):
        fig, ax = canvas(7.4, 4.4, 12, 7.2)
        cx, cy, r = 6, 3.6, 2.9
        q = [(1, 1, 'COLÉRICO', 'N+ E+', 'ansioso, activo,\nasertivo', A), (-1, 1, 'MELANCÓLICO', 'N+ E−', 'ansioso, tenso,\ndeprimido', V), (1, -1, 'SANGUÍNEO', 'N− E+', 'sociable, vital,\nactivo', Y), (-1, -1, 'FLEMÁTICO', 'N− E−', 'tranquilo, sereno,\nreservado', G)]
        from matplotlib.patches import Wedge
        for sx, sy, t, code, adj, c in q:
            th = {(1, 1): 0, (-1, 1): 90, (-1, -1): 180, (1, -1): 270}[(sx, sy)]
            ax.add_patch(Wedge((cx, cy), r, th, th + 90, fc=c, alpha=.16, ec='none'))
            b = cy + sy * 1.3
            ax.text(cx + sx * 1.45, b + .5, t, ha='center', va='center', fontsize=9, color=c if c != Y else '#8A6A1E', weight='bold')
            ax.text(cx + sx * 1.45, b + .05, code, ha='center', va='center', fontsize=8, color=INK)
            ax.text(cx + sx * 1.45, b - .5, adj, ha='center', va='center', fontsize=7.6, color=INK, style='italic')
        ax.add_patch(Circle((cx, cy), r, fc='none', ec=INK, lw=1.2))
        ax.plot([cx - r - .3, cx + r + .3], [cy, cy], color=INK, lw=1.1); ax.plot([cx, cx], [cy - r - .3, cy + r + .3], color=INK, lw=1.1)
        ax.text(cx - r - .45, cy, 'INTROVERTIDO', ha='right', va='center', fontsize=8.6, color=INK, weight='bold')
        ax.text(cx + r + .45, cy, 'EXTRAVERTIDO', ha='left', va='center', fontsize=8.6, color=INK, weight='bold')
        ax.text(cx, cy + r + .45, 'NEURÓTICO (inestable)', ha='center', va='bottom', fontsize=8.6, color=INK, weight='bold')
        ax.text(cx, cy - r - .45, 'ESTABLE', ha='center', va='top', fontsize=8.6, color=INK, weight='bold')
        note(ax, y=-.03)
        save(fig, 'circulo-galeno.png')

    # U11.3 · metarrasgos, dominios, aspectos y facetas
    if want('metarrasgos'):
        fig, ax = canvas(7.4, 3.9, 13, 6.6)
        box(ax, 3.9, 5.95, 4.0, .75, 'ESTABILIDAD', P, 10); box(ax, 10.4, 5.95, 3.4, .75, 'PLASTICIDAD', A, 10)
        doms = [('Estabilidad\nemocional', 'volatilidad\nretraimiento', P), ('Amabilidad', 'compasión\ncortesía', P), ('Responsa-\nbilidad', 'laboriosidad\norden', P),
                ('Extraversión', 'entusiasmo\nasertividad', A), ('Apertura', 'apertura\nintelecto', A)]
        xs = [1.35, 3.9, 6.45, 9.05, 11.65]
        for (t, asp, c), x in zip(doms, xs):
            box(ax, x, 4.1, 2.3, .9, t, '#FFFFFF', 8.4, tc=INK, ec=c)
            arr(ax, (3.9 if c == P else 10.4, 5.55), (x, 4.6), MUTE, ms=9, lw=1.1)
            box(ax, x, 2.35, 2.3, .95, asp, SOFT, 8.0, tc=INK, bold=False)
            arr(ax, (x, 3.62), (x, 2.87), MUTE, ms=9, lw=1.1)
        ax.add_patch(FancyBboxPatch((.25, .35), 12.5, .65, boxstyle='round,pad=0.02,rounding_size=0.12', fc='#FFFFFF', ec=MUTE, ls='--'))
        ax.text(6.5, .675, 'FACETAS · 30 en el NEO-PI-R (6 por dominio)', ha='center', va='center', fontsize=8.6, color=INK, weight='bold')
        for x in xs: arr(ax, (x, 1.85), (x, 1.04), MUTE, ms=9, lw=1.1)
        ax.text(13.0, 6.45, 'metarrasgos → dominios → aspectos (DeYoung et al., 2007) → facetas', ha='right', fontsize=7.4, color=MUTE, style='italic')
        note(ax, y=-.04)
        save(fig, 'metarrasgos.png')

    # U11.4 · correspondencias entre modelos
    if want('correspondencias'):
        fig, ax = canvas(7.4, 3.6, 13, 6.4)
        hd = [('Eysenck (PEN)', P), ('16PF (globales)', T), ('Cinco Grandes', G), ('HEXACO', V)]
        rows = [['E', 'Extraversión', 'Extraversión', 'eXtraversión'],
                ['N', 'Ansiedad', 'Neuroticismo', 'Emocionalidad\n(solo en parte)'],
                ['P', 'Independencia,\nbajo Autocontrol', 'baja Amabilidad y\nbaja Responsabilidad', ''],
                ['—', 'Dureza (invertida)', 'Apertura', 'Apertura'],
                ['—', 'Autocontrol', 'Responsabilidad', 'Responsabilidad'],
                ['—', '—', '—', 'Honestidad-Humildad']]
        xs = [1.55, 4.75, 8.15, 11.4]; ws = [2.6, 3.0, 3.2, 2.9]
        for (t, c), x, w in zip(hd, xs, ws): box(ax, x, 5.95, w, .62, t, c, 8.8)
        for j, row in enumerate(rows):
            y = 5.05 - j * .86
            if j % 2 == 0: ax.add_patch(Rectangle((.15, y - .42), 12.75, .84, fc=SOFT, ec='none'))
            for i, (v, x) in enumerate(zip(row, xs)):
                ax.text(x, y, v, ha='center', va='center', fontsize=8.4 if i else 10, color=MUTE if v == '—' else INK, weight='bold' if i == 0 else 'normal', linespacing=1.15)
            for i in range(3):
                if row[i + 1] or i < 2: ax.text((xs[i] + xs[i + 1]) / 2 + (.1 if i == 0 else 0), y, '≈', ha='center', va='center', fontsize=10, color=MUTE)
        ax.text(13, .1, '≈ equivalencia aproximada', ha='right', fontsize=7.4, color=MUTE, style='italic')
        note(ax, y=-.03)
        save(fig, 'correspondencias.png')

    # U11.4 · MBTI: dicotomizar un continuo
    if want('mbti'):
        x = np.linspace(-3.5, 3.5, 400); y = np.exp(-x ** 2 / 2)
        fig, ax = plt.subplots(figsize=(7.4, 3.0))
        ax.fill_between(x[x < 0], y[x < 0], color=P, alpha=.18); ax.fill_between(x[x >= 0], y[x >= 0], color=A, alpha=.18); ax.plot(x, y, color=INK, lw=1.6)
        ax.axvline(0, color=INK, lw=1.6, ls='--'); ax.text(-1.9, .82, '«I»', ha='center', fontsize=13, color=P, weight='bold'); ax.text(1.9, .82, '«E»', ha='center', fontsize=13, color=A, weight='bold')
        for px, lab, c in [(-.15, 'Ana', P), (.15, 'Luis', A), (-2.7, 'Marta', P)]:
            ax.plot([px], [0.02], 'o', color=c, ms=8, clip_on=False, zorder=5)
        ax.annotate('casi iguales,\nletras distintas', (.12, .06), (2.25, .42), ha='center', fontsize=8.2, color=INK, arrowprops=dict(arrowstyle='-', color=MUTE, lw=.9))
        ax.annotate('muy distintas,\nmisma letra «I»', (-1.45, .06), (-2.45, .45), ha='center', fontsize=8.2, color=INK)
        ax.plot([-2.7, -.15], [.1, .1], color=P, lw=1.1); ax.plot([-2.7, -2.7], [.07, .13], color=P, lw=1.1); ax.plot([-.15, -.15], [.07, .13], color=P, lw=1.1)
        ax.set_xlim(-3.5, 3.5); ax.set_ylim(0, 1.05); ax.set_yticks([]); ax.set_xticks([-3, 3]); ax.set_xticklabels(['introversión', 'extraversión'], fontsize=8.6)
        ax.set_xlabel('Dimensión continua'); clean(ax); ax.spines['left'].set_visible(False)
        note(ax, y=-.32)
        save(fig, 'mbti.png')

    # U12.1 · U invertida
    if want('u-invertida'):
        x = np.linspace(0, 10, 300)
        fig, ax = plt.subplots(figsize=(7.4, 3.0))
        for m, c, lab in [(3.6, P, 'introvertidos'), (6.4, A, 'extravertidos')]:
            yy = np.exp(-((x - m) / 2.3) ** 2); ax.plot(x, yy, color=c, lw=2.4); ax.plot([m, m], [0, 1], color=c, lw=1, ls=':')
            ax.text(m, 1.05, f'{lab}\n(óptimo)', ha='center', va='bottom', fontsize=8.4, color=c, weight='bold')
        ax.set_xlim(0, 10); ax.set_ylim(0, 1.35); ax.set_xticks([]); ax.set_yticks([])
        ax.set_xlabel('Nivel de estimulación →'); ax.set_ylabel('Tono hedónico o rendimiento →'); clean(ax)
        note(ax, y=-.18)
        save(fig, 'u-invertida.png')

    # U12.2 · Gray
    if want('gray'):
        fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.7), gridspec_kw={'width_ratios': [1, 1.15]})
        a1.set_xlim(-3, 3); a1.set_ylim(-3, 3); a1.set_aspect('equal'); a1.axis('off')
        a1.plot([-2.6, 2.6], [0, 0], color=MUTE, lw=1.2); a1.plot([0, 0], [-2.6, 2.6], color=MUTE, lw=1.2)
        a1.text(2.65, 0, 'E+', va='center', fontsize=8.6, color=INK, weight='bold'); a1.text(-2.65, 0, 'E−', va='center', ha='right', fontsize=8.6, color=INK, weight='bold')
        a1.text(0, 2.7, 'N+', ha='center', fontsize=8.6, color=INK, weight='bold'); a1.text(0, -2.7, 'N−', ha='center', va='top', fontsize=8.6, color=INK, weight='bold')
        for ang, c, t, ha in [(120, P, 'Ansiedad\n(BIS)', 'right'), (60, A, 'Impulsividad\n(BAS)', 'left')]:
            r = np.radians(ang); dx, dy = 2.5 * np.cos(r), 2.5 * np.sin(r)
            a1.add_patch(FancyArrowPatch((-dx * .9, -dy * .9), (dx, dy), arrowstyle='-|>', mutation_scale=13, color=c, lw=2))
            a1.text(dx * 1.08, dy * 1.08 - .05, t, ha=ha, va='bottom', fontsize=8.2, color=c, weight='bold')
        a1.text(.55, .5, '≈ 30°', fontsize=7.6, color=MUTE)
        a1.add_patch(matplotlib.patches.Arc((0, 0), 1.6, 1.6, theta1=60, theta2=90, color=MUTE, lw=1))
        a1.text(0, -3.35, 'Teoría original: ejes rotados', ha='center', fontsize=8.4, color=INK, style='italic')
        a2.set_xlim(0, 10); a2.set_ylim(0, 10); a2.axis('off')
        for y, t, s, c in [(8.4, 'BAS', 'estímulos apetitivos\n→ aproximación', G), (5.0, 'FFFS', 'estímulos aversivos → lucha,\nhuida, bloqueo (miedo)', A), (1.6, 'BIS', 'conflicto entre metas → evaluación\ndel riesgo (ansiedad)', P)]:
            box(a2, 1.3, y, 2.2, 1.5, t, c, 10); a2.text(2.75, y, s, va='center', fontsize=8.1, color=INK)
        a2.text(5, -.65, 'Teoría revisada (Gray y McNaughton, 2000)', ha='center', fontsize=8.4, color=INK, style='italic')
        fig.tight_layout(rect=(0, .05, 1, 1)); fig.text(.012, .015, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
        fig.savefig(f'{OUT}/gray.png', dpi=200); plt.close(fig); print('ok', 'gray.png')

    # U12.4 · neuroimagen: tamaño muestral
    if want('neuroimagen'):
        fig, ax = plt.subplots(figsize=(7.4, 2.5))
        ax.barh([1, 0], [116, 1107], color=[MUTE, P], height=.55)
        ax.text(116 + 18, 1, 'N ≈ 116 · «asociaciones con el volumen de regiones concretas»', va='center', fontsize=8.4, color=INK)
        ax.text(1107 - 18, 0, 'N = 1.107 · «no replicadas»', va='center', ha='right', fontsize=8.6, color='white', weight='bold')
        ax.set_yticks([1, 0]); ax.set_yticklabels(['DeYoung et al.\n(2010)', 'Avinun et al.\n(2020)'], fontsize=8.6)
        ax.set_xlim(0, 1200); ax.set_xticks([0, 250, 500, 750, 1000]); ax.set_xticklabels(['0', '250', '500', '750', '1.000'])
        ax.set_xlabel('Tamaño de la muestra (participantes)'); clean(ax); ax.tick_params(axis='y', length=0)
        save(fig, 'neuroimagen.png')

    # U13.2 · soluciones a la paradoja de la consistencia
    if want('soluciones'):
        fig, ax = canvas(7.4, 3.9, 13, 6.8)
        ax.add_patch(Ellipse((6.5, 3.4), 3.6, 1.5, fc=A, ec='none')); ax.text(6.5, 3.4, 'Paradoja de la\nconsistencia', ha='center', va='center', fontsize=9.8, color='white', weight='bold')
        sol = [(2.4, 5.8, 'Agregación', 'Epstein (1979)', P), (10.6, 5.8, 'Variables moderadoras', 'Bem y Allen (1974)', G), (1.9, 3.4, 'Plantillas\npersona-situación', 'Bem y Funder (1978)', T),
               (11.1, 3.4, 'Interaccionismo', 'Magnusson y Endler (1977)', V), (6.5, .85, 'Los efectos de la situación\ntampoco son mayores', 'Funder y Ozer (1983)', Y)]
        for x, y, t, a, c in sol:
            w = 3.6 if x not in (1.9, 11.1) else 3.4
            box(ax, x, y, w, 1.15, t + '\n', c, 8.6, tc=INK if c == Y else 'white')
            ax.text(x, y - .3, a, ha='center', va='center', fontsize=7.6, color=INK if c == Y else 'white', style='italic')
        for a, b in [((5.5, 3.95), (3.7, 5.15)), ((7.5, 3.95), (9.3, 5.15)), ((4.6, 3.4), (3.75, 3.4)), ((8.4, 3.4), (9.25, 3.4)), ((6.5, 2.6), (6.5, 1.5))]: arr(ax, a, b, MUTE)
        note(ax, y=-.04)
        save(fig, 'soluciones.png')

    # U13.3 · perfiles si… entonces
    if want('si-entonces'):
        sit = ['un igual\nse acerca', 'un igual\nse burla', 'un adulto\nelogia', 'un adulto\navisa', 'un adulto\ncastiga']
        a = np.array([.2, 1.4, -.9, .9, -1.6]); b = -a + np.array([0, .2, 0, -.2, 0]); b = b - b.mean(); a = a - a.mean()
        fig, ax = plt.subplots(figsize=(7.4, 3.0)); xs = np.arange(5)
        ax.axhline(0, color=MUTE, lw=1, ls='--'); ax.text(4.45, .08, 'misma media', fontsize=7.8, color=MUTE, ha='right', va='bottom')
        ax.plot(xs, a, '-o', color=P, lw=2.2, ms=6, label='niño A'); ax.plot(xs, b, '-o', color=A, lw=2.2, ms=6, label='niño B')
        ax.set_xticks(xs); ax.set_xticklabels(sit, fontsize=8.2); ax.set_yticks([]); ax.set_ylabel('Agresividad\n(desviación de su media)', fontsize=9)
        ax.set_ylim(-2.2, 2.2); ax.legend(frameon=False, fontsize=8.4, loc='upper left', ncol=2); clean(ax)
        note(ax, y=-.36)
        save(fig, 'si-entonces.png')

    # U13.3 · distribuciones de densidad de Fleeson
    if want('fleeson'):
        x = np.linspace(0, 7, 400)
        fig, ax = plt.subplots(figsize=(7.4, 2.9))
        for m, c, lab in [(2.9, P, 'persona A'), (4.2, A, 'persona B')]:
            y = np.exp(-((x - m) / 1.15) ** 2 / 2); ax.fill_between(x, y, color=c, alpha=.18); ax.plot(x, y, color=c, lw=2.2)
            ax.plot([m, m], [0, 1], color=c, lw=1.2, ls=':'); ax.text(m, 1.04, f'{lab}\n(media)', ha='center', va='bottom', fontsize=8.4, color=c, weight='bold')
        ax.set_xlim(0, 7); ax.set_ylim(0, 1.38); ax.set_yticks([]); ax.set_xticks([.5, 6.5]); ax.set_xticklabels(['muy introvertido', 'muy extravertido'], fontsize=8.4)
        ax.set_xlabel('Estado de extraversión en cada momento (dos semanas)'); ax.set_ylabel('Frecuencia'); clean(ax)
        note(ax, y=-.36)
        save(fig, 'fleeson.png')

    # U13.4 · malvavisco
    if want('malvavisco'):
        fig, ax = plt.subplots(figsize=(7.4, 2.7))
        ax.bar([0, 1], [.24, .08], color=[P, A], width=.5)
        for x, v in [(0, '0,24'), (1, '0,08')]: ax.text(x, float(v.replace(',', '.')) + .008, v, ha='center', fontsize=10, color=INK, weight='bold')
        ax.set_xticks([0, 1]); ax.set_xticklabels(['Sin controles', 'Con controles de familia\ny capacidad temprana'], fontsize=8.6)
        ax.set_ylim(0, .3); ax.set_yticks([0, .1, .2, .3]); ax.set_yticklabels(['0', '0,10', '0,20', '0,30'])
        ax.set_ylabel('Coeficiente\nestandarizado', fontsize=9); ax.set_xlim(-.7, 1.7); clean(ax)
        ax.text(1.7, .29, 'Espera a los 4 años → logro a los 15', ha='right', va='top', fontsize=8.4, color=INK)
        ax.text(1.7, .26, 'Fuente: Watts, Duncan y Quan (2018)', ha='right', va='top', fontsize=7.6, color=MUTE, style='italic')
        save(fig, 'malvavisco.png')

    # U14.2 · estabilidad de orden de rango por edad
    if want('estabilidad-edad'):
        lab = ['Infancia', 'Años de\nuniversidad', '30 años', '50-70 años']; v = [.31, .54, .64, .74]
        fig, ax = plt.subplots(figsize=(7.4, 2.9)); xs = np.arange(4)
        ax.plot(xs, v, '-o', color=P, lw=2.4, ms=7)
        for x, y in zip(xs, v): ax.text(x, y + .05, f',{int(round(y * 100))}', ha='center', fontsize=9.4, color=INK, weight='bold')
        ax.set_xticks(xs); ax.set_xticklabels(lab, fontsize=8.6); ax.set_ylim(0, 1); ax.set_yticks([0, .25, .5, .75, 1]); ax.set_yticklabels(['0', ',25', ',50', ',75', '1'])
        ax.set_ylabel('Estabilidad de\norden de rango', fontsize=9); ax.set_xlim(-.4, 3.4); clean(ax)
        ax.text(-.35, .97, 'Fuente: Roberts y DelVecchio (2000)', va='top', fontsize=7.8, color=MUTE, style='italic')
        ax.text(3.35, .2, 'Bleidorn et al. (2022) sitúan la meseta\nantes, en la adultez joven', ha='right', va='center', fontsize=8.2, color=A,
                bbox=dict(boxstyle='round,pad=.4', fc='white', ec=A, lw=.9))
        save(fig, 'estabilidad-edad.png')

    # U14.3 · cambio de nivel medio
    if want('nivel-medio'):
        e = np.linspace(20, 70, 300)
        def sig(x, m, k): return 1 / (1 + np.exp(-(x - m) / k))
        cur = [('Responsabilidad', 1.0 * sig(e, 32, 5), G, 0), ('Estabilidad emocional', .82 * sig(e, 30, 5), P, 0), ('Dominancia social', .62 * sig(e, 28, 4.5), T, 0),
               ('Amabilidad', .36 * sig(e, 50, 6), Y, 0), ('Apertura', .3 * sig(e, 23, 2.5) - .55 * sig(e, 58, 4), A, 0)]
        fig, ax = plt.subplots(figsize=(7.4, 3.1))
        for t, y, c, _ in cur:
            y = y - y[0]; ax.plot(e, y, color=c, lw=2.3); ax.text(70.8, y[-1], t, va='center', fontsize=8.2, color=c if c != Y else '#8A6A1E', weight='bold')
        ax.axvspan(20, 40, color=SOFT, zorder=0); ax.text(30, 1.12, 'mayor cambio: 20-40 años', ha='center', fontsize=7.8, color=MUTE)
        ax.axhline(0, color=MUTE, lw=.8, ls=':')
        ax.set_xlim(20, 70); ax.set_ylim(-.4, 1.22); ax.set_yticks([]); ax.set_xticks([20, 30, 40, 50, 60, 70])
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Cambio en el nivel medio'); clean(ax)
        note(ax, y=-.3)
        save(fig, 'nivel-medio.png')

    # U15.3 · modelo de Atkinson
    if want('atkinson'):
        ps = np.linspace(0, 1, 200)
        fig, ax = plt.subplots(figsize=(7.4, 3.0))
        ax.plot(ps, 4 * ps * (1 - ps), color=G, lw=2.5); ax.plot(ps, -4 * ps * (1 - ps) + 1, color=A, lw=2.2, ls='--')
        ax.axvline(.5, color=MUTE, lw=.9, ls=':'); ax.text(.5, 1.06, 'Ps = 0,5', ha='center', fontsize=8.4, color=INK, weight='bold', bbox=dict(fc='white', ec='none', pad=1))
        ax.text(.5, .9, 'alto motivo de logro:\nprefiere dificultad intermedia', ha='center', va='top', fontsize=8.2, color=G, weight='bold', bbox=dict(fc='white', ec='none', pad=1))
        ax.text(.5, .2, 'más miedo al fracaso:\nprefiere los extremos', ha='center', va='bottom', fontsize=8.2, color=A, weight='bold', bbox=dict(fc='white', ec='none', pad=1))
        ax.set_xlim(0, 1); ax.set_ylim(0, 1.15); ax.set_yticks([]); ax.set_xticks([0, .25, .5, .75, 1]); ax.set_xticklabels(['0', '0,25', '0,5', '0,75', '1'])
        ax.set_xlabel('Probabilidad de éxito (Ps)'); ax.set_ylabel('Tendencia a\nabordar la tarea', fontsize=9); clean(ax)
        note(ax, y=-.3)
        save(fig, 'atkinson.png')

    # U16.3 · continuo de la autodeterminación
    if want('tad'):
        fig, ax = canvas(7.4, 2.6, 13, 4.4)
        st = [('Desmotivación', '#B9C0C5', INK), ('Regulación\nexterna', '#C9D9E6', INK), ('Regulación\nintroyectada', '#9DBBD2', INK), ('Regulación\nidentificada', '#6E9BBE', 'white'),
              ('Regulación\nintegrada', P, 'white'), ('Motivación\nintrínseca', G, 'white')]
        xs = np.linspace(1.1, 11.9, 6)
        for (t, c, tc), x in zip(st, xs): box(ax, x, 2.4, 2.0, 1.0, t, c, 8.0, tc=tc)
        x0, x1 = xs[1] - 1.0, xs[4] + 1.0; y = 3.15
        ax.plot([x0, x0, x1, x1], [y, y + .2, y + .2, y], color=P, lw=1.4); ax.plot([(x0 + x1) / 2] * 2, [y + .2, y + .4], color=P, lw=1.4)
        ax.text((x0 + x1) / 2, y + .5, 'motivación extrínseca', ha='center', va='bottom', fontsize=8.8, color=P, weight='bold')
        ax.add_patch(FancyArrowPatch((.3, 1.25), (12.7, 1.25), arrowstyle='-|>', mutation_scale=14, color=INK, lw=1.6))
        ax.text(6.5, .9, 'de menos a más autonomía', ha='center', va='top', fontsize=8.6, color=INK, style='italic')
        note(ax, y=-.05)
        save(fig, 'tad.png')

    # U16.4 · mentalidad de crecimiento y agotamiento del ego
    if want('mentalidad'):
        lab = ['Mentalidad de crecimiento\n(Macnamara y Burgoyne, 2023)', 'Agotamiento del ego\n(Hagger et al., 2016)', 'Agotamiento del ego\n(Vohs et al., 2021)']
        v = [.05, .04, .06]
        fig, ax = plt.subplots(figsize=(7.4, 2.7)); ys = [2, 1, 0]
        ax.barh(ys, v, color=[G, A, A], height=.5)
        for y, d in zip(ys, v): ax.text(d + .006, y, f'd = {d:.2f}'.replace('.', ','), va='center', fontsize=8.8, color=INK, weight='bold')
        ax.axvline(.2, color=INK, lw=1.3, ls='--'); ax.text(.205, 2.45, 'd = 0,20\n«efecto pequeño»', va='center', fontsize=8.2, color=INK)
        ax.set_yticks(ys); ax.set_yticklabels(lab, fontsize=8.2); ax.set_xlim(0, .3); ax.set_ylim(-.5, 2.85)
        ax.set_xticks([0, .1, .2, .3]); ax.set_xticklabels(['0', '0,10', '0,20', '0,30']); ax.set_xlabel('Tamaño del efecto (d)')
        clean(ax); ax.tick_params(axis='y', length=0)
        save(fig, 'mentalidad.png')
