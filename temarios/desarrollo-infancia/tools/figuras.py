"""Figuras propias del temario de Psicología del Desarrollo. Infancia y Adolescencia. python3 tools/figuras.py → img/*"""
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

# U1 · ejes del desarrollo
if want('ejes'):
    fig, ax = canvas(7.4, 3.2, 12, 5.2)
    rows = [('Herencia', 'Ambiente', 'interacción, epigenética'), ('Continuidad', 'Discontinuidad', 'cambio gradual o por estadios'),
            ('Niño activo', 'Niño pasivo', 'quién dirige el cambio'), ('Universal', 'Contextual', 'igual en todas las culturas o no')]
    for i, (l, r, d) in enumerate(rows):
        y = 4.4 - i * 1.15; c = [P, G, Y, V][i]
        ax.plot([3.0, 9.0], [y, y], color=c, lw=3, solid_capstyle='round')
        box(ax, 1.5, y, 2.5, .62, l, c, 8.8, tc='white' if c != Y else INK); box(ax, 10.5, y, 2.5, .62, r, c, 8.8, tc='white' if c != Y else INK)
        ax.text(6, y + .14, d, ha='center', va='bottom', fontsize=7.8, color=INK, style='italic')
    note(ax, 'Esquema ilustrativo: los extremos son posturas teóricas, no categorías reales', -.04)
    save(fig, 'ejes.png')

# U1 · línea del tiempo
if want('historia'):
    ev = [(1690, 'Locke', 'tabula rasa'), (1762, 'Rousseau', 'Emilio'), (1877, 'Darwin', 'diario de\nsu hijo'), (1882, 'Preyer', 'El alma\ndel niño'),
          (1904, 'Hall', 'Adolescence'), (1905, 'Binet y\nSimon', 'primera escala\nde inteligencia'), (1936, 'Piaget', 'El nacimiento de\nla inteligencia'),
          (1969, 'Bowlby', 'Attachment'), (1979, 'Bronfenbrenner', 'modelo\necológico'), (2020, 'ManyBabies', 'ciencia\nmultilaboratorio')]
    fig, ax = canvas(8.2, 3.1, 15, 5)
    xs = np.linspace(.8, 14.2, len(ev)); ax.plot([.3, 14.7], [2.5, 2.5], color=MUTE, lw=2)
    cols = [P, G, Y, V, A, T, P, G, Y, V]
    for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
        up = i % 2 == 0; c = cols[i]
        ax.plot([x], [2.5], 'o', color=c, ms=8)
        ax.text(x, 2.75 if up else 2.25, str(yr), ha='center', va='bottom' if up else 'top', fontsize=8.2, color=c, weight='bold')
        ax.text(x, 3.2 if up else 1.8, a, ha='center', va='bottom' if up else 'top', fontsize=7.8, color=INK, weight='bold')
        ax.text(x, 4.0 if up else 1.0, d, ha='center', va='bottom' if up else 'top', fontsize=7.0, color=MUTE)
    save(fig, 'historia.png')

# U2 · Freud y Erikson
if want('erikson'):
    rows = [('0–1 año', 'Oral', 'Confianza / desconfianza', 'Esperanza'), ('1–3 años', 'Anal', 'Autonomía / vergüenza y duda', 'Voluntad'),
            ('3–6 años', 'Fálica', 'Iniciativa / culpa', 'Propósito'), ('6–12 años', 'Latencia', 'Laboriosidad / inferioridad', 'Competencia'),
            ('Adolescencia', 'Genital', 'Identidad / confusión de rol', 'Fidelidad'), ('Adultez joven', '—', 'Intimidad / aislamiento', 'Amor'),
            ('Adultez media', '—', 'Generatividad / estancamiento', 'Cuidado'), ('Vejez', '—', 'Integridad / desesperación', 'Sabiduría')]
    fig, ax = canvas(7.8, 3.9, 13, 9.4)
    hx = [1.3, 3.5, 7.6, 11.6]; hd = ['Edad ≈', 'Freud', 'Erikson: crisis', 'Virtud']
    for x, t in zip(hx, hd): ax.text(x, 8.9, t, ha='center', fontsize=8.8, weight='bold', color=P)
    for i, r in enumerate(rows):
        y = 8.0 - i * 1.0
        if i < 5: ax.add_patch(Rectangle((.1, y - .45), 12.8, .9, fc='#EEF3F8' if i % 2 == 0 else 'white', ec='none'))
        else: ax.add_patch(Rectangle((.1, y - .45), 12.8, .9, fc=SOFT, ec='none'))
        for x, t in zip(hx, r): ax.text(x, y, t, ha='center', va='center', fontsize=8.2, color=INK if t != '—' else MUTE)
    ax.text(12.9, .05, 'Edades aproximadas; sombreado gris: estadios adultos', ha='right', fontsize=7.2, color=MUTE)
    save(fig, 'erikson.png')

# U2 · diseño del muñeco Bobo
if want('bobo'):
    fig, ax = canvas(7.6, 3.4, 12.5, 5.6)
    box(ax, 1.6, 2.8, 2.6, 1.6, '72 niños\n36 niños · 36 niñas\n37–69 meses', INK, 8.4)
    gs = [('Modelo agresivo', A, 4.4), ('Modelo no agresivo', G, 2.8), ('Control\n(sin modelo)', MUTE, 1.2)]
    for t, c, y in gs:
        box(ax, 5.3, y, 2.9, .95, t, c, 8.6); arr(ax, (2.95, 2.8), (3.8, y))
    for y in (4.4, 2.8):
        ax.text(7.0, y, '× modelo hombre / mujer\n× niño / niña', va='center', fontsize=7.6, color=INK)
    box(ax, 11.0, 2.8, 2.6, 1.6, 'Sala con el\nmuñeco: ¿imitan\nla agresión?', P, 8.4)
    for y in (4.4, 2.8, 1.2): arr(ax, (6.8 if y == 1.2 else 9.4, y), (9.65, 2.8), MUTE)
    ax.text(6.25, .2, 'Bandura, Ross y Ross (1961). Esquema del diseño', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'bobo.png')

# U3 · equilibración
if want('equilibracion'):
    fig, ax = canvas(7.0, 3.2, 11.5, 5.2)
    box(ax, 5.75, 4.4, 3.2, .8, 'Equilibrio', G, 9.6)
    box(ax, 9.3, 2.6, 3.0, .9, 'Desequilibrio\n(conflicto cognitivo)', A, 8.6)
    box(ax, 5.75, .8, 3.2, .8, 'Nuevo equilibrio,\nmás estable', P, 8.6)
    box(ax, 2.2, 2.6, 3.4, 1.3, 'Asimilación (integrar en\nesquemas previos)\n↕\nAcomodación (cambiar\nlos esquemas)', Y, 7.8, tc=INK)
    arr(ax, (7.4, 4.3), (9.0, 3.1)); arr(ax, (7.75, 2.6), (3.95, 2.6)); arr(ax, (2.6, 1.9), (4.1, .9)); arr(ax, (6.9, 1.25), (5.75, 3.95), MUTE, ls='--', rad=.25)
    ax.text(8.1, 3.9, 'dato que\nno encaja', fontsize=7.4, color=INK); ax.text(10.6, .5, 'el ciclo se repite\na otro nivel', fontsize=7.4, color=MUTE, ha='right')
    note(ax, 'Esquema ilustrativo, no datos', -.02)
    save(fig, 'equilibracion.png')

# U3 · ZDP
if want('zdp'):
    fig, ax = canvas(6.0, 4.0, 10, 6.6)
    for r, c, t, y in [(3.1, '#EEF3F8', 'Fuera de alcance\n(aún con ayuda)', 6.0), (2.1, '#A9D3B6', 'Zona de desarrollo próximo\n(lo logra con ayuda)', 4.75), (1.0, P, 'Nivel real\n(lo logra solo)', 3.2)]:
        ax.add_patch(Circle((5, 3.2), r, fc=c, ec='white', lw=2))
    ax.text(5, 3.2, 'Nivel real\n(lo logra solo)', ha='center', va='center', fontsize=8.4, color='white', weight='bold')
    ax.text(5, 4.75, 'ZDP: lo logra con\nayuda de alguien más experto', ha='center', va='center', fontsize=8.0, color=INK, weight='bold')
    ax.text(5, 5.95, 'Fuera de alcance (incluso con ayuda)', ha='center', va='center', fontsize=7.8, color=MUTE)
    ax.text(5, .05, 'La ayuda ajustada (andamiaje) se retira a medida que el niño gana dominio', ha='center', fontsize=7.4, color=MUTE, style='italic')
    save(fig, 'zdp.png')

# U4 · Bronfenbrenner
if want('bronfenbrenner'):
    fig, ax = canvas(7.6, 4.4, 13, 7.4)
    cx, cy = 4.4, 3.7
    for r, c, t, yy in [(3.5, '#EEF3F8', 'Macrosistema', 6.85), (2.7, '#DCE7F0', 'Exosistema', 6.05), (1.95, '#C6D7E6', 'Mesosistema', 5.3), (1.2, '#8FB2CC', 'Microsistema', 4.55)]:
        ax.add_patch(Circle((cx, cy), r, fc=c, ec='white', lw=2)); ax.text(cx, yy, t, ha='center', fontsize=8.0, color=INK, weight='bold')
    ax.add_patch(Circle((cx, cy), .55, fc=A)); ax.text(cx, cy, 'Niña', ha='center', va='center', fontsize=8.4, color='white', weight='bold')
    ex = [('Microsistema', 'familia, aula, amigos, pediatra'), ('Mesosistema', 'relación familia-escuela\n(tutorías, deberes)'), ('Exosistema', 'trabajo de los padres,\nayuntamiento, servicios sociales'),
          ('Macrosistema', 'cultura, valores, leyes\n(p. ej., permisos parentales)'), ('Cronosistema', 'el tiempo: cambios vitales\ne históricos (divorcio, pandemia)')]
    for i, (t, d) in enumerate(ex):
        y = 6.6 - i * 1.35; ax.text(8.6, y, t, fontsize=8.6, weight='bold', color=P if i < 4 else A); ax.text(8.6, y - .2, d, fontsize=7.6, color=INK, va='top')
    arr(ax, (.6, .2), (8.2, .2), A, lw=2); ax.text(4.4, .35, 'cronosistema →', ha='center', fontsize=7.6, color=A)
    save(fig, 'bronfenbrenner.png')

# U5 · Fantz
if want('fantz'):
    fig, ax = canvas(7.4, 3.0, 12.4, 5)
    stims = [('Rostro\nesquemático', 'face'), ('Diana', 'target'), ('Texto\nimpreso', 'text'), ('Color liso', 'plain')]
    for i, (t, k) in enumerate(stims):
        x = 1.6 + i * 3.0; ax.add_patch(Circle((x, 3.0), 1.05, fc='white', ec=INK, lw=1.4))
        if k == 'face':
            ax.add_patch(Circle((x, 3.0), 1.05, fc='#F2E1D0', ec=INK, lw=1.4))
            for dx in (-.35, .35): ax.add_patch(Circle((x + dx, 3.3), .14, fc=INK))
            ax.plot([x - .35, x + .35], [2.55, 2.55], color=INK, lw=2)
        elif k == 'target':
            for r in (.9, .65, .4, .16): ax.add_patch(Circle((x, 3.0), r, fc=INK if r in (.9, .4) else 'white', ec='none'))
        elif k == 'text':
            for j in range(6): ax.plot([x - .7, x + .7 - (j % 3) * .2], [3.55 - j * .22, 3.55 - j * .22], color=INK, lw=1.6)
        else: ax.add_patch(Circle((x, 3.0), 1.05, fc=Y, ec=INK, lw=1.4))
        ax.text(x, 1.55, t, ha='center', va='top', fontsize=8.2, color=INK)
    ax.text(6.2, .15, 'Se mide cuánto tiempo mira el bebé cada estímulo (paradigma de preferencia visual)', ha='center', fontsize=7.6, color=MUTE)
    save(fig, 'fantz.png')

# U6 · edad-cohorte-momento
if want('edad-cohorte'):
    fig, ax = plt.subplots(figsize=(6.6, 3.6))
    coh = [2008, 2012, 2016, 2020]; mom = [2024, 2028, 2032, 2036]
    for i, c in enumerate(coh):
        for j, m in enumerate(mom):
            ax.text(j, i, f'{m - c} años', ha='center', va='center', fontsize=8.6, color=INK)
    ax.add_patch(Rectangle((-.45, -.4), .9, 3.8, fc='none', ec=P, lw=2.2)); ax.text(-.4, -.45, 'transversal', color=P, fontsize=8, weight='bold', va='bottom')
    ax.add_patch(Rectangle((-.45, 2.6), 3.9, .8, fc='none', ec=A, lw=2.2)); ax.text(3.45, 3.62, 'longitudinal', color=A, fontsize=8, weight='bold', ha='right', va='top')
    ax.plot([0, 1, 2, 3], [0, 1, 2, 3], color=G, lw=8, alpha=.25); ax.text(1.5, 1.5, 'desfase temporal (time-lag):\nsiempre 16 años', color=G, fontsize=7.6, weight='bold', ha='center', va='center', bbox=dict(fc='white', ec='none', pad=1))
    ax.set_xticks(range(4)); ax.set_xticklabels(mom); ax.set_yticks(range(4)); ax.set_yticklabels(coh)
    ax.set_xlabel('Momento de medida'); ax.set_ylabel('Cohorte (año de nacimiento)'); ax.set_xlim(-.6, 3.6); ax.set_ylim(3.75, -.8); clean(ax)
    note(ax, 'Edad = momento − cohorte: conocer dos determina la tercera. Esquema ilustrativo', -.2)
    save(fig, 'edad-cohorte.png')

# U6 · longitudinal acelerado
if want('acelerado'):
    fig, ax = plt.subplots(figsize=(6.6, 2.6))
    for i, (a0, c) in enumerate([(6, P), (10, G), (14, A)]):
        ax.plot([a0, a0 + 4], [i, i], color=c, lw=9, solid_capstyle='round'); ax.text(a0 + 2, i + .32, f'Cohorte {i + 1}: de {a0} a {a0 + 4} años', ha='center', fontsize=7.8, color=INK)
    ax.set_xlim(5, 19); ax.set_ylim(-.6, 2.8); ax.set_yticks([]); ax.set_xticks(range(6, 19, 2)); ax.set_xlabel('Edad (años)'); clean(ax); ax.spines['left'].set_visible(False)
    note(ax, 'En 4 años de estudio se cubre el tramo 6–18 años. Esquema ilustrativo', -.42)
    save(fig, 'acelerado.png')

# U7 · calendario prenatal
if want('prenatal'):
    fig, ax = plt.subplots(figsize=(7.8, 3.3))
    ax.axvspan(0, 2, color=MUTE, alpha=.15); ax.axvspan(2, 8, color=A, alpha=.13); ax.axvspan(8, 38, color=P, alpha=.07)
    for x, t in [(1, 'Germ.\n0–2'), (5, 'Embrionario\n3–8 sem.'), (23, 'Fetal\n9 sem.–nacimiento')]: ax.text(x, 7.6, t, ha='center', va='top', fontsize=8, weight='bold', color=INK)
    org = [('Sistema nervioso central', 3, 16, 38), ('Corazón', 3, 6, 9), ('Brazos y piernas', 4, 7, 9), ('Ojos', 4, 8, 38), ('Paladar', 6, 9, 12), ('Genitales externos', 7, 9, 38)]
    for i, (o, a, b, e) in enumerate(org):
        y = 5.4 - i * .95; ax.plot([a, b], [y, y], color=A, lw=8, solid_capstyle='butt'); ax.plot([b, e], [y, y], color=Y, lw=4, solid_capstyle='butt')
        ax.text(-.4, y, o, ha='right', va='center', fontsize=7.8, color=INK)
    ax.plot([], [], color=A, lw=8, label='máxima vulnerabilidad: malformaciones estructurales'); ax.plot([], [], color=Y, lw=4, label='vulnerabilidad menor: defectos funcionales')
    ax.set_xlim(0, 38); ax.set_ylim(-.4, 7.8); ax.set_yticks([]); ax.set_xlabel('Semanas desde la concepción'); ax.legend(frameon=False, fontsize=7.4, loc='upper center', bbox_to_anchor=(.45, -.2), ncol=2); clean(ax); ax.spines['left'].set_visible(False)
    note(ax, 'Esquema ilustrativo con periodos aproximados', -.4)
    save(fig, 'prenatal.png')

# U7 · TEAF
if want('teaf'):
    fig, ax = plt.subplots(figsize=(5.2, 2.8))
    ax.bar([0, 1], [7.7, 19.8], color=[P, A], width=.55)
    ax.errorbar([0], [7.7], yerr=[[7.7 - 4.9], [11.7 - 7.7]], color=INK, capsize=5, lw=1.4)
    for x, v in [(0, '7,7'), (1, '19,8')]: ax.text(x + .32, float(v.replace(',', '.')), v, va='center', fontsize=9, weight='bold', color=INK)
    ax.set_xticks([0, 1]); ax.set_xticklabels(['Mundo', 'Región Europea\nde la OMS']); ax.set_ylabel('Casos por 1.000'); clean(ax)
    note(ax, 'Prevalencia estimada de TEAF en niños y jóvenes; barra: IC 95 % (Lange et al., 2017)', -.3)
    save(fig, 'teaf.png')

# U8 · reflejos
if want('reflejos'):
    rf = [('Marcha automática', 2, 2), ('Prensión palmar', 3, 4), ('Moro', 4, 6), ('Tónico-cervical asimétrico', 4, 6), ('Natación', 4, 6), ('Babinski', 8, 24)]
    fig, ax = plt.subplots(figsize=(6.6, 2.9))
    for i, (r, a, b) in enumerate(rf):
        ax.plot([0, a], [i, i], color=P, lw=9, solid_capstyle='butt')
        if b > a: ax.plot([a, b], [i, i], color=P, lw=9, alpha=.25, solid_capstyle='butt')
    ax.set_yticks(range(len(rf))); ax.set_yticklabels([r[0] for r in rf], fontsize=8); ax.set_xticks([0, 3, 6, 9, 12, 18, 24])
    ax.set_xlabel('Edad (meses)'); clean(ax); note(ax, 'Edades aproximadas; la zona clara indica el intervalo en que suele desaparecer', -.3)
    save(fig, 'reflejos.png')

# U9 · abismo visual
if want('abismo'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.6, 2.9), gridspec_kw={'width_ratios': [1.25, 1]})
    a1.set_xlim(0, 10); a1.set_ylim(0, 5); a1.axis('off')
    a1.add_patch(Rectangle((.3, 2.6), 4.2, .3, fc=P)); a1.add_patch(Rectangle((5.5, .3), 4.2, .3, fc=P))
    for x in np.arange(.3, 4.5, .42): a1.add_patch(Rectangle((x, 2.6), .21, .3, fc='white'))
    for x in np.arange(5.5, 9.7, .42): a1.add_patch(Rectangle((x, .3), .21, .3, fc='white'))
    a1.plot([.3, 9.7], [3.1, 3.1], color=T, lw=2.5); a1.add_patch(Rectangle((4.5, 2.9), 1.0, .5, fc=MUTE))
    a1.text(2.4, 3.4, 'lado «superficial»', ha='center', fontsize=7.8, color=INK); a1.text(7.6, 3.4, 'lado «profundo»', ha='center', fontsize=7.8, color=INK)
    a1.text(5.0, 3.6, 'plataforma\ncentral', ha='center', fontsize=7.2, color=MUTE); a1.text(5.0, 4.6, 'vidrio resistente sobre ambos lados', ha='center', fontsize=7.4, color=T)
    v = [9, 27, 3]; lb = ['no salieron\nde la plataforma', 'gatearon al lado\nsuperficial', 'de ellos, también\nal lado profundo']
    a2.barh(range(3), v, color=[MUTE, G, A]); a2.set_yticks(range(3)); a2.set_yticklabels(lb, fontsize=7.6); a2.invert_yaxis()
    for i, x in enumerate(v): a2.text(x + .6, i, str(x), va='center', fontsize=8.6, weight='bold', color=INK)
    a2.set_xlim(0, 36); a2.set_xlabel('Bebés (de 36)'); clean(a2)
    note(a1, 'Gibson y Walk (1960); cifras citadas del original', -.08)
    save(fig, 'abismo.png')

# U9 · estrechamiento perceptivo
if want('estrechamiento'):
    fig, ax = plt.subplots(figsize=(6.0, 2.9)); x = [0, 1, 2]
    ax.plot(x, [95, 70, 20], '-o', color=A, lw=2.4, label='contraste no nativo (bebés anglófonos)')
    ax.plot(x, [95, 95, 95], '--o', color=P, lw=2.0, label='contraste de la lengua materna')
    ax.set_xticks(x); ax.set_xticklabels(['6–8 meses', '8–10 meses', '10–12 meses']); ax.set_ylim(0, 110); ax.set_yticks([]); ax.set_ylabel('Bebés que discriminan')
    ax.legend(frameon=False, fontsize=7.6, loc='lower left'); clean(ax)
    note(ax, 'Curva esquemática basada en Werker y Tees (1984); no son porcentajes exactos', -.28)
    save(fig, 'estrechamiento.png')

# U9 · Kuhl et al. 2003
if want('kuhl'):
    fig, ax = canvas(7.4, 3.0, 12.4, 5)
    box(ax, 1.7, 2.6, 2.8, 1.3, 'Bebés de EE. UU.\nde 9 meses\n12 sesiones de 25 min', INK, 8.0)
    cs = [('Hablantes de mandarín\nen vivo', G, 4.3, 'recuperan la discriminación\ndel contraste del mandarín'), ('Mandarín grabado\n(vídeo o solo audio)', Y, 2.6, 'sin efecto'), ('Control: sesiones\nen inglés', MUTE, .9, 'sin efecto')]
    for t, c, y, r in cs:
        box(ax, 5.6, y, 3.4, 1.05, t, c, 8.0, tc='white' if c != Y else INK); arr(ax, (3.15, 2.6), (3.85, y)); arr(ax, (7.35, y), (8.2, y), MUTE)
        ax.text(8.3, y, r, va='center', fontsize=7.8, color=INK, weight='bold' if c == G else 'normal')
    ax.text(6.2, .05, 'Kuhl, Tsao y Liu (2003). Esquema del diseño', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'kuhl.png')

# U10 · ventanas OMS
if want('hitos-oms'):
    fig, ax = plt.subplots(figsize=(6.6, 2.4))
    for i, (t, a, b, c) in enumerate([('Sentarse sin apoyo', 3.8, 9.2, P), ('Andar solo', 8.2, 17.6, A)]):
        ax.plot([a, b], [i, i], color=c, lw=12, solid_capstyle='round'); ax.text(a - .3, i, f'{a:.1f}'.replace('.', ','), ha='right', va='center', fontsize=8.4); ax.text(b + .3, i, f'{b:.1f}'.replace('.', ','), ha='left', va='center', fontsize=8.4)
    ax.set_yticks([0, 1]); ax.set_yticklabels(['Sentarse sin apoyo', 'Andar solo']); ax.set_ylim(-.6, 1.6); ax.set_xlim(0, 20); ax.set_xticks(range(0, 21, 3)); ax.set_xlabel('Edad (meses)'); clean(ax)
    note(ax, 'Ventana entre los percentiles 1 y 99 (OMS, 2006; 816 niños de 5 países)', -.42)
    save(fig, 'hitos-oms.png')

# U10 · prensión
if want('prension'):
    fig, ax = canvas(7.6, 2.4, 13, 4)
    st = [('Prealcance', 'recién nacido'), ('Alcance guiado\npor la vista', '≈3–4 meses'), ('Prensión\ncubito-palmar', 'dedos contra la\npalma, lado del meñique'), ('Prensión\npalmar', 'toda la mano'), ('Pinza\ninferior', 'pulgar y lateral\ndel índice'), ('Pinza\nsuperior', 'yemas del pulgar\ne índice, ≈9–12 meses')]
    for i, (t, d) in enumerate(st):
        x = 1.1 + i * 2.15; c = [MUTE, Y, G, T, P, A][i]
        box(ax, x, 2.6, 1.85, 1.0, t, c, 7.8, tc='white' if c != Y else INK); ax.text(x, 1.8, d, ha='center', va='top', fontsize=6.9, color=INK)
        if i < 5: arr(ax, (x + .95, 2.6), (x + 1.2, 2.6))
    note(ax, 'Secuencia aproximada; las edades varían entre niños', -.02)
    save(fig, 'prension.png')

# U11 · tendencia secular
if want('secular'):
    yrs = np.array([1977, 2013]); d = -0.024 * (yrs - 1977)
    fig, ax = plt.subplots(figsize=(6.0, 2.7))
    ax.plot(yrs, d, color=A, lw=2.6); ax.plot(yrs, d, 'o', color=A)
    ax.text(2013, d[-1] - .05, '≈ −0,86 años', ha='right', va='top', fontsize=8.6, color=INK, weight='bold')
    ax.set_ylim(-1.1, .2); ax.set_yticks([0, -.5, -1]); ax.set_yticklabels(['0', '−0,5', '−1']); ax.set_xlabel('Año'); ax.set_ylabel('Cambio en la edad de\ninicio de la telarquia (años)'); ax.axhline(0, color=MUTE, lw=.8)
    ax.text(1979, .06, '−0,24 años por década', fontsize=8.2, color=A); clean(ax)
    note(ax, 'Cambio acumulado según la pendiente media de Eckert-Lind et al. (2020)', -.32)
    save(fig, 'secular.png')

# U11 · sistemas duales
if want('sistemas-duales'):
    a = np.linspace(8, 26, 300)
    rew = .25 + .7 * np.exp(-((a - 15.5) / 3.2) ** 2); ctl = .15 + .8 / (1 + np.exp(-(a - 18) / 2.4))
    fig, ax = plt.subplots(figsize=(6.2, 2.9))
    ax.plot(a, rew, color=A, lw=2.4, label='sistema socioemocional (recompensa)'); ax.plot(a, ctl, color=P, lw=2.4, label='sistema de control cognitivo')
    ax.fill_between(a, rew, ctl, where=rew > ctl, color=A, alpha=.12); ax.text(15.3, .55, 'desfase:\nmás riesgo', ha='center', fontsize=8, color=A, weight='bold')
    ax.set_xlabel('Edad (años)'); ax.set_xticks([8, 10, 12, 14, 16, 18, 20, 22, 24, 26]); ax.set_yticks([]); ax.set_ylabel('Nivel relativo'); ax.legend(frameon=False, fontsize=7.4, loc='upper center', bbox_to_anchor=(.5, -.25), ncol=2); clean(ax)
    note(ax, 'Esquema ilustrativo del modelo de sistemas duales (Steinberg, 2008)', -.52)
    save(fig, 'sistemas-duales.png')

# U12 · subestadios sensoriomotores
if want('sensoriomotor'):
    rows = [('1', '0–1 mes', 'Ejercicio de los reflejos', 'succiona todo lo que roza su boca'), ('2', '1–4 meses', 'Reacciones circulares primarias', 'repite chuparse el dedo (propio cuerpo)'),
            ('3', '4–8 meses', 'Reacciones circulares secundarias', 'agita el sonajero para oírlo'), ('4', '8–12 meses', 'Coordinación de esquemas secundarios', 'aparta un cojín para coger el juguete; error A-no-B'),
            ('5', '12–18 meses', 'Reacciones circulares terciarias', 'tira objetos desde distintas alturas para ver qué pasa'), ('6', '18–24 meses', 'Representación mental', 'imitación diferida y juego simbólico')]
    fig, ax = canvas(8.0, 3.5, 14, 7.4)
    for x, t in [(.5, 'Sub.'), (1.9, 'Edad ≈'), (5.4, 'Logro'), (10.9, 'Ejemplo')]: ax.text(x, 6.95, t, fontsize=8.6, weight='bold', color=P, ha='center' if x < 3 else 'center')
    for i, (n, e, l, ej) in enumerate(rows):
        y = 6.1 - i * 1.0; ax.add_patch(Rectangle((0, y - .45), 14, .9, fc='#EEF3F8' if i % 2 == 0 else 'white', ec='none'))
        if n == '4': ax.add_patch(Rectangle((0, y - .45), 14, .9, fc='none', ec=A, lw=1.6))
        ax.text(.5, y, n, ha='center', va='center', fontsize=9, weight='bold', color=INK); ax.text(1.9, y, e, ha='center', va='center', fontsize=8, color=INK)
        ax.text(5.4, y, l, ha='center', va='center', fontsize=8, color=INK, weight='bold'); ax.text(10.9, y, ej, ha='center', va='center', fontsize=7.6, color=INK)
    save(fig, 'sensoriomotor.png')

# U12 · conservación
if want('conservacion'):
    tp = [('Número', 6, 7), ('Masa (sustancia)', 7, 8), ('Peso', 9, 10), ('Volumen', 11, 12)]
    fig, ax = plt.subplots(figsize=(6.2, 2.6))
    for i, (t, a, b) in enumerate(tp): ax.plot([a, b], [i, i], color=[P, G, Y, A][i], lw=10, solid_capstyle='round')
    ax.set_yticks(range(4)); ax.set_yticklabels([t[0] for t in tp]); ax.invert_yaxis(); ax.set_xlim(5, 13); ax.set_xlabel('Edad aproximada de adquisición (años)'); clean(ax)
    ax.text(9.6, .6, 'decalaje horizontal:\nmisma estructura,\ndistintos contenidos', fontsize=7.6, color=INK)
    note(ax, 'Edades aproximadas, variables entre manuales y niños', -.38)
    save(fig, 'conservacion.png')

# U13 · Baillargeon y Wynn
if want('baillargeon-wynn'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(8.0, 3.0))
    for a in (a1, a2): a.set_xlim(0, 10); a.set_ylim(0, 6); a.axis('off')
    a1.text(5, 5.6, 'Puente levadizo (Baillargeon, 1987)', ha='center', fontsize=8.6, weight='bold', color=P)
    for x0, t, c, ang in [(0.3, 'Posible: la pantalla\nse detiene en la caja', G, 70), (5.3, 'Imposible: la pantalla\n«atraviesa» la caja', A, 175)]:
        a1.plot([x0, x0 + 4.4], [1.8, 1.8], color=INK, lw=1.5)
        a1.add_patch(Rectangle((x0 + 2.6, 1.8), .7, .7, fc=Y, alpha=.9 if c == G else .35, ls='--' if c == A else '-', ec=INK))
        r = np.deg2rad(ang); a1.plot([x0 + 1.8, x0 + 1.8 + 1.8 * np.cos(r)], [1.8, 1.8 + 1.8 * np.sin(r)], color=c, lw=4)
        a1.text(x0 + 2.2, 1.2, t, ha='center', va='top', fontsize=7.4, color=INK)
    a2.text(5, 5.6, '1 + 1 (Wynn, 1992)', ha='center', fontsize=8.6, weight='bold', color=P)
    steps = [('1 muñeco', 1), ('pantalla +\notro muñeco', 1), ('posible:\n2', 2), ('imposible:\n1', 1)]
    for i, (t, n) in enumerate(steps):
        x = 1.2 + i * 2.5; a2.add_patch(Rectangle((x - .9, 2.0), 1.8, 1.9, fc='#EEF3F8', ec=MUTE))
        for k in range(n): a2.add_patch(Circle((x - .35 * (n - 1) + .7 * k, 2.8), .28, fc=A if i == 3 else P))
        if i == 1: a2.add_patch(Rectangle((x - .9, 2.0), 1.8, 1.2, fc=MUTE, alpha=.7))
        a2.text(x, 1.7, t, ha='center', va='top', fontsize=7.4, color=INK)
    a2.text(5, .3, 'Los bebés de 5 meses miran más el resultado imposible', ha='center', fontsize=7.4, color=MUTE)
    a1.text(5, .3, 'Los bebés miran más el evento imposible', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'baillargeon-wynn.png')

# U13 · falsa creencia
if want('falsa-creencia'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(7.8, 2.9), gridspec_kw={'width_ratios': [1.3, 1]})
    a1.set_xlim(0, 10); a1.set_ylim(0, 6); a1.axis('off')
    sc = ['Sally guarda la\ncanica en la cesta', 'Sally se va', 'Anne la cambia\na la caja', '¿Dónde buscará\nSally?']
    for i, t in enumerate(sc):
        x = 1.25 + i * 2.5; a1.add_patch(FancyBboxPatch((x - 1.1, 1.6), 2.2, 3.4, boxstyle='round,pad=0.02,rounding_size=0.15', fc='#EEF3F8', ec=MUTE))
        a1.text(x, 1.35, t, ha='center', va='top', fontsize=7.0, color=INK); a1.text(x, 4.65, str(i + 1), ha='center', fontsize=9, weight='bold', color=P)
        a1.add_patch(Rectangle((x - .8, 2.0), .6, .45, fc=Y, ec=INK)); a1.add_patch(Rectangle((x + .2, 2.0), .6, .6, fc=V, ec=INK, alpha=.8))
        if i < 2: a1.add_patch(Circle((x - .5, 2.6), .12, fc=A))
        elif i >= 2: a1.add_patch(Circle((x + .5, 2.75), .12, fc=A))
    a = np.linspace(3, 5.5, 100); p = 1 / (1 + np.exp(-(a - 4.0) * 2.6))
    a2.plot(a, p, color=P, lw=2.4); a2.axhline(.5, color=MUTE, ls='--', lw=1); a2.text(5.4, .53, 'azar', fontsize=7.4, color=MUTE, ha='right')
    a2.set_xlabel('Edad (años)'); a2.set_ylabel('Respuestas correctas'); a2.set_yticks([0, .5, 1]); a2.set_yticklabels(['0', '50 %', '100 %']); a2.set_xticks([3, 4, 5]); clean(a2)
    note(a2, 'Tendencia esquemática (Wellman et al., 2001)', -.32)
    save(fig, 'falsa-creencia.png')

# U14 · Saffran
if want('saffran'):
    fig, ax = canvas(7.8, 2.6, 14, 4.2)
    syl = ['bi', 'da', 'ku', 'pa', 'do', 'ti', 'go', 'la', 'bu', 'bi', 'da', 'ku']
    for i, s in enumerate(syl):
        x = .7 + i * 1.08; c = [P, G, Y, P][i // 3]
        box(ax, x, 3.0, .92, .6, s, c, 8.6, tc='white' if c != Y else INK)
        if i < 11:
            p = '0,33' if i % 3 == 2 else '1,0'; ax.text(x + .54, 2.35, p, ha='center', fontsize=7.0, color=A if p == '0,33' else INK, weight='bold')
    ax.text(.2, 1.7, 'Probabilidad de transición: 1,0 dentro de una «palabra»; 0,33 entre «palabras» (ejemplo con sílabas inventadas)', fontsize=7.6, color=INK)
    ax.text(.2, .9, 'Tras 2 minutos de escucha, los bebés de 8 meses distinguen «palabras» de «no palabras» y de «parte-palabras»', fontsize=7.6, color=INK, weight='bold')
    ax.text(.2, .3, 'Esquema del diseño de Saffran, Aslin y Newport (1996); sílabas ilustrativas', fontsize=7.2, color=MUTE)
    save(fig, 'saffran.png')

# U14 · hitos del lenguaje
if want('lenguaje'):
    ev = [(0, 'Llanto', .3), (2, 'Arrullo\n≈2 m', -.3), (6.5, 'Balbuceo\ncanónico\n≈6–7 m', .3), (10.5, 'Atención\nconjunta\n≈9–12 m', -.3), (12.5, 'Primeras palabras\n(holofrase) ≈12 m', 1.25),
          (18, 'Explosión del\nvocabulario ≈18 m', -1.2), (21.5, 'Habla\ntelegráfica\n≈18–24 m', .3), (36, 'Sobrerregularización,\npreguntas, negación', -.3), (60, 'Conciencia\nmetalingüística', .3)]
    fig, ax = plt.subplots(figsize=(8.0, 3.2)); ax.plot([0, 64], [0, 0], color=MUTE, lw=2)
    for i, (m, t, yy) in enumerate(ev):
        c = [P, G, Y, V, A, T, P, G, Y][i]; ax.plot([m], [0], 'o', color=c, ms=8)
        if abs(yy) > 1: ax.plot([m, m], [0, yy * .85], color=c, lw=1)
        ax.text(m, yy, t, ha='center', va='bottom' if yy > 0 else 'top', fontsize=7.0, color=INK, bbox=dict(fc='white', ec='none', pad=.5))
    ax.set_ylim(-1.7, 1.9); ax.set_yticks([]); ax.set_xticks([0, 6, 12, 18, 24, 36, 48, 60]); ax.set_xlabel('Edad (meses)'); clean(ax); ax.spines['left'].set_visible(False)
    note(ax, 'Edades aproximadas: hay gran variabilidad entre niños', -.28)
    save(fig, 'lenguaje.png')

# U15 · Marcia
if want('marcia'):
    fig, ax = canvas(5.2, 3.6, 9, 6.4)
    cells = [(2.9, 4.0, 'LOGRO', G, 'exploró y se\ncomprometió'), (6.5, 4.0, 'HIPOTECADA', Y, 'se comprometió\nsin explorar'), (2.9, 1.9, 'MORATORIA', P, 'explora, aún\nsin compromiso'), (6.5, 1.9, 'DIFUSA', MUTE, 'ni explora ni\nse compromete')]
    for x, y, t, c, d in cells: box(ax, x, y, 3.3, 1.8, t + '\n\n' + d, c, 8.0, tc='white' if c != Y else INK)
    ax.set_xlim(-.7, 9)
    ax.text(2.9, 5.6, 'Exploración: sí', ha='center', fontsize=8, weight='bold', color=INK); ax.text(6.5, 5.6, 'Exploración: no', ha='center', fontsize=8, weight='bold', color=INK)
    ax.text(.55, 4.0, 'Compromiso:\nsí', ha='center', va='center', fontsize=7.8, weight='bold', color=INK); ax.text(.55, 1.9, 'Compromiso:\nno', ha='center', va='center', fontsize=7.8, weight='bold', color=INK)
    save(fig, 'marcia.png')

# U15 · apego
if want('apego'):
    fig, ax = plt.subplots(figsize=(6.6, 2.9)); w = .36; x = np.arange(4)
    ain = [70, 20, 10, 0]; mad = [51.6, 14.7, 10.2, 23.5]
    ax.bar(x - w / 2, ain, w, color=MUTE, label='Ainsworth et al. (1978), Baltimore (≈)'); ax.bar(x + w / 2, mad, w, color=P, label='Madigan et al. (2023), 20.720 díadas')
    for i, v in enumerate(mad): ax.text(i + w / 2, v + 1.5, pct(v), ha='center', fontsize=7.8, color=INK, weight='bold')
    for i, v in enumerate(ain[:3]): ax.text(i - w / 2, v + 1.5, '≈' + str(v) + ' %', ha='center', fontsize=7.4, color=MUTE)
    ax.text(3 - w / 2, 2, 'no existía\nla categoría', ha='center', fontsize=6.6, color=MUTE)
    ax.set_xticks(x); ax.set_xticklabels(['B seguro', 'A evitativo', 'C resistente', 'D desorganizado']); ax.set_ylabel('%'); ax.set_ylim(0, 82); ax.legend(frameon=False, fontsize=7.6); clean(ax)
    save(fig, 'apego.png')

# U16 · Kohlberg
if want('kohlberg'):
    fig, ax = canvas(7.6, 3.5, 13, 6.4)
    lv = [('Preconvencional', G, ['1 · Castigo y obediencia', '2 · Hedonismo instrumental']), ('Convencional', P, ['3 · «Buen chico / buena chica»', '4 · Ley y orden']), ('Postconvencional', V, ['5 · Contrato social', '6 · Principios éticos universales'])]
    for i, (n, c, st) in enumerate(lv):
        x = 2.1 + i * 4.4; y0 = .75 + i * 1.15
        box(ax, x, y0 + 2.4, 3.9, .7, n, c, 9.2)
        for j, s in enumerate(st): box(ax, x, y0 + 1.45 - j * .85, 3.9, .65, s, '#FFFFFF', 8.0, tc=INK, bold=False, ec=c)
    ax.text(.2, .2, 'Secuencia invariante, sin saltos; el estadio 5 es poco frecuente y solo aparece en la adultez (Colby et al., 1983)', fontsize=7.2, color=MUTE)
    save(fig, 'kohlberg.png')

# U16 · Maccoby y Martin
if want('maccoby'):
    fig, ax = canvas(5.2, 3.6, 9, 6.4)
    cells = [(2.9, 4.0, 'AUTORITATIVO\n(democrático)', G), (6.5, 4.0, 'AUTORITARIO', A), (2.9, 1.9, 'PERMISIVO\n(indulgente)', Y), (6.5, 1.9, 'NEGLIGENTE', MUTE)]
    for x, y, t, c in cells: box(ax, x, y, 3.3, 1.8, t, c, 9.0, tc='white' if c != Y else INK)
    ax.set_xlim(-.7, 9)
    ax.text(2.9, 5.6, 'Afecto: alto', ha='center', fontsize=8, weight='bold', color=INK); ax.text(6.5, 5.6, 'Afecto: bajo', ha='center', fontsize=8, weight='bold', color=INK)
    ax.text(.55, 4.0, 'Exigencia:\nalta', ha='center', va='center', fontsize=7.8, weight='bold', color=INK); ax.text(.55, 1.9, 'Exigencia:\nbaja', ha='center', va='center', fontsize=7.8, weight='bold', color=INK)
    save(fig, 'maccoby.png')
