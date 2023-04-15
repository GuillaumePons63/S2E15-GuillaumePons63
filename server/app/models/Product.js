const { DataTypes, Model } = require('sequelize');
const getConnexion = require('./getConnexion');

class Product extends Model {}

Product.init(
    {
        ref: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        attr: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        metaDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        excerpt: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price_ht: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        vat_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        modelName: 'Product',
        tableName: 'products',
    }
);

module.exports = Product;
