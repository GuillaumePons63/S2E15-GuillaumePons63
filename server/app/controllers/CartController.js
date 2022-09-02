const { Product } = require('../models');
const { Op } = require('sequelize');

const CartController = {
    async index(req, res) {
        // Faire une requête pour aller chercher les produits dont l'id est parmi celle qu'on a en param
        // Nos ids sont un tableau
        // SELECT * FROM `products` WHERE id IN (2, 3)
        // Chercher la méthode de sequelize qui permet de faire des requêtes de type IN
        const { ids } = req.body;

        const products = await Product.findAll({
            where: {
                id: {
                    [Op.in]: ids, // Ne pas utiliser req.body directement
                },
            },
        });
        // Variante
        // const sequelize = getConnexion();
        // const products = await sequelize.query(
        //   'SELECT * FROM products WHERE id IN(:ids)',
        //   {
        //     replacements: { ids: ids },  // Ne pas utiliser req.body directement
        //     type: QueryTypes.SELECT,
        //   }
        // );

        res.status(200).json(products);
    },
};

module.exports = CartController;
