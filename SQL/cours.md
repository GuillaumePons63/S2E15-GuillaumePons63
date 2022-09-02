# SQL functions and triggers

---

## Qu'est-ce qu'une trigger ?

Une trigger est une fonctionnalité permettant de d'exécuter du code quand il se passe quelque chose dans la BDD.
On peut par exemple décider de vérifier l'intégrité des données justa avant la création ou la mise à jour d'une ressources.

## Qu'est-ce qu'une fonction :/ (on sait déjà mais on peut réviser) ?

Un fonction encapsulé à l'intérieur d'un bloc nommé et dont le code est exécuté lorsque on en a besoin. Une fonction fait une seule chose (bien de préférence :) )

## Qu'est-ce qu'une procédure stockée ?

Une procédure stockée est une fonction, qui porte le nom de procédure ..

## Qu'est-ce qu'une RULE ?

Un règle est un genre de trigger qui va intervenir automatiquement au moment ou on le souhaite, avant ou après la création ou mise à jour d'une ressource etc etc

## Pourquoi utiliser de telles choses ?

Pour automatiser certaines tâches, ajouter une couche de sécurité, déporter des calculs dans la BDD etc etc.
Il y a des cas ou on peut utiliser des automatismes, et d'autres ou il vaut mieux rester dans le code.
