const { Category } = require('../models');

const CategoriesController = {
    async index(req, res) {
        const categories = await Category.findAll({
            attributes: { exclude: ['created_at', 'updated_at'] },
        });

        res.status(200).json(categories);
    },

    async store(req, res) {
        const { name } = req.body;

        // INSERT INTO categories (name) VALUES name;
        const category = await Category.create({
            name: name,
        });

        res.status(200).json({ category, msg: 'Catégorie créée' });
    },
};

module.exports = CategoriesController;
