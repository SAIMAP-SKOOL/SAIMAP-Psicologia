// SAIMAP · servidor de suscripciones Premium (Firebase Cloud Functions, región europe-west1).
// La app nunca se activa el Premium a sí misma: envía el comprobante (purchaseToken) de Google Play y aquí
// se verifica con la API de Google Play Developer, se confirma (acknowledge) y se guarda en ent/<uid>.
//   ent/<uid> = { psicologia: { premium, until (ms), product, source: 'play'|'tester', token, updated } }
//   config/testers = { emails: ['correo@ejemplo.com', ...] }  → Premium gratis para testers (todas las apps)
//   compras/<sha256(token)> = { uid, app, product }       → un comprobante solo vale para una cuenta
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { google } = require('googleapis');
const crypto = require('crypto');

initializeApp();
const db = getFirestore();
const REGION = 'europe-west1';
const APPS = { psicologia: { pkg: 'com.saimap.psicologia', products: ['premium_mensual', 'premium_anual'] } };
const FOREVER = Date.UTC(2100, 0, 1);
const publisher = google.androidpublisher({ version: 'v3', auth: new google.auth.GoogleAuth({ scopes: ['https://www.googleapis.com/auth/androidpublisher'] }) });
const sha = s => crypto.createHash('sha256').update(s).digest('hex');

async function isTester(auth) {
  const email = (auth.token.email || '').toLowerCase();
  if (!email || (auth.token.email_verified === false && auth.token.firebase.sign_in_provider === 'password')) return false;
  const snap = await db.doc('config/testers').get();
  return (snap.exists ? snap.data().emails || [] : []).map(e => String(e).toLowerCase().trim()).includes(email);
}

// Consulta la suscripción en Google Play y devuelve { premium, until, product }
async function checkPlay(app, token, product) {
  const { data } = await publisher.purchases.subscriptionsv2.get({ packageName: APPS[app].pkg, token });
  const items = (data.lineItems || []).filter(li => APPS[app].products.includes(li.productId));
  if (!items.length) throw new HttpsError('invalid-argument', 'Producto desconocido.');
  const until = Math.max(...items.map(li => Date.parse(li.expiryTime || 0) || 0));
  const okState = ['SUBSCRIPTION_STATE_ACTIVE', 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD', 'SUBSCRIPTION_STATE_CANCELED'].includes(data.subscriptionState);
  if (data.acknowledgementState === 'ACKNOWLEDGEMENT_STATE_PENDING' && okState) {
    // sin confirmar en 3 días, Google devuelve el dinero y anula la compra
    await publisher.purchases.subscriptions.acknowledge({ packageName: APPS[app].pkg, subscriptionId: items[0].productId, token, requestBody: {} });
  }
  return { premium: okState && until > Date.now(), until, product: items[0].productId };
}

// La app envía el comprobante justo después de comprar o al restaurar compras
// Cuenta de servicio propia, invitada en Play Console (ver compras y suscripciones) y con acceso a Firestore
const SA = 'saimap-premium@saimap-lingo.iam.gserviceaccount.com';
setGlobalOptions({ region: REGION, serviceAccount: SA, maxInstances: 5 });

exports.verificarCompra = onCall({ region: REGION }, async req => {
  if (!req.auth) throw new HttpsError('unauthenticated', 'Inicia sesión para activar Premium.');
  const app = req.data && req.data.app || 'psicologia', token = req.data && req.data.token;
  if (!APPS[app] || typeof token !== 'string' || token.length < 10) throw new HttpsError('invalid-argument', 'Datos de compra no válidos.');
  const ref = db.doc('compras/' + sha(token)), prev = await ref.get();
  if (prev.exists && prev.data().uid !== req.auth.uid) throw new HttpsError('permission-denied', 'Esta suscripción ya está asociada a otra cuenta SAIMAP.');
  const r = await checkPlay(app, token, req.data.product);
  await ref.set({ uid: req.auth.uid, app, product: r.product, updated: Date.now() });
  const ent = { premium: r.premium, until: r.until, product: r.product, source: 'play', token, updated: Date.now() };
  await db.doc('ent/' + req.auth.uid).set({ [app]: ent }, { merge: true });
  return { premium: ent.premium, until: ent.until, product: ent.product, source: 'play' };
});

// Al abrir la app (una vez al día): testers y renovaciones de la suscripción guardada
exports.comprobarPremium = onCall({ region: REGION }, async req => {
  if (!req.auth) throw new HttpsError('unauthenticated', 'Inicia sesión.');
  const app = req.data && req.data.app || 'psicologia'; if (!APPS[app]) throw new HttpsError('invalid-argument', 'App desconocida.');
  const ref = db.doc('ent/' + req.auth.uid), cur = ((await ref.get()).data() || {})[app] || null;
  let ent = cur;
  if (await isTester(req.auth)) ent = { premium: true, until: FOREVER, product: 'tester', source: 'tester', updated: Date.now() };
  else if (cur && cur.source === 'tester') ent = { premium: false, until: 0, product: null, source: 'none', updated: Date.now() };
  else if (cur && cur.token) {
    try { const r = await checkPlay(app, cur.token); ent = Object.assign({}, cur, { premium: r.premium, until: r.until, product: r.product, updated: Date.now() }); }
    catch (e) { ent = cur; }   // si Google no responde, se mantiene lo guardado (con su fecha de caducidad)
  }
  if (ent !== cur) await ref.set({ [app]: ent }, { merge: true });
  return ent ? { premium: !!ent.premium && ent.until > Date.now(), until: ent.until || 0, product: ent.product || null, source: ent.source || 'none' } : { premium: false, until: 0, product: null, source: 'none' };
});

// Al borrar la cuenta SAIMAP se borran también sus datos de suscripción
// La app la llama justo antes de borrar la cuenta: elimina el estado de Premium y los vínculos de compra.
// (La suscripción en sí se cancela en Google Play.)
exports.borrarPremium = onCall({ region: REGION }, async req => {
  if (!req.auth) throw new HttpsError('unauthenticated', 'Inicia sesión.');
  const uid = req.auth.uid;
  await db.doc('ent/' + uid).delete().catch(() => {});
  const q = await db.collection('compras').where('uid', '==', uid).get();
  await Promise.all(q.docs.map(d => d.ref.delete()));
  return { ok: true };
});
