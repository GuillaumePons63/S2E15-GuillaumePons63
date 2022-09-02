const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Role } = require('../models');

const UsersController = {
    async register(req, res) {
        const { email, password } = req.body;

        const user = User.build({
            email,
            password,
        });

        let existingUser = await User.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.status(400).json({
                errors: [{ msg: 'User already exists' }],
            });
        }
        // Hash password with salt
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Attribuer un rôle ici
        const role = await Role.findOne({
            where: {
                name: process.env.CUSTOMER,
            },
        });

        user.role_id = role.id;

        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.APP_SECRET,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token });
            }
        );
    },
};

module.exports = UsersController;
