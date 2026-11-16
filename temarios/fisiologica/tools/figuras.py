"""Figuras propias del temario de Psicología Fisiológica. python3 tools/figuras.py → img/*"""
import os, sys, numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Circle, Rectangle, Ellipse
from matplotlib.text import Text

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'img')
P, A, G, Y, V, T, INK, MUTE = '#2D5A7B', '#C8553D', '#5FA47A', '#E0A83A', '#7A5BA8', '#3E8E9B', '#26323A', '#8A949B'
SOFT = '#F3F0EA'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 9, 'axes.edgecolor': MUTE, 'axes.labelcolor': INK,
                     'xtick.color': MUTE, 'ytick.color': MUTE, 'axes.titlesize': 9.5, 'axes.titlecolor': INK,
                     'xtick.labelcolor': INK, 'ytick.labelcolor': INK})
ONLY = set(sys.argv[1:])
# Ancho de la figura (pulgadas) y ancho en página (pulgadas): ![] ≈ 16 cm, ![m] ≈ 11 cm, ![s] ≈ 7 cm
W = {'f': 6.6, 'm': 4.6, 's': 3.0}
PAGE = {'f': 16 / 2.54, 'm': 11 / 2.54, 's': 7 / 2.54}


def want(n): return not ONLY or n in ONLY
def clean(ax):
    for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
def save(fig, name, size=None, rect=None, tight=True):
    if tight: fig.tight_layout(rect=rect) if rect else fig.tight_layout()
    fig.savefig(f'{OUT}/{name}', dpi=200)
    msg = ''
    if size:
        k = PAGE[size] / fig.get_figwidth()
        fs = [t.get_fontsize() for t in fig.findobj(Text) if t.get_visible() and t.get_text().strip()]
        m = min(fs) * k
        msg = f'  (mín. {m:.1f} pt en página)' + ('  ¡AVISO < 7,5!' if m < 7.5 else '')
    plt.close(fig); print('ok', name, msg)
def canvas(w, h, xl, yl):
    fig, ax = plt.subplots(figsize=(w, h)); ax.set_xlim(0, xl); ax.set_ylim(0, yl); ax.axis('off'); return fig, ax
def box(ax, x, y, w, h, t, c, fs=9, tc='white', bold=True, ec='none', r=0.12):
    ax.add_patch(FancyBboxPatch((x - w / 2, y - h / 2), w, h, boxstyle=f'round,pad=0.02,rounding_size={r}', fc=c, ec=ec, lw=1.2))
    ax.text(x, y, t, ha='center', va='center', color=tc, fontsize=fs, weight='bold' if bold else 'normal', linespacing=1.25)
def arr(ax, a, b, c=INK, ls='-', rad=0, lw=1.4, ms=12):
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-|>', mutation_scale=ms, color=c, lw=lw, ls=ls, connectionstyle=f'arc3,rad={rad}', shrinkA=2, shrinkB=2))
def inh(ax, a, b, c=A, rad=0, lw=1.6):
    """Flecha inhibitoria (termina en barra)."""
    ax.add_patch(FancyArrowPatch(a, b, arrowstyle='-[, widthB=0.5, lengthB=0', mutation_scale=12, color=c, lw=lw, connectionstyle=f'arc3,rad={rad}', shrinkA=2, shrinkB=2))
def txt(ax, x, y, s, fs=8.6, c=INK, **kw):
    kw.setdefault('ha', 'center'); kw.setdefault('va', 'center'); return ax.text(x, y, s, fontsize=fs, color=c, **kw)
def pct(v): return f'{v:.1f}'.replace('.', ',').replace(',0', '') + ' %'
def lite(c, a=.18):
    c = matplotlib.colors.to_rgb(c); return tuple(1 - a * (1 - x) for x in c)


def note(ax, t='Esquema ilustrativo, no datos', y=-.24, x=0):
    ax.text(x, y, t, transform=ax.transAxes, fontsize=8.2, color=MUTE)


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)

# ───────────────────────── U1 · Atención ─────────────────────────
if want('redes-posner'):
    fig, ax = canvas(W['f'], 3.1, 6.6, 3.1)
    cols = [('Alerta', 'mantener la preparación', 'Locus coeruleus\nTálamo\nCorteza frontal y\nparietal derechas', 'Noradrenalina', P),
            ('Orientación', 'seleccionar la ubicación', 'Parietal superior\nUnión temporoparietal\nCampos oculares frontales\nColículo superior\nPulvinar', 'Acetilcolina', G),
            ('Control ejecutivo', 'resolver el conflicto', 'Cingulado anterior\nCorteza prefrontal lateral', 'Dopamina', V)]
    for i, (n, f, s, nt, c) in enumerate(cols):
        x = 1.12 + i * 2.18
        box(ax, x, 2.78, 2.0, .42, n, c, 10)
        txt(ax, x, 2.4, f, 8.4, c, style='italic')
        ax.add_patch(FancyBboxPatch((x - 1.0, 0.82), 2.0, 1.32, boxstyle='round,pad=0.02,rounding_size=0.1', fc=lite(c), ec='none'))
        txt(ax, x, 1.48, s, 8.6, linespacing=1.35)
        box(ax, x, .5, 1.5, .34, nt, 'white', 8.8, tc=c, ec=c)
    txt(ax, .02, 2.15, 'Estructuras', 8.2, MUTE, ha='left', rotation=90, va='top')
    note(ax, y=-.02)
    save(fig, 'redes-posner.png', 'f')

if want('senalizacion-posner'):
    fig = plt.figure(figsize=(W['m'], 3.7))
    ax = fig.add_axes([0, .42, 1, .58]); ax.set_xlim(0, 4.6); ax.set_ylim(0, 2.1); ax.axis('off')
    def pantalla(x, y, cue=None, tgt=None, hl=None):
        ax.add_patch(Rectangle((x - .52, y - .3), 1.04, .6, fc='#26323A', ec='none'))
        txt(ax, x, y, '+', 10, 'white', weight='bold')
        for s in (-1, 1):
            ax.add_patch(Rectangle((x + s * .3 - .09, y - .09), .18, .18, fc='none', ec='white' if hl != s else Y, lw=2.2 if hl == s else 1))
        if cue: txt(ax, x, y + .17, cue, 8.6, Y, weight='bold')
        if tgt: txt(ax, x + tgt * .3, y, '✱', 9, 'white')
    for j, (lab, side, c) in enumerate([('Válida', 1, G), ('Inválida', -1, A)]):
        y = 1.42 - j * .82
        txt(ax, .38, y, lab, 8.8, c, weight='bold')
        pantalla(1.35, y); pantalla(2.6, y, hl=1); pantalla(3.85, y, tgt=side)
        arr(ax, (1.9, y), (2.05, y), MUTE, ms=8); arr(ax, (3.15, y), (3.3, y), MUTE, ms=8)
    for x, t in [(1.35, 'Fijación'), (2.6, 'Señal (derecha)'), (3.85, 'Objetivo')]: txt(ax, x, 1.98, t, 8.4, MUTE)
    b = fig.add_axes([.24, .16, .72, .25])
    b.barh([2, 1, 0], [1.0, 1.12, 1.27], color=[G, MUTE, A], height=.62)
    b.set_yticks([2, 1, 0]); b.set_yticklabels(['Válida', 'Neutra', 'Inválida']); b.set_xticks([]); b.set_xlim(0, 1.45)
    b.set_xlabel('Tiempo de reacción', fontsize=8.6); clean(b)
    b.text(1.24, 0, 'coste de reorientar', va='center', ha='right', fontsize=8.4, color='white', weight='bold')
    fig.text(.02, .015, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'senalizacion-posner.png', 'm')

# ───────────────────────── U2 · Redes atencionales y clínica ─────────────────────────
if want('dorsal-ventral'):
    fig, ax = canvas(W['m'], 3.0, 4.6, 3.0)
    for x, t in [(1.15, 'Hemisferio izquierdo'), (3.45, 'Hemisferio derecho')]:
        ax.add_patch(FancyBboxPatch((x - 1.0, .55), 2.0, 2.05, boxstyle='round,pad=0.02,rounding_size=0.35', fc=SOFT, ec=MUTE, lw=1))
        txt(ax, x, 2.8, t, 8.8, MUTE, weight='bold')
    for x in (1.15, 3.45):
        box(ax, x - .45, 2.05, .8, .44, 'COF', P, 8.8); box(ax, x + .45, 2.05, .8, .44, 'SIP', P, 8.8)
        ax.plot([x - .05, x + .05], [2.05, 2.05], color=P, lw=2)
    box(ax, 3.0, .95, .8, .44, 'CFI', A, 8.8); box(ax, 3.9, .95, .8, .44, 'UTP', A, 8.8)
    ax.plot([3.4, 3.5], [.95, .95], color=A, lw=2)
    arr(ax, (3.9, 1.2), (3.9, 1.8), A, lw=2)
    txt(ax, 3.82, 1.5, '«interruptor»', 8.4, A, ha='right', style='italic')
    txt(ax, 1.15, 1.45, 'Red dorsal: bilateral,\nde arriba abajo\n(metas)', 8.4, P)
    txt(ax, 2.3, .2, 'Red ventral (derecha): detecta estímulos relevantes inesperados', 8.4, A)
    txt(ax, 4.6, 2.98, 'COF: campos oculares frontales · SIP: surco intraparietal\nCFI: corteza frontal inferior · UTP: unión temporoparietal', 8, MUTE, ha='right', va='bottom')
    ax.set_ylim(-.15, 3.4); note(ax, y=-.04)
    save(fig, 'dorsal-ventral.png', 'm')

if want('delirium-demencia'):
    fig, ax = plt.subplots(figsize=(W['m'], 2.7))
    d = np.linspace(0, 30, 900)
    dem = .82 - .003 * d
    rec = np.clip((d - 15) / 15, 0, 1); on = np.clip((d - 4) / .5, 0, 1)
    fl = .09 * np.sin(2 * np.pi * d / 1.3) + .05 * np.sin(2 * np.pi * d / .55 + 1) + .03 * np.sin(2 * np.pi * d / 3.1)
    deli = .92 - .5 * on + on * fl * (1 - .5 * rec) + .2 * rec
    ax.plot(d, deli, color=A, lw=2.2); ax.plot(d, dem, color=P, lw=2.2, ls='--')
    txt(ax, 4.6, .99, 'inicio brusco', 8.4, A, ha='left')
    txt(ax, 9.5, .2, 'Delírium: fluctuante', 8.4, A, ha='left')
    txt(ax, 29.5, .93, 'Demencia: descenso lento\ny progresivo (meses o años)', 8.4, P, ha='right')
    ax.set_xlim(0, 30); ax.set_ylim(.12, 1.08); ax.set_yticks([]); ax.set_xticks([0, 10, 20, 30])
    ax.set_xlabel('Días'); ax.set_ylabel('Atención y cognición'); clean(ax); note(ax, y=-.36)
    save(fig, 'delirium-demencia.png', 'm')

if want('negligencia-tareas'):
    fig, axs = plt.subplots(1, 3, figsize=(W['f'], 2.45), gridspec_kw={'width_ratios': [1, 1, 1.25]})
    rng = np.random.default_rng(3)
    a = axs[0]; a.set_xlim(0, 4); a.set_ylim(0, 3.2)
    for i in range(7):
        for j in range(5):
            x, y = .35 + i * .55 + rng.uniform(-.1, .1), .45 + j * .55 + rng.uniform(-.1, .1); th = rng.uniform(0, np.pi)
            a.plot([x - .12 * np.cos(th), x + .12 * np.cos(th)], [y - .12 * np.sin(th), y + .12 * np.sin(th)], color=INK, lw=1.2)
            if x > 2.35: a.plot([x - .1, x + .1], [y + .1, y - .1], color=A, lw=1.6)
    a.set_title('Cancelación', fontsize=9.5, weight='bold')
    txt(a, 2, -.15, 'solo tacha a la derecha', 8.4, A)
    b = axs[1]; b.set_xlim(0, 4); b.set_ylim(0, 3.2)
    b.plot([.3, 3.7], [1.6, 1.6], color=INK, lw=2.2)
    b.plot([2, 2], [1.4, 1.8], color=MUTE, lw=1.4, ls=':'); txt(b, 2, 1.1, 'centro\nreal', 8.4, MUTE)
    b.plot([2.75, 2.75], [1.3, 1.9], color=A, lw=2.4); txt(b, 2.95, 2.25, 'marca del\npaciente', 8.4, A)
    b.set_title('Bisección de líneas', fontsize=9.5, weight='bold')
    txt(b, 2, -.15, 'desviada a la derecha', 8.4, A)
    c = axs[2]; c.set_xlim(0, 5); c.set_ylim(0, 3.2)
    def flor(cx, cy, solo_der=False, col=INK, k=1.45):
        for j in range(8):
            ang = j * 45
            if solo_der and (90 < ang < 270): continue
            r = np.deg2rad(ang)
            c.add_patch(Ellipse((cx + k * .33 * np.cos(r), cy + k * .33 * np.sin(r)), k * .42, k * .2, angle=ang, fc='none', ec=col, lw=1.3))
        c.add_patch(Circle((cx, cy), k * .12, fc='white', ec=col, lw=1.3, zorder=3))
        c.plot([cx, cx], [cy - k * .55, cy - 1.75], color=col, lw=1.3)
        c.add_patch(Ellipse((cx + .32, cy - 1.2), .55, .2, angle=30, fc='none', ec=col, lw=1.3))
        if not solo_der: c.add_patch(Ellipse((cx - .32, cy - 1.32), .55, .2, angle=-30, fc='none', ec=col, lw=1.3))
    flor(1.2, 2.3); flor(3.75, 2.3, True, A)
    txt(c, 1.2, .25, 'Modelo', 8.6, INK, weight='bold'); txt(c, 3.75, .25, 'Copia', 8.6, A, weight='bold')
    c.set_title('Copia de un dibujo', fontsize=9.5, weight='bold')
    txt(c, 2.5, -.15, 'omite el lado izquierdo', 8.4, A)
    for a_ in axs: a_.set_aspect('equal'); a_.axis('off')
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'negligencia-tareas.png', 'f', rect=(0, .07, 1, 1))

# ───────────────────────── U3 · Asimetrías ─────────────────────────
if want('planum-geschwind'):
    fig, ax = plt.subplots(figsize=(W['s'], 2.5))
    lab = ['Izquierdo\nmayor', 'Simétrico', 'Derecho\nmayor']; v = [65, 24, 11]
    ax.bar(range(3), v, color=[P, MUTE, A], width=.62)
    for i, x in enumerate(v): ax.text(i, x + 2, pct(x), ha='center', fontsize=9.2, weight='bold', color=INK)
    ax.set_xticks(range(3)); ax.set_xticklabels(lab, fontsize=8.8); ax.set_ylim(0, 75); ax.set_yticks([0, 25, 50, 75])
    ax.set_ylabel('% de cerebros', fontsize=8.8); clean(ax)
    note(ax, 'Datos: Geschwind y Levitsky, 1968; N = 100', y=-.45, x=-.25)
    save(fig, 'planum-geschwind.png', 's')

if want('split-brain'):
    fig, ax = canvas(W['f'], 3.7, 6.6, 3.7)
    ax.add_patch(Rectangle((1.6, 2.85), 3.4, .7, fc='#26323A', ec='none'))
    txt(ax, 3.3, 3.2, '+', 12, 'white', weight='bold'); txt(ax, 2.35, 3.2, 'LLAVE', 11, Y, weight='bold')
    ax.plot([3.3, 3.3], [2.88, 3.05], color=MUTE, lw=.8, ls=':')
    txt(ax, 1.5, 3.2, 'Campo visual\nizquierdo', 8.4, MUTE, ha='right'); txt(ax, 5.1, 3.2, 'Campo visual\nderecho', 8.4, MUTE, ha='left')
    box(ax, 2.3, 1.9, 1.65, .7, 'Hemisferio izquierdo\n(lenguaje)', P, 9)
    box(ax, 4.3, 1.9, 1.65, .7, 'Hemisferio derecho', G, 9)
    ax.plot([3.3, 3.3], [1.5, 2.3], color=A, lw=2.4, ls=(0, (3, 2)))
    txt(ax, 3.3, 1.32, 'cuerpo calloso\nseccionado', 8.2, A)
    arr(ax, (2.4, 2.86), (4.0, 2.27), Y, lw=2)
    arr(ax, (2.2, 1.53), (1.6, .95), P); arr(ax, (4.4, 1.53), (5.0, .95), G)
    box(ax, 1.4, .62, 2.3, .6, '«No he visto nada»', 'white', 9, tc=P, ec=P)
    box(ax, 5.15, .62, 2.6, .6, 'La mano izquierda elige\nla llave al tacto', 'white', 9, tc=G, ec=G)
    txt(ax, 3.3, .62, 'pero', 9, MUTE, style='italic')
    txt(ax, 5.3, 1.9, 'Estímulo breve\n(< 150–200 ms):\nno da tiempo a\nmover los ojos', 8.2, MUTE, ha='left')
    note(ax, y=-.03)
    save(fig, 'split-brain.png', 'f')

if want('dicotica'):
    fig = plt.figure(figsize=(W['m'], 3.8))
    ax = fig.add_axes([.01, .34, .98, .66]); ax.set_xlim(0, 4.6); ax.set_ylim(0, 2.5); ax.axis('off')
    box(ax, 1.45, 2.05, 1.5, .55, 'Hemisferio\nizquierdo (lenguaje)', P, 8.4)
    box(ax, 3.15, 2.05, 1.5, .55, 'Hemisferio\nderecho', G, 8.6)
    box(ax, .64, .45, 1.22, .55, 'Oído izquierdo\n/ba/', 'white', 8.6, tc=INK, ec=MUTE)
    box(ax, 3.96, .45, 1.22, .55, 'Oído derecho\n/da/', 'white', 8.6, tc=INK, ec=MUTE)
    arr(ax, (4.0, .75), (1.7, 1.75), P, lw=2.6)
    arr(ax, (.6, .75), (2.9, 1.75), G, lw=2.6)
    arr(ax, (.5, .75), (1.0, 1.75), MUTE, ls='--', lw=1); arr(ax, (4.1, .75), (3.6, 1.75), MUTE, ls='--', lw=1)
    txt(ax, 2.3, .55, 'vía contralateral\n(dominante)', 8.4, INK, weight='bold'); txt(ax, 2.3, .1, '- - - vía ipsilateral (más débil)', 8.2, MUTE)
    b = fig.add_axes([.33, .14, .6, .15])
    b.barh([1, 0], [1.0, .78], color=[P, G], height=.6); b.set_yticks([1, 0]); b.set_yticklabels(['Oído derecho', 'Oído izquierdo'], fontsize=8.4)
    b.set_xticks([]); b.set_xlim(0, 1.15); b.set_xlabel('Sílabas informadas correctamente', fontsize=8.4); clean(b)
    b.text(.97, 1, 'ventaja del oído derecho', ha='right', va='center', fontsize=8.2, color='white', weight='bold')
    fig.text(.01, .012, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'dicotica.png', 'm', tight=False)

# ───────────────────────── U4 · Preferencia manual ─────────────────────────
if want('lateralizacion-lenguaje'):
    fig, ax = plt.subplots(figsize=(W['m'], 2.6))
    v = [4, 15, 27]; ax.bar(range(3), v, color=[P, T, A], width=.58)
    for i, x in enumerate(v): ax.text(i, x + 1, '≈ ' + pct(x), ha='center', fontsize=9, weight='bold', color=INK)
    ax.set_xticks(range(3)); ax.set_xticklabels(['Diestros fuertes', 'Ambidiestros', 'Zurdos fuertes'])
    ax.set_ylim(0, 32); ax.set_ylabel('Lenguaje en el\nhemisferio derecho (%)'); clean(ax)
    note(ax, 'Datos: Knecht et al., 2000 (Doppler transcraneal funcional)', y=-.3, x=-.18)
    save(fig, 'lateralizacion-lenguaje.png', 'm')

# ───────────────────────── U5 · Lenguaje ─────────────────────────
if want('lichtheim-casa'):
    fig, ax = canvas(W['m'], 3.1, 4.6, 3.1)
    pA, pM, pB = (.55, 1.25), (2.05, 1.25), (1.3, 2.55)
    for p, q in [(pA, pM), (pA, pB), (pB, pM)]: ax.plot([p[0], q[0]], [p[1], q[1]], color=INK, lw=1.6, zorder=1)
    for p, l, c in [(pA, 'A', P), (pM, 'M', G), (pB, 'B', V)]:
        ax.add_patch(Circle(p, .26, fc=c, ec='none', zorder=2)); txt(ax, *p, l, 11, 'white', weight='bold', zorder=3)
    txt(ax, pA[0] - .32, pA[1] + .3, 'auditivo', 8.4, P, ha='right'); txt(ax, pM[0] + .3, pM[1] + .3, 'motor', 8.4, G, ha='left')
    txt(ax, pB[0] + .32, pB[1] + .05, 'conceptos', 8.4, V, ha='left')
    arr(ax, (.55, .35), (.55, .97)); txt(ax, .55, .2, 'oído', 8.4, MUTE)
    arr(ax, (2.05, .97), (2.05, .35)); txt(ax, 2.05, .2, 'habla', 8.4, MUTE)
    def les(p, n):
        ax.add_patch(Circle(p, .14, fc='white', ec=A, lw=1.6, zorder=4)); txt(ax, *p, str(n), 8.6, A, weight='bold', zorder=5)
    les((pM[0] + .22, pM[1] - .22), 1); les((pA[0] - .22, pA[1] - .22), 2); les(((pA[0] + pM[0]) / 2, pA[1]), 3); les(((pB[0] + pM[0]) / 2, (pB[1] + pM[1]) / 2), 4); les(((pB[0] + pA[0]) / 2, (pB[1] + pA[1]) / 2), 5)
    lg = ['Broca', 'Wernicke', 'Conducción', 'Transcortical motora', 'Transcortical sensorial']
    txt(ax, 2.95, 2.75, 'Lesión → afasia', 8.8, INK, ha='left', weight='bold')
    for i, t in enumerate(lg):
        y = 2.35 - i * .36; ax.add_patch(Circle((3.07, y), .12, fc='white', ec=A, lw=1.4)); txt(ax, 3.07, y, str(i + 1), 8.2, A, weight='bold')
        txt(ax, 3.27, y, t, 8.4, INK, ha='left')
    ax.set_aspect('equal'); note(ax, y=-.02)
    save(fig, 'lichtheim-casa.png', 'm')

if want('doble-via'):
    fig, ax = canvas(W['m'], 2.8, 4.6, 2.8)
    box(ax, .7, 1.35, 1.25, .7, 'Temporal\nsuperior\n(análisis del\nsonido)', INK, 8.4)
    box(ax, 2.2, 2.1, 1.2, .5, 'Spt', A, 8.8); box(ax, 3.75, 2.1, 1.4, .5, 'Frontal\nposterior', A, 8.6)
    box(ax, 2.55, .6, 1.9, .5, 'Temporal medio\ne inferior', P, 8.6)
    arr(ax, (1.0, 1.72), (1.6, 2.1), A, lw=1.8); arr(ax, (2.82, 2.1), (3.03, 2.1), A, lw=1.8)
    arr(ax, (1.0, .98), (1.58, .62), P, lw=1.8)
    txt(ax, 2.95, 2.62, 'Vía dorsal · izquierda: sonido → articulación', 8.4, A, weight='bold')
    txt(ax, 2.55, .12, 'Vía ventral · bilateral: sonido → significado', 8.4, P, weight='bold')
    txt(ax, 3.4, 1.33, 'Spt: área silviana\nparietotemporal', 8, MUTE)
    note(ax, y=-.06)
    save(fig, 'doble-via.png', 'm')

# ───────────────────────── U6 · Afasias ─────────────────────────
if want('afasias-arbol'):
    fig, ax = canvas(W['f'], 3.9, 6.6, 3.9)
    ys = [3.45 - i * .42 for i in range(8)]
    hojas = ['Broca', 'Transcortical\nmotora', 'Global', 'Transcortical\nmixta', 'Conducción', 'Anómica', 'Wernicke', 'Transcortical\nsensorial']
    hc = [P, P, INK, INK, G, G, A, A]
    box(ax, .45, np.mean(ys), .82, .55, 'Paciente\ncon afasia', MUTE, 8.6)
    for k, fl in enumerate(['No fluida', 'Fluida']):
        yf = np.mean(ys[k * 4:k * 4 + 4]); box(ax, 1.55, yf, 1.0, .4, fl, INK, 8.8); arr(ax, (.86, np.mean(ys)), (1.04, yf), MUTE, lw=1)
        for m, co in enumerate(['Comprensión\nconservada', 'Comprensión\nalterada']):
            i0 = k * 4 + m * 2; yc = np.mean(ys[i0:i0 + 2])
            box(ax, 2.95, yc, 1.3, .5, co, 'white', 8.4, tc=INK, ec=MUTE, bold=False); arr(ax, (2.06, yf), (2.28, yc), MUTE, lw=1)
            for r, rep in enumerate(['Repite mal', 'Repite bien']):
                i = i0 + r; yr = ys[i]
                box(ax, 4.35, yr, 1.05, .32, rep, SOFT, 8.4, tc=INK, bold=False); arr(ax, (3.61, yc), (3.81, yr), MUTE, lw=1)
                box(ax, 5.85, yr, 1.4, .35, hojas[i], hc[i], 8.4); arr(ax, (4.88, yr), (5.13, yr), MUTE, lw=1)
    for x, t in [(1.55, 'Fluidez'), (2.95, 'Comprensión'), (4.35, 'Repetición'), (5.85, 'Afasia')]: txt(ax, x, 3.82, t, 8.4, MUTE, weight='bold')
    note(ax, y=-.03)
    save(fig, 'afasias-arbol.png', 'f')

# ───────────────────────── U7 · Funciones ejecutivas ─────────────────────────
if want('unidad-diversidad'):
    fig, ax = canvas(W['m'], 3.0, 4.6, 3.0)
    def lat(x, y, w, t, c):
        ax.add_patch(Ellipse((x, y), w, .55, fc=c, ec='none')); txt(ax, x, y, t, 8.4, 'white', weight='bold')
    lat(2.3, 2.55, 3.0, 'Factor común (incluye la inhibición)', V)
    tasks = [(.8, 'Stroop\n(inhibición)'), (2.3, 'n-back\n(actualización)'), (3.8, 'Cambio de tarea\n(cambio)')]
    for x, t in tasks:
        box(ax, x, 1.45, 1.35, .55, t, 'white', 8.4, tc=INK, ec=MUTE); arr(ax, (2.3 + (x - 2.3) * .45, 2.28), (x, 1.75), V)
    lat(2.3, .35, 1.45, 'Actualización\nespecífica', G); lat(3.8, .35, 1.3, 'Cambio\nespecífico', Y)
    arr(ax, (2.3, .63), (2.3, 1.15), G); arr(ax, (3.8, .63), (3.8, 1.15), Y)
    txt(ax, .8, .5, 'Sin factor específico\nde inhibición', 8.2, MUTE, style='italic')
    note(ax, 'Esquema del modelo de Friedman y Miyake (2017), no datos', y=-.05)
    save(fig, 'unidad-diversidad.png', 'm')

if want('circuitos-alexander'):
    fig, ax = canvas(W['f'], 3.2, 6.6, 3.2)
    pts = {'Corteza\nfrontal': (1.55, 2.6), 'Estriado': (2.65, 1.6), 'Pálido /\nsustancia negra': (1.55, .6), 'Tálamo': (.5, 1.6)}
    cs = [P, G, V, Y]; ws = [1.2, .95, 1.55, .9]
    for (t, p), c, w in zip(pts.items(), cs, ws): box(ax, p[0], p[1], w, .55, t, c, 8.6, tc='white' if c != Y else INK)
    arr(ax, (2.05, 2.4), (2.5, 1.92)); arr(ax, (2.5, 1.28), (2.1, .9)); arr(ax, (.95, .9), (.55, 1.28)); arr(ax, (.55, 1.92), (1.0, 2.36))
    txt(ax, 1.55, 1.6, 'cinco bucles\nparalelos', 8.4, MUTE, style='italic')
    circ = [('Motor', None), ('Oculomotor', None), ('Prefrontal dorsolateral', 'Síndrome disejecutivo: perseveración,\nplanificación pobre'),
            ('Orbitofrontal lateral', 'Desinhibición, impulsividad,\nconducta social inapropiada'), ('Cingulado anterior', 'Apatía, abulia\n(mutismo acinético)')]
    txt(ax, 3.35, 3.0, 'Circuito', 8.6, MUTE, ha='left', weight='bold'); txt(ax, 5.0, 3.0, 'Síndrome tras la lesión', 8.6, MUTE, ha='left', weight='bold')
    for i, (n, s) in enumerate(circ):
        y = 2.6 - i * .55
        c = INK if s else MUTE
        box(ax, 4.05, y, 1.45, .42, n.replace(' ', '\n', 1) if len(n) > 12 else n, c if s else SOFT, 8.4, tc='white' if s else INK)
        if s: arr(ax, (4.8, y), (4.95, y), A, ms=9); txt(ax, 5.0, y, s, 8.2, A, ha='left')
    txt(ax, 5.1, 2.33, 'no prefrontales', 8.2, MUTE, ha='left', style='italic')
    note(ax, y=-.03)
    save(fig, 'circuitos-alexander.png', 'f')

# ───────────────────────── U8 · Emoción ─────────────────────────
if want('teorias-emocion'):
    fig, ax = canvas(W['f'], 4.0, 6.6, 4.0)
    rows = [('James-Lange', 3.45, P), ('Cannon-Bard', 2.45, G), ('Schachter-Singer', 1.45, Y), ('Construcción\n(Barrett)', .5, V)]
    for n, y, c in rows:
        ax.add_patch(FancyBboxPatch((.05, y - .3), 1.25, .6, boxstyle='round,pad=0.02,rounding_size=0.1', fc=lite(c, .3), ec='none'))
        txt(ax, .67, y, n, 8.8, INK, weight='bold')
    def ch(x, y, t, c, w=1.25, h=.46): box(ax, x, y, w, h, t, 'white', 8.4, tc=INK, ec=c, bold=False)
    def emo(x, y, c, t='Emoción'): box(ax, x, y, 1.1, .46, t, c, 8.8, tc='white' if c != Y else INK)
    y = 3.45; ch(2.1, y, 'Estímulo', P); ch(3.75, y, 'Cambios\ncorporales', P); emo(5.6, y, P)
    arr(ax, (2.74, y), (3.11, y)); arr(ax, (4.39, y), (5.04, y))
    y = 2.45; ch(2.1, y, 'Estímulo', G); ch(3.45, y, 'Tálamo', G, 1.0)
    box(ax, 5.4, y + .27, 2.0, .42, 'Corteza: experiencia', G, 8.4); box(ax, 5.4, y - .27, 2.0, .42, 'Cuerpo: cambios fisiológicos', 'white', 8.4, tc=INK, ec=G, bold=False)
    arr(ax, (2.74, y), (2.94, y)); arr(ax, (3.96, y + .06), (4.39, y + .25)); arr(ax, (3.96, y - .06), (4.39, y - .25))
    txt(ax, 3.45, y - .38, '(en paralelo)', 8, MUTE, style='italic')
    for y, i1, i2, eo, c in [(1.45, 'Activación\nfisiológica', 'Etiqueta cognitiva\n(según el contexto)', 'Emoción', Y),
                             (.5, 'Sensaciones\ncorporales', 'Conceptos\naprendidos', 'Emoción\nconstruida', V)]:
        ch(2.1, y, i1, c); txt(ax, 2.95, y, '+', 13, INK, weight='bold'); ch(3.9, y, i2, c, 1.55)
        emo(5.6, y, c, eo); arr(ax, (4.7, y), (5.04, y))
    note(ax, y=-.04)
    save(fig, 'teorias-emocion.png', 'f')

if want('papez'):
    fig, ax = canvas(W['m'], 3.2, 4.6, 3.2)
    nodes = ['Hipocampo', 'Fórnix', 'Cuerpos\nmamilares', 'Tálamo\nanterior', 'Corteza\ncingulada', 'Corteza\nentorrinal']
    cols = [P, T, G, Y, V, A]
    cx, cy, rx, ry = 2.3, 1.65, 1.7, 1.2
    angs = [270, 330, 30, 90, 150, 210]
    E = lambda a: (cx + rx * np.cos(np.deg2rad(a)), cy + ry * np.sin(np.deg2rad(a)))
    pos = [E(a) for a in angs]
    ax.add_patch(Ellipse((cx, cy), 2 * rx, 2 * ry, fc='none', ec=lite(INK, .25), lw=1, zorder=0))
    for (x, y), t, c in zip(pos, nodes, cols): box(ax, x, y, 1.12, .5, t, c, 8.6, tc='white' if c != Y else INK)
    for a in angs:
        ax.add_patch(FancyArrowPatch(E(a + 22), E(a + 38), arrowstyle='-|>', mutation_scale=13, color=INK, lw=1.8, connectionstyle='arc3,rad=.06', zorder=5, shrinkA=0, shrinkB=0))
    txt(ax, cx, cy, 'Circuito\nde Papez\n(1937)', 9, MUTE, style='italic')
    note(ax, y=-.03)
    save(fig, 'papez.png', 'm')

if want('schachter-diseno'):
    fig, ax = canvas(W['m'], 3.0, 4.6, 3.0)
    rows = [('Epinefrina\ninformada', 'activación explicada:\npoca emoción', True), ('Epinefrina\nmal informada', 'activación sin explicar:\nemoción del cómplice', False),
            ('Epinefrina\nignorante', 'activación sin explicar:\nemoción del cómplice', True), ('Placebo', 'sin activación:\npoca emoción', True)]
    x0, x1, x2, x3 = .62, 1.95, 3.45, 4.17
    for x, t in [(x0, 'Condición'), (x1, 'Predicción'), (x2, 'Cómplice\neufórico'), (x3, 'Cómplice\nenfadado')]: txt(ax, x, 2.72, t, 8.4, MUTE, weight='bold')
    for i, (c, p, ang) in enumerate(rows):
        y = 2.2 - i * .52
        ax.add_patch(Rectangle((.02, y - .25), 4.56, .5, fc=SOFT if i % 2 == 0 else 'white', ec='none'))
        txt(ax, x0, y, c, 8.4, INK, weight='bold'); txt(ax, x1, y, p, 8.2, INK)
        txt(ax, x2, y, '✓', 11, G, weight='bold'); txt(ax, x3, y, '✓' if ang else 'no se\naplicó', 11 if ang else 8, G if ang else MUTE, weight='bold' if ang else 'normal')
    txt(ax, 2.3, .1, 'Réplicas sin éxito de la forma fuerte:\nMarshall y Zimbardo (1979); Maslach (1979)', 8.2, A)
    ax.set_ylim(-.25, 3.0)
    note(ax, 'Esquema del diseño de Schachter y Singer (1962), no datos', y=-.05)
    save(fig, 'schachter-diseno.png', 'm')

if want('ledoux-dos-sistemas'):
    fig, ax = canvas(W['m'], 2.9, 4.6, 2.9)
    box(ax, .5, 1.45, .85, .55, 'Amenaza', INK, 9)
    box(ax, 1.95, 2.1, 1.35, .55, 'Amígdala\ny BNST', A, 8.8)
    box(ax, 3.7, 2.1, 1.65, .75, 'Respuestas defensivas:\ncongelación, SNA,\neje HHA', 'white', 8.2, tc=INK, ec=A, bold=False)
    box(ax, 1.95, .8, 1.35, .7, 'Circuitos\ncorticales de\nmemoria de trabajo', P, 8)
    box(ax, 3.7, .8, 1.65, .6, 'Sentimiento\nconsciente de miedo', 'white', 8.4, tc=INK, ec=P, bold=False)
    arr(ax, (.93, 1.6), (1.26, 2.0)); arr(ax, (.93, 1.3), (1.26, .95)); arr(ax, (2.64, 2.1), (2.86, 2.1)); arr(ax, (2.64, .8), (2.86, .8))
    txt(ax, 2.6, 2.7, 'Circuitos de supervivencia (no conscientes)', 8.4, A, weight='bold')
    txt(ax, 2.6, .25, 'Experiencia consciente', 8.4, P, weight='bold')
    arr(ax, (1.95, 1.8), (1.95, 1.18), MUTE, ls='--', lw=1)
    txt(ax, 2.05, 1.48, 'informan', 8, MUTE, ha='left')
    note(ax, 'Esquema basado en LeDoux y Pine (2016), no datos', y=-.05)
    save(fig, 'ledoux-dos-sistemas.png', 'm')

# ───────────────────────── U9 · Estrés ─────────────────────────
if want('hha'):
    fig = plt.figure(figsize=(W['f'], 3.6))
    ax = fig.add_axes([0, .07, .5, .93]); ax.set_xlim(0, 3.3); ax.set_ylim(0, 3.6); ax.axis('off')
    ch = [('Estrés', 3.3, INK), ('Hipotálamo\n(núcleo paraventricular)', 2.6, P), ('Adenohipófisis', 1.75, G), ('Corteza suprarrenal', .9, Y)]
    for t, y, c in ch: box(ax, 1.25, y, 1.9 if '\n' in t else 1.75, .5 if '\n' in t else .4, t, c, 8.6, tc='white' if c != Y else INK)
    arr(ax, (1.25, 3.1), (1.25, 2.86)); arr(ax, (1.25, 2.34), (1.25, 1.96)); arr(ax, (1.25, 1.54), (1.25, 1.11)); arr(ax, (1.25, .69), (1.25, .38))
    txt(ax, 1.35, 2.15, 'CRH', 8.6, P, ha='left', weight='bold'); txt(ax, 1.35, 1.32, 'ACTH', 8.6, G, ha='left', weight='bold')
    box(ax, 1.25, .2, 1.1, .32, 'Cortisol', A, 8.8)
    box(ax, 2.85, 3.1, .85, .38, 'Hipocampo', 'white', 8.2, tc=A, ec=A)
    ax.plot([1.85, 2.95, 2.95], [.2, .2, 2.6], color=A, lw=1.3, ls='--'); inh(ax, (2.95, 2.6), (2.95, 2.88), A, lw=1.3)
    inh(ax, (2.95, 2.6), (2.23, 2.6), A, lw=1.3); inh(ax, (2.95, 1.75), (2.15, 1.75), A, lw=1.3)
    txt(ax, 3.05, 1.2, 'retroalimentación\nnegativa', 8.2, A, ha='left', rotation=90)
    # patrones de McEwen
    t = np.linspace(0, 10, 500)
    def pico(t0, h=1, dur=.5, cola=.6):
        return h * np.where(t < t0, 0, (1 - np.exp(-(t - t0) / .15)) * np.exp(-np.clip(t - t0 - dur, 0, None) / cola))
    pats = [('Respuesta\nnormal', pico(2), [2]), ('Estrés\nrepetido', pico(1) + pico(3.5) + pico(6) + pico(8.3), [1, 3.5, 6, 8.3]),
            ('Falta de\nhabituación', pico(1.5) + pico(4.5) + pico(7.5), [1.5, 4.5, 7.5]), ('Respuesta\nprolongada', pico(2, 1, 6, 2.5), [2])]
    for i, (n, y, ev) in enumerate(pats):
        a = fig.add_axes([.575 + (i % 2) * .215, .5 - (i // 2) * .36, .19, .2])
        a.plot(t, y, color=A, lw=1.8); a.fill_between(t, y, color=A, alpha=.12)
        for e in ev: a.plot([e], [-.12], marker='^', color=INK, ms=4.5)
        if n.startswith('Falta'):
            a.plot(t, pico(1.5) + pico(4.5, .55) + pico(7.5, .3), color=MUTE, lw=1, ls='--')
        a.set_ylim(-.22, 1.25); a.set_xlim(0, 10); a.set_xticks([]); a.set_yticks([]); clean(a)
        a.set_title(n, fontsize=8.6, weight='bold', pad=3)
        if i % 2 == 0: a.set_ylabel('Cortisol', fontsize=8.2)
    fig.text(.575, .02, '▲ estresor · - - - habituación esperada\nNo se muestra: respuesta insuficiente', fontsize=8, color=MUTE)
    fig.text(.575, .94, 'Patrones de McEwen (1998)', fontsize=9, color=INK, weight='bold')
    fig.text(.01, .015, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    fig.savefig(f'{OUT}/hha.png', dpi=200)
    k = PAGE['f'] / fig.get_figwidth(); print('ok hha.png  (mín.', round(min(t_.get_fontsize() for t_ in fig.findobj(Text) if t_.get_text().strip()) * k, 1), 'pt)'); plt.close(fig)

# ───────────────────────── U10 · Aprendizaje ─────────────────────────
if want('aplysia-circuito'):
    fig, ax = canvas(W['m'], 3.4, 4.6, 3.4)
    y = 2.95
    box(ax, .42, y, .74, .48, 'Sifón', T, 8.6); box(ax, 1.58, y, 1.12, .5, 'Neurona\nsensorial', P, 8.4)
    box(ax, 3.0, y, 1.05, .5, 'Neurona\nmotora', G, 8.4); box(ax, 4.15, y, .82, .48, 'Branquia', T, 8.6)
    arr(ax, (.8, y), (1.0, y)); arr(ax, (2.15, y), (2.46, y)); arr(ax, (3.54, y), (3.72, y))
    txt(ax, 2.3, 3.33, 'glutamato', 8, MUTE)
    box(ax, .42, 1.95, .74, .5, 'Cola', MUTE, 8.6)
    box(ax, 1.85, 1.95, 1.75, .52, 'Interneurona\nfacilitadora (5-HT)', V, 8.4)
    arr(ax, (.8, 1.95), (.96, 1.95)); arr(ax, (2.3, 2.22), (2.3, 2.85), V, lw=1.8)
    txt(ax, 2.4, 2.48, 'serotonina', 8, V, ha='left')
    txt(ax, 3.55, 1.95, 'Sensibilización:\nestímulo intenso\nen la cola', 8.2, INK)
    ax.add_patch(FancyBboxPatch((.05, .08), 4.5, 1.32, boxstyle='round,pad=0.02,rounding_size=0.1', fc=SOFT, ec='none'))
    txt(ax, 4.48, 1.27, 'En el terminal de la neurona sensorial', 8.2, MUTE, ha='right', style='italic')
    box(ax, .5, .78, .7, .38, 'AMPc', P, 8.6); box(ax, 1.45, .78, .7, .38, 'PKA', P, 8.6)
    box(ax, 3.35, .9, 2.1, .4, 'Más glutamato (corto plazo)', 'white', 8.2, tc=INK, ec=P, bold=False)
    box(ax, 2.05, .32, .7, .34, 'CREB', V, 8.6); box(ax, 3.55, .32, 1.7, .4, 'Nuevas sinapsis\n(largo plazo)', 'white', 8, tc=INK, ec=V, bold=False)
    arr(ax, (.87, .78), (1.08, .78)); arr(ax, (1.82, .82), (2.28, .9)); arr(ax, (1.6, .58), (1.74, .4)); arr(ax, (2.42, .32), (2.68, .32))
    arr(ax, (1.2, 1.68), (.65, 1.0), V, lw=1.2)
    note(ax, y=-.03)
    save(fig, 'aplysia-circuito.png', 'm')

if want('ltp-nmda'):
    fig, axs = plt.subplots(1, 2, figsize=(W['f'], 3.3))
    for k, a in enumerate(axs):
        a.set_xlim(0, 3.2); a.set_ylim(0, 3.1); a.axis('off')
        a.add_patch(FancyBboxPatch((.4, 2.3), 2.4, .5, boxstyle='round,pad=0.02,rounding_size=0.2', fc=lite(MUTE, .35), ec='none'))
        txt(a, 1.6, 2.55, 'Terminal presináptico', 8.4, INK)
        for x, y in [(1.0, 2.05), (1.3, 1.9), (1.6, 2.05), (1.9, 1.9), (2.15, 2.05)]: a.add_patch(Circle((x, y), .05, fc=Y, ec='none'))
        txt(a, .05, 1.97, 'glutamato', 8.2, '#9A7420', ha='left')
        a.add_patch(Rectangle((.05, 1.35), 3.1, .2, fc=lite(P, .25), ec='none'))
        def canal(x, c, lab):
            a.add_patch(Rectangle((x - .2, 1.25), .13, .4, fc=c, ec='none')); a.add_patch(Rectangle((x + .07, 1.25), .13, .4, fc=c, ec='none'))
            txt(a, x, 1.78, lab, 8.2, c, weight='bold')
        canal(.85, G, 'AMPA'); canal(2.25, A, 'NMDA')
        arr(a, (.85, 1.68), (.85, .95), G, lw=1.6, ms=10); txt(a, .62, 1.05, 'Na⁺', 8.6, G, ha='right', weight='bold')
        if k == 0:
            a.add_patch(Circle((2.25, 1.45), .07, fc=INK, ec='none')); txt(a, 2.5, 1.12, 'Mg²⁺ tapona\nel canal', 8.2, INK, ha='left')
            a.set_title('En reposo', fontsize=9.5, weight='bold')
            txt(a, 1.6, .5, 'Solo conduce el AMPA:\nel NMDA queda bloqueado', 8.4, INK)
        else:
            a.add_patch(Circle((2.6, 1.85), .07, fc=INK, ec='none')); txt(a, 2.72, 1.9, 'Mg²⁺\nexpulsado', 8.2, INK, ha='left')
            arr(a, (2.25, 1.68), (2.25, .98), A, lw=1.8, ms=10); txt(a, 2.47, 1.05, 'Ca²⁺', 8.6, A, ha='left', weight='bold')
            box(a, 2.25, .68, .9, .3, 'CaMKII', A, 8.4)
            box(a, 1.05, .25, 1.75, .32, 'Más receptores AMPA', G, 8.2)
            arr(a, (1.8, .63), (1.55, .43), A, lw=1.2, ms=9)
            a.set_title('Con despolarización', fontsize=9.5, weight='bold')
    fig.text(.99, .015, 'Glutamato + despolarización: el NMDA detecta la coincidencia', ha='right', fontsize=8.4, color=INK, style='italic')
    fig.text(.01, .015, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'ltp-nmda.png', 'f', rect=(0, .06, 1, 1))

# ───────────────────────── U11 · Memoria ─────────────────────────
if want('consolidacion-modelos'):
    fig, (a1, a2) = plt.subplots(1, 2, figsize=(W['m'], 2.4), sharey=True)
    t = np.linspace(0, 10, 200)
    a1.plot(t, np.exp(-t / 2.2), color=P, lw=2.2); a1.set_title('Modelo estándar', fontsize=9, weight='bold')
    txt(a1, 5.2, .55, 'toda la memoria\ndeclarativa', 8.2, P)
    a2.plot(t, .92 - .012 * t, color=A, lw=2.2); a2.plot(t, np.exp(-t / 2.2), color=G, lw=2.2, ls='--')
    a2.set_title('Huella múltiple', fontsize=9, weight='bold')
    txt(a2, 5, .72, 'episódica', 8.4, A); txt(a2, 5.8, .27, 'semántica', 8.4, G)
    for a in (a1, a2):
        a.set_xticks([]); a.set_yticks([]); a.set_ylim(0, 1.05); a.set_xlabel('Tiempo desde la\ncodificación', fontsize=8.4); clean(a)
    a1.set_ylabel('Dependencia del\nhipocampo', fontsize=8.6)
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'consolidacion-modelos.png', 'm', rect=(0, .08, 1, 1))

# ───────────────────────── U12 · Ritmos y control del sueño ─────────────────────────
if want('flip-flop'):
    fig, ax = canvas(W['m'], 2.9, 4.6, 2.9)
    box(ax, .95, 1.2, 1.6, .9, 'VLPO\n(GABA y galanina)', V, 8.6)
    box(ax, 3.45, 1.2, 2.0, 1.1, 'Sistemas del despertar:\nlocus coeruleus, rafe,\ntuberomamilar,\ncolinérgicos', P, 8.0)
    inh(ax, (1.78, 1.38), (2.42, 1.38), A); inh(ax, (2.42, 1.0), (1.78, 1.0), A)
    box(ax, 3.45, 2.55, 1.6, .45, 'Orexina', Y, 8.8, tc=INK)
    arr(ax, (3.45, 2.31), (3.45, 1.78), Y, lw=2)
    txt(ax, 3.55, 2.05, 'estabiliza la vigilia', 8.2, '#9A7420', ha='left')
    txt(ax, .95, .5, 'sueño', 9, V, weight='bold'); txt(ax, 3.45, .4, 'vigilia', 9, P, weight='bold')
    txt(ax, 2.1, 1.65, 'inhibición\nmutua', 8.2, A)
    txt(ax, .05, 2.65, '→ activa    ⊣ inhibe', 8.2, MUTE, ha='left')
    note(ax, y=-.02)
    save(fig, 'flip-flop.png', 'm')

if want('borbely'):
    fig, ax = plt.subplots(figsize=(W['m'], 2.7))
    t = np.linspace(0, 48, 1200); S = np.zeros_like(t); s = .25; dt = t[1] - t[0]
    for i, x in enumerate(t):
        dormido = (x % 24) >= 16
        s = s * np.exp(-dt / 4.2) if dormido else 1 - (1 - s) * np.exp(-dt / 18.2); S[i] = s
    C = .55 + .2 * np.sin(2 * np.pi * (t - 6) / 24)
    for a in (16, 40): ax.axvspan(a, a + 8, color=V, alpha=.1, lw=0)
    ax.plot(t, S, color=P, lw=2.2); ax.plot(t, C, color=Y, lw=2.2)
    txt(ax, 12.5, S[np.searchsorted(t, 10)] - .17, 'Proceso S', 8.6, P, weight='bold'); txt(ax, 29, .79, 'Proceso C', 8.6, '#9A7420', weight='bold')
    txt(ax, 20, .06, 'sueño', 8.4, V); txt(ax, 44, .06, 'sueño', 8.4, V)
    ax.set_xticks([0, 8, 16, 24, 32, 40, 48]); ax.set_xticklabels(['7:00', '15:00', '23:00', '7:00', '15:00', '23:00', '7:00'], fontsize=8.4)
    ax.set_yticks([]); ax.set_ylim(0, 1); ax.set_xlim(0, 48); ax.set_ylabel('Nivel'); ax.set_xlabel('Hora del día (48 h)'); clean(ax)
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'borbely.png', 'm', rect=(0, .07, 1, 1))

# ───────────────────────── U13 · Fases y trastornos del sueño ─────────────────────────
if want('hipnograma'):
    seq = [('W', 10), ('N1', 5), ('N2', 15), ('N3', 40), ('N2', 12), ('R', 8),
           ('N1', 3), ('N2', 20), ('N3', 35), ('N2', 15), ('R', 17),
           ('W', 2), ('N1', 3), ('N2', 35), ('N3', 15), ('N2', 15), ('R', 20),
           ('N1', 3), ('N2', 45), ('N3', 5), ('N2', 7), ('R', 30),
           ('W', 3), ('N1', 4), ('N2', 50), ('R', 38), ('N1', 5), ('W', 20)]
    lv = {'W': 4, 'R': 3, 'N1': 2, 'N2': 1, 'N3': 0}
    xs, ys = [0], []; t0 = 0
    fig, ax = plt.subplots(figsize=(W['f'], 2.7))
    for s, d in seq:
        if s == 'R': ax.add_patch(Rectangle((t0 / 60, lv['R'] - .14), d / 60, .28, fc=A, ec='none', zorder=3))
        if s == 'N3': ax.add_patch(Rectangle((t0 / 60, -.14), d / 60, .28, fc=P, ec='none', zorder=3))
        t0 += d; xs.append(t0 / 60); ys.append(lv[s])
    ax.step(xs, ys + [ys[-1]], where='post', color=INK, lw=1.1)
    ax.set_yticks([4, 3, 2, 1, 0]); ax.set_yticklabels(['W', 'R', 'N1', 'N2', 'N3']); ax.set_ylim(-.85, 4.95)
    ax.set_xticks(range(9)); ax.set_xticklabels([f'{h} h' for h in range(9)]); ax.set_xlim(0, 8); clean(ax)
    ax.annotate('', (1.5, 4.55), (0, 4.55), arrowprops=dict(arrowstyle='<->', color=MUTE, lw=1)); txt(ax, .75, 4.75, 'ciclo ≈ 90 min', 8.2, MUTE)
    txt(ax, 1.5, -.55, 'N3 predomina en la primera mitad', 8.2, P)
    txt(ax, 6.4, 4.7, 'periodos REM más largos al final', 8.2, A)
    ax.set_xlabel('Tiempo desde que se apaga la luz')
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    save(fig, 'hipnograma.png', 'f', rect=(0, .06, 1, 1))

if want('tcsr-conversion'):
    fig, ax = plt.subplots(figsize=(W['m'], 2.7))
    a = [2, 3, 5, 8, 10, 12]; v = [10.6, 17.9, 31.3, 51.4, 60.2, 73.5]
    ax.plot(a, v, '-o', color=A, lw=2.2, ms=5.5)
    for x, y in zip(a, v): txt(ax, x - .25, y + 5, pct(y), 8.4, INK, weight='bold', ha='right' if x < 12 else 'center')
    ax.set_xticks([0, 2, 3, 5, 8, 10, 12]); ax.set_xlim(0, 13); ax.set_ylim(0, 90)
    ax.set_xlabel('Años de seguimiento'); ax.set_ylabel('Conversión\nacumulada (%)'); clean(ax)
    fig.text(.01, .02, 'Datos: Postuma et al., 2019; N = 1.280 (24 centros)', fontsize=8.2, color=MUTE)
    save(fig, 'tcsr-conversion.png', 'm', rect=(0, .07, 1, 1))

# ───────────────────────── U14 · Diferenciación sexual ─────────────────────────
if want('diferenciacion-sexual'):
    fig, ax = canvas(W['f'], 4.1, 6.6, 4.1)
    def tag(x, y, n): ax.add_patch(Circle((x, y), .11, fc=A, ec='none', zorder=5)); txt(ax, x, y, str(n), 8.2, 'white', weight='bold', zorder=6)
    box(ax, .35, 2.8, .5, .45, 'XY', P, 9.5); box(ax, 1.15, 2.8, .6, .4, 'SRY', P, 9); box(ax, 2.1, 2.8, .9, .45, 'Testículo', P, 8.8)
    arr(ax, (.62, 2.8), (.83, 2.8)); arr(ax, (1.47, 2.8), (1.63, 2.8))
    box(ax, 3.35, 3.45, 1.15, .38, 'Testosterona', G, 8.4); box(ax, 3.35, 2.15, 1.3, .48, 'Hormona\nantimülleriana', V, 8.2)
    box(ax, 4.38, 2.75, .6, .36, 'DHT', G, 8.8)
    arr(ax, (2.47, 3.03), (2.75, 3.38)); arr(ax, (2.47, 2.57), (2.68, 2.25))
    arr(ax, (3.6, 3.24), (4.2, 2.94)); txt(ax, 3.8, 2.72, '5α-reductasa', 8, MUTE, ha='right')
    ex = 5.72
    box(ax, ex, 3.45, 1.66, .38, 'Desarrollo de Wolff', 'white', 8.4, tc=INK, ec=G, bold=False)
    box(ax, ex, 2.75, 1.66, .44, 'Genitales externos\nmasculinos', 'white', 8.2, tc=INK, ec=G, bold=False)
    box(ax, ex, 2.15, 1.66, .38, 'Regresión de Müller', 'white', 8.4, tc=INK, ec=V, bold=False)
    arr(ax, (3.95, 3.45), (4.86, 3.45)); arr(ax, (4.69, 2.75), (4.86, 2.75)); arr(ax, (4.02, 2.15), (4.86, 2.15))
    tag(4.42, 3.45, 1); tag(4.9, 3.02, 1); tag(4.0, 3.17, 2)
    box(ax, .35, 1.2, .5, .45, 'XX', A, 9.5); box(ax, 1.15, 1.2, .7, .4, 'sin SRY', 'white', 8.2, tc=INK, ec=A, bold=False)
    box(ax, 2.1, 1.2, .9, .45, 'Ovario', A, 8.8)
    arr(ax, (.62, 1.2), (.78, 1.2)); arr(ax, (1.52, 1.2), (1.63, 1.2))
    box(ax, 4.6, 1.2, 3.5, .6, 'Sin hormona antimülleriana ni testosterona:\nMüller se desarrolla, Wolff regresa,\ngenitales externos femeninos', 'white', 8.2, tc=INK, ec=A, bold=False)
    arr(ax, (2.57, 1.2), (2.83, 1.2))
    box(ax, 3.35, .42, 1.7, .44, 'Suprarrenal: exceso\nde andrógenos', Y, 8, tc=INK); arr(ax, (3.75, .66), (3.95, .88), '#9A7420', lw=1.6)
    tag(2.33, .42, 3)
    lg = ['1  Insensibilidad a andrógenos (XY): los receptores no responden; testículos internos, fenotipo femenino, sin útero',
          '2  Déficit de 5α-reductasa (XY): poca DHT; genitales poco masculinizados al nacer, virilización en la pubertad',
          '3  Hiperplasia suprarrenal congénita (XX): virilización de los genitales externos']
    for i, l in enumerate(lg): txt(ax, .02, -.12 - i * .21, l, 7.9, A, ha='left')
    txt(ax, .02, -.82, 'Esquema ilustrativo, no datos', 8.2, MUTE, ha='left')
    ax.set_ylim(-.95, 3.75)
    save(fig, 'diferenciacion-sexual.png', 'f')

# ───────────────────────── U15 · Sed y hambre ─────────────────────────
if want('sed'):
    fig, ax = canvas(W['m'], 4.2, 4.6, 4.2)
    L, R = 1.1, 3.42
    txt(ax, L, 4.05, 'Sed osmótica', 9.2, P, weight='bold'); txt(ax, L, 3.8, 'líquido intracelular', 8.2, MUTE, style='italic')
    txt(ax, R, 4.05, 'Sed volumétrica', 9.2, A, weight='bold'); txt(ax, R, 3.8, 'líquido extracelular', 8.2, MUTE, style='italic')
    box(ax, L, 3.35, 2.0, .48, 'Sal: deshidratación\ncelular', 'white', 8.2, tc=INK, ec=P)
    box(ax, L, 2.5, 2.0, .62, 'Osmorreceptores\n(OVLT y órgano\nsubfornical)', P, 8.2)
    box(ax, L - .42, 1.45, 1.2, .62, 'Núcleos\nsupraóptico y\nparaventricular', P, 8)
    box(ax, L + .68, 1.45, .62, .42, 'Sed', 'white', 8.8, tc=P, ec=P)
    box(ax, L - .42, .55, 1.2, .4, 'Vasopresina', 'white', 8.6, tc=P, ec=P)
    arr(ax, (L, 3.1), (L, 2.82)); arr(ax, (L - .42, 2.18), (L - .42, 1.77)); arr(ax, (L + .55, 2.18), (L + .68, 1.67))
    arr(ax, (L - .42, 1.13), (L - .42, .76))
    txt(ax, L + .32, .55, 'el riñón\nreabsorbe\nagua', 8, MUTE, ha='left')
    rgt = [('Hemorragia, diarrea', 'white', .38), ('Barorreceptores\ny riñón', A, .46), ('Renina', A, .36), ('Angiotensina II', A, .36), ('Órgano subfornical', A, .36)]
    ys2 = [3.35, 2.7, 2.08, 1.55, 1.02]
    for (t, c, h), y in zip(rgt, ys2): box(ax, R, y, 1.9, h, t, c, 8.2, tc=INK if c == 'white' else 'white', ec=A if c == 'white' else 'none')
    for (_, _, h1), (_, _, h2), a_, b_ in zip(rgt[:-1], rgt[1:], ys2[:-1], ys2[1:]): arr(ax, (R, a_ - h1 / 2 - .02), (R, b_ + h2 / 2 + .02))
    box(ax, R, .4, 1.9, .46, 'Sed y\nvasopresina', 'white', 8.4, tc=A, ec=A)
    arr(ax, (R, .82), (R, .65))
    ax.set_ylim(-.15, 4.2); note(ax, y=-.03)
    save(fig, 'sed.png', 'm')

if want('arcuato'):
    fig, ax = canvas(W['m'], 3.7, 4.6, 3.7)
    sig = [(.8, 'Grelina\n(estómago)', '+ hambre', G), (2.3, 'Leptina, insulina\n(grasa, páncreas)', '− hambre', A), (3.8, 'PYY, CCK, GLP-1\n(intestino)', '− hambre', A)]
    txt(ax, 2.3, 3.55, 'Señales periféricas', 8.6, MUTE, weight='bold')
    for x, t, s, c in sig:
        box(ax, x, 3.05, 1.4, .5, t, 'white', 8, tc=INK, ec=MUTE, bold=False); txt(ax, x, 2.68, s, 8.4, c, weight='bold')
    arr(ax, (2.3, 2.55), (2.3, 2.3), MUTE, lw=1.6)
    ax.add_patch(FancyBboxPatch((.15, 1.3), 4.3, .95, boxstyle='round,pad=0.02,rounding_size=0.12', fc=SOFT, ec=MUTE, lw=.8))
    txt(ax, .25, 2.12, 'Núcleo arcuato', 8.4, MUTE, ha='left', weight='bold')
    box(ax, 1.25, 1.62, 1.7, .5, 'NPY/AgRP\norexígenas', A, 8.4); box(ax, 3.35, 1.62, 1.7, .5, 'POMC/CART\nanorexígenas', G, 8.4)
    box(ax, 2.3, .55, 2.3, .5, 'Paraventricular\n(receptor MC4R)', P, 8.4)
    inh(ax, (1.45, 1.35), (1.9, .82), A, lw=1.8); arr(ax, (3.15, 1.35), (2.7, .82), G, lw=1.8)
    txt(ax, .95, 1.0, 'AgRP bloquea', 8, A); txt(ax, 3.7, 1.0, 'α-MSH activa', 8, '#3F7A55')
    arr(ax, (3.47, .55), (3.75, .55), P); txt(ax, 3.8, .55, 'menos\ningesta', 8.2, P, ha='left')
    txt(ax, 2.3, .08, 'CCK actúa sobre todo por el nervio vago y el tronco', 8, MUTE)
    ax.set_ylim(-.2, 3.7); note(ax, y=-.03)
    save(fig, 'arcuato.png', 'm')

# ───────────────────────── U16 · Recompensa ─────────────────────────
if want('schultz-error'):
    fig, axs = plt.subplots(1, 3, figsize=(W['f'], 2.7), sharey=True)
    rng = np.random.default_rng(7)
    cfg = [('Recompensa\ninesperada', False, True, 1.0, 'pico con la\nrecompensa'), ('Estímulo predictor\n+ recompensa', True, True, 0.0, 'el pico pasa\nal estímulo'),
           ('Estímulo predictor\nsin recompensa', True, False, 0.0, 'pausa cuando se\nesperaba la R')]
    for a, (tt, e, r, ev, lab) in zip(axs, cfg):
        for row in range(10):
            sp = rng.uniform(-.8, 2.0, rng.poisson(9))
            if not r: sp = sp[(sp < 1.0) | (sp > 1.45)]
            sp = np.concatenate([sp, rng.uniform(ev + .03, ev + .2, 6)])
            a.plot(sp, np.full_like(sp, row), '|', color=INK, ms=5, mew=1)
        if e: a.plot([0, 0], [-.7, 9.8], color=P, lw=1.2, ls='--'); txt(a, 0, 10.5, 'E', 9, P, weight='bold')
        if r: a.plot([1, 1], [-.7, 9.8], color=G, lw=1.2, ls='--'); txt(a, 1, 10.5, 'R', 9, G, weight='bold')
        else:
            a.add_patch(Rectangle((1.0, -.7), .45, 10.5, fc=A, alpha=.12, lw=0)); txt(a, 1.22, 10.5, '(sin R)', 8.4, A, weight='bold')
        hx = 1.22 if not r else ev + .1
        txt(a, hx, -1.6, lab, 8.2, A if not r else INK, va='top')
        a.set_title(tt, fontsize=8.8, weight='bold', pad=16); a.set_xlim(-.8, 2); a.set_ylim(-3.6, 10)
        a.set_xticks([]); a.set_yticks([]); a.axis('off')
    fig.text(.01, .02, 'Esquema ilustrativo, no datos', fontsize=8.2, color=MUTE)
    fig.text(.99, .02, 'E: estímulo predictor · R: recompensa · cada raya, un potencial de acción', ha='right', fontsize=8.2, color=MUTE)
    save(fig, 'schultz-error.png', 'f', rect=(0, .07, 1, 1))

if want('vias-dopamina'):
    fig, ax = canvas(W['m'], 3.3, 4.6, 3.3)
    box(ax, .6, 2.15, 1.0, .5, 'ATV', P, 9); box(ax, .6, 1.05, 1.0, .5, 'Sustancia\nnegra', G, 8.4)
    box(ax, .55, .35, .95, .5, 'Hipotálamo\n(arcuato)', Y, 8, tc=INK)
    tg = [('CPF', 2.95, P), ('Núcleo accumbens', 2.35, P), ('Amígdala', 1.75, P), ('Estriado dorsal', 1.05, G), ('Eminencia media', .35, Y)]
    for t, y, c in tg: box(ax, 2.95, y, 1.4, .38, t, 'white', 8.4, tc=INK, ec=c, bold=False)
    arr(ax, (1.12, 2.3), (2.23, 2.92), P); arr(ax, (1.12, 2.17), (2.23, 2.35), P); arr(ax, (1.12, 2.02), (2.23, 1.78), P)
    arr(ax, (1.12, 1.05), (2.23, 1.05), G); arr(ax, (1.05, .35), (2.23, .35), '#9A7420')
    txt(ax, 1.55, 2.73, 'mesocortical', 8, P, rotation=28); txt(ax, 1.72, 2.09, 'mesolímbica', 8, P)
    txt(ax, 1.67, 1.17, 'nigroestriatal', 8, '#3F7A55'); txt(ax, 1.67, .47, 'tuberoinfundibular', 8, '#9A7420')
    box(ax, 4.22, 2.35, .7, .5, 'Pálido\nventral', MUTE, 8)
    arr(ax, (3.67, 2.35), (3.86, 2.35), MUTE, lw=1.2, ms=9)
    ax.set_ylim(-.15, 3.3); note(ax, y=-.03)
    save(fig, 'vias-dopamina.png', 'm')
