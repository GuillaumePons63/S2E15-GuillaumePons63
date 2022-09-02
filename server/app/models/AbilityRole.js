const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion.js');
const Role = require('./Role');
const Ability = require('./Ability');

class AbilityRole extends Model {}

AbilityRole.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Role },
        },
        ability_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Ability },
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'ability_role',
        modelName: 'AbilityRole',
    }
);

module.exports = AbilityRole;
