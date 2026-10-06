# Carnet de bord · J2

Binôme : b12 · Membres : Nicolas Contreras Tibocha & Yaël Coëffier · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion            | Membre 1 : Nicolas | Membre 2 : Yaël |
| ----------------- | ------------------ | --------------- |
| Structure HTML    | à l'aise           | à l'aise        |
| CSS et responsive | à l'aise           | à l'aise        |
| JavaScript        | à renforcer        | à l'aise        |
| DOM et événements | à renforcer        | à l'aise        |
| Git               | à l'aise           | à renforcer     |
| Tests             | à l'aise           | à renforcer     |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 (Nicolas) : Mieux interpréter le JavaScript et approfondir la pratique du TDD et des tests d'industrialisation.

Membre 2 (Yaël) : Mieux comprendre comment travailler avec des tests.

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge                                                                                       | Cause trouvée (une phrase)                                                                                                                                                                                          | Fichier    | Message du commit `fix:`                                                   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| ✖ refuse le vide et les espaces seuls                                                            | `validateMessage` ne rejette que `raw === ''` avant `trim()`, donc `' '` et `' \n\t '` passent et reviennent comme `{ ok: true, value: '' }`, ce qui fait échouer `assert.equal(r.ok, false)` par `true !== false`. | `brain.js` | fix: refuse les messages vides ou composés d’espaces                       |
| ✖ accepte 380 caractères et refuse 381                                                           | `value.length` ne vérifiait pas avec LIMITE mais une valeur codée en dur.                                                                                                                                           | `brain.js` | fix: vérifie le value avec LIMITE                                          |
| ✖ mesure la longueur après avoir retiré les espaces                                              | `value.length` ne vérifiait pas avec LIMITE                                                                                                                                                                         | `brain.js` | fix: vérifie le value avec LIMITE                                          |
| ✖ ignore la casse et les espaces autour                                                          | `replyTo` passe en minuscules mais n'enlève pas les espaces via `trim()`.                                                                                                                                           | `brain.js` | fix: replyTo ignore la casse et les espaces — couvre aussi le test suivant |
| ✖ reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour | Pas de `trim()` donc " CERISE " n'est pas reconnue.                                                                                                                                                                 | `brain.js` | fix: replyTo ignore la casse et les espaces — couvre aussi le test suivant |
| ✖ répond à une phrase inconnue par un repli distinct                                             | L'inconnu renvoie la réponse d'`aide`, pas un repli à part.                                                                                                                                                         | `brain.js` | fix: repli distinct pour les phrases inconnues                             |
| ✖ view.js affiche du texte et ne décide pas des réponses                                         | `view.js` injecte du HTML avec `innerHTML` au lieu d'utiliser un affichage texte sécurisé.                                                                                                                          | `view.js`  | fix: view.js affiche en textContent sans innerHTML                         |

Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.

Il a proposé d'installer des bibliothèques externes et d'assouplir les tests de contrat, ce que nous avons refusé car le contrat de test est intouchable et le projet doit rester en Vanilla JS pur.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

`liste` devient `listeMots` : le mot `liste` était trop vague, alors que `listeMots` explicite clairement la chaîne de caractères formatée listant les deux mots-clés du cahier personnel.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
| ------- | -------------------- | -------------- | ------------------------------------------ |
| 1       |                      |                |                                            |
| 2       |                      |                |                                            |
| 3       |                      |                |                                            |

## R3 · Premiers tests unitaires

| À remplir                                   | Votre réponse                                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Fonction tirée                              | Synonyme (`synonyme(message)`)                                                                        |
| Le rouge vu (message exact)                 | SyntaxError: The requested module '../public/js/brain.js' does not provide an export named 'synonyme' |
| Identifiant du commit `test:`               | `8d4e64d380c8aaf89f9a92f0d89d490a410becfd`                                                            |
| Identifiant du commit `feat:`               | `87071640713965a7cca5e7a6c09b81c611dbfe74`                                                            |
| Casse volontaire : la ligne changée         | Dans `synonyme`, remplacement de `return texte;` par `return '';`                                     |
| Casse volontaire : le test devenu rouge     | ✖ C4 : autre message revient en minuscules sans espaces autour                                        |
| Pour aller plus loin : la deuxième fonction |                                                                                                       |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

- `C1 : coucou, hello, bonsoir donnent salut`
- `C2 : help et sos donnent aide`
- `C3 : casse et espaces autour ne comptent pas`
- `C4 : autre message revient en minuscules sans espaces autour`
- `C5 : ce qui n’est pas du texte donne "" sans erreur`

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne   | Raison                                                                           |
| ----- | ----------------- | ------------------ | -------------------------------------------------------------------------------- |
| 1     | accepté           | `brain.js l:18`    | la réponse à « merci » respecte casse et espaces autour, sans casser le contrat. |
| 2     | refusé            | `brain.js l:36-42` | La normalisation ne retire plus les espaces autour, donc le contrat est cassé.   |
| 3     | refusé            | `view.js l:3-13`   | L’affichage injecte du HTML, ce qui viole la règle sur l’affichage texte.        |

Pour aller plus loin : le patch que vous avez corrigé, et ce que vous avez changé.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?

Nicolas : Je comprends un peu mieux le fonctionnement de JavaScript et des évènements. L'intérêt des tests est encore plus compréhensible et je pense l'adopter pour mes futurs projets.

Yaël : Je pense que je comprends un peu mieux les tests et certaines commandes git, mais je pense que c'est encore assez flou, bien que je vois tout à fait leur intérêt
