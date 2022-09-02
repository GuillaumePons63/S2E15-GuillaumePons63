const express = require('express');
const router = express.Router();
const { catchErrors } = require('../../handlers/ErrorHandlers');
const UsersController = require('../../app/controllers/UsersController');
const validateEmailAndPassword = require('../../app/middleware/validateEmailAndPassword');

/**
 *
 *@route POST api/users/register
 */
router.post(
    '/register',
    validateEmailAndPassword,
    catchErrors(UsersController.register)
);

module.exports = router;
