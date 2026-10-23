"""Figuras propias del temario de <ASIGNATURA>. python3 tools/figuras.py → img/*"""
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
