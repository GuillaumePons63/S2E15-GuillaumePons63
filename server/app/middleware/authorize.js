const { User } = require('../models');

/**
 *
 * @param {array} action
 * @returns next
 */
function authorize(actions) {
    return async (req, res, next) => {
        const { id } = req.user;

        const user = await User.findByPk(id, {
            include: { all: true, nested: true },
        });

        for (const action of actions) {
            if (user.can(action)) {
                return next();
            }
        }

        const error = new Error("Un truc bizarre s'est produit");
        error.status = 403;
        return next(error);
    };
}

module.exports = authorize;
