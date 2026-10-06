// Cap Web — cerveau à règles. Fonctions pures : aucun accès à la page.

// Vos réglages : recopiez ici la limite et les deux mots de votre cahier-personnel.json.
// Les valeurs écrites ci-dessous sont celles de l'exemple (240, boussole, refuge), pas les vôtres.
export const LIMITE = 200;

const MOTS = {
  festival: 'Un festival est un rendez-vous festif et culturel.',
  programme: 'La programmation d\'un festival liste les événements.'
};

const listeMots = Object.keys(MOTS).map((mot) => `« ${mot} »`).join(' et ');

const REPONSES = {
  salut: 'Bonjour ! Je suis Cap Web, un assistant à règles. Écrivez « aide » pour voir ce que je sais faire.',
  aide: `Je connais « salut », « aide », « test », et deux mots à moi : ${listeMots}.`,
  test: 'Test bien reçu : mes règles fonctionnent.',
  repli: 'Je ne comprends pas cette demande. Écrivez « aide » pour voir ce que je sais faire.'
};

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Le message ne doit pas être vide.' };
  }
  if (value.length > LIMITE) {
    return { ok: false, error: `Le message doit contenir ${LIMITE} caractères au maximum.` };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = String(message).trim().toLowerCase();
  if (texte === 'salut' || texte === 'bonjour') {
    return REPONSES.salut;
  }
  if (texte === 'aide') {
    return REPONSES.aide;
  }
  if (texte === 'test') {
    return REPONSES.test;
  }
  if (Object.hasOwn(MOTS, texte)) {
    return MOTS[texte];
  }
  // Message inconnu : réponse de repli distincte.
  return REPONSES.repli;
}
