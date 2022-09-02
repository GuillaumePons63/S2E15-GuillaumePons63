# Un serveur express et un client react

---

## Installation

### Pré-requis

-   Avoir installé `redis-stack` sur la machine [instructions ici](../01-code-examples/README.md)

### Les commandes

-   Faire ces commandes : `npm i && npm run install && npm run watch`

    -   Ces commandes installent `concurrently`, les dépendances du serveur et du client, et enfin démarrent les deux services.

-   <https://www.tutorialspoint.com/python_data_structure/python_hash_table.htm>
-   <https://www.tutorialspoint.com/list-data-type-in-python>

## PubSub

<https://reactjs.org/docs/context.html>

## TODO :

-1. Doc détaillée de node-redis : <https://redis.js.org/documentation/client/modules.html>

0. Lire `server/db/redis.conf` : toutes les options y sont expliquées.

1. Modifier le panier pour le faire fonctionner avec un SORTED SET, le score représentera la quantité de produit ajouté au panier. Attention, il faudra mettre le composant Cart de React a jour (facultatif)

2. [FACULTATIF] (Pour ceux qui ne prennent pas de pause) Avec la fonctionnalité PUBSUB de REDIS, envoyer une notification au client quand un produit a été ajouté au panier.
   (HINT : Vous aurez besoin de Server Sent Events) : Il faudra rechercher les headers corrects à envoyer de puis le serveur pour maintenir la connexion ouverte.

Le client :

```bash
src
├── App.css
├── App.js
├── App.test.js
├── assets
│   └── img
│       ├── 404.gif
│       ├── kenshiro.jpg
│       ├── macbook-pro.png
│       └── triangles.svg
├── components
│   ├── common
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   └── NavLinks.jsx
│   ├── Notification.jsx
│   └── pages
│       ├── dashboard
│       │   ├── AdminPanelRoute.jsx
│       │   ├── AdminPanelRoutes.jsx
│       │   ├── common
│       │   │   ├── Header.jsx
│       │   │   ├── Nav.jsx
│       │   │   └── QuickActions.jsx
│       │   ├── CreateProduct.jsx
│       │   ├── CreateCategory.jsx
│       │   ├── dashboard.css
│       │   └── Dashboard.jsx
│       ├── Featured.jsx
│       ├── Landing.jsx
│       ├── NotFound.jsx
│       └── Products.jsx
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── setupTests.js
└── utils
    ├── config.js
    ├── helpers.jsx
    └── quillModule.js
```

Le serveur :

```bash
├── app
│   ├── controllers
│   │   ├── appController.js
│   │   ├── CartController.js
│   │   ├── CategoriesController.js
│   │   └── ProductsController.js
│   └── routers.js
├── db
│   ├── redis.conf
│   └── redisClient.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```
