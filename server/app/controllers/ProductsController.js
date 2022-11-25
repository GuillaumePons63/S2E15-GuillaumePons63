const { Product, Category } = require('../models');

const ProductsController = {
    async index(req, res) {
        let offset = 0;
        if (req.query.offset) {
            offset = req.query.offset;
        }

        const products = await Product.findAll({
            limit: 10,
            offset: offset,
            include: [
                { model: Category, as: 'categories', attributes: ['id'] },
            ],
        });

        res.status(200).json(products);
    },

    async store(req, res) {
        const {
            category_id,
            title,
            image,
            metaDescription,
            description,
            priceHT,
        } = req.body;

        const cat = await Category.findOne({
            where: {
                id: category_id,
            },
        });

        const product = await Product.create({
            category_id: cat.id,
            title: title,
            metaDescription: metaDescription,
            priceHT: priceHT,
            image: image,
            description: description,
        });

        res.status(200).json({ product, msg: 'Produit créé' });
    },

    async show(req, res) {
        const { id } = req.params;

        const product = await Product.findOne({ where: { id } });

        res.status(200).json(product);
    },
};

module.exports = ProductsController;
