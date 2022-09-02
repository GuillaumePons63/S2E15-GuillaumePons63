const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion.js');

class Role extends Model {}

Role.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
            unique: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
            unique: true,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'roles',
        modelName: 'Role',
    }
);

module.exports = Role;
