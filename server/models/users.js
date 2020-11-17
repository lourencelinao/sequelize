const Sequalize = require('sequelize')
const sequelize = require('../config/sequelize')

const User = sequelize.define('user', {
    firstname: {
        type: Sequalize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequalize.STRING,
        allowNull: false
    }

})

module.exports = User