const { catchErrors } = require('../../handlers/ErrorHandlers');
const RolesController = require('../../app/controllers/RolesController');

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../app/middleware/auth.js');
const isAdmin = require('../../app/middleware/isAdmin');
const authorize = require('../../app/middleware/authorize');
/**
 * @route GET api/roles
 */
router.get('/', auth, isAdmin, catchErrors(RolesController.index));

router.get(
    '/:id',
    [
        auth,
        authorize(['view-roles', 'all'])
    ],
    catchErrors(RolesController.show)
);

/**
 *
 * @route POST api/roles/create
 * @body object role
 *
 */
router.post(
    '/create',
    [
        auth,
        authorize(['create-role', 'all']),
        [
            check('name', 'le nom est obligatoire')
                .not()
                .isEmpty()
                .exists()
                .trim()
                .escape(),
            function (req, res, next) {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                next();
            },
        ],
    ],
    catchErrors(RolesController.store)
);

module.exports = router;
