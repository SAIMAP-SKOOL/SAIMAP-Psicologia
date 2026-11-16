"""Figuras propias del temario de Psicología Educativa. python3 tools/figuras.py → img/*"""
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



from matplotlib.patches import Ellipse, Polygon
from matplotlib.ticker import FuncFormatter
COMA = FuncFormatter(lambda v, _: '0' if abs(v) < 1e-9 else (f'{v:.1f}'.replace('.', ',').replace('-', '−') if abs(v) < 5 else f'{v:.0f}'))


def hbars(name, labels, vals, cols, title, xlabel, w=7.4, h=3.4, fmt=None, xlim=None, src=None, zero=True):
    fig, ax = plt.subplots(figsize=(w, h)); y = np.arange(len(vals))[::-1]
    ax.barh(y, vals, color=cols, height=.62); ax.set_yticks(y); ax.set_yticklabels(labels, fontsize=8.6, color=INK)
    if zero: ax.axvline(0, color=INK, lw=.8)
    if xlim: ax.set_xlim(*xlim)
    span = (ax.get_xlim()[1] - ax.get_xlim()[0])
    for yi, v in zip(y, vals):
        t = fmt(v) if fmt else f'{v:+.2f}'.replace('.', ',')
        ax.text(v + (span * .012 if v >= 0 else -span * .012), yi, t, va='center', ha='left' if v >= 0 else 'right', fontsize=8.6, color=INK, weight='bold')
    ax.set_xlabel(xlabel, fontsize=8.6); ax.set_title(title, loc='left'); clean(ax); ax.xaxis.set_major_formatter(COMA)
    if src: ax.text(0, -.27 if h > 3.5 else (-.34 if h > 2.5 else -.62), src, transform=ax.transAxes, fontsize=7.4, color=MUTE, va='top')
    save(fig, name)


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)

    if want('puente'):
        fig, ax = canvas(7.4, 3.2, 12, 5)
        ax.add_patch(Ellipse((3.6, 2.7), 5.6, 3.6, fc=P, alpha=.22, ec=P, lw=1.5)); ax.add_patch(Ellipse((8.4, 2.7), 5.6, 3.6, fc=G, alpha=.22, ec=G, lw=1.5))
        ax.text(2.3, 3.3, 'Psicología', weight='bold', color=P, ha='center', fontsize=10.5)
        ax.text(2.3, 2.35, 'aprendizaje\ndesarrollo\nmotivación\ndiferencias individuales', ha='center', va='center', fontsize=8, color=INK)
        ax.text(9.7, 3.3, 'Educación', weight='bold', color='#2F7A4F', ha='center', fontsize=10.5)
        ax.text(9.7, 2.35, 'currículo\ndidáctica\norganización escolar\npolíticas educativas', ha='center', va='center', fontsize=8, color=INK)
        box(ax, 6, 2.7, 2.5, 1.9, 'Psicología de\nla educación\n\nexplicar · diseñar\n· intervenir', A, fs=8.6)
        note(ax, y=-.02); save(fig, 'puente.png')

    if want('linea-tiempo'):
        fig, ax = canvas(9.4, 4.3, 100, 44)
        ax.plot([4, 97], [22, 22], color=INK, lw=2)
        ev = [(1899, 'James\nTalks to Teachers', P), (1903, 'Thorndike\nEducational Psychology', A), (1905, 'Binet y Simon\nprimera escala', G),
              (1910, 'Journal of Educational\nPsychology', V), (1912, 'Claparède\nInstituto Rousseau', T), (1916, 'Terman\nStanford-Binet', Y),
              (1956, 'Bloom\ntaxonomía', P), (1968, 'Ausubel · Rosenthal\ny Jacobson', A), (1978, 'Vygotsky\nen inglés', G),
              (1994, 'Declaración\nde Salamanca', V), (2001, 'Bloom\nrevisada', T), (2013, 'Dunlosky et al.\ntécnicas de estudio', Y)]
        xs = np.linspace(8, 93, len(ev))
        for i, ((yr, t, c), x) in enumerate(zip(ev, xs)):
            up = i % 2 == 0; y2 = 33 if up else 11
            ax.plot([x, x], [22, y2 - (3.2 if up else -3.2)], color=c, lw=1.3); ax.add_patch(Circle((x, 22), 1.0, fc=c, ec='white', lw=1, zorder=3))
            ax.text(x, 24.6 if not up else 19.4, str(yr), ha='center', va='center', fontsize=8.2, weight='bold', color=c)
            ax.text(x, y2 + (1.5 if up else -1.5), t, ha='center', va='center', fontsize=7.3, color=INK, linespacing=1.2)
        ax.text(4, 42, 'Hitos de la psicología de la educación', fontsize=10.5, weight='bold', color=INK)
        ax.text(4, 1.2, 'Selección de hitos; el espaciado entre fechas no es proporcional.', fontsize=7.4, color=MUTE)
        save(fig, 'linea-tiempo.png')

    if want('efectos'):
        labs = ['Feedback (Kluger y DeNisi, 1996)', 'Descubrimiento guiado (Alfieri et al., 2011)', 'Montessori, académico (Randolph et al., 2023)',
                'Gestión del aula (Korpershoek et al., 2016)', 'Pigmalión (Raudenbush, 1984)', 'SEL, rendimiento (Cipriano et al., 2023)',
                'Mentalidad de crecimiento (Macnamara y Burgoyne, 2023)', 'Recompensas tangibles (Deci et al., 1999)', 'Descubrimiento sin ayuda (Alfieri et al., 2011)']
        vals = [.41, .30, .24, .22, .11, .11, .05, -.34, -.38]
        hbars('efectos.png', labs, vals, [G if v > 0 else A for v in vals], 'Tamaños del efecto medios en nueve metaanálisis', 'Diferencia de medias estandarizada (d o g)',
              w=8.6, h=4.1, xlim=(-.52, .56), src='Cada barra compara cosas distintas (medidas, edades, grupos de control):\nsirven para orientarse, no para hacer una clasificación.')

    if want('neuromitos'):
        labs = ['«Los ambientes ricos en estímulos mejoran\nel cerebro de los preescolares»', '«Se aprende mejor en el estilo de\naprendizaje preferido (visual, auditivo…)»',
                '«Los ejercicios de coordinación perceptivo-\nmotora mejoran la lectoescritura»']
        hbars('neuromitos.png', labs, [94, 91.1, 82], [A, A, A], 'Docentes españoles que dan por cierto cada neuromito', '% de docentes (N = 284)', w=7.6, h=3.0,
              fmt=pct, xlim=(0, 112), src='Datos: Ferrero, Garaizar y Vadillo (2016).', zero=False)

    if want('operante'):
        fig, ax = canvas(7.4, 3.5, 12, 6)
        ax.text(5.4, 5.55, 'Estímulo agradable', ha='center', weight='bold', fontsize=9, color=INK); ax.text(9.6, 5.55, 'Estímulo aversivo', ha='center', weight='bold', fontsize=9, color=INK)
        ax.text(1.5, 3.9, 'Se presenta\ntras la conducta', ha='center', va='center', weight='bold', fontsize=9, color=INK); ax.text(1.5, 1.6, 'Se retira\ntras la conducta', ha='center', va='center', weight='bold', fontsize=9, color=INK)
        box(ax, 5.4, 3.9, 3.9, 2.0, 'Refuerzo positivo\nla conducta AUMENTA\n(elogio, punto)', G, fs=8.6)
        box(ax, 9.6, 3.9, 3.9, 2.0, 'Castigo positivo\nla conducta DISMINUYE\n(reprimenda)', A, fs=8.6)
        box(ax, 5.4, 1.6, 3.9, 2.0, 'Castigo negativo\nla conducta DISMINUYE\n(coste de respuesta,\ntiempo fuera)', Y, fs=8.6, tc=INK)
        box(ax, 9.6, 1.6, 3.9, 2.0, 'Refuerzo negativo\nla conducta AUMENTA\n(se libra de una tarea\nmolesta)', P, fs=8.6)
        note(ax, y=-.04); save(fig, 'operante.png')

    if want('piaget'):
        fig, ax = canvas(7.4, 3.3, 12, 5.4)
        box(ax, 1.7, 2.7, 2.6, 1.3, 'Equilibrio\n(esquemas actuales)', P, fs=8.6)
        box(ax, 5.0, 2.7, 2.6, 1.3, 'Desequilibrio\n(conflicto cognitivo)', A, fs=8.6)
        box(ax, 8.4, 4.2, 3.0, 1.2, 'Asimilación\nlo nuevo se encaja en\nun esquema que ya existe', G, fs=8)
        box(ax, 8.4, 1.2, 3.0, 1.2, 'Acomodación\nel esquema cambia para\nencajar lo nuevo', V, fs=8)
        box(ax, 11.0, 2.7, 1.7, 1.3, 'Nuevo\nequilibrio', P, fs=8.6)
        arr(ax, (3.0, 2.7), (3.7, 2.7)); arr(ax, (6.0, 3.3), (6.9, 4.0)); arr(ax, (6.0, 2.1), (6.9, 1.4)); arr(ax, (9.9, 4.0), (10.6, 3.4)); arr(ax, (9.9, 1.4), (10.6, 2.0))
        ax.text(5.0, .35, 'Equilibración: el proceso completo', ha='center', fontsize=8.4, color=INK, style='italic')
        note(ax, y=-.04); save(fig, 'piaget.png')

    if want('zdp'):
        fig, ax = canvas(7.4, 3.9, 12, 6.4)
        ax.add_patch(Circle((4.2, 3.2), 3.0, fc='#EDEDED', ec=MUTE, lw=1.2)); ax.add_patch(Circle((4.2, 3.2), 2.1, fc=G, alpha=.45, ec=G, lw=1.2)); ax.add_patch(Circle((4.2, 3.2), 1.05, fc=P, ec='white', lw=1.2))
        ax.text(4.2, 3.2, 'Lo que hace\nsolo', color='white', ha='center', va='center', fontsize=8, weight='bold')
        ax.text(4.2, 4.85, 'ZDP', ha='center', va='center', fontsize=10, weight='bold', color='#2F7A4F'); ax.text(4.2, 1.55, 'lo que hace con ayuda', ha='center', va='center', fontsize=7.8, color=INK)
        ax.text(4.2, 5.72, 'fuera de su alcance', ha='center', va='center', fontsize=7.8, color=INK)
        box(ax, 9.7, 5.0, 4.0, 1.1, 'Nivel de desarrollo real\nresuelve sin ayuda', P, fs=8.2)
        box(ax, 9.7, 3.4, 4.0, 1.3, 'Zona de desarrollo próximo\n(Vygotsky): resuelve con la guía de\nun adulto o un igual más capaz', G, fs=8.0)
        box(ax, 9.7, 1.5, 4.0, 1.6, 'Andamiaje\n(Wood, Bruner y Ross, 1976):\nayuda ajustada que se retira\ncuando el aprendiz progresa', A, fs=8.0)
        arr(ax, (9.7, 2.35), (9.7, 2.72), c=A)
        note(ax, y=-.03); save(fig, 'zdp.png')

    if want('ausubel'):
        fig, ax = canvas(7.4, 3.6, 12, 6)
        ax.text(5.3, 5.6, 'Por recepción', ha='center', weight='bold', fontsize=9, color=INK); ax.text(9.6, 5.6, 'Por descubrimiento', ha='center', weight='bold', fontsize=9, color=INK)
        ax.text(1.5, 3.95, 'Aprendizaje\nsignificativo', ha='center', va='center', weight='bold', fontsize=9, color=INK); ax.text(1.5, 1.6, 'Aprendizaje\nmemorístico', ha='center', va='center', weight='bold', fontsize=9, color=INK)
        box(ax, 5.3, 3.95, 4.0, 2.0, 'Una explicación clara que\nel alumno relaciona con\nlo que ya sabe', G, fs=8.5)
        box(ax, 9.6, 3.95, 4.0, 2.0, 'Una investigación guiada\ncuyo resultado se integra\nen los conocimientos previos', G, fs=8.5)
        box(ax, 5.3, 1.6, 4.0, 2.0, 'Tablas de multiplicar\nrecitadas sin entender\nqué es multiplicar', A, fs=8.5)
        box(ax, 9.6, 1.6, 4.0, 2.0, 'Dar con la solución por\nensayo y error sin\nentender por qué funciona', A, fs=8.5)
        ax.text(7.45, .25, 'Los dos ejes son independientes (Ausubel, 1968)', ha='center', fontsize=8.2, color=INK, style='italic')
        note(ax, y=-.04); save(fig, 'ausubel.png')

    if want('competencias'):
        fig, ax = canvas(7.4, 3.4, 12, 5.6)
        names = ['Comunicación\nlingüística', 'Plurilingüe', 'Matemática y en\nciencia, tecnología\ne ingeniería', 'Digital',
                 'Personal, social y de\naprender a aprender', 'Ciudadana', 'Emprendedora', 'Conciencia y\nexpresión culturales']
        cols = [P, T, G, Y, A, V, P, G]
        for i, (n, c) in enumerate(zip(names, cols)):
            x = 1.6 + (i % 4) * 2.93; y = 3.55 if i < 4 else 1.75
            box(ax, x, y, 2.7, 1.45, n, c, fs=7.6, tc=INK if c == Y else 'white')
        ax.text(6, 5.05, 'Las ocho competencias clave (Recomendación del Consejo de la UE, 2018; LOMLOE, 2020)', ha='center', fontsize=8.8, weight='bold', color=INK)
        ax.text(6, .45, 'Juntas definen el perfil de salida del alumnado al terminar la educación básica', ha='center', fontsize=8.2, color=INK, style='italic')
        save(fig, 'competencias.png')

    if want('descubrimiento'):
        hbars('descubrimiento.png', ['Descubrimiento guiado frente a otras\nformas de enseñanza (360 comparaciones)', 'Descubrimiento sin ayuda frente a\ninstrucción explícita (580 comparaciones)'],
              [.30, -.38], [G, A], '¿Descubrir enseña más? Depende de la guía', 'Tamaño del efecto (d)', w=7.4, h=2.7, xlim=(-.55, .5), src='Datos: Alfieri, Brooks, Aldrich y Tenenbaum (2011), 164 estudios.')

    if want('tecnicas'):
        fig, ax = canvas(8.6, 3.6, 12, 5.2)
        cols3 = [('Utilidad alta', G, ['Práctica de recuperación\n(autoevaluarse)', 'Práctica distribuida\n(espaciar los repasos)']),
                 ('Utilidad moderada', Y, ['Interrogación elaborativa\n(¿por qué es así?)', 'Autoexplicación', 'Práctica intercalada']),
                 ('Utilidad baja', A, ['Releer', 'Subrayar', 'Resumir', 'Palabra clave', 'Imágenes mentales\npara textos'])]
        for k, (t, c, items) in enumerate(cols3):
            x = 2.05 + k * 3.95
            box(ax, x, 4.65, 3.6, .65, t, c, fs=9.4, tc=INK if c == Y else 'white')
            step = 3.9 / max(len(items), 1)
            for j, it in enumerate(items):
                ax.text(x, 4.05 - j * (.78 if len(items) > 3 else 1.05) - .25, it, ha='center', va='center', fontsize=8.2, color=INK, linespacing=1.15,
                        bbox=dict(boxstyle='round,pad=0.3', fc=SOFT, ec=c, lw=1))
        ax.text(0.2, -.25, 'Clasificación de Dunlosky, Rawson, Marsh, Nathan y Willingham (2013).', fontsize=7.4, color=MUTE)
        save(fig, 'tecnicas.png')

    if want('espaciado'):
        fig, ax = plt.subplots(figsize=(7.4, 3.2)); t = np.linspace(0, 30, 600)
        ax.plot(t, 100 * np.exp(-t / 4.5), color=A, lw=2, label='Un solo estudio')
        y = np.zeros_like(t); last = 0; s = 4.5; pts = [0, 3, 9, 19]
        for i, p0 in enumerate(pts):
            p1 = pts[i + 1] if i + 1 < len(pts) else 31; m = (t >= p0) & (t < p1); y[m] = 100 * np.exp(-(t[m] - p0) / s); s *= 2.1
        ax.plot(t, y, color=G, lw=2, label='Repasos espaciados')
        for p0 in pts[1:]: ax.axvline(p0, color=MUTE, lw=.8, ls=':'); ax.text(p0, 104, 'repaso', ha='center', fontsize=7.6, color=MUTE)
        ax.set_ylim(0, 112); ax.set_xlim(0, 30); ax.set_xlabel('Tiempo desde el primer estudio'); ax.set_ylabel('Recuerdo'); ax.set_xticks([]); ax.set_yticks([])
        ax.legend(frameon=False, fontsize=8.4, loc='center right'); clean(ax); note(ax, y=-.2); save(fig, 'espaciado.png')

    if want('carga'):
        fig, ax = canvas(7.4, 3.3, 12, 5.2)
        ax.text(6, 4.8, 'Memoria de trabajo: capacidad limitada', ha='center', fontsize=9.6, weight='bold', color=INK)
        for yy, lab, segs in [(3.5, 'Material mal diseñado', [(3.2, 'Intrínseca', P), (4.3, 'Extrínseca', A), (1.5, 'Pertinente', G)]),
                              (1.7, 'Material bien diseñado', [(3.2, 'Intrínseca', P), (1.3, 'Extr.', A), (4.5, 'Pertinente', G)])]:
            x = 2.6; ax.text(2.4, yy, lab.replace(' ', '\n', 1), ha='right', va='center', fontsize=8.4, color=INK)
            for w_, t_, c in segs:
                ax.add_patch(Rectangle((x, yy - .45), w_, .9, fc=c, ec='white', lw=1.5)); ax.text(x + w_ / 2, yy, t_, ha='center', va='center', color='white', fontsize=8.2, weight='bold'); x += w_
        ax.plot([11.6, 11.6], [.9, 4.3], color=INK, lw=1.4, ls='--'); ax.text(11.6, .55, 'límite', ha='center', fontsize=7.8, color=INK)
        ax.text(6.9, .55, 'Reducir la carga extrínseca deja sitio para construir esquemas', ha='center', fontsize=8.2, color=INK, style='italic')
        note(ax, y=-.05); save(fig, 'carga.png')

    if want('bloom'):
        fig, ax = canvas(9.0, 4.0, 14, 6.6)
        o = ['Conocimiento', 'Comprensión', 'Aplicación', 'Análisis', 'Síntesis', 'Evaluación']; r = ['Recordar', 'Comprender', 'Aplicar', 'Analizar', 'Evaluar', 'Crear']
        cs = [P, T, G, Y, A, V]
        for cx, lv, tt in [(3.6, o, 'Original (Bloom, 1956)\nsustantivos'), (10.4, r, 'Revisada (Anderson y\nKrathwohl, 2001): verbos')]:
            for i, (n, c) in enumerate(zip(lv, cs)):
                w0 = 6.0 - i * .78; y0 = .55 + i * .78
                ax.add_patch(Polygon([(cx - w0 / 2, y0), (cx + w0 / 2, y0), (cx + (w0 - .78) / 2, y0 + .74), (cx - (w0 - .78) / 2, y0 + .74)], fc=c, ec='white', lw=1.5))
                ax.text(cx, y0 + .37, n, ha='center', va='center', color=INK if c == Y else 'white', fontsize=8.3, weight='bold')
            ax.text(cx, 5.95, tt, ha='center', va='center', fontsize=9, weight='bold', color=INK)
        arr(ax, (5.2, 4.05), (8.75, 4.83), c=INK, rad=-.15); arr(ax, (4.85, 4.83), (8.4, 4.05), c=INK, rad=.15)
        ax.text(7, 5.25, '«síntesis» pasa a ser\n«crear» y sube a la cima', ha='center', va='center', fontsize=7.6, color=INK)
        ax.text(7, .12, 'La revisión añade una segunda dimensión: conocimiento factual, conceptual, procedimental y metacognitivo', ha='center', fontsize=7.8, color=INK, style='italic')
        save(fig, 'bloom.png')

    if want('gagne'):
        fig, ax = canvas(9.0, 3.5, 15, 5.6)
        evs = ['1 Captar la\natención', '2 Informar del\nobjetivo', '3 Activar\nprerrequisitos', '4 Presentar el\ncontenido', '5 Guiar el\naprendizaje',
               '6 Provocar la\nejecución', '7 Dar\nfeedback', '8 Evaluar la\nejecución', '9 Retención y\ntransferencia']
        cs = [P, P, P, G, G, G, G, A, A]
        for i, (e, c) in enumerate(zip(evs, cs)):
            col = i % 5; row = i // 5; x = 1.6 + col * 2.95 + (1.45 if row else 0); y = 3.75 - row * 1.95
            box(ax, x, y, 2.55, 1.2, e, c, fs=8.3)
            if i < 8 and (i % 5) != 4: arr(ax, (x + 1.3, y), (x + 1.65, y))
        ax.plot([13.4, 13.4, 3.05, 3.05], [3.12, 2.78, 2.78, 2.6], color=INK, lw=1.2); arr(ax, (3.05, 2.75), (3.05, 2.42))
        ax.text(7.5, 5.15, 'Los nueve eventos de la instrucción (Gagné)', ha='center', fontsize=10, weight='bold', color=INK)
        ax.text(7.5, .45, 'Azul: preparación · Verde: adquisición y práctica · Rojo: evaluación y transferencia', ha='center', fontsize=8, color=INK)
        note(ax, y=-.05); save(fig, 'gagne.png')

    if want('zimmerman'):
        fig, ax = canvas(7.4, 3.9, 12, 6.4)
        box(ax, 6, 5.3, 4.6, 1.4, 'Previsión\nanalizar la tarea, fijar metas,\nplanificar; creencias motivacionales', P, fs=8.3)
        box(ax, 9.6, 1.6, 4.2, 1.5, 'Ejecución\nautocontrol y autoobservación\nmientras se trabaja', G, fs=8.3)
        box(ax, 2.4, 1.6, 4.2, 1.5, 'Autorreflexión\nautoevaluación, atribuciones\ny reacción ante el resultado', A, fs=8.3)
        arr(ax, (8.2, 4.6), (9.8, 2.45), rad=-.25, lw=1.8); arr(ax, (7.4, 1.5), (4.6, 1.5), rad=0, lw=1.8); arr(ax, (2.2, 2.45), (3.8, 4.6), rad=-.25, lw=1.8)
        ax.text(6, 3.15, 'Ciclo de\nautorregulación\n(Zimmerman, 2000)', ha='center', va='center', fontsize=8.8, color=INK, weight='bold')
        note(ax, y=-.03); save(fig, 'zimmerman.png')

    if want('weiner'):
        fig, ax = canvas(7.4, 3.5, 12, 6)
        ax.text(5.3, 5.6, 'Causa interna', ha='center', weight='bold', fontsize=9, color=INK); ax.text(9.6, 5.6, 'Causa externa', ha='center', weight='bold', fontsize=9, color=INK)
        ax.text(1.5, 3.95, 'Estable', ha='center', va='center', weight='bold', fontsize=9, color=INK); ax.text(1.5, 1.6, 'Inestable', ha='center', va='center', weight='bold', fontsize=9, color=INK)
        box(ax, 5.3, 3.95, 4.0, 2.0, 'Capacidad\n(incontrolable)', P, fs=9.2); box(ax, 9.6, 3.95, 4.0, 2.0, 'Dificultad de la tarea\n(incontrolable)', V, fs=9.2)
        box(ax, 5.3, 1.6, 4.0, 2.0, 'Esfuerzo\n(controlable)', G, fs=9.2); box(ax, 9.6, 1.6, 4.0, 2.0, 'Suerte\n(incontrolable)', A, fs=9.2)
        ax.text(7.45, .25, 'Tres dimensiones: locus, estabilidad y controlabilidad (Weiner, 1979, 1985)', ha='center', fontsize=8.2, color=INK, style='italic')
        note(ax, y=-.04); save(fig, 'weiner.png')

    if want('autodeterminacion'):
        fig, ax = canvas(9.0, 3.0, 15, 4.8)
        st = [('Amotivación', 'sin intención\nde actuar', MUTE), ('Regulación\nexterna', 'premios y\ncastigos', A), ('Regulación\nintroyectada', 'culpa,\norgullo', Y),
              ('Regulación\nidentificada', 'lo considero\nimportante', T), ('Regulación\nintegrada', 'encaja con\nmis valores', G), ('Motivación\nintrínseca', 'interés y\ndisfrute', P)]
        for i, (a, b, c) in enumerate(st):
            x = 1.4 + i * 2.44; box(ax, x, 3.0, 2.25, 1.1, a, c, fs=8.3, tc=INK if c == Y else 'white'); ax.text(x, 1.85, b, ha='center', va='center', fontsize=7.9, color=INK)
        ax.annotate('', xy=(14.5, .85), xytext=(.5, .85), arrowprops=dict(arrowstyle='-|>', color=INK, lw=1.5))
        ax.text(.5, .35, 'menos autodeterminación', fontsize=8, color=INK); ax.text(14.5, .35, 'más autodeterminación', fontsize=8, color=INK, ha='right')
        ax.plot([2.7, 12.4], [4.0, 4.0], color=MUTE, lw=1); ax.text(7.55, 4.25, 'Motivación extrínseca (cuatro tipos de regulación)', ha='center', fontsize=8.2, color=INK)
        note(ax, y=-.06); save(fig, 'autodeterminacion.png')

    if want('recompensas'):
        hbars('recompensas.png', ['Feedback positivo (elogio informativo)', 'Recompensa por el rendimiento', 'Recompensa por terminar la tarea', 'Recompensa por participar en la tarea'],
              [.33, -.28, -.36, -.40], [G, A, A, A], 'Efecto sobre la motivación intrínseca', 'Tamaño del efecto (d)', w=7.4, h=3.0, xlim=(-.58, .5),
              src='Datos: Deci, Koestner y Ryan (1999), 128 experimentos; conducta de libre elección.\nLas recompensas son tangibles y esperadas.')

    if want('mentalidad'):
        hbars('mentalidad.png', ['Yeager et al. (2019): alumnado de bajo rendimiento', 'Sisk et al. (2018): intervenciones', 'Macnamara y Burgoyne (2023): todas',
                                 'Macnamara y Burgoyne (2023): mayor calidad'], [.11, .08, .05, .02], [P, P, V, V],
              'Mentalidad de crecimiento: efecto en el rendimiento', 'Tamaño del efecto (d)', w=7.4, h=2.9, xlim=(0, .5),
              src='El eje llega a 0,5 para dar escala: 0,2 suele considerarse un efecto pequeño.', zero=False)

    if want('yerkes'):
        fig, ax = plt.subplots(figsize=(7.4, 3.2)); x = np.linspace(0, 10, 300)
        ax.plot(x, np.exp(-((x - 6.2) ** 2) / 7), color=G, lw=2.2, label='Tarea sencilla o muy practicada'); ax.plot(x, .92 * np.exp(-((x - 3.6) ** 2) / 4.5), color=A, lw=2.2, label='Tarea difícil o nueva')
        ax.plot([6.2, 6.2], [0, 1], color=G, lw=.8, ls=':'); ax.plot([3.6, 3.6], [0, .92], color=A, lw=.8, ls=':')
        ax.set_xlabel('Nivel de activación'); ax.set_ylabel('Rendimiento'); ax.set_xticks([1, 5, 9]); ax.set_xticklabels(['bajo', 'medio', 'alto']); ax.set_yticks([]); ax.set_ylim(0, 1.4)
        ax.legend(frameon=False, fontsize=8.4, loc='upper center', ncol=2); clean(ax); note(ax, y=-.3); save(fig, 'yerkes.png')

    if want('pekrun'):
        fig, ax = canvas(7.4, 3.3, 12, 5.4)
        box(ax, 2.0, 3.9, 3.2, 1.2, 'Control percibido\n«¿depende de mí?»', P, fs=8.6); box(ax, 2.0, 1.5, 3.2, 1.2, 'Valor\n«¿me importa?»', V, fs=8.6)
        box(ax, 6.2, 2.7, 3.0, 2.6, 'Emociones de logro\n\ndisfrute · esperanza\norgullo · ansiedad\nvergüenza · aburrimiento', A, fs=8.3)
        box(ax, 10.3, 2.7, 2.9, 1.9, 'Aprendizaje\ny rendimiento\n(atención, estrategias,\nesfuerzo)', G, fs=8.3)
        arr(ax, (3.6, 3.7), (4.7, 3.2)); arr(ax, (3.6, 1.7), (4.7, 2.2)); arr(ax, (7.7, 2.7), (8.85, 2.7)); arr(ax, (10.3, 1.7), (2.6, .85), rad=-.18, ls='--', c=MUTE)
        ax.text(6.3, .12, 'los resultados modifican las valoraciones', ha='center', fontsize=7.8, color=MUTE)
        ax.text(6, 5.1, 'Teoría del control-valor (Pekrun, 2006)', ha='center', fontsize=9.4, weight='bold', color=INK)
        note(ax, y=-.04); save(fig, 'pekrun.png')

    if want('shavelson'):
        fig, ax = canvas(9.0, 3.6, 15, 6)
        box(ax, 7.5, 5.2, 3.6, .9, 'Autoconcepto general', P, fs=9.2)
        box(ax, 3.6, 3.5, 3.4, .9, 'Autoconcepto académico', G, fs=8.8); box(ax, 11.4, 3.5, 3.6, .9, 'Autoconcepto no académico', A, fs=8.8)
        arr(ax, (6.2, 4.75), (4.4, 3.98)); arr(ax, (8.8, 4.75), (10.6, 3.98))
        for x, t in [(1.2, 'Lengua'), (2.8, 'Matemáticas'), (4.4, 'Ciencias'), (6.0, 'Historia')]:
            box(ax, x, 1.8, 1.45, .75, t, SOFT, fs=7.9, tc=INK, ec=G); arr(ax, (3.6, 3.03), (x, 2.2), c=G, lw=1)
        for x, t in [(8.6, 'Social'), (10.5, 'Emocional'), (12.4, 'Físico:\nhabilidad'), (14.1, 'Físico:\naspecto')]:
            box(ax, x, 1.8, 1.55, .75, t, SOFT, fs=7.9, tc=INK, ec=A); arr(ax, (11.4, 3.03), (x, 2.2), c=A, lw=1)
        ax.text(7.5, .65, 'En la base: valoraciones de la conducta en situaciones concretas', ha='center', fontsize=8.2, color=INK, style='italic')
        ax.text(.2, .1, 'Modelo de Shavelson, Hubner y Stanton (1976), simplificado.', fontsize=7.4, color=MUTE)
        save(fig, 'shavelson.png')

    if want('sel'):
        fig, ax = canvas(7.4, 3.3, 12, 5.4)
        comps = ['Autoconciencia', 'Autogestión', 'Conciencia\nsocial', 'Habilidades\nde relación', 'Decisiones\nresponsables']; cs = [P, T, G, Y, A]
        for i, (n, c) in enumerate(zip(comps, cs)): box(ax, 1.35 + i * 2.32, 3.5, 2.1, 1.25, n, c, fs=8.4, tc=INK if c == Y else 'white')
        ax.text(6, 4.85, 'Las cinco competencias socioemocionales del marco CASEL', ha='center', fontsize=9.4, weight='bold', color=INK)
        ax.text(6, 1.75, 'Programas universales en la escuela', ha='center', fontsize=8.8, weight='bold', color=INK)
        ax.text(6, 1.0, 'Durlak et al. (2011): 213 programas, +11 puntos percentiles en rendimiento\nCipriano et al. (2023): 424 estudios, g = 0,11 en rendimiento', ha='center', va='center', fontsize=8.3, color=INK, linespacing=1.4)
        save(fig, 'sel.png')

    if want('pigmalion'):
        fig, ax = plt.subplots(1, 2, figsize=(9.0, 3.5), gridspec_kw={'width_ratios': [1.25, 1]})
        a = ax[0]; a.set_xlim(0, 10); a.set_ylim(0, 6); a.axis('off')
        box(a, 1.5, 4.7, 2.6, 1.1, 'Test a todo\nel alumnado', P, fs=8.2); box(a, 5.0, 4.7, 3.0, 1.1, 'Al azar, un 20 %\nse presenta como\n«a punto de florecer»', A, fs=7.8)
        box(a, 8.6, 4.7, 2.4, 1.1, 'El docente\nrecibe la lista', V, fs=8.2); box(a, 5.0, 2.3, 3.2, 1.1, 'Un curso después:\nnuevo test', P, fs=8.2)
        box(a, 5.0, .6, 7.6, .8, 'Mayores ganancias de CI en 1.º y 2.º curso', G, fs=7.8)
        arr(a, (2.85, 4.7), (3.45, 4.7)); arr(a, (6.55, 4.7), (7.35, 4.7)); arr(a, (8.6, 4.1), (6.5, 2.75), rad=-.2); arr(a, (5.0, 1.72), (5.0, 1.05))
        a.set_title('Diseño de Rosenthal y Jacobson (1968)', loc='left', fontsize=9.4)
        b = ax[1]; vals = [.23, -.06]; b.bar([0, 1], vals, color=[G, A], width=.55); b.axhline(0, color=INK, lw=.8)
        b.set_xticks([0, 1]); b.set_xticklabels(['Se conocían desde\nhacía ≤ 2 semanas\n(10 estudios)', 'Más de 2 semanas\nde contacto previo\n(8 estudios)'], fontsize=7.8, color=INK)
        for i, v in enumerate(vals): b.text(i, v + (.012 if v > 0 else -.012), f'{v:+.2f}'.replace('.', ','), ha='center', va='bottom' if v > 0 else 'top', fontsize=9, weight='bold', color=INK)
        b.yaxis.set_major_formatter(COMA); b.set_ylim(-.15, .32); b.set_ylabel('Tamaño del efecto (d)', fontsize=8.4); b.set_title('Metaanálisis de Raudenbush (1984)', loc='left', fontsize=9.4); clean(b)
        save(fig, 'pigmalion.png')

    if want('feedback'):
        fig, ax = canvas(7.4, 3.6, 12, 6)
        for i, (q, s, c) in enumerate([('¿Adónde voy?', 'meta y criterios', P), ('¿Cómo voy?', 'progreso actual', G), ('¿Qué sigue?', 'siguiente paso', A)]):
            box(ax, 2.2 + i * 3.8, 4.7, 3.3, 1.2, q + '\n' + s, c, fs=8.8)
        ax.text(6, 3.55, 'Niveles en los que puede actuar el feedback', ha='center', fontsize=9, weight='bold', color=INK)
        for i, (n, s, c) in enumerate([('Tarea', 'correcto o no', T), ('Proceso', 'estrategias usadas', T), ('Autorregulación', 'supervisarse', T), ('Yo', '«qué listo eres»', MUTE)]):
            box(ax, 1.6 + i * 2.93, 2.3, 2.6, 1.15, n + '\n' + s, c, fs=8.3)
        ax.text(6, .95, 'El feedback dirigido al yo es el menos eficaz', ha='center', fontsize=8.4, color=INK, style='italic')
        ax.text(.1, .1, 'Modelo de Hattie y Timperley (2007), simplificado.', fontsize=7.4, color=MUTE)
        save(fig, 'feedback.png')

    if want('rti'):
        fig, ax = canvas(7.4, 3.9, 12, 6.4)
        lv = [(0.6, 2.0, 6.4, G, 'Nivel 1 · Para todos\nenseñanza de calidad y cribado universal'), (2.0, 3.8, 4.5, Y, 'Nivel 2 · Para algunos\napoyo en pequeño grupo'), (3.8, 5.6, 2.55, A, 'Nivel 3\nPara pocos\nintensivo e\nindividual')]
        cx = 4.0
        for y0, y1, w0, c, t in lv:
            w1 = w0 * (5.9 - y1) / (5.9 - y0) if y1 < 5.6 else .5
            ax.add_patch(Polygon([(cx - w0 / 2, y0), (cx + w0 / 2, y0), (cx + w1 / 2, y1), (cx - w1 / 2, y1)], fc=c, ec='white', lw=2))
            ax.text(cx, (y0 + y1) / 2 - (.25 if c == A else 0), t, ha='center', va='center', fontsize=7.9 if c != A else 7.2, weight='bold', color=INK if c == Y else 'white', linespacing=1.2)
        for y, t, c in [(1.3, 'Prevención primaria\n(Caplan, 1964)', G), (2.9, 'Prevención secundaria:\ndetección e intervención tempranas', '#B8860B'), (4.7, 'Prevención terciaria:\nreducir secuelas; evaluación\npsicopedagógica si procede', A)]:
            ax.text(8.3, y, t, ha='left', va='center', fontsize=8.2, color=INK, linespacing=1.25); ax.plot([7.5, 8.15], [y, y], color=c, lw=1.6)
        ax.text(.2, .1, 'Seguimiento del progreso en todos los niveles', fontsize=8, color=INK, style='italic')
        note(ax, y=-.06); save(fig, 'rti.png')

    if want('montessori-efectos'):
        hbars('montessori-efectos.png', ['Resultados no académicos', 'Resultados académicos'], [.33, .24], [G, P], 'Montessori frente a la enseñanza tradicional', 'Tamaño del efecto (g)', w=7.0, h=2.3, xlim=(0, .5),
              src='Datos: Randolph et al. (2023), 32 estudios.', zero=False)
