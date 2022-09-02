const { Model, DataTypes, literal } = require('sequelize');
const getConnexion = require('./getConnexion');

class Category extends Model {}

Category.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: 'categories',
        modelName: 'Category',
        sequelize: getConnexion(),
    }
);

module.exports = Category;
