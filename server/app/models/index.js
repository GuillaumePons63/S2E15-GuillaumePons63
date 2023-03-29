require('dotenv').config();
const Category = require('./Category');
const Product = require('./Product');
const CategoryProduct = require('./CategoryProduct');
const Order = require('./Order');
const Role = require('./Role');
const User = require('./User');
const Ability = require('./Ability');
const RoleUser = require('./RoleUser');
const AbilityRole = require('./AbilityRole');
const Coupon = require('./Coupon');

Ability.belongsToMany(Role, {
    as: 'roles',
    through: AbilityRole,
});

Role.belongsToMany(Ability, {
    as: 'permissions',
    through: AbilityRole,
});

User.belongsToMany(Role, {
    as: 'roles',
    through: RoleUser,
});

Role.belongsToMany(User, {
    as: 'users',
    through: RoleUser,
});

Category.belongsToMany(Product, {
    as: 'products',
    through: CategoryProduct,
});

Product.belongsToMany(Category, {
    as: 'categories',
    through: CategoryProduct,
});

module.exports = {
    Ability,
    AbilityRole,
    RoleUser,
    Product,
    Category,
    Order,
    CategoryProduct,
    Role,
    User,
    Coupon,
};
