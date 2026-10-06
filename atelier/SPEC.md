1. Quand on envoie une valeur qui n’est pas du texte (undefined, null, 42, {} ou []), Cap Web refuse et renvoie un message d’erreur. Vérifié par : test « refuse ce qui n’est pas du texte, avec un message d’erreur ».

2. Quand on envoie un message vide ou composé uniquement d’espaces, Cap Web refuse et renvoie un message d’erreur. Vérifié par : test « refuse le vide et les espaces seuls ».

3. Quand on envoie un message avec des espaces autour, Cap Web l’accepte et retire ces espaces avant de le traiter. Vérifié par : test « accepte un message et retire les espaces autour ».

4. Quand un message fait exactement la limite autorisée, Cap Web l’accepte ; quand il fait une lettre de plus, il le refuse. Vérifié par : test « accepte X caractères et refuse X + 1 » et le test « mesure la longueur après avoir retiré les espaces ».

5. Quand on envoie « bonjour », « salut », « aide » ou un mot personnalisé, Cap Web reconnaît le bon mot sans tenir compte de la casse ni des espaces, et donne une réponse propre à chaque mot reconnu. Vérifié par : les tests « ignore la casse et les espaces autour », « donne la même réponse à « bonjour » et à « salut » », « donne une réponse distincte à salut, aide et test » et « reconnaît les deux mots du cahier personnel... ».
