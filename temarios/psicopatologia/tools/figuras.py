"""Figuras propias del temario de Psicopatología. python3 tools/figuras.py → img/*"""
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
if want('u01_criterios_anormalidad'):
    fig, ax = canvas(7.6, 4.4, 12, 7)
    box(ax, 6, 3.5, 3.6, 1.3, 'Disfunción perjudicial\n(Wakefield, 1992)', A, 9.4)
    items = [(2.4, 5.9, 'Estadístico', P, '+ objetivo y cuantificable', '− lo infrecuente no siempre\nes patológico (CI muy alto)'),
             (9.6, 5.9, 'Social / consensual', G, '+ atiende a la adaptación', '− relativo a cada cultura\ny época'),
             (2.4, 1.1, 'Subjetivo', Y, '+ recoge el malestar', '− falla sin conciencia\nde enfermedad'),
             (9.6, 1.1, 'Biológico', V, '+ busca causas y mecanismos', '− reduccionista')]
    for x, y, t, c, p, m in items:
        box(ax, x, y + .55, 3.4, .8, t, c, 9.2, tc=INK if c == Y else 'white')
        txt(ax, x, y - .1, p, 7.8, G); txt(ax, x, y - .75, m, 7.8, A)
        arr(ax, (x + (1.2 if x < 6 else -1.2), y + (-1 if y > 3 else 1.3)), (6 + (-1.4 if x < 6 else 1.4), 3.5 + (.7 if y > 3 else -.7)), MUTE, ls='--')
    txt(ax, 6, 2.2, 'fallo de una función natural\n+ juicio de daño según valores', 7.8, MUTE, style='italic')
    save(fig, 'u01_criterios_anormalidad.png')

# U1 · línea del tiempo
if want('u01_linea_tiempo'):
    ev = [('Prehistoria', 'Trepanación'), ('s. V a. C.', 'Hipócrates:\nhumores'), ('1409', 'Hospital de los\nInocentes (Valencia)'), ('1563', 'Weyer'), ('1793', 'Pinel en\nBicêtre'),
          ('1899', 'Kraepelin,\n6.ª ed.'), ('1911', 'Bleuler:\n«esquizofrenia»'), ('1913', 'Jaspers'), ('1980', 'DSM-III'), ('2013', 'DSM-5'), ('2022', 'CIE-11 en vigor\ny DSM-5-TR'), ('2025-26', 'Futuro DSM:\npropuestas')]
    fig, ax = canvas(8.2, 3.2, 13, 5)
    ax.plot([.3, 12.7], [2.5, 2.5], color=MUTE, lw=2)
    cols = [P, G, Y, V, A, T]
    for i, (yr, d) in enumerate(ev):
        x = .75 + i * 1.04; up = i % 2 == 0; c = cols[i % 6]
        ax.plot([x], [2.5], 'o', color=c, ms=8)
        txt(ax, x, 2.15 if up else 2.85, yr, 7.8, c, weight='bold', va='top' if up else 'bottom')
        txt(ax, x, 3.2 if up else 1.8, d, 7.2, INK, va='bottom' if up else 'top')
    save(fig, 'u01_linea_tiempo.png')

# U2 · vulnerabilidad-estrés
if want('u02_vulnerabilidad_estres'):
    fig, ax = plt.subplots(figsize=(5.6, 3.7))
    x = np.linspace(.5, 10, 200); y = 9 / x + .3
    ax.fill_between(x, y, 10, color=A, alpha=.12); ax.plot(x, y, color=A, lw=2.4)
    ax.text(6.8, 6.8, 'EPISODIO', color=A, weight='bold', fontsize=10); ax.text(1.5, .9, 'sin episodio', color=G, weight='bold', fontsize=10)
    ax.text(7.2, 1.85, 'umbral', color=A, fontsize=8.5, style='italic')
    for px, py, t in [(8.6, 2.3, 'A: vulnerabilidad alta,\nestrés bajo'), (2.0, 7.6, 'B: vulnerabilidad baja,\nestrés alto')]:
        ax.plot(px, py, 'o', color=P, ms=9); ax.text(px + (-.3 if px > 5 else .3), py + .55, t, fontsize=7.8, color=P, ha='right' if px > 5 else 'left')
    ax.set_xlim(0, 10.5); ax.set_ylim(0, 10); ax.set_xticks([]); ax.set_yticks([])
    ax.set_xlabel('Vulnerabilidad →'); ax.set_ylabel('Estrés →'); clean(ax); note(ax, y=-.14)
    save(fig, 'u02_vulnerabilidad_estres.png')

# U3 · cronología DSM / CIE
if want('u03_dsm_cie_cronologia'):
    fig, ax = canvas(8.2, 2.9, 13, 4.6)
    def yrx(y): return 1.1 + (y - 1945) / (2026 - 1945) * 11.6
    for yy, lab, data, c, up in [(3.2, 'DSM', [(1952, 'DSM-I'), (1968, 'DSM-II'), (1980, 'DSM-III'), (1987, 'III-R'), (1994, 'DSM-IV'), (2000, 'IV-TR'), (2013, 'DSM-5'), (2022, '5-TR')], P, True),
                                 (1.4, 'CIE', [(1948, 'CIE-6'), (1965, 'CIE-8'), (1975, 'CIE-9'), (1990, 'CIE-10'), (2019, 'CIE-11\n(vigor 2022)')], G, False)]:
        ax.plot([yrx(1945), yrx(2026)], [yy, yy], color=c, lw=2.2); txt(ax, .15, yy, lab, 9, c, weight='bold', ha='left')
        for yr, t in data:
            x = yrx(yr); ax.plot([x], [yy], 'o', color=c, ms=7)
            txt(ax, x, yy + (.28 if up else -.28), t, 7.4, INK, va='bottom' if up else 'top', weight='bold')
            txt(ax, x, yy - (.25 if up else -.25), str(yr), 6.8, MUTE, va='top' if up else 'bottom')
    save(fig, 'u03_dsm_cie_cronologia.png')

# U3 · DSM vs CIE
if want('u03_dsm_vs_cie'):
    rows = [('Enfoque', 'Criterios operativos con\nrecuentos y duraciones', 'Características esenciales\ny flexibilidad clínica'),
            ('Personalidad', '10 TP categoriales\n(grupos A, B, C)', 'Gravedad + 5 dominios\n+ patrón límite'),
            ('TEPT complejo', 'No existe', 'Sí'),
            ('Estrés agudo', 'Trastorno (3 días-1 mes)', 'No es trastorno mental'),
            ('Duelo prolongado', '≥ 12 meses', '> 6 meses'),
            ('Videojuegos', 'Sección III (en estudio)', 'Diagnóstico oficial'),
            ('Género', 'Disforia de género\n(en el manual)', 'Incongruencia de género\n(fuera de trastornos mentales)')]
    fig, ax = canvas(7.6, 4.6, 12, len(rows) + 1.2)
    box(ax, 6.0, len(rows) + .55, 3.9, .6, 'DSM-5-TR (2022)', P, 9.2); box(ax, 10.0, len(rows) + .55, 3.9, .6, 'CIE-11 (2022)', G, 9.2)
    for i, (k, a, b) in enumerate(rows):
        y = len(rows) - .5 - i
        if i % 2 == 0: ax.add_patch(Rectangle((.1, y - .48), 11.9, .96, color=SOFT, zorder=0))
        txt(ax, 2.0, y, k, 8.4, INK, weight='bold'); txt(ax, 6.0, y, a, 7.8); txt(ax, 10.0, y, b, 7.8)
    save(fig, 'u03_dsm_vs_cie.png')

# U4 · HiTOP
if want('u04_hitop'):
    fig, ax = canvas(8.0, 4.4, 13, 7.2)
    box(ax, 6.5, 6.5, 2.4, .7, 'Factor p', A, 9.5)
    box(ax, 3.3, 5.1, 3.4, .7, 'Superespectro de\ndisfunción emocional', P, 7.6); box(ax, 6.5, 5.1, 2.6, .7, 'Superespectro\npsicótico', V, 7.6); box(ax, 9.8, 5.1, 3.4, .7, 'Superespectro\nexternalizante', Y, 7.6, tc=INK)
    sp = [('Internalizante', P), ('Somatomorfo', P), ('Trastorno del\npensamiento', V), ('Desapego', V), ('Externalizante\ndesinhibido', Y), ('Externalizante\nantagonista', Y)]
    for i, (t, c) in enumerate(sp):
        x = 1.3 + i * 2.08; box(ax, x, 3.6, 1.9, .8, t, c, 7.4, tc=INK if c == Y else 'white')
        par = 3.3 if c == P else (6.5 if c == V else 9.8); arr(ax, (par, 4.73), (x, 4.02), MUTE, lw=1)
    for px in (3.3, 6.5, 9.8): arr(ax, (6.5, 6.13), (px, 5.47), MUTE, lw=1)
    for y, t in [(2.3, 'Subfactores'), (1.45, 'Síndromes (p. ej., depresión, pánico, TOC)'), (.6, 'Síntomas y rasgos')]:
        ax.add_patch(Rectangle((.4, y - .32), 12.2, .64, color=SOFT)); txt(ax, 6.5, y, t, 8.4, INK)
    txt(ax, 12.9, 6.5, 'más general', 7.4, MUTE, ha='right'); txt(ax, 12.9, .2, 'más específico', 7.4, MUTE, ha='right')
    save(fig, 'u04_hitop.png')

# U4 · factor p
if want('u04_factor_p'):
    fig, ax = canvas(6.6, 3.8, 11, 6.4)
    tr = ['Depresión', 'Ansiedad', 'TEPT', 'Conducta', 'Sustancias', 'TDAH', 'Esquizofrenia', 'Manía']
    xs = [.9 + i * 1.32 for i in range(8)]
    for x, t in zip(xs, tr): box(ax, x, 3.2, 1.24, .62, t, SOFT, 6.4, tc=INK, ec=MUTE)
    box(ax, 5.5, 5.7, 2.4, .7, 'Factor p (general)', A, 9)
    for x in xs: arr(ax, (5.5, 5.33), (x, 3.53), A, lw=.8, ms=8)
    for (lab, idx, c) in [('Internalizante', [0, 1, 2], P), ('Externalizante', [3, 4, 5], Y), ('Trastorno del\npensamiento', [6, 7], V)]:
        cx = np.mean([xs[i] for i in idx]); box(ax, cx, 1.1, 2.3 if len(idx) == 3 else 2.0, .75, lab, c, 8, tc=INK if c == Y else 'white')
        for i in idx: arr(ax, (cx, 1.48), (xs[i], 2.87), c, lw=1, ms=8)
    note(ax, y=-.05)
    save(fig, 'u04_factor_p.png')

# U5 · niveles de conciencia
if want('u05_niveles_conciencia'):
    fig, ax = canvas(7.4, 3.7, 12, 6)
    steps = ['Vigilia lúcida', 'Obnubilación', 'Somnolencia', 'Estupor', 'Coma']
    for i, s in enumerate(steps):
        c = [G, Y, '#D98B3A', A, '#7E2E22'][i]
        box(ax, 1.9 + i * 1.2, 5.2 - i * 1.05, 2.3, .7, s, c, 8.4, tc=INK if i in (1, 2) else 'white')
    arr(ax, (.4, 5.4), (.4, .9), MUTE); txt(ax, .15, 3.1, 'menor nivel\nde conciencia', 7.4, MUTE, rotation=90)
    txt(ax, 3.9, .3, 'Alteraciones cuantitativas (nivel)', 8.4, P, weight='bold')
    ax.add_patch(FancyBboxPatch((8.3, .8), 3.5, 4.6, boxstyle='round,pad=0.02,rounding_size=.15', fc=SOFT, ec=V, lw=1.2))
    txt(ax, 10.05, 4.9, 'Alteraciones cualitativas\n(contenido / campo)', 8.2, V, weight='bold')
    for i, (t, d) in enumerate([('Estado crepuscular', 'campo estrechado,\nconducta ordenada, amnesia'), ('Estado oniroide', 'vivencias de tipo onírico'), ('Delirium', 'inicio agudo, fluctuante,\natención alterada')]):
        txt(ax, 10.05, 3.9 - i * 1.15, t, 8.2, INK, weight='bold'); txt(ax, 10.05, 3.45 - i * 1.15, d, 7.2, MUTE)
    save(fig, 'u05_niveles_conciencia.png')

# U6 · árbol de engaños perceptivos
if want('u06_arbol_percepcion'):
    fig, ax = canvas(8.0, 4.3, 13, 7)
    box(ax, 6.5, 6.4, 3.8, .75, '¿Hay un estímulo real?', P, 9)
    box(ax, 3.0, 4.6, 3.4, .75, 'Sí', SOFT, 9, tc=INK, ec=MUTE); box(ax, 10.0, 4.6, 4.6, .75, 'No: ¿en el espacio externo\ny con corporeidad?', P, 8.4)
    arr(ax, (5.4, 6.0), (3.4, 5.0)); arr(ax, (7.6, 6.0), (9.6, 5.0))
    box(ax, 1.6, 2.7, 2.6, 1.0, 'Distorsión\n(cambia intensidad,\ncualidad o forma)', G, 7.6); box(ax, 4.5, 2.7, 2.6, 1.0, 'Ilusión\n(se interpreta mal;\npareidolia)', G, 7.6)
    arr(ax, (2.6, 4.2), (1.8, 3.25)); arr(ax, (3.4, 4.2), (4.3, 3.25))
    box(ax, 8.4, 2.7, 2.7, 1.0, 'Alucinación\n(convicción de\nrealidad)', A, 7.8); box(ax, 11.6, 2.7, 2.7, 1.0, 'Pseudoalucinación\n(espacio subjetivo,\nsin corporeidad)', V, 7.6)
    arr(ax, (9.3, 4.2), (8.6, 3.25)); arr(ax, (10.7, 4.2), (11.4, 3.25)); txt(ax, 8.5, 3.85, 'sí', 8, INK); txt(ax, 11.5, 3.85, 'no', 8, INK)
    box(ax, 8.4, .65, 5.2, .85, 'Alucinosis: la persona sabe que no es real\n(frecuente en causas orgánicas o tóxicas)', Y, 7.6, tc=INK)
    arr(ax, (8.4, 2.15), (8.4, 1.1), MUTE, ls='--')
    save(fig, 'u06_arbol_percepcion.png')

# U6 · trastornos formales
if want('u06_trastornos_formales'):
    fig, axs = plt.subplots(2, 3, figsize=(8.0, 4.3))
    rng = np.random.default_rng(3)
    def base(a, t, c):
        a.set_xlim(0, 10); a.set_ylim(0, 6); a.axis('off'); a.set_title(t, color=c, fontsize=9.5, weight='bold')
        a.plot(.6, 3, 'o', color=INK, ms=8); a.plot(9.4, 3, '*', color=A, ms=15); a.text(.6, 2.2, 'inicio', ha='center', fontsize=7, color=MUTE); a.text(9.4, 2.2, 'meta', ha='center', fontsize=7, color=A)
    a = axs[0, 0]; base(a, 'Normal', G); a.annotate('', (9.1, 3), (.9, 3), arrowprops=dict(arrowstyle='-|>', color=G, lw=2))
    a = axs[0, 1]; base(a, 'Circunstancialidad', P); t = np.linspace(0, 1, 200); x = .9 + 8.2 * t; y = 3 + 2.3 * np.sin(np.pi * t) + .5 * np.sin(14 * np.pi * t) * np.sin(np.pi * t); a.plot(x, y, color=P, lw=1.8); a.text(5, .8, 'rodeos con detalle,\npero llega', ha='center', fontsize=7.4, color=INK)
    a = axs[0, 2]; base(a, 'Tangencialidad', V); x = np.linspace(.9, 7.2, 100); a.plot(x, 3 + .06 * (x - .9) ** 2, color=V, lw=1.8); a.annotate('', (7.5, 5.6), (7.2, 5.38), arrowprops=dict(arrowstyle='-|>', color=V)); a.text(5, .8, 'se desvía y no llega', ha='center', fontsize=7.4, color=INK)
    a = axs[1, 0]; base(a, 'Fuga de ideas', Y); pts = [(.9, 3), (2.0, 4.6), (3.0, 2.0), (4.1, 4.9), (5.2, 1.6), (6.4, 4.4), (7.5, 1.4)]; a.plot(*zip(*pts), '-o', color=Y, lw=1.8, ms=3.5); a.text(5, .5, 'saltos rápidos por asociaciones\nsuperficiales (manía)', ha='center', fontsize=7.2, color=INK)
    a = axs[1, 1]; base(a, 'Descarrilamiento', A)
    for x0, y0 in [(.9, 3), (3.2, 4.8), (5.6, 1.7)]: a.plot([x0, x0 + 1.6], [y0, y0 + rng.uniform(-.5, .5)], color=A, lw=1.8)
    a.text(5, .5, 'saltos entre ideas sin conexión\n(esquizofrenia)', ha='center', fontsize=7.2, color=INK)
    a = axs[1, 2]; base(a, 'Bloqueo', MUTE); a.plot([.9, 4.6], [3, 3], color=INK, lw=1.8); a.plot([4.9, 4.9], [2.4, 3.6], color=A, lw=3); a.text(5, .8, 'interrupción brusca del curso', ha='center', fontsize=7.4, color=INK)
    fig.text(.01, .01, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
    save(fig, 'u06_trastornos_formales.png')

# U7 · Watson y Rayner
if want('u07_watson_rayner'):
    fig, ax = canvas(7.8, 4.2, 13, 7)
    rows = [(6.1, '1. Antes'), (4.5, '2. Condicionamiento'), (2.9, '3. Después')]
    for y, t in rows: txt(ax, .1, y, t, 8.8, P, weight='bold', ha='left')
    box(ax, 4.6, 6.1, 1.8, .75, 'Rata (EN)', SOFT, 8, tc=INK, ec=MUTE); arr(ax, (5.55, 6.1), (6.4, 6.1)); box(ax, 7.4, 6.1, 1.8, .75, 'Sin miedo', G, 8)
    box(ax, 4.6, 4.5, 1.8, .75, 'Rata', SOFT, 8, tc=INK, ec=MUTE); txt(ax, 5.75, 4.5, '+', 14); box(ax, 7.0, 4.5, 2.0, .75, 'Ruido fuerte\n(EI)', Y, 8, tc=INK)
    arr(ax, (8.05, 4.5), (8.9, 4.5)); box(ax, 9.9, 4.5, 1.8, .75, 'Miedo (RI)', A, 8); txt(ax, 7.0, 3.85, 'varios emparejamientos', 7.4, MUTE, style='italic')
    box(ax, 4.6, 2.9, 1.8, .75, 'Rata (EC)', SOFT, 8, tc=INK, ec=MUTE); arr(ax, (5.55, 2.9), (6.4, 2.9)); box(ax, 7.4, 2.9, 1.8, .75, 'Miedo (RC)', A, 8)
    txt(ax, 10.9, 3.35, 'Generalización a:', 8, V, weight='bold')
    for i, t in enumerate(['conejo', 'perro', 'abrigo de piel', 'máscara']): txt(ax, 10.9, 2.95 - i * .38, t, 7.6, V)
    arr(ax, (8.35, 2.9), (9.6, 2.9), V, ls='--')
    ax.add_patch(FancyBboxPatch((1.5, .25), 10.0, .95, boxstyle='round,pad=0.02,rounding_size=.12', fc='#FBEDEA', ec=A, lw=1))
    txt(ax, 6.5, .72, 'Límites: caso único (un bebé de unos 11 meses), sin grupo control y sin medida objetiva del miedo', 7.6, A)
    save(fig, 'u07_watson_rayner.png')

# U7 · Mowrer
if want('u07_mowrer'):
    fig, ax = canvas(7.6, 3.4, 12, 5.6)
    ax.add_patch(Rectangle((.2, 2.9), 5.6, 2.5, fc='#EAF1F6', ec='none')); ax.add_patch(Rectangle((6.2, 2.9), 5.6, 2.5, fc='#EEF6F0', ec='none'))
    txt(ax, 3.0, 5.05, 'Fase 1 · Condicionamiento clásico', 8.6, P, weight='bold'); txt(ax, 9.0, 5.05, 'Fase 2 · Condicionamiento operante', 8.6, G, weight='bold')
    box(ax, 1.4, 3.9, 1.8, .8, 'EC + EI', P, 8.4); arr(ax, (2.35, 3.9), (3.1, 3.9)); box(ax, 4.5, 3.9, 2.4, .8, 'Miedo\ncondicionado', A, 8.2)
    box(ax, 7.6, 3.9, 2.0, .8, 'Evitación /\nhuida', G, 8.2); arr(ax, (8.65, 3.9), (9.3, 3.9)); box(ax, 10.5, 3.9, 2.2, .8, 'Alivio de\nla ansiedad', G, 8.2)
    arr(ax, (5.75, 3.9), (6.55, 3.9))
    arr(ax, (10.5, 3.45), (7.6, 3.45), G, rad=-.4); txt(ax, 9.05, 2.45, 'refuerzo negativo', 7.8, G, style='italic')
    box(ax, 6.0, 1.0, 7.8, .9, 'Como la evitación impide encontrarse con el EC sin el EI,\nel miedo no se extingue y la evitación se mantiene', SOFT, 8, tc=INK, bold=False, ec=MUTE)
    note(ax, y=-.06)
    save(fig, 'u07_mowrer.png')

def cycle(name, items, colors, center, w=7.0, h=4.4, rx=4.0, ry=2.0, bw=2.8, fs=7.8):
    fig, ax = canvas(w, h, 12, 7)
    n = len(items); cx, cy = 6, 3.5
    pos = [(cx + rx * np.sin(2 * np.pi * i / n), cy + ry * np.cos(2 * np.pi * i / n)) for i in range(n)]
    for (x, y), t, c in zip(pos, items, colors): box(ax, x, y, bw, .9, t, c, fs, tc=INK if c in (Y, SOFT) else 'white')
    for i in range(n):
        a, b = pos[i], pos[(i + 1) % n]; dx, dy = b[0] - a[0], b[1] - a[1]; L = np.hypot(dx, dy)
        arr(ax, (a[0] + dx * .3, a[1] + dy * .3), (a[0] + dx * .7, a[1] + dy * .7), MUTE, rad=-.15)
    if center: txt(ax, cx, cy, center, 8, MUTE, style='italic')
    note(ax, y=-.03)
    save(fig, name)

if want('u07_clark_panico'):
    cycle('u07_clark_panico.png', ['Desencadenante\n(interno o externo)', 'Amenaza\npercibida', 'Aprensión', 'Sensaciones\ncorporales', 'Interpretación\ncatastrófica\n(«es un infarto»)'],
          [SOFT, P, Y, V, A], 'círculo vicioso\n(Clark, 1986)')

if want('u07_wells_tag'):
    fig, ax = canvas(7.6, 4.2, 12, 7)
    box(ax, 2.0, 6.2, 3.0, .75, 'Detonante\n(«¿y si…?»)', SOFT, 8, tc=INK, ec=MUTE)
    box(ax, 2.0, 4.7, 3.0, .85, 'Creencias positivas\n(«preocuparme me prepara»)', G, 7.6)
    box(ax, 2.0, 3.1, 3.0, .85, 'Preocupación tipo 1\n(sucesos externos, salud)', P, 7.8)
    box(ax, 6.6, 3.1, 3.4, .85, 'Creencias negativas\n(«es incontrolable y peligrosa»)', V, 7.6)
    box(ax, 10.2, 3.1, 3.0, .85, 'Preocupación tipo 2\n(metapreocupación)', A, 7.8)
    box(ax, 10.2, 1.0, 3.2, .85, 'Ansiedad, control del\npensamiento, evitación,\nbúsqueda de seguridad', Y, 7.4, tc=INK)
    arr(ax, (2.0, 5.8), (2.0, 5.15)); arr(ax, (2.0, 4.25), (2.0, 3.55)); arr(ax, (3.55, 3.1), (4.85, 3.1)); arr(ax, (8.35, 3.1), (8.65, 3.1)); arr(ax, (10.2, 2.65), (10.2, 1.45))
    arr(ax, (8.55, 1.0), (2.0, 2.65), MUTE, ls='--', rad=-.2); txt(ax, 5.3, .55, 'mantienen la preocupación', 7.4, MUTE, style='italic')
    note(ax, y=-.03)
    save(fig, 'u07_wells_tag.png')

# U8 · Wegner
if want('u08_wegner'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.6, 3.2), gridspec_kw={'width_ratios': [1.2, 1]})
    a1.set_xlim(0, 10); a1.set_ylim(0, 6); a1.axis('off')
    for y, g, f1, f2, c in [(4.3, 'Grupo 1', 'Suprimir', 'Expresar', A), (1.6, 'Grupo 2', 'Expresar', 'Suprimir', P)]:
        a1.text(.2, y, g, fontsize=9, weight='bold', color=c, va='center')
        box(a1, 4.1, y, 3.3, 1.3, 'Suprimir:\n«no pienses en\nun oso blanco»' if f1 == 'Suprimir' else 'Expresar:\npensar libremente\n(oso incluido)', c, 6.8)
        arr(a1, (5.85, y), (6.7, y)); box(a1, 8.3, y, 2.6, .9, 'Fase 2:\n' + f2, SOFT, 7.6, tc=INK, ec=MUTE)
    a1.text(4.1, 5.6, 'Fase 1', ha='center', fontsize=8.4, color=INK, weight='bold')
    a2.bar([0, 1], [8, 5], color=[A, P], width=.6)
    a2.set_xticks([0, 1]); a2.set_xticklabels(['Expresión tras\nsuprimir', 'Expresión\ndesde el inicio'], fontsize=7.8)
    a2.set_yticks([]); a2.set_ylabel('Pensamientos del oso\n(unidades arbitrarias)', fontsize=7.8); a2.set_ylim(0, 10); clean(a2)
    a2.text(0, 8.4, 'rebote', ha='center', fontsize=8.2, color=A, weight='bold')
    fig.text(.01, .01, 'Esquema ilustrativo, no datos (Wegner et al., 1987)', fontsize=7.4, color=MUTE)
    save(fig, 'u08_wegner.png')

if want('u08_salkovskis'):
    cycle('u08_salkovskis.png', ['Intrusión\n(normal)', 'Valoración de\nresponsabilidad\n(«si no lo evito,\nserá culpa mía»)', 'Malestar /\nansiedad', 'Neutralización\no compulsión', 'Alivio a\ncorto plazo', 'Más intrusiones\ny creencia\nreforzada'],
          [SOFT, A, Y, P, G, V], 'Salkovskis (1985)', rx=4.2, ry=2.4, bw=2.7, fs=7.2, h=4.6)

# U9 · línea del trauma
if want('u09_linea_trauma'):
    fig, ax = canvas(8.2, 3.0, 13, 5)
    ax.plot([.4, 12.7], [2.6, 2.6], color=INK, lw=2)
    ticks = [(.6, 'Suceso'), (2.0, '3 días'), (4.6, '1 mes'), (8.2, '6 meses'), (11.6, '12 meses')]
    for x, t in ticks: ax.plot([x, x], [2.45, 2.75], color=INK, lw=1.5); txt(ax, x, 2.2, t, 7.8, INK, weight='bold', va='top')
    for x0, x1, y, t, c in [(.6, 2.0, 3.5, 'reacción\nesperable', G), (2.0, 4.6, 3.5, 'Trastorno de estrés agudo\n(DSM-5-TR)', Y), (4.6, 12.7, 3.5, 'TEPT (síntomas > 1 mes)', A)]:
        ax.add_patch(Rectangle((x0 + .03, y - .4), x1 - x0 - .06, .8, fc=c, ec='none', alpha=.85)); txt(ax, (x0 + x1) / 2, y, t, 7.4, INK if c == Y else 'white', weight='bold')
    txt(ax, 8.2, 1.3, '↑ TEPT de expresión retardada\n↑ duelo prolongado CIE-11 (> 6 meses)', 7.2, V)
    txt(ax, 11.6, .55, '↑ duelo prolongado\nDSM-5-TR (≥ 12 meses)', 7.2, V)
    save(fig, 'u09_linea_trauma.png')

if want('u09_tept_teptc'):
    fig, ax = canvas(7.6, 3.6, 12, 6)
    ax.add_patch(FancyBboxPatch((.3, .5), 4.6, 4.6, boxstyle='round,pad=0.02,rounding_size=.2', fc='#EAF1F6', ec=P, lw=1.2))
    ax.add_patch(FancyBboxPatch((5.6, .5), 4.0, 4.6, boxstyle='round,pad=0.02,rounding_size=.2', fc='#F3EEF8', ec=V, lw=1.2))
    txt(ax, 2.6, 4.6, 'TEPT (CIE-11)', 9.2, P, weight='bold'); txt(ax, 7.6, 4.6, 'Alteraciones de la\nautoorganización', 8.8, V, weight='bold')
    for i, t in enumerate(['Reexperimentación\nen el presente', 'Evitación', 'Sensación de\namenaza actual']): box(ax, 2.6, 3.5 - i * 1.15, 3.6, .85, t, P, 8)
    for i, t in enumerate(['Desregulación\nafectiva', 'Autoconcepto\nnegativo', 'Dificultades en\nlas relaciones']): box(ax, 7.6, 3.5 - i * 1.15, 3.2, .85, t, V, 8)
    txt(ax, 5.25, 2.8, '+', 20, INK, weight='bold'); txt(ax, 10.1, 2.8, '=', 20, INK, weight='bold')
    box(ax, 11.25, 2.8, 1.35, 1.6, 'TEPT\ncomplejo', A, 8.6)
    save(fig, 'u09_tept_teptc.png')

# U10 · diseño triádico
if want('u10_triadico'):
    fig, ax = canvas(8.2, 3.8, 13, 6.4)
    txt(ax, 2.2, 6.0, 'Fase 1 · Tratamiento previo', 8.8, P, weight='bold'); txt(ax, 7.2, 6.0, 'Fase 2 · Caja de lanzadera', 8.8, P, weight='bold')
    rows = [('Descarga escapable\n(un panel la corta)', G, 'Aprende a escapar'), ('Descarga inescapable\nacoplada (igual cantidad,\nsin control)', A, 'NO aprende a escapar:\npasividad'), ('Sin descarga', SOFT, 'Aprende a escapar')]
    for i, (t, c, r) in enumerate(rows):
        y = 4.8 - i * 1.55
        box(ax, 2.2, y, 3.6, 1.1, t, c, 7.6, tc=INK if c == SOFT else 'white', ec=MUTE if c == SOFT else 'none')
        arr(ax, (4.1, y), (5.4, y)); box(ax, 7.2, y, 3.2, .9, r, A if c == A else G, 7.8)
    ax.add_patch(FancyBboxPatch((9.3, .3), 3.5, 5.3, boxstyle='round,pad=0.02,rounding_size=.15', fc='#FFF6E3', ec=Y, lw=1.2))
    txt(ax, 11.05, 5.1, 'Reinterpretación\n(Maier y Seligman, 2016)', 7.8, INK, weight='bold')
    txt(ax, 11.05, 3.4, 'La pasividad ante el\nestrés incontrolable es\nla respuesta por defecto\n(núcleo dorsal del rafe)', 7.4, INK)
    txt(ax, 11.05, 1.45, 'Lo que se aprende\nes el CONTROL\n(corteza prefrontal\nventromedial)', 7.4, INK)
    note(ax, y=-.03)
    save(fig, 'u10_triadico.png')

if want('u10_beck'):
    fig, ax = canvas(6.8, 4.6, 10, 8)
    steps = [('Experiencias tempranas', SOFT), ('Esquemas disfuncionales\n(latentes)', V), ('Suceso crítico', Y), ('Activación de los esquemas', P),
             ('Pensamientos automáticos y distorsiones\nTríada: yo · mundo · futuro', A), ('Síntomas depresivos\n(afectivos, conductuales, físicos)', '#7E2E22')]
    for i, (t, c) in enumerate(steps):
        y = 7.3 - i * 1.32; box(ax, 5, y, 6.4, .9, t, c, 8.2, tc=INK if c in (SOFT, Y) else 'white', ec=MUTE if c == SOFT else 'none')
        if i < 5: arr(ax, (5, y - .47), (5, y - .85))
    note(ax, y=-.03)
    save(fig, 'u10_beck.png')

if want('u10_genes_candidatos'):
    fig, ax = plt.subplots(figsize=(6.4, 2.4))
    ax.barh([1, 0], [850, 38802], color=[MUTE, P], height=.55)
    ax.set_yticks([1, 0]); ax.set_yticklabels(['Caspi et al. (2003)\nestudio original', 'Culverhouse et al. (2018)\nmegaanálisis'], fontsize=8.4)
    ax.text(850 + 500, 1, '≈ 850 participantes: interacción gen × estrés', va='center', fontsize=8, color=INK)
    ax.text(38802 - 500, 0, '38.802: sin interacción', va='center', ha='right', fontsize=8.2, color='white', weight='bold')
    ax.set_xlabel('Tamaño de la muestra'); ax.set_xlim(0, 41000); ax.set_xticks([0, 10000, 20000, 30000, 40000]); clean(ax)
    ax.xaxis.set_major_formatter(matplotlib.ticker.FuncFormatter(lambda v, p: f'{int(v):,}'.replace(',', '.')))
    save(fig, 'u10_genes_candidatos.png')

if want('u10_espectro_bipolar'):
    fig, axs = plt.subplots(3, 1, figsize=(7.6, 4.6), sharex=True)
    t = np.linspace(0, 100, 1000)
    def env(c, w, h): return h * np.exp(-((t - c) / w) ** 2)
    prof = [('Bipolar I', env(18, 5, 2.6) - env(55, 8, 1.9) + env(85, 4, 2.6), 'manía ≥ 7 días'),
            ('Bipolar II', env(15, 3, 1.3) - env(40, 9, 2.0) + env(68, 3, 1.3) - env(88, 6, 1.9), 'hipomanía ≥ 4 días + depresión mayor'),
            ('Ciclotimia', .75 * np.sin(t / 5.5) , 'oscilaciones subumbral durante ≥ 2 años')]
    for a, (n, y, d) in zip(axs, prof):
        a.axhspan(2.0, 3.2, color=A, alpha=.08); a.axhspan(1.0, 2.0, color=Y, alpha=.12); a.axhspan(-3.2, -1.5, color=P, alpha=.08)
        a.axhline(0, color=MUTE, lw=.8, ls=':'); a.plot(t, y, color=INK, lw=1.8)
        a.set_ylim(-3.2, 3.2); a.set_yticks([]); clean(a); a.set_ylabel(n, fontsize=8.6, rotation=0, ha='right', va='center', color=P, weight='bold')
        a.text(99, 2.75, d, ha='right', fontsize=7.6, color=INK)
    axs[0].text(1, 2.5, 'manía', fontsize=7, color=A); axs[0].text(1, 1.3, 'hipomanía', fontsize=7, color='#9C7420'); axs[0].text(1, -2.6, 'depresión', fontsize=7, color=P)
    axs[2].set_xticks([]); axs[2].set_xlabel('Tiempo →')
    fig.text(.01, .01, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
    save(fig, 'u10_espectro_bipolar.png')

# U11
if want('u11_violencia_fazel'):
    fig, ax = plt.subplots(figsize=(5.6, 2.9))
    ax.bar([0, 1], [2.1, 8.9], color=[P, A], width=.55); ax.axhline(1, color=MUTE, ls='--', lw=1); ax.text(.5, 1.2, 'OR = 1 (sin diferencia)', fontsize=7.4, color=MUTE, ha='center')
    for x, v in [(0, 2.1), (1, 8.9)]: ax.text(x, v + .3, f'{v:.1f}'.replace('.', ','), ha='center', fontsize=10, weight='bold', color=INK)
    ax.set_xticks([0, 1]); ax.set_xticklabels(['Esquizofrenia sin\nconsumo de sustancias', 'Esquizofrenia con\nconsumo de sustancias'], fontsize=8.2)
    ax.set_ylabel('Odds ratio de violencia\nfrente a población general', fontsize=8); ax.set_ylim(0, 10.5); clean(ax)
    ax.text(-.3, 6.5, 'El aumento del riesgo se concentra\nen el consumo de sustancias; el\nriesgo absoluto sigue siendo bajo', fontsize=7.6, color=INK)
    fig.text(.01, .01, 'Datos: Fazel et al. (2009), metaanálisis', fontsize=7.4, color=MUTE)
    save(fig, 'u11_violencia_fazel.png')

if want('u11_duraciones_psicosis'):
    fig, ax = canvas(8.2, 2.8, 13, 4.6)
    ax.plot([.5, 12.6], [2.2, 2.2], color=INK, lw=2)
    for x, t in [(.6, '1 día'), (3.6, '1 mes'), (8.4, '6 meses')]: ax.plot([x, x], [2.05, 2.35], color=INK, lw=1.5); txt(ax, x, 1.85, t, 8, INK, weight='bold', va='top')
    for x0, x1, t, c in [(.6, 3.6, 'Trastorno psicótico breve\n(≥ 1 día y < 1 mes)', Y), (3.6, 8.4, 'Esquizofreniforme\n(1-6 meses)', V), (8.4, 12.6, 'Esquizofrenia\n(≥ 6 meses, ≥ 1 mes activa)', A)]:
        ax.add_patch(Rectangle((x0 + .03, 2.6), x1 - x0 - .06, .95, fc=c, ec='none')); txt(ax, (x0 + x1) / 2, 3.07, t, 7.8, INK if c == Y else 'white', weight='bold')
    txt(ax, 6.5, .65, 'CIE-11: esquizofrenia con ≥ 1 mes de síntomas; no hay esquizofreniforme; trastorno psicótico agudo y transitorio ≤ 3 meses', 7.4, P)
    save(fig, 'u11_duraciones_psicosis.png')

# U12
if want('u12_tp_modelos'):
    fig, ax = canvas(8.2, 4.4, 13, 7)
    cols = [(2.2, 'DSM-5-TR (Sección II)', P, ['Grupo A: paranoide,\nesquizoide, esquizotípico', 'Grupo B: antisocial, límite,\nhistriónico, narcisista', 'Grupo C: evitativo,\ndependiente, obsesivo-compulsivo'], 'categorial'),
            (6.5, 'AMPD (DSM-5, Sección III)', V, ['A · Funcionamiento: identidad,\nautodirección, empatía, intimidad', 'B · 5 dominios: afectividad negativa,\ndesapego, antagonismo,\ndesinhibición, psicoticismo', '6 TP específicos +\nTP con rasgos especificados'], 'híbrido'),
            (10.8, 'CIE-11', G, ['Gravedad: dificultad de\nla personalidad · leve ·\nmoderado · grave', '5 dominios: afectividad negativa,\ndesapego, disocialidad,\ndesinhibición, anancastia', 'Especificador:\npatrón límite'], 'dimensional')]
    for x, h, c, its, k in cols:
        box(ax, x, 6.4, 4.0, .7, h, c, 8.6); txt(ax, x, 5.75, k, 7.6, MUTE, style='italic')
        for i, t in enumerate(its): box(ax, x, 4.65 - i * 1.6, 4.0, 1.3, t, SOFT, 7.3, tc=INK, bold=False, ec=c)
    save(fig, 'u12_tp_modelos.png')

# U13 · respuesta sexual
if want('u13_respuesta_sexual'):
    fig, ax = canvas(8.2, 3.8, 13, 6.2)
    txt(ax, 3.4, 5.9, 'Modelos lineales', 9, P, weight='bold')
    for y, lab, ph, c in [(4.7, 'Masters y Johnson (1966)', ['Excitación', 'Meseta', 'Orgasmo', 'Resolución'], P), (2.6, 'Kaplan (1979)', ['Deseo', 'Excitación', 'Orgasmo'], G)]:
        txt(ax, .2, y + .65, lab, 8, c, weight='bold', ha='left')
        for i, p in enumerate(ph):
            x = 1.0 + i * 1.65; box(ax, x, y, 1.5, .62, p, c, 7.6)
            if i < len(ph) - 1: arr(ax, (x + .77, y), (x + .9, y))
    cx, cy, r = 9.8, 3.2, 1.95
    txt(ax, cx, 5.9, 'Modelo circular (Basson, 2000)', 9, V, weight='bold')
    labs = ['Intimidad\nemocional', 'Receptividad a\nestímulos sexuales', 'Excitación\nsubjetiva', 'Deseo\nresponsivo', 'Satisfacción\nemocional y física']
    pts = [(cx + r * np.sin(2 * np.pi * i / 5), cy + r * .95 * np.cos(2 * np.pi * i / 5)) for i in range(5)]
    for (x, y), t in zip(pts, labs): box(ax, x, y, 1.9, .72, t, V, 6.8)
    for i in range(5):
        a, b = pts[i], pts[(i + 1) % 5]; arr(ax, (a[0] + (b[0] - a[0]) * .32, a[1] + (b[1] - a[1]) * .32), (a[0] + (b[0] - a[0]) * .68, a[1] + (b[1] - a[1]) * .68), MUTE)
    note(ax, y=-.03)
    save(fig, 'u13_respuesta_sexual.png')

# U15
if want('u15_incentivo'):
    fig, ax = plt.subplots(figsize=(5.6, 3.0))
    x = np.linspace(0, 10, 100)
    ax.plot(x, 1 + 7 / (1 + np.exp(-(x - 4.5))), color=A, lw=2.6, label='«Querer» (saliencia de incentivo)')
    ax.plot(x, 5 - .18 * x, color=P, lw=2.6, ls='--', label='«Gustar» (placer)')
    ax.set_xlabel('Consumos repetidos →'); ax.set_ylabel('Intensidad'); ax.set_xticks([]); ax.set_yticks([]); ax.set_ylim(0, 9.5); clean(ax)
    ax.legend(frameon=False, fontsize=8, loc='upper left'); note(ax, 'Esquema ilustrativo, no datos (Robinson y Berridge, 1993)', -.14)
    save(fig, 'u15_incentivo.png')

if want('u15_cannabis_abstinencia'):
    fig, ax = plt.subplots(figsize=(5.8, 3.0))
    lab = ['Pacientes\nhospitalizados', 'Pacientes\nambulatorios', 'Población\ngeneral', 'Global']; v = [87, 54, 17, 47]
    ax.bar(range(4), v, color=[A, Y, G, P], width=.6)
    for i, val in enumerate(v): ax.text(i, val + 2, f'{val} %', ha='center', fontsize=9.5, weight='bold', color=INK)
    ax.set_xticks(range(4)); ax.set_xticklabels(lab, fontsize=8.2); ax.set_ylim(0, 100); ax.set_ylabel('Prevalencia del síndrome\nde abstinencia (%)', fontsize=8); clean(ax)
    fig.text(.01, .01, 'Datos: Bahji et al. (2020), 47 estudios, 23.518 consumidores regulares o dependientes', fontsize=7.2, color=MUTE)
    save(fig, 'u15_cannabis_abstinencia.png')

# U16 · Fairburn
if want('u16_fairburn'):
    fig, ax = canvas(7.4, 4.4, 12, 7)
    box(ax, 6, 6.2, 5.6, .9, 'Sobrevaloración del peso, la figura\ny su control (núcleo)', A, 8.8)
    box(ax, 6, 4.6, 3.4, .75, 'Dieta estricta y\nconductas de control', P, 8)
    box(ax, 2.2, 3.0, 2.8, .75, 'Bajo peso\n(anorexia)', V, 8); box(ax, 6, 2.8, 3.0, .75, 'Pérdida de control:\natracones', Y, 8, tc=INK)
    box(ax, 6, 1.1, 3.4, .75, 'Conductas compensatorias\n(vómito, laxantes…)', G, 7.8)
    arr(ax, (6, 5.75), (6, 5.0)); arr(ax, (4.3, 4.4), (2.8, 3.4)); arr(ax, (6, 4.2), (6, 3.2)); arr(ax, (6, 2.42), (6, 1.5))
    arr(ax, (7.7, 1.1), (8.7, 5.9), MUTE, ls='--', rad=.35); txt(ax, 10.2, 3.3, 'refuerzan\nel núcleo', 7.4, MUTE, style='italic')
    ax.add_patch(FancyBboxPatch((8.9, .2), 3.0, 2.0, boxstyle='round,pad=0.02,rounding_size=.12', fc=SOFT, ec=MUTE))
    txt(ax, 10.4, 1.2, 'Mantenedores añadidos:\nperfeccionismo clínico,\nbaja autoestima,\nintolerancia emocional,\nproblemas interpersonales', 6.9, INK)
    note(ax, y=-.03)
    save(fig, 'u16_fairburn.png')
