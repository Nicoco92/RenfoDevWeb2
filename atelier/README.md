# Cap Web

Cap Web est un assistant de chat en JavaScript. Il accepte des messages simples, refuse les messages trop longs, et garde l’historique de la conversation dans le navigateur.

## Installation et lancement

Dans un terminal PowerShell :

```powershell
cd atelier
npm ci
Copy-Item cahier-personnel.exemple.json cahier-personnel.json
```

Ensuite, ouvrez le fichier cahier-personnel.json et remplacez les valeurs d’exemple par votre limite et vos deux mots.

Lancez ensuite l’application :

```powershell
npm start
```

Puis ouvrez `http://127.0.0.1:3000` dans le navigateur. Ctrl+C l’arrête.

Pour lancer les tests, dans le même terminal :

```powershell
npm test
```

## Les 3 modules de `public/js`

### app.js
branche l’interface avec les événements du formulaire, la conversation, le stockage local, la remise à zéro et la limite de caractères.

### brain.js
contient les règles métier de Cap Web : validation du message, réponses autorisées, mots-clés et limite maximale.

### view.js
affiche les messages dans la page HTML en distinguant les messages de l’utilisateur et ceux de Cap Web.