const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');

class Ability extends Model {}

Ability.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'abilities',
        modelName: 'Ability',
    }
);

module.exports = Ability;
