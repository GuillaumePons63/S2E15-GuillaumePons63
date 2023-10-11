const { Model, DataTypes, Deferrable, literal } = require('sequelize');
const getConnexion = require('./getConnexion');
const Category = require('./Category');
const Product = require('./Product');

class CategoryProduct extends Model {}

CategoryProduct.init(
    {
        category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Category },
        },
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: { model: Product },
        },
    },
    {
        sequelize: getConnexion(), // We need to pass the connection instance
        modelName: 'CategoryProduct', // We need to choose the model name
        tableName: 'category_product',
    }
);

module.exports = CategoryProduct;
