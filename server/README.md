# React E-commerce example

---

Technologies utilisées pour ce projet :
React, Redux, Express, MySQL, Nodejs

La librairie utilisée pour se connecter a la BDD est sequelize

## Pour installer le projet :

1. Ouvrez un terminal et executer la commande `git clone https://github.com/Kenshirosan/reactshop.git` a l'endroit ou vous voulez sur votre ordinateur (Desktop par exemple).
2. Renommer `.env.example` en `.env`.
3. Mettre les informations de connection a la BDD dans le fichier .env (`DB_NAME`, `DB_HOST`, `DB_PASSWD`, `DB_USERNAME`, `DB_ENV`).
4. Dans le terminal, faire `cd /chemin/du/projet`.
5. Exécuter `npm run init`.
6. Exécuter `npm run watch`.
7. Aller sur l'url `http://localhost:5000/install`, ce script installe un base de données avec un admin : login: `admin@admin.com` pwd: `admin`, une catégorie, un produit et 3 roles utilisateurs.
8. Le site est installé, vous pouvez aller sur `http://localhost:3000`
