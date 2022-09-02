const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');
const User = require('./User');

class Order extends Model {}

Order.init(
    {
        items: {
            type: DataTypes.JSON,
        },
        priceHT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        priceTTC: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
