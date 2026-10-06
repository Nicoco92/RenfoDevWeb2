# Conventions de Cap Web

## Nommage

- Une fonction porte un verbe qui décrit ce qu’elle fait, par exemple `validateMessage` ou `replyTo`.
- Une constante porte un nom explicite et en majuscules si elle représente une valeur fixe ou un paramètre global, par exemple `LIMITE`.
- Un fichier porte un nom court et explicite, selon son rôle : `brain.js` pour la logique métier, `app.js` pour le branchement de l’interface et `view.js` pour l’affichage.
- Un message de commit suit le format `type: description`, par exemple `docs: README`, `fix: limite`, ou `feat: réponse assistante`.

## Interdits

- Ne JAMAIS modifier `tests/contrat/` ni `cahier-personnel.json` 
- Ne pas écrire de HTML avec `innerHTML` : le texte doit rester du texte.
- Ne pas mettre la logique métier dans `view.js` ; les règles de décision doivent rester dans `brain.js`.
- Ne jamais modifier de fichier sans accord au préalable.