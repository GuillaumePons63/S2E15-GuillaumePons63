const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const CartController = require('../../app/controllers/CartController');
const { catchErrors } = require('../../handlers/ErrorHandlers');

router.post(
    '/add',
    [
        check('id', 'Un probleme est survenu').isInt(),
        function (req, res, next) {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            next();
        },
    ],
    catchErrors(CartController.store)
);

/**
 * @route POST /api/cart
 * filtrer req.body, peut être envoyer un objet

 */
router.post(
    '/',
    [
        check('products', 'Un problème est survenu').isArray(),
        function (req, res, next) {
            const errors = validationResult(req);
            const { products } = req.body;
            for (let product of products) {
                if (!parseInt(product.id)) {
                    return res.status(400).json({ errors: ['Id incorrect'] });
                }
            }
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],
    catchErrors(CartController.index)
);

module.exports = router;
