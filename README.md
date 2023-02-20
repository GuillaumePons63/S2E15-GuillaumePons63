# React / Vue ACL

---

## Installation

Après avoir cloné le repo :

-   `npm i && npm run install`
-   renommer le fichier `/server/.env.example` en `/server/.env`
-   `docker compose up --build`

### BDD
> user : student , mdp : secret, bdd : shopping
> 
> Avec adminer, créer un role admin, une ability create-category et une ability create-product, faire les associations sur role_user et ability_role
> 
> Il faut register un utilisateur avant.

### Changer les URL dans les configs

-   pour profiter du proxy
-   Mettre en place un PubSub avec Redis
