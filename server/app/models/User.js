const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');

class User extends Model {
    can(action) {
        let ok = false;

        this['roles'].forEach(role => {
            role['permissions'].forEach(ability => {
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
        github_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unicode: true,
            unique: true,
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'users',
        modelName: 'User',
    }
);

module.exports = User;
