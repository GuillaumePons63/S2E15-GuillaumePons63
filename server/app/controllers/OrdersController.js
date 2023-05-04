const { Product, Order, OrderItem } = require('../models');
const connexion = require('../models/getConnexion')();
const { Op } = require('sequelize');

const OrdersController = {
    async store(req, res) {
        const user_id = 1;
        const order = await Order.create({
            user_id,
        });

        const prods = await Product.findAll({
            include: 'vat_rate',
        });

        try {
            for (const prod of prods) {
                await OrderItem.create({
                    item_price: prod.price_ht,
                    vat_rate: prod.vat_rate.vat_rate,
                    quantity: 1,
                    order_id: order.id,
                    product_id: prod.id,
                });
            }
            const result = await order.calculateOrderPrice();

            res.json({ message: 'OK', result });
        } catch (e) {
            console.log('ERR', e);
        }
    },
};

module.exports = OrdersController;
