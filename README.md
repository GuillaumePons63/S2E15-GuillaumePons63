# React / Vue ACL

---

## Installation

Après avoir cloné le repo :

-   S'assurer que le port 80 est disponible, sinon modifier le docker compose ou stopper le service apache / nginx sur vos machines

-   `npm i && npm run install`
-   `docker compose up --build`
-   renommer le fichier `/server/.env.example` en `/server/.env` (pas besoin avec docker)

-   Si besoin, il y a aussi les scripts `npm run update` et `npm run audit`.

### BDD

> Se connecter à adminer avec les infos suivantes [http://localhost:8080](http://localhost:8080) quand on utilise docker
>
> user : student , mdp : secret, bdd : shopping
>
> Il y a plusieurs users dans la BDD, avec un mot de passe unique : secret

1. email : admin@oclock.io , mdp : secret (role owner, abilities : all)
2. email : compable@oclock.io , mdp : secret (pas de roles attribué)

> Pour les utilisateurs de l'app, il y a plusieurs rôles et permissions :

-   Le rôle admin peut tout faire => permission : 'all'

-   Le rôle employee peut :

    -   `create-category`
    -   `update-category`
    -   `create-product`
    -   `update-product`

-   Le rôle gestionnaire peut :

    -   `create-category`
    -   `update-category`
    -   `delete-category`
    -   `create-product`
    -   `update-product`
    -   `delete-product`

### Passport

Passport est installé et initialisé dans `server.js`.

Sur la page login, un bouton `login with github` est présent, au clique on se login avec l'API github et ça créé un User dans notre BDD. On ne fait rien avec le token que github renvoie.
la route va jusqu'au `AuthController`, tout ça ne sert qu'à présenter passport et à montrer qu'il faut configurer github pour autoriser une app à se connecter via github.

fichiers concernés : `server.js`, `routes/api/auth.js`, `auth/github.js`, `AuthController@loginWithGithub` (méthode qui ne fait rien d'autre qu'afficher un json  :) )
