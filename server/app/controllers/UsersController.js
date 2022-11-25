const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Role } = require('../models');

const UsersController = {
    async register(req, res) {
        const { email, password } = req.body;

        // * Créé une instance de User, mais pas encore sauvegardée
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
            //§ Merci Julie :)
            throw new Error('User already exists');
        }
        // Hash password with salt
        // password123!
        // $2!ljknhdfgljhdfgpijzzrgiojsrgpojljqkser
        // password123!
        // $2!ljknhdfgljhdfgiuwhfdgoijhfgxoihfgiunuhsefîodj
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Attribuer un rôle par défaut ici

        //$2a$10$eagneoIJBbU0.LDUlkaISONZybPrGuWF3ONQUcmvdIg5MBwiTZXPG;
        //$2a$10$VIniz81ck4h4yvmD.NpIReHgWLn8bG1Egw1K8AUGNyA5zzG69yg36;
        await user.save();

        //! générer notre JWT  JsonWebToken
        const payload = {
            user: {
                id: user.id,
            },
        };

        //! On n'oublie pas d'effacer le mot de passe de user avant de l'envoyer en réponse
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
};

module.exports = UsersController;
