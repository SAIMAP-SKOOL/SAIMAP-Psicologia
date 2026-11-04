"""Figuras propias del temario de Evaluación Psicológica I. python3 tools/figuras.py → img/*"""
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

# U1 · términos afines
if want('terminos-afines'):
    fig, ax = canvas(7.6, 4.6, 14, 8.4)
    box(ax, 7, 4.2, 3.6, 1.3, 'Evaluación\npsicológica', P, 11)
    items = [('Psicodiagnóstico', 'raíz médica: busca\npatología', A, 2.3, 7.2), ('Testing / medición', 'aplicar tests y cuantificar:\nsolo una parte', Y, 11.7, 7.2),
             ('Assessment', 'integra varias fuentes\nen un juicio', G, 2.3, 4.2), ('Evaluación conductual', 'análisis funcional,\nsin etiquetas', V, 11.7, 4.2),
             ('Evaluación de programas', 'valora intervenciones,\nno personas', T, 2.3, 1.2), ('Examen del estado mental', 'explora funciones\npsíquicas actuales', '#8A6A50', 11.7, 1.2)]
    for t, d, c, x, y in items:
        box(ax, x, y + .35, 4.1, .6, t, c, 8.4, tc=INK if c == Y else 'white')
        ax.text(x, y - .25, d, ha='center', va='top', fontsize=7.8, color=INK)
        ax.plot([7 + (x - 7) * .3, x + (-1 if x > 7 else 1) * 2.0], [4.2 + (y - 4.2) * .3, y + .35], color=MUTE, lw=1, ls=':')
    save(fig, 'terminos-afines.png')

# U2 · línea del tiempo
if want('linea-tiempo'):
    ev = [(1575, 'Huarte', 'Examen de\ningenios'), (1879, 'Wundt', 'laboratorio\nen Leipzig'), (1884, 'Galton', 'laboratorio\nantropométrico'), (1890, 'Cattell', '«mental test»'),
          (1905, 'Binet y Simon', 'primera escala\nde inteligencia'), (1912, 'Stern', 'cociente\nintelectual'), (1916, 'Terman', 'Stanford-Binet'), (1917, 'Army', 'Alpha y Beta'),
          (1921, 'Rorschach', 'Psicodiagnóstico'), (1935, 'Morgan y Murray', 'TAT'), (1939, 'Wechsler', 'CI de\ndesviación'), (1943, 'MMPI', 'criterio\nexterno'),
          (1954, 'Meehl', 'clínica frente\na estadística'), (1965, 'Kanfer y Saslow', 'análisis\nconductual'), (1968, 'Mischel', 'crítica del\nrasgo'), (2001, 'GAP', '96 directrices'), (2014, 'Standards', 'AERA/APA/NCME')]
    fig, ax = canvas(9.0, 3.6, 18, 6)
    xs = np.linspace(.7, 17.3, len(ev))
    ax.plot([.3, 17.7], [3, 3], color=MUTE, lw=2)
    ax.plot([1.2, 1.4], [3, 3], color='white', lw=4); ax.text(1.3, 3.05, '//', ha='center', va='center', fontsize=9, color=MUTE)
    cols = [P, G, Y, V, A, T]
    for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
        up = i % 2 == 0; c = cols[i % len(cols)]
        ax.plot([x], [3], 'o', color=c, ms=8)
        ax.text(x, 2.6 if up else 3.4, str(yr), ha='center', va='top' if up else 'bottom', fontsize=8.2, color=c, weight='bold')
        ax.text(x, 3.6 if up else 2.4, a, ha='center', va='bottom' if up else 'top', fontsize=7.4, color=INK, weight='bold')
        ax.text(x, 4.15 if up else 1.85, d, ha='center', va='bottom' if up else 'top', fontsize=6.8, color=MUTE)
    ax.set_ylim(1.0, 5.0); fig.set_size_inches(9.0, 2.7)
    save(fig, 'linea-tiempo.png')

# U2 · hitos España
if want('hitos-espana'):
    ev = [('1575', 'Huarte de San Juan', 'Examen de ingenios'), ('1919', 'Mira i López', 'Institut d\'Orientació\nProfessional'), ('1922', 'Mira i López', 'selección de\nconductores'),
          ('1953', 'Universidad de Madrid', 'Escuela de Psicología\ny Psicotecnia'), ('1957', 'Yela · TEA', 'cátedra y primera\neditorial de tests'), ('1971', 'Primeros', 'licenciados en\nPsicología'),
          ('1979–80', 'Ley 43/1979', 'Colegio Oficial\nde Psicólogos'), ('1987', 'COP', 'Código\nDeontológico'), ('2026', 'Proyecto', 'nuevo Código\nen tramitación')]
    fig, ax = canvas(8.6, 3.2, 17, 5.4)
    xs = np.linspace(1, 16, len(ev))
    ax.plot([.4, 16.6], [2.7, 2.7], color=MUTE, lw=2)
    for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
        up = i % 2 == 0; c = [A, Y, Y, P, P, G, V, V, T][i]
        ax.plot([x], [2.7], 'o', color=c, ms=9)
        ax.text(x, 2.3 if up else 3.1, yr, ha='center', va='top' if up else 'bottom', fontsize=8.6, color=c, weight='bold')
        ax.text(x, 3.3 if up else 2.1, a, ha='center', va='bottom' if up else 'top', fontsize=7.6, color=INK, weight='bold')
        ax.text(x, 3.8 if up else 1.6, d, ha='center', va='bottom' if up else 'top', fontsize=7.0, color=MUTE)
    ax.set_ylim(.7, 4.7); fig.set_size_inches(8.6, 2.5)
    save(fig, 'hitos-espana.png')

# U3 · modelos
if want('modelos'):
    fig, ax = canvas(8.8, 3.7, 17.6, 7.4)
    rows = [['Modelo', 'Objeto de evaluación', 'Método preferente', 'Inferencia'],
            ['Psicométrico o del atributo', 'Rasgos estables e internos', 'Tests normativos', 'Alta'],
            ['Médico', 'Síntomas → entidad nosológica', 'Entrevista, criterios DSM/CIE', 'Media-alta'],
            ['Dinámico', 'Estructuras y conflictos inconscientes', 'Técnicas proyectivas', 'Muy alta'],
            ['Fenomenológico', 'Experiencia subjetiva, autoconcepto', 'Entrevista centrada en el cliente,\nQ-sort, autoinformes', 'Media'],
            ['Conductual', 'Conducta y ambiente actual', 'Observación, análisis funcional', 'Baja'],
            ['Cognitivo-conductual', 'Conducta, cognición y emoción', 'Autorregistros, autoinformes, observación', 'Baja-media']]
    table(ax, .1, 7.2, [4.3, 5.2, 5.8, 2.2], 1.0, rows, fs=8.0)
    save(fig, 'modelos.png')

# U4 · disyuntivas
if want('disyuntivas'):
    fig, ax = canvas(9.2, 4.9, 18.4, 9.8)
    rows = [['Disyuntiva', 'Polo A', 'Polo B', 'Referencia'],
            ['Nomotético / idiográfico', 'Leyes generales; norma de grupo', 'Lo singular de cada persona', 'Allport (1937); Lamiell (1981)'],
            ['Cuantitativo / cualitativo', 'Medición y escalas', 'Significado y narrativa', 'Complementarios'],
            ['Signo / muestra', 'Indicio de un constructo latente', 'Muestra del repertorio', 'Goodenough (1949); Mischel (1968)'],
            ['Normativo / criterial / ipsativo', 'Comparación con un grupo', 'Con un estándar o consigo mismo', 'R. B. Cattell (1944)'],
            ['Rasgo / estado', 'Disposición estable', 'Condición transitoria', 'Spielberger (STAI, 1970)'],
            ['Estructura / función', 'Qué forma tiene la conducta', 'Para qué sirve', 'Haynes y O\'Brien (1990)'],
            ['Molar / molecular', 'Unidades amplias', 'Unidades finas', 'Fija la fiabilidad alcanzable'],
            ['Ancho de banda / fidelidad', 'Mucha información poco precisa', 'Poca información muy precisa', 'Cronbach y Gleser (1957)']]
    table(ax, .1, 9.6, [4.6, 4.4, 4.4, 4.8], 1.05, rows, fs=7.7)
    save(fig, 'disyuntivas.png')

# U4 · SORKC
if want('sorkc'):
    fig, ax = canvas(9.0, 3.2, 18, 6)
    it = [('E', 'Estímulo\nantecedente', 'exponer en clase', Y), ('O', 'Organismo', 'historia de burlas;\nactivación basal alta', V), ('R', 'Respuesta', 'temblor; «haré el\nridículo»; evitación', A),
          ('K', 'Contingencia', 'continua: ocurre\ncada vez', T), ('C', 'Consecuencia', 'alivio inmediato\n(refuerzo negativo)', G)]
    for i, (l, t, d, c) in enumerate(it):
        x = 1.9 + i * 3.55
        box(ax, x, 4.1, 2.7, 1.5, f'{l}\n{t}', c, 10, tc=INK if c == Y else 'white')
        ax.text(x, 2.85, d, ha='center', va='top', fontsize=8.2, color=INK, linespacing=1.3)
        if i < 4: arr(ax, (x + 1.4, 4.1), (x + 2.15, 4.1))
    ax.add_patch(FancyArrowPatch((16.1, 4.9), (9.0, 4.9), connectionstyle='arc3,rad=0.25', arrowstyle='-|>', mutation_scale=12, color=MUTE, lw=1.2, ls='--'))
    ax.text(12.55, 5.25, 'la consecuencia mantiene la evitación', ha='center', fontsize=7.8, color=MUTE, style='italic')
    ax.set_ylim(1.2, 6.2); fig.set_size_inches(9.0, 2.6)
    note(ax, 'Esquema ilustrativo, no datos', -.04)
    save(fig, 'sorkc.png')

# U4 · triple sistema
if want('triple-sistema'):
    fig, ax = canvas(6.4, 4.6, 12, 8.6)
    for (x, y, t, c) in [(4.6, 5.3, 'Cognitivo-\nverbal', P), (7.4, 5.3, 'Fisiológico', A), (6.0, 3.0, 'Motor', G)]:
        ax.add_patch(Circle((x, y), 2.0, fc=c, alpha=.22, ec=c, lw=2))
    ax.text(3.5, 6.1, 'Cognitivo-\nverbal', ha='center', fontsize=9.5, color=P, weight='bold')
    ax.text(8.6, 6.1, 'Fisiológico', ha='center', fontsize=9.5, color=A, weight='bold')
    ax.text(6.0, 1.9, 'Motor', ha='center', fontsize=9.5, color=G, weight='bold')
    ax.text(6.0, 4.55, 'acoplamiento\ndébil', ha='center', va='center', fontsize=7.8, color=INK, style='italic')
    ax.text(.2, .55, 'Desincronía: «ya no me da miedo» (cognitivo ↓) · la frecuencia\ncardiaca sigue alta (fisiológico =) · ya se acerca al ascensor (motor ↑)',
            fontsize=7.8, color=INK, va='center')
    ax.text(.2, 8.2, 'Lang (1968); término «desincronía»: Rachman y Hodgson (1974)', fontsize=7.4, color=MUTE)
    save(fig, 'triple-sistema.png')

# U4 · cubo de Cone
if want('cubo-cone'):
    fig, ax = canvas(6.6, 5.2, 13, 10.2)
    ox, oy, W, H, dx, dy = 2.6, 1.6, 6.0, 5.0, 2.4, 1.8
    nx, ny, nz = 3, 5, 6
    cw, ch = W / nx, H / ny
    def P2(i, j, k):  # i: contenido (x), j: método (y), k: universo (profundidad)
        return ox + i * cw + k * dx / nz, oy + j * ch + k * dy / nz
    # cara frontal
    for i in range(nx + 1): ax.plot([ox + i * cw] * 2, [oy, oy + H], color=P, lw=.8)
    for j in range(ny + 1): ax.plot([ox, ox + W], [oy + j * ch] * 2, color=P, lw=.8)
    # cara superior
    for i in range(nx + 1): ax.plot([ox + i * cw, ox + i * cw + dx], [oy + H, oy + H + dy], color=P, lw=.8)
    for k in range(nz + 1): ax.plot([ox + k * dx / nz, ox + W + k * dx / nz], [oy + H + k * dy / nz] * 2, color=P, lw=.8)
    # cara lateral
    for j in range(ny + 1): ax.plot([ox + W, ox + W + dx], [oy + j * ch, oy + j * ch + dy], color=P, lw=.8)
    for k in range(nz + 1): ax.plot([ox + W + k * dx / nz] * 2, [oy + k * dy / nz, oy + H + k * dy / nz], color=P, lw=.8)
    # celda destacada: autoobservación (j=3) × motor (i=0) en la cara frontal; tiempo (k=2) en lateral
    ax.add_patch(Rectangle((ox, oy + 3 * ch), cw, ch, fc=A, alpha=.55, ec=A))
    for i, t in enumerate(['Motor', 'Fisiológico', 'Cognitivo']): ax.text(ox + (i + .5) * cw, oy - .3, t, ha='center', va='top', fontsize=8.2, color=INK)
    ax.text(ox + W / 2, oy - .95, 'Contenidos', ha='center', va='top', fontsize=8.8, color=P, weight='bold')
    for j, t in enumerate(['Entrevista', 'Autoinforme', 'Calificación\npor otros', 'Autoobservación', 'Observación\ndirecta']):
        ax.text(ox - .15, oy + (j + .5) * ch, t, ha='right', va='center', fontsize=7.8, color=INK)
    ax.text(.1, oy + H + .5, 'Métodos\n(↑ más directos)', ha='left', va='bottom', fontsize=8.4, color=P, weight='bold')
    for k, t in enumerate(['observador', 'ítem', 'tiempo', 'situación', 'método', 'dimensión']):
        x, y = ox + W + (k + .5) * dx / nz, oy + (k + .5) * dy / nz
        ax.text(x + .25, y - .15, t, ha='left', va='top', fontsize=7.0, color=INK, rotation=0)
    ax.text(ox + W + dx + .1, oy + dy + .5, 'Universos de\ngeneralización', ha='left', fontsize=8.4, color=P, weight='bold')
    ax.text(ox + cw * .5, oy + 3.5 * ch, '★', ha='center', va='center', fontsize=12, color='white')
    ax.text(.1, .2, '★ autoobservación × motor (p. ej., generalización en el tiempo de un autorregistro de evitación)', fontsize=7.4, color=A)
    ax.text(12.9, .2, 'Cone (1978)', fontsize=7.4, color=MUTE, ha='right')
    note(ax, 'Esquema ilustrativo, no datos', -.03)
    save(fig, 'cubo-cone.png')

# U5 · proceso
if want('proceso'):
    fig, ax = canvas(9.0, 3.6, 18, 7)
    st = [('1', 'Recogida de\ninformación', 'demanda, primera entrevista,\ncondiciones de partida', P), ('2', 'Hipótesis', 'y enunciados\nverificables', V),
          ('3', 'Contrastación', 'elección y aplicación\nde técnicas', A), ('4', 'Resultados\ne informe', 'comunicación oral\ny escrita', G)]
    for i, (n, t, d, c) in enumerate(st):
        x = 2.1 + i * 4.3
        box(ax, x, 4.6, 3.3, 1.4, f'{n} · {t}', c, 9.4)
        ax.text(x, 3.65, d, ha='center', va='top', fontsize=7.8, color=INK)
        if i < 3: arr(ax, (x + 1.7, 4.6), (x + 2.6, 4.6))
    ax.add_patch(FancyArrowPatch((10.7, 5.35), (6.6, 5.35), connectionstyle='arc3,rad=0.45', arrowstyle='-|>', mutation_scale=12, color=A, lw=1.3, ls='--'))
    ax.text(8.65, 6.55, 'si no se confirman, nuevas hipótesis', ha='center', fontsize=7.8, color=A, style='italic')
    box(ax, 14.0, 1.25, 7.0, 1.1, '5 · Tratamiento, valoración y seguimiento', Y, 9.2, tc=INK)
    arr(ax, (16.5, 3.9), (16.5, 1.85))
    ax.text(16.7, 2.85, 'rama interventiva', ha='left', fontsize=7.8, color=MUTE, style='italic')
    ax.text(.3, 1.25, 'Rama descriptivo-predictiva: termina en el informe (fase 4).', fontsize=7.8, color=MUTE, va='center')
    note(ax, 'Esquema ilustrativo, no datos', -.02)
    save(fig, 'proceso.png')

# U6 · sesgos
if want('sesgos-evaluador'):
    fig, ax = canvas(7.6, 4.8, 15, 9.6)
    cs = [('Confirmación', 'Busca solo datos que\napoyan su primera idea\nde «depresión»', P), ('Anclaje', 'La primera puntuación\nalta condiciona la lectura\ndel resto del perfil', V),
          ('Disponibilidad', 'Sobrediagnostica TDAH\nporque acaba de ver\nvarios casos', G), ('Correlación ilusoria', 'Cree que «ojos grandes\nen el dibujo» indican\nparanoia', A),
          ('Omisión de tasa base', 'Ignora que el trastorno\nes raro en la población\nque atiende', T), ('Efecto Barnum', 'Acepta como precisa\nuna descripción vaga\nválida para casi todos', Y)]
    for k, (t, d, c) in enumerate(cs):
        i, j = k % 3, k // 3
        card(ax, .3 + i * 4.9, 5.0 - j * 4.7, 4.5, 4.2, t, d, c, 8.2)
    save(fig, 'sesgos-evaluador.png')

# U6 · VPP y tasa base
if want('vpp-tasa-base'):
    fig, axs = plt.subplots(1, 2, figsize=(8.6, 3.4))
    for ax, (prev, vp, fn, fp, vn, vpp) in zip(axs, [('5 %', 45, 5, 95, 855, '45 / 140 ≈ 32 %'), ('50 %', 450, 50, 50, 450, '450 / 500 = 90 %')]):
        ax.set_xlim(0, 10); ax.set_ylim(0, 8); ax.axis('off')
        ax.text(5, 7.6, f'Prevalencia {prev} · 1.000 personas', ha='center', fontsize=9.6, color=INK, weight='bold')
        ax.text(4.4, 6.6, 'Tiene el\ntrastorno', ha='center', fontsize=8, color=MUTE); ax.text(7.8, 6.6, 'No lo\ntiene', ha='center', fontsize=8, color=MUTE)
        ax.text(1.4, 4.9, 'Test +', ha='center', fontsize=8.6, color=INK, weight='bold'); ax.text(1.4, 2.7, 'Test −', ha='center', fontsize=8.6, color=INK, weight='bold')
        for (x, y, v, l, c) in [(4.4, 4.9, vp, 'VP', G), (7.8, 4.9, fp, 'FP', A), (4.4, 2.7, fn, 'FN', A), (7.8, 2.7, vn, 'VN', G)]:
            ax.add_patch(FancyBboxPatch((x - 1.5, y - .95), 3.0, 1.9, boxstyle='round,pad=0.02,rounding_size=0.1', fc=c, alpha=.18, ec=c))
            ax.text(x, y + .25, str(v), ha='center', va='center', fontsize=13, color=INK, weight='bold'); ax.text(x, y - .5, l, ha='center', fontsize=8, color=c, weight='bold')
        ax.text(5, .7, f'VPP = {vpp}', ha='center', fontsize=10, color=P, weight='bold')
    fig.text(.5, .01, 'Sensibilidad = especificidad = 0,90 en ambos casos · VPP: probabilidad de tenerlo si el test es positivo', ha='center', fontsize=7.8, color=MUTE)
    save(fig, 'vpp-tasa-base.png')

# U7 · informe
if want('informe-estructura'):
    fig, ax = canvas(9.0, 4.4, 18, 8.8)
    bl = ['1 · Identificación (evaluado, evaluador, solicitante)', '2 · Motivo de la evaluación', '3 · Técnicas aplicadas y fechas', '4 · Resultados',
          '5 · Integración y respuesta a la demanda', '6 · Conclusiones y recomendaciones', '7 · Alcance y limitaciones', '8 · Firma y n.º de colegiado']
    ax.add_patch(FancyBboxPatch((.3, .3), 7.6, 8.2, boxstyle='round,pad=0.02,rounding_size=0.15', fc='white', ec=P, lw=1.6))
    ax.text(4.1, 8.05, 'Informe escrito', ha='center', fontsize=10, color=P, weight='bold')
    for i, t in enumerate(bl):
        ax.add_patch(Rectangle((.7, 7.0 - i * .85), 6.8, .66, fc=[P, P, V, V, G, G, Y, Y][i], alpha=.18, ec='none'))
        ax.text(.9, 7.33 - i * .85, t, va='center', fontsize=8.2, color=INK)
    vs = [('Técnico', 'para otros profesionales;\nterminología del ámbito', P), ('Personal', 'para la persona evaluada;\nlenguaje llano; base de la devolución', G),
          ('Certificado', 'breve; acredita un hecho\npara un uso concreto', A)]
    for i, (t, d, c) in enumerate(vs):
        y = 6.9 - i * 2.6
        box(ax, 11.3, y, 3.4, 1.0, t, c, 9.6)
        ax.text(13.3, y, d, va='center', fontsize=7.9, color=INK)
        arr(ax, (8.0, 4.4), (9.5, y), MUTE, lw=1)
    ax.text(13.0, .4, 'Según el destinatario cambia el registro, no el rigor', ha='center', fontsize=7.8, color=MUTE, style='italic')
    save(fig, 'informe-estructura.png')

# U8 · artículos del Código
if want('codigo-articulos'):
    arts = [('6', 'principios y prudencia\nen las técnicas'), ('12', 'evitar etiquetas\ndevaluadoras'), ('17', 'competencia y\nactualización'), ('18', 'no contrastados:\navisar antes'),
            ('19', 'material de evaluación\nreservado'), ('24', 'rechazar usos contra\nlas personas'), ('25', 'informar del método;\nmenores: padres o tutores'), ('39', 'intimidad: solo lo\nnecesario'), ('40', 'secreto\nprofesional'),
            ('41', 'terceros solo con\nautorización'), ('42', 'derecho a conocer\nel informe'), ('43', 'informes para\ninstituciones'), ('44', 'no usar en\nbeneficio propio'),
            ('45', 'anonimato en\ncasos'), ('46', 'custodia de\nregistros'), ('47', 'terceros presentes:\nconsentimiento'), ('48', 'requisitos del\ninforme'), ('49', 'secreto tras el\nfallecimiento')]
    fig, ax = canvas(9.4, 4.4, 18.8, 8.8)
    for k, (n, d) in enumerate(arts):
        i, j = k % 6, k // 6
        x, y = .2 + i * 3.1, 6.3 - j * 2.65
        c = P if int(n) < 39 else G
        ax.add_patch(FancyBboxPatch((x, y), 2.95, 2.3, boxstyle='round,pad=0.02,rounding_size=0.12', fc='white', ec=c, lw=1.4))
        ax.text(x + .2, y + 1.85, f'Art. {n}', fontsize=9.4, color=c, weight='bold', va='center')
        ax.text(x + .15, y + .9, d, fontsize=7.2, color=INK, va='center', linespacing=1.25)
    ax.add_patch(Rectangle((9.6, .25), .4, .4, fc=P)); ax.text(10.15, .45, 'principios y práctica', fontsize=7.6, va='center', color=INK)
    ax.add_patch(Rectangle((12.8, .25), .4, .4, fc=G)); ax.text(13.35, .45, 'obtención y uso de la información', fontsize=7.6, va='center', color=INK)
    ax.text(.2, .45, 'Código Deontológico del COP (1987; mod. 2010, 2014 y 2015)', fontsize=7.2, color=MUTE, va='center')
    save(fig, 'codigo-articulos.png')

# U9 · ETM
if want('etm-intervalo'):
    fig, ax = plt.subplots(figsize=(6.6, 2.7))
    for y, e, c in [(1.6, 3, P), (.6, 6, A)]:
        lo, hi = 100 - 1.96 * e, 100 + 1.96 * e
        ax.plot([lo, hi], [y, y], color=c, lw=6, solid_capstyle='round', alpha=.75); ax.plot([100], [y], 'o', color=INK, ms=7)
        ax.text(lo, y + .28, f'{lo:.1f}'.replace('.', ','), ha='center', fontsize=8.6, color=c, weight='bold'); ax.text(hi, y + .28, f'{hi:.1f}'.replace('.', ','), ha='center', fontsize=8.6, color=c, weight='bold')
        ax.text(118.5, y, f'ETM = {e}', va='center', fontsize=9, color=c, weight='bold')
    ax.set_xlim(82, 124); ax.set_ylim(0, 2.4); ax.set_yticks([]); ax.set_xticks([85, 90, 95, 100, 105, 110, 115]); ax.set_xlabel('CI')
    ax.text(100, 2.2, 'CI observado = 100 · intervalo del 95 %: X ± 1,96 · ETM', ha='center', fontsize=8.4, color=INK)
    clean(ax); ax.spines['left'].set_visible(False)
    save(fig, 'etm-intervalo.png')

# U9 · curva normal
if want('curva-normal'):
    fig = plt.figure(figsize=(8.6, 4.6)); ax = fig.add_axes([.17, .45, .8, .5])
    x = np.linspace(-3.6, 3.6, 400); ax.plot(x, norm.pdf(x), color=P, lw=2); ax.fill_between(x, norm.pdf(x), color=P, alpha=.12)
    for k in range(-3, 4): ax.plot([k, k], [0, norm.pdf(k)], color=MUTE, lw=.8, ls=':')
    for a, b, t in [(-1, 0, '34,1 %'), (0, 1, '34,1 %'), (1, 2, '13,6 %'), (-2, -1, '13,6 %'), (2, 3, '2,1 %'), (-3, -2, '2,1 %')]:
        ax.text((a + b) / 2, .03 if abs(a) + abs(b) > 2 else .12, t, ha='center', fontsize=7.8, color=INK)
    ax.set_xlim(-3.6, 3.6); ax.set_ylim(0, .43); ax.axis('off')
    scales = [('Puntuación z', lambda k: f'{k:+d}' if k else '0'), ('T (50; 10)', lambda k: str(50 + 10 * k)), ('CI (100; 15)', lambda k: str(100 + 15 * k)),
              ('Escalar (10; 3)', lambda k: str(10 + 3 * k)), ('Eneatipo (5; 2)', lambda k: str(5 + 2 * k) if 1 <= 5 + 2 * k <= 9 else ('1' if k < 0 else '9')),
              ('Decatipo (5,5; 2)', lambda k: f'{5.5 + 2 * k:.1f}'.replace('.', ',').replace(',0', '') if 1 <= 5.5 + 2 * k <= 10 else ('1' if k < 0 else '10')),
              ('Percentil', lambda k: ['0,1', '2', '16', '50', '84', '98', '99,9'][k + 3])]
    for r, (name, f) in enumerate(scales):
        y = .38 - r * .052
        fig.text(.02, y, name, fontsize=8.2, color=INK, weight='bold', va='center')
        for k in range(-3, 4):
            xf = .17 + .8 * (k + 3.6) / 7.2
            fig.text(xf, y, f(k), ha='center', va='center', fontsize=8.2, color=P if r < 6 else A)
    fig.text(.17, .005, 'Eneatipo y decatipo se truncan en sus extremos (1–9 y 1–10). Los percentiles son ordinales: no se promedian.', fontsize=7.4, color=MUTE)
    fig.savefig(f'{OUT}/curva-normal.png', dpi=200); plt.close(fig); print('ok curva-normal.png')

# U10 · fuentes de validez
if want('validez-fuentes'):
    fig, ax = canvas(6.6, 4.6, 12, 8.4)
    ax.add_patch(Circle((6, 4.2), 1.55, fc=P, ec='none')); ax.text(6, 4.2, 'Interpretación\nde las\npuntuaciones\npara un uso', ha='center', va='center', color='white', fontsize=8.6, weight='bold')
    src = [('Contenido', 'el test representa\nel dominio'), ('Procesos de\nrespuesta', 'qué hace la persona\nal responder'), ('Estructura\ninterna', 'dimensiones y\nconsistencia'),
           ('Relaciones con\notras variables', 'convergente,\ndiscriminante, criterio'), ('Consecuencias', 'efectos de usar\nel test')]
    cs = [G, Y, V, A, T]
    for k, ((t, d), c) in enumerate(zip(src, cs)):
        ang = np.pi / 2 + k * 2 * np.pi / 5; x, y = 6 + 3.9 * np.cos(ang), 4.2 + 3.0 * np.sin(ang)
        box(ax, x, y + .25, 2.6, .85, t, c, 7.9, tc=INK if c == Y else 'white'); ax.text(x, y - .3, d, ha='center', va='top', fontsize=7.0, color=INK)
        ax.plot([6 + 1.6 * np.cos(ang), x - .9 * np.cos(ang)], [4.2 + 1.6 * np.sin(ang), y - .5 * np.sin(ang)], color=MUTE, lw=1, ls=':')
    ax.text(.1, .05, 'Standards for Educational and Psychological Testing (AERA, APA y NCME, 2014)', fontsize=7.2, color=MUTE)
    save(fig, 'validez-fuentes.png')

# U10 · MTMM
if want('mtmm'):
    lab = ['Ans-A', 'Ext-A', 'Ans-O', 'Ext-O']
    M = np.array([[.88, .20, .62, .10], [.20, .85, .12, .58], [.62, .12, .80, .25], [.10, .58, .25, .78]])
    kind = [['f', 'h', 'c', 'd'], ['h', 'f', 'd', 'c'], ['c', 'd', 'f', 'h'], ['d', 'c', 'h', 'f']]
    col = {'f': P, 'c': G, 'h': Y, 'd': '#C9CED2'}
    fig, ax = plt.subplots(figsize=(6.4, 3.6)); ax.set_xlim(0, 10); ax.set_ylim(0, 6); ax.axis('off')
    for i in range(4):
        ax.text(1.2 + i * 1.1 + .55, 5.35, lab[i], ha='center', fontsize=8.2, color=INK, weight='bold'); ax.text(1.05, 4.65 - i * 1.1, lab[i], ha='right', va='center', fontsize=8.2, color=INK, weight='bold')
        for j in range(i + 1):
            k = kind[i][j]; ax.add_patch(Rectangle((1.2 + j * 1.1, 4.1 - i * 1.1), 1.05, 1.05, fc=col[k], alpha=.85 if k != 'd' else .6, ec='white'))
            v = (f'({M[i, j]:.2f})' if k == 'f' else f'{M[i, j]:.2f}').replace('.', ',')
            ax.text(1.2 + j * 1.1 + .52, 4.62 - i * 1.1, v, ha='center', va='center', fontsize=8.4, color='white' if k in 'fc' else INK, weight='bold')
    for y, k, t in [(4.6, 'f', 'Fiabilidad (diagonal)'), (3.7, 'c', 'Validez convergente: mismo rasgo,\ndistinto método → alta'), (2.6, 'h', 'Mismo método, distinto rasgo\n→ baja'), (1.5, 'd', 'Distinto rasgo y método\n→ la más baja')]:
        ax.add_patch(Rectangle((6.2, y - .2), .4, .4, fc=col[k])); ax.text(6.8, y, t, va='center', fontsize=7.8, color=INK)
    ax.text(.2, .25, 'Ans = ansiedad · Ext = extraversión · A = autoinforme · O = observación. Valores inventados.', fontsize=7.2, color=MUTE)
    ax.text(.2, -.15, 'Campbell y Fiske (1959)', fontsize=7.2, color=MUTE)
    save(fig, 'mtmm.png')

# U11 · técnicas de escucha
if want('tecnicas-escucha'):
    fig, ax = canvas(9.0, 4.0, 18, 8)
    ax.add_patch(FancyBboxPatch((2.5, 6.2), 13, 1.4, boxstyle='round,pad=0.02,rounding_size=0.3', fc=SOFT, ec=MUTE))
    ax.text(9, 6.9, 'Paciente: «Desde que empecé el trabajo nuevo no duermo y llego a casa agotada».', ha='center', va='center', fontsize=9, color=INK, style='italic')
    rs = [('Clarificación', '«¿Qué quiere decir con\n“no duermo”: le cuesta\ndormirse o se despierta\npor la noche?»', '¿Qué significa?', V), ('Paráfrasis', '«Desde el cambio de trabajo\nduerme mal y termina\nel día sin energía.»', 'devuelve el contenido', P),
          ('Reflejo', '«Parece que se siente\ndesbordada con\nesta etapa.»', 'devuelve la emoción', A), ('Resumen', '«Hasta ahora: el cambio\nde trabajo, el sueño y\nque apenas ve a sus\namigas. ¿Me dejo algo?»', 'integra y da paso', G)]
    for i, (t, d, f, c) in enumerate(rs):
        x = .3 + i * 4.45
        card(ax, x, .5, 4.1, 4.8, t, d, c, 8.0)
        ax.text(x + 2.05, .85, f, ha='center', fontsize=7.6, color=c, style='italic')
        arr(ax, (9, 6.1), (x + 2.05, 5.4), MUTE, lw=.9)
    save(fig, 'tecnicas-escucha.png')

# U12 · embudo
if want('embudo-entrevista'):
    fig, ax = canvas(7.6, 3.9, 15.2, 7.8)
    for k, (w, t, c) in enumerate([(7.0, 'Abiertas · «¿Qué le trae por aquí?»', P), (5.4, 'Semiabiertas · «¿En qué situaciones ocurre?»', V), (3.8, 'Cerradas · «¿Cuántas veces la última semana?»', A)]):
        y = 6.4 - k * 1.9
        ax.add_patch(plt.Polygon([(4.5 - w / 2, y + .8), (4.5 + w / 2, y + .8), (4.5 + (w - 1.6) / 2, y - .8), (4.5 - (w - 1.6) / 2, y - .8)], fc=c, alpha=.85))
        ax.text(4.5, y, t.split(' · ')[0], ha='center', va='center', color='white', fontsize=9, weight='bold'); ax.text(4.5, y - 1.15 if k == 2 else y - .5, '', fontsize=1)
        ax.text(8.4, y, t.split(' · ')[1], va='center', fontsize=7.2, color=INK)
    ax.text(4.5, .25, 'Embudo: de lo general a lo concreto', ha='center', fontsize=8.2, color=INK, weight='bold')
    ax.add_patch(plt.Polygon([(13.85, 5.0), (14.35, 5.0), (15.1, 2.2), (13.1, 2.2)], fc=G, alpha=.8))
    ax.text(14.1, 1.7, 'Embudo invertido:\nde lo concreto a lo\ngeneral (personas poco\ncomunicativas)', ha='center', va='top', fontsize=7.4, color=INK)
    save(fig, 'embudo-entrevista.png')

# U12 · entrevista cognitiva
if want('entrevista-cognitiva'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.8, 3.2), gridspec_kw={'width_ratios': [1, 1.25]})
    a1.set_xlim(0, 5); a1.set_ylim(0, 5); a1.axis('off')
    for k, (t, c) in enumerate([('Reinstaurar el contexto', P), ('Informar de todo', G), ('Cambiar el orden', Y), ('Cambiar la perspectiva', V)]):
        box(a1, 2.5, 4.3 - k * 1.15, 4.6, .85, t, c, 8.6, tc=INK if c == Y else 'white')
    xs = np.arange(2); w = .36
    a2.bar(xs - w / 2, [.87, 1.20], w, color=G, label='Detalles correctos'); a2.bar(xs + w / 2, [.28, .24], w, color=A, label='Detalles incorrectos')
    for x, v in zip(list(xs - w / 2) + list(xs + w / 2), [.87, 1.20, .28, .24]): a2.text(x, v + .03, f'{v:.2f}'.replace('.', ','), ha='center', fontsize=8.2, color=INK)
    a2.set_xticks(xs); a2.set_xticklabels(['Köhnken et al.\n(1999)', 'Memon et al.\n(2010)'], fontsize=8.2); a2.set_ylabel('Tamaño del efecto (d)'); a2.set_ylim(0, 1.45)
    a2.legend(frameon=False, fontsize=7.8, loc='upper left'); clean(a2)
    a2.yaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, p: f'{v:.1f}'.replace('.', ',')))
    save(fig, 'entrevista-cognitiva.png')

# U13 · unidades de observación
if want('unidades-observacion'):
    fig, ax = canvas(7.0, 4.4, 14, 8.8)
    lv = [('Continuo del comportamiento', 9.0, P), ('Conductas', 7.2, T), ('Interacciones', 5.4, G), ('Atributos o rasgos', 3.6, A)]
    for k, (t, w, c) in enumerate(lv):
        y = 1.2 + k * 1.7
        ax.add_patch(plt.Polygon([(5.2 - w / 2, y), (5.2 + w / 2, y), (5.2 + (w - 1.8) / 2, y + 1.6), (5.2 - (w - 1.8) / 2, y + 1.6)], fc=c, alpha=.85, ec='white'))
        ax.text(5.2, y + .8, t, ha='center', va='center', color='white', fontsize=8.6, weight='bold')
    ax.annotate('', (.35, 7.9), (.35, 1.2), arrowprops=dict(arrowstyle='-|>', color=INK, lw=1.5)); ax.text(.6, 4.6, 'más inferencia', rotation=90, va='center', fontsize=8, color=INK)
    box(ax, 11.8, 4.4, 3.6, 1.5, 'Productos\nde conducta', Y, 9, tc=INK)
    ax.text(11.8, 3.3, 'resultados permanentes:\nno reactivos, pero no\ninforman del proceso', ha='center', va='top', fontsize=7.6, color=INK)
    note(ax, 'Esquema ilustrativo, no datos', -.02)
    save(fig, 'unidades-observacion.png')

# U14 · muestreo
if want('muestreo-intervalos'):
    fig, ax = plt.subplots(figsize=(8.8, 3.6)); ax.set_xlim(-14, 84); ax.set_ylim(-.6, 5.2); ax.axis('off')
    occ = [(3, 8), (22, 40), (55, 57)]
    for a, b in occ: ax.add_patch(Rectangle((a, 4.0), b - a, .55, fc=INK))
    ax.text(-1, 4.27, 'Conducta real', ha='right', va='center', fontsize=8.4, color=INK, weight='bold'); ax.text(62.5, 4.27, '41,7 %', va='center', fontsize=8.6, color=INK, weight='bold')
    for k in range(7): ax.plot([k * 10] * 2, [-.2, 4.7], color='#C9CED2', lw=.8, zorder=0)
    for k in range(7): ax.text(k * 10, -.45, f'{k * 10} s', ha='center', fontsize=7.4, color=MUTE)
    rows = [('Intervalo parcial', [1, 0, 1, 1, 0, 1], '66,7 %', A, 'sobreestima'), ('Intervalo total', [0, 0, 0, 1, 0, 0], '16,7 %', P, 'infraestima'), ('Momentáneo', [0, 0, 1, 1, 0, 0], '33,3 %', G, 'puede errar en ambos sentidos')]
    for r, (t, v, p, c, d) in enumerate(rows):
        y = 2.9 - r * 1.1
        ax.text(-1, y + .27, t, ha='right', va='center', fontsize=8.4, color=c, weight='bold')
        for k, s in enumerate(v):
            if r < 2: ax.add_patch(Rectangle((k * 10 + .4, y), 9.2, .55, fc=c if s else 'white', ec=c, lw=1, alpha=.85 if s else 1))
            else:
                ax.plot([(k + 1) * 10], [y + .27], 'o', ms=9, mfc=c if s else 'white', mec=c, mew=1.4)
        ax.text(62.5, y + .27, f'{p} · {d}', va='center', fontsize=8.0, color=c)
    ax.text(-14, -.95, 'Caso hipotético (60 s, 6 intervalos de 10 s); el patrón de sesgos corresponde a Powell, Martindale y Kulp (1975).', fontsize=7.4, color=MUTE)
    save(fig, 'muestreo-intervalos.png')

# U14 · reactividad del control de fiabilidad
if want('reactividad-fiabilidad'):
    fig, ax = plt.subplots(figsize=(6.2, 3.1))
    ax.bar([0, 1, 2], [3, 2.2, 1.3], color=[G, Y, A], width=.6)
    ax.set_xticks([0, 1, 2]); ax.set_xticklabels(['Control abierto,\nevaluador identificado', 'Control abierto,\nevaluador no identificado', 'Control\nencubierto'], fontsize=8)
    ax.set_yticks([]); ax.set_ylabel('Acuerdo entre observadores'); ax.set_ylim(0, 3.6); clean(ax)
    ax.text(2, 1.45, 'más bajo', ha='center', fontsize=8, color=INK); ax.text(0, 3.15, 'más alto', ha='center', fontsize=8, color=INK)
    note(ax, 'Esquema sin cifras: patrón descrito por Romanczyk et al. (1973)', -.36)
    save(fig, 'reactividad-fiabilidad.png')

# U14 · kappa
if want('acuerdo-kappa'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(8.6, 3.5), gridspec_kw={'width_ratios': [1, 1.15]})
    a1.set_xlim(0, 10); a1.set_ylim(0, 8); a1.axis('off')
    a1.text(6.4, 7.6, 'Observador B', ha='center', fontsize=8.8, color=INK, weight='bold'); a1.text(.4, 3.6, 'Observador A', rotation=90, va='center', fontsize=8.8, color=INK, weight='bold')
    a1.text(4.9, 6.8, 'Sí', ha='center', fontsize=8.4, color=MUTE); a1.text(7.9, 6.8, 'No', ha='center', fontsize=8.4, color=MUTE)
    a1.text(1.6, 5.2, 'Sí', ha='center', fontsize=8.4, color=MUTE); a1.text(1.6, 2.6, 'No', ha='center', fontsize=8.4, color=MUTE)
    for x, y, v, c in [(4.9, 5.2, 8, G), (7.9, 5.2, 2, A), (4.9, 2.6, 2, A), (7.9, 2.6, 8, G)]:
        a1.add_patch(Rectangle((x - 1.4, y - 1.2), 2.8, 2.4, fc=c, alpha=.2, ec=c)); a1.text(x, y, str(v), ha='center', va='center', fontsize=14, color=INK, weight='bold')
    a1.text(9.6, 5.2, '10', va='center', fontsize=8.4, color=MUTE); a1.text(9.6, 2.6, '10', va='center', fontsize=8.4, color=MUTE)
    a1.text(4.9, .9, '10', ha='center', fontsize=8.4, color=MUTE); a1.text(7.9, .9, '10', ha='center', fontsize=8.4, color=MUTE); a1.text(9.6, .9, '20', fontsize=8.4, color=INK, weight='bold')
    a2.set_xlim(0, 10); a2.set_ylim(0, 8); a2.axis('off')
    lines = [('Acuerdo observado', 'Po = (8 + 8) / 20 = 0,80', INK), ('Acuerdo por azar', 'Pe = 0,5 · 0,5 + 0,5 · 0,5 = 0,50', INK),
             ('Kappa de Cohen', 'κ = (Po − Pe) / (1 − Pe)', P), ('', '= (0,80 − 0,50) / 0,50 = 0,60', P)]
    for k, (t, f, c) in enumerate(lines):
        y = 6.8 - k * 1.45
        if t: a2.text(.2, y + .45, t, fontsize=8.4, color=MUTE)
        a2.text(.2, y, f, fontsize=10, color=c, weight='bold')
    a2.text(.2, .6, 'El 80 % de acuerdo se queda en κ = 0,60\n(«moderado» a «sustancial», según el criterio)', fontsize=7.8, color=A)
    fig.text(.02, .01, 'Datos inventados para el ejemplo.', fontsize=7.2, color=MUTE)
    save(fig, 'acuerdo-kappa.png')

# U15 · Tourangeau
if want('tourangeau'):
    fig, ax = canvas(9.0, 2.9, 18, 5.6)
    st = [('Comprensión', 'qué me preguntan', 'ambigüedad del ítem', P), ('Recuperación', 'buscar en la memoria', 'olvido; efecto\ntelescopio', V),
          ('Juicio', 'estimar e integrar', 'anclaje; heurísticos\nde frecuencia', G), ('Respuesta', 'ajustar al formato\ny editar', 'deseabilidad;\naquiescencia', A)]
    for i, (t, d, e, c) in enumerate(st):
        x = 2.2 + i * 4.5
        box(ax, x, 4.1, 3.5, 1.2, t, c, 10)
        ax.text(x, 3.25, d, ha='center', va='top', fontsize=8.2, color=INK)
        ax.text(x, 1.75, e, ha='center', va='top', fontsize=8.0, color=A, style='italic')
        if i < 3: arr(ax, (x + 1.8, 4.1), (x + 2.7, 4.1))
    ax.text(.1, 2.0, 'Error\ntípico', fontsize=7.8, color=A, weight='bold', va='center')
    ax.text(.1, .2, 'Tourangeau, Rips y Rasinski (2000)', fontsize=7.2, color=MUTE)
    save(fig, 'tourangeau.png')

# U15 · Paulhus
if want('paulhus'):
    fig, ax = plt.subplots(figsize=(5.6, 4.2)); ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.set_xlabel('Autoengaño (visión positiva sincera) →'); ax.set_ylabel('Manejo de la impresión (distorsión deliberada) →'); ax.set_xticks([]); ax.set_yticks([]); clean(ax)
    for x, y, t, c in [(7.8, 2.6, 'SDE\n(BIDR)', P), (2.6, 7.8, 'IM\n(BIDR)', A), (3.6, 6.6, 'L\n(MMPI)', V)]:
        ax.plot([x], [y], 'o', ms=13, color=c, alpha=.85); ax.text(x + .5, y, t, va='center', fontsize=8.6, color=c, weight='bold')
    note(ax, 'Ubicación orientativa a partir de Paulhus (1984)', -.16)
    save(fig, 'paulhus.png')

# U16 · autorregistro ABC
if want('autorregistro-abc'):
    fig, ax = canvas(8.0, 3.2, 16, 6.4)
    rows = [['Día y hora', 'A · Situación', 'B · Conducta o pensamiento', 'C · Consecuencia', 'Malestar 0–10'],
            ['Lunes, 9:10', 'Reunión de equipo', 'No intervengo; «van a pensar\nque no sé»', 'Alivio; después, enfado\nconmigo', '7'],
            ['Martes, 14:30', 'Comida con compañeros', 'Me excuso y como sola', 'Tranquilidad; me siento aislada', '5'],
            ['Jueves, 18:00', 'Llamada a un cliente', 'La aplazo al día siguiente', 'Alivio; tarea pendiente', '6']]
    table(ax, .1, 6.2, [2.2, 3.0, 4.1, 4.0, 2.5], 1.45, rows, head_c=G, fs=7.9)
    ax.text(.1, .15, 'Ejemplo de hoja; datos inventados.', fontsize=7.2, color=MUTE)
    save(fig, 'autorregistro-abc.png')

# U16 · niveles de Ericsson y Simon
if want('ericsson-niveles'):
    fig, ax = canvas(7.0, 3.8, 14, 7.6)
    lv = [('Nivel 1 · Verbalizar', 'decir lo que ya está en\nforma verbal', G), ('Nivel 2 · Recodificar', 'poner en palabras contenidos\nno verbales (imágenes)', G), ('Nivel 3 · Explicar', 'justificar o describir\nel propio proceso', A)]
    for k, (t, d, c) in enumerate(lv):
        x, y = .4 + k * 3.0, .9 + k * 1.9
        ax.add_patch(Rectangle((x, y), 4.2, 1.7, fc=c, alpha=.85)); ax.text(x + .2, y + 1.15, t, fontsize=8.8, color='white', weight='bold')
        ax.text(x + .2, y + .5, d, fontsize=7.3, color='white', va='center')
        ax.add_patch(Circle((x + 4.65, y + .85), .32, fc=c, ec=INK, lw=.8))
    ax.text(12.6, 2.3, 'r = –0,03', ha='center', fontsize=12, color=G, weight='bold')
    ax.text(12.6, 1.7, 'niveles 1–2: sin efecto\nsobre el rendimiento', ha='center', va='top', fontsize=7.6, color=INK)
    ax.text(12.6, 6.4, 'altera el\nrendimiento', ha='center', fontsize=8, color=A, weight='bold')
    ax.text(.4, .2, 'Ericsson y Simon (1980, 1993); metaanálisis de Fox, Ericsson y Best (2011)', fontsize=7.2, color=MUTE)
    save(fig, 'ericsson-niveles.png')
