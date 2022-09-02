const { Role } = require('../models');

const RolesController = {
    async index(req, res) {
        const roles = await Role.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        });

        res.status(200).json(roles);
    },

    async store(req, res) {
        const { name } = req.body;

        const role = await Role.create({
            name: name,
        });

        res.status(200).json({ role, msg: 'Role créé' });
    },
};

module.exports = RolesController;
