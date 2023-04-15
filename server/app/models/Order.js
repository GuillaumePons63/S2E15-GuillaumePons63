const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');
const User = require('./User');

class Order extends Model {}

Order.init(
    {
        priceHT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        priceTTC: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: User },
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'orders',
        modelName: 'Order',
    }
);

module.exports = Order;
