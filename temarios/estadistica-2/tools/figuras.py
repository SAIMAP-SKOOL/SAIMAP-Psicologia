"""Figuras propias del temario de Estadística Aplicada a las Ciencias de la Conducta. python3 tools/figuras.py → img/*"""
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
from matplotlib.ticker import ScalarFormatter, FuncFormatter
def _comma(fig):
    for a in fig.axes:
        for ax_ in (a.xaxis, a.yaxis):
            if isinstance(ax_.get_major_formatter(), ScalarFormatter):
                ax_.set_major_formatter(FuncFormatter(lambda v, p: (f'{v:g}').replace('.', ',').replace('-', '−')))
def save(fig, name):
    _comma(fig); fig.tight_layout(); fig.savefig(f'{OUT}/{name}', dpi=200); plt.close(fig); print('ok', name)
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



from scipy import stats
os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(7)
def cm(v, d=2): return f'{v:.{d}f}'.replace('.', ',')

#FIGS
if want('imryd'):
    fig, ax = canvas(7.4, 5.2, 12, 10); ax.set_xlim(-1.6, 12)
    rows = [('Título y resumen', 'de qué trata el estudio, en pocas líneas', 10.4, P),
            ('Introducción', '¿qué se sabe? ¿qué se pregunta? hipótesis', 8.8, V),
            ('Método', 'participantes · instrumentos · procedimiento · análisis', 7.4, G),
            ('Resultados', 'descriptivos · estadísticos con gl y p · efectos e IC', 7.4, Y),
            ('Discusión', 'interpretación · limitaciones · implicaciones', 8.8, A),
            ('Referencias', 'estilo APA 7, con DOI', 10.4, MUTE)]
    ys = [9.1, 7.5, 5.9, 4.3, 2.7, 1.1]
    for (t, s, w, c), y in zip(rows, ys):
        ax.add_patch(FancyBboxPatch((6 - w / 2, y - .6), w, 1.2, boxstyle='round,pad=0.02,rounding_size=0.15', fc=c, ec='none'))
        ax.text(6, y + .2, t, ha='center', va='center', color='white', fontsize=10.5, weight='bold')
        ax.text(6, y - .25, s, ha='center', va='center', color='white', fontsize=7.6)
    ax.text(-1.5, 9.1, 'general', fontsize=8, color=MUTE, va='center'); ax.text(-1.5, 5.1, 'específico', fontsize=8, color=MUTE, va='center')
    ax.text(-1.5, 1.1, 'general', fontsize=8, color=MUTE, va='center')
    note(ax, y=-.03)
    save(fig, 'imryd.png')

if want('fisher-np'):
    fig, ax = canvas(9, 4.6, 16, 9.2)
    cols = [('Fisher (1925)', P, 6.1), ('Neyman y Pearson (1933)', G, 10.0), ('Híbrido habitual (NHST)', A, 13.9)]
    rowsl = ['Hipótesis', 'Papel de p', 'α y potencia', 'Resultado']
    cells = [['Solo H0', 'p como evidencia\ncontinua contra H0', 'No se fijan', 'Juicio provisional,\nque se acumula'],
             ['H0 y H1 explícitas', 'No se usa: solo importa\nsi cae en la región crítica', 'α y β fijados antes;\npotencia planificada', 'Decisión de conducta\n(actuar como si…)'],
             ['H1 vaga o implícita', 'Se compara con 0,05 y\nademás se lee como evidencia', 'α = 0,05 por costumbre;\npotencia ignorada', '«Significativo» o\n«no significativo»']]
    for t, c, x in cols: box(ax, x, 8.4, 3.7, 1.0, t, c, fs=9)
    for i, r in enumerate(rowsl):
        y = 6.6 - i * 1.85
        box(ax, 1.9, y, 3.2, 1.55, r, SOFT, fs=9, tc=INK)
        for j, (t, c, x) in enumerate(cols):
            box(ax, x, y, 3.7, 1.55, cells[j][i], 'white', fs=8, tc=INK, bold=False, ec=c)
    note(ax, y=-.03)
    save(fig, 'fisher-np.png')

if want('h0-h1-potencia'):
    fig, axs = plt.subplots(1, 2, figsize=(9, 3.4), sharey=True)
    d = .5
    for ax, n in zip(axs, (32, 64)):
        df = 2 * n - 2; ncp = d * np.sqrt(n / 2); tc = stats.t.ppf(.975, df)
        x = np.linspace(-4, 7, 600); f0 = stats.t.pdf(x, df); f1 = stats.nct.pdf(x, df, ncp)
        ax.plot(x, f0, color=P, lw=2, label='Si H0 es cierta'); ax.plot(x, f1, color=A, lw=2, label='Si H1 es cierta (d = 0,5)')
        ax.fill_between(x, 0, f0, where=x >= tc, color=MUTE, alpha=.55); ax.fill_between(x, 0, f0, where=x <= -tc, color=MUTE, alpha=.55)
        ax.fill_between(x, 0, f1, where=x < tc, color=Y, alpha=.45); ax.fill_between(x, 0, f1, where=x >= tc, color=A, alpha=.22)
        pw = 1 - stats.nct.cdf(tc, df, ncp) + stats.nct.cdf(-tc, df, ncp)
        ax.axvline(tc, color=INK, ls='--', lw=1); ax.axvline(-tc, color=INK, ls='--', lw=1)
        ax.set_title(f'n = {n} por grupo · potencia ≈ {cm(pw)}'); clean(ax); ax.set_yticks([]); ax.set_xlabel('estadístico t')
        ax.text(tc + .1, .36, f'valor crítico\n{cm(tc)}', fontsize=7.5, color=INK)
        ax.text(tc + .55, .07, '1 − β', fontsize=9, color=A, weight='bold', ha='left'); ax.text(tc - 1.15, .03, 'β', fontsize=10, color='#9A7420', weight='bold')
        ax.text(-3.9, .03, 'α/2', fontsize=8.5, color=INK)
    fig.legend(*axs[0].get_legend_handles_labels(), fontsize=8, frameon=False, loc='lower center', ncol=2); fig.subplots_adjust(bottom=.25); note(axs[0], y=-.36)
    save(fig, 'h0-h1-potencia.png')

if want('potencia-curvas'):
    fig, ax = plt.subplots(figsize=(6.6, 3.8)); ns = np.arange(5, 201)
    def pw(d, n):
        df = 2 * n - 2; nc = d * np.sqrt(n / 2); tc = stats.t.ppf(.975, df)
        return 1 - stats.nct.cdf(tc, df, nc) + stats.nct.cdf(-tc, df, nc)
    for d, c in ((.8, G), (.5, P), (.2, A)):
        ax.plot(ns, [pw(d, n) for n in ns], color=c, lw=2.2, label=f'd = {cm(d,1)}')
    ax.axhline(.8, color=MUTE, ls='--', lw=1); ax.text(185, .83, '0,80', va='center', fontsize=8, color=MUTE)
    for d, n, c in ((.8, 26, G), (.5, 64, P)):
        ax.plot(n, pw(d, n), 'o', color=c); ax.annotate(f'n = {n}', (n, pw(d, n)), xytext=(n + 6, pw(d, n) - .12), fontsize=8, color=c)
    ax.annotate(f'd = 0,2: con 200 por grupo, {cm(pw(.2,200))}\n(harían falta 394 por grupo)', (200, pw(.2, 200)), xytext=(95, .56), fontsize=8, color=A,
                arrowprops=dict(arrowstyle='->', color=A))
    ax.set_xlabel('participantes por grupo'); ax.set_ylabel('potencia (1 − β)'); ax.set_ylim(0, 1.02); clean(ax)
    for d, xx, yy, c in ((.8, 8, .95, G), (.5, 40, .48, P), (.2, 60, .12, A)): ax.text(xx, yy, f'd = {cm(d,1)}', color=c, fontsize=9, weight='bold')
    ax.set_title('Prueba t para dos grupos independientes, α = 0,05 bilateral')
    save(fig, 'potencia-curvas.png')

if want('potencia-historia'):
    fig, ax = plt.subplots(figsize=(7.4, 4.0))
    lab = ['Cohen (1962)\nrevista de 1960', 'Sedlmeier y\nGigerenzer (1989)\nrevista de 1984', 'Szucs e\nIoannidis (2017,\ncorregido)', 'Button et al. (2013)\nneurociencia,\ntodos los efectos']
    v = [.46, .37, .46, .21]; c = [P, P, P, V]
    b = ax.bar(range(4), v, color=c, width=.6)
    for i, val in enumerate(v): ax.text(i, val + .02, cm(val), ha='center', fontsize=9, color=INK, weight='bold')
    ax.axhline(.8, color=A, ls='--', lw=1.2); ax.text(3.45, .82, 'potencia\nrecomendada 0,80', fontsize=7.5, color=A, ha='right')
    ax.set_xticks(range(4)); ax.set_xticklabels(lab, fontsize=7.6); ax.set_ylim(0, 1); ax.set_ylabel('potencia mediana'); clean(ax)
    ax.set_title('Potencia mediana para detectar un efecto mediano (azul)')
    
    save(fig, 'potencia-historia.png')

if want('solapamiento-d'):
    fig, axs = plt.subplots(1, 3, figsize=(9, 2.8), sharey=True); x = np.linspace(-4, 5, 500)
    for ax, d in zip(axs, (.2, .5, .8)):
        f1, f2 = stats.norm.pdf(x), stats.norm.pdf(x, d)
        ax.fill_between(x, f1, color=P, alpha=.35); ax.fill_between(x, f2, color=A, alpha=.35)
        ax.plot(x, f1, color=P); ax.plot(x, f2, color=A); clean(ax); ax.set_yticks([])
        ps = stats.norm.cdf(d / np.sqrt(2)); u3 = stats.norm.cdf(d)
        ax.set_title(f'd = {cm(d,1)}', weight='bold')
        ax.text(-3.9, .36, f'P(X₁ > X₂) = {cm(ps)}\nU3 = {round(u3*100)} %', fontsize=8, color=INK)
        if d < .4: ax.set_xticks([d / 2]); ax.set_xticklabels(['μ₂ ≈ μ₁'], fontsize=8)
        else: ax.set_xticks([0, d]); ax.set_xticklabels(['μ₂', 'μ₁'], fontsize=8)
    note(axs[0], y=-.22)
    save(fig, 'solapamiento-d.png')

if want('danza-ic'):
    r = np.random.default_rng(5); fig, ax = plt.subplots(figsize=(6.6, 4.6)); fails = 0
    for i in range(25):
        s = r.normal(50, 10, 20); m = s.mean(); h = stats.t.ppf(.975, 19) * s.std(ddof=1) / np.sqrt(20)
        ok = m - h <= 50 <= m + h; fails += (not ok); c = P if ok else A
        ax.plot([m - h, m + h], [i, i], color=c, lw=2.2); ax.plot(m, i, 'o', color=c, ms=4)
    ax.axvline(50, color=INK, ls='--', lw=1); ax.text(50.3, -1.3, 'μ = 50', fontsize=8)
    ax.set_yticks([]); ax.set_xlabel('IC 95 % de la media (n = 20 por muestra)'); clean(ax); ax.spines['left'].set_visible(False)
    ax.set_title(f'25 muestras simuladas: {25 - fails} intervalos contienen μ y {fails} no (en rojo)')
    print('fallos IC', fails)
    save(fig, 'danza-ic.png')

if want('osc-2015'):
    fig, axs = plt.subplots(1, 2, figsize=(7.4, 3.2))
    ax = axs[0]; ax.bar([0, 1], [97, 36], color=[P, A], width=.55)
    for i, v in enumerate([97, 36]): ax.text(i, v + 2, f'{v} %', ha='center', weight='bold')
    ax.set_xticks([0, 1]); ax.set_xticklabels(['estudios originales', 'réplicas'], fontsize=8.5); ax.set_ylim(0, 110); clean(ax)
    ax.set_title('Resultados significativos (p < 0,05)', fontsize=9.5)
    ax = axs[1]; ax.bar([0, 1], [.403, .197], color=[P, A], width=.55)
    for i, v in enumerate([.403, .197]): ax.text(i, v + .01, f'r = {cm(v,3)}', ha='center', weight='bold', fontsize=9)
    ax.set_xticks([0, 1]); ax.set_xticklabels(['originales', 'réplicas'], fontsize=8.5); ax.set_ylim(0, .5); clean(ax)
    ax.set_title('Tamaño del efecto medio (r)', fontsize=9.5)
    fig.text(.01, .01, 'Datos: Open Science Collaboration (2015), 100 réplicas de estudios publicados en 2008.', fontsize=7, color=MUTE)
    save(fig, 'osc-2015.png')

if want('simmons-2011'):
    lab = ['Sin flexibilidad (nominal)', 'A · dos variables dependientes', 'B · añadir 10 casos por grupo', 'C · controlar el sexo',
           'D · quitar una de tres condiciones', 'A + B', 'A + B + C', 'A + B + C + D']
    v = [5, 9.5, 7.7, 11.7, 12.6, 14.4, 30.9, 60.7]
    fig, ax = plt.subplots(figsize=(6.8, 3.6)); y = np.arange(len(v))[::-1]
    ax.barh(y, v, color=[MUTE] + [Y] * 4 + [A] * 3, height=.62)
    for yy, vv in zip(y, v): ax.text(vv + .8, yy, pct(vv), va='center', fontsize=8.5, weight='bold')
    ax.set_yticks(y); ax.set_yticklabels(lab, fontsize=8.5); ax.set_xlim(0, 70); ax.set_xlabel('tasa de falsos positivos (p < 0,05), %'); clean(ax)
    ax.axvline(5, color=MUTE, ls='--', lw=1)
    fig.text(.01, .01, 'Datos: Simmons, Nelson y Simonsohn (2011), simulación de 15.000 muestras; 20 observaciones por grupo.', fontsize=7, color=MUTE)
    save(fig, 'simmons-2011.png')

if want('tost'):
    fig, ax = plt.subplots(figsize=(6.8, 3.4)); D = 1
    ax.axvspan(-D, D, color=G, alpha=.12); ax.axvline(-D, color=G, ls='--'); ax.axvline(D, color=G, ls='--'); ax.axvline(0, color=INK, lw=1)
    cases = [(0.1, .5, '1 · equivalente y no diferente', G), (1.8, .5, '2 · diferente y no equivalente', A),
             (0.55, .3, '3 · diferente pero equivalente (efecto trivial)', Y), (0.4, 1.5, '4 · indeterminado (falta precisión)', MUTE)]
    for i, (m, h, t, c) in enumerate(cases):
        yy = 3 - i; ax.plot([m - h, m + h], [yy, yy], color=c, lw=3); ax.plot(m, yy, 'o', color=c)
        ax.text(2.6, yy, t, va='center', fontsize=8.3, color=INK)
    ax.set_xlim(-2.4, 6.6); ax.set_ylim(-.6, 3.7); ax.set_yticks([]); clean(ax); ax.spines['left'].set_visible(False)
    ax.set_xticks([-D, 0, D]); ax.set_xticklabels(['−Δ', '0', '+Δ']); ax.set_xlabel('diferencia de medias (IC 90 %)')
    ax.text(0, 3.5, 'zona de equivalencia', ha='center', fontsize=8, color=G)
    note(ax, y=-.28)
    save(fig, 'tost.png')

if want('bf-escala'):
    fig = plt.figure(figsize=(7.6, 2.6)); ax = fig.add_axes([.04, .42, .92, .3])
    bands = [(1, 3, 'anecdótica'), (3, 10, 'moderada'), (10, 30, 'fuerte'), (30, 100, 'muy\nfuerte'), (100, 300, 'extrema')]
    cols = ['#E9EEF2', '#C9D8E4', '#97B6CC', '#5F8CAD', P]
    for (a_, b_, t), c in zip(bands, cols):
        ax.axvspan(a_, b_, color=c); ax.axvspan(1 / b_, 1 / a_, color=c)
        tc = 'white' if c in (P, '#5F8CAD') else INK
        for xx in (np.sqrt(a_ * b_), 1 / np.sqrt(a_ * b_)): ax.text(xx, .5, t, ha='center', va='center', fontsize=7, color=tc)
    ax.set_xscale('log'); ax.set_xlim(1 / 300, 300); ax.set_yticks([]); ax.axvline(1, color=A, lw=1.5)
    ax.set_xticks([1/100, 1/30, 1/10, 1/3, 1, 3, 10, 30, 100]); ax.set_xticklabels(['1/100', '1/30', '1/10', '1/3', '1', '3', '10', '30', '100'], fontsize=8)
    ax.minorticks_off(); ax.set_xlabel('BF₁₀ (escala logarítmica)', fontsize=9)
    for sp in ax.spines.values(): sp.set_visible(False)
    fig.text(.27, .78, '← evidencia a favor de H0', ha='center', fontsize=8.5, color=INK)
    fig.text(.73, .78, 'evidencia a favor de H1 →', ha='center', fontsize=8.5, color=INK)
    fig.text(.5, .9, 'odds posteriores = BF₁₀ × odds previas', ha='center', fontsize=9.5, color=A, weight='bold')
    fig.text(.04, .03, 'Esquema ilustrativo, no datos', fontsize=7.4, color=MUTE)
    fig.savefig(f'{OUT}/bf-escala.png', dpi=200); plt.close(fig); print('ok bf-escala.png')

if want('arbol-pruebas'):
    fig, ax = canvas(9.4, 6.2, 20, 13)
    box(ax, 10, 12.2, 5.6, 1.0, '¿Qué se quiere analizar?', INK, fs=10)
    heads = [(3.4, 'Dos condiciones', P), (10, 'Tres o más condiciones', G), (16.6, 'Relación o frecuencias', V)]
    for x, t, c in heads: box(ax, x, 10.3, 5.2, .95, t, c, fs=9.5); arr(ax, (10, 11.7), (x, 10.8))
    def leaf(x, y, t1, t2, c):
        box(ax, x, y, 3.0, 1.0, t1, 'white', fs=7.8, tc=INK, ec=c)
        box(ax, x, y - 1.75, 3.0, 1.2, t2, c, fs=7.8); arr(ax, (x, y - .52), (x, y - 1.33), lw=1.1, ms=9)
    # dos condiciones
    leaf(1.8, 8.2, 'Grupos\nindependientes', 't de Welch\n(Mann-Whitney)', P); leaf(5.0, 8.2, 'Mismas\npersonas', 't relacionada\n(Wilcoxon)', P)
    arr(ax, (3.4, 9.8), (1.8, 8.75)); arr(ax, (3.4, 9.8), (5.0, 8.75))
    # tres o más
    leaf(8.3, 8.2, 'Grupos\nindependientes', 'ANOVA (de Welch)\n(Kruskal-Wallis)', G); leaf(11.7, 8.2, 'Medidas\nrepetidas', 'ANOVA de MR\n(Friedman)', G)
    arr(ax, (10, 9.8), (8.3, 8.75)); arr(ax, (10, 9.8), (11.7, 8.75))
    box(ax, 10, 3.6, 6.4, 1.1, 'Dos o más factores → ANOVA factorial\no mixto (entre × intra)', '#4E8A68', fs=8)
    arr(ax, (10, 5.85), (10, 4.2), ls='--')
    # relacion
    leaf(15.0, 8.2, 'Dos variables\ncuantitativas', 'Pearson y regresión\n(Spearman)', V); leaf(18.2, 8.2, 'Variables\ncategóricas', 'χ² (independientes)\nMcNemar (relac.)', V)
    arr(ax, (16.6, 9.8), (15.0, 8.75)); arr(ax, (16.6, 9.8), (18.2, 8.75))
    ax.text(10, 1.9, 'Entre paréntesis, la alternativa no paramétrica o basada en rangos.', ha='center', fontsize=8.5, color=INK)
    note(ax, y=.02)
    save(fig, 'arbol-pruebas.png')

if want('tcl-asimetrica'):
    r = np.random.default_rng(3); fig, axs = plt.subplots(1, 4, figsize=(9.4, 2.6))
    pop = r.exponential(1, 100000); axs[0].hist(pop, bins=60, range=(0, 6), color=A, alpha=.8); axs[0].set_title('Población (muy asimétrica)', fontsize=9)
    for ax, n in zip(axs[1:], (5, 30, 100)):
        m = r.exponential(1, (10000, n)).mean(1); ax.hist(m, bins=50, color=P, alpha=.85)
        ax.set_title(f'Medias con n = {n}\nasimetría = {cm(stats.skew(m))}', fontsize=9)
    for ax in axs: clean(ax); ax.set_yticks([])
    note(axs[0], 'Simulación ilustrativa (10.000 muestras por panel)', y=-.28)
    save(fig, 'tcl-asimetrica.png')

if want('qq-plots'):
    r = np.random.default_rng(4); n = 200
    data = [('Normal', r.normal(0, 1, n)), ('Asimetría positiva', r.lognormal(0, .6, n)), ('Colas pesadas', r.standard_t(3, n)),
            ('Bimodal', np.r_[r.normal(-2, .7, n // 2), r.normal(2, .7, n // 2)])]
    fig, axs = plt.subplots(2, 4, figsize=(9.4, 4.4))
    for j, (t, x) in enumerate(data):
        axs[0, j].hist(x, bins=25, color=P, alpha=.85); axs[0, j].set_title(t, fontsize=9.5, weight='bold'); axs[0, j].set_yticks([])
        (osm, osr), (sl, ic, _) = stats.probplot(x, dist='norm')
        axs[1, j].plot(osm, osr, 'o', ms=2.6, color=A); axs[1, j].plot(osm, sl * osm + ic, color=INK, lw=1)
        axs[1, j].set_xlabel('cuantiles teóricos', fontsize=7.5); axs[1, j].tick_params(labelsize=7)
        for a in axs[:, j]: clean(a)
    axs[1, 0].set_ylabel('cuantiles observados', fontsize=7.5)
    note(axs[1, 0], 'Simulación ilustrativa (n = 200)', y=-.42)
    save(fig, 'qq-plots.png')

if want('residuos-patrones'):
    r = np.random.default_rng(8); x = r.uniform(0, 10, 150)
    cases = [('Nube homogénea\n(supuestos razonables)', r.normal(0, 1, 150), G),
             ('Embudo\n(heterocedasticidad)', r.normal(0, .15 + .3 * x), A),
             ('Curva en U\n(no linealidad)', .25 * (x - 5) ** 2 - 2 + r.normal(0, .6, 150), Y)]
    fig, axs = plt.subplots(1, 3, figsize=(9.2, 2.8))
    for ax, (t, e, c) in zip(axs, cases):
        ax.scatter(x, e, s=9, color=c, alpha=.8); ax.axhline(0, color=INK, lw=1); ax.set_title(t, fontsize=9); clean(ax)
        ax.set_xticks([]); ax.set_yticks([]); ax.set_xlabel('valores pronosticados', fontsize=8)
    axs[0].set_ylabel('residuos', fontsize=8); note(axs[0], 'Simulación ilustrativa', y=-.22)
    save(fig, 'residuos-patrones.png')

if want('flujo-supuestos'):
    fig, ax = canvas(9.4, 5.4, 20, 11.5)
    ax.text(5, 11, 'Flujo clásico (desaconsejado)', ha='center', fontsize=10, weight='bold', color=A)
    box(ax, 5, 9.6, 7, 1.1, 'Shapiro-Wilk y Levene\nsobre los datos', SOFT, fs=8.5, tc=INK)
    box(ax, 2.6, 7.2, 4.2, 1.1, 'p > 0,05\n→ Student / ANOVA clásico', SOFT, fs=8, tc=INK)
    box(ax, 7.4, 7.2, 4.2, 1.1, 'p ≤ 0,05\n→ prueba no paramétrica', SOFT, fs=8, tc=INK)
    arr(ax, (4, 9.0), (2.8, 7.8)); arr(ax, (6, 9.0), (7.2, 7.8))
    box(ax, 5, 4.9, 8.2, 1.4, 'Problemas: la elección depende de\npruebas poco potentes (n pequeño) o\nhipersensibles (n grande); el error tipo I\nreal deja de ser el nominal', '#F7E3DE', fs=7.8, tc=INK, bold=False)
    arr(ax, (5, 6.6), (5, 5.65), c=A)
    ax.text(15, 11, 'Flujo recomendado', ha='center', fontsize=10, weight='bold', color=G)
    steps = ['Planificar el análisis (y preregistrarlo)', 'Welch por defecto (t o ANOVA)', 'Gráficos de residuos:\nQ-Q y residuos frente a pronosticados',
             'Atípicos o colas pesadas → medias recortadas\no bootstrap · VD ordinal → no paramétrica', 'Informar tamaño del efecto con su IC']
    ys = [9.8, 8.2, 6.5, 4.6, 2.8]
    for i, (t, y) in enumerate(zip(steps, ys)):
        box(ax, 15, y, 8.6, 1.25 if '\n' in t else .95, t, G if i in (1, 4) else 'white', fs=8, tc='white' if i in (1, 4) else INK, ec=G)
        if i: arr(ax, (15, ys[i - 1] - .55), (15, y + .62))
    note(ax, y=.02)
    save(fig, 'flujo-supuestos.png')

if want('distribuciones-t'):
    fig, ax = plt.subplots(figsize=(6.6, 3.4)); x = np.linspace(-5, 5, 600)
    ax.plot(x, stats.norm.pdf(x), color=INK, lw=2, label='normal z')
    for df, c in ((30, G), (5, P), (2, A)): ax.plot(x, stats.t.pdf(x, df), color=c, lw=1.8, label=f't con {df} gl')
    ax.legend(frameon=False, fontsize=8.5, loc='upper left'); clean(ax); ax.set_yticks([])
    rows = [('gl', 'crítico 5 %')] + [(str(df), cm(stats.t.ppf(.975, df))) for df in (2, 5, 30)] + [('z', '1,96')]
    for i, (a, b) in enumerate(rows):
        ax.text(3.1, .38 - i * .045, a, fontsize=8, weight='bold' if i == 0 else 'normal', color=INK)
        ax.text(3.9, .38 - i * .045, b, fontsize=8, weight='bold' if i == 0 else 'normal', color=INK)
    ax.set_title('Con pocos gl la t tiene colas más pesadas y valores críticos mayores', fontsize=9.5)
    save(fig, 'distribuciones-t.png')

if want('disenos'):
    fig, axs = plt.subplots(1, 4, figsize=(9.6, 3.2))
    def grid(ax, rows, cols, fill, title, collab):
        ax.set_xlim(0, cols); ax.set_ylim(0, rows); ax.invert_yaxis(); ax.set_aspect('auto')
        for i in range(rows):
            for j in range(cols):
                v = fill(i, j)
                ax.add_patch(Rectangle((j + .06, i + .08), .88, .84, fc=v[0] if v else '#F0F0F0', ec='white'))
                if v and v[1]: ax.text(j + .5, i + .5, v[1], ha='center', va='center', fontsize=7, color='white')
        ax.set_xticks([j + .5 for j in range(cols)]); ax.set_xticklabels(collab, fontsize=7.5); ax.set_yticks([]); ax.tick_params(length=0)
        for sp in ax.spines.values(): sp.set_visible(False)
        ax.set_title(title, fontsize=9, weight='bold'); ax.xaxis.tick_top()
    grid(axs[0], 8, 2, lambda i, j: (P, '') if (i < 4) == (j == 0) else None, 'Entre grupos\n\n', ['A', 'B'])
    grid(axs[1], 8, 2, lambda i, j: (G, ('1.º' if (j == 0) == (i < 4) else '2.º')), 'Intrasujeto\ncontrabalanceado\n', ['A', 'B'])
    cols2 = [P, A, G, Y]
    grid(axs[2], 8, 4, lambda i, j: (cols2[j], '') if i // 2 == j else None, 'Factorial 2 × 2\nentre grupos\n', ['a1b1', 'a1b2', 'a2b1', 'a2b2'])
    grid(axs[3], 8, 3, lambda i, j: ((P if i < 4 else A), ''), 'Mixto 2 (grupo)\n× 3 (momento)\n', ['T1', 'T2', 'T3'])
    axs[3].text(3.15, 2, 'grupo 1', fontsize=7.5, color=P, va='center'); axs[3].text(3.15, 6, 'grupo 2', fontsize=7.5, color=A, va='center')
    axs[0].set_ylabel('participantes', fontsize=8)
    fig.text(.01, .01, 'Cada fila es una persona; las casillas coloreadas, las condiciones en que participa. Esquema ilustrativo, no datos.', fontsize=7.2, color=MUTE)
    save(fig, 'disenos.png')

if want('dz-correlacion'):
    fig, ax = plt.subplots(figsize=(6.4, 3.4)); r = np.linspace(0, .9, 200)
    ax.plot(r, .5 / np.sqrt(2 * (1 - r)), color=P, lw=2.2, label='d_z (sobre la DT de las diferencias)')
    ax.axhline(.5, color=A, ls='--', lw=1.4, label='d_av = 0,5 (sobre la DT media de las dos medidas)')
    for rr in (0, .5, .9):
        v = .5 / np.sqrt(2 * (1 - rr)); ax.plot(rr, v, 'o', color=P); ax.text(rr + .015, v + .05, cm(v), fontsize=8.5, color=P)
    ax.set_xlabel('correlación r entre las dos medidas'); ax.set_ylabel('tamaño del efecto'); clean(ax); ax.legend(frameon=False, fontsize=8, loc='upper left')
    ax.set_ylim(0, 1.3); note(ax, y=-.28)
    save(fig, 'dz-correlacion.png')

if want('fwer'):
    fig, ax = plt.subplots(figsize=(6.2, 3.3)); m = np.arange(1, 21); f = 1 - .95 ** m
    ax.plot(m, f, '-o', color=A, ms=3.5); ax.axhline(.05, color=MUTE, ls='--', lw=1); ax.text(18.5, .07, 'α = 0,05', fontsize=8, color=MUTE)
    for k in (3, 6, 10): ax.annotate(f'm = {k}: {cm(1 - .95 ** k)}', (k, 1 - .95 ** k), xytext=(k + .8, 1 - .95 ** k - .07), fontsize=8.5, color=INK)
    ax.set_xlabel('número de comparaciones (m), cada una con α = 0,05'); ax.set_ylabel('probabilidad de al menos\nun falso positivo'); clean(ax); ax.set_xticks([1, 5, 10, 15, 20])
    ax.set_title('FWER = 1 − (1 − 0,05)ᵐ, comparaciones independientes', fontsize=9.5)
    save(fig, 'fwer.png')

if want('particion-varianza'):
    r = np.random.default_rng(9); fig, axs = plt.subplots(1, 2, figsize=(8.8, 3.4), gridspec_kw={'width_ratios': [1.5, 1]})
    ax = axs[0]; mus = [10, 14, 17]; cols = [P, G, A]; gm = np.mean(mus)
    for k, (mu, c) in enumerate(zip(mus, cols)):
        y = r.normal(mu, 2, 8); xs = k * 3 + np.linspace(-.8, .8, 8)
        ax.scatter(xs, y, color=c, s=18, zorder=3); ax.plot([k * 3 - 1.1, k * 3 + 1.1], [y.mean()] * 2, color=c, lw=2.5)
        for xx, yy in zip(xs[::2], y[::2]): ax.plot([xx, xx], [yy, y.mean()], color=c, lw=.8, alpha=.7)
        ax.annotate('', (k * 3 + 1.3, y.mean()), (k * 3 + 1.3, gm), arrowprops=dict(arrowstyle='<->', color=INK, lw=1))
    ax.axhline(gm, color=INK, ls='--', lw=1); ax.text(-1.1, gm - .9, 'media general', fontsize=8)
    ax.set_xticks([0, 3, 6]); ax.set_xticklabels(['grupo 1', 'grupo 2', 'grupo 3']); clean(ax); ax.set_ylabel('VD')
    ax.set_title('Desviaciones dentro (finas) y entre grupos (flechas)', fontsize=9)
    ax = axs[1]; ax.axis('off'); ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.add_patch(Rectangle((1, 6), 8, 1.3, fc=INK)); ax.text(5, 6.65, 'SC total', color='white', ha='center', va='center', weight='bold')
    ax.add_patch(Rectangle((1, 3.8), 3.2, 1.3, fc=Y)); ax.text(2.6, 4.45, 'SC entre', ha='center', va='center', weight='bold', color=INK, fontsize=9)
    ax.add_patch(Rectangle((4.2, 3.8), 4.8, 1.3, fc=P)); ax.text(6.6, 4.45, 'SC intra (error)', ha='center', va='center', weight='bold', color='white', fontsize=9)
    ax.text(5, 2.1, 'F = MC entre / MC intra\nMC = SC / gl', ha='center', fontsize=10, color=A, weight='bold')
    note(axs[0], y=-.22)
    save(fig, 'particion-varianza.png')

if want('posthoc-espectro'):
    fig, ax = canvas(8.6, 3.2, 20, 7)
    arr(ax, (1, 4), (19, 4), c=INK, lw=2)
    ax.text(1, 4.8, 'más potencia\nmenos control del error', fontsize=8, color=A, va='bottom')
    ax.text(19, 4.8, 'menos potencia\nmás control del error', fontsize=8, color=G, va='bottom', ha='right')
    for x, t, c in ((3, 'LSD de Fisher\n(sin corrección)', A), (6.8, 'Holm', '#C9823D'), (10.2, 'Tukey', Y), (13.6, 'Bonferroni', '#8DA65A'), (17, 'Scheffé', G)):
        box(ax, x, 2.6, 3.1, 1.2, t, c, fs=8.3)
    box(ax, 6, .6, 6.4, .8, 'Games-Howell: si las varianzas difieren', SOFT, fs=7.8, tc=INK, bold=False)
    box(ax, 14, .6, 6.4, .8, 'Dunnett: cada grupo frente a un control', SOFT, fs=7.8, tc=INK, bold=False)
    ax.text(10, 6.4, 'Orden orientativo para comparaciones por pares', ha='center', fontsize=9, color=INK)
    note(ax, y=-.06)
    save(fig, 'posthoc-espectro.png')

if want('particion-mr'):
    fig, ax = canvas(8.4, 3.4, 20, 8)
    ax.text(.3, 6.6, 'Entre grupos', fontsize=9.5, weight='bold', color=INK)
    ax.add_patch(Rectangle((5, 6.0), 4.5, 1.2, fc=Y)); ax.text(7.25, 6.6, 'SC entre', ha='center', va='center', weight='bold', fontsize=9)
    ax.add_patch(Rectangle((9.5, 6.0), 9.5, 1.2, fc=P)); ax.text(14.25, 6.6, 'SC error (dentro de los grupos)', ha='center', va='center', color='white', weight='bold', fontsize=9)
    ax.text(.3, 3.6, 'Medidas repetidas', fontsize=9.5, weight='bold', color=INK)
    ax.add_patch(Rectangle((5, 3.0), 4.5, 1.2, fc=Y)); ax.text(7.25, 3.6, 'SC tratamiento', ha='center', va='center', weight='bold', fontsize=9)
    ax.add_patch(Rectangle((9.5, 3.0), 6.0, 1.2, fc=V)); ax.text(12.5, 3.6, 'SC sujetos (se aparta)', ha='center', va='center', color='white', weight='bold', fontsize=9)
    ax.add_patch(Rectangle((15.5, 3.0), 3.5, 1.2, fc=P)); ax.text(17.25, 3.6, 'SC residual', ha='center', va='center', color='white', weight='bold', fontsize=9)
    ax.text(12, 1.6, 'Las diferencias estables entre personas salen del error: el denominador de F\n(MC residual) es menor y la prueba gana potencia.', ha='center', fontsize=8.5, color=INK)
    note(ax, y=.0)
    save(fig, 'particion-mr.png')

if want('esfericidad'):
    fig, axs = plt.subplots(1, 3, figsize=(9.2, 3.0), gridspec_kw={'width_ratios': [1, 1, 1.25]})
    for ax, vals, t, c in ((axs[0], [20, 22, 21], 'Se cumple la esfericidad', G), (axs[1], [10, 30, 45], 'Se viola la esfericidad', A)):
        ax.bar(range(3), vals, color=c, width=.6)
        for i, v in enumerate(vals): ax.text(i, v + 1, str(v), ha='center', fontsize=9, weight='bold')
        ax.set_xticks(range(3)); ax.set_xticklabels(['T1 − T2', 'T1 − T3', 'T2 − T3'], fontsize=8); ax.set_ylim(0, 52); clean(ax)
        ax.set_title(t, fontsize=9.5, color=c, weight='bold'); ax.set_ylabel('varianza de la diferencia', fontsize=8)
    ax = axs[2]; ax.axis('off'); ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.text(5, 9.3, 'Corrección épsilon (ε)', ha='center', weight='bold', fontsize=9.5, color=INK)
    ax.plot([1.5, 8.5], [7.2, 7.2], color=INK, lw=2); ax.plot([1.5, 1.5], [6.9, 7.5], color=INK); ax.plot([8.5, 8.5], [6.9, 7.5], color=INK)
    ax.text(1.5, 5.4, 'ε = 1/(k − 1)\n(0,5 con k = 3)\nlímite inferior', ha='center', fontsize=7.4); ax.text(8.5, 5.4, 'ε = 1\nesfericidad\nperfecta', ha='center', fontsize=7.4)
    ax.text(5, 1.4, 'gl corregidos = ε × gl\n(numerador y denominador)\n\nGreenhouse-Geisser: más conservadora\nHuynh-Feldt: más liberal', ha='center', fontsize=8, color=INK)
    fig.text(.01, .01, 'Valores ficticios. Esquema ilustrativo, no datos.', fontsize=7.2, color=MUTE)
    save(fig, 'esfericidad.png')

if want('interacciones'):
    cases = [('Sin efectos', [5.2, 5.2], [4.8, 4.8]), ('Solo efecto de A', [3.2, 7.2], [2.8, 6.8]), ('Solo efecto de B', [6.5, 6.5], [3.5, 3.5]),
             ('A y B, sin interacción', [4, 7], [2, 5]), ('Interacción ordinal', [4, 8], [3, 4]), ('Interacción cruzada\n(sin efectos principales)', [3, 7], [7, 3])]
    fig, axs = plt.subplots(2, 3, figsize=(8.6, 4.8))
    for ax, (t, b1, b2) in zip(axs.flat, cases):
        ax.plot([0, 1], b1, '-o', color=P, lw=2, label='B1'); ax.plot([0, 1], b2, '-s', color=A, lw=2, label='B2')
        ax.set_xlim(-.3, 1.3); ax.set_ylim(1, 9); ax.set_xticks([0, 1]); ax.set_xticklabels(['A1', 'A2']); ax.set_yticks([]); clean(ax)
        ax.set_title(t, fontsize=9)
    axs[0, 0].legend(frameon=False, fontsize=8, loc='upper left'); axs[0, 0].set_ylabel('media de la VD', fontsize=8); axs[1, 0].set_ylabel('media de la VD', fontsize=8)
    note(axs[1, 0], y=-.3)
    save(fig, 'interacciones.png')

if want('eta-parcial'):
    fig, ax = plt.subplots(figsize=(6.4, 3.4)); lab = ['A', 'B', 'A × B']; sc = np.array([30, 20, 10]); err = 40; tot = 100
    e2 = sc / tot; ep = sc / (sc + err); x = np.arange(3)
    ax.bar(x - .18, e2, .34, color=P, label=f'η² (suma = {cm(e2.sum())})'); ax.bar(x + .18, ep, .34, color=A, label=f'η²p (suma = {cm(ep.sum())})')
    for i in range(3):
        ax.text(i - .18, e2[i] + .015, cm(e2[i]), ha='center', fontsize=8.5); ax.text(i + .18, ep[i] + .015, cm(ep[i]), ha='center', fontsize=8.5)
    ax.set_xticks(x); ax.set_xticklabels(lab); ax.set_ylim(0, .55); clean(ax); ax.legend(frameon=False, fontsize=8.5)
    ax.set_title('SC: A = 30, B = 20, A × B = 10, error = 40 (total = 100)', fontsize=9)
    note(ax, 'Valores ficticios. Esquema ilustrativo, no datos', y=-.16)
    save(fig, 'eta-parcial.png')

if want('anscombe'):
    x = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5]
    ys = [[8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68], [9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74],
          [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73]]
    x4 = [8] * 7 + [19] + [8] * 3; y4 = [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.50, 5.56, 7.91, 6.89]
    sets = [(x, ys[0]), (x, ys[1]), (x, ys[2]), (x4, y4)]
    fig, axs = plt.subplots(1, 4, figsize=(9.4, 2.7), sharey=True); xx = np.array([2, 20])
    for i, (ax, (a, b)) in enumerate(zip(axs, sets)):
        ax.scatter(a, b, color=[P, G, Y, A][i], s=20, zorder=3); ax.plot(xx, 3 + .5 * xx, color=INK, lw=1)
        r = np.corrcoef(a, b)[0, 1]; ax.set_title(f'Conjunto {["I", "II", "III", "IV"][i]} · r = {cm(r)}', fontsize=9); clean(ax); ax.set_xlim(2, 20)
    fig.text(.01, .01, 'Datos: Anscombe (1973). La recta es Ŷ = 3 + 0,5X en los cuatro conjuntos.', fontsize=7.2, color=MUTE)
    save(fig, 'anscombe.png')

if want('minimos-cuadrados'):
    r = np.random.default_rng(12); x = np.sort(r.uniform(1, 10, 12)); y = 2 + .8 * x + r.normal(0, 1.3, 12)
    b1, b0 = np.polyfit(x, y, 1); yh = b0 + b1 * x; R2 = 1 - ((y - yh) ** 2).sum() / ((y - y.mean()) ** 2).sum()
    fig, axs = plt.subplots(1, 2, figsize=(8.8, 3.4), gridspec_kw={'width_ratios': [1.5, 1]})
    ax = axs[0]; ax.scatter(x, y, color=P, s=24, zorder=3); xx = np.array([0.5, 10.5]); ax.plot(xx, b0 + b1 * xx, color=A, lw=2)
    for a, b, c in zip(x, y, yh): ax.plot([a, a], [b, c], color=G, lw=1.2)
    ax.axhline(y.mean(), color=MUTE, ls='--', lw=1); ax.text(.6, y.mean() + .25, 'Ȳ', fontsize=9, color=MUTE)
    ax.set_xlabel('X'); ax.set_ylabel('Y'); clean(ax); ax.set_title(f'Ŷ = {cm(b0)} + {cm(b1)}X · residuos en verde', fontsize=9)
    ax = axs[1]; ax.axis('off'); ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.add_patch(Rectangle((1, 6.5), 8, 1.2, fc=INK)); ax.text(5, 7.1, 'SC total', color='white', ha='center', va='center', weight='bold')
    ax.add_patch(Rectangle((1, 4.5), 8 * R2, 1.2, fc=A)); ax.text(1 + 4 * R2, 5.1, 'SC regresión', color='white', ha='center', va='center', weight='bold', fontsize=9)
    ax.add_patch(Rectangle((1 + 8 * R2, 4.5), 8 * (1 - R2), 1.2, fc=G)); ax.text(1 + 8 * R2 + 4 * (1 - R2), 5.1, 'SC res.', color='white', ha='center', va='center', weight='bold', fontsize=8.5)
    ax.text(5, 2.6, f'R² = SC regresión / SC total = {cm(R2)}', ha='center', fontsize=9.5, color=A, weight='bold')
    note(axs[0], 'Datos ficticios. Esquema ilustrativo', y=-.28)
    print('R2 minimos', R2, b0, b1)
    save(fig, 'minimos-cuadrados.png')

if want('venn-colinealidad'):
    fig, axs = plt.subplots(1, 2, figsize=(8.4, 3.6))
    for ax, sep, t in ((axs[0], 2.3, 'Predictores poco correlacionados'), (axs[1], 1.0, 'Colinealidad alta')):
        ax.set_xlim(-3.2, 3.2); ax.set_ylim(-3.2, 3.0); ax.axis('off'); ax.set_aspect('equal')
        ax.add_patch(Circle((0, .9), 1.6, fc=P, alpha=.25, ec=P, lw=1.5)); ax.text(0, 1.9, 'Y', ha='center', weight='bold', color=P)
        ax.add_patch(Circle((-sep / 2, -.7), 1.45, fc=A, alpha=.25, ec=A, lw=1.5)); ax.text(-sep / 2 - 1.2, -2.5, 'X₁', weight='bold', color=A)
        ax.add_patch(Circle((sep / 2, -.7), 1.45, fc=G, alpha=.25, ec=G, lw=1.5)); ax.text(sep / 2 + .9, -2.5, 'X₂', weight='bold', color=G)
        ax.set_title(t, fontsize=9.5, weight='bold')
    axs[0].text(0, -3.1, 'cada predictor aporta varianza única', ha='center', fontsize=8)
    axs[1].text(0, -3.1, 'gran parte es compartida: b inestables, VIF alto', ha='center', fontsize=8)
    note(axs[0], y=-.06)
    save(fig, 'venn-colinealidad.png')

if want('influencia'):
    r = np.random.default_rng(21); x = np.linspace(2, 8, 15); y = 1 + .7 * x + r.normal(0, .5, 15)
    cases = [('Atípico en Y, poco leverage', (5, 9.5)), ('Leverage alto, en la tendencia', (15, 1 + .7 * 15)), ('Leverage alto fuera de la tendencia\n(influyente, D de Cook alta)', (15, 2))]
    fig, axs = plt.subplots(1, 3, figsize=(9.2, 3.0), sharey=True); xx = np.array([0, 16])
    for ax, (t, (px, py)) in zip(axs, cases):
        b1, b0 = np.polyfit(x, y, 1); X = np.r_[x, px]; Y_ = np.r_[y, py]; c1, c0 = np.polyfit(X, Y_, 1)
        ax.scatter(x, y, color=P, s=16); ax.scatter([px], [py], color=A, s=55, marker='D', zorder=4)
        ax.plot(xx, b0 + b1 * xx, color=MUTE, ls='--', lw=1.3, label='sin el punto'); ax.plot(xx, c0 + c1 * xx, color=A, lw=1.8, label='con el punto')
        n = len(X); h = 1 / n + (px - X.mean()) ** 2 / ((X - X.mean()) ** 2).sum()
        res = Y_ - (c0 + c1 * X); mse = (res ** 2).sum() / (n - 2); D = res[-1] ** 2 / (2 * mse) * h / (1 - h) ** 2
        ax.set_title(t + f'\nh = {cm(h)} · D = {cm(D)}', fontsize=8.5); clean(ax); ax.set_xlim(0, 16)
    axs[0].legend(frameon=False, fontsize=7.5, loc='upper left'); note(axs[0], 'Datos ficticios. Esquema ilustrativo', y=-.2)
    save(fig, 'influencia.png')
