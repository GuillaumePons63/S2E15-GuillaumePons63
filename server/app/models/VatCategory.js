const { Model, DataTypes } = require('sequelize');
const getConnexion = require('./getConnexion');

class VatCategory extends Model {}

VatCategory.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vat_rate: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        modelName: 'VatCategory',
        tableName: 'vat_categories',
        timestamps: false,
    }
);

// CREATE TABLE vat_categories (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(50) NOT NULL,
//   rate DECIMAL(5, 2) NOT NULL
// );

// INSERT INTO vat_categories (name, rate) VALUES
//   ('Standard rate', 20.00),
//   ('Intermediate rate', 10.00),
//   ('Reduced rate', 5.50),
//   ('Super-reduced rate', 2.10);

module.exports = VatCategory;
