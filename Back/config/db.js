const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('Uade2024', 'root', 'Maitena1.', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    dbConnection
}