const { Sequelize } = require('sequelize');

function getConnexion() {
    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWD,
        {
            define: {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                underscored: true,
            },
            host: process.env.DB_HOST,
            dialect: process.env.DB_ENV,
            logging: false,
        }
    );
}

module.exports = getConnexion;
