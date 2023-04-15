const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');

class OrderItem extends Model {
    async calculateOrderPrice(orderId) {
        const [result, metadata] = await sequelize.query(
            `SELECT calculate_order_price(${orderId})`
        );
        return result[0].calculate_order_price;
    }
}
OrderItem.init(
    {
        item_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        vat_rate: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'order_items',
        timestamps: false,
    }
);

module.exports = OrderItem;
