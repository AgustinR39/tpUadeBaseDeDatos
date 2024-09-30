const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('text-uade', 'root', 'admin1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    dbConnection
}