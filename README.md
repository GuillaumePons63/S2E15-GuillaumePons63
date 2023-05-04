# Enoncé Challenge : fonctions postgreSQL

---

En France, il y a plusieurs taux de TVA, il faudra donc faire une fonction SQL qui calcule le total TTC d'une commande en se basant sur le taux de TVA de chaque produit. Cette fonction devra retourner un tableau le montant HT, le total de TVA, ainsi que le montant TTC d'une commande.

Ensuite, il faudra ajouter une méthode `calculatePrice` sur le modèle `Order` qui fera appel à cette méthode.

Pour tester, il faudra utiliser le controller `OrdersController`  et simuler une commande.

Voici un schéma des tables qui vous serviront pour cet exercice
![schéma](./BDD-schema.png)

- La table `order_items` contient les produits liées à une commande
- La table `products` contient une référence à un taux de TVA, le taux de TVA d'un produit peut ainsi être enregistré dans  une ligne de `order_items`

## Installation

Après avoir cloné le repo :

-   Renommer le fichier `/server/.env.example` en `/server/.env`
-   Installer la BDD
-   `npm i && npm run install && nm run watch`
-   Si besoin, il y a aussi les scripts `npm run update` et `npm run audit`.

### BDD

> Se connecter à adminer avec les infos suivantes [http://localhost:8080](http://localhost:8080)
>
> user : student , mdp : secret, bdd : shopping
>
> Il y a plusieurs users dans la BDD, avec un mot de passe unique : secret
> 
> Si besoin, la route `/install` reset la BDD.
