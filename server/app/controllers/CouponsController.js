const { Coupon } = require('../models');

const CouponsController = {
    async index(req, res) {
        const coupons = await Coupon.findAll();

        res.status(200).json(coupons);
    },

    async show(req, res) {
        const { id } = req.params;

        const coupon = await Coupon.findOne({ where: { id } });
        res.status(200).json(coupon);
    },

    async store(req, res) {
        const { name } = req.body;

        // INSERT INTO categories (name) VALUES name;
        const coupon = await Coupon.create({
            name: name,
        });

        res.status(200).json({ coupon, msg: 'Coupon créé' });
    },

    async check(req, res) {
        const { code } = req.body;

        const coupon = await Coupon.findOne({ where: { code } });

        res.status(200).json({ coupon, msg: 'ok' });
    },
};

module.exports = CouponsController;
