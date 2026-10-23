const fs = require('fs'), path = require('path');
require('../src/engine.js');
const dir = path.join(__dirname, '../../cursos/bases-biologicas');
const window = {}; global.window = window;
eval(fs.readFileSync(path.join(dir, 'course.js'), 'utf8'));
for (const f of fs.readdirSync(dir).filter(f => f.startsWith('data')).sort()) eval(fs.readFileSync(path.join(dir, f), 'utf8'));
const P = globalThis.PsicoEngine, E = P.Engine(window.COURSE);
let S = P.blankCourse(), G = P.blankGlobal(), bad = 0, n = 0, types = {};
for (const u of window.COURSE.units) for (let m = 1; m <= 5; m++) for (let r = 0; r < 4; r++) {
  const ex = E.gen(S, u.n, m); n++;
  if (ex.length < 12) { bad++; console.log('corta', u.n, m, ex.length); }
  for (const e of ex) {
    types[e.type] = (types[e.type] || 0) + 1;
    if (e.options) { if (new Set(e.options).size !== e.options.length || !e.options.includes(e.answer)) { bad++; console.log('opciones', e.type, e.item.k, e.options); } }
    if (e.type === 'match' && e.items.length < 4) { bad++; }
    if (e.type === 'seq' && e.bank.join() === e.answer.join()) { bad++; console.log('seq sin barajar'); }
    // simula respuesta
    if (e.item) P.record(S, e.item.k, Math.random() < 0.8); else e.items.forEach(i => P.record(S, i.k, true));
  }
  P.finish(G, S, E.modId(u.n, m), 0.85, false);
}
console.log('lecciones', n, 'tipos', types, 'problemas', bad);
console.log('repaso diario', E.dailyReady(S), E.genDaily(S).length, 'flojos', E.genWeak(S).length, 'progreso', E.progress(S));
console.log('escribir:', P.checkType({ answer: 'Glía radial' }, 'glia radial'), P.checkType({ answer: 'Glía radial' }, 'Glía radial'));
