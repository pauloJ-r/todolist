const Sequelize = require('sequelize')
const config = require('../config/database')
const connection = new Sequelize(config)

const Tasks = require('../models/Tasks')
const Tags = require('../models/Tags')
const TasksTags = require('../models/TasksTags')

Tags.init(connection)
Tasks.init(connection)
TasksTags.init(connection)

const models = { Tasks, Tags, TasksTags };


Tags.associate(connection.models)
Tasks.associate(connection.models)
TasksTags.associate(connection.models)

module.exports = connection
