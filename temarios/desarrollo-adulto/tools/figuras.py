"""Figuras propias del temario de Psicología del Desarrollo. Edad Adulta y Vejez. python3 tools/figuras.py → img/*"""
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
#     box(ax, 3, 2.5, 3, 1, 'Concepto A', P); box(ax, 9, 2.5, 3, 1, 'Concepto B', G); arr(ax, (4.6, 2.5), (7.4, 2.5))
#     save(fig, 'nombre.png')
# Si un gráfico es un esquema y no datos reales, añade note(ax).
if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    x = np.linspace(20, 90, 200)

    if want('ganancias-perdidas'):
        fig, ax = plt.subplots(figsize=(6.4, 3.4))
        g = 1 / (1 + np.exp((x - 68) / 9)); p = 1 - g
        ax.plot(x, g * 100, c=G, lw=2.6, label='Ganancias'); ax.plot(x, p * 100, c=A, lw=2.6, label='Pérdidas')
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Proporción relativa (%)'); ax.set_ylim(0, 100); ax.legend(frameon=False, loc='center left'); clean(ax)
        ax.annotate('En la vejez las pérdidas\nsuperan a las ganancias', (78, 75), (50, 85), fontsize=8.5, color=INK, arrowprops=dict(arrowstyle='->', color=MUTE))
        note(ax); save(fig, 'ganancias-perdidas.png')

    if want('influencias-baltes'):
        fig, ax = plt.subplots(figsize=(6.6, 3.6)); t = np.linspace(0, 90, 200)
        edad = 0.75 * np.exp(-t / 14) + 0.55 / (1 + np.exp(-(t - 72) / 6)) + 0.12
        hist = 0.15 + 0.6 * np.exp(-((t - 20) / 11) ** 2)
        nonn = 0.08 + 0.55 * t / 90
        ax.plot(t, edad, c=P, lw=2.4, label='Normativas por edad'); ax.plot(t, hist, c=Y, lw=2.4, label='Normativas por historia'); ax.plot(t, nonn, c=V, lw=2.4, label='No normativas')
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Peso relativo'); ax.set_yticks([]); ax.legend(frameon=False, fontsize=8.5, loc='upper center', ncol=3, bbox_to_anchor=(.5, 1.12)); clean(ax)
        note(ax); save(fig, 'influencias-baltes.png')

    if want('disenos'):
        fig, ax = canvas(9, 4.2, 14, 7)
        anos = ['1980', '1990', '2000', '2010']; coh = ['1940', '1950', '1960', '1970']
        ax.text(7.5, 6.6, 'Año de medida', ha='center', color=INK, weight='bold'); ax.text(.6, 3.2, 'Cohorte\n(año de\nnacimiento)', ha='center', color=INK, weight='bold', fontsize=9)
        for j, a in enumerate(anos): ax.text(3.6 + j * 2.6, 6.0, a, ha='center', color=INK)
        for i, c in enumerate(coh):
            ax.text(2.1, 5.0 - i * 1.15, c, ha='center', va='center', color=INK)
            for j, a in enumerate(anos):
                age = int(a) - int(c)
                col = SOFT
                if j == 2: col = '#D6E4EE'
                if i == 1: col = '#DCEFE2'
                if i == 1 and j == 2: col = '#C9D9C0'
                box(ax, 3.6 + j * 2.6, 5.0 - i * 1.15, 2.3, .9, f'{age} años', col, fs=9, tc=INK, bold=False)
        ax.add_patch(Rectangle((2.45 + 2 * 2.6, .5), 2.3, 5.0, fill=False, ec=P, lw=2.2))
        ax.add_patch(Rectangle((2.4, 3.38), 10.4, .95, fill=False, ec=G, lw=2.2))
        ax.text(3.6 + 2 * 2.6, .15, 'Transversal: confunde edad y cohorte', ha='center', color=P, fontsize=8.5, weight='bold')
        ax.text(13.0, 3.85, 'Longitudinal:\nconfunde edad y\nmomento de medida', ha='left', va='center', color=G, fontsize=8.2, weight='bold')
        ax.text(7.5, -.35, 'Secuencial (Schaie): varias cohortes seguidas en varias medidas → reduce las confusiones', ha='center', color=A, fontsize=8.6, weight='bold')
        ax.set_xlim(0, 15.5); ax.set_ylim(-.6, 7); save(fig, 'disenos.png')

    if want('etapas'):
        fig, ax = canvas(8, 2.6, 100, 10)
        seg = [(18, 30, 'Adultez\nemergente\n18-29', Y), (30, 40, 'Adultez\ntemprana\n≈ 30-40', G), (40, 65, 'Adultez media\n40-65', P),
               (65, 75, 'Viejos-\njóvenes\n65-75', T), (75, 85, 'Viejos-\nviejos\n75-85', V), (85, 100, 'Cuarta edad\n85+', A)]
        for a, b, t, c in seg:
            ax.add_patch(Rectangle((a, 3), b - a, 4, fc=c, ec='white', lw=2)); ax.text((a + b) / 2, 5, t, ha='center', va='center', color='white', fontsize=7.6, weight='bold')
        for v in (18, 30, 40, 65, 75, 85, 100): ax.text(v, 2.2, str(v), ha='center', fontsize=8, color=MUTE)
        ax.text(100.5, 5, 'Centenarios\n100+', va='center', fontsize=8, color=A, weight='bold')
        ax.set_xlim(17, 110); ax.text(18, .4, 'Edades aproximadas: los límites varían según autores y cohortes', fontsize=7.4, color=MUTE); save(fig, 'etapas.png')

    if want('erikson-adulto'):
        fig, ax = canvas(9, 3.4, 12, 5)
        hdr = ['Etapa', 'Crisis psicosocial', 'Virtud si se resuelve', 'Riesgo si no se resuelve']; xs = [1.3, 4.0, 7.2, 10.2]; ws = [2.4, 3.0, 3.0, 3.0]
        for x0, w, h in zip(xs, ws, hdr): box(ax, x0, 4.4, w, .7, h, P, fs=9)
        rows = [('Adultez temprana', 'Intimidad vs. aislamiento', 'Amor', 'Aislamiento, relaciones\nsuperficiales'),
                ('Adultez media', 'Generatividad vs.\nestancamiento', 'Cuidado', 'Estancamiento,\nensimismamiento'),
                ('Vejez', 'Integridad vs.\ndesesperación', 'Sabiduría', 'Desesperación, miedo\na la muerte')]
        cols = [G, Y, V]
        for i, r in enumerate(rows):
            y = 3.3 - i * 1.1
            for j, (x0, w, t) in enumerate(zip(xs, ws, r)):
                box(ax, x0, y, w, .95, t, cols[i] if j == 0 else SOFT, fs=8.6, tc='white' if j == 0 else INK, bold=j < 2)
        ax.text(0, .05, 'Erikson (1950; 1968). Las edades son orientativas: Erikson no fijó edades exactas.', fontsize=7.6, color=MUTE); save(fig, 'erikson-adulto.png')

    if want('levinson'):
        fig, ax = canvas(10.5, 3.4, 70, 10)
        est = [(22, 28, 'Entrada en\nla adultez', G), (33, 40, 'Culminación\nad. temprana', G), (45, 50, 'Entrada\nad. media', P), (55, 60, 'Culminación\nad. media', P)]
        tr = [(17, 22, 'T. a la ad.\ntemprana'), (28, 33, 'T. de\nlos 30'), (40, 45, 'T. de la\nmitad\nde la vida'), (50, 55, 'T. de\nlos 50'), (60, 65, 'T. a la ad.\ntardía')]
        for a, b, t, c in est: ax.add_patch(Rectangle((a, 5.2), b - a, 2.6, fc=c, ec='white')); ax.text((a + b) / 2, 6.5, t, ha='center', va='center', color='white', fontsize=6.6, weight='bold')
        for a, b, t in tr: ax.add_patch(Rectangle((a, 2.2), b - a, 2.6, fc=Y if a != 40 else A, ec='white')); ax.text((a + b) / 2, 3.5, t, ha='center', va='center', color='white', fontsize=6.4, weight='bold')
        for v in (17, 22, 28, 33, 40, 45, 50, 55, 60, 65): ax.text(v, 1.4, str(v), ha='center', fontsize=7.5, color=MUTE)
        ax.text(16.5, 6.5, 'Estructuras\nestables', ha='right', va='center', fontsize=8, color=INK); ax.text(16.5, 3.5, 'Transiciones', ha='right', va='center', fontsize=8, color=INK)
        ax.set_xlim(5, 66); ax.text(5, .2, 'T. = transición. Ad. = adultez. Levinson (1978): entrevistas a 40 varones de 35-45 años. Edades aproximadas.', fontsize=7.4, color=MUTE); save(fig, 'levinson.png')

    if want('kegan'):
        fig, ax = canvas(6.6, 4, 10, 7)
        st = [('3.er orden · mente socializada', 'Sujeto: las relaciones y expectativas ajenas\nObjeto: los propios deseos e impulsos', Y),
              ('4.º orden · mente autoautoral', 'Sujeto: el propio sistema de valores\nObjeto: las relaciones y expectativas ajenas', G),
              ('5.º orden · mente autotransformadora', 'Sujeto: la relación entre sistemas\nObjeto: el propio sistema de valores', P)]
        for i, (t, d, c) in enumerate(st):
            x0 = 1 + i * 1.3; y0 = .7 + i * 2.1
            ax.add_patch(FancyBboxPatch((x0, y0), 6.2, 1.7, boxstyle='round,pad=0.02,rounding_size=0.1', fc=c, ec='none'))
            ax.text(x0 + .2, y0 + 1.3, t, color='white', weight='bold', fontsize=9); ax.text(x0 + .2, y0 + .55, d, color='white', fontsize=7.8, va='center')
        arr(ax, (.5, .8), (.5, 6.4), c=MUTE); ax.text(.3, 3.6, 'Complejidad', rotation=90, va='center', ha='center', fontsize=8, color=MUTE)
        ax.text(0, -.2, 'Kegan (1982). Lo que era «sujeto» pasa a ser «objeto» de reflexión. Esquema ilustrativo.', fontsize=7.2, color=MUTE); save(fig, 'kegan.png')

    if want('posformal'):
        fig, ax = canvas(7.2, 3.6, 12, 6)
        box(ax, 2.2, 3, 3.4, 2.2, 'Pensamiento\nformal\n\nUna respuesta\ncorrecta, lógica\nabstracta', MUTE, fs=8.8)
        rs = [('Relativismo', 'el conocimiento depende\ndel contexto', Y), ('Aceptar la contradicción', 'conviven puntos de vista\nincompatibles', G),
              ('Síntesis dialéctica', 'integrar posturas\nopuestas', P), ('Cognición + emoción', 'razonar sin dejar fuera\nlo afectivo', V)]
        for i, (t, d, c) in enumerate(rs):
            y = 5.2 - i * 1.4; box(ax, 8.6, y, 5.4, 1.15, f'{t}\n', c, fs=8.8); ax.text(8.6, y - .22, d, ha='center', va='center', color='white', fontsize=7.4)
            arr(ax, (4.0, 3), (5.85, y), c=MUTE)
        note(ax, 'Rasgos del pensamiento posformal (Perry, Labouvie-Vief, Sinnott, Commons). Esquema ilustrativo.', -.06); save(fig, 'posformal.png')

    if want('schlossberg'):
        fig, ax = canvas(6.6, 4.4, 10, 7.5)
        box(ax, 5, 4, 2.6, 1.2, 'TRANSICIÓN', INK, fs=10)
        q = [(2.3, 6.0, 'Situación', 'qué ocurre, cuándo,\nquién controla', P), (7.7, 6.0, 'Self (uno mismo)', 'personalidad, salud,\nrecursos personales', G),
             (2.3, 2.0, 'Apoyo', 'familia, amistades,\ninstituciones', Y), (7.7, 2.0, 'Estrategias', 'cambiar la situación,\nsu significado o el estrés', V)]
        for x0, y0, t, d, c in q:
            box(ax, x0, y0, 3.6, 1.5, f'{t}\n\n', c, fs=9.5); ax.text(x0, y0 - .25, d, ha='center', va='center', color='white', fontsize=7.6)
            arr(ax, (x0 + (1.3 if x0 < 5 else -1.3), y0 + (-.75 if y0 > 4 else .75)), (5 + (-.9 if x0 < 5 else .9), 4 + (.5 if y0 > 4 else -.5)), c=MUTE)
        ax.text(5, .4, 'Tipos: anticipadas · no anticipadas · no-sucesos (lo esperado que no llega)', ha='center', fontsize=8.4, color=A, weight='bold')
        save(fig, 'schlossberg.png')

    if want('reloj-social'):
        fig, ax = canvas(7.6, 2.8, 100, 10)
        ax.plot([15, 95], [5, 5], c=MUTE, lw=2)
        for v in range(20, 100, 10): ax.plot([v, v], [4.6, 5.4], c=MUTE); ax.text(v, 3.6, str(v), ha='center', fontsize=8, color=MUTE)
        for xx, t, yy in [(30, 'Emanciparse', 6.4), (35, 'Primer hijo', 7.6), (66, 'Jubilarse', 6.4), (78, 'Enviudar', 6.4)]:
            ax.plot(xx, 5, 'o', c=G, ms=9); ax.text(xx, yy, t, ha='center', fontsize=8, color=G, weight='bold')
        ax.plot(35, 5, 'o', c=G, ms=9); ax.plot(36, 2.2, 'X', c=A, ms=11); ax.text(39, 1.6, 'Enviudar a los 35: suceso «fuera de tiempo», más estresante', fontsize=8.2, color=A, weight='bold')
        ax.text(15, 9.6, '●  a tiempo (on-time)', color=G, fontsize=8.5); ax.text(45, 9.6, '✕  fuera de tiempo (off-time)', color=A, fontsize=8.5)
        ax.text(15, -.4, 'Edades orientativas de una cohorte española actual. Esquema ilustrativo.', fontsize=7.2, color=MUTE); save(fig, 'reloj-social.png')

    if want('ryff'):
        fig, ax = plt.subplots(figsize=(5, 4.2)); ax.axis('off'); ax.set_aspect('equal')
        lab = ['Autoaceptación', 'Relaciones\npositivas', 'Autonomía', 'Dominio del\nentorno', 'Propósito\nen la vida', 'Crecimiento\npersonal']
        cs = [P, G, Y, V, A, T]; ang = np.pi / 2 - np.arange(6) * np.pi / 3
        ax.add_patch(plt.Polygon(np.c_[np.cos(ang), np.sin(ang)], fc=SOFT, ec=MUTE))
        for a, l, c in zip(ang, lab, cs):
            ax.add_patch(Circle((np.cos(a), np.sin(a)), .13, fc=c)); ax.text(1.62 * np.cos(a), 1.42 * np.sin(a), l, ha='center', va='center', fontsize=8.6, color=c, weight='bold')
        ax.text(0, 0, 'Bienestar\npsicológico\n(Ryff, 1989)', ha='center', va='center', fontsize=9, color=INK, weight='bold'); ax.set_xlim(-2.4, 2.4); ax.set_ylim(-1.75, 1.75)
        save(fig, 'ryff.png')

    if want('emancipacion'):
        fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.2), gridspec_kw={'width_ratios': [1, 1]})
        a1.bar(['2.º sem.\n2024', '2.º sem.\n2025'], [15.2, 14.5], color=[P, A], width=.55)
        for i, v in enumerate([15.2, 14.5]): a1.text(i, v + .3, pct(v), ha='center', fontsize=9, color=INK)
        a1.set_ylim(0, 18); a1.set_title('Tasa de emancipación (16-29 años)'); clean(a1)
        a2.barh(['UE', 'España'], [26.3, 30.2], color=[MUTE, A], height=.5)
        for i, v in enumerate([26.3, 30.2]): a2.text(v + .3, i, f'{v:.1f}'.replace('.', ',') + ' años', va='center', fontsize=9)
        a2.set_xlim(0, 36); a2.set_title('Edad media de emancipación'); clean(a2)
        fig.text(.01, .01, 'Fuente: Observatorio de Emancipación del Consejo de la Juventud de España (CJE).', fontsize=7.4, color=MUTE); save(fig, 'emancipacion.png')

    if want('sarcopenia'):
        fig, ax = canvas(7.4, 3, 13, 5)
        st = [(1.7, 'Baja fuerza\n(prensión,\nlevantarse de la silla)', Y, 'Sarcopenia\nPROBABLE'), (6.5, '+ Baja cantidad o\ncalidad muscular', P, 'Sarcopenia\nCONFIRMADA'), (11.3, '+ Bajo rendimiento\nfísico (marcha lenta)', A, 'Sarcopenia\nGRAVE')]
        for x0, t, c, r in st:
            box(ax, x0, 3.4, 3.2, 1.5, t, c, fs=8.6); box(ax, x0, 1.2, 2.6, 1.0, r, SOFT, fs=8.6, tc=c); arr(ax, (x0, 2.6), (x0, 1.75), c=MUTE)
        arr(ax, (3.35, 3.4), (4.85, 3.4)); arr(ax, (8.15, 3.4), (9.65, 3.4))
        ax.text(0, 4.6, 'EWGSOP2 (Cruz-Jentoft et al., 2019): la fuerza es el criterio principal', fontsize=8.6, color=INK, weight='bold'); save(fig, 'sarcopenia.png')

    if want('gf-gc'):
        fig, ax = plt.subplots(figsize=(6.4, 3.4))
        gf = 100 - 0.012 * (x - 20) ** 2 - .1 * (x - 20); gc = 70 + 30 * (1 - np.exp(-(x - 20) / 14)) - 0.012 * np.clip(x - 70, 0, None) ** 2 * 1.4
        ax.plot(x, gf, c=A, lw=2.6, label='Inteligencia fluida (Gf)'); ax.plot(x, gc, c=P, lw=2.6, label='Inteligencia cristalizada (Gc)')
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Rendimiento relativo'); ax.set_yticks([]); ax.legend(frameon=False, fontsize=8.6); clean(ax)
        note(ax, 'Esquema ilustrativo, no datos (según Horn y Cattell, 1967)'); save(fig, 'gf-gc.png')

    if want('seattle'):
        fig, ax = plt.subplots(figsize=(6.4, 3.4))
        tr = 100 - .55 * (x - 20); lo = np.where(x < 60, 100 + .05 * (x - 20), 102 - .022 * (x - 60) ** 2)
        ax.plot(x, tr, c=Y, lw=2.6, label='Comparación transversal (grupos de edad distintos)'); ax.plot(x, lo, c=P, lw=2.6, label='Seguimiento longitudinal (mismas personas)')
        ax.axvline(60, c=MUTE, ls=':', lw=1); ax.text(61, 70, '≈ 60 años', fontsize=8, color=MUTE)
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Capacidades mentales primarias'); ax.set_yticks([]); ax.legend(frameon=False, fontsize=8.2, loc='lower left'); clean(ax)
        note(ax, 'Esquema, no datos: forma típica de las curvas del Estudio Longitudinal de Seattle (Schaie)'); save(fig, 'seattle.png')

    if want('stac'):
        fig, ax = canvas(8, 3.6, 14, 6)
        box(ax, 2, 4.4, 3.2, 1.3, 'Cambios neurales\n(atrofia, sustancia\nblanca, dopamina)', A, fs=8.4)
        box(ax, 2, 1.6, 3.2, 1.3, 'Desafíos\nfuncionales', Y, fs=8.6)
        box(ax, 7, 3, 3.4, 1.6, 'Andamiaje\ncompensatorio\n(reclutar más regiones)', P, fs=8.6)
        box(ax, 12, 3, 3, 1.4, 'Rendimiento\ncognitivo', G, fs=9)
        arr(ax, (3.6, 4.2), (5.3, 3.3)); arr(ax, (3.6, 1.8), (5.3, 2.7)); arr(ax, (8.7, 3), (10.5, 3))
        box(ax, 7, .6, 5.6, .8, 'Enriquecimiento (+) · Agotamiento (−)', SOFT, fs=8.4, tc=INK); arr(ax, (7, 1.0), (7, 2.2), c=MUTE)
        ax.text(0, 5.8, 'Modelo STAC (Park y Reuter-Lorenz, 2009)', fontsize=9, weight='bold', color=INK); note(ax, y=-.08); save(fig, 'stac.png')

    if want('erickson2011'):
        fig, ax = plt.subplots(figsize=(6, 3.4))
        lbl = ['Hipocampo\nizquierdo', 'Hipocampo\nderecho']; ae = [2.12, 1.97]; es = [-1.40, -1.43]; i = np.arange(2)
        ax.bar(i - .18, ae, .34, color=G, label='Ejercicio aeróbico'); ax.bar(i + .18, es, .34, color=A, label='Estiramientos (control)')
        for k in range(2):
            ax.text(k - .18, ae[k] + .1, f'+{ae[k]:.2f} %'.replace('.', ','), ha='center', fontsize=8.6); ax.text(k + .18, es[k] - .3, f'{es[k]:.2f} %'.replace('.', ','), ha='center', fontsize=8.6)
        ax.axhline(0, c=MUTE, lw=.8); ax.set_xticks(i, lbl); ax.set_ylabel('Cambio de volumen en 1 año'); ax.set_ylim(-2.2, 3.4); ax.legend(frameon=False, fontsize=8.4, loc='upper center', ncol=2); clean(ax)
        fig.text(.01, .01, 'Datos: Erickson et al. (2011), ensayo aleatorizado, N = 120.', fontsize=7.4, color=MUTE); save(fig, 'erickson2011.png')

    if want('active'):
        fig, ax = plt.subplots(figsize=(6, 3.1))
        v = [0.48, 0.38, 0.36]; ax.barh(['Velocidad', 'Razonamiento', 'Memoria'][::-1], v, color=[P, G, Y], height=.5)
        for k, vv in enumerate(v): ax.text(vv + .01, k, f'{vv:.2f}'.replace('.', ','), va='center', fontsize=9)
        ax.set_yticks(range(3), ['Memoria', 'Razonamiento', 'Velocidad']); ax.set_xlim(0, .6); ax.set_xlabel('Tamaño del efecto: menor dificultad en las AIVD a 10 años'); clean(ax)
        fig.text(.01, .01, 'Datos: Rebok et al. (2014), ensayo ACTIVE, N = 2.832.', fontsize=7.4, color=MUTE); save(fig, 'active.png')

    if want('lancet'):
        fig, ax = canvas(9.6, 4.2, 15, 7)
        cols = [(2.2, 'Etapa temprana', ['Menos educación'], Y), (7.5, 'Mediana edad', ['Pérdida auditiva', 'LDL alto (7 %)', 'Depresión', 'Traumatismo craneal', 'Inactividad física', 'Diabetes', 'Tabaco', 'Hipertensión', 'Obesidad', 'Alcohol excesivo'], P),
                (12.8, 'Vejez', ['Aislamiento social', 'Contaminación del aire', 'Pérdida de visión (2 %)'], V)]
        for x0, t, items, c in cols:
            box(ax, x0, 6.3, 4.4, .7, t, c, fs=9.4)
            if len(items) > 4:
                for k, it in enumerate(items): box(ax, x0 + (-1.15 if k < 5 else 1.15), 5.3 - (k % 5) * .85, 2.2, .7, it, SOFT, fs=7.6, tc=INK, bold=False)
            else:
                for k, it in enumerate(items): box(ax, x0, 5.3 - k * .85, 3.6, .7, it, SOFT, fs=7.8, tc=INK, bold=False)
        box(ax, 7.5, .5, 9, .75, '14 factores · fracción atribuible conjunta: 45,3 % de las demencias', A, fs=9.2)
        ax.text(0, -.25, 'Datos: Livingston et al. (2024), Lancet Commission. LDL y visión, nuevos en 2024.', fontsize=7.4, color=MUTE); ax.set_ylim(-.4, 7); save(fig, 'lancet.png')

    if want('curva-u'):
        fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.4, 3.2), sharey=True)
        u = 5 + 0.0028 * (x - 50) ** 2 * 1.2; a1.plot(x, u, c=P, lw=2.6); a1.set_title('Curva en U promedio'); a1.set_xlabel('Edad'); a1.set_yticks([]); a1.set_ylabel('Bienestar'); clean(a1)
        rng = np.random.default_rng(3)
        for k in range(9):
            s = rng.normal(0, .02); b = rng.normal(6, .7); a2.plot(x, b + s * (x - 20) + .4 * np.sin((x - 20) / rng.uniform(8, 20)), c=[P, G, Y, A, V, T][k % 6], lw=1.5, alpha=.85)
        a2.set_title('Trayectorias individuales'); a2.set_xlabel('Edad'); clean(a2)
        fig.text(.01, .01, 'Esquema ilustrativo, no datos (inspirado en la crítica de Galambos et al., 2020)', fontsize=7.4, color=MUTE); save(fig, 'curva-u.png')

    if want('personalidad'):
        fig, ax = plt.subplots(figsize=(6.6, 3.9)); xx = np.linspace(20, 80, 200)
        ax.plot(xx, 1 / (1 + np.exp(-(xx - 32) / 7)), c=P, lw=2.4, label='Responsabilidad')
        ax.plot(xx, .9 / (1 + np.exp(-(xx - 30) / 8)) + .02, c=G, lw=2.4, label='Estabilidad emocional')
        ax.plot(xx, .8 / (1 + np.exp(-(xx - 28) / 6)) + .05, c=Y, lw=2.4, label='Dominancia social')
        ax.plot(xx, .7 - .5 / (1 + np.exp(-(xx - 66) / 5)), c=A, lw=2.4, label='Apertura')
        ax.axvspan(20, 40, color=SOFT); ax.text(30, 1.05, 'Mayor cambio: 20-40', ha='center', fontsize=8, color=INK)
        ax.set_xlabel('Edad (años)'); ax.set_ylabel('Nivel medio'); ax.set_yticks([]); ax.set_ylim(0, 1.15); ax.legend(frameon=False, fontsize=7.8, loc='upper center', bbox_to_anchor=(.5, -.2), ncol=4); clean(ax)
        note(ax, y=-.42, t='Esquema ilustrativo, no datos (según Roberts, Walton y Viechtbauer, 2006)'); save(fig, 'personalidad.png')

    if want('forest-relaciones'):
        fig, ax = plt.subplots(figsize=(6.4, 2.9))
        d = [('Relaciones fuertes vs. débiles (2010)', 1.50, 1.42, 1.59), ('Aislamiento social (2015)', 1.29, None, None), ('Soledad (2015)', 1.26, None, None), ('Vivir solo (2015)', 1.32, None, None)]
        for k, (t, o, lo, hi) in enumerate(d[::-1]):
            if lo: ax.plot([lo, hi], [k, k], c=INK, lw=1.4)
            ax.plot(o, k, 's', c=A if k == 3 else P, ms=9); ax.text(o + .03, k + .18, f'OR {o:.2f}'.replace('.', ','), fontsize=8.4)
        ax.axvline(1, c=MUTE, ls='--'); ax.set_yticks(range(4), [t for t, *_ in d[::-1]]); ax.set_xlim(.9, 1.75); ax.set_xlabel('Odds ratio (1 = sin efecto)'); clean(ax)
        fig.text(.01, .01, '2010: mayor supervivencia con relaciones fuertes (IC 95 % 1,42-1,59). 2015: mayor mortalidad. Holt-Lunstad et al.', fontsize=7.2, color=MUTE); save(fig, 'forest-relaciones.png')

    if want('convoy'):
        fig, ax = plt.subplots(figsize=(4.2, 4.2)); ax.axis('off'); ax.set_aspect('equal')
        for r, c, t in [(3, '#EEF3F7', 'Periféricos: compañeros,\nvecinos, profesionales'), (2.1, '#D6E4EE', 'Cercanos: amigos,\nfamilia extensa'), (1.2, '#A9C3D6', 'Íntimos: pareja,\nhijos, mejor amigo')]:
            ax.add_patch(Circle((0, 0), r, fc=c, ec=P, lw=1.2)); ax.text(0, r - .45, t, ha='center', va='center', fontsize=7.6, color=INK)
        ax.add_patch(Circle((0, -.25), .38, fc=A)); ax.text(0, -.25, 'Yo', ha='center', va='center', color='white', weight='bold')
        ax.set_xlim(-3.2, 3.2); ax.set_ylim(-3.2, 3.2); ax.text(-3.1, -3.15, 'Convoy social (Kahn y Antonucci, 1980). Esquema.', fontsize=7.2, color=MUTE); save(fig, 'convoy.png')

    if want('fragilidad'):
        fig, ax = canvas(8, 3.4, 14, 6)
        cr = ['Pérdida de peso\nno intencionada', 'Agotamiento', 'Debilidad\nde prensión', 'Marcha\nlenta', 'Baja actividad\nfísica']
        for k, c in enumerate(cr): box(ax, 1.5 + k * 2.75, 4.5, 2.5, 1.3, c, [P, G, Y, V, T][k], fs=8.4)
        for k, (t, c) in enumerate([('0 criterios\nRobusto', G), ('1-2 criterios\nPrefrágil', Y), ('≥ 3 criterios\nFrágil', A)]): box(ax, 3 + k * 4, 1.6, 3.4, 1.2, t, c, fs=9.2)
        ax.text(0, 5.7, 'Fenotipo de fragilidad (Fried et al., 2001)', fontsize=9, weight='bold', color=INK); save(fig, 'fragilidad.png')

    if want('teorias-exito'):
        fig, ax = canvas(9.6, 4.8, 12, 8)
        rows = [('Actividad', 'Havighurst (1961)', 'Mantener roles y actividad da satisfacción', 'Normativa: no todos lo desean'),
                ('Desvinculación', 'Cumming y Henry (1961)', 'Retirada mutua, natural y universal', 'Universalidad refutada'),
                ('Continuidad', 'Atchley (1989)', 'Preservar la continuidad interna y externa', 'Difícil de falsar'),
                ('Envejecimiento con éxito', 'Rowe y Kahn (1987; 1997)', 'Poca enfermedad, buen funcionamiento, compromiso', 'Excluyente e individualista'),
                ('SOC', 'Baltes y Baltes (1990)', 'Selección, optimización y compensación', 'Metamodelo muy general'),
                ('Desfase estructural', 'Riley y Riley (1994)', 'Las instituciones van por detrás de las capacidades', 'Enfoque macro')]
        xs = [1.3, 3.75, 7.0, 10.4]; ws = [2.4, 2.4, 4.0, 2.7]
        for x0, w, h in zip(xs, ws, ['Teoría', 'Autores', 'Tesis central', 'Crítica principal']): box(ax, x0, 7.4, w, .7, h, P, fs=9)
        for i, r in enumerate(rows):
            y = 6.4 - i * 1.0
            for j, (x0, w, t) in enumerate(zip(xs, ws, r)): box(ax, x0, y, w, .85, t, SOFT if j else [Y, MUTE, G, V, P, T][i], fs=7.8, tc=INK if j else 'white', bold=j == 0)
        save(fig, 'teorias-exito.png')

    if want('soc'):
        fig, ax = canvas(7.6, 3.4, 13, 6)
        it = [('Selección', 'Tocar menos obras', 'Elegir metas: menos\nfrentes, más importantes', P), ('Optimización', 'Ensayar más cada una', 'Invertir recursos en\nlas metas elegidas', G), ('Compensación', 'Tocar más despacio antes\nde los pasajes rápidos', 'Usar medios alternativos\nante las pérdidas', A)]
        for k, (t, ej, d, c) in enumerate(it):
            x0 = 2.2 + k * 4.3; box(ax, x0, 4.6, 3.6, .9, t, c, fs=10); box(ax, x0, 3.0, 3.6, 1.3, d, SOFT, fs=8.2, tc=INK, bold=False); box(ax, x0, 1.2, 3.6, 1.2, '«' + ej + '»', 'white', fs=8.2, tc=c, ec=c)
        ax.text(0, 5.65, 'Modelo SOC (Baltes y Baltes, 1990) y el ejemplo del pianista Arthur Rubinstein', fontsize=8.8, weight='bold', color=INK); save(fig, 'soc.png')

    if want('sst'):
        fig, ax = plt.subplots(figsize=(6.4, 3.4)); h = np.linspace(0, 1, 100)
        ax.plot(h, .2 + .7 * h, c=P, lw=2.6, label='Metas de conocimiento (información, novedad)'); ax.plot(h, .9 - .6 * h, c=A, lw=2.6, label='Metas emocionales (sentido, vínculos cercanos)')
        ax.set_xticks([0, 1], ['Horizonte limitado\n(vejez, enfermedad, despedida)', 'Horizonte amplio\n(juventud)']); ax.set_yticks([]); ax.set_ylabel('Prioridad'); ax.legend(frameon=False, fontsize=8.2, loc='upper center'); ax.set_ylim(0, 1.25); clean(ax)
        note(ax, 'Esquema ilustrativo (Carstensen). El factor es el tiempo percibido, no la edad.', -.3); save(fig, 'sst.png')

    if want('bonanno'):
        fig, ax = plt.subplots(figsize=(6.6, 4.0)); t = np.linspace(0, 24, 200)
        tr = [('Resiliencia', 65.7, 1.2 + .3 * np.exp(-t / 2), G), ('Recuperación', 20.8, 1.3 + 4 * np.exp(-t / 7), P), ('Cronicidad', 10.6, 5 + .2 * np.sin(t / 4), A), ('Aparición demorada', 8.9, 1.5 + 3.4 / (1 + np.exp(-(t - 10) / 2.5)), V)]
        for n, p, y, c in tr: ax.plot(t, y, c=c, lw=2.6, label=f'{n} ({pct(p)})')
        ax.set_xlabel('Tiempo desde la pérdida'); ax.set_ylabel('Síntomas'); ax.set_xticks([]); ax.set_yticks([]); ax.legend(frameon=False, fontsize=8.4, loc='upper center', bbox_to_anchor=(.5, -.08), ncol=2); clean(ax)
        fig.text(.01, .01, 'Porcentajes: Galatzer-Levy, Huang y Bonanno (2018). Formas de las curvas esquemáticas.', fontsize=7.2, color=MUTE); save(fig, 'bonanno.png')

    if want('doble-proceso'):
        fig, ax = canvas(7.6, 3.6, 13, 6)
        box(ax, 3, 3.3, 4.4, 3.4, 'Orientación\na la PÉRDIDA\n\n· llorar, recordar\n· elaborar el duelo\n· romper el vínculo\n  o recolocarlo', A, fs=8.6)
        box(ax, 10, 3.3, 4.4, 3.4, 'Orientación a la\nRESTAURACIÓN\n\n· nuevas tareas y roles\n· distraerse del dolor\n· nueva identidad', P, fs=8.6)
        arr(ax, (5.4, 4.2), (7.6, 4.2), rad=-.35, c=INK, lw=1.8); arr(ax, (7.6, 2.4), (5.4, 2.4), rad=-.35, c=INK, lw=1.8)
        ax.text(6.5, 3.3, 'Oscilación', ha='center', va='center', fontsize=9, weight='bold', color=INK)
        ax.text(6.5, .6, 'Vida cotidiana tras la pérdida', ha='center', fontsize=8.6, color=MUTE)
        ax.text(0, 5.75, 'Modelo de doble proceso (Stroebe y Schut, 1999)', fontsize=9, weight='bold', color=INK); save(fig, 'doble-proceso.png')

    if want('abvd-aivd'):
        fig, ax = canvas(8, 3.8, 14, 7)
        box(ax, 3.5, 6.2, 6, .8, 'ABVD · actividades básicas', G, fs=9.5); box(ax, 10.5, 6.2, 6, .8, 'AIVD · actividades instrumentales', P, fs=9.5)
        ab = ['Comer', 'Asearse y bañarse', 'Vestirse', 'Control de esfínteres', 'Usar el retrete', 'Trasladarse y caminar']
        ai = ['Usar el teléfono', 'Hacer la compra', 'Preparar la comida', 'Cuidar la casa', 'Lavar la ropa', 'Usar el transporte', 'Tomar la medicación', 'Manejar el dinero']
        for k, a in enumerate(ab): ax.text(1, 5.2 - k * .6, '•  ' + a, fontsize=8.6, color=INK)
        for k, a in enumerate(ai): ax.text(8, 5.4 - k * .58, '•  ' + a, fontsize=8.6, color=INK)
        ax.text(1, .7, 'Índice de Barthel (0-100) · Índice de Katz', fontsize=8.6, color=G, weight='bold'); ax.text(8, .7, 'Escala de Lawton y Brody (8 ítems)', fontsize=8.6, color=P, weight='bold')
        ax.text(0, -.2, 'Las AIVD, más complejas, suelen perderse antes que las ABVD.', fontsize=7.6, color=MUTE); ax.set_ylim(-.4, 7); save(fig, 'abvd-aivd.png')

    if want('demografia'):
        fig, ax = plt.subplots(figsize=(6.2, 3.2))
        ax.bar(['2025', '2046\n(proyección CSIC)', '2076\n(máximo INE)'], [20.7, 30, 30.9], color=[P, Y, A], width=.55)
        for k, (v, s) in enumerate([(20.7, '20,7 %'), (30, '≈ 30 %'), (30.9, '30,9 %')]): ax.text(k, v + .6, s, ha='center', fontsize=9.5, color=INK)
        ax.set_ylabel('% de población de 65 años o más'); ax.set_ylim(0, 36); clean(ax)
        fig.text(.01, .01, 'Fuentes: INE y CSIC. 2025: 10.178.625 personas de 65+ (1 de enero).', fontsize=7.4, color=MUTE); save(fig, 'demografia.png')

    if want('saad'):
        fig, ax = plt.subplots(figsize=(4.6, 3.2))
        v = [1748901, 236736, 150760]; l = ['Con prestación', 'En lista de espera', 'Derecho reconocido\nsin prestación (≈)']
        ax.barh(l[::-1], v[::-1], color=[Y, A, G], height=.55)
        for k, vv in enumerate(v[::-1]): ax.text(vv + 30000, k, f'{vv:,}'.replace(',', '.'), va='center', fontsize=8.6)
        ax.set_xlim(0, 2.3e6); ax.set_xticks([]); clean(ax); ax.spines['bottom'].set_visible(False)
        fig.text(.01, .01, 'SAAD a 30/09/2026 (IMSERSO, BOE 11/11/2026).', fontsize=7.2, color=MUTE); save(fig, 'saad.png')
