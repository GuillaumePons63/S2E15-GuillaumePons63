const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const connexion = require('./app/models/getConnexion')();

const Ability = require('./app/models/Ability');
const AbilityRole = require('./app/models/AbilityRole');
const RoleUser = require('./app/models/RoleUser');
const Product = require('./app/models/Product');
const Category = require('./app/models/Category');
const Order = require('./app/models/Order');
const CategoryProduct = require('./app/models/CategoryProduct');
const Role = require('./app/models/Role');
const User = require('./app/models/User');
const Coupon = require('./app/models/Coupon');
const OrderItem = require('./app/models/OrderItem');
const VatCategory = require('./app/models/VatCategory');

router.get('/install', async (req, res) => {
    try {
        const sequelize = new Sequelize(process.env.DB_ADMIN_URL, {
            dialect: process.env.DB_ENV,
        });

        if (process.env.NODE_ENV !== 'test') {
            await sequelize.query(
                `DROP DATABASE IF EXISTS ${process.env.DB_NAME}`
            );
        }

        if (process.env.NODE_ENV === 'test') {
            await sequelize.query(
                `DROP DATABASE IF EXISTS ${process.env.TEST_DB_NAME}`
            );
        }

        const users = await sequelize.query('SELECT * FROM pg_catalog.pg_user');

        // Recherche de l'utilisateur process.env.DB_USERNAME
        const user = users[0].find(
            user => user.usename === process.env.DB_USERNAME
        );
        // Si pas user, on le créé
        if (!user) {
            await sequelize.query(
                `CREATE ROLE ${process.env.DB_USERNAME} WITH LOGIN PASSWORD '${process.env.DB_PASSWD}';`
            );
        }

        if (process.env.NODE_ENV !== 'test') {
            await sequelize.query(
                `CREATE DATABASE ${process.env.DB_NAME} OWNER ${process.env.DB_USERNAME}`
            );
        }

        if (process.env.NODE_ENV === 'test') {
            await sequelize.query(
                `CREATE DATABASE ${process.env.TEST_DB_NAME} OWNER ${process.env.DB_USERNAME}`
            );
        }
        // Fermeture de la connexion admin
        await sequelize.close();

        try {
            await User.sync();
            await Ability.sync();
            await Category.sync();
            await VatCategory.sync();
            await Order.sync();
            await Product.sync();
            await Role.sync();
            await AbilityRole.sync();
            await RoleUser.sync();
            await CategoryProduct.sync();
            await Coupon.sync();
            await OrderItem.sync();

            await User.create({
                name: 'admin',
                email: 'admin@oclock.io',
                password:
                    '$2y$10$J3W4Qy6Pj0XYmFg/.y/qGuQUfBo.OfVB697xQh0.mCNoYwZgcXvtG', // secret
            });
            await User.create({
                name: 'gontrand',
                email: 'gontrand@oclock.io',
                password:
                    '$2y$10$J3W4Qy6Pj0XYmFg/.y/qGuQUfBo.OfVB697xQh0.mCNoYwZgcXvtG', // secret
            });

            // - ajouter des produits avec TVA
            // - ajouter des différentes TVA (France)

            let vatCategories = [
                { name: 'Standard rate', vat_rate: 20.0 },
                { name: 'Intermediate rate', vat_rate: 10.0 },
                { name: 'Reduced rate', vat_rate: 5.5 },
                { name: 'Super-reduced rate', vat_rate: 2.1 },
            ];

            for (const c of vatCategories) {
                await VatCategory.create(c);
            }

            const [standardVat, interVat, reducedVat, superreducedVat] =
                await VatCategory.findAll();

            let categories = [
                { name: 'Restauration' },
                { name: 'Bâtiment' },
                { name: 'Pharmacie' },
                { name: 'Jeux Vidéos' },
            ];

            for (const c of categories) {
                await Category.create(c);
            }

            let products = [
                {
                    title: 'PS5',
                    description: 'Last generation game console',
                    vat_category_id: standardVat.id,
                    price_ht: 49999,
                    image: 'https://picsum.photos/seed/1/300/200',
                },
                {
                    title: 'Equipement travaux',
                    description: 'Un outil pour les pros du bâtiment',
                    vat_category_id: interVat.id,
                    price_ht: 4999,
                    image: 'https://picsum.photos/seed/2/300/200',
                },
                {
                    title: 'Un repas',
                    description: 'Un repas à emporter, sans boisson',
                    vat_category_id: reducedVat.id,
                    price_ht: 1499,
                    image: 'https://picsum.photos/seed/3/300/200',
                },
                {
                    title: 'Un médicament',
                    description: 'Un médicament qui soigne des maladies',
                    vat_category_id: superreducedVat.id,
                    price_ht: 4575,
                    image: 'https://picsum.photos/seed/4/300/200',
                },
            ];

            for (const p of products) {
                await Product.create(p);
            }

            const [restoCat, batimentCat, pharmacieCat, gamesCat] =
                await Category.findAll();

            const [videoGame, travaux, repas, medicine] =
                await Product.findAll();

            const promises = [
                videoGame.addCategory(gamesCat),
                travaux.addCategory(batimentCat),
                repas.addCategory(restoCat),
                medicine.addCategory(pharmacieCat),
            ];

            await Promise.all(promises);

            const roles = [
                process.env.ADMIN,
                process.env.EMPLOYEE,
                process.env.MANAGER,
                process.env.CUSTOMER,
            ];

            for (const role of roles) {
                await Role.create({ name: role });
            }

            res.send(
                `<p>Installation réussie, vous pouvez effacer les fichiers concernés</p>`
            );
        } catch (e) {
            throw e;
        }

        // On peut en profiter pour seeder des données, ou le faire avec sequelize-cli
    } catch (e) {
        res.status(500).send(
            `
            <pre>
                <div>
                    <div>${e.message}</div>
                    <div>${e.stack}</div>
                </div>
            </pre>
            `
        );
    }
    res.end();
});

module.exports = router;
