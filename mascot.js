// SAIMAP Psicología · la mascota: Psique, una mariposa.
// En griego, psyché significa a la vez «alma» y «mariposa»: de ahí la Ψ de la psicología.
// Estudiante curiosa: flequillo rebelde, gafas redondas subidas a la cabeza, colgante con la Ψ
// y alas de cola de golondrina con ocelos. psique(mood): 'happy' | 'wow' | 'sad' | 'calm' | 'wink'
(function (g) {
  let uid = 0;
  function psique(mood) {
    const id = 'ps' + (++uid), k = '#16212B';
    const wow = mood === 'wow', sad = mood === 'sad', calm = mood === 'calm', wink = mood === 'wink';
    const lift = wow ? -5 : sad ? 6 : 0;
    // borde de ala festoneado con puntos blancos (como en las mariposas reales)
    const rim = (pts, r) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/>`).join('');
    const upper = `
      <path d="M55 57C49 43 39 27 25 20C13 14 3 21 4 33C5 46 14 56 24 62C33 67 45 70 53 65z" fill="${k}"/>
      <path d="M53 58C47 46 38 32 26 25C16 20 9 25 9.5 34C10 44 18 53 27 58C35 62 45 65 51 62z" fill="url(#${id}u)"/>
      <path d="M50 58C44 50 36 42 26 37M49 61C41 58 33 54 24 49M51 55C46 45 40 37 32 30" fill="none" stroke="#123F59" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="22" cy="36" r="8.5" fill="#FFE7A3" stroke="${k}" stroke-width="1.6"/><circle cx="22" cy="36" r="5.2" fill="#D2553C"/><circle cx="22" cy="36" r="2.4" fill="${k}"/><circle cx="20.4" cy="34.2" r="1.3" fill="#fff"/>
      ${rim([[8, 30], [7.5, 38], [10.5, 46], [16, 53]], 1.4)}`;
    const lower = `
      <path d="M55 65C47 68 37 75 32 85C28 94 30 103 37 104C40 112 43 118 46 119C46 113 46 108 48 104C54 99 57 88 58 78z" fill="${k}"/>
      <path d="M54 67C47 70 39 77 35.5 86C32.5 94 34 100 39 100.5C42 107 44 111 45 112C45 107 45.5 103 47 100C52 95 55 86 56 78z" fill="url(#${id}l)"/>
      <path d="M53 72C47 78 42 86 40 95" fill="none" stroke="#A33E29" stroke-opacity=".4" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="43" cy="92" r="4" fill="#FFE7A3" stroke="${k}" stroke-width="1.3"/><circle cx="43" cy="92" r="1.8" fill="#1D5C7E"/>
      ${rim([[36.5, 92], [38.5, 98.5]], 1.1)}`;
    const wing = s => `<g class="pw ${s}" style="transform-origin:60px 64px">${s === 'r' ? `<g transform="translate(120 0) scale(-1 1)">${upper}${lower}</g>` : upper + lower}</g>`;
    // bracitos: saludan, se levantan de sorpresa o cuelgan de pena
    const arm = s => {
      const x0 = 60 + s * 6.5, y0 = 72;
      const end = wow ? [60 + s * 17, 60] : sad ? [60 + s * 11, 86] : calm ? [60 + s * 9, 80] : s > 0 ? [77, 63] : [52, 81];
      return `<path d="M${x0} ${y0}Q${60 + s * 14} ${(y0 + end[1]) / 2 + 2} ${end[0]} ${end[1]}" fill="none" stroke="${k}" stroke-width="2.2" stroke-linecap="round"/><circle cx="${end[0]}" cy="${end[1]}" r="2.6" fill="#FFF1DE" stroke="${k}" stroke-width="1.6"/>`;
    };
    const eye = s => {
      const x = 60 + s * 7.6, y = 50;
      if (calm || (wink && s > 0)) return `<path d="M${x - 5} ${y}q5 4.6 10 0" fill="none" stroke="${k}" stroke-width="2.4" stroke-linecap="round"/>`;
      const ry = wow ? 6.4 : sad ? 4.6 : 5.6, rx = wow ? 5.2 : 4.6, cy = sad ? y + 1 : y;
      return `<ellipse cx="${x}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${k}"/>
        <ellipse cx="${x}" cy="${cy + 1.4}" rx="${rx - 1.6}" ry="${ry - 2}" fill="#3A78B8"/><ellipse cx="${x}" cy="${cy + 1.6}" rx="${rx - 2.9}" ry="${ry - 3.3}" fill="${k}"/>
        <circle cx="${x + 1.7}" cy="${cy - 2.2}" r="1.9" fill="#fff"/><circle cx="${x - 1.6}" cy="${cy + 2.6}" r=".9" fill="#fff"/>
        <path d="M${x + s * 3.6} ${cy - ry + 1.4}l${s * 2.4} -1.8M${x + s * 4.8} ${cy - ry + 3}l${s * 2.6} -.6" stroke="${k}" stroke-width="1.4" stroke-linecap="round"/>` +
        (sad ? `<path d="M${x - 4.5} ${s > 0 ? 41.6 : 43.6}L${x + 4.5} ${s > 0 ? 43.6 : 41.6}" stroke="${k}" stroke-width="1.8" stroke-linecap="round"/>` : '');
    };
    const mouth = wow ? `<ellipse cx="60" cy="61" rx="3.2" ry="3.8" fill="${k}"/><ellipse cx="60" cy="62.6" rx="2" ry="1.5" fill="#F08A73"/>`
      : sad ? `<path d="M55.5 63q4.5-3.8 9 0" fill="none" stroke="${k}" stroke-width="2.2" stroke-linecap="round"/>`
        : calm ? `<path d="M55.5 59.5q4.5 4 9 0" fill="none" stroke="${k}" stroke-width="2.2" stroke-linecap="round"/>`
          : `<path d="M54 58.5q6 7.5 12 0z" fill="${k}" stroke="${k}" stroke-width="1.6" stroke-linejoin="round"/><path d="M56.5 62.2q3.5 2.4 7 0q-3.5-2.6-7 0z" fill="#F08A73"/><path d="M57.2 58.6h5.6" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>`;
    // antenas con la punta en espiral
    const antenna = s => `<path d="M${60 + s * 6} 34C${60 + s * 9} 24 ${60 + s * 16} 15 ${60 + s * 22} 12C${60 + s * 28} 9 ${60 + s * 31} 14 ${60 + s * 27} 17C${60 + s * 24} 19 ${60 + s * 22} 15 ${60 + s * 25} 14" fill="none" stroke="${k}" stroke-width="2.1" stroke-linecap="round"/><circle cx="${60 + s * 25}" cy="14" r="2.3" fill="#F08A73"/>`;
    const sparkle = wow ? `<path d="M104 4l1.8 4.4 4.4 1.8-4.4 1.8-1.8 4.4-1.8-4.4-4.4-1.8 4.4-1.8z" fill="#F5B81F"/><path d="M14 2l1.4 3.4 3.4 1.4-3.4 1.4L14 11.6l-1.4-3.4-3.4-1.4 3.4-1.4z" fill="#F5B81F"/>` : '';
    const tear = sad ? `<path d="M68.5 56q2.2 3.6 0 5q-2.2-1.4 0-5z" fill="#7CC6EA"/>` : '';
    return `<svg class="psique" viewBox="0 0 120 124" aria-hidden="true"><defs>
      <radialGradient id="${id}u" cx=".35" cy=".45" r=".8"><stop offset="0" stop-color="#9AD6F2"/><stop offset=".5" stop-color="#3E93C2"/><stop offset="1" stop-color="#1D5C7E"/></radialGradient>
      <linearGradient id="${id}l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F9B9A6"/><stop offset=".6" stop-color="#E06E54"/><stop offset="1" stop-color="#C24A33"/></linearGradient>
      <radialGradient id="${id}h" cx=".42" cy=".35" r=".75"><stop offset="0" stop-color="#FFFDF8"/><stop offset=".75" stop-color="#FFF1DE"/><stop offset="1" stop-color="#F0D3B2"/></radialGradient>
      <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#22374A"/><stop offset=".5" stop-color="#3F5870"/><stop offset="1" stop-color="#22374A"/></linearGradient></defs>
      <ellipse cx="60" cy="120" rx="22" ry="3.4" fill="#0B1730" opacity=".12"/>
      ${sparkle}
      <g transform="translate(0 ${lift / 2})">${wing('l')}${wing('r')}</g>
      <path d="M60 66C55 66 53.5 75 53.5 86C53.5 98 56.5 108 60 108C63.5 108 66.5 98 66.5 86C66.5 75 65 66 60 66z" fill="url(#${id}b)" stroke="${k}" stroke-width="2"/>
      <path d="M54.5 80h11M54 89h12M55 98h10" stroke="#F5D278" stroke-width="2.2" stroke-linecap="round" opacity=".75"/>
      ${arm(-1)}${arm(1)}
      <path d="M48 66q3 4 6 1q3 4 6 0q3 4 6 0q3 3 6-1q-1 4-6 5q-6 2-12 0q-5-1-6-5z" fill="#fff" stroke="${k}" stroke-width="1.4" stroke-linejoin="round"/>
      <circle cx="60" cy="74" r="4.6" fill="#F5B81F" stroke="#9A6E05" stroke-width="1.2"/><text x="60" y="76.6" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="7" fill="#5A3E00">Ψ</text>
      ${antenna(-1)}${antenna(1)}
      <circle cx="60" cy="50" r="19" fill="url(#${id}h)" stroke="${k}" stroke-width="2"/>
      <path d="M41.5 47C40 34 50 27.5 60 27.5C70.5 27.5 80 34 78.5 46C76 41 72 38.5 68 40C66.5 35.5 61 34.5 58 39C55 35.5 48 38 45.5 43C44 44 42.5 45.5 41.5 47z" fill="#24384A"/><path d="M50 33.5q5-3 10-2.5" stroke="#4E6A84" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M58 30C56 25 58 21 62 20C61 23 62 26 64 28" fill="#24384A" stroke="#24384A" stroke-width="1" stroke-linejoin="round"/>
      <g fill="none" stroke="${k}" stroke-width="1.7"><circle cx="52.5" cy="31.5" r="4.6" fill="#DCEFF8" fill-opacity=".85"/><circle cx="67.5" cy="31.5" r="4.6" fill="#DCEFF8" fill-opacity=".85"/><path d="M57.1 31.5h5.8M47.9 32l-3 2.5M72.1 32l3 2.5"/></g>
      <path d="M50.6 29.6l1.6-1.4M65.6 29.6l1.6-1.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="48.5" cy="57" rx="3.6" ry="2.3" fill="#F08A73" opacity=".5"/><ellipse cx="71.5" cy="57" rx="3.6" ry="2.3" fill="#F08A73" opacity=".5"/>
      ${eye(-1)}${eye(1)}${mouth}${tear}
    </svg>`;
  }
  g.psique = psique;
})(typeof window !== 'undefined' ? window : globalThis);
