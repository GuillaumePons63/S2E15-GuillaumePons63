const express = require('express');
const router = express.Router();
const passport = require('passport');
const { catchErrors } = require('../../handlers/ErrorHandlers');
const auth = require('../../app/middleware/auth.js');
const AuthController = require('../../app/controllers/AuthController');
const validateEmailAndPassword = require('../../app/middleware/validateEmailAndPassword');

/**
 * @route get api/auth
 */
router.get('/', auth, catchErrors(AuthController.index));

/**
 * @route post api/auth : login
 */
router.post('/', validateEmailAndPassword, catchErrors(AuthController.login));

/**
 * @route post api/auth/github : login with github
 */
router.get(
    '/github',

    passport.authenticate('github', { scope: ['user:email'] }),
    catchErrors(AuthController.loginWithGithub)
);

/**
 * @route post api/auth/github/callback : login with github route appelée quand github a répondu
 */
router.get(
    '/github/callback',
    passport.authenticate('github', {
        failureRedirect: 'http://localhost:5173/login',
    }),
    catchErrors(AuthController.loginWithGithub)
);

module.exports = router;
