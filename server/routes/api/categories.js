const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { catchErrors } = require('../../handlers/ErrorHandlers');
const CategoriesController = require('../../app/controllers/CategoriesController');
const auth = require('../../app/middleware/auth.js');
const authorize = require('../../app/middleware/authorize.js');
/**
 * @route GET api/categories
 */
router.get('/', catchErrors(CategoriesController.index));

/**
 *
 * @route POST api/categories/create
 * @body object category
 *
 */
router.post(
    '/create',
    [
        auth,
        authorize('create-categorie'),
        [
            check('name', 'le nom est obligatoire').trim().escape(),
            function (req, res, next) {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                next();
            },
        ],
    ],
    catchErrors(CategoriesController.store)
);

module.exports = router;
