const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const AuthController = {
    async index(req, res) {
        // SELECT name, email, created_at, updated_at FROM users where id = id;

        const user = await User.findOne({
            where: { id: req.user.id },
            attributes: { exclude: ['password'] },
        });

        res.status(200).json(user);
    },

    async login(req, res) {
        const { email, password } = req.body;

        //* Does user exist ?
        const user = await User.findOne({
            where: { email: email },
            attributes: { exclude: ['name', 'created_at', 'updated_at'] },
            include: 'roles',
        });

        if (!user) {
            //* Attention, aux messages d'erreur quand on est en PROD
            throw new Error('Email or password invalid');
        }

        //* On vérifie la validité du mot de passe
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Email or password invalid');
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        delete user.dataValues.password;

        jwt.sign(
            payload,
            process.env.APP_SECRET,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token, user });
            }
        );
    },

    async loginWithGithub(req, res) {
        console.log(req.user);

        res.json({ user: req.user });
    },
};

module.exports = AuthController;
