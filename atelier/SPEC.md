# Spécification fonctionnelle · Cap Web

1. **Quand** on envoie un message de plus de 200 caractères, **Cap Web** refuse l'envoi et affiche un message d'erreur mentionnant la limite de 200 caractères.  
   *Vérifié par* : test « accepte 200 caractères et refuse 201 » dans `tests/contrat/brain.contrat.test.js`.

2. **Quand** on tente d'envoyer un message vide ou composé exclusivement d'espaces, **Cap Web** bloque la soumission et affiche « Le message ne doit pas être vide. ».  
   *Vérifié par* : test « refuse le vide et les espaces seuls » dans `tests/contrat/brain.contrat.test.js`.

3. **Quand** on envoie le mot-clé « festival » (quelle que soit la casse ou la présence d'espaces autour), **Cap Web** répond « Un festival est un rendez-vous festif et culturel. ».  
   *Vérifié par* : test « reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour » dans `tests/contrat/brain.contrat.test.js`.

4. **Quand** on envoie le mot-clé « programme » (quelle que soit la casse ou la présence d'espaces autour), **Cap Web** répond « La programmation d'un festival liste les événements. ».  
   *Vérifié par* : test « reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour » dans `tests/contrat/brain.contrat.test.js`.

5. **Quand** on envoie une phrase inconnue ne correspondant à aucune règle, **Cap Web** répond par un message de repli distinct sans bloquer l'interface.  
   *Vérifié par* : test « répond à une phrase inconnue par un repli distinct » dans `tests/contrat/brain.contrat.test.js`.
