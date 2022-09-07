const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');

class User extends Model {
    can(action) {
        let ok = false;

        this['roles'].forEach(role => {
            role['abilities'].forEach(ability => {
                if (ability.name === action) {
                    ok = true;
                }
            });
        });

        return ok;
    }
}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unicode: true,
            unique: true,
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'users',
        modelName: 'User',
    }
);

module.exports = User;
