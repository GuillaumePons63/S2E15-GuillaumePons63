const express = require('express');
const router = express.Router();
const { check, param, query, validationResult } = require('express-validator');
const auth = require('../../app/middleware/auth');
const Coupon = require('../../app/models/Coupon');
const { catchErrors } = require('../../handlers/ErrorHandlers');
const CouponsController = require('../../app/controllers/CouponsController');
const isAdmin = require('../../app/middleware/isAdmin');

/**
 * @route GET api/coupons
 */
router.get('/', catchErrors(CouponsController.index));

/**
 * GET one coupon
 * @route GET api/coupons/:id
 */
router.get('/:id', param('id').isInt(), catchErrors(CouponsController.show));

/**
 *
 * @route POST api/coupons/check
 * @body object coupon
 *
 */
router.post(
    '/check',
    [
        auth,
        [
            check('code', 'le code est obligatoire').trim().escape(),
            function (req, res, next) {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                next();
            },
        ],
    ],
    catchErrors(CouponsController.check)
);

/**
 *
 * @route POST api/coupons/create
 * @body object coupon
 *
 */
router.post(
    '/create',
    [
        auth,
        isAdmin,
        [
            check('code', 'le code est obligatoire').trim().escape(),
            function (req, res, next) {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                next();
            },
        ],
    ],
    catchErrors(CouponsController.store)
);

module.exports = router;
