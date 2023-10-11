const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });
const router = express.Router();
const { catchErrors } = require('../../handlers/ErrorHandlers');
const { check, param, validationResult } = require('express-validator');
const auth = require('../../app/middleware/auth');
const Product = require('../../app/models/Product');
const Category = require('../../app/models/Category');
const authorize = require('../../app/middleware/authorize');
const ProductsController = require('../../app/controllers/ProductsController');
/**
 * @route GET /api/products
 */
router.get('/', catchErrors(ProductsController.index));

/**
 * @route GET /api/products/:id
 * @param INT id
 */
router.get('/:id', param('id').isInt(), catchErrors(ProductsController.show));

/**
 *
 * @route POST api/products/create
 * @body object product
 * @doNotForget validation
 */
router.post(
    '/create',
    [
        auth,
        authorize(['create-product', 'all']),
        upload.single('image'),
        function (req, res, next) {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ],
    catchErrors(ProductsController.store)
);

/**
 * @route POST api/products/update
 * @body object product
 */
router.patch(
    '/update',
    [auth, [check('title', 'le titre est pas correct').trim().escape()]],
    async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            id,
            metaDescription,
            category_id,
            title,
            description,
            priceHT,
            image,
        } = req.body;

        try {
            const prodInstance = Product();

            // update products SET title = '?' where id = '?';
            // bindParam pour title tous les champs concernés
            // Ensuite on exécute la requête.
            await prodInstance.update(
                {
                    title: title,
                    metaDescription: metaDescription,
                    category_id: category_id,
                    description: description,
                    priceHT: priceHT,
                    image: image,
                },
                {
                    where: {
                        id: id,
                    },
                }
            );
            res.status(200).json({ msg: 'Product updated' });
        } catch (e) {
            res.status(400).send('Server Error');
        }
    }
);

/**
 * @route DELETE api/products/destroy
 * @body json
 */
router.delete(
    '/destroy',
    [auth, [check('id', 'Id doit etre un  nombre').trim().escape().isInt()]],
    async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { id } = req.body;
            const prodInstance = Product();
            await prodInstance.destroy({ where: { id: id } });

            res.status(200).json({ msg: 'Bye Bye product !!' });
        } catch (e) {
            res.status(400).send('Server Error');
        }
    }
);

module.exports = router;
