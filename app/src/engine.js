// SAIMAP Psicología · motor de lecciones (sin DOM: se puede probar con Node)
// Deriva del motor de SAIMAP Lingo, adaptado a ejercicios de contenido:
//   v  "concepto=definición"            → emparejar, concepto→definición, definición→concepto, escribir
//   g  "frase ___|ok|x|x"               → completar hueco
//   tf "afirmación|V"  /  "…|F|por qué" → Verdadero / Falso / No sé
//   q  "pregunta|ok|x|x|explicación"    → test de 3 opciones
//   inc "enunciado|INCORRECTA|ok|ok|exp" → elige la incorrecta
//   seq "título|a>b>c"                  → ordenar
//   cls "título|Cat: a; b|Cat2: c"      → clasificar
(function (g) {
  const LESSON = 14, CHECKPOINT = 16, CHECKPOINT_REVIEW = 5, DAILY = 20, REVIEW_RATIO = 0.25;
  const rnd = n => Math.floor(Math.random() * n);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s).normalize('NFC').toLowerCase().replace(/[.,;:!?¿¡«»"“”()]/g, '').replace(/\s+/g, ' ').trim();
  const bare = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '');

  // ---------- catálogo de ítems de un curso ----------
  function index(C) {
    const ITEMS = [], BY = {};
    C.units.forEach(u => u.mods.forEach((m, mi) => {
      const add = (kind, i, o) => { const it = Object.assign({ k: u.n + '.' + (mi + 1) + '.' + kind + i, kind, u: u.n, m: mi + 1 }, o); ITEMS.push(it); BY[it.k] = it; };
      (m.v || []).forEach((x, i) => { const p = x.indexOf('='); add('v', i, { c: x.slice(0, p).trim(), d: x.slice(p + 1).trim() }); });
      (m.g || []).forEach((x, i) => { const a = x.split('|'); add('g', i, { q: a[0], a: a[1], o: [a[2], a[3]] }); });
      (m.tf || []).forEach((x, i) => { const a = x.split('|'); add('tf', i, { q: a[0], a: a[1] === 'V', why: a[2] || '' }); });
      (m.q || []).forEach((x, i) => { const a = x.split('|'); add('q', i, { q: a[0], a: a[1], o: [a[2], a[3]], why: a[4] || '' }); });
      (m.inc || []).forEach((x, i) => { const a = x.split('|'); add('inc', i, { q: a[0], a: a[1], o: [a[2], a[3]], why: a[4] || '' }); });
      (m.seq || []).forEach((x, i) => { const a = x.split('|'); add('seq', i, { q: a[0], steps: a[1].split('>').map(s => s.trim()) }); });
      (m.cls || []).forEach((x, i) => { const a = x.split('|'); add('cls', i, { q: a[0], cats: a.slice(1).map(c => { const p = c.indexOf(':'); return { name: c.slice(0, p).trim(), items: c.slice(p + 1).split(';').map(s => s.trim()).filter(Boolean) }; }) }); });
    }));
    return { ITEMS, BY };
  }

  const ord = (u, m) => (u - 1) * 5 + m;
  const modId = (u, m) => u + '.' + m;
  const st = (S, k) => (S.it && S.it[k]) || [0, 0, 0];
  const ranked = (arr, score) => arr.map(i => [score(i), i]).sort((a, b) => b[0] - a[0]).map(x => x[1]);
  const weakScore = (S, now) => i => { const [c, w, t] = st(S, i.k); return w * 3 - c + Math.min(t ? (now - t) / 864e5 : 3, 14) * 0.5 + Math.random() * 2; };
  const freshScore = S => i => { const [c, w] = st(S, i.k); return w * 2 - (c + w) + Math.random(); };
  // un concepto se puede escribir si es corto y sin símbolos raros
  const typable = it => it.c.length <= 28 && it.c.split(/\s+/).length <= 3 && !/[\/()=→+&,.:;0-9]/.test(it.c);

  function Engine(C) {
    const { ITEMS, BY } = index(C);
    const pick = (arr, n) => shuffle(arr).slice(0, n);

    function build(item, type, review) {
      const ex = { type, item, review: !!review };
      const sib = ITEMS.filter(i => i.kind === 'v' && i !== item && i.u === item.u);
      const near = (field, n) => {
        const own = sib.filter(i => i.m === item.m), rest = sib.filter(i => i.m !== item.m);
        const out = [], seen = new Set([norm(item[field])]);
        for (const p of shuffle(own).concat(shuffle(rest))) { const t = p[field]; if (!seen.has(norm(t))) { seen.add(norm(t)); out.push(t); if (out.length === n) break; } }
        return out;
      };
      if (type === 'cd') { ex.prompt = item.c; ex.answer = item.d; ex.options = shuffle([item.d].concat(near('d', 3))); }
      else if (type === 'dc') { ex.prompt = item.d; ex.answer = item.c; ex.options = shuffle([item.c].concat(near('c', 3))); }
      else if (type === 'type') { ex.prompt = item.d; ex.answer = item.c; }
      else if (type === 'gap' || type === 'q' || type === 'inc') { ex.answer = item.a; ex.options = shuffle([item.a].concat(item.o)); }
      else if (type === 'tf') { ex.answer = item.a ? 'V' : 'F'; }
      else if (type === 'seq') { ex.answer = item.steps; ex.bank = shuffle(item.steps); if (ex.bank.join() === item.steps.join()) ex.bank = ex.bank.slice(1).concat(ex.bank[0]); }
      else if (type === 'cls') { ex.cards = shuffle([].concat(...item.cats.map(c => c.items.map(t => ({ t, cat: c.name }))))); ex.cats = item.cats.map(c => c.name); }
      return ex;
    }
    function typeFor(item, S) {
      if (item.kind === 'g') return 'gap';
      if (item.kind !== 'v') return item.kind;
      const seen = st(S, item.k)[0] + st(S, item.k)[1];
      if (!seen) return 'cd';
      const t = ['cd', 'dc', 'dc']; if (typable(item) && seen >= 2) t.push('type', 'type');
      return t[rnd(t.length)];
    }
    // reparte una lista de ejercicios para que no salgan dos del mismo tipo seguidos si se puede
    function spread(ex) {
      const out = [], pool = ex.slice();
      while (pool.length) {
        const last = out.length ? out[out.length - 1].type : '';
        let i = pool.findIndex(e => e.type !== last);
        if (i < 0) i = 0;
        out.push(pool.splice(i, 1)[0]);
      }
      return out;
    }

    function gen(S, u, m) {
      const now = Date.now(), checkpoint = m === 5;
      const own = ITEMS.filter(i => i.u === u && (checkpoint || i.m === m));
      const before = ITEMS.filter(i => checkpoint ? i.u < u : ord(i.u, i.m) < ord(u, m) && i.u >= u - 2);
      const total = checkpoint ? CHECKPOINT : LESSON;
      const nRev = before.length ? (checkpoint ? CHECKPOINT_REVIEW : Math.round(total * REVIEW_RATIO)) : 0;
      const score = checkpoint ? weakScore(S, now) : freshScore(S);
      const by = k => ranked(own.filter(i => i.kind === k), score);
      const V = by('v'), G = by('g'), TF = by('tf'), Q = by('q'), INC = by('inc'), SEQ = by('seq'), CLS = by('cls');
      const ex = [];
      // un ejercicio «grande» por lección: ordenar o clasificar si el módulo los tiene
      const big = checkpoint ? SEQ.concat(CLS).slice(0, 2) : (SEQ.length && (!CLS.length || Math.random() < 0.5) ? SEQ.slice(0, 1) : CLS.slice(0, 1));
      big.forEach(i => ex.push(build(i, i.kind)));
      const plan = checkpoint ? { v: 4, g: 2, tf: 2, q: 2, inc: 1 } : { v: 2, g: 2, tf: 2, q: 2, inc: 1 };
      let left = total - nRev - big.length - 1;   // -1: el emparejamiento
      const take = (arr, n) => arr.slice(0, Math.max(0, Math.min(n, left))).forEach(i => { ex.push(build(i, typeFor(i, S))); left--; });
      take(V, plan.v); take(Q, plan.q); take(INC, plan.inc); take(TF, plan.tf); take(G, plan.g);
      const rest = ranked([].concat(V.slice(plan.v), G.slice(plan.g), TF.slice(plan.tf), Q.slice(plan.q)), score);
      while (left > 0 && rest.length) { const i = rest.shift(); ex.push(build(i, typeFor(i, S))); left--; }
      let out = spread(shuffle(ex));
      if (V.length >= 4) out.unshift({ type: 'match', items: shuffle(V).slice(0, 5), review: false });
      if (nRev) {
        ranked(before.filter(i => i.kind !== 'seq' && i.kind !== 'cls'), weakScore(S, now)).slice(0, nRev)
          .forEach(i => out.splice(Math.min(out.length, 2 + rnd(Math.max(1, out.length - 1))), 0, build(i, typeFor(i, S), true)));
      }
      return out;
    }
    const seenItems = S => ITEMS.filter(i => S.it[i.k] || S.done[modId(i.u, i.m)]);
    const dailyReady = S => seenItems(S).filter(i => i.kind !== 'seq' && i.kind !== 'cls').length >= 12;
    function genDaily(S) {
      const now = Date.now(), pool = seenItems(S).filter(i => i.kind !== 'seq' && i.kind !== 'cls');
      if (pool.length < 12) return [];
      const units = [...new Set(pool.map(i => i.u))];
      const groups = units.map(u => ranked(pool.filter(i => i.u === u), weakScore(S, now)));
      const picks = [];
      while (picks.length < DAILY && groups.some(x => x.length)) for (const gq of shuffle(groups)) { if (gq.length && picks.length < DAILY) picks.push(gq.shift()); }
      return spread(shuffle(picks).map(i => build(i, typeFor(i, S), true)));
    }
    const weakItems = S => ITEMS.filter(i => { const [c, w] = st(S, i.k); return w > 0 && w >= c; });
    const genWeak = S => spread(ranked(weakItems(S), weakScore(S, Date.now())).slice(0, 12).map(i => build(i, i.kind === 'seq' || i.kind === 'cls' ? i.kind : typeFor(i, S), true)));
    const modInfo = (u, m) => m <= 4 ? C.units[u - 1].mods[m - 1] : { t: 'Repaso', tip: '' };
    function unlocked(S, u, m, free) { if (free || ord(u, m) === 1) return true; const p = ord(u, m) - 1; return !!S.done[modId(Math.floor((p - 1) / 5) + 1, ((p - 1) % 5) + 1)]; }
    function nextUp(S) { for (const u of C.units) for (let m = 1; m <= 5; m++) if (!S.done[modId(u.n, m)]) return { u: u.n, m }; return null; }
    function progress(S) { const tot = C.units.length * 5; let d = 0; for (const u of C.units) for (let m = 1; m <= 5; m++) if (S.done[modId(u.n, m)]) d++; return { done: d, total: tot, pct: Math.round(100 * d / tot) }; }
    return { C, ITEMS, BY, gen, genDaily, genWeak, dailyReady, weakItems, seenItems, build, typeFor, modInfo, unlocked, nextUp, progress, ord, modId };
  }

  // ---------- corrección ----------
  function checkType(ex, text) { return norm(text) === norm(ex.answer) ? 'ok' : bare(text) === bare(ex.answer) ? 'accent' : 'no'; }
  function checkSeq(ex, chosen) { return chosen.join('\u0001') === ex.answer.join('\u0001'); }

  // ---------- progreso por curso y global ----------
  const dayStr = d => { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const blankCourse = () => ({ v: 1, done: {}, it: {}, dr: '', t: 0 });
  const blankGlobal = () => ({ v: 1, xp: 0, dx: 0, day: '', streak: 0, days: [], goal: 30, route: '', t: 0 });
  // Fusión del progreso de dos dispositivos (local y nube): nunca se pierde nada, se queda con lo mejor de cada uno.
  function mergeCourse(a, b) {
    if (!b || typeof b !== 'object') return a;
    const out = blankCourse();
    out.dr = (a.dr || '') > (b.dr || '') ? a.dr || '' : b.dr || ''; out.t = Math.max(a.t || 0, b.t || 0);
    for (const src of [a.done || {}, b.done || {}]) for (const k in src) { const x = out.done[k], y = src[k] || {}; out.done[k] = x ? { s: Math.max(x.s, y.s || 0), n: Math.max(x.n, y.n || 0) } : { s: y.s || 0, n: y.n || 0 }; }
    for (const src of [a.it || {}, b.it || {}]) for (const k in src) { const y = src[k]; if (!Array.isArray(y)) continue; const x = out.it[k]; out.it[k] = x ? [Math.max(x[0], y[0] || 0), Math.max(x[1], y[1] || 0), Math.max(x[2], y[2] || 0)] : [y[0] || 0, y[1] || 0, y[2] || 0]; }
    return out;
  }
  function mergeGlobal(a, b) {
    if (!b || typeof b !== 'object') return a;
    const out = blankGlobal(), late = (a.day || '') >= (b.day || '') ? a : b, newer = (a.t || 0) >= (b.t || 0) ? a : b;
    out.xp = Math.max(a.xp || 0, b.xp || 0);
    out.days = [...new Set([].concat(a.days || [], b.days || []))].sort().slice(-400);
    out.day = late.day || ''; out.streak = late.streak || 0; out.dx = late.dx || 0; out.t = Math.max(a.t || 0, b.t || 0);
    out.goal = newer.goal || a.goal || b.goal || 30; out.route = a.route || b.route || '';
    return out;
  }
  function record(S, k, ok) { const a = S.it[k] ? S.it[k].slice() : [0, 0, 0]; a[ok ? 0 : 1]++; a[2] = Date.now(); S.it[k] = a; }
  function finish(G, S, id, accuracy, daily) {
    const stars = accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : 1, gain = daily ? 20 + (stars === 3 ? 10 : 0) : 10 + (stars === 3 ? 5 : 0);
    const today = dayStr(), y = new Date(); y.setDate(y.getDate() - 1);
    if (daily) S.dr = today;
    if (id) { const d = S.done[id] || { s: 0, n: 0 }; S.done[id] = { s: Math.max(d.s, stars), n: d.n + 1 }; }
    G.xp += gain; G.dx = (G.day === today ? G.dx || 0 : 0) + gain;
    if (G.day !== today) { G.streak = G.day === dayStr(y) ? G.streak + 1 : 1; G.day = today; }
    G.days = (G.days || []).filter(d => d !== today).concat(today).slice(-400);
    G.t = S.t = Date.now();
    return { stars, gain };
  }
  const todayXp = G => G.day === dayStr() ? G.dx || 0 : 0;
  function liveStreak(G) { const y = new Date(); y.setDate(y.getDate() - 1); return G.day === dayStr() || G.day === dayStr(y) ? G.streak : 0; }

  g.PsicoEngine = { Engine, index, checkType, checkSeq, norm, bare, shuffle, dayStr, blankCourse, blankGlobal, mergeCourse, mergeGlobal, record, finish, todayXp, liveStreak, typable };
})(typeof window !== 'undefined' ? window : globalThis);
