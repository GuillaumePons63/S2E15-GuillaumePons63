const { User } = require('../models');

async function isAdmin(req, res, next) {
    const { id } = req.user;

    // Aller chercher l'utilisateur avec le rôle qui lui est attribué
    const user = await User.findByPk(id, {
        include: { all: true, nested: true },
    });

    let role = null;
    if (user.hasOwnProperty('roles')) {
        role = user.roles.find(role => role.name === process.env.ADMIN);
    }

    if (role) {
        return next();
    }

    const error = new Error('non non non');
    error.status = 403;
    return next(error);
}

module.exports = isAdmin;
