const Sequelize = require('sequelize')
const config = require('../config/database')
const connection = new Sequelize(config)
const Tasks = require('../models/Tasks')
const Tags = require('../models/Tags')

Tags.init(connection)
Tasks.init(connection)

module.exports = connection
