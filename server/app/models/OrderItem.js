const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');

class OrderItem extends Model {}
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
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'order_items',
        timestamps: false,
    }
);

module.exports = OrderItem;
