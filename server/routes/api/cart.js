const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const CartController = require('../../app/controllers/CartController');
const { catchErrors } = require('../../handlers/ErrorHandlers');

/**
 * @route POST /api/cart
 * filtrer req.body, peut être envoyer un objet

 */
router.post(
    '/',
    [
        check('ids', 'Un probleme est survenu').isArray(),
        function (req, res, next) {
            const errors = validationResult(req);
            const { ids } = req.body;
            for (let id of ids) {
                if (!parseInt(id)) {
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
