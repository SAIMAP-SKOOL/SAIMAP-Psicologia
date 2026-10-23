"""Figuras del temario de Bases Biológicas (matplotlib). python3 tools/figuras.py"""
import numpy as np, matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
import os
OUT = os.path.join(os.path.dirname(__file__), '..', 'img')
P, A, INK, MUTE = '#2D5A7B', '#C8553D', '#26323A', '#8A949B'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 10, 'axes.edgecolor': MUTE,
                     'axes.labelcolor': INK, 'xtick.color': MUTE, 'ytick.color': MUTE})

# 1. Potencial de acción
t = np.linspace(0, 6, 1200)
def v(x):
    if x < 1.0: return -70
    if x < 1.4: return -70 + (x-1.0)/0.4*15            # estímulo hasta umbral
    if x < 1.75: return -55 + (x-1.4)/0.35*90           # despolarización
    if x < 2.45: return 35 - (x-1.75)/0.7*112           # repolarización
    if x < 3.6: return -77 + (x-2.45)/1.15*7*(1-np.exp(-(x-2.45)*2))/(1-np.exp(-2.3))
    return -70
y = np.array([v(x) for x in t])
from scipy.ndimage import gaussian_filter1d
y = gaussian_filter1d(y, 9)
fig, ax = plt.subplots(figsize=(7.2, 3.6), dpi=200)
ax.plot(t, y, color=P, lw=2.4)
ax.axhline(-55, color=A, ls='--', lw=1); ax.text(5.95, -53, 'umbral ≈ −55 mV', color=A, ha='right', fontsize=8.5)
ax.axhline(-70, color=MUTE, ls=':', lw=1); ax.text(5.95, -66, 'reposo ≈ −70 mV', color=MUTE, ha='right', fontsize=8.5)
ax.axhline(0, color='#C9D3CD', lw=0.8)
lab = [(1.15, -48, '1 Estímulo'), (1.25, 10, '2 Despolarización\n(entra Na⁺)'), (2.35, 10, '3 Repolarización\n(sale K⁺)'),
       (2.75, -88, '4 Hiperpolarización'), (4.6, -90, '5 Vuelta al reposo\n(bomba Na⁺/K⁺)')]
for x, yy, s in lab: ax.text(x, yy, s, fontsize=8.5, color=INK, ha='center' if x > 2 else 'right')
ax.text(1.95, 39, 'pico ≈ +30/+40 mV', fontsize=8.5, color=INK)
ax.set_xlim(0, 6); ax.set_ylim(-95, 50); ax.set_xlabel('Tiempo (ms)'); ax.set_ylabel('Potencial de membrana (mV)')
for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
fig.tight_layout(); fig.savefig(f'{OUT}/potencial-accion.png'); plt.close(fig)

# 2. Resolución espacial y temporal de las técnicas
fig, ax = plt.subplots(figsize=(7.2, 4.0), dpi=200)
tec = [  # nombre, t_min, t_max (s), x_min, x_max (mm), color
    ('EEG / PE', 1e-3, 1e1, 10, 100, P), ('MEG', 1e-3, 1e1, 5, 50, '#3F6FA8'),
    ('fMRI', 1, 1e3, 1, 5, A), ('PET', 60, 1e4, 4, 10, '#A8741A'),
    ('Registro unicelular', 1e-4, 1e1, 0.01, 0.1, '#3E8E5E')]
POS = {'EEG / PE': (0.1, 75), 'MEG': (0.1, 7), 'fMRI': (30, 2.2), 'PET': (800, 6.3), 'Registro unicelular': (0.03, 0.032)}
for n, t0, t1, x0, x1, c in tec:
    ax.add_patch(plt.Rectangle((t0, x0), t1-t0, x1-x0, color=c, alpha=0.22, lw=0))
    ax.add_patch(plt.Rectangle((t0, x0), t1-t0, x1-x0, fill=False, ec=c, lw=1.4))
    ax.text(*POS[n], n, ha='center', va='center', fontsize=8.5, color=INK, weight='bold')
ax.set_xscale('log'); ax.set_yscale('log'); ax.set_xlim(5e-5, 3e4); ax.set_ylim(5e-3, 300)
ax.set_xticks([1e-3, 1, 60, 3600]); ax.set_xticklabels(['1 ms', '1 s', '1 min', '1 h'])
ax.set_yticks([0.01, 0.1, 1, 10, 100]); ax.set_yticklabels(['10 µm', '100 µm', '1 mm', '1 cm', '10 cm'])
ax.set_xlabel('Resolución temporal (mejor ←)'); ax.set_ylabel('Resolución espacial (mejor ↓)')
for sp in ('top', 'right'): ax.spines[sp].set_visible(False)
ax.text(1e-4*0.8, 200, 'Valores aproximados', fontsize=8, color=MUTE)
fig.tight_layout(); fig.savefig(f'{OUT}/tecnicas-resolucion.png'); plt.close(fig)
print('ok')

# 3. Síntesis de catecolaminas
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
fig, ax = plt.subplots(figsize=(7.4, 2.2), dpi=200); ax.axis('off'); ax.set_xlim(0, 10); ax.set_ylim(0, 3)
steps = ['Tirosina', 'L-DOPA', 'Dopamina', 'Noradrenalina', 'Adrenalina']
enz = ['tirosina\nhidroxilasa', 'DOPA\ndescarboxilasa', 'dopamina\nβ-hidroxilasa', 'PNMT']
xs = [0.95, 3.0, 5.05, 7.1, 9.1]
for i, (x, s) in enumerate(zip(xs, steps)):
    col = MUTE if i == 0 else P
    ax.add_patch(FancyBboxPatch((x - 0.82, 1.75), 1.64, 0.7, boxstyle='round,pad=0.02,rounding_size=0.15', fc='white' if i == 0 else '#E6EEF4', ec=col, lw=1.6))
    ax.text(x, 2.1, s, ha='center', va='center', fontsize=9.5, weight='bold', color=INK)
for i, e in enumerate(enz):
    a, b = xs[i] + 0.85, xs[i + 1] - 0.85
    ax.add_patch(FancyArrowPatch((a, 2.1), (b, 2.1), arrowstyle='-|>', mutation_scale=14, color=A if i == 0 else INK, lw=1.6))
    ax.text((a + b) / 2, 1.45, e, ha='center', va='top', fontsize=8, color=A if i == 0 else MUTE, style='italic')
ax.text(xs[1] - 1.03, 0.55, 'paso limitante', ha='center', fontsize=8, color=A, weight='bold')
ax.text(10, 0.15, 'PNMT: feniletanolamina N-metiltransferasa (sobre todo en la médula suprarrenal)', ha='right', fontsize=7, color=MUTE)
fig.tight_layout(); fig.savefig(f'{OUT}/catecolaminas.png'); plt.close(fig)
print('cat ok')
