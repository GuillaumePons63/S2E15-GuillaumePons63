# React / Express ACL

---

## Installation

 Après avoir cloné le repo : 
  
 - `npm i && npm run install`
 - renommer le fichier `/server/.env.example` en `/server/.env`
 - `docker compose up --build`

Sur le port 3000 : le client react, sur le port 5000 : le server express, sur le port 8080 : adminer.

## Fonctionnalités

- Register, Login, Logout, système de permissions implémenter sur le server.
- Ajout de catégories et de produits, ajout de produit au panier, coupon de réduction, mise à jour des quantités dans le panier.
- Coder devant eux la méthode `can(action)` sur le modèle `User`, ainsi que les associations entre `User`, `RoleUser`, `Role`, `Ability` et `AbilityRole`.

## Challenge J1

Demander aux apprenants de faire un middleware qui déterminera si l'utilisateur est autorisé à faire telle ou telle action.

## Challenge J2

Demander aux apprenants de coder une fonction et une trigger postgres qui calculeront le prix TTC d'une commande.

Ou

Mettre en place un PubSub avec `pg_notify`.
