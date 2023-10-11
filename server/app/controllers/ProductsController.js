const { Product, Category } = require('../models');

const ProductsController = {
    async index(req, res) {
        const products = await ProductsController.getProducts();

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

        await Product.create({
            category_id: cat.id,
            title: title,
            metaDescription: metaDescription,
            priceHT: priceHT,
            image: image,
            description: description,
        });

        const products = await ProductsController.getProducts();

        res.status(201).json({ products, msg: 'Produit créé' });
    },

    async show(req, res) {
        const { id } = req.params;

        const product = await Product.findOne({ where: { id } });

        res.status(200).json(product);
    },

    async getProducts(offset = 0) {
        return await Product.findAll({
            limit: 10,
            offset: offset,
            include: [
                { model: Category, as: 'categories', attributes: ['id'] },
            ],
        });
    },
};

module.exports = ProductsController;
