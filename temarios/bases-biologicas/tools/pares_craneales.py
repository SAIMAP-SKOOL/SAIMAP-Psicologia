"""Rotula en español la vista inferior del encéfalo (P. J. Lynch, CC BY 2.5): tapa los rótulos ingleses con cajas nuevas."""
from PIL import Image, ImageDraw, ImageFont
src = 'img/src/Brain_human_normal_inferior_view_with_labels_en.png'
F = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'
FB = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'
L = [((176, 316, 564, 452), 'I', 'Olfatorio'), ((1386, 466, 1652, 598), 'II', 'Óptico'),
     ((46, 620, 490, 754), 'III', 'Oculomotor'), ((120, 804, 490, 940), 'IV', 'Troclear'),
     ((1470, 772, 1884, 902), 'V', 'Trigémino'), ((40, 1046, 430, 1180), 'VI', 'Abducens'),
     ((1440, 1160, 1710, 1292), 'VII', 'Facial'), ((36, 1250, 584, 1386), 'VIII', 'Vestibulococlear'),
     ((1332, 1316, 1900, 1450), 'IX', 'Glosofaríngeo'), ((100, 1444, 600, 1580), 'XII', 'Hipogloso'),
     ((1444, 1560, 1732, 1692), 'X', 'Vago'), ((76, 1736, 744, 1876), 'XI', 'Accesorio')]
im = Image.open(src).convert('RGBA')
ov = Image.new('RGBA', im.size, (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
for (x0, y0, x1, y1), num, name in L:
    d.rounded_rectangle([x0 - 4, y0 - 4, x1 + 4, y1 + 4], radius=22, fill=(255, 255, 255, 255))
im.alpha_composite(ov); d = ImageDraw.Draw(im)
for (x0, y0, x1, y1), num, name in L:
    size = 50
    while True:
        fb, fr = ImageFont.truetype(FB, size), ImageFont.truetype(F, size)
        w = d.textlength(num + '  ', font=fb) + d.textlength(name, font=fr)
        if w <= (x1 - x0) - 30 or size < 30: break
        size -= 2
    left = x0 < im.width / 2
    tx = x1 - 18 - w if left else x0 + 18
    ty = (y0 + y1) / 2 - size * 0.58
    d.text((tx, ty), num, font=fb, fill=(200, 85, 61))
    d.text((tx + d.textlength(num + '  ', font=fb), ty), name, font=fr, fill=(30, 30, 30))
bg = Image.new('RGBA', im.size, 'white'); bg.alpha_composite(im)
bg.convert('RGB').save('img/pares-craneales.png')
print('ok')
