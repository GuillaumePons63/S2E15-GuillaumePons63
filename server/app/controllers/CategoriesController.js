const { Category } = require('../models');

const CategoriesController = {
    async index(req, res) {
        const categories = await CategoriesController.getCategories();

        res.status(200).json(categories);
    },

    async store(req, res) {
        const { name } = req.body;

        // INSERT INTO categories (name) VALUES name;
        await Category.create({
            name: name,
        });

        const categories = await CategoriesController.getCategories();

        res.status(201).json({ categories, msg: 'Catégorie créée' });
    },

    async getCategories() {
        return await Category.findAll({
            attributes: { exclude: ['created_at', 'updated_at'] },
        });
    },
};

module.exports = CategoriesController;
