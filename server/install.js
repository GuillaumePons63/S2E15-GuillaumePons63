const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

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
            // const resolved = await Promise.race(promises);
            // console.log(resolved);
            const roles = [
                process.env.ADMIN,
                process.env.EMPLOYEE,
                process.env.CUSTOMER,
            ];

            for (const role of roles) {
                await Role.create({ name: role });
            }
            res.send(
                `<p>Installation réussie vous pouvez effacer les fichiers concernés</p>`
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
