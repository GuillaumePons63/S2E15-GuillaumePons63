const express = require('express');
const router = express.Router();

const { catchErrors } = require('../../handlers/ErrorHandlers');
const { store } = require('../../app/controllers/OrdersController');

/**
 * @route GET /api/orders/create Créé une commande test
 */
router.get('/create', catchErrors(store));

module.exports = router;
