"""Figuras propias del temario de Psicología del Aprendizaje. python3 tools/figuras.py → img/*"""
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


def axes(w, h):
    fig, ax = plt.subplots(figsize=(w, h)); clean(ax); return fig, ax


# U1 · hitos de la disciplina
if want('modelos-aprendizaje'):
    ev = [(1898, 'Thorndike', 'cajas problema;\nley del efecto'), (1904, 'Pavlov', 'Nobel (digestión);\nreflejos condicionados'), (1913, 'Watson', 'manifiesto\nconductista'), (1917, 'Köhler', 'insight en\nchimpancés'),
          (1938, 'Skinner', 'conducta\noperante'), (1948, 'Tolman', 'mapas\ncognitivos'), (1961, 'Bandura', 'muñeco Bobo;\naprendizaje social'), (1972, 'Rescorla y\nWagner', 'error de\npredicción')]
    fig, ax = canvas(7.8, 3.1, 13.6, 5)
    xs = np.linspace(.8, 12.8, len(ev)); cols = [P, A, G, Y, V, T, '#8A6A50', P]
    ax.plot([.3, 13.3], [2.5, 2.5], color=MUTE, lw=2)
    for i, ((yr, a, d), x) in enumerate(zip(ev, xs)):
        up = i % 2 == 0; c = cols[i]
        ax.plot([x], [2.5], 'o', color=c, ms=9)
        ax.text(x, 2.05 if up else 2.9, str(yr), ha='center', va='top' if up else 'bottom', fontsize=8.6, color=c, weight='bold')
        ax.text(x, 3.15 if up else 1.85, a, ha='center', va='bottom' if up else 'top', fontsize=8.0, color=INK, weight='bold')
        ax.text(x, 4.1 if up else .85, d, ha='center', va='bottom' if up else 'top', fontsize=7.4, color=MUTE)
    save(fig, 'modelos-aprendizaje.png')

# U2 · habituación
if want('habituacion'):
    fig, ax = axes(6.4, 3.0)
    t1 = np.arange(1, 11); r1 = 20 + 75 * np.exp(-(t1 - 1) / 2.6)
    ax.plot(t1, r1, '-o', color=P, ms=4.5, lw=2, label='Estímulo repetido')
    ax.plot([11], [70], 'o', color=A, ms=8); ax.annotate('Deshabituación:\nestímulo distinto e intenso', (11, 70), (7.6, 88), fontsize=8, color=A, arrowprops=dict(arrowstyle='-|>', color=A))
    t2 = np.arange(12, 16); r2 = 35 + 30 * np.exp(-(t2 - 12) / 1.6)
    ax.plot(t2, r2, '-o', color=P, ms=4.5, lw=2)
    ax.axvspan(15.5, 17.5, color=SOFT); ax.text(16.5, 92, 'descanso', ha='center', fontsize=8, color=MUTE)
    t3 = np.arange(18, 22); r3 = 25 + 50 * np.exp(-(t3 - 18) / 2)
    ax.plot(t3, r3, '-o', color=G, ms=4.5, lw=2); ax.annotate('Recuperación\nespontánea', (18, 75), (19.3, 88), fontsize=8, color=G, arrowprops=dict(arrowstyle='-|>', color=G))
    ax.set_ylim(0, 105); ax.set_xticks([]); ax.set_xlabel('Ensayos'); ax.set_ylabel('Magnitud de la respuesta')
    note(ax, y=-.16); save(fig, 'habituacion.png')

# U2 · proceso dual
if want('proceso-dual'):
    fig, axs = plt.subplots(1, 2, figsize=(7.6, 2.9), sharey=True)
    n = np.arange(1, 13)
    for ax, (tt, s_amp) in zip(axs, [('Estímulo débil', 8), ('Estímulo intenso', 55)]):
        clean(ax)
        H = -40 * (1 - np.exp(-(n - 1) / 3)); S = s_amp * np.exp(-(n - 1) / 4) * (n > 0); net = 50 + H + S
        ax.plot(n, 50 + H, '--', color=P, lw=1.6, label='Habituación')
        ax.plot(n, 50 + S, '--', color=A, lw=1.6, label='Sensibilización')
        ax.plot(n, net, '-o', color=INK, ms=3.5, lw=2.2, label='Conducta observada')
        ax.axhline(50, color=MUTE, lw=.8, ls=':'); ax.set_title(tt); ax.set_xticks([]); ax.set_xlabel('Ensayos')
    axs[0].set_ylabel('Respuesta'); axs[1].legend(fontsize=7.6, frameon=False, loc='upper right')
    note(axs[0], 'Esquema ilustrativo, no datos (Groves y Thompson, 1970)', -.18); save(fig, 'proceso-dual.png')

# U2 · proceso oponente
if want('proceso-oponente'):
    fig, axs = plt.subplots(1, 2, figsize=(7.6, 2.8), sharey=True)
    t = np.linspace(0, 10, 400); on = (t > 1) & (t < 5)
    def curve(ka, kb, tb):
        a = np.where(on, 1, 0) * 1.0
        b = np.zeros_like(t)
        for i in range(1, len(t)):
            dt = t[i] - t[i - 1]; target = kb if on[i] else 0
            b[i] = b[i - 1] + (target - b[i - 1]) * dt / tb
        return a * ka - b
    for ax, (tt, kb, tb) in zip(axs, [('Primeras exposiciones', .35, 1.2), ('Tras muchas exposiciones', .85, 2.2)]):
        clean(ax); y = curve(1, kb, tb)
        ax.fill_between(t, 0, y, where=y > 0, color=P, alpha=.25); ax.fill_between(t, 0, y, where=y < 0, color=A, alpha=.3)
        ax.plot(t, y, color=INK, lw=2); ax.axhline(0, color=MUTE, lw=.8)
        ax.axvspan(1, 5, ymin=0, ymax=.04, color=Y); ax.set_title(tt); ax.set_xticks([]); ax.set_xlabel('Tiempo (barra amarilla: estímulo)')
        ax.text(3, .9 if kb < .5 else .62, 'a − b', ha='center', fontsize=8.5, color=P, weight='bold')
        ax.text(6.8, -kb * .55 - .12, 'post-reacción (b)', ha='center', fontsize=8, color=A)
    axs[0].set_ylabel('Estado afectivo'); axs[0].set_yticks([]); axs[0].set_ylim(-1, 1.15)
    note(axs[0], 'Esquema ilustrativo, no datos (Solomon y Corbit, 1974)', -.2); save(fig, 'proceso-oponente.png')

# U3 · Watson y Rayner
if want('albert'):
    fig, ax = canvas(7.8, 2.5, 13, 4.2)
    st = [('Prueba inicial', '≈ 9 meses\nrata, conejo, perro,\nmáscaras: sin miedo', P), ('Condicionamiento', '≈ 11 meses\nrata + ruido fuerte\n(golpe a una barra)', A), ('Pruebas posteriores', 'conejo, perro, abrigo de\npiel, algodón, máscara;\ncambio de habitación', G), ('Final', 'la madre lo retira:\nnunca se\ndescondicionó', V)]
    for i, (h, d, c) in enumerate(st):
        x = 1.7 + i * 3.2; box(ax, x, 3.7, 2.8, .7, h, c, 9); ax.text(x, 3.05, d, ha='center', va='top', fontsize=7.8, color=INK)
        if i < 3: arr(ax, (x + 1.45, 3.7), (x + 1.75, 3.7))
    box(ax, 6.5, .55, 11.4, 1.0, 'Identidad en disputa: Douglas Merritte (Beck et al., 2009) o William Albert Barger (Powell et al., 2014)', SOFT, 8.4, tc=INK, bold=False, ec=MUTE)
    save(fig, 'albert.png')

# U3 · adquisición y extinción
if want('adq-ext'):
    fig, ax = axes(6.4, 3.0)
    a = np.arange(1, 11); ya = 90 * (1 - np.exp(-(a - 1) / 2.2))
    e = np.arange(11, 19); ye = ya[-1] * np.exp(-(e - 10) / 2.0)
    s = np.arange(21, 24); ys = [45, 25, 12]
    r = np.arange(26, 31); yr = 90 * (1 - np.exp(-(r - 25) / 1.0))
    ax.plot(a, ya, '-o', color=P, ms=3.8, lw=2); ax.plot(e, ye, '-o', color=A, ms=3.8, lw=2); ax.plot(s, ys, '-o', color=G, ms=3.8, lw=2); ax.plot(r, yr, '-o', color=P, ms=3.8, lw=2)
    for x0, x1 in [(19.2, 20.8), (24.2, 25.4)]: ax.axvspan(x0, x1, color=SOFT)
    for x, t, c in [(5.5, 'Adquisición\n(EC + EI)', P), (14.5, 'Extinción\n(EC solo)', A), (22, 'Recuperación\nespontánea', G), (28, 'Readquisición\n(más rápida)', P)]:
        ax.text(x, 104, t, ha='center', fontsize=7.8, color=c, weight='bold')
    ax.set_ylim(0, 118); ax.set_xticks([]); ax.set_xlabel('Ensayos (bandas: descanso)'); ax.set_ylabel('Fuerza de la RC')
    note(ax, y=-.16); save(fig, 'adq-ext.png')

# U3 · relaciones temporales
if want('relaciones-temporales'):
    fig, ax = canvas(6.6, 3.4, 12, 9)
    rows = [('Demorado', (2, 6), (5, 6.6)), ('De huella', (2, 3.4), (5, 5.6)), ('Simultáneo', (3, 5.5), (3, 5.5)), ('Hacia atrás', (6, 8.5), (3, 5))]
    for i, (n, ec, ei) in enumerate(rows):
        y = 7.6 - i * 2.0
        ax.text(.1, y + .2, n, fontsize=9, color=INK, weight='bold', va='center')
        ax.add_patch(Rectangle((ec[0] + .6, y + .35), ec[1] - ec[0], .45, color=P)); ax.add_patch(Rectangle((ei[0] + .6, y - .35), ei[1] - ei[0], .45, color=A))
        ax.plot([2.4, 11.6], [y - .45, y - .45], color=MUTE, lw=.6)
    ax.text(11.6, 8.7, 'EC', color=P, weight='bold', ha='right', fontsize=9); ax.text(11.6, 8.25, 'EI', color=A, weight='bold', ha='right', fontsize=9)
    ax.text(6, .1, 'Eficacia aproximada: demorado > huella > simultáneo > hacia atrás', ha='center', fontsize=8, color=INK, style='italic')
    save(fig, 'relaciones-temporales.png')

# U4 · espacio de contingencia
if want('contingencia'):
    fig, ax = plt.subplots(figsize=(4.4, 4.0)); clean(ax)
    ax.fill_between([0, 1], [0, 1], [1, 1], color=P, alpha=.15); ax.fill_between([0, 1], [0, 0], [0, 1], color=A, alpha=.15)
    ax.plot([0, 1], [0, 1], color=INK, lw=1.6, ls='--')
    ax.text(.22, .8, 'Contingencia positiva\n→ excitación', fontsize=8.6, color=P, weight='bold', ha='center')
    ax.text(.75, .2, 'Contingencia negativa\n→ inhibición', fontsize=8.6, color=A, weight='bold', ha='center')
    ax.text(.6, .66, 'sin contingencia\n(ΔP = 0)', fontsize=8, color=INK, rotation=42, ha='center')
    ax.set_xlim(0, 1); ax.set_ylim(0, 1); ax.set_xlabel('p(EI | sin EC)'); ax.set_ylabel('p(EI | EC)')
    note(ax, 'Esquema basado en Rescorla (1968)', -.2); save(fig, 'contingencia.png')

# U4 · bloqueo de Kamin
if want('bloqueo'):
    fig, ax = canvas(7.6, 2.8, 13, 5)
    hdr = ['Grupo', 'Fase 1', 'Fase 2', 'Prueba', 'Resultado esperado']; xs = [1.3, 3.9, 6.4, 8.7, 11.4]
    for x, h in zip(xs, hdr): ax.text(x, 4.5, h, ha='center', fontsize=9, weight='bold', color=INK)
    rows = [('Bloqueo', 'Ruido → descarga', 'Ruido + luz → descarga', 'Luz', 'apenas supresión\n(razón ≈ 0,5)', A), ('Control', '—', 'Ruido + luz → descarga', 'Luz', 'supresión fuerte\n(razón próxima a 0)', G)]
    for i, (g, f1, f2, pr, res, c) in enumerate(rows):
        y = 3.2 - i * 1.6
        box(ax, xs[0], y, 2.0, .9, g, c, 9)
        for x, t in zip(xs[1:4], [f1, f2, pr]): box(ax, x, y, 2.45 if x != xs[3] else 1.4, .9, t, '#FFFFFF', 7.4, tc=INK, bold=False, ec=MUTE)
        ax.text(xs[4], y, res, ha='center', va='center', fontsize=8.2, color=c, weight='bold')
    note(ax, 'Esquema del diseño de Kamin (1968, 1969); razón de supresión: 0 = supresión total, 0,5 = ninguna', -.02)
    save(fig, 'bloqueo.png')

# U5 · simulación Rescorla-Wagner
if want('rw-curvas'):
    def rw(trials, a=None, b=.3, lam=1.0):
        a = a or {}; V = {}; hist = []
        for cs, us in trials:
            err = (lam if us else 0) - sum(V.get(c, 0) for c in cs)
            for c in cs: V[c] = V.get(c, 0) + a.get(c, .3) * b * err / .3
            hist.append(dict(V))
        return hist
    fig, axs = plt.subplots(1, 3, figsize=(7.8, 2.8))
    h = rw([(['A'], 1)] * 15 + [(['A'], 0)] * 15)
    axs[0].plot(np.arange(1, 31), [x.get('A', 0) for x in h], color=P, lw=2); axs[0].axvline(15.5, color=MUTE, ls=':'); axs[0].set_title('Adquisición y extinción', fontsize=9)
    axs[0].text(8, .2, 'EC + EI', fontsize=7.5, color=P, ha='center'); axs[0].text(23, .85, 'EC solo', fontsize=7.5, color=A, ha='center')
    h = rw([(['A', 'B'], 1)] * 20, a={'A': .45, 'B': .15})
    axs[1].plot(np.arange(1, 21), [x['A'] for x in h], color=P, lw=2, label='A (saliente)'); axs[1].plot(np.arange(1, 21), [x['B'] for x in h], color=A, lw=2, label='B (poco saliente)'); axs[1].set_title('Ensombrecimiento', fontsize=9); axs[1].legend(fontsize=7, frameon=False, loc='center right')
    h1 = rw([(['A'], 1)] * 15 + [(['A', 'X'], 1)] * 15); h2 = rw([(['C'], 1)] * 15 + [(['B', 'X'], 1)] * 15)
    axs[2].plot(np.arange(1, 16), [x.get('X', 0) for x in h1[15:]], color=A, lw=2, label='X en bloqueo'); axs[2].plot(np.arange(1, 16), [x.get('X', 0) for x in h2[15:]], color=G, lw=2, label='X en control')
    axs[2].set_title('Bloqueo (fase 2)', fontsize=9); axs[2].legend(fontsize=7, frameon=False, loc='upper right', bbox_to_anchor=(1, .92))
    for ax in axs: clean(ax); ax.set_ylim(-.02, 1.05); ax.set_xlabel('Ensayos', fontsize=8.5); ax.tick_params(labelsize=7.5)
    axs[0].set_ylabel('Fuerza asociativa (V)')
    fig.tight_layout(rect=(0, .07, 1, 1)); fig.text(.01, .015, 'Simulación propia: ΔV = α·β·(λ − ΣV); β = 0,3; λ = 1; α = 0,3 salvo en el ensombrecimiento (A 0,45; B 0,15)', fontsize=7.4, color=MUTE)
    fig.savefig(f'{OUT}/rw-curvas.png', dpi=200); plt.close(fig); print('ok rw')

# U6 · Garcia y Koelling
if want('garcia-koelling'):
    fig, ax = canvas(6.4, 3.2, 11, 6)
    ax.text(4.6, 5.5, 'Consecuencia: malestar\n(radiación o LiCl)', ha='center', fontsize=8.6, weight='bold', color=INK)
    ax.text(8.6, 5.5, 'Consecuencia:\ndescarga eléctrica', ha='center', fontsize=8.6, weight='bold', color=INK)
    ax.text(1.3, 3.7, 'Prueba:\nagua con sabor', ha='center', fontsize=8.6, weight='bold', color=INK)
    ax.text(1.3, 1.6, 'Prueba:\nagua «brillante\ny ruidosa»', ha='center', fontsize=8.6, weight='bold', color=INK)
    for (x, y, t, c) in [(4.6, 3.7, 'Fuerte evitación', G), (8.6, 3.7, 'Poca evitación', '#FFFFFF'), (4.6, 1.6, 'Poca evitación', '#FFFFFF'), (8.6, 1.6, 'Fuerte evitación', G)]:
        box(ax, x, y, 3.4, 1.4, t, c, 9.4, tc='white' if c == G else INK, ec=MUTE)
    ax.text(5.5, .1, 'Esquema de resultados cualitativos de Garcia y Koelling (1966)', ha='center', fontsize=7.4, color=MUTE)
    save(fig, 'garcia-koelling.png')

# U6 · tolerancia condicionada
if want('tolerancia-siegel'):
    fig, axs = plt.subplots(1, 2, figsize=(7.6, 2.8), sharey=True)
    t = np.linspace(0, 10, 300); drug = np.exp(-((t - 4) / 1.6) ** 2)
    comp = .65 * np.exp(-((t - 3.6) / 1.9) ** 2)
    for ax, (tt, has) in zip(axs, [('Contexto habitual', True), ('Contexto nuevo', False)]):
        clean(ax); ax.plot(t, drug, '--', color=A, lw=1.5, label='Efecto del fármaco')
        if has: ax.plot(t, -comp, '--', color=P, lw=1.5, label='RC compensatoria')
        net = drug - (comp if has else 0); ax.plot(t, net, color=INK, lw=2.3, label='Efecto neto')
        ax.axhline(0, color=MUTE, lw=.7); ax.set_title(tt); ax.set_xticks([]); ax.set_xlabel('Tiempo tras la dosis')
    axs[0].set_yticks([]); axs[0].set_ylabel('Efecto'); axs[0].legend(fontsize=7.2, frameon=False, loc='upper right')
    axs[1].text(6.4, .5, 'sin compensación:\nefecto completo,\nmás riesgo', fontsize=7.8, color=A)
    note(axs[0], 'Esquema ilustrativo, no datos (Siegel)', -.18); save(fig, 'tolerancia-siegel.png')

# U7 · renovación y restablecimiento
if want('renovacion'):
    fig, ax = canvas(7.6, 3.2, 13, 6)
    hdr = ['Diseño', 'Adquisición', 'Extinción', 'Prueba', 'RC en la prueba']; xs = [1.4, 4.0, 6.5, 9.0, 11.6]
    for x, h in zip(xs, hdr): ax.text(x, 5.5, h, ha='center', fontsize=9, weight='bold', color=INK)
    rows = [('ABA', 'contexto A', 'contexto B', 'contexto A', 'renovación fuerte', A), ('ABC', 'contexto A', 'contexto B', 'contexto C', 'renovación', Y), ('AAB', 'contexto A', 'contexto A', 'contexto B', 'renovación más débil', G),
            ('Restablec.', 'EC → EI', 'EC solo', 'EI solo, luego EC', 'reaparece la RC', V)]
    for i, (g, a, e, p, r, c) in enumerate(rows):
        y = 4.5 - i * 1.15
        box(ax, xs[0], y, 2.1, .8, g, c, 9, tc='white' if c != Y else INK)
        for x, t in zip(xs[1:4], [a, e, p]): box(ax, x, y, 2.2, .8, t, '#FFFFFF', 8, tc=INK, bold=False, ec=MUTE)
        ax.text(xs[4], y, r, ha='center', va='center', fontsize=8.2, color=INK)
    note(ax, 'Esquema basado en Bouton; la fuerza relativa es orientativa', -.02); save(fig, 'renovacion.png')

# U8 · Thorndike
if want('thorndike'):
    rng = np.random.default_rng(3); n = np.arange(1, 25)
    lat = 150 * np.exp(-(n - 1) / 6) + 10 + rng.normal(0, 1, len(n)) * (25 * np.exp(-(n - 1) / 8))
    lat = np.clip(lat, 6, None)
    fig, ax = axes(6.0, 2.8); ax.plot(n, lat, '-o', color=P, ms=3.8, lw=1.8)
    ax.set_xlabel('Ensayos en la caja problema'); ax.set_ylabel('Tiempo hasta escapar'); ax.set_yticks([])
    ax.text(13, 120, 'descenso gradual e irregular:\nensayo y error, no comprensión súbita', fontsize=8, color=INK)
    note(ax, y=-.32); save(fig, 'thorndike.png')

# U8 · tabla del refuerzo
if want('tabla-refuerzo'):
    fig, ax = canvas(6.6, 3.6, 11, 6.4)
    ax.text(4.6, 6.0, 'Se presenta', ha='center', weight='bold', color=INK); ax.text(8.6, 6.0, 'Se retira', ha='center', weight='bold', color=INK)
    ax.text(1.1, 4.2, 'Estímulo\napetitivo', ha='center', weight='bold', color=INK, fontsize=9); ax.text(1.1, 1.8, 'Estímulo\naversivo', ha='center', weight='bold', color=INK, fontsize=9)
    cells = [(4.6, 4.2, 'Reforzamiento positivo\n↑ conducta\n(elogio tras recoger)', G), (8.6, 4.2, 'Castigo negativo\n↓ conducta\n(sin móvil tras gritar)', A),
             (4.6, 1.8, 'Castigo positivo\n↓ conducta\n(multa por aparcar mal)', A), (8.6, 1.8, 'Reforzamiento negativo\n↑ conducta\n(ibuprofeno quita el dolor)', G)]
    for x, y, t, c in cells: box(ax, x, y, 3.7, 2.0, t, c, 8.6)
    save(fig, 'tabla-refuerzo.png')

# U9 · registros acumulativos
if want('programas'):
    fig, axs = plt.subplots(1, 4, figsize=(7.8, 2.5), sharey=True)
    def mk(kind):
        t = [0]; y = [0]; marks = []
        if kind == 'RF':
            for k in range(5):
                t += [t[-1] + 1.2, t[-1] + 1.2 + 1.0]; y += [y[-1], y[-1] + 10]; marks.append((t[-1], y[-1]))
        if kind == 'RV':
            rng = np.random.default_rng(1)
            for k in range(9): d = rng.uniform(.25, 1.0); t += [t[-1] + d]; y += [y[-1] + d * 9]; marks.append((t[-1], y[-1]))
        if kind == 'IF':
            for k in range(4):
                s = np.linspace(0, 1, 20); t += list(t[-1] + s * 2.2); y += list(y[-1] + 9 * s ** 2.6); marks.append((t[-1], y[-1]))
        if kind == 'IV':
            rng = np.random.default_rng(2)
            for k in range(7): d = rng.uniform(.5, 1.6); t += [t[-1] + d]; y += [y[-1] + d * 4.2]; marks.append((t[-1], y[-1]))
        return t, y, marks
    for ax, k, d in zip(axs, ['RF', 'RV', 'IF', 'IV'], ['pausa y carrera', 'alta y constante', 'festoneo', 'moderada']):
        clean(ax); t, y, m = mk(k); ax.plot(t, y, color=P, lw=1.8)
        for (a, b) in m: ax.plot([a, a + .18], [b, b - 2], color=A, lw=1.4)
        ax.set_title(f'{k}\n{d}', fontsize=8.6); ax.set_xticks([]); ax.set_xlim(0, max(t) + .3)
    axs[0].set_ylabel('Respuestas acumuladas'); axs[0].set_yticks([])
    note(axs[0], 'Esquema ilustrativo, no datos; marcas rojas: reforzador', -.14); save(fig, 'programas.png')

# U9 · igualación
if want('igualacion'):
    fig, ax = plt.subplots(figsize=(4.4, 4.0)); clean(ax)
    x = np.linspace(0.001, .999, 200)
    def gm(x, s, b=1): r = x / (1 - x); q = b * r ** s; return q / (1 + q)
    ax.plot(x, x, color=INK, lw=2, label='Igualación perfecta (s = 1)')
    ax.plot(x, gm(x, .7), color=P, lw=2, ls='--', label='Infraigualación (s < 1)')
    ax.plot(x, gm(x, 1, 2), color=A, lw=2, ls=':', label='Sesgo hacia la opción 1')
    ax.set_xlabel('Proporción de refuerzos en la opción 1'); ax.set_ylabel('Proporción de respuestas en la opción 1'); ax.legend(fontsize=7.4, frameon=False, loc='upper left')
    ax.set_xlim(0, 1); ax.set_ylim(0, 1); note(ax, 'Esquema basado en Herrnstein (1961) y Baum (1974)', -.2); save(fig, 'igualacion.png')

# U9 · descuento hiperbólico
if want('descuento'):
    fig, ax = axes(6.0, 3.0)
    t = np.linspace(0, 10, 400); k = 1.2
    tS, aS, tL, aL = 7, 5, 9, 9
    vS = np.where(t <= tS, aS / (1 + k * (tS - t)), np.nan); vL = np.where(t <= tL, aL / (1 + k * (tL - t)), np.nan)
    ax.plot(t, vS, color=A, lw=2, label='Pequeña e inmediata'); ax.plot(t, vL, color=P, lw=2, label='Grande y demorada')
    ax.vlines([tS, tL], 0, [aS, aL], colors=[A, P], lw=5, alpha=.5)
    ax.axvline(5.33, color=MUTE, ls=':'); ax.text(5.4, 8.4, 'inversión de\npreferencias', fontsize=7.8, color=INK)
    ax.text(1.2, 2.7, 'lejos: se prefiere\nla grande', fontsize=7.8, color=P); ax.text(6.0, 5.4, 'cerca: gana\nla pequeña', fontsize=7.8, color=A)
    ax.set_ylim(0, 10); ax.set_xticks([]); ax.set_yticks([]); ax.set_xlabel('Tiempo'); ax.set_ylabel('Valor subjetivo'); ax.legend(fontsize=7.5, frameon=False, loc='upper left')
    note(ax, 'Esquema: V = A / (1 + kD)', -.16); save(fig, 'descuento.png')

# U9 · golosina
if want('golosina'):
    fig, ax = axes(4.6, 2.9)
    v = [1, .5, 1 / 6]; lab = ['Estudios\noriginales', 'Réplica\nsin controles', 'Réplica con\ncontroles']
    b = ax.bar(lab, v, color=[MUTE, P, A], width=.6)
    for r, t in zip(b, ['1', '≈ 0,5', '≈ 0,17']): ax.text(r.get_x() + r.get_width() / 2, r.get_height() + .03, t, ha='center', fontsize=9, weight='bold', color=INK)
    ax.set_ylim(0, 1.2); ax.set_yticks([]); ax.set_ylabel('Asociación relativa'); ax.tick_params(axis='x', labelsize=8)
    note(ax, 'Tamaño relativo aproximado según Watts, Duncan y Quan (2018)', -.28); save(fig, 'golosina.png')

# U10 · privación de respuesta y punto de bienestar
if want('premack'):
    fig, ax = plt.subplots(figsize=(4.8, 4.0)); clean(ax)
    ax.plot([60], [15], 'o', color=G, ms=11); ax.text(62, 17, 'Punto de bienestar\n(línea base libre)', fontsize=8, color=G)
    x = np.linspace(0, 80, 10); ax.plot(x, x / 4 * .5, color=P, lw=2); ax.text(52, 4.5, 'Restricción del programa:\n1 min de juego por cada 8 de estudio', fontsize=7.8, color=P)
    ax.plot([60], [60 / 8], 's', color=A, ms=8); ax.annotate('', (64, 9.5), (60, 7.5), arrowprops=dict(arrowstyle='-|>', color=A))
    ax.text(30, 12, 'El sujeto redistribuye su\nconducta para acercarse\nal punto de bienestar', fontsize=7.8, color=INK, ha='center')
    ax.set_xlim(0, 100); ax.set_ylim(0, 25); ax.set_xlabel('Minutos de estudio'); ax.set_ylabel('Minutos de videojuego')
    note(ax, 'Esquema ilustrativo, no datos (Timberlake y Allison, 1974)', -.2); save(fig, 'premack.png')

# U10 · aprendizaje latente
if want('latente'):
    fig, ax = axes(6.0, 3.0); d = np.arange(1, 18)
    r = 9 * np.exp(-(d - 1) / 4) + 2; nr = 9 - 3 * (1 - np.exp(-(d - 1) / 6)) + 1
    lat = np.where(d <= 11, nr, 2.0 + 1.5 * np.exp(-(d - 12) / 1.0)); lat[10] = nr[10]
    ax.plot(d, r, '-o', color=P, ms=3.5, lw=2, label='Siempre recompensadas'); ax.plot(d, nr, '-o', color=MUTE, ms=3.5, lw=2, label='Nunca recompensadas'); ax.plot(d, lat, '-o', color=A, ms=3.5, lw=2, label='Recompensa desde el día 11')
    ax.axvline(11, color=A, ls=':'); ax.set_xlabel('Días'); ax.set_ylabel('Errores'); ax.set_yticks([]); ax.legend(fontsize=7.5, frameon=False)
    ax.plot(d, nr, '--', color=MUTE, lw=1.4)
    note(ax, 'Esquema de la forma de los resultados de Tolman y Honzik (1930), no datos', -.3); save(fig, 'latente.png')

# U11 · indefensión
if want('indefension'):
    fig, ax = canvas(7.8, 3.4, 13, 6)
    ax.text(3.2, 5.6, 'Diseño triádico (Seligman y Maier, 1967)', ha='center', fontsize=9, weight='bold', color=INK)
    for i, (g, f1, f2, c) in enumerate([('Escapable', 'descargas que\npuede terminar', 'escapa', G), ('Acoplado', 'mismas descargas,\nsin control', 'no escapa', A), ('Sin descarga', '—', 'escapa', P)]):
        y = 4.4 - i * 1.35; box(ax, 1.1, y, 1.9, .9, g, c, 8.6); box(ax, 3.4, y, 2.2, .9, f1, '#FFFFFF', 7.8, tc=INK, bold=False, ec=MUTE); box(ax, 5.7, y, 2.1, .9, f2, '#FFFFFF', 7.2, tc=c, ec=MUTE)
    ax.text(3.4, 5.05, 'Fase 1', ha='center', fontsize=8, color=MUTE); ax.text(5.6, 5.05, 'Caja lanzadera', ha='center', fontsize=8, color=MUTE)
    ax.plot([7.1, 7.1], [.3, 5.8], color=MUTE, lw=.8)
    ax.text(10.1, 5.6, 'Reformulación (Maier y Seligman, 2016)', ha='center', fontsize=9, weight='bold', color=INK)
    box(ax, 10.1, 4.2, 5.6, 1.0, 'Aversivo prolongado → núcleo dorsal\ndel rafe → pasividad (por defecto)', A, 7.6)
    box(ax, 10.1, 2.2, 5.6, 1.0, 'Detección de control → corteza\nprefrontal ventromedial (se aprende)', G, 7.6)
    arr(ax, (10.1, 2.7), (10.1, 3.7), c=G); ax.text(10.3, 3.2, 'inhibe', fontsize=8, color=G)
    ax.text(10.1, .6, 'Lo que se aprende es el control, no la pasividad', ha='center', fontsize=8, color=INK, style='italic')
    save(fig, 'indefension.png')

# U12 · desplazamiento del vértice
if want('vertice'):
    fig, ax = axes(6.0, 3.0); x = np.linspace(500, 610, 300)
    g1 = 100 * np.exp(-((x - 550) / 17) ** 2); g2 = 130 * np.exp(-((x - 538) / 13) ** 2)
    ax.plot(x, g1, color=P, lw=2, label='Solo E+ (control)'); ax.plot(x, g2, color=A, lw=2, label='Discriminación E+ / E−')
    ax.axvline(550, color=P, ls=':'); ax.text(549, 146, 'E+ = 550 nm', fontsize=8, color=P, ha='right')
    ax.axvline(565, color=MUTE, ls=':'); ax.text(566, 112, 'E−', fontsize=8, color=MUTE)
    ax.annotate('vértice desplazado\nlejos del E−', (538, 130), (505, 120), fontsize=8, color=A, arrowprops=dict(arrowstyle='-|>', color=A))
    ax.set_ylim(0, 155); ax.set_yticks([]); ax.set_xlabel('Longitud de onda (nm)'); ax.set_ylabel('Respuestas'); ax.legend(fontsize=7.5, frameon=False, loc='upper right')
    note(ax, 'Forma cualitativa del efecto de Hanson (1959); el E− y los valores son ilustrativos', -.3); save(fig, 'vertice.png')

# U12 · dopamina
if want('dopamina'):
    fig, axs = plt.subplots(1, 3, figsize=(7.8, 2.4), sharey=True)
    t = np.linspace(0, 3, 300); base = 1.0
    def pk(c, h=3): return h * np.exp(-((t - c) / .06) ** 2)
    sets = [('Recompensa inesperada', base + pk(2.0), [(2.0, 'R')]), ('EC que predice recompensa', base + pk(.8), [(.8, 'EC'), (2.0, 'R')]),
            ('Recompensa omitida', base + pk(.8) - .95 * (np.abs(t - 2.0) < .15), [(.8, 'EC'), (2.0, '(sin R)')])]
    for ax, (tt, y, m) in zip(axs, sets):
        clean(ax); ax.fill_between(t, 0, y, color=P, alpha=.35); ax.plot(t, y, color=P, lw=1.2)
        for x, l in m: ax.axvline(x, color=A, ls=':', lw=1); ax.text(x, 4.25, l, ha='center', fontsize=8, color=A, weight='bold')
        ax.set_title(tt, fontsize=8.8); ax.set_xticks([]); ax.set_ylim(0, 4.6)
    axs[0].set_yticks([]); axs[0].set_ylabel('Actividad dopaminérgica')
    note(axs[0], 'Esquema cualitativo de Schultz, Dayan y Montague (1997), no datos', -.12); save(fig, 'dopamina.png')

# U13 · niveles de categorías
if want('prototipos'):
    fig, ax = canvas(6.4, 3.0, 12, 5.4)
    box(ax, 6, 4.6, 3.0, .75, 'Mueble', V, 9.5); ax.text(10.4, 4.6, 'supraordinado', fontsize=8, color=MUTE, va='center')
    for x, t in [(2.6, 'Silla'), (6, 'Mesa'), (9.4, 'Lámpara')]: box(ax, x, 3.0, 2.4, .75, t, P, 9.5); arr(ax, (6, 4.2), (x, 3.4), c=MUTE)
    ax.text(11.0, 3.0, 'básico', fontsize=8, color=P, va='center', weight='bold')
    for x, t in [(1.4, 'Silla de\noficina'), (3.8, 'Mecedora')]: box(ax, x, 1.3, 2.1, .85, t, '#FFFFFF', 8.5, tc=INK, bold=False, ec=P); arr(ax, (2.6, 2.6), (x, 1.75), c=MUTE)
    ax.text(5.4, 1.3, 'subordinado', fontsize=8, color=MUTE, va='center')
    ax.text(6, .15, 'El nivel básico es el más informativo con menos esfuerzo y el primero que se aprende (Rosch et al., 1976)', ha='center', fontsize=7.6, color=INK, style='italic')
    save(fig, 'prototipos.png')

# U13 · equivalencia de estímulos
if want('equivalencia'):
    fig, ax = canvas(6.0, 3.2, 10, 5.4)
    pos = {'A': (1.5, 2.7), 'B': (5, 4.4), 'C': (8.5, 2.7)}; lab = {'A': 'A\npalabra hablada\n«perro»', 'B': 'B\nfoto de\nun perro', 'C': 'C\npalabra escrita\nPERRO'}
    for k, (x, y) in pos.items(): box(ax, x, y, 2.4, 1.2, lab[k], P, 8.2)
    arr(ax, (2.6, 3.2), (3.9, 4.1), c=INK, lw=2); arr(ax, (6.1, 4.1), (7.4, 3.2), c=INK, lw=2)
    arr(ax, (3.9, 3.85), (2.75, 2.95), c=G, ls='--', rad=.15); arr(ax, (2.8, 2.4), (7.2, 2.4), c=A, ls='--'); arr(ax, (7.2, 2.15), (2.8, 2.15), c=V, ls='--')
    ax.text(5, 1.6, 'transitividad A→C y equivalencia C→A (emergentes)', ha='center', fontsize=7.8, color=A)
    ax.text(2.2, 4.1, 'simetría\nB→A', fontsize=7.6, color=G, ha='center')
    ax.text(5, .5, 'Flechas continuas: relaciones entrenadas; discontinuas: relaciones que emergen sin entrenamiento (Sidman, 1971)', ha='center', fontsize=7.2, color=MUTE)
    save(fig, 'equivalencia.png')

# U14 · zona de desarrollo próximo
if want('vygotski'):
    fig, ax = canvas(6.2, 3.6, 10, 6)
    for r, c, t in [(2.8, '#E6EEF4', ''), (1.9, Y, ''), (1.0, P, '')]: ax.add_patch(Circle((3.4, 3.0), r, color=c, alpha=.9))
    ax.text(3.4, 3.0, 'Lo que hace\nsolo', ha='center', va='center', color='white', fontsize=8.2, weight='bold')
    ax.text(3.4, 4.4, 'ZDP: lo que hace\ncon ayuda', ha='center', va='center', color=INK, fontsize=8.2, weight='bold')
    ax.text(3.4, 5.35, 'aún fuera de su alcance', ha='center', va='center', color=MUTE, fontsize=7.8)
    fx = ['Reclutamiento', 'Reducir grados de libertad', 'Mantener la dirección', 'Señalar rasgos críticos', 'Controlar la frustración', 'Demostración']
    ax.text(8.1, 5.4, 'Andamiaje\n(Wood, Bruner y Ross, 1976)', ha='center', fontsize=8.4, weight='bold', color=INK)
    for i, f in enumerate(fx): box(ax, 8.1, 4.4 - i * .72, 3.4, .55, f, '#FFFFFF', 7.8, tc=INK, bold=False, ec=G)
    save(fig, 'vygotski.png')

# U15 · procesos de Bandura
if want('bandura-procesos'):
    fig, ax = canvas(7.8, 3.3, 13, 5.6)
    pr = [('Atención', 'rasgos del modelo y\ndel observador', P), ('Retención', 'código verbal\ny en imágenes', G), ('Reproducción', 'capacidad motora\ny retroalimentación', Y), ('Motivación', 'refuerzo directo,\nvicario y autorrefuerzo', A)]
    for i, (t, d, c) in enumerate(pr):
        x = 1.6 + i * 3.25; box(ax, x, 4.6, 2.7, .75, t, c, 9.2, tc='white' if c != Y else INK); ax.text(x, 3.95, d, ha='center', va='top', fontsize=7.6, color=INK)
        if i < 3: arr(ax, (x + 1.4, 4.6), (x + 1.85, 4.6))
    tri = {'Persona': (3.5, 1.6), 'Conducta': (6.5, .55), 'Ambiente': (9.5, 1.6)}
    for k, (x, y) in tri.items(): box(ax, x, y, 2.0, .6, k, V, 8.6)
    for a, b in [('Persona', 'Conducta'), ('Conducta', 'Ambiente'), ('Ambiente', 'Persona')]:
        (x1, y1), (x2, y2) = tri[a], tri[b]; arr(ax, (x1 + (1.05 if x2 > x1 else -1.05), y1), (x2 - (1.05 if x2 > x1 else -1.05), y2), c=V); arr(ax, (x2 - (1.05 if x2 > x1 else -1.05), y2 + .12), (x1 + (1.05 if x2 > x1 else -1.05), y1 + .12), c=V)
    ax.text(6.5, 2.45, 'Determinismo recíproco', ha='center', fontsize=8.4, color=V, weight='bold')
    save(fig, 'bandura-procesos.png')

# U16 · interferencia contextual
if want('interferencia'):
    fig, ax = axes(6.0, 3.0); s = np.arange(1, 9)
    blo = 60 - 40 * (1 - np.exp(-(s - 1) / 2)); ale = 60 - 28 * (1 - np.exp(-(s - 1) / 3))
    ax.plot(s, blo, '-o', color=P, ms=4, lw=2, label='Práctica en bloques'); ax.plot(s, ale, '-o', color=A, ms=4, lw=2, label='Práctica aleatoria')
    ax.axvspan(8.5, 9.5, color=SOFT); ax.plot([10], [42], 'o', color=P, ms=7); ax.plot([10], [30], 'o', color=A, ms=7)
    ax.text(9, 57, 'demora', ha='center', fontsize=7.8, color=MUTE); ax.text(10, 62, 'Retención', ha='center', fontsize=8, weight='bold', color=INK)
    ax.set_xticks([]); ax.set_yticks([]); ax.set_xlabel('Sesiones de adquisición'); ax.set_ylabel('Errores'); ax.set_xlim(.5, 10.8); ax.set_ylim(10, 68); ax.legend(fontsize=7.5, frameon=False, loc='lower left')
    note(ax, 'Esquema ilustrativo, no datos (Shea y Morgan, 1979)', -.16); save(fig, 'interferencia.png')

# U16 · Fitts y Posner
if want('fitts-posner'):
    fig, ax = canvas(7.6, 3.0, 13, 5)
    ph = [('Cognitiva', 'entender la tarea;\nmucha atención;\nerrores grandes y variables', P), ('Asociativa', 'refinar el movimiento;\nmenos errores;\nmás consistencia', G), ('Autónoma', 'automatización;\npoca atención;\npermite la doble tarea', V)]
    for i, (t, d, c) in enumerate(ph):
        x = 2.2 + i * 4.3; box(ax, x, 3.9, 3.4, .8, t, c, 9.6); ax.text(x, 3.2, d, ha='center', va='top', fontsize=7.8, color=INK)
        if i < 2: arr(ax, (x + 1.75, 3.9), (x + 2.55, 3.9))
    xx = np.linspace(.6, 12.4, 100); ax.plot(xx, .35 + 1.0 * np.exp(-(xx - .6) / 4), color=A, lw=2); ax.text(12.5, .45, 'demanda\natencional', fontsize=7.6, color=A, va='center')
    save(fig, 'fitts-posner.png')

# U16 · práctica deliberada por dominio
if want('practica-deliberada'):
    fig, ax = axes(5.6, 3.0)
    dom = ['Juegos', 'Música', 'Deportes', 'Educación', 'Profesiones']; v = [26, 21, 18, 4, .7]
    b = ax.barh(dom[::-1], v[::-1], color=[MUTE, MUTE, G, P, P])
    for r, t in zip(b, ['< 1 %', '4 %', '18 %', '21 %', '26 %']): ax.text(r.get_width() + .6, r.get_y() + r.get_height() / 2, t, va='center', fontsize=8.6, color=INK, weight='bold')
    ax.set_xlim(0, 32); ax.set_xlabel('Varianza del rendimiento explicada por la práctica deliberada')
    note(ax, 'Datos de Macnamara, Hambrick y Oswald (2014)', -.3); save(fig, 'practica-deliberada.png')
