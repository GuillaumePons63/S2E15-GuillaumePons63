const { Role } = require('../models');
const RolesController = {
    async index(req, res) {
        const roles = await RolesController.getRoles();

        res.status(200).json(roles);
    },

    async store(req, res) {
        const { name, label } = req.body;

        await Role.create({
            name: name,
            label: label,
        });

        const roles = await RolesController.getRoles();

        res.status(201).json({ roles, msg: 'Role créé' });
    },

    async show(req, res) {
        const { id } = req.params;

        const role = await Role.findByPk(id, {
            include: 'permissions',
            attributes: { exclude: ['created_at', 'updated_at'] },
        });

        res.status(200).json(role);
    },

    async getRoles() {
        return await Role.findAll({
            include: 'permissions',
            attributes: { exclude: ['created_at', 'updated_at'] },
        });
    },
};

module.exports = RolesController;
