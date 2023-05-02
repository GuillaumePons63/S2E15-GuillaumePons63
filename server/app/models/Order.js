const { DataTypes, Model } = require('sequelize');
const sequelize = require('./getConnexion')();
const User = require('./User');

class Order extends Model {
    async calculateOrderPrice() {
        const [result, metadata] = await sequelize.query(
            `SELECT calculate_order_price(${this.id})`
        );

        return result[0].calculate_order_price;
    }
}

Order.init(
    {
        price_ht: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        price_ttc: {
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
        sequelize,
        tableName: 'orders',
        modelName: 'Order',
    }
);

module.exports = Order;
