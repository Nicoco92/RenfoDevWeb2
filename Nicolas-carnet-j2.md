# Carnet de bord individuel · Jour 2 (Cap Web)
Nicolas Contreras Tibocha
## Mon positionnement

| Notion | Positionnement | Commentaire / Perception |
|---|---|---|
| **Structure HTML** | À l'aise | Maîtrise des balises sémantiques (`<main>`, `<form>`, `<ul>`, repères accessibles). |
| **CSS et responsive** | À l'aise | Flexbox, grid, media queries, prévention des débordements sur petits écrans (360 px). |
| **JavaScript** | À l'aise | Fonctions pures, manipulation de tableaux/objets, gestion des flux asynchrones. |
| **DOM et événements** | À l'aise | Délégation d'événements (`closest`), manipulation sécurisée via `textContent` sans `innerHTML`. |
| **Git** | À l'aise | Commits atomiques sémantiques (`fix:`, `feat:`, `refactor:`), tags, gestion de branches et rebase. |
| **Tests** | À renforcer | Automatisation TDD, lecture fine des rapports d'assertion Node.js / Playwright, blindage de contrats. |

### objectif personnel pour J2 et J3 :
> Approfondir la pratique du Test-Driven Development (TDD) et l'industrialisation du code. Savoir écrire des spécifications claires et des tests automatisés robustes pour guider le développement sans jamais subir les régressions.

---

## R1 · Les tests automatisés
Les tests rouges du départ, et ce que vous en avez fait :
| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| `refuse le vide et les espaces seuls` | La condition `raw === ''` laissait passer les espaces seuls sans vérifier `value === ''` après le trim. | `public/js/brain.js` | `fix: refuser les espaces seuls et respecter LIMITE dans validateMessage` |
| `accepte 200 caractères et refuse 201` | La longueur maximale était comparée à 280 codé en dur au lieu d'utiliser la constante `LIMITE` (200). | `public/js/brain.js` | `fix: refuser les espaces seuls et respecter LIMITE dans validateMessage` |
| `ignore la casse et les espaces autour` | Le texte d'entrée n'était pas nettoyé avec `.trim()`, empêchant la correspondance des mots entourés d'espaces. | `public/js/brain.js` | `fix: normaliser les espaces et repli distinct dans replyTo` |
| `reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour` | Même cause : sans `.trim()`, les mots avec espaces comme `' FESTIVAL '` ne correspondaient pas aux clés de `MOTS`. | `public/js/brain.js` | `fix: normaliser les espaces et repli distinct dans replyTo` |
| `répond à une phrase inconnue par un repli distinct` | Le cas inconnu retournait `REPONSES.aide` au lieu d'une phrase de repli dédiée et distincte de celle d'aide. | `public/js/brain.js` | `fix: normaliser les espaces et repli distinct dans replyTo` |
| `view.js affiche du texte et ne décide pas des réponses` | La fonction générait le balisage avec `innerHTML`, violant l'obligation d'un affichage textuel sécurisé via `textContent`. | `public/js/view.js` | `fix: affichage sécurisé sans innerHTML avec textContent dans view.js` |



Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.
L'agent proposait d'installer une bibliothèque tierce pour nettoyer le HTML et de modifier le test du contrat pour assouplir la règle. J'ai refusé car le contrat de test est strictement intouchable (c'est la spécification du client) et l'architecture doit rester en pur Vanilla JS sans dépendance superflue.
Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.
- **Nom renommé** : `liste` devient `listeMots` (commit `7783b55 refactor: liste devient listeMots`).
- **Pourquoi le nouveau est plus clair** : Le mot `liste` était trop générique et ambigu ; `listeMots` exprime clairement qu'il s'agit de la chaîne textuelle formatée listant les deux mots-clés propres au cahier personnel.
