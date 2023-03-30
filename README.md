# React / Vue ACL

---

## Installation

Après avoir cloné le repo :

-   S'assurer que le port 80 est disponible, sinon modifier le docker compose ou stopper le service apache / nginx sur vos machines

-   `npm i && npm run install`
-   `docker compose up --build`
-   renommer le fichier `/server/.env.example` en `/server/.env` (pas besoin avec docker )

-   Si besoin, il y a aussi les scripts `npm run update` et `npm run audit`.

### BDD

> user : student , mdp : secret, bdd : shopping (adminer)

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
Sur la page login, un bouton `login with github` est présent, il nous guide jusqu'au `AuthController`, ça servira juste à présenter passport et à montrer qu'il faut configurer github pour autorisé une app à se connecter via github.
