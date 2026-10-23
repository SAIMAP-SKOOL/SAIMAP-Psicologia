// SAIMAP Psicología · escenarios ilustrados de las unidades (como los de SAIMAP Lingo).
// Cada curso puede tener su juego de escenarios: SP_SCENES[cursoId][unidad] = { tint, road, svg }.
// Se generan aquí con formas vectoriales (semilla fija) para que pesen poco.
(function (g) {
  const W = 400, H = 600;
  function rng(seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
  const f = n => Math.round(n * 10) / 10;
  const svg = body => `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${body}</svg>`;

  // ---------- piezas ----------
  // neurona estilizada: soma + dendritas ramificadas + axón
  function neuron(r, x, y, s, col, opt) {
    opt = opt || {};
    let d = '';
    const branch = (x0, y0, ang, len, depth) => {
      const x1 = x0 + Math.cos(ang) * len, y1 = y0 + Math.sin(ang) * len;
      const cx = (x0 + x1) / 2 + (r() - .5) * len * .4, cy = (y0 + y1) / 2 + (r() - .5) * len * .4;
      d += `M${f(x0)} ${f(y0)}Q${f(cx)} ${f(cy)} ${f(x1)} ${f(y1)}`;
      if (depth > 0) { branch(x1, y1, ang - .45 - r() * .3, len * .62, depth - 1); branch(x1, y1, ang + .4 + r() * .3, len * .62, depth - 1); }
    };
    const nd = opt.dend || 5;
    for (let i = 0; i < nd; i++) branch(x, y, (i / nd) * Math.PI * 2 + r() * .5, 26 * s, opt.depth == null ? 2 : opt.depth);
    let ax = '';
    if (opt.axon) { const [ax2, ay2] = opt.axon; ax = `<path d="M${x} ${y}C${f(x + (ax2 - x) * .3 + 20)} ${f(y + (ay2 - y) * .2)} ${f(x + (ax2 - x) * .7 - 20)} ${f(y + (ay2 - y) * .8)} ${ax2} ${ay2}" stroke="${col}" stroke-width="${f(3 * s)}" fill="none" stroke-linecap="round"/>`; }
    return `<g opacity="${opt.op || 1}"><path d="${d}" stroke="${col}" stroke-width="${f(2.2 * s)}" fill="none" stroke-linecap="round"/>${ax}<circle cx="${x}" cy="${y}" r="${f(9 * s)}" fill="${col}"/><circle cx="${f(x - 2 * s)}" cy="${f(y - 2 * s)}" r="${f(3.2 * s)}" fill="#fff" opacity=".35"/></g>`;
  }
  function astro(r, x, y, s, col) {
    let d = ''; const n = 9;
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2 + r() * .4, L = (22 + r() * 16) * s; d += `M${x} ${y}Q${f(x + Math.cos(a + .3) * L * .5)} ${f(y + Math.sin(a + .3) * L * .5)} ${f(x + Math.cos(a) * L)} ${f(y + Math.sin(a) * L)}`; }
    return `<path d="${d}" stroke="${col}" stroke-width="${f(3.2 * s)}" fill="none" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="${f(8 * s)}" fill="${col}"/>`;
  }
  const dots = (r, n, col, rmin, rmax, op) => Array.from({ length: n }, () => `<circle cx="${f(r() * W)}" cy="${f(r() * H)}" r="${f(rmin + r() * (rmax - rmin))}" fill="${col}" opacity="${op || .5}"/>`).join('');
  function helix(x, y, len, ang, amp, colA, colB, rungs) {
    // doble hélice a lo largo de una recta
    const ca = Math.cos(ang), sa = Math.sin(ang), N = 60;
    let a = '', b = '', rr = '';
    for (let i = 0; i <= N; i++) {
      const t = i / N, px = x + ca * len * t, py = y + sa * len * t, o = Math.sin(t * Math.PI * 4) * amp;
      const ax = px - sa * o, ay = py + ca * o, bx = px + sa * o, by = py - ca * o;
      a += (i ? 'L' : 'M') + f(ax) + ' ' + f(ay); b += (i ? 'L' : 'M') + f(bx) + ' ' + f(by);
      if (rungs && i % 3 === 1) rr += `<path d="M${f(ax)} ${f(ay)}L${f(bx)} ${f(by)}" stroke="${i % 6 === 1 ? colA : colB}" stroke-width="3" opacity=".55"/>`;
    }
    return rr + `<path d="${a}" stroke="${colA}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="${b}" stroke="${colB}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  }
  function chromosome(x, y, s, rot, col) {
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M-9 -34C-16 -20 -14 -8 -3 0C-14 8 -16 20 -9 34" stroke="${col}" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M9 -34C16 -20 14 -8 3 0C14 8 16 20 9 34" stroke="${col}" stroke-width="10" fill="none" stroke-linecap="round"/><circle r="4" fill="#fff" opacity=".6"/><path d="M-12 -20h6M6 -20h6M-12 18h6M6 18h6" stroke="#fff" stroke-width="2.4" opacity=".55"/></g>`;
  }
  function hexmol(x, y, s, rot, col) {
    const hx = i => { const a = Math.PI / 3 * i + Math.PI / 6; return [f(Math.cos(a) * 18), f(Math.sin(a) * 18)]; };
    const pts = [0, 1, 2, 3, 4, 5].map(hx);
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" stroke="${col}" stroke-width="3.4" fill="none" stroke-linejoin="round"><path d="M${pts.map(p => p.join(' ')).join('L')}Z"/><path d="M${pts[0][0] * .7} ${pts[0][1] * .7}L${pts[1][0] * .7} ${pts[1][1] * .7}M${pts[2][0] * .7} ${pts[2][1] * .7}L${pts[3][0] * .7} ${pts[3][1] * .7}M${pts[4][0] * .7} ${pts[4][1] * .7}L${pts[5][0] * .7} ${pts[5][1] * .7}" opacity=".7"/><path d="M${pts[0][0]} ${pts[0][1]}l16 9l14 -8"/><circle cx="${f(+pts[0][0] + 30)}" cy="${f(+pts[0][1] + 1)}" r="4" fill="${col}"/><path d="M${pts[3][0]} ${pts[3][1]}l-14 -7"/><circle cx="${f(+pts[3][0] - 16)}" cy="${f(+pts[3][1] - 8)}" r="4" fill="${col}"/></g>`;
  }
  const wave = (y, amp, per, col, sw, op, spikes) => {
    let d = `M0 ${y}`;
    for (let x = 0; x <= W; x += 4) {
      let v = Math.sin(x / per * Math.PI * 2) * amp;
      if (spikes) { const m = x % spikes; if (m < 12) v = -amp * 3.2 * Math.sin(m / 12 * Math.PI); else if (m < 24) v = amp * .9 * Math.sin((m - 12) / 12 * Math.PI); }
      d += `L${x} ${f(y + v)}`;
    }
    return `<path d="${d}" stroke="${col}" stroke-width="${sw}" fill="none" stroke-linejoin="round" opacity="${op}"/>`;
  };

  // ---------- escenarios de Bases Biológicas ----------
  const BB = {
    // 1 · Qué es la psicobiología: el cuaderno de Cajal, neuronas a tinta sobre papel
    1: () => { const r = rng(11); let s = `<rect width="400" height="600" fill="#F5EBD7"/>`;
      for (let y = 40; y < 600; y += 28) s += `<path d="M0 ${y}H400" stroke="#D8C6A3" stroke-width="1" opacity=".55"/>`;
      s += `<path d="M44 0V600" stroke="#D99A8A" stroke-width="1.5" opacity=".5"/>`;
      s += neuron(r, 330, 120, 1.7, '#5B4636', { axon: [300, 330], op: .55 }) + neuron(r, 70, 300, 1.3, '#5B4636', { axon: [140, 520], op: .45 }) + neuron(r, 320, 470, 1.2, '#5B4636', { op: .4 });
      s += `<g opacity=".55" fill="none" stroke="#5B4636" stroke-width="2"><path d="M300 560l18-60 10 3-14 60zM318 500l8-12 10 3-8 12z"/><circle cx="326" cy="492" r="8"/><path d="M286 566h52"/></g>`;
      return { tint: '#F5EBD7', road: 'ink', svg: svg(s) }; },
    // 2 · Neuroimagen: escáner de resonancia y trazados de EEG
    2: () => { let s = `<rect width="400" height="600" fill="#E2EFF6"/>`;
      for (let x = 0; x <= 400; x += 25) s += `<path d="M${x} 0V600" stroke="#C4DCEA" stroke-width="1"/>`;
      for (let y = 0; y <= 600; y += 25) s += `<path d="M0 ${y}H400" stroke="#C4DCEA" stroke-width="1"/>`;
      s += `<circle cx="70" cy="110" r="92" fill="none" stroke="#9DC3DA" stroke-width="34" opacity=".6"/><circle cx="70" cy="110" r="58" fill="#D4E8F2"/><ellipse cx="70" cy="110" rx="30" ry="36" fill="#F2B6A8" opacity=".55"/><path d="M48 104q22-18 44 0M50 120q20 12 40 0" stroke="#D2553C" stroke-width="2" fill="none" opacity=".5"/>`;
      [300, 360, 420, 480, 540].forEach((y, i) => { s += wave(y, 6 + i, 34 + i * 7, '#3F7FA8', 2, .45); });
      s += `<g opacity=".5"><rect x="268" y="40" width="110" height="140" rx="10" fill="#F7FBFD" stroke="#9DC3DA" stroke-width="3"/><ellipse cx="323" cy="110" rx="36" ry="46" fill="#C9D7E2"/><path d="M300 95q23-20 46 0q-23 30-46 0z" fill="#F08A73" opacity=".8"/><circle cx="335" cy="118" r="9" fill="#F5B81F"/></g>`;
      return { tint: '#E2EFF6', road: 'scan', svg: svg(s) }; },
    // 3 · Manipulación y evaluación: laberinto acuático, matraces y luz azul de optogenética
    3: () => { let s = `<rect width="400" height="600" fill="#E8F3EC"/>`;
      s += `<circle cx="300" cy="470" r="96" fill="#BFE0EE" stroke="#8AB8CF" stroke-width="10"/><circle cx="300" cy="470" r="70" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-dasharray="6 10"/><rect x="318" y="430" width="24" height="24" rx="4" fill="#E8F3EC" opacity=".7"/>`;
      s += `<g opacity=".55"><path d="M40 160h46l-10-50V60h-26v50z" fill="#CFE6D8" stroke="#6E9C83" stroke-width="3" stroke-linejoin="round"/><path d="M42 150h42l-8-30H50z" fill="#7FC6A0"/><path d="M110 170h34l-6-40V80h-22v50z" fill="#CFE6D8" stroke="#6E9C83" stroke-width="3" stroke-linejoin="round"/><path d="M112 160h30l-5-22h-20z" fill="#F5B81F" opacity=".8"/></g>`;
      for (let i = 0; i < 5; i++) s += `<path d="M${330 + i * 12} 0L${180 + i * 30} 300" stroke="#5FA9F5" stroke-width="${10 - i}" opacity="${.12 + i * .03}"/>`;
      s += `<circle cx="215" cy="260" r="22" fill="#5FA9F5" opacity=".25"/>`;
      return { tint: '#E8F3EC', road: 'maze', svg: svg(s) }; },
    // 4 · Desarrollo: glía radial y neuronas que migran y brotan
    4: () => { const r = rng(44); let s = `<rect width="400" height="600" fill="#F2EDF8"/>`;
      for (let x = 20; x < 400; x += 36) s += `<path d="M${x} 600C${x + 6} 420 ${x - 6} 220 ${x + 4} 0" stroke="#D6C9EA" stroke-width="3" fill="none"/>`;
      for (let i = 0; i < 12; i++) { const x = 20 + 36 * Math.floor(r() * 11), y = 60 + r() * 500; s += `<ellipse cx="${x + 6}" cy="${f(y)}" rx="8" ry="12" fill="#A98BEF" opacity=".45"/>`; }
      s += neuron(r, 330, 90, 1.1, '#8C6FD0', { op: .45, depth: 1 }) + neuron(r, 70, 520, 1.2, '#8C6FD0', { op: .4, depth: 2 });
      s += `<path d="M330 210q-20 40 6 80" stroke="#8C6FD0" stroke-width="4" fill="none" opacity=".4"/><path d="M336 290l-10 8m10-8l10 6m-10-6l2 12" stroke="#8C6FD0" stroke-width="3" opacity=".5" stroke-linecap="round"/>`;
      return { tint: '#F2EDF8', road: 'vine', svg: svg(s) }; },
    // 5 · Protección y vascularización: capas, vasos y gotas de líquido cefalorraquídeo
    5: () => { const r = rng(55); let s = `<rect width="400" height="600" fill="#FBEDEA"/>`;
      const bands = [['#F3D2C3', 22], ['#E9E1CF', 30], ['#D8D3E8', 10], ['#F7E5E0', 8]]; let y = 0;
      bands.forEach(([c, h]) => { s += `<rect y="${y}" width="400" height="${h}" fill="${c}"/>`; y += h; });
      s += `<path d="M0 30Q100 ${40} 200 30T400 30" stroke="#D9B79C" stroke-width="2" fill="none" opacity=".7"/>`;
      const tree = (x0, y0, ang, len, w, d) => { if (d < 0) return ''; const x1 = x0 + Math.cos(ang) * len, y1 = y0 + Math.sin(ang) * len; return `<path d="M${f(x0)} ${f(y0)}L${f(x1)} ${f(y1)}" stroke="#D9675A" stroke-width="${f(w)}" stroke-linecap="round" opacity=".42"/>` + tree(x1, y1, ang - .5 + r() * .2, len * .72, w * .66, d - 1) + tree(x1, y1, ang + .45 + r() * .2, len * .72, w * .66, d - 1); };
      s += tree(0, 330, -.2, 90, 14, 4) + tree(400, 560, Math.PI + .25, 100, 14, 4);
      for (let i = 0; i < 14; i++) { const x = r() * 400, yy = 90 + r() * 500; s += `<path d="M${f(x)} ${f(yy - 9)}q7 10 0 15q-7-5 0-15z" fill="#7FB8DE" opacity=".45"/>`; }
      return { tint: '#FBEDEA', road: 'vessel', svg: svg(s) }; },
    // 6 · Telencéfalo y corteza: un hemisferio enorme con los lóbulos teñidos
    6: () => { let s = `<rect width="400" height="600" fill="#ECF1FA"/>`;
      s += `<g opacity=".55"><path d="M40 300C20 180 110 70 230 70C340 70 400 160 390 260C385 330 350 370 300 380C290 430 250 450 210 430C150 470 70 420 60 370C45 350 42 330 40 300z" fill="#F4C7BD"/>
        <path d="M40 300C20 180 110 70 200 70L215 250L120 330Z" fill="#F0A493" opacity=".5"/><path d="M215 70C320 70 380 140 390 230L250 250L215 250Z" fill="#9DC3DA" opacity=".55"/><path d="M390 240C385 320 350 370 300 380L260 300Z" fill="#8FCFA7" opacity=".55"/><path d="M120 330L250 260L300 380C290 430 250 450 210 430C150 470 70 420 60 370Z" fill="#F5D278" opacity=".5"/>
        <path d="M215 72C206 140 222 200 214 252" stroke="#B04A3A" stroke-width="3" fill="none"/><path d="M110 330C170 300 230 280 290 300" stroke="#B04A3A" stroke-width="3" fill="none"/>
        ${[[90, 160], [140, 120], [170, 200], [270, 120], [320, 180], [300, 240], [150, 260], [240, 330], [180, 380], [100, 360]].map(([x, y], i) => `<path d="M${x} ${y}q${12 + i % 3 * 4} -${10 + i % 2 * 6} ${26 + i % 4 * 3} 0t26 0" stroke="#C97C6E" stroke-width="2.6" fill="none"/>`).join('')}</g>
        <path d="M300 380C330 430 300 480 250 470C230 520 280 560 330 540" stroke="#E2A79A" stroke-width="18" fill="none" opacity=".35" stroke-linecap="round"/>`;
      return { tint: '#ECF1FA', road: 'gyrus', svg: svg(s) }; },
    // 7 · Estructuras subcorticales: el «caballito de mar» (hipocampo) y la «almendra» (amígdala)
    7: () => { const r = rng(77); let s = `<rect width="400" height="600" fill="#EAF5EF"/>` + dots(r, 30, '#BFE3CF', 2, 6, .7);
      s += `<g transform="translate(300 170) scale(1.6)" opacity=".5"><path d="M0 -60C24 -64 30 -40 18 -30C34 -26 30 -6 16 -2C26 14 20 40 0 50C-18 58 -30 44 -20 32C-10 22 -2 28 -6 36M18 -30C8 -26 0 -20 0 -10C0 6 10 10 16 -2" fill="none" stroke="#2F8A5E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M0 -60C-8 -50 -10 -40 -2 -32" fill="none" stroke="#2F8A5E" stroke-width="5" stroke-linecap="round"/><circle cx="10" cy="-50" r="3" fill="#2F8A5E"/><path d="M24 -52l10 -6m-8 14l12 -2m-14 14l12 4" stroke="#2F8A5E" stroke-width="3" stroke-linecap="round"/></g>`;
      s += `<g transform="translate(80 470) rotate(-25)" opacity=".5"><path d="M0 -38C26 -38 40 -10 30 16C22 36 -6 44 -24 28C-40 12 -30 -38 0 -38z" fill="#E7B98A" stroke="#B9875A" stroke-width="3"/><path d="M-6 -26C10 -14 14 10 4 30" stroke="#B9875A" stroke-width="2" fill="none"/></g>`;
      s += `<path d="M30 140C80 100 140 120 150 180" stroke="#5FA88A" stroke-width="12" fill="none" opacity=".25" stroke-linecap="round"/><path d="M260 420C300 380 360 400 370 460" stroke="#5FA88A" stroke-width="12" fill="none" opacity=".25" stroke-linecap="round"/>`;
      return { tint: '#EAF5EF', road: 'tract', svg: svg(s) }; },
    // 8 · Tronco, cerebelo y médula: el «árbol de la vida» del cerebelo y la columna vertebral
    8: () => { const r = rng(88); let s = `<rect width="400" height="600" fill="#F6F0E6"/>`;
      s += `<g opacity=".5"><path d="M320 40C390 40 410 140 380 200C350 250 280 250 260 200C240 150 260 40 320 40z" fill="#E7B4A8"/>`;
      const tree = (x0, y0, ang, len, w, d) => { if (d < 0) return ''; const x1 = x0 + Math.cos(ang) * len, y1 = y0 + Math.sin(ang) * len; return `<path d="M${f(x0)} ${f(y0)}Q${f((x0 + x1) / 2 + 4)} ${f((y0 + y1) / 2)} ${f(x1)} ${f(y1)}" stroke="#FFF6EE" stroke-width="${f(w)}" stroke-linecap="round" fill="none"/>` + tree(x1, y1, ang - .55 + r() * .2, len * .7, w * .7, d - 1) + tree(x1, y1, ang + .5 + r() * .2, len * .7, w * .7, d - 1); };
      s += tree(300, 220, -1.7, 50, 9, 4) + `</g>`;
      for (let i = 0; i < 9; i++) { const y = 260 + i * 38; s += `<g opacity=".45"><rect x="34" y="${y}" width="46" height="26" rx="9" fill="#E6D7BF" stroke="#BFA582" stroke-width="2.5"/><path d="M80 ${y + 13}l22 -6M34 ${y + 13}l-18 -6" stroke="#BFA582" stroke-width="5" stroke-linecap="round"/></g>`; }
      s += `<path d="M57 250V600" stroke="#F5D278" stroke-width="5" opacity=".6"/>`;
      return { tint: '#F6F0E6', road: 'spine', svg: svg(s) }; },
    // 9 · Sistema nervioso periférico: nervios que se ramifican por todo el cuerpo
    9: () => { const r = rng(99); let s = `<rect width="400" height="600" fill="#EDF4F8"/>`;
      const nerve = (x0, y0, ang, len, w, d) => { if (d < 0) return ''; const x1 = x0 + Math.cos(ang) * len, y1 = y0 + Math.sin(ang) * len; return `<path d="M${f(x0)} ${f(y0)}Q${f((x0 + x1) / 2 + (r() - .5) * 30)} ${f((y0 + y1) / 2 + (r() - .5) * 30)} ${f(x1)} ${f(y1)}" stroke="#E2B44A" stroke-width="${f(w)}" fill="none" stroke-linecap="round" opacity=".45"/>` + nerve(x1, y1, ang - .4 - r() * .3, len * .7, w * .65, d - 1) + nerve(x1, y1, ang + .4 + r() * .3, len * .7, w * .65, d - 1); };
      s += nerve(0, 100, .3, 110, 9, 4) + nerve(400, 300, Math.PI - .2, 110, 9, 4) + nerve(0, 500, -.2, 110, 9, 4);
      for (let i = 0; i < 8; i++) s += `<circle cx="372" cy="${60 + i * 34}" r="9" fill="#E9C67A" stroke="#C99A3A" stroke-width="2" opacity=".55"/><path d="M372 ${69 + i * 34}v16" stroke="#C99A3A" stroke-width="2" opacity=".5"/>`;
      return { tint: '#EDF4F8', road: 'nerve', svg: svg(s) }; },
    // 10 · Neuronas y glía: un bosque de neuronas y astrocitos
    10: () => { const r = rng(1010); let s = `<rect width="400" height="600" fill="#EFEDF9"/>` + dots(r, 40, '#D6D0F2', 2, 5, .8);
      s += neuron(r, 60, 90, 1.2, '#7C8FD8', { op: .45 }) + neuron(r, 340, 300, 1.3, '#7C8FD8', { op: .45 }) + neuron(r, 90, 470, 1.1, '#7C8FD8', { op: .4 });
      s += `<g opacity=".45">${astro(r, 330, 90, 1, '#E0849A')}${astro(r, 60, 280, .9, '#E0849A')}${astro(r, 330, 520, 1, '#E0849A')}</g>`;
      s += `<g opacity=".4"><circle cx="200" cy="560" r="6" fill="#4DB6A8"/><path d="M200 560l-10-10m10 10l12-6m-12 6l2 14m-2-14l-14 4" stroke="#4DB6A8" stroke-width="3" stroke-linecap="round"/></g>`;
      return { tint: '#EFEDF9', road: 'axon', svg: svg(s) }; },
    // 11 · Potencial de membrana: bicapa lipídica e iones a cada lado
    11: () => { const r = rng(111); let s = `<rect width="400" height="600" fill="#E8F5F4"/>`;
      const layer = y0 => { let t = ''; for (let x = 6; x < 400; x += 14) t += `<circle cx="${x}" cy="${y0}" r="6" fill="#8CCFC7"/><path d="M${x - 2} ${y0 + 6}v14M${x + 2} ${y0 + 6}v14" stroke="#8CCFC7" stroke-width="2"/><circle cx="${x}" cy="${y0 + 40}" r="6" fill="#8CCFC7"/><path d="M${x - 2} ${y0 + 34}v-14M${x + 2} ${y0 + 34}v-14" stroke="#8CCFC7" stroke-width="2"/>`; return `<g opacity=".55">${t}</g>`; };
      s += layer(70) + layer(500);
      s += `<g opacity=".5"><rect x="80" y="62" width="34" height="56" rx="10" fill="#F5B81F"/><rect x="290" y="492" width="34" height="56" rx="10" fill="#D2553C"/></g>`;
      const ion = (x, y, t, c) => `<g opacity=".55"><circle cx="${x}" cy="${y}" r="14" fill="${c}"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="11" fill="#fff">${t}</text></g>`;
      for (let i = 0; i < 9; i++) s += ion(f(20 + r() * 360), f(150 + r() * 320), ['Na⁺', 'K⁺', 'Cl⁻'][i % 3], ['#D2553C', '#6A4FC0', '#178A5C'][i % 3]);
      return { tint: '#E8F5F4', road: 'channel', svg: svg(s) }; },
    // 12 · Potencial de acción: osciloscopio con espigas
    12: () => { let s = `<rect width="400" height="600" fill="#FCF3E2"/>`;
      for (let x = 0; x <= 400; x += 40) s += `<path d="M${x} 0V600" stroke="#EED9AE" stroke-width="1.4"/>`;
      for (let y = 0; y <= 600; y += 40) s += `<path d="M0 ${y}H400" stroke="#EED9AE" stroke-width="1.4"/>`;
      s += wave(120, 4, 400, '#C58F07', 3, .55, 120) + wave(480, 4, 400, '#C58F07', 3, .45, 150);
      s += `<path d="M330 250l-24 46h20l-14 44 40-58h-22l18-32z" fill="#F5B81F" opacity=".55"/>`;
      return { tint: '#FCF3E2', road: 'axon', svg: svg(s) }; },
    // 13 · La sinapsis: botón terminal con vesículas y receptores enfrente
    13: () => { const r = rng(1313); let s = `<rect width="400" height="600" fill="#F4ECF6"/>`;
      s += `<path d="M-20 0H180C200 120 180 200 120 220C60 240 0 220 -20 200Z" fill="#E7CDEB" opacity=".7"/>`;
      for (let i = 0; i < 14; i++) s += `<circle cx="${f(20 + r() * 120)}" cy="${f(30 + r() * 150)}" r="${f(9 + r() * 5)}" fill="#fff" stroke="#B67FC0" stroke-width="2.5" opacity=".75"/>`;
      s += `<path d="M420 600H220C200 480 230 400 300 390C360 380 410 400 420 420Z" fill="#CFE3D4" opacity=".7"/>`;
      for (let i = 0; i < 6; i++) s += `<rect x="${236 + i * 26}" y="${f(398 - Math.sin(i / 5 * Math.PI) * 18)}" width="10" height="20" rx="4" fill="#178A5C" opacity=".5"/>`;
      s += dots(r, 26, '#B67FC0', 2.5, 4, .45);
      return { tint: '#F4ECF6', road: 'vesicles', svg: svg(s) }; },
    // 14 · Neurotransmisores: moléculas flotando
    14: () => { const r = rng(1414); let s = `<rect width="400" height="600" fill="#EDF5EB"/>`;
      [[320, 90, 1.4, 10], [70, 230, 1.1, -20], [330, 380, 1.2, 30], [90, 520, 1.3, 0], [220, 40, .8, 50]].forEach(([x, y, sc, rot], i) => { s += `<g opacity=".45">${hexmol(x, y, sc, rot, ['#178A5C', '#1D5C7E', '#D2553C', '#6A4FC0', '#C58F07'][i])}</g>`; });
      s += dots(r, 30, '#9FCB98', 2, 5, .6);
      return { tint: '#EDF5EB', road: 'chain', svg: svg(s) }; },
    // 15 · Genoma: dobles hélices y cromosomas
    15: () => { let s = `<rect width="400" height="600" fill="#ECF0FA"/>`;
      s += `<g opacity=".4">${helix(-20, 40, 260, .55, 18, '#3F6FA8', '#D2553C', true)}${helix(250, 330, 260, .9, 16, '#178A5C', '#6A4FC0', true)}</g>`;
      s += `<g opacity=".45">${chromosome(330, 120, 1.1, 20, '#8EA7DA')}${chromosome(70, 420, 1, -15, '#E6A0B4')}${chromosome(110, 520, .8, 30, '#8EA7DA')}</g>`;
      return { tint: '#ECF0FA', road: 'dna', svg: svg(s) }; },
    // 16 · Herencia: guisantes de Mendel y un árbol genealógico
    16: () => { const r = rng(1616); let s = `<rect width="400" height="600" fill="#F0F6E8"/>`;
      s += `<g opacity=".5" stroke="#5E7F4A" stroke-width="3" fill="none"><path d="M270 60h80M310 60v40M250 100h120M250 100v30M310 100v30M370 100v30"/></g>
        <g opacity=".55"><rect x="258" y="44" width="24" height="24" rx="3" fill="#8FB46F"/><circle cx="350" cy="56" r="12" fill="#F5B81F"/><rect x="238" y="130" width="24" height="24" rx="3" fill="#8FB46F"/><circle cx="310" cy="142" r="12" fill="#C9DDB4"/><rect x="358" y="130" width="24" height="24" rx="3" fill="#F5B81F"/></g>`;
      for (let i = 0; i < 3; i++) { const x = 40 + i * 30, y = 380 + i * 70; s += `<g transform="translate(${x} ${y}) rotate(${-30 + i * 25})" opacity=".55"><path d="M-46 0C-30 -22 30 -22 46 0C30 22 -30 22 -46 0z" fill="#9DCC72" stroke="#5E8F3A" stroke-width="3"/>${[-24, -8, 8, 24].map(px => `<circle cx="${px}" cy="0" r="7" fill="${r() < .3 ? '#E6D46A' : '#7FB84E'}"/>`).join('')}</g>`; }
      s += `<path d="M380 600C360 520 390 460 350 400" stroke="#7FB84E" stroke-width="5" fill="none" opacity=".45"/><path d="M362 470q-20-10-26 6q16 10 26-6zM358 430q22-8 26 8q-16 8-26-8z" fill="#9DCC72" opacity=".5"/>`;
      return { tint: '#F0F6E8', road: 'pea', svg: svg(s) }; }
  };

  // ---------- Fundamentos de Estadística ----------
  const bell = (x0, y0, w, h, col, sw, op, fill) => { let d = ''; for (let i = 0; i <= 60; i++) { const t = -3 + i / 10, x = x0 + (t + 3) / 6 * w, y = y0 - Math.exp(-t * t / 2) * h; d += (i ? 'L' : 'M') + f(x) + ' ' + f(y); } return `<path d="${d}${fill ? `L${x0 + w} ${y0}L${x0} ${y0}Z` : ''}" stroke="${col}" stroke-width="${sw}" fill="${fill || 'none'}" opacity="${op}" stroke-linejoin="round"/>`; };
  const paper = (bg, line, step) => { let t = `<rect width="400" height="600" fill="${bg}"/>`; for (let x = 0; x <= 400; x += step) t += `<path d="M${x} 0V600" stroke="${line}" stroke-width="1"/>`; for (let y = 0; y <= 600; y += step) t += `<path d="M0 ${y}H400" stroke="${line}" stroke-width="1"/>`; return t; };
  const bars = (x0, y0, vals, bw, gap, col, op) => vals.map((v, i) => `<rect x="${x0 + i * (bw + gap)}" y="${y0 - v}" width="${bw}" height="${v}" rx="3" fill="${Array.isArray(col) ? col[i % col.length] : col}" opacity="${op}"/>`).join('');
  const boxp = (x, y, s, col) => `<g transform="translate(${x} ${y}) scale(${s})" opacity=".5"><path d="M-60 0H-28M28 0H60M-60 -10V10M60 -10V10" stroke="${col}" stroke-width="4" stroke-linecap="round"/><rect x="-28" y="-18" width="56" height="36" rx="4" fill="#fff" stroke="${col}" stroke-width="4"/><path d="M-4 -18V18" stroke="#D2553C" stroke-width="5"/><circle cx="84" cy="0" r="6" fill="none" stroke="#D2553C" stroke-width="3.5"/></g>`;
  const die = (x, y, s, rot, n, col) => { const P = { 1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]] }; return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" opacity=".55"><rect x="-22" y="-22" width="44" height="44" rx="9" fill="#fff" stroke="${col}" stroke-width="3"/>${P[n].map(([a, b]) => `<circle cx="${a * 11}" cy="${b * 11}" r="4.2" fill="${col}"/>`).join('')}</g>`; };
  const ES = {
    // 1 · Ciencia y método: cuaderno, bombilla, lupa y el ciclo del método
    1: () => { let s = `<rect width="400" height="600" fill="#F7F3EA"/>`; for (let y = 30; y < 600; y += 26) s += `<path d="M0 ${y}H400" stroke="#DCE6EE" stroke-width="1.4"/>`; s += `<path d="M44 0V600" stroke="#EBB8AE" stroke-width="2"/>`;
      s += `<g opacity=".5" transform="translate(320 110)"><circle r="34" fill="#F7D774"/><path d="M-14 30h28v18h-28z" fill="#B9B2A4"/><path d="M-10 -6l10 14l10 -14" stroke="#C58F07" stroke-width="3" fill="none"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i / 8 * Math.PI * 2; return `<path d="M${f(Math.cos(a) * 44)} ${f(Math.sin(a) * 44)}L${f(Math.cos(a) * 56)} ${f(Math.sin(a) * 56)}" stroke="#E0A83A" stroke-width="4" stroke-linecap="round"/>`; }).join('')}</g>`;
      s += `<g opacity=".45" transform="translate(90 450) rotate(-30)"><circle r="40" fill="#DDEBF4" stroke="#2D5A7B" stroke-width="7"/><path d="M0 40V110" stroke="#7A6450" stroke-width="14" stroke-linecap="round"/></g>`;
      s += `<g opacity=".35" fill="none" stroke="#5FA47A" stroke-width="6" stroke-linecap="round"><path d="M290 380A60 60 0 1 1 260 440"/><path d="M262 424l-4 18l18 -2"/></g>`;
      return { tint: '#F7F3EA', road: 'ink', svg: svg(s) }; },
    // 2 · Investigar: matraz, portapapeles y páginas de un artículo
    2: () => { let s = `<rect width="400" height="600" fill="#EEF4F8"/>`;
      s += `<g opacity=".45" transform="translate(320 120)"><path d="M-14 -50h28M-10 -50v34l-34 56c-6 10 0 18 10 18h68c10 0 16 -8 10 -18l-34 -56v-34" fill="#fff" stroke="#2D5A7B" stroke-width="5" stroke-linejoin="round"/><path d="M-36 30h72l8 14c4 8 0 14 -8 14h-72c-8 0 -12 -6 -8 -14z" fill="#7FC4B2"/><circle cx="-6" cy="16" r="5" fill="#7FC4B2"/><circle cx="8" cy="2" r="3.5" fill="#7FC4B2"/></g>`;
      s += `<g opacity=".45" transform="translate(70 420) rotate(-8)"><rect x="-50" y="-70" width="100" height="140" rx="8" fill="#fff" stroke="#8A949B" stroke-width="4"/><rect x="-20" y="-80" width="40" height="18" rx="5" fill="#8A949B"/>${[0, 1, 2, 3, 4].map(i => `<path d="M-34 ${-40 + i * 24}h10M-16 ${-40 + i * 24}h46" stroke="#2D5A7B" stroke-width="4" stroke-linecap="round"/>`).join('')}<path d="M-36 -46l4 6l8 -10M-36 -22l4 6l8 -10" stroke="#5FA47A" stroke-width="3" fill="none"/></g>`;
      s += `<g opacity=".4" transform="translate(330 470) rotate(10)"><rect x="-44" y="-60" width="88" height="120" rx="4" fill="#fff" stroke="#C8553D" stroke-width="3"/><path d="M-32 -42h64" stroke="#C8553D" stroke-width="6"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M-32 ${-22 + i * 14}h${i % 3 === 2 ? 40 : 64}" stroke="#B9C3CA" stroke-width="4" stroke-linecap="round"/>`).join('')}</g>`;
      return { tint: '#EEF4F8', road: 'grid', svg: svg(s) }; },
    // 3 · Variables y escalas: reglas, termómetro y etiquetas
    3: () => { let s = `<rect width="400" height="600" fill="#FBF3E4"/>`;
      const ruler = (x, y, rot, len) => { let t = `<g transform="translate(${x} ${y}) rotate(${rot})" opacity=".5"><rect width="${len}" height="34" rx="4" fill="#F5D278" stroke="#C58F07" stroke-width="2.5"/>`; for (let i = 8; i < len; i += 10) t += `<path d="M${i} 0v${i % 50 === 8 ? 16 : 9}" stroke="#8A6A10" stroke-width="2"/>`; return t + '</g>'; };
      s += ruler(-20, 70, 12, 300) + ruler(160, 520, -14, 300);
      s += `<g opacity=".5" transform="translate(340 300)"><rect x="-10" y="-90" width="20" height="150" rx="10" fill="#fff" stroke="#C8553D" stroke-width="4"/><circle cy="70" r="20" fill="#C8553D"/><rect x="-4" y="-30" width="8" height="90" fill="#C8553D"/>${[0, 1, 2, 3, 4].map(i => `<path d="M10 ${-70 + i * 22}h10" stroke="#C8553D" stroke-width="3"/>`).join('')}</g>`;
      [[70, 240, 'A', '#2D5A7B'], [110, 300, '1.º', '#5FA47A'], [60, 360, '7', '#C8553D']].forEach(([x, y, t, c]) => { s += `<g opacity=".5" transform="translate(${x} ${y}) rotate(-10)"><path d="M-26 -16h40l14 16l-14 16h-40z" fill="#fff" stroke="${c}" stroke-width="3"/><text x="-6" y="6" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="17" fill="${c}">${t}</text></g>`; });
      return { tint: '#FBF3E4', road: 'ruler', svg: svg(s) }; },
    // 4 · Población y muestra: una multitud de puntos y una muestra rodeada
    4: () => { const r = rng(404); let s = `<rect width="400" height="600" fill="#EDF3F9"/>`;
      for (let i = 0; i < 170; i++) { const x = r() * 400, y = r() * 600; const inS = Math.hypot(x - 300, y - 150) < 62 || Math.hypot(x - 90, y - 470) < 55; s += `<circle cx="${f(x)}" cy="${f(y)}" r="${inS ? 6 : 4.5}" fill="${inS ? '#C8553D' : '#9DB8CC'}" opacity="${inS ? .65 : .45}"/>`; }
      s += `<circle cx="300" cy="150" r="66" fill="none" stroke="#C8553D" stroke-width="3.5" stroke-dasharray="10 7" opacity=".55"/><circle cx="90" cy="470" r="59" fill="none" stroke="#C8553D" stroke-width="3.5" stroke-dasharray="10 7" opacity=".55"/>`;
      return { tint: '#EDF3F9', road: 'dots', svg: svg(s) }; },
    // 5 · Datos categóricos: barras y sectores
    5: () => { let s = `<rect width="400" height="600" fill="#F3F0FA"/>`;
      s += `<path d="M230 200H390" stroke="#8A8FB0" stroke-width="3" opacity=".5"/>` + bars(240, 200, [120, 90, 60, 34, 22], 24, 8, ['#5B6FC0', '#7E8FD8', '#9BAAE2', '#B7C2EB', '#D2D8F2'], .6);
      const pie = (cx, cy, R, parts, cols) => { let a0 = -Math.PI / 2, t = ''; parts.forEach((p, i) => { const a1 = a0 + p * Math.PI * 2; t += `<path d="M${cx} ${cy}L${f(cx + Math.cos(a0) * R)} ${f(cy + Math.sin(a0) * R)}A${R} ${R} 0 ${p > .5 ? 1 : 0} 1 ${f(cx + Math.cos(a1) * R)} ${f(cy + Math.sin(a1) * R)}Z" fill="${cols[i]}" stroke="#fff" stroke-width="3"/>`; a0 = a1; }); return t; };
      s += `<g opacity=".5">${pie(90, 450, 78, [.36, .28, .18, .1, .08], ['#2D5A7B', '#3F6FA8', '#5FA47A', '#E0A83A', '#C8553D'])}</g>`;
      return { tint: '#F3F0FA', road: 'bars', svg: svg(s) }; },
    // 6 · Intervalos y cuantiles: histograma y ojiva
    6: () => { let s = paper('#EEF6F1', '#D8EADF', 40);
      s += `<path d="M200 260H400" stroke="#4E8A6A" stroke-width="3" opacity=".5"/>` + bars(205, 260, [20, 56, 110, 150, 96, 44, 16], 26, 1, '#7FBF9A', .55);
      let d = ''; for (let i = 0; i <= 40; i++) { const t = i / 40, y = 560 - 200 / (1 + Math.exp(-(t - .5) * 10)); d += (i ? 'L' : 'M') + f(10 + t * 200) + ' ' + f(y); }
      s += `<path d="${d}" stroke="#2D5A7B" stroke-width="5" fill="none" opacity=".45" stroke-linecap="round"/><path d="M10 460H110V560" stroke="#C8553D" stroke-width="3" stroke-dasharray="8 6" fill="none" opacity=".5"/>`;
      return { tint: '#EEF6F1', road: 'ruler', svg: svg(s) }; },
    // 7 · Tendencia central: balancín apoyado en la media
    7: () => { let s = `<rect width="400" height="600" fill="#FCF1E8"/>`;
      s += `<g opacity=".5" transform="translate(290 170)"><path d="M-100 0H100" stroke="#8A6A50" stroke-width="7" stroke-linecap="round"/><path d="M0 4L-18 40H18Z" fill="#C8553D"/>${[[-88, 1], [-50, 2], [-14, 1], [40, 1], [96, 1]].map(([x, k]) => Array.from({ length: k }, (_, j) => `<rect x="${x - 9}" y="${-20 - j * 20}" width="18" height="18" rx="3" fill="#2D5A7B"/>`).join('')).join('')}<text y="66" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="20" fill="#C8553D">x̄</text></g>`;
      s += `<g>${bell(10, 560, 220, 140, '#E0A83A', 5, .45, 'rgba(224,168,58,.18)')}</g><path d="M120 560V420" stroke="#C8553D" stroke-width="3" stroke-dasharray="6 6" opacity=".5"/>`;
      return { tint: '#FCF1E8', road: 'ink', svg: svg(s) }; },
    // 8 · Variabilidad: una curva estrecha y otra ancha con flechas de dispersión
    8: () => { let s = `<rect width="400" height="600" fill="#EAF2F8"/>`;
      s += bell(200, 230, 200, 170, '#C8553D', 5, .45) + bell(0, 560, 400, 90, '#2D5A7B', 5, .45, 'rgba(45,90,123,.12)');
      s += `<g opacity=".5" stroke="#2D5A7B" stroke-width="3.5" fill="none" stroke-linecap="round"><path d="M110 520H290M110 520l12 -8M110 520l12 8M290 520l-12 -8M290 520l-12 8"/></g>`;
      return { tint: '#EAF2F8', road: 'spread', svg: svg(s) }; },
    // 9 · Forma y puntuaciones típicas: diagramas de caja
    9: () => { let s = paper('#F4F1EA', '#E6E0D2', 40);
      s += boxp(270, 110, 1.1, '#2D5A7B') + boxp(110, 300, .9, '#5FA47A') + boxp(260, 500, 1, '#8A6A50');
      return { tint: '#F4F1EA', road: 'grid', svg: svg(s) }; },
    // 10 · Probabilidad: dados y monedas
    10: () => { let s = `<rect width="400" height="600" fill="#F1F5EC"/>`;
      s += die(320, 100, 1.5, 14, 5, '#2D5A7B') + die(70, 260, 1.2, -18, 3, '#C8553D') + die(330, 420, 1.3, 30, 6, '#5FA47A') + die(90, 540, 1.1, 8, 2, '#2D5A7B');
      [[250, 250], [150, 120], [220, 560]].forEach(([x, y], i) => { s += `<g opacity=".45"><circle cx="${x}" cy="${y}" r="24" fill="#F5D278" stroke="#C58F07" stroke-width="3"/><text x="${x}" y="${y + 7}" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="19" fill="#8A6A10">${i % 2 ? 'C' : 'X'}</text></g>`; });
      return { tint: '#F1F5EC', road: 'dice', svg: svg(s) }; },
    // 11 · Bayes: un árbol de probabilidades
    11: () => { let s = `<rect width="400" height="600" fill="#F6EEF3"/>`;
      const node = (x, y, c) => `<circle cx="${x}" cy="${y}" r="13" fill="${c}"/>`;
      s += `<g opacity=".45" stroke="#A07090" stroke-width="4" fill="none"><path d="M300 50L240 140M300 50L360 140M240 140L210 230M240 140L270 230M360 140L340 230M360 140L385 230"/><path d="M80 330L30 430M80 330L130 430M30 430L10 520M30 430L55 520M130 430L110 520M130 430L160 520"/></g>`;
      s += `<g opacity=".55">${node(300, 50, '#26323A')}${node(240, 140, '#C8553D')}${node(360, 140, '#2D5A7B')}${[210, 270, 340, 385].map((x, i) => node(x, 230, i % 2 ? '#B9C3CA' : '#E0A83A')).join('')}${node(80, 330, '#26323A')}${node(30, 430, '#C8553D')}${node(130, 430, '#2D5A7B')}${[10, 55, 110, 160].map((x, i) => node(x, 520, i % 2 ? '#B9C3CA' : '#E0A83A')).join('')}</g>`;
      return { tint: '#F6EEF3', road: 'vine', svg: svg(s) }; },
    // 12 · Asociación y causalidad: calles al estilo del mapa de Snow, con la bomba de agua
    12: () => { const r = rng(1212); let s = `<rect width="400" height="600" fill="#F5F2EA"/>`;
      s += `<g opacity=".4" stroke="#B9AE98" stroke-width="16" fill="none"><path d="M0 120L400 90M0 300L400 330M0 470L400 440M90 0L60 600M250 0L290 600"/></g>`;
      for (let i = 0; i < 46; i++) { const a = r() * Math.PI * 2, d = 20 + r() * 120; const x = 170 + Math.cos(a) * d, y = 315 + Math.sin(a) * d * .9; s += `<rect x="${f(x)}" y="${f(y)}" width="10" height="4" fill="#26323A" opacity=".5"/>`; }
      s += `<g opacity=".6"><circle cx="170" cy="315" r="9" fill="#2D5A7B"/><path d="M170 306v-16h10" stroke="#2D5A7B" stroke-width="4" fill="none"/></g>`;
      return { tint: '#F5F2EA', road: 'street', svg: svg(s) }; },
    // 13 · Correlación: nube de puntos y recta
    13: () => { const r = rng(1313); let s = paper('#EEF2FA', '#DEE5F3', 40);
      for (let i = 0; i < 60; i++) { const t = r(), x = 190 + t * 200, y = 250 - t * 200 + (r() - .5) * 70; s += `<circle cx="${f(x)}" cy="${f(y)}" r="5" fill="#3F6FA8" opacity=".5"/>`; }
      for (let i = 0; i < 45; i++) { const t = r(), x = 10 + t * 190, y = 380 + t * 190 + (r() - .5) * 90; s += `<circle cx="${f(x)}" cy="${f(y)}" r="5" fill="#C8553D" opacity=".45"/>`; }
      s += `<path d="M180 260L400 40" stroke="#26323A" stroke-width="3.5" opacity=".45"/><path d="M0 370L210 580" stroke="#26323A" stroke-width="3.5" opacity=".4"/>`;
      return { tint: '#EEF2FA', road: 'grid', svg: svg(s) }; },
    // 14 · Tablas de contingencia: una tabla 2 × 2 con frecuencias
    14: () => { let s = `<rect width="400" height="600" fill="#F2F6F0"/>`;
      const tab = (x, y, sz, vals, c) => `<g opacity=".5" transform="translate(${x} ${y})">${vals.map((v, i) => `<rect x="${(i % 2) * sz}" y="${Math.floor(i / 2) * sz}" width="${sz}" height="${sz}" fill="${i === 0 || i === 3 ? c : '#fff'}" fill-opacity="${i === 0 || i === 3 ? .35 : 1}" stroke="${c}" stroke-width="3"/><text x="${(i % 2) * sz + sz / 2}" y="${Math.floor(i / 2) * sz + sz / 2 + 8}" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="${f(sz / 3.2)}" fill="${c}">${v}</text>`).join('')}</g>`;
      s += tab(240, 50, 70, [30, 20, 20, 30], '#2D5A7B') + tab(20, 400, 64, [12, 28, 25, 15], '#5FA47A');
      s += `<text x="300" y="300" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="64" fill="#C8553D" opacity=".3">χ²</text>`;
      return { tint: '#F2F6F0', road: 'grid', svg: svg(s) }; },
    // 15 · La normal: tablero de Galton
    15: () => { let s = `<rect width="400" height="600" fill="#F7EFE4"/>`;
      for (let row = 0; row < 8; row++) for (let k = 0; k <= row; k++) s += `<circle cx="${f(290 + (k - row / 2) * 24)}" cy="${40 + row * 22}" r="5" fill="#8A6A50" opacity=".5"/>`;
      const h = [4, 12, 26, 40, 46, 40, 26, 12, 4]; h.forEach((v, i) => { s += `<rect x="${190 + i * 22}" y="${f(300 - v * 2.4)}" width="18" height="${f(v * 2.4)}" rx="3" fill="#C8553D" opacity=".4"/>`; });
      s += bell(0, 590, 240, 150, '#2D5A7B', 5, .45, 'rgba(45,90,123,.15)');
      return { tint: '#F7EFE4', road: 'pegs', svg: svg(s) }; },
    // 16 · Contraste e intervalos: colas de rechazo e intervalos de confianza
    16: () => { let s = `<rect width="400" height="600" fill="#EEF0F7"/>`;
      s += bell(180, 230, 220, 170, '#2D5A7B', 5, .5);
      let L = '', R = ''; for (let i = 0; i <= 20; i++) { const t = -3 + i * .052, x = 180 + (t + 3) / 6 * 220, y = 230 - Math.exp(-t * t / 2) * 170; L += `L${f(x)} ${f(y)}`; const t2 = 1.96 + i * .052, x2 = 180 + (t2 + 3) / 6 * 220, y2 = 230 - Math.exp(-t2 * t2 / 2) * 170; R += `L${f(x2)} ${f(y2)}`; }
      s += `<path d="M180 230${L}L${f(180 + (-1.96 + 3) / 6 * 220)} 230Z" fill="#C8553D" opacity=".5"/><path d="M${f(180 + (1.96 + 3) / 6 * 220)} 230${R}L400 230Z" fill="#C8553D" opacity=".5"/>`;
      const r = rng(1616); for (let i = 0; i < 12; i++) { const y = 340 + i * 20, m = 110 + (r() - .5) * 60, miss = i === 4; s += `<path d="M${f(m - 50)} ${y}H${f(m + 50)}" stroke="${miss ? '#C8553D' : '#2D5A7B'}" stroke-width="5" stroke-linecap="round" opacity=".45"/><circle cx="${f(miss ? m + 70 : m)}" cy="${y}" r="0"/>`; }
      s += `<path d="M110 325V585" stroke="#26323A" stroke-width="2.5" stroke-dasharray="7 6" opacity=".45"/>`;
      return { tint: '#EEF0F7', road: 'ci', svg: svg(s) }; }
  };

  // ---------- Motivación y Emoción ----------
  const face = (x, y, r, mood, col, op) => { const m = { joy: `M${x - r * .45} ${y + r * .2}Q${x} ${y + r * .7} ${x + r * .45} ${y + r * .2}`, sad: `M${x - r * .4} ${y + r * .5}Q${x} ${y + r * .1} ${x + r * .4} ${y + r * .5}`, neutral: `M${x - r * .4} ${y + r * .35}H${x + r * .4}`, wow: '' }[mood];
    const mouth = mood === 'wow' ? `<ellipse cx="${x}" cy="${y + r * .4}" rx="${r * .18}" ry="${r * .25}" fill="${col}"/>` : `<path d="${m}" stroke="${col}" stroke-width="${f(r * .12)}" fill="none" stroke-linecap="round"/>`;
    const brow = mood === 'anger' ? `<path d="M${x - r * .55} ${y - r * .45}L${x - r * .15} ${y - r * .25}M${x + r * .55} ${y - r * .45}L${x + r * .15} ${y - r * .25}" stroke="${col}" stroke-width="${f(r * .1)}" stroke-linecap="round"/>` : '';
    const mm = mood === 'anger' ? `<path d="M${x - r * .4} ${y + r * .45}Q${x} ${y + r * .2} ${x + r * .4} ${y + r * .45}" stroke="${col}" stroke-width="${f(r * .12)}" fill="none" stroke-linecap="round"/>` : mouth;
    return `<g opacity="${op || .5}"><circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="${col}" stroke-width="${f(r * .1)}"/><circle cx="${f(x - r * .35)}" cy="${f(y - r * .1)}" r="${f(r * .1)}" fill="${col}"/><circle cx="${f(x + r * .35)}" cy="${f(y - r * .1)}" r="${f(r * .1)}" fill="${col}"/>${brow}${mm}</g>`; };
  const star = (x, y, r, col, op) => { let d = ''; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; d += (i ? 'L' : 'M') + f(x + Math.cos(a) * rr) + ' ' + f(y + Math.sin(a) * rr); } return `<path d="${d}Z" fill="${col}" opacity="${op || .5}"/>`; };
  const heart = (x, y, s, col, op) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 12C-14 2 -22 -6 -16 -14C-11 -20 -3 -18 0 -12C3 -18 11 -20 16 -14C22 -6 14 2 0 12Z" fill="${col}" opacity="${op || .5}"/>`;
  const drop = (x, y, s, col, op) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -16C6 -6 11 0 11 6A11 11 0 0 1 -11 6C-11 0 -6 -6 0 -16Z" fill="${col}" opacity="${op || .5}"/>`;
  const ME = {
    // 1 · Introducción: brújula (dirección) y batería (energía)
    1: () => { let s = `<rect width="400" height="600" fill="#F6F1EA"/>`;
      s += `<g opacity=".5" transform="translate(310 120)"><circle r="56" fill="#fff" stroke="#8A6A50" stroke-width="6"/><circle r="44" fill="none" stroke="#D9C9B4" stroke-width="2"/><path d="M0 -38L10 0L0 38L-10 0Z" fill="#C8553D"/><path d="M0 0L10 0L0 38L-10 0Z" fill="#2D5A7B"/><circle r="5" fill="#26323A"/>${['N', 'E', 'S', 'O'].map((t, i) => { const a = i * Math.PI / 2 - Math.PI / 2; return `<text x="${f(Math.cos(a) * 30)}" y="${f(Math.sin(a) * 30 + 5)}" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="12" fill="#8A6A50">${t}</text>`; }).join('')}</g>`;
      s += `<g opacity=".45" transform="translate(80 470) rotate(-12)"><rect x="-40" y="-70" width="80" height="140" rx="12" fill="#fff" stroke="#5FA47A" stroke-width="6"/><rect x="-14" y="-82" width="28" height="12" rx="3" fill="#5FA47A"/>${[0, 1, 2].map(i => `<rect x="-28" y="${22 - i * 40}" width="56" height="32" rx="5" fill="#5FA47A"/>`).join('')}<path d="M-6 -46l-8 18h10l-6 16 18-24h-11l6-10z" fill="#F5D278"/></g>`;
      s += `<g opacity=".3" stroke="#C8553D" stroke-width="5" fill="none" stroke-linecap="round"><path d="M60 140q40-40 80 0"/><path d="M136 132l6 10l-11 2"/></g>`;
      return { tint: '#F6F1EA', road: 'ink', svg: svg(s) }; },
    // 2 · Determinantes: trofeo (extrínseca) y chispa interior (intrínseca)
    2: () => { let s = `<rect width="400" height="600" fill="#FBF3E1"/>`;
      s += `<g opacity=".5" transform="translate(310 130)"><path d="M-38 -50h76v26c0 30-18 50-38 50s-38-20-38-50z" fill="#F5C33B" stroke="#B88A12" stroke-width="4"/><path d="M-38 -40c-24 0-24 34 4 36M38 -40c24 0 24 34-4 36" stroke="#B88A12" stroke-width="5" fill="none"/><rect x="-8" y="26" width="16" height="22" fill="#B88A12"/><rect x="-28" y="48" width="56" height="12" rx="3" fill="#8A6A10"/>${star(0, -18, 14, '#fff', .8)}</g>`;
      s += heart(90, 460, 3.2, '#E07A6A', .45) + star(110, 440, 16, '#F5D278', .7) + star(60, 400, 10, '#F5D278', .6);
      s += dots(rng(202), 20, '#EBCB82', 2, 5, .6);
      return { tint: '#FBF3E1', road: 'ribbon', svg: svg(s) }; },
    // 3 · Historia I: balanza (equilibrio homeostático) y columna clásica
    3: () => { let s = `<rect width="400" height="600" fill="#EEF2F6"/>`;
      s += `<g opacity=".45" transform="translate(300 140)"><path d="M0 -70V60M-40 64h80" stroke="#5E6F80" stroke-width="7" stroke-linecap="round"/><path d="M-80 -50H80" stroke="#5E6F80" stroke-width="6" stroke-linecap="round"/><path d="M-80 -50l-22 40h44zM80 -50l-22 40h44z" fill="none" stroke="#5E6F80" stroke-width="3"/><path d="M-104 -10a24 10 0 0 0 48 0zM56 -10a24 10 0 0 0 48 0z" fill="#9BB3C8"/><circle cy="-74" r="8" fill="#5E6F80"/></g>`;
      s += `<g opacity=".4" transform="translate(70 420)"><rect x="-44" y="-110" width="88" height="16" fill="#D8D0C2"/><rect x="-36" y="-94" width="72" height="190" fill="#EAE3D6"/>${[-24, -8, 8, 24].map(x => `<path d="M${x} -94V96" stroke="#CFC5B4" stroke-width="5"/>`).join('')}<rect x="-48" y="96" width="96" height="18" fill="#D8D0C2"/></g>`;
      return { tint: '#EEF2F6', road: 'ink', svg: svg(s) }; },
    // 4 · Activación: un medidor de aguja y la U invertida
    4: () => { let s = `<rect width="400" height="600" fill="#F3EEF8"/>`;
      s += `<g opacity=".5" transform="translate(300 160)"><path d="M-70 0A70 70 0 0 1 70 0" fill="none" stroke="#5FA47A" stroke-width="16"/><path d="M-70 0A70 70 0 0 1 -35 -60.6" fill="none" stroke="#8DC5E0" stroke-width="16"/><path d="M35 -60.6A70 70 0 0 1 70 0" fill="none" stroke="#C8553D" stroke-width="16"/><path d="M0 0L22 -52" stroke="#26323A" stroke-width="6" stroke-linecap="round"/><circle r="9" fill="#26323A"/></g>`;
      s += bell(0, 560, 230, 150, '#7A5BA8', 5, .45, 'rgba(122,91,168,.14)');
      return { tint: '#F3EEF8', road: 'spread', svg: svg(s) }; },
    // 5 · Teorías cognitivas: diana con flechas y escalera de metas
    5: () => { let s = `<rect width="400" height="600" fill="#EDF5F1"/>`;
      s += `<g opacity=".5" transform="translate(310 130)">${[60, 44, 28, 12].map((r, i) => `<circle r="${r}" fill="${i % 2 ? '#fff' : '#C8553D'}"/>`).join('')}<path d="M-6 -4L-90 -60M-90 -60l-4 14M-90 -60l14 -2" stroke="#26323A" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
      s += `<g opacity=".45" stroke="#5FA47A" stroke-width="6" stroke-linecap="round"><path d="M30 580L110 380M90 590L170 390"/>${[0, 1, 2, 3, 4].map(i => `<path d="M${38 + i * 16} ${560 - i * 40}H${98 + i * 16}"/>`).join('')}</g>` + star(160, 360, 16, '#F5C33B', .7);
      return { tint: '#EDF5F1', road: 'grid', svg: svg(s) }; },
    // 6 · Maslow y autorrealización: montaña con bandera
    6: () => { let s = `<rect width="400" height="600" fill="#EAF1F8"/>`;
      s += `<path d="M120 300L250 70L400 300Z" fill="#9BB6CC" opacity=".5"/><path d="M250 70L222 120L240 112L256 128L272 112L282 122Z" fill="#fff" opacity=".8"/><path d="M250 70V30" stroke="#26323A" stroke-width="3" opacity=".5"/><path d="M250 30h30l-8 8l8 8h-30z" fill="#C8553D" opacity=".6"/>`;
      s += `<path d="M0 600L90 420L190 600Z" fill="#B7CDB0" opacity=".5"/>`;
      s += `<g opacity=".35" fill="none" stroke="#2D5A7B" stroke-width="4"><path d="M10 330q30-20 60 0t60 0"/><path d="M10 350q30-20 60 0t60 0"/></g>`;
      return { tint: '#EAF1F8', road: 'trail', svg: svg(s) }; },
    // 7 · Hambre: plato, cubiertos y manzana
    7: () => { let s = `<rect width="400" height="600" fill="#FBF1E6"/>`;
      s += `<g opacity=".5" transform="translate(300 140)"><circle r="62" fill="#fff" stroke="#D9B79C" stroke-width="5"/><circle r="40" fill="none" stroke="#EAD7C3" stroke-width="3"/><path d="M-92 -50V40M-100 -50v24a8 8 0 0 0 16 0v-24" stroke="#8A6A50" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M92 -50c12 10 12 40 0 44V40" stroke="#8A6A50" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;
      s += `<g opacity=".5" transform="translate(80 470)"><path d="M0 -30C-30 -46 -54 -20 -46 14C-40 40 -18 56 0 46C18 56 40 40 46 14C54 -20 30 -46 0 -30Z" fill="#D9534F"/><path d="M0 -30C2 -44 8 -52 16 -56" stroke="#6B4B2A" stroke-width="5" fill="none"/><path d="M6 -46C18 -60 34 -56 38 -48C26 -40 14 -40 6 -46Z" fill="#7FB84E"/></g>`;
      return { tint: '#FBF1E6', road: 'crumbs', svg: svg(s) }; },
    // 8 · Sed: gotas y vaso de agua
    8: () => { let s = `<rect width="400" height="600" fill="#E8F3FA"/>`;
      s += `<g opacity=".5" transform="translate(310 140)"><path d="M-40 -60h80l-10 120h-60z" fill="#fff" stroke="#6FA8D0" stroke-width="5"/><path d="M-35 -10h70l-6 66h-58z" fill="#8DC5E0"/></g>`;
      const r = rng(808); for (let i = 0; i < 9; i++) s += drop(f(30 + r() * 340), f(260 + r() * 320), 1 + r() * 1.4, '#6FA8D0', .45);
      return { tint: '#E8F3FA', road: 'water', svg: svg(s) }; },
    // 9 · Sueño: luna y estrellas
    9: () => { const r = rng(909); let s = `<rect width="400" height="600" fill="#E6E8F5"/>`;
      s += `<g opacity=".55"><circle cx="310" cy="110" r="50" fill="#F5D278"/><circle cx="332" cy="96" r="44" fill="#E6E8F5"/></g>`;
      for (let i = 0; i < 18; i++) s += star(f(20 + r() * 360), f(30 + r() * 540), 4 + r() * 7, '#9AA5D8', .55);
      s += `<g opacity=".45" font-family="Nunito,system-ui,sans-serif" font-weight="800" fill="#6A75B8"><text x="70" y="430" font-size="38">z</text><text x="100" y="395" font-size="28">z</text><text x="122" y="368" font-size="20">z</text></g>`;
      return { tint: '#E6E8F5', road: 'night', svg: svg(s) }; },
    // 10 · Motivos sociales: logro (medalla), afiliación (corazones), poder (corona)
    10: () => { let s = `<rect width="400" height="600" fill="#F5EFF5"/>`;
      s += `<g opacity=".5" transform="translate(310 110)"><path d="M-20 -50L0 -10L20 -50" stroke="#C8553D" stroke-width="10" fill="none"/><circle cy="14" r="30" fill="#F5C33B" stroke="#B88A12" stroke-width="4"/>${star(0, 14, 14, '#fff', .8)}</g>`;
      s += `<g opacity=".5" transform="translate(80 300)"><path d="M-40 20L-46 -24L-22 0L0 -34L22 0L46 -24L40 20Z" fill="#E0A83A" stroke="#B88A12" stroke-width="3"/><rect x="-40" y="20" width="80" height="12" fill="#B88A12"/></g>`;
      s += heart(300, 480, 2.4, '#E07A6A', .45) + heart(340, 520, 1.6, '#E07A6A', .4);
      s += `<g opacity=".4">${[0, 1, 2].map(i => `<circle cx="${80 + i * 34}" cy="520" r="14" fill="#7A5BA8"/><path d="M${66 + i * 34} 560a14 18 0 0 1 28 0z" fill="#7A5BA8"/>`).join('')}</g>`;
      return { tint: '#F5EFF5', road: 'dots', svg: svg(s) }; },
    // 11 · La emoción: caras y una pluma de escritor (historia)
    11: () => { let s = `<rect width="400" height="600" fill="#FBF0EC"/>`;
      s += face(310, 110, 40, 'joy', '#C8553D') + face(90, 300, 34, 'sad', '#2D5A7B') + face(320, 470, 36, 'wow', '#7A5BA8');
      s += `<g opacity=".4" transform="translate(110 500) rotate(-35)"><path d="M0 -80C30 -60 30 0 0 60C-30 0 -30 -60 0 -80Z" fill="#E0A83A"/><path d="M0 -70V80" stroke="#8A6A10" stroke-width="3"/></g>`;
      return { tint: '#FBF0EC', road: 'ink', svg: svg(s) }; },
    // 12 · Debates: pétalos de emociones y ejes valencia-activación
    12: () => { let s = `<rect width="400" height="600" fill="#F1F4EC"/>`;
      const cols = ['#F2C14E', '#8DC56C', '#3E9B5F', '#4FA7C9', '#4F72B8', '#8E6BB8', '#D9534F', '#EE9A4D'];
      s += `<g opacity=".45" transform="translate(300 140)">${cols.map((c, i) => `<path d="M0 0C-16 -30 -10 -60 0 -72C10 -60 16 -30 0 0Z" fill="${c}" transform="rotate(${i * 45})"/>`).join('')}<circle r="8" fill="#fff"/></g>`;
      s += `<g opacity=".45" stroke="#26323A" stroke-width="3"><path d="M20 450H200M110 360V540"/></g><circle cx="110" cy="450" r="80" fill="none" stroke="#5FA47A" stroke-width="3" opacity=".45"/>` + [[160, 400, '#5FA47A'], [60, 400, '#C8553D'], [60, 500, '#4F72B8'], [160, 500, '#8DC56C']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="9" fill="${c}" opacity=".55"/>`).join('');
      return { tint: '#F1F4EC', road: 'ribbon', svg: svg(s) }; },
    // 13 · Funciones y clasificación: caras de miedo, ira, alegría, tristeza
    13: () => { let s = `<rect width="400" height="600" fill="#F4F0F8"/>`;
      s += face(300, 100, 36, 'anger', '#C8553D') + face(90, 230, 32, 'wow', '#3E9B5F') + face(320, 360, 34, 'joy', '#E0A83A') + face(80, 500, 34, 'sad', '#4F72B8');
      s += heart(200, 560, 1.8, '#E07A6A', .35);
      return { tint: '#F4F0F8', road: 'ribbon', svg: svg(s) }; },
    // 14 · Neurociencia afectiva: cerebro y la «almendra» de la amígdala
    14: () => { let s = `<rect width="400" height="600" fill="#F6EDEB"/>`;
      s += `<g opacity=".45" transform="translate(280 150)"><path d="M-100 20C-110 -40 -60 -90 0 -90C60 -90 110 -50 100 10C96 50 60 70 30 64C20 90 -20 90 -30 70C-70 76 -96 56 -100 20Z" fill="#F4C7BD" stroke="#C97C6E" stroke-width="4"/>${[[-60, -40], [-20, -60], [30, -50], [60, -10], [-40, 10], [10, 0]].map(([x, y]) => `<path d="M${x} ${y}q12 -14 26 0t26 0" stroke="#C97C6E" stroke-width="3" fill="none"/>`).join('')}<ellipse cx="-6" cy="40" rx="14" ry="10" fill="#D9534F"/></g>`;
      s += `<g opacity=".4" transform="translate(90 470) rotate(-20)"><path d="M0 -40C26 -40 40 -10 30 16C22 36 -6 44 -24 28C-40 12 -30 -40 0 -40z" fill="#E7B98A" stroke="#B9875A" stroke-width="3"/></g>`;
      return { tint: '#F6EDEB', road: 'tract', svg: svg(s) }; },
    // 15 · Educación y trabajo: birrete, libros y maletín
    15: () => { let s = `<rect width="400" height="600" fill="#EEF3F8"/>`;
      s += `<g opacity=".5" transform="translate(300 120)"><path d="M-70 0L0 -30L70 0L0 30Z" fill="#2D5A7B"/><path d="M-40 14V44C-20 60 20 60 40 44V14" fill="#3F6FA8"/><path d="M60 4V40" stroke="#E0A83A" stroke-width="4"/><circle cx="60" cy="44" r="6" fill="#E0A83A"/></g>`;
      s += `<g opacity=".45">${[['#C8553D', 0], ['#5FA47A', 1], ['#E0A83A', 2]].map(([c, i]) => `<rect x="${40 + i * 6}" y="${400 - i * 26}" width="120" height="24" rx="3" fill="${c}"/>`).join('')}</g>`;
      s += `<g opacity=".45" transform="translate(300 500)"><rect x="-56" y="-30" width="112" height="72" rx="10" fill="#8A6A50"/><path d="M-20 -30v-14h40v14" stroke="#8A6A50" stroke-width="6" fill="none"/><rect x="-56" y="-2" width="112" height="6" fill="#6E5440"/></g>`;
      return { tint: '#EEF3F8', road: 'grid', svg: svg(s) }; },
    // 16 · Emociones y salud: corazón con electrocardiograma y hoja
    16: () => { let s = `<rect width="400" height="600" fill="#F3F7EE"/>`;
      s += heart(300, 120, 4.4, '#D9534F', .45) + `<path d="M180 140H250l12-28l14 56l14-40l10 12H400" stroke="#C8553D" stroke-width="4" fill="none" opacity=".55"/>`;
      s += `<g opacity=".45" transform="translate(90 470) rotate(-30)"><path d="M0 -70C40 -40 40 30 0 70C-40 30 -40 -40 0 -70Z" fill="#7FB84E"/><path d="M0 -60V70" stroke="#4E7E2E" stroke-width="3"/></g>`;
      return { tint: '#F3F7EE', road: 'ecg', svg: svg(s) }; }
  };

  // ---------- Atención y Percepción ----------
  const eyeShape = (x, y, s, iris, op) => `<g opacity="${op || .5}" transform="translate(${x} ${y}) scale(${s})"><path d="M-60 0Q0 -44 60 0Q0 44 -60 0Z" fill="#fff" stroke="#26323A" stroke-width="4"/><circle r="22" fill="${iris}"/><circle r="10" fill="#26323A"/><circle cx="-6" cy="-6" r="4" fill="#fff"/></g>`;
  const sine = (x0, y0, w, amp, k, col, sw, op) => { let d = ''; for (let i = 0; i <= 80; i++) { const x = x0 + w * i / 80; d += (i ? 'L' : 'M') + f(x) + ' ' + f(y0 + Math.sin(i / 80 * Math.PI * 2 * k) * amp); } return `<path d="${d}" stroke="${col}" stroke-width="${sw}" fill="none" opacity="${op || .5}" stroke-linecap="round"/>`; };
  const AP = {
    // 1 · El proceso perceptivo: ojo, cerebro y el ciclo que los une
    1: () => { let s = `<rect width="400" height="600" fill="#F3F0F8"/>` + eyeShape(300, 120, 1.1, '#5B8FC7');
      s += `<g opacity=".4" transform="translate(90 460)"><path d="M-70 10C-76 -40 -34 -72 8 -70C52 -70 80 -40 72 0C68 30 40 44 18 40C10 60 -18 62 -26 46C-54 50 -68 34 -70 10z" fill="#F4C7BD" stroke="#C97C6E" stroke-width="4"/><path d="M-40 -30q10-12 22 0t22 0M-10 0q10-12 22 0t22 0" stroke="#C97C6E" stroke-width="3" fill="none"/></g>`;
      s += `<g opacity=".35" fill="none" stroke="#7A5BA8" stroke-width="5" stroke-linecap="round"><path d="M250 200C200 300 160 340 140 390"/><path d="M130 380l10 12l6 -14"/></g>`;
      return { tint: '#F3F0F8', road: 'ink', svg: svg(s) }; },
    // 2 · Psicofísica: función psicométrica y un mando de intensidad
    2: () => { let s = paper('#F4F7EF', '#E1EAD6', 40);
      let d = ''; for (let i = 0; i <= 60; i++) { const x = 180 + i * 3.6, y = 230 - 160 / (1 + Math.exp(-(i - 30) / 5)); d += (i ? 'L' : 'M') + f(x) + ' ' + f(y); }
      s += `<path d="${d}" stroke="#2D5A7B" stroke-width="5" fill="none" opacity=".5"/><path d="M180 150H400" stroke="#C8553D" stroke-width="2" stroke-dasharray="6 6" opacity=".5"/>`;
      s += `<g opacity=".5" transform="translate(90 470)"><circle r="46" fill="#fff" stroke="#5E6F80" stroke-width="5"/><path d="M0 0L28 -30" stroke="#C8553D" stroke-width="6" stroke-linecap="round"/>${[0, 1, 2, 3, 4, 5, 6].map(i => { const a = Math.PI * (0.8 + i * 0.233); return `<path d="M${f(Math.cos(a) * 54)} ${f(Math.sin(a) * 54)}L${f(Math.cos(a) * 62)} ${f(Math.sin(a) * 62)}" stroke="#5E6F80" stroke-width="3"/>`; }).join('')}</g>`;
      return { tint: '#F4F7EF', road: 'ruler', svg: svg(s) }; },
    // 3 · Detección de señales: dos campanas y una pantalla de radar
    3: () => { let s = `<rect width="400" height="600" fill="#EDF2F7"/>`;
      s += bell(150, 230, 180, 150, '#2D5A7B', 4, .5) + bell(210, 230, 180, 150, '#C8553D', 4, .5) + `<path d="M285 70V235" stroke="#26323A" stroke-width="3" stroke-dasharray="7 6" opacity=".45"/>`;
      s += `<g opacity=".45" transform="translate(90 470)"><circle r="62" fill="#1E4A3A"/><circle r="42" fill="none" stroke="#7FD3A6" stroke-width="2"/><circle r="22" fill="none" stroke="#7FD3A6" stroke-width="2"/><path d="M0 0L52 -34" stroke="#7FD3A6" stroke-width="3"/><circle cx="24" cy="-28" r="5" fill="#E9FFB0"/></g>`;
      return { tint: '#EDF2F7', road: 'grid', svg: svg(s) }; },
    // 4 · Gestalt: puntos agrupados y el triángulo de Kanizsa
    4: () => { let s = `<rect width="400" height="600" fill="#F8F3EA"/>`;
      for (let g = 0; g < 2; g++) for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) s += `<circle cx="${230 + g * 90 + i * 22}" cy="${70 + j * 26}" r="7" fill="#2D5A7B" opacity=".45"/>`;
      const pac = (x, y, a0) => { const a1 = a0 + 300, r = 30, p = (a) => [f(x + Math.cos(a * Math.PI / 180) * r), f(y + Math.sin(a * Math.PI / 180) * r)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${x} ${y}L${x0} ${y0}A${r} ${r} 0 1 1 ${x1} ${y1}Z" fill="#26323A" opacity=".5"/>`; };
      s += pac(100, 390, 120) + pac(40, 500, 0 - 60) + pac(160, 500, 180);
      return { tint: '#F8F3EA', road: 'dots', svg: svg(s) }; },
    // 5 · El sistema visual: un gran ojo y rayos de luz
    5: () => { let s = `<rect width="400" height="600" fill="#EAF2F8"/>` + eyeShape(290, 140, 1.5, '#4F8FBF', .55);
      s += `<g opacity=".35" stroke="#F5C33B" stroke-width="4">${[0, 1, 2, 3].map(i => `<path d="M0 ${380 + i * 30}L180 ${420 + i * 10}"/>`).join('')}</g><circle cx="190" cy="440" r="10" fill="#F5C33B" opacity=".5"/>`;
      return { tint: '#EAF2F8', road: 'beam', svg: svg(s) }; },
    // 6 · Color: círculos aditivos RGB y un prisma
    6: () => { let s = `<rect width="400" height="600" fill="#F6F3F8"/>`;
      s += `<g opacity=".45" style="mix-blend-mode:multiply"><circle cx="290" cy="100" r="58" fill="#E85B5B"/><circle cx="330" cy="165" r="58" fill="#5BBF6A"/><circle cx="250" cy="165" r="58" fill="#5B7FE0"/></g>`;
      s += `<g opacity=".5"><path d="M60 520L120 420L180 520Z" fill="#fff" stroke="#8A949B" stroke-width="4"/><path d="M0 470L95 470" stroke="#fff" stroke-width="6"/>${['#E85B5B', '#F5A35B', '#F5D95B', '#5BBF6A', '#5B7FE0', '#9A5BE0'].map((c, i) => `<path d="M150 ${470 + i * 4}L400 ${430 + i * 22}" stroke="${c}" stroke-width="7"/>`).join('')}</g>`;
      return { tint: '#F6F3F8', road: 'prism', svg: svg(s) }; },
    // 7 · Audición I: ondas y espiral de la cóclea
    7: () => { let s = `<rect width="400" height="600" fill="#EFF5F2"/>`;
      s += sine(180, 90, 220, 28, 2, '#2D5A7B', 5) + sine(180, 170, 220, 14, 5, '#C8553D', 4);
      let d = ''; for (let i = 0; i <= 120; i++) { const a = i / 120 * Math.PI * 5, r = 60 - i * .45; d += (i ? 'L' : 'M') + f(100 + Math.cos(a) * r) + ' ' + f(460 + Math.sin(a) * r); }
      s += `<path d="${d}" stroke="#9A6EB8" stroke-width="10" fill="none" opacity=".45" stroke-linecap="round"/>`;
      return { tint: '#EFF5F2', road: 'wave', svg: svg(s) }; },
    // 8 · Audición II: cabeza con auriculares y fuentes alrededor
    8: () => { let s = `<rect width="400" height="600" fill="#F2F1F8"/>`;
      s += `<g opacity=".5" transform="translate(290 140)"><circle r="46" fill="#F2D7C9" stroke="#26323A" stroke-width="3"/><path d="M-52 0A52 52 0 0 1 52 0" stroke="#26323A" stroke-width="7" fill="none"/><rect x="-62" y="-6" width="16" height="30" rx="6" fill="#7A5BA8"/><rect x="46" y="-6" width="16" height="30" rx="6" fill="#7A5BA8"/></g>`;
      for (const [x, y] of [[80, 380], [160, 520], [40, 520]]) s += `<circle cx="${x}" cy="${y}" r="10" fill="#C8553D" opacity=".5"/>` + [16, 26, 36].map(r => `<path d="M${x + r} ${y - r * .6}A${r} ${r} 0 0 1 ${x + r} ${y + r * .6}" stroke="#C8553D" stroke-width="3" fill="none" opacity=".4"/>`).join('');
      return { tint: '#F2F1F8', road: 'wave', svg: svg(s) }; },
    // 9 · Tacto y dolor: mano y huella dactilar
    9: () => { let s = `<rect width="400" height="600" fill="#FBF0EA"/>`;
      s += `<g opacity=".45" transform="translate(300 140)"><path d="M-40 70V-10C-40 -22 -24 -22 -24 -10V-50C-24 -62 -8 -62 -8 -50V-62C-8 -74 8 -74 8 -62V-50C8 -60 24 -60 24 -48V-20C26 -30 42 -28 40 -14L34 30C30 60 10 76 -10 76C-30 76 -40 74 -40 70Z" fill="#F2C6B0" stroke="#B9875A" stroke-width="4"/></g>`;
      s += `<g opacity=".4" fill="none" stroke="#8A6A50" stroke-width="3">${[10, 20, 30, 40, 50].map(r => `<ellipse cx="100" cy="470" rx="${r * .8}" ry="${r}"/>`).join('')}</g>`;
      return { tint: '#FBF0EA', road: 'ribbon', svg: svg(s) }; },
    // 10 · Olfato y gusto: flor, limón y gotas de aroma
    10: () => { let s = `<rect width="400" height="600" fill="#F4F8EC"/>`;
      s += `<g opacity=".5" transform="translate(300 130)">${[0, 1, 2, 3, 4, 5].map(i => `<ellipse rx="16" ry="34" cy="-30" fill="#E7A0B8" transform="rotate(${i * 60})"/>`).join('')}<circle r="16" fill="#F5C33B"/></g><path d="M300 170V260" stroke="#7FB84E" stroke-width="6" opacity=".45"/>`;
      s += `<g opacity=".5" transform="translate(90 480) rotate(-20)"><ellipse rx="56" ry="40" fill="#F5D95B" stroke="#C9A81E" stroke-width="4"/><circle r="26" fill="#FBEFA0"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M0 0L${f(Math.cos(i * Math.PI / 3) * 26)} ${f(Math.sin(i * Math.PI / 3) * 26)}" stroke="#E8CF5A" stroke-width="2"/>`).join('')}</g>`;
      s += `<g opacity=".35" fill="none" stroke="#9A6EB8" stroke-width="3">${[0, 1, 2].map(i => `<path d="M${230 + i * 20} 300q-12-16 0-32t0-32"/>`).join('')}</g>`;
      return { tint: '#F4F8EC', road: 'crumbs', svg: svg(s) }; },
    // 11 · La atención: un foco que ilumina una zona
    11: () => { let s = `<rect width="400" height="600" fill="#E9EAF2"/>`;
      s += `<path d="M330 40L180 300L330 300Z" fill="#FFF3B0" opacity=".55"/><ellipse cx="255" cy="300" rx="78" ry="18" fill="#FFE57A" opacity=".55"/>`;
      s += `<g opacity=".55" transform="translate(330 40) rotate(30)"><rect x="-18" y="-40" width="36" height="50" rx="6" fill="#5E6F80"/><path d="M-26 10h52l-8 18h-36z" fill="#8A949B"/></g>`;
      for (const [x, y] of [[60, 420], [130, 500], [40, 560], [170, 440]]) s += `<circle cx="${x}" cy="${y}" r="10" fill="#9AA5C0" opacity=".45"/>`;
      return { tint: '#E9EAF2', road: 'beam', svg: svg(s) }; },
    // 12 · Filtros: un embudo que deja pasar unas bolas y no otras
    12: () => { let s = `<rect width="400" height="600" fill="#F1F6F4"/>`;
      s += `<g opacity=".5"><path d="M210 60H390L320 170V230H280V170Z" fill="#fff" stroke="#5E6F80" stroke-width="5"/>${[[230, 40, '#C8553D'], [270, 30, '#2D5A7B'], [310, 45, '#5FA47A'], [350, 32, '#E0A83A']].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="12" fill="${c}"/>`).join('')}<circle cx="300" cy="260" r="12" fill="#C8553D"/></g>`;
      s += `<g opacity=".45"><path d="M40 420h140M40 450h100M40 480h140" stroke="#5E6F80" stroke-width="5" stroke-linecap="round"/><path d="M40 450h100" stroke="#C8553D" stroke-width="5" stroke-dasharray="6 8"/></g>`;
      return { tint: '#F1F6F4', road: 'grid', svg: svg(s) }; },
    // 13 · Redes y paradigmas: punto de fijación, cajas de Posner y palabras Stroop
    13: () => { let s = `<rect width="400" height="600" fill="#F5F2EC"/>`;
      s += `<g opacity=".5"><rect x="200" y="80" width="60" height="60" fill="none" stroke="#26323A" stroke-width="4"/><rect x="320" y="80" width="60" height="60" fill="none" stroke="#E0A83A" stroke-width="7"/><path d="M290 100v20M280 110h20" stroke="#26323A" stroke-width="4"/><text x="350" y="122" text-anchor="middle" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="34" fill="#C8553D">✱</text></g>`;
      s += `<g opacity=".5" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="30"><text x="40" y="430" fill="#3E9B5F">ROJO</text><text x="60" y="480" fill="#D9534F">AZUL</text><text x="30" y="530" fill="#4F72B8">VERDE</text></g>`;
      return { tint: '#F5F2EC', road: 'dots', svg: svg(s) }; },
    // 14 · Búsqueda visual: un campo de figuras con un objetivo diferente
    14: () => { const r = rng(1414); let s = `<rect width="400" height="600" fill="#EEF2F8"/>`;
      for (let i = 0; i < 40; i++) { const x = f(20 + r() * 360), y = f(20 + r() * 560), t = i === 7; s += t ? `<circle cx="${x}" cy="${y}" r="12" fill="#C8553D" opacity=".7"/>` : (i % 2 ? `<circle cx="${x}" cy="${y}" r="10" fill="#4F72B8" opacity=".35"/>` : `<rect x="${x}" y="${y}" width="18" height="18" fill="none" stroke="#C8553D" stroke-width="3" opacity=".35"/>`); }
      return { tint: '#EEF2F8', road: 'dots', svg: svg(s) }; },
    // 15 · Ilusiones: Müller-Lyer y un tablero de grises
    15: () => { let s = `<rect width="400" height="600" fill="#F7F3EE"/>`;
      s += `<g opacity=".5" stroke="#26323A" stroke-width="5" fill="none" stroke-linecap="round"><path d="M220 80H360M220 80l20 -16M220 80l20 16M360 80l-20 -16M360 80l-20 16"/><path d="M220 160H360M220 160l-20 -16M220 160l-20 16M360 160l20 -16M360 160l20 16"/></g>`;
      for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += `<rect x="${30 + i * 36}" y="${400 + j * 36}" width="36" height="36" fill="${(i + j) % 2 ? '#9AA0A6' : '#D7DADD'}" opacity=".6"/>`;
      s += `<circle cx="130" cy="430" r="40" fill="#26323A" opacity=".12"/>`;
      return { tint: '#F7F3EE', road: 'ribbon', svg: svg(s) }; },
    // 16 · Trastornos de la atención: un reloj dibujado solo por la derecha
    16: () => { let s = `<rect width="400" height="600" fill="#F2F6F0"/>`;
      s += `<g opacity=".5" transform="translate(300 130)"><path d="M0 -62A62 62 0 0 1 0 62" stroke="#26323A" stroke-width="5" fill="none"/>${[12, 1, 2, 3, 4, 5, 6].map((n, i) => { const a = -Math.PI / 2 + i * Math.PI / 6; return `<text x="${f(Math.cos(a) * 44 - 5)}" y="${f(Math.sin(a) * 44 + 5)}" font-family="Nunito,system-ui,sans-serif" font-weight="800" font-size="14" fill="#26323A">${n}</text>`; }).join('')}</g>`;
      for (let i = 0; i < 6; i++) s += `<circle cx="${50 + i * 26}" cy="${470 + Math.sin(i * 1.3) * 40}" r="11" fill="${['#C8553D', '#E0A83A', '#5FA47A', '#4F72B8', '#7A5BA8', '#C8553D'][i]}" opacity=".45"/>`;
      return { tint: '#F2F6F0', road: 'ink', svg: svg(s) }; }
  };

  // ---------- caminos (se dibujan uniendo los nodos de cada unidad) ----------

  // ---------- Interacción Social ----------
  const pers = (x, y, s, col, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op || .5}"><circle cy="-34" r="14" fill="${col}"/><path d="M-20 18V-6A20 20 0 0 1 20 -6V18Z" fill="${col}"/></g>`;
  const crowd = (r, n, x0, y0, w, h, cols, s0, op) => Array.from({ length: n }, () => pers(f(x0 + r() * w), f(y0 + r() * h), f(s0 * (.8 + r() * .4)), cols[Math.floor(r() * cols.length)], op)).join('');
  const bubble = (x, y, w, h, col, op, tail) => `<g opacity="${op || .5}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2.6}" fill="${col}"/><path d="M${x + (tail === 'r' ? w - 30 : 24)} ${y + h - 2}l${tail === 'r' ? 14 : -8} 22l${tail === 'r' ? -2 : 18} -22z" fill="${col}"/></g>`;
  const sheep = (x, y, s, col, op) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${op || .55}"><g fill="${col}">${[[-22, 0], [-8, -10], [8, -10], [22, 0], [8, 8], [-8, 8], [0, -2]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="13"/>`).join('')}</g><ellipse cx="34" cy="-8" rx="10" ry="8" fill="#3B3B3B"/><path d="M-16 18v14M-4 18v14M10 18v14M22 18v14" stroke="#3B3B3B" stroke-width="4" stroke-linecap="round"/></g>`;
  const IS = {
    // 1 · ¿Qué es un grupo?: un corro unido frente a un agregado
    1: () => { const r = rng(101); let s = `<rect width="400" height="600" fill="#EEF3F8"/>`;
      for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; s += pers(f(290 + Math.cos(a) * 62), f(150 + Math.sin(a) * 46), .9, ['#2D5A7B', '#5FA47A', '#E0A83A', '#C8553D'][i % 4], .5); }
      s += `<circle cx="290" cy="140" r="96" fill="none" stroke="#2D5A7B" stroke-width="4" stroke-dasharray="8 8" opacity=".35"/>`;
      s += `<path d="M40 560V420h120" stroke="#8A949B" stroke-width="6" fill="none" opacity=".35"/><rect x="40" y="400" width="120" height="22" rx="4" fill="#8A949B" opacity=".3"/>` + crowd(r, 4, 60, 470, 140, 60, ['#9AA5AE'], .8, .35);
      return { tint: '#EEF3F8', road: 'dots', svg: svg(s) }; },
    // 2 · Nacer, crecer y terminar: un brote que crece y las fases en fila
    2: () => { let s = `<rect width="400" height="600" fill="#F2F7EE"/>`;
      s += `<g opacity=".45"><path d="M80 560V470" stroke="#6E9C4A" stroke-width="6"/><path d="M80 500C60 480 46 486 40 470C60 466 74 472 80 500ZM80 486C100 462 118 468 126 452C104 446 88 458 80 486Z" fill="#7FB84E"/></g>`;
      ['#2D5A7B', '#C8553D', '#E0A83A', '#5FA47A', '#8A949B'].forEach((c, i) => { s += `<rect x="${210 + i * 34}" y="${200 - i * 26}" width="26" height="${60 + i * 26}" rx="6" fill="${c}" opacity=".45"/>`; });
      return { tint: '#F2F7EE', road: 'vine', svg: svg(s) }; },
    // 3 · Estatus y roles: podio y figuras de distinta altura
    3: () => { let s = `<rect width="400" height="600" fill="#F6F2EA"/>`;
      s += `<g opacity=".4"><rect x="230" y="160" width="60" height="90" fill="#E0A83A"/><rect x="170" y="190" width="60" height="60" fill="#B0BCC6"/><rect x="290" y="210" width="60" height="40" fill="#C99A6B"/></g>`;
      s += pers(260, 120, 1, '#2D5A7B', .5) + pers(200, 150, 1, '#5FA47A', .5) + pers(320, 170, 1, '#C8553D', .5);
      s += `<g opacity=".4" transform="translate(80 480)"><path d="M-20 40h40l-6 -14h-28zM-12 26l-4 -40h32l-4 40z" fill="#2D5A7B"/><circle cy="-24" r="12" fill="#2D5A7B"/><path d="M-10 -38l10 -14l10 14z" fill="#E0A83A"/></g>`;
      return { tint: '#F6F2EA', road: 'street', svg: svg(s) }; },
    // 4 · Normas y cohesión: la oveja negra del rebaño
    4: () => { let s = `<rect width="400" height="600" fill="#EEF5EC"/><path d="M0 330Q200 300 400 340V600H0Z" fill="#DCEBD3"/>`;
      [[220, 150], [300, 130], [260, 200], [340, 200], [190, 230]].forEach(([x, y]) => { s += sheep(x, y, .9, '#FFFFFF', .85); });
      s += sheep(90, 480, 1, '#3B3B3B', .55);
      return { tint: '#EEF5EC', road: 'trail', svg: svg(s) }; },
    // 5 · Comunicar: bocadillos que van y vienen
    5: () => { let s = `<rect width="400" height="600" fill="#F3F0F8"/>`;
      s += bubble(190, 90, 170, 60, '#7A5BA8', .35, 'r') + bubble(230, 190, 140, 50, '#5FA47A', .35, 'l') + bubble(30, 430, 150, 56, '#E0A83A', .35, 'l');
      s += `<g opacity=".5" fill="#fff">${[0, 1, 2].map(i => `<circle cx="${240 + i * 30}" cy="120" r="6"/>`).join('')}</g>`;
      return { tint: '#F3F0F8', road: 'talk', svg: svg(s) }; },
    // 6 · Persuadir: megáfono y dos caminos (central y periférico)
    6: () => { let s = `<rect width="400" height="600" fill="#F7F1EC"/>`;
      s += `<g opacity=".45" transform="translate(260 150) rotate(-15)"><path d="M-60 -16h30l60 -34v100l-60 -34h-30z" fill="#C8553D"/><rect x="-74" y="-16" width="16" height="32" rx="4" fill="#26323A"/><path d="M48 -30q22 30 0 60M64 -46q34 46 0 92" stroke="#C8553D" stroke-width="5" fill="none"/></g>`;
      s += `<g opacity=".35" fill="none" stroke-width="10" stroke-linecap="round"><path d="M40 560C60 500 80 470 130 440" stroke="#5FA47A"/><path d="M40 560C30 520 30 470 50 420" stroke="#E0A83A" stroke-dasharray="4 14"/></g>`;
      return { tint: '#F7F1EC', road: 'ribbon', svg: svg(s) }; },
    // 7 · Agresión, violencia y riesgo: señal de alerta y escudo de protección
    7: () => { let s = `<rect width="400" height="600" fill="#F8EFEC"/>`;
      s += `<g opacity=".45" transform="translate(290 150)"><path d="M0 -70L70 50H-70Z" fill="#E0A83A" stroke="#26323A" stroke-width="5" stroke-linejoin="round"/><path d="M0 -24V12" stroke="#26323A" stroke-width="10" stroke-linecap="round"/><circle cy="32" r="6" fill="#26323A"/></g>`;
      s += `<g opacity=".4" transform="translate(90 480)"><path d="M0 -60L50 -42V0C50 34 24 54 0 64C-24 54 -50 34 -50 0V-42Z" fill="#5FA47A"/><path d="M-20 0l14 14l26 -30" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/></g>`;
      return { tint: '#F8EFEC', road: 'street', svg: svg(s) }; },
    // 8 · Explicar la delincuencia: dos trayectorias que se separan
    8: () => { let s = `<rect width="400" height="600" fill="#EFF1F6"/>`;
      let d = ''; for (let i = 0; i <= 50; i++) { const x = 170 + i * 4.4, y = 250 - 150 * Math.exp(-(((i - 20) / 7) ** 2)); d += (i ? 'L' : 'M') + f(x) + ' ' + f(y); }
      s += `<path d="${d}" stroke="#C8553D" stroke-width="6" fill="none" opacity=".45"/><path d="M170 200C230 190 300 200 390 215" stroke="#2D5A7B" stroke-width="6" fill="none" opacity=".45"/>`;
      s += `<g opacity=".4" transform="translate(90 470)"><ellipse cy="40" rx="44" ry="26" fill="#C8553D"/><ellipse cy="0" rx="30" ry="46" fill="#E37F70"/><circle cy="-52" r="24" fill="#F4C7BD"/><circle cx="-8" cy="-56" r="3.5" fill="#26323A"/><circle cx="8" cy="-56" r="3.5" fill="#26323A"/></g>`;
      return { tint: '#EFF1F6', road: 'ink', svg: svg(s) }; },
    // 9 · El conflicto y su gestión: dos flechas que chocan y un rayo
    9: () => { let s = `<rect width="400" height="600" fill="#F7F0EE"/>`;
      s += `<g opacity=".45"><path d="M170 160h70l-10 -20l40 30l-40 30l10 -20h-70z" fill="#2D5A7B"/><path d="M380 160h-60l10 -20l-40 30l40 30l-10 -20h60z" fill="#C8553D" transform="translate(0 60)"/></g>`;
      s += `<path d="M290 70l-24 50h22l-18 46l46 -62h-24l20 -34z" fill="#E0A83A" opacity=".5"/>`;
      s += `<g opacity=".35" transform="translate(90 480)"><rect x="-50" y="-50" width="100" height="100" rx="8" fill="#fff" stroke="#26323A" stroke-width="4"/><path d="M-50 0H50M0 -50V50" stroke="#26323A" stroke-width="3"/><circle cx="-25" cy="-25" r="9" fill="#C8553D"/><circle cx="25" cy="-25" r="9" fill="#5FA47A"/><circle cx="0" cy="0" r="9" fill="#E0A83A"/><circle cx="-25" cy="25" r="9" fill="#8A949B"/><circle cx="25" cy="25" r="9" fill="#2D5A7B"/></g>`;
      return { tint: '#F7F0EE', road: 'grid', svg: svg(s) }; },
    // 10 · Negociar: un puente entre dos orillas y una tarta que crece
    10: () => { let s = `<rect width="400" height="600" fill="#EDF4F6"/>`;
      s += `<g opacity=".45"><path d="M160 230Q275 120 390 230" stroke="#2D5A7B" stroke-width="10" fill="none"/><path d="M150 230H400" stroke="#2D5A7B" stroke-width="8"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${190 + i * 34} 230V${f(230 - 90 * Math.sin((i + .6) / 6.2 * Math.PI))}" stroke="#2D5A7B" stroke-width="3"/>`).join('')}</g>`;
      s += `<g opacity=".45" transform="translate(90 480)"><circle r="54" fill="#E0A83A"/><path d="M0 0L0 -54A54 54 0 0 1 51 -17Z" fill="#C8553D"/><path d="M0 0L51 -17A54 54 0 0 1 20 50Z" fill="#5FA47A"/><circle r="70" fill="none" stroke="#E0A83A" stroke-width="3" stroke-dasharray="6 8"/></g>`;
      return { tint: '#EDF4F6', road: 'pegs', svg: svg(s) }; },
    // 11 · ¿Por qué ayudamos?: una mano que se tiende y corazones
    11: () => { let s = `<rect width="400" height="600" fill="#FBF0F1"/>`;
      s += heart(280, 140, 3.4, '#E37F8A', .45) + heart(350, 230, 1.6, '#E37F8A', .35) + heart(200, 230, 1.2, '#C8553D', .3);
      s += `<g opacity=".4" transform="translate(90 480) rotate(-20)"><path d="M-50 20h60c14 0 14 -18 0 -18h-30l38 0c14 0 14 -18 0 -18h-38l30 0c14 0 14 -18 0 -18h-40c-30 0 -40 20 -40 40z" fill="#F4C7BD" stroke="#C97C6E" stroke-width="4"/></g>`;
      return { tint: '#FBF0F1', road: 'ribbon', svg: svg(s) }; },
    // 12 · El espectador y el voluntario: una multitud, una persona que da el paso y una cámara
    12: () => { const r = rng(1212); let s = `<rect width="400" height="600" fill="#F0F2F5"/>`;
      s += crowd(r, 9, 190, 120, 180, 120, ['#9AA5AE', '#B0BCC6'], .9, .4) + pers(250, 300, 1.15, '#C8553D', .6);
      s += `<g opacity=".4" transform="translate(80 470)"><rect x="-40" y="-20" width="70" height="40" rx="6" fill="#26323A"/><circle cx="-6" cy="0" r="12" fill="#7FB2D0"/><path d="M30 -10l26 -14v48l-26 -14z" fill="#26323A"/><path d="M-20 20l-14 40" stroke="#26323A" stroke-width="6"/></g>`;
      return { tint: '#F0F2F5', road: 'street', svg: svg(s) }; },
    // 13 · Mayorías y minorías: las líneas de Asch y una figura distinta entre iguales
    13: () => { let s = `<rect width="400" height="600" fill="#F2F4F8"/>`;
      s += `<g opacity=".45" stroke="#26323A" stroke-width="7"><path d="M220 80V200"/><path d="M290 110V200"/><path d="M325 80V200"/><path d="M360 50V200"/></g>`;
      [0, 1, 2, 3].forEach(i => { s += pers(60 + i * 40, 480, .8, '#8A949B', .45); }); s += pers(240, 300, .9, '#5FA47A', .55);
      return { tint: '#F2F4F8', road: 'dots', svg: svg(s) }; },
    // 14 · Autoridad y anonimato: bata con portapapeles y una máscara
    14: () => { let s = `<rect width="400" height="600" fill="#EEF0F4"/>`;
      s += `<g opacity=".45" transform="translate(290 160)"><path d="M-50 90V-10L-20 -40H20L50 -10V90Z" fill="#FFFFFF" stroke="#8A949B" stroke-width="4"/><path d="M-20 -40L0 10L20 -40" stroke="#8A949B" stroke-width="4" fill="none"/><rect x="10" y="20" width="44" height="58" rx="4" fill="#C99A6B"/><rect x="18" y="32" width="28" height="4" fill="#fff"/><rect x="18" y="44" width="28" height="4" fill="#fff"/></g>`;
      s += `<g opacity=".4" transform="translate(90 480)"><path d="M-56 -20C-40 -40 40 -40 56 -20C60 20 30 46 0 46C-30 46 -60 20 -56 -20Z" fill="#7A5BA8"/><ellipse cx="-22" cy="-6" rx="13" ry="8" fill="#EEF0F4"/><ellipse cx="22" cy="-6" rx="13" ry="8" fill="#EEF0F4"/></g>`;
      return { tint: '#EEF0F4', road: 'ink', svg: svg(s) }; },
    // 15 · Decidir en grupo: mesa redonda y una urna
    15: () => { let s = `<rect width="400" height="600" fill="#F4F1EA"/>`;
      s += `<ellipse cx="280" cy="160" rx="80" ry="40" fill="#C99A6B" opacity=".45"/>`;
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; s += `<circle cx="${f(280 + Math.cos(a) * 112)}" cy="${f(160 + Math.sin(a) * 62)}" r="16" fill="${['#2D5A7B', '#C8553D', '#5FA47A'][i % 3]}" opacity=".45"/>`; }
      s += `<g opacity=".45" transform="translate(90 480)"><rect x="-44" y="-30" width="88" height="70" rx="6" fill="#2D5A7B"/><rect x="-24" y="-34" width="48" height="8" rx="2" fill="#26323A"/><path d="M-12 -70h30v40h-30z" fill="#fff" stroke="#8A949B" stroke-width="3"/></g>`;
      return { tint: '#F4F1EA', road: 'crumbs', svg: svg(s) }; },
    // 16 · Rendir en grupo: tirar de la cuerda (Ringelmann) y un ciclista (Triplett)
    16: () => { let s = `<rect width="400" height="600" fill="#EEF6F1"/>`;
      [0, 1, 2, 3].forEach(i => { s += `<g transform="translate(${200 + i * 46} 170) rotate(-18)">${pers(0, 0, .8, '#5FA47A', .5)}</g>`; });
      s += `<path d="M150 190L390 170" stroke="#8A6A50" stroke-width="6" opacity=".5"/>`;
      s += `<g opacity=".4" transform="translate(90 490)" fill="none" stroke="#2D5A7B" stroke-width="6"><circle cx="-34" cy="20" r="24"/><circle cx="34" cy="20" r="24"/><path d="M-34 20L-6 -14H24L34 20M-6 -14L6 20M24 -14L18 -28"/><circle cx="6" cy="-46" r="10" fill="#2D5A7B"/></g>`;
      return { tint: '#EEF6F1', road: 'rope', svg: svg(s) }; }
  };


  // ---------- Memoria ----------
  const card = (x, y, w, h, rot, col, op, lines) => `<g transform="translate(${x} ${y}) rotate(${rot})" opacity="${op || .5}"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="8" fill="#fff" stroke="${col}" stroke-width="4"/>${Array.from({ length: lines || 0 }, (_, i) => `<path d="M${-w / 2 + 14} ${-h / 2 + 18 + i * 14}H${w / 2 - 14 - (i % 2) * 20}" stroke="${col}" stroke-width="4" stroke-linecap="round" opacity=".6"/>`).join('')}</g>`;
  const MM = {
    // 1 · Qué es la memoria: tres cajas (codificar, guardar, recuperar)
    1: () => { let s = `<rect width="400" height="600" fill="#F2F0F8"/>`;
      ['#2D5A7B', '#5FA47A', '#E0A83A'].forEach((c, i) => { s += `<rect x="${200 + i * 62}" y="${110 + i * 40}" width="52" height="52" rx="10" fill="${c}" opacity=".45"/>`; if (i < 2) s += `<path d="M${254 + i * 62} ${136 + i * 40}l14 22" stroke="#26323A" stroke-width="4" opacity=".35"/>`; });
      s += `<g opacity=".4" transform="translate(90 470)"><rect x="-55" y="-50" width="110" height="100" rx="8" fill="#C99A6B"/>${[0, 1, 2].map(i => `<rect x="-45" y="${-40 + i * 30}" width="90" height="24" rx="4" fill="#E8D2B6"/><rect x="-8" y="${-31 + i * 30}" width="16" height="6" rx="3" fill="#8A6A50"/>`).join('')}</g>`;
      return { tint: '#F2F0F8', road: 'dots', svg: svg(s) }; },
    // 2 · Ebbinghaus: curva del olvido y un libro antiguo
    2: () => { let s = paper('#F7F3EA', '#EBE2CF', 40); let d = ''; for (let i = 0; i <= 60; i++) { const x = 180 + i * 3.6, y = 90 + 140 * (1 - (0.21 + 0.79 * Math.exp(-i / 9))); d += (i ? 'L' : 'M') + f(x) + ' ' + f(y); }
      s += `<path d="${d}" stroke="#C8553D" stroke-width="5" fill="none" opacity=".55"/>`;
      s += `<g opacity=".45" transform="translate(90 480) rotate(-8)"><rect x="-56" y="-40" width="112" height="80" rx="6" fill="#8A6A50"/><rect x="-50" y="-34" width="100" height="68" rx="4" fill="#F4EAD8"/><path d="M0 -34V34" stroke="#8A6A50" stroke-width="3"/><path d="M-40 -18h30M-40 -6h28M-40 6h30M10 -18h30M10 -6h26M10 6h30" stroke="#B9A07E" stroke-width="3"/></g>`;
      return { tint: '#F7F3EA', road: 'ruler', svg: svg(s) }; },
    // 3 · Modelos estructurales: almacenes en fila y capas de profundidad
    3: () => { let s = `<rect width="400" height="600" fill="#EEF3F8"/>`;
      [['#E0A83A', 60], ['#2D5A7B', 80], ['#5FA47A', 110]].forEach(([c, w], i) => { s += `<rect x="${170 + [0, 72, 164][i]}" y="${150 - w / 2}" width="${w * .8}" height="${w}" rx="12" fill="${c}" opacity=".45"/>`; });
      s += `<g opacity=".45" transform="translate(90 470)">${['#C9D4DC', '#8FB2CC', '#2D5A7B'].map((c, i) => `<rect x="${-60 + i * 10}" y="${-40 + i * 30}" width="${120 - i * 20}" height="24" rx="6" fill="${c}"/>`).join('')}</g>`;
      return { tint: '#EEF3F8', road: 'grid', svg: svg(s) }; },
    // 4 · Memorias sensoriales y MCP: matriz de letras y siete casillas
    4: () => { let s = `<rect width="400" height="600" fill="#EFF1F6"/>`;
      s += `<g opacity=".5" transform="translate(290 150)"><rect x="-90" y="-70" width="180" height="140" rx="12" fill="#26323A"/>${['KZRA', 'QBTP', 'SGNF'].map((r, i) => `<text x="0" y="${-28 + i * 40}" text-anchor="middle" font-family="monospace" font-weight="700" font-size="30" fill="#fff" letter-spacing="10">${r}</text>`).join('')}</g>`;
      s += `<g opacity=".45">${[0, 1, 2, 3, 4, 5, 6].map(i => `<circle cx="${40 + (i % 4) * 34}" cy="${450 + Math.floor(i / 4) * 34}" r="13" fill="${i < 4 ? '#5FA47A' : '#B0BCC6'}"/>`).join('')}</g>`;
      return { tint: '#EFF1F6', road: 'bars', svg: svg(s) }; },
    // 5 · Memoria de trabajo: bucle que repite y bloc de dibujo
    5: () => { let s = `<rect width="400" height="600" fill="#F2F7F4"/>`;
      s += `<g opacity=".45" fill="none" stroke="#2D5A7B" stroke-width="8" stroke-linecap="round"><path d="M230 160a50 50 0 1 1 100 0a50 50 0 1 1 -100 0"/><path d="M322 128l12 -4l-2 14"/></g><text x="280" y="168" text-anchor="middle" font-size="26" font-weight="700" fill="#2D5A7B" opacity=".5">4·7·2</text>`;
      s += `<g opacity=".45" transform="translate(90 470) rotate(-6)"><rect x="-56" y="-44" width="112" height="88" rx="6" fill="#fff" stroke="#5FA47A" stroke-width="4"/><path d="M-36 20l22 -30l18 18l24 -26" stroke="#5FA47A" stroke-width="5" fill="none"/><circle cx="26" cy="-24" r="8" fill="#E0A83A"/></g>`;
      return { tint: '#F2F7F4', road: 'chain', svg: svg(s) }; },
    // 6 · Sistemas de memoria: un árbol que se ramifica
    6: () => { let s = `<rect width="400" height="600" fill="#F1F6EE"/>`;
      s += `<g opacity=".45" stroke="#8A6A50" stroke-width="10" stroke-linecap="round" fill="none"><path d="M290 270V170M290 170L230 110M290 170L350 110M230 110L205 70M230 110L255 70M350 110L320 70M350 110L380 70"/></g>`;
      [[205, 62, '#2D5A7B'], [255, 62, '#2D5A7B'], [320, 62, '#5FA47A'], [380, 62, '#5FA47A']].forEach(([x, y, c]) => { s += `<circle cx="${x}" cy="${y}" r="22" fill="${c}" opacity=".45"/>`; });
      s += `<g opacity=".4" transform="translate(80 480)"><path d="M-40 30h80l-10 -60h-60z" fill="#C99A6B"/><path d="M-10 -30c0 -20 20 -20 20 0" stroke="#5FA47A" stroke-width="6" fill="none"/></g>`;
      return { tint: '#F1F6EE', road: 'vine', svg: svg(s) }; },
    // 7 · Autobiográfica, flash y prospectiva: álbum, destello y despertador
    7: () => { let s = `<rect width="400" height="600" fill="#FBF3EC"/>`;
      s += card(250, 150, 110, 84, -8, '#C8553D', .45, 0) + card(320, 180, 110, 84, 7, '#2D5A7B', .45, 0) + `<path d="M330 60l-20 44h18l-14 40l40 -54h-20l16 -30z" fill="#E0A83A" opacity=".55"/>`;
      s += `<g opacity=".45" transform="translate(90 480)"><circle r="44" fill="#fff" stroke="#26323A" stroke-width="5"/><path d="M0 0V-26M0 0L18 10" stroke="#26323A" stroke-width="5" stroke-linecap="round"/><circle cx="-34" cy="-40" r="12" fill="#C8553D"/><circle cx="34" cy="-40" r="12" fill="#C8553D"/></g>`;
      return { tint: '#FBF3EC', road: 'ribbon', svg: svg(s) }; },
    // 8 · Codificar bien: tarjetas de autoexamen y un calendario espaciado
    8: () => { let s = `<rect width="400" height="600" fill="#F2F4FB"/>`;
      s += card(260, 140, 130, 84, -10, '#5FA47A', .5, 3) + card(320, 200, 130, 84, 8, '#2D5A7B', .5, 3);
      s += `<g opacity=".45" transform="translate(90 480)"><rect x="-56" y="-46" width="112" height="96" rx="8" fill="#fff" stroke="#7A5BA8" stroke-width="4"/><rect x="-56" y="-46" width="112" height="22" rx="8" fill="#7A5BA8"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<circle cx="${-36 + (i % 3) * 36}" cy="${-6 + Math.floor(i / 3) * 22}" r="7" fill="${[0, 4, 8].includes(i) ? '#5FA47A' : '#DDE3EE'}"/>`).join('')}</g>`;
      return { tint: '#F2F4FB', road: 'pegs', svg: svg(s) }; },
    // 9 · Categorizar: pájaros alrededor de un prototipo
    9: () => { let s = `<rect width="400" height="600" fill="#EEF5F7"/>`;
      s += `<circle cx="290" cy="160" r="100" fill="#DCE7F0" opacity=".7"/><circle cx="290" cy="160" r="50" fill="#C6D7E6" opacity=".8"/>`;
      const bird = (x, y, sc, c) => `<g transform="translate(${x} ${y}) scale(${sc})" opacity=".55"><ellipse rx="18" ry="12" fill="${c}"/><circle cx="16" cy="-8" r="8" fill="${c}"/><path d="M23 -8l8 2l-8 3z" fill="#E0A83A"/><path d="M-16 -2l-12 -6v12z" fill="${c}"/></g>`;
      s += bird(290, 160, 1.4, '#C8553D') + bird(240, 100, 1, '#8A6A50') + bird(350, 220, 1, '#2D5A7B') + bird(220, 240, .9, '#8A949B');
      s += `<g opacity=".45" transform="translate(90 490)"><ellipse rx="22" ry="34" fill="#26323A"/><ellipse cy="6" rx="14" ry="24" fill="#fff"/><path d="M-6 -24l6 6l6 -6" fill="#E0A83A"/></g>`;
      return { tint: '#EEF5F7', road: 'water', svg: svg(s) }; },
    // 10 · Redes semánticas: nodos enlazados
    10: () => { const r = rng(1010); let s = `<rect width="400" height="600" fill="#F3F0F8"/>`; const pts = Array.from({ length: 9 }, () => [f(180 + r() * 200), f(50 + r() * 220)]);
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => { if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 120) s += `<path d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}" stroke="#7A5BA8" stroke-width="3" opacity=".35"/>`; }));
      pts.forEach((a, i) => { s += `<circle cx="${a[0]}" cy="${a[1]}" r="${i ? 12 : 18}" fill="${i ? '#B9A6DA' : '#C8553D'}" opacity=".6"/>`; });
      s += `<g opacity=".4" transform="translate(90 480)">${[0, 1, 2].map(i => `<rect x="-50" y="${-40 + i * 28}" width="100" height="20" rx="6" fill="#7A5BA8" opacity="${1 - i * .25}"/>`).join('')}</g>`;
      return { tint: '#F3F0F8', road: 'spread', svg: svg(s) }; },
    // 11 · Recuperar: lupa y llave
    11: () => { let s = `<rect width="400" height="600" fill="#F1F5F8"/>`;
      s += `<g opacity=".45" transform="translate(290 150)"><circle r="56" fill="#fff" stroke="#2D5A7B" stroke-width="10"/><path d="M40 40l44 44" stroke="#2D5A7B" stroke-width="16" stroke-linecap="round"/><path d="M-26 -10h52M-26 10h40" stroke="#B0BCC6" stroke-width="6" stroke-linecap="round"/></g>`;
      s += `<g opacity=".45" transform="translate(90 480) rotate(-30)"><circle r="22" fill="none" stroke="#E0A83A" stroke-width="10"/><path d="M22 0h60M64 0v14M76 0v10" stroke="#E0A83A" stroke-width="10" stroke-linecap="round"/></g>`;
      return { tint: '#F1F5F8', road: 'street', svg: svg(s) }; },
    // 12 · Contexto y claves: un buceador bajo el agua
    12: () => { let s = `<rect width="400" height="600" fill="#E6F2F7"/><path d="M0 330Q100 310 200 330T400 330V600H0Z" fill="#BFDCEB"/>`;
      s += `<g opacity=".5" transform="translate(290 150)"><ellipse rx="54" ry="34" fill="#26323A"/><ellipse rx="44" ry="24" fill="#8DC5E0"/><path d="M54 -6h30v-60" stroke="#E0A83A" stroke-width="10" fill="none" stroke-linecap="round"/></g>`;
      s += `<g opacity=".5">${[0, 1, 2, 3].map(i => `<circle cx="${70 + i * 12}" cy="${520 - i * 40}" r="${6 + i * 3}" fill="none" stroke="#fff" stroke-width="3"/>`).join('')}</g>`;
      return { tint: '#E6F2F7', road: 'water', svg: svg(s) }; },
    // 13 · Búsqueda y reconstrucción: palabra en la punta de la lengua y una rueda de reconocimiento
    13: () => { let s = `<rect width="400" height="600" fill="#F6F2EA"/>`;
      s += bubble(200, 100, 170, 70, '#E0A83A', .45, 'r') + `<text x="285" y="145" text-anchor="middle" font-size="32" font-weight="700" fill="#fff" opacity=".9">C _ _ _ ?</text>`;
      s += `<g opacity=".4"><rect x="20" y="420" width="190" height="130" fill="#fff"/>${[0, 1, 2, 3].map(i => `<path d="M20 ${440 + i * 30}H210" stroke="#B0BCC6" stroke-width="2"/>`).join('')}</g>` + [0, 1, 2, 3].map(i => pers(45 + i * 45, 520, .75, ['#8A949B', '#2D5A7B', '#8A949B', '#8A949B'][i], .45)).join('');
      return { tint: '#F6F2EA', road: 'talk', svg: svg(s) }; },
    // 14 · Por qué olvidamos: reloj de arena y luna (sueño)
    14: () => { let s = `<rect width="400" height="600" fill="#EEF0F7"/>`;
      s += `<g opacity=".5" transform="translate(290 150)"><path d="M-44 -70h88M-44 70h88" stroke="#8A6A50" stroke-width="10" stroke-linecap="round"/><path d="M-36 -64C-36 -10 36 -10 36 -64ZM-36 64C-36 10 36 10 36 64Z" fill="#F4EAD8" stroke="#8A6A50" stroke-width="4"/><path d="M-20 -50C-20 -24 20 -24 20 -50Z" fill="#E0A83A"/><path d="M-28 62C-28 38 28 38 28 62Z" fill="#E0A83A"/></g>`;
      s += `<g opacity=".45" transform="translate(90 480)"><path d="M10 -40A44 44 0 1 0 40 30A34 34 0 1 1 10 -40Z" fill="#6A75B8"/></g>` + star(150, 440, 9, '#E0A83A', .5) + star(60, 560, 6, '#E0A83A', .5);
      return { tint: '#EEF0F7', road: 'night', svg: svg(s) }; },
    // 15 · Olvido activo: una goma que borra
    15: () => { let s = `<rect width="400" height="600" fill="#F8F0F0"/>`;
      s += card(280, 150, 160, 110, -4, '#8A949B', .45, 5) + `<g opacity=".55" transform="translate(320 200) rotate(-30)"><rect x="-30" y="-16" width="60" height="32" rx="6" fill="#E37F8A"/><rect x="-30" y="-16" width="24" height="32" rx="6" fill="#2D5A7B"/></g>`;
      s += `<g opacity=".45" transform="translate(90 480)"><circle r="40" fill="none" stroke="#C8553D" stroke-width="8"/><path d="M-28 28L28 -28" stroke="#C8553D" stroke-width="8"/></g>`;
      return { tint: '#F8F0F0', road: 'crumbs', svg: svg(s) }; },
    // 16 · Memorias falsas: un puzle al que le falta una pieza y una máscara
    16: () => { let s = `<rect width="400" height="600" fill="#F3F1F6"/>`;
      s += `<g opacity=".5" transform="translate(290 150)">${[[-1, -1, '#2D5A7B'], [0, -1, '#5FA47A'], [-1, 0, '#E0A83A']].map(([a, b, c]) => `<rect x="${a * 70}" y="${b * 70}" width="66" height="66" rx="8" fill="${c}"/>`).join('')}<rect x="2" y="2" width="66" height="66" rx="8" fill="none" stroke="#C8553D" stroke-width="4" stroke-dasharray="8 8"/><text x="35" y="48" text-anchor="middle" font-size="36" font-weight="700" fill="#C8553D">?</text></g>`;
      s += `<g opacity=".4" transform="translate(90 480)"><path d="M-56 -20C-40 -40 40 -40 56 -20C60 20 30 46 0 46C-30 46 -60 20 -56 -20Z" fill="#7A5BA8"/><ellipse cx="-22" cy="-6" rx="13" ry="8" fill="#F3F1F6"/><ellipse cx="22" cy="-6" rx="13" ry="8" fill="#F3F1F6"/></g>`;
      return { tint: '#F3F1F6', road: 'ink', svg: svg(s) }; }
  };

  g.SP_ROADS = {
    rope: d => `<path d="${d}" stroke="#C9A27A" stroke-width="22" fill="none" stroke-linecap="round" opacity=".8"/><path d="${d}" stroke="#8A6A50" stroke-width="22" fill="none" stroke-dasharray="4 12" opacity=".5"/>`,
    talk: d => `<path d="${d}" stroke="#D9CDEB" stroke-width="32" fill="none" stroke-linecap="round" opacity=".7"/><path d="${d}" stroke="#7A5BA8" stroke-width="10" fill="none" stroke-dasharray="0 22" stroke-linecap="round" opacity=".6"/>`,
    beam: d => `<path d="${d}" stroke="#FFE57A" stroke-width="40" fill="none" stroke-linecap="round" opacity=".45"/><path d="${d}" stroke="#FFFDF0" stroke-width="20" fill="none" stroke-linecap="round"/>`,
    prism: d => ['#E85B5B', '#F5A35B', '#F5D95B', '#5BBF6A', '#5B7FE0', '#9A5BE0'].map((c, i) => `<path d="${d}" stroke="${c}" stroke-width="6" fill="none" opacity=".55" transform="translate(${(i - 2.5) * 6} 0)"/>`).join(''),
    wave: d => `<path d="${d}" stroke="#A9D9C0" stroke-width="32" fill="none" stroke-linecap="round" opacity=".55"/><path d="${d}" stroke="#2D5A7B" stroke-width="3" fill="none" stroke-dasharray="2 9" stroke-linecap="round" opacity=".6"/>`,
    ribbon: d => `<path d="${d}" stroke="#E7A0A8" stroke-width="30" fill="none" stroke-linecap="round" opacity=".55"/><path d="${d}" stroke="#FFFFFF" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="1 16" opacity=".9"/>`,
    trail: d => `<path d="${d}" stroke="#C9B48F" stroke-width="30" fill="none" stroke-linecap="round" opacity=".55"/><path d="${d}" stroke="#8A6A50" stroke-width="3" fill="none" stroke-dasharray="3 10" stroke-linecap="round"/>`,
    crumbs: d => `<path d="${d}" stroke="#EAD7C3" stroke-width="30" fill="none" stroke-linecap="round" opacity=".8"/><path d="${d}" stroke="#C9A27A" stroke-width="9" fill="none" stroke-dasharray="0 21" stroke-linecap="round"/>`,
    water: d => `<path d="${d}" stroke="#8DC5E0" stroke-width="36" fill="none" stroke-linecap="round" opacity=".55"/><path d="${d}" stroke="#E8F3FA" stroke-width="22" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#6FA8D0" stroke-width="3" fill="none" stroke-dasharray="20 14"/>`,
    night: d => `<path d="${d}" stroke="#9AA5D8" stroke-width="34" fill="none" stroke-linecap="round" opacity=".35"/><path d="${d}" stroke="#6A75B8" stroke-width="8" fill="none" stroke-dasharray="0 24" stroke-linecap="round" opacity=".6"/>`,
    ecg: d => `<path d="${d}" stroke="#F2C7C2" stroke-width="32" fill="none" stroke-linecap="round" opacity=".7"/><path d="${d}" stroke="#FFFFFF" stroke-width="18" fill="none" stroke-linecap="round"/>`,
    grid: d => `<path d="${d}" stroke="#9FB3C8" stroke-width="38" fill="none" stroke-linecap="round" opacity=".35"/><path d="${d}" stroke="#FFFFFF" stroke-width="28" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#9FB3C8" stroke-width="2" fill="none" stroke-dasharray="2 8"/>`,
    ruler: d => `<path d="${d}" stroke="#E0B84A" stroke-width="34" fill="none" stroke-linecap="round" opacity=".55"/><path d="${d}" stroke="#FBE7A6" stroke-width="26" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#A47A12" stroke-width="10" fill="none" stroke-dasharray="2 10"/>`,
    dots: d => `<path d="${d}" stroke="#C9D7E3" stroke-width="30" fill="none" stroke-linecap="round" opacity=".7"/><path d="${d}" stroke="#C8553D" stroke-width="11" fill="none" stroke-dasharray="0 24" stroke-linecap="round" opacity=".7"/>`,
    bars: d => `<path d="${d}" stroke="#B7C2EB" stroke-width="34" fill="none" stroke-linecap="round" opacity=".7"/><path d="${d}" stroke="#5B6FC0" stroke-width="16" fill="none" stroke-dasharray="10 12" opacity=".55"/>`,
    spread: d => `<path d="${d}" stroke="#2D5A7B" stroke-width="36" fill="none" stroke-linecap="round" opacity=".18"/><path d="${d}" stroke="#2D5A7B" stroke-width="22" fill="none" stroke-linecap="round" opacity=".18"/><path d="${d}" stroke="#FFFFFF" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/>`,
    dice: d => `<path d="${d}" stroke="#FFFFFF" stroke-width="34" fill="none" stroke-linecap="round" opacity=".9"/><path d="${d}" stroke="#5FA47A" stroke-width="34" fill="none" stroke-dasharray="3 31" opacity=".35"/><path d="${d}" stroke="#2D5A7B" stroke-width="9" fill="none" stroke-dasharray="0 17" stroke-linecap="round" opacity=".5"/>`,
    street: d => `<path d="${d}" stroke="#B9AE98" stroke-width="36" fill="none" stroke-linecap="round" opacity=".55"/><path d="${d}" stroke="#EFE8D8" stroke-width="28" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#8A7E66" stroke-width="2.5" fill="none" stroke-dasharray="14 10"/>`,
    pegs: d => `<path d="${d}" stroke="#E7CBB0" stroke-width="32" fill="none" stroke-linecap="round" opacity=".75"/><path d="${d}" stroke="#8A6A50" stroke-width="10" fill="none" stroke-dasharray="0 20" stroke-linecap="round" opacity=".6"/>`,
    ci: d => `<path d="${d}" stroke="#2D5A7B" stroke-width="32" fill="none" stroke-linecap="round" opacity=".22"/><path d="${d}" stroke="#F7F8FC" stroke-width="22" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#C8553D" stroke-width="4" fill="none" stroke-dasharray="18 14" stroke-linecap="round" opacity=".6"/>`,
    ink: d => `<path d="${d}" stroke="#7A6450" stroke-width="30" fill="none" stroke-linecap="round" opacity=".12"/><path d="${d}" stroke="#5B4636" stroke-width="3" fill="none" stroke-dasharray="9 7" stroke-linecap="round" opacity=".65"/>`,
    scan: d => `<path d="${d}" stroke="#7FB2D0" stroke-width="40" fill="none" stroke-linecap="round" opacity=".45"/><path d="${d}" stroke="#F7FBFD" stroke-width="30" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#7FB2D0" stroke-width="30" fill="none" stroke-dasharray="2 12"/>`,
    maze: d => `<path d="${d}" stroke="#6E9C83" stroke-width="42" fill="none" stroke-linejoin="round"/><path d="${d}" stroke="#F4FAF6" stroke-width="32" fill="none" stroke-linejoin="round"/>`,
    vine: d => `<path d="${d}" stroke="#8FB46F" stroke-width="10" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#C9DDB4" stroke-width="3" fill="none" stroke-dasharray="14 22" stroke-linecap="round"/>`,
    vessel: d => `<path d="${d}" stroke="#B5473C" stroke-width="40" fill="none" stroke-linecap="round" opacity=".85"/><path d="${d}" stroke="#E37F70" stroke-width="30" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#F7B6AA" stroke-width="12" fill="none" stroke-dasharray="10 16" stroke-linecap="round"/>`,
    gyrus: d => `<path d="${d}" stroke="#E2A79A" stroke-width="40" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#F7D2C9" stroke-width="28" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#E2A79A" stroke-width="3" fill="none" stroke-dasharray="18 10" stroke-linecap="round"/>`,
    tract: d => `<path d="${d}" stroke="#FFFFFF" stroke-width="36" fill="none" stroke-linecap="round" opacity=".85"/><path d="${d}" stroke="#A9D9C0" stroke-width="2" fill="none" stroke-dasharray="40 6" transform="translate(-8 0)"/><path d="${d}" stroke="#A9D9C0" stroke-width="2" fill="none" stroke-dasharray="30 8" transform="translate(8 0)"/>`,
    spine: d => `<path d="${d}" stroke="#E6D7BF" stroke-width="38" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#BFA582" stroke-width="38" fill="none" stroke-dasharray="4 22"/><path d="${d}" stroke="#F5D278" stroke-width="4" fill="none"/>`,
    nerve: d => `<path d="${d}" stroke="#C99A3A" stroke-width="34" fill="none" stroke-linecap="round" opacity=".7"/><path d="${d}" stroke="#F1D58B" stroke-width="26" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#E2B44A" stroke-width="2" fill="none" transform="translate(-6 0)"/><path d="${d}" stroke="#E2B44A" stroke-width="2" fill="none" transform="translate(6 0)"/>`,
    axon: d => `<path d="${d}" stroke="#5E6FC0" stroke-width="10" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#7E78C8" stroke-width="34" fill="none" stroke-dasharray="44 10"/><path d="${d}" stroke="#E4DFFB" stroke-width="28" fill="none" stroke-dasharray="44 10"/>`,
    channel: d => `<path d="${d}" stroke="#5FB7AC" stroke-width="36" fill="none" stroke-linecap="round" opacity=".5"/><path d="${d}" stroke="#E8F5F4" stroke-width="22" fill="none" stroke-linecap="round"/>`,
    vesicles: d => `<path d="${d}" stroke="#E7CDEB" stroke-width="34" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#B67FC0" stroke-width="12" fill="none" stroke-dasharray="0 26" stroke-linecap="round"/>`,
    chain: d => `<path d="${d}" stroke="#5E9C67" stroke-width="5" fill="none"/><path d="${d}" stroke="#5E9C67" stroke-width="16" fill="none" stroke-dasharray="0 36" stroke-linecap="round"/>`,
    dna: d => `<path d="${d}" stroke="#3F6FA8" stroke-width="5" fill="none" transform="translate(-12 0)"/><path d="${d}" stroke="#D2553C" stroke-width="5" fill="none" transform="translate(12 0)"/><path d="${d}" stroke="#9FB6DA" stroke-width="24" fill="none" stroke-dasharray="3 12"/>`,
    pea: d => `<path d="${d}" stroke="#9DCC72" stroke-width="30" fill="none" stroke-linecap="round" opacity=".6"/><path d="${d}" stroke="#7FB84E" stroke-width="13" fill="none" stroke-dasharray="0 22" stroke-linecap="round"/>`
  };
  // pulso que recorre el camino (axón, osciloscopio…) — se omite con «reducir movimiento»
  g.SP_ROAD_PULSE = { axon: '#F5B81F', channel: '#D2553C', vesicles: '#B67FC0', vessel: '#fff', ci: '#C8553D', spread: '#2D5A7B', ecg: '#C8553D', water: '#fff', beam: '#E0A83A', wave: '#2D5A7B' };

  const cache = {};
  g.SP_SCENES = { 'bases-biologicas': n => cache[n] || (cache[n] = BB[n] ? BB[n]() : null),
    'estadistica-1': n => cache['e' + n] || (cache['e' + n] = ES[n] ? ES[n]() : null),
    'motivacion-emocion': n => cache['m' + n] || (cache['m' + n] = ME[n] ? ME[n]() : null),
    'atencion-percepcion': n => cache['a' + n] || (cache['a' + n] = AP[n] ? AP[n]() : null),
    'interaccion-social': n => cache['i' + n] || (cache['i' + n] = IS[n] ? IS[n]() : null),
    'memoria': n => cache['r' + n] || (cache['r' + n] = MM[n] ? MM[n]() : null) };
})(typeof window !== 'undefined' ? window : globalThis);
