const Sequelize = require('sequelize')
const config = require('../config/database')
const connection = new Sequelize(config)
const Tasks = require('../models/Tasks')

Tasks.init(connection)

module.exports = connection
