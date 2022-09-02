const express = require('express');
const router = express.Router();

const { catchErrors } = require('../../handlers/ErrorHandlers');
const auth = require('../../app/middleware/auth.js');
const AuthController = require('../../app/controllers/AuthController');
const validateEmailAndPassword = require('../../app/middleware/validateEmailAndPassword');

// @route get api/auth
router.get('/', auth, catchErrors(AuthController.index));

// @route post api/auth : login
router.post('/', validateEmailAndPassword, catchErrors(AuthController.login));

module.exports = router;
