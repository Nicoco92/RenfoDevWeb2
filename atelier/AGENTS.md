# Conventions et règles pour les agents · Cap Web

Ce document définit les conventions d'architecture et les interdictions strictes que tout agent IA ou développeur doit impérativement respecter sur ce projet.

## 1. Conventions de nommage

- **Fonctions** : Toujours préfixées par un verbe d'action en anglais ou en français clair décrivant fidèlement son rôle (ex. `validateMessage`, `replyTo`, `renderMessages`).
- **Constantes** : Écrites en `MAJUSCULES_SNAKE_CASE` pour les configurations globales invariables (ex. `LIMITE`, `CLE`), ou en `camelCase` explicite pour les dictionnaires locaux (ex. `listeMots`, `REPONSES`).
- **Fichiers** : Tout en minuscules, séparés par des tirets ou points selon le rôle (ex. `brain.js`, `brain.contrat.test.js`).
- **Messages de commit Git** : Commits sémantiques obligatoires avec préfixe standardisé (`fix:`, `feat:`, `docs:`, `test:`, `refactor:`) suivi d'une description concise à l'impératif sans point final.

## 2. Interdictions formelles (Ne jamais enfreindre)

1. **Interdiction de modifier les tests de contrat** : Ne modifie jamais les fichiers situés dans `tests/contrat/` ni `browser/contrat.spec.js`. Le contrat est la spécification immuable du client.
2. **Interdiction de modifier les réglages personnels** : Ne modifie jamais `cahier-personnel.json`. Si une incohérence survient, alerte l'utilisateur sans changer le fichier.
3. **Interdiction d'injecter du HTML brut (`innerHTML`)** : Ne jamais utiliser `innerHTML`, `outerHTML` ou `insertAdjacentHTML` dans `view.js` ou `app.js`. L'affichage de contenu dynamique se fait exclusivement via `textContent` et des nœuds DOM natifs pour prévenir les failles XSS.
4. **Interdiction d'ajouter des dépendances sans accord** : Ne jamais installer de bibliothèque npm externe hors de `dependances-autorisees.json`. Le projet doit fonctionner en Vanilla JavaScript pur.
