// Cap Web — câblage : lire le formulaire, mettre à jour l'historique, demander l'affichage.
import { LIMITE, replyTo, validateMessage } from './brain.js';
import { renderMessages } from './view.js';

const formulaire = document.querySelector('#chat-form');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const statut = document.querySelector('#status');
const effacer = document.querySelector('#effacer');
const versionElt = document.querySelector('#version');
const limiteElt = document.querySelector('#limite');
const compteurElt = document.querySelector('#compteur');

const CLE = 'capweb.historique';
const historique = [];

function sauvegarder() {
  localStorage.setItem(CLE, JSON.stringify(historique));
}

function charger() {
  const brut = localStorage.getItem(CLE);
  if (brut === null) {
    return;
  }
  try {
    const donnees = JSON.parse(brut);
    if (Array.isArray(donnees)) {
      historique.push(...donnees);
    }
  } catch {
    statut.textContent = 'Conversation précédente illisible : nouvelle conversation.';
  }
}

async function demanderConseil() {
  try {
    const reponse = await fetch('/api/conseil', { headers: { accept: 'application/json' } });
    if (!reponse.ok) {
      throw new Error(`HTTP ${reponse.status}`);
    }
    const donnees = await reponse.json();
    if (donnees && typeof donnees.conseil === 'string') {
      return donnees.conseil;
    }
    return 'Le serveur ne répond pas : conseil indisponible.';
  } catch {
    return 'Le serveur ne répond pas : conseil indisponible.';
  }
}

formulaire.addEventListener('submit', async (event) => {
  event.preventDefault();
  const controle = validateMessage(champ.value);
  if (!controle.ok) {
    statut.textContent = controle.error;
    champ.focus();
    return;
  }
  const reponse = controle.value.toLowerCase() === 'conseil'
    ? await demanderConseil()
    : replyTo(controle.value);
  historique.push({ role: 'user', text: controle.value });
  historique.push({ role: 'assistant', text: reponse });
  sauvegarder();
  renderMessages(historique, liste);
  champ.value = '';
  statut.textContent = '';
  compteurElt.textContent = `0 / ${LIMITE}`;
  champ.focus();
});

effacer.addEventListener('click', () => {
  if (!confirm('Effacer toute la conversation ?')) {
    return;
  }
  historique.length = 0;
  localStorage.removeItem(CLE);
  renderMessages(historique, liste);
  statut.textContent = 'Conversation effacée.';
});

// La limite vient de brain.js : un seul endroit à modifier.
champ.maxLength = LIMITE;
limiteElt.textContent = String(LIMITE);
compteurElt.textContent = `0 / ${LIMITE}`;

charger();
renderMessages(historique, liste);

async function afficherVersion() {
  try {
    const reponse = await fetch('/version.json', { headers: { accept: 'application/json' } });
    if (!reponse.ok) {
      throw new Error(`HTTP ${reponse.status}`);
    }
    const donnees = await reponse.json();
    if (versionElt && typeof donnees.version === 'string') {
      versionElt.textContent = `version ${donnees.version}`;
    } else if (versionElt) {
      versionElt.textContent = 'version indisponible';
    }
  } catch {
    if (versionElt) {
      versionElt.textContent = 'version indisponible';
    }
  }
}

afficherVersion();

champ.addEventListener('input', () => {
  const longueur = champ.value.length;
  compteurElt.textContent = `${longueur} / ${LIMITE}`;
});

// Raccourci clavier : Ctrl+Entrée pour envoyer le formulaire.
champ.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.ctrlKey) {
    event.preventDefault();
    formulaire.requestSubmit();
  }
});