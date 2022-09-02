const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion.js');
const User = require('./User');
const Role = require('./Role');

class RoleUser extends Model {}

RoleUser.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: User },
        },
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Role },
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'role_user',
        modelName: 'RoleUser',
    }
);

module.exports = RoleUser;
