const getConnexion = require('./getConnexion');
const { Model, DataTypes } = require('sequelize');

class Coupon extends Model {}

Coupon.init(
    {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        reduction: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        end_at: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        has_been_used: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize: getConnexion(),
        modelName: 'Coupon',
        tableName: 'coupons',
    }
);

module.exports = Coupon;
