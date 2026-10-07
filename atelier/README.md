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

## Arborescence du projet

```text
atelier/
├── browser/                    # Tests de bout en bout (Playwright)
│   ├── smoke.spec.js           # Tests de vérification du déploiement
│   └── contrat.spec.js         # Tests d'accessibilité et de rendu
├── public/                     # Fichiers statiques servis au navigateur (frontend)
│   ├── index.html              # Structure HTML du chatbot
│   ├── styles.css              # Styles CSS (responsive, mobile, dark mode)
│   └── js/                     # Modules JavaScript côté client
│       ├── app.js              # Câblage des événements, historique et API
│       ├── brain.js            # Règles métier, validation et réponses
│       └── view.js             # Rendu sécurisé des messages dans le DOM
├── scripts/                    # Scripts d'outillage et d'automatisation
│   ├── build-static.js         # Construction du site statique
│   ├── check-dependances.js    # Contrôle des dépendances du projet
│   └── check-tests.js          # Vérification de l'intégrité des tests
├── server/                     # Serveur HTTP Node.js (backend)
│   ├── app.js                  # Application HTTP, routes statiques et /api/conseil
│   └── start.js                # Point d'entrée pour démarrer le serveur
├── tests/                      # Tests unitaires et d'intégration (node --test)
│   ├── conseil.test.js         # Test de la route /api/conseil
│   ├── server.test.js          # Tests des routes HTTP du serveur
│   ├── synonyme.test.js        # Tests de traitement des synonymes
│   ├── contrat/                # Tests de contrat d'architecture
│   └── harnais/                # Tests de validation du harnais
├── cahier-personnel.json       # Configuration personnalisée (limite, mots)
├── eslint.config.js            # Configuration du linter ESLint
├── package.json                # Dépendances et scripts du projet
└── README.md                   # Documentation du projet
```

## Les 3 modules de `public/js`

### app.js

branche l’interface avec les événements du formulaire, la conversation, le stockage local, la remise à zéro et la limite de caractères.

### brain.js

contient les règles métier de Cap Web : validation du message, réponses autorisées, mots-clés et limite maximale.

### view.js

affiche les messages dans la page HTML en distinguant les messages de l’utilisateur et ceux de Cap Web.

## Route API : `/api/conseil`

Cap Web expose une route API HTTP permettant d'obtenir des conseils de développement web.

- **Méthode** : `GET` (ou `HEAD`)
- **URL** : `/api/conseil` (ex. `http://127.0.0.1:3000/api/conseil`)
- **Format de réponse** : `application/json; charset=utf-8`
- **Code HTTP** : `200 OK`

### Exemple de réponse JSON

```json
{
  "conseil": "Testez régulièrement votre code avec npm test."
}
```

Le conseil est choisi aléatoirement parmi un ensemble de conseils prédéfinis. Dans le chatbot, lorsque vous envoyez le message « conseil », Cap Web appelle cette API de manière asynchrone pour afficher la réponse. En cas d'indisponibilité du serveur, un message d'erreur clair est affiché sans bloquer l'interface.
