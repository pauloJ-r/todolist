const {Router} = require('express')
const Tasks = require('../models/Tasks')
const TasksController = require('../controller/TasksController')
const routes = Router()

// Rotas de tarefas
routes.get('/tasks', TasksController.GetTasks);

routes.post('/tasks', TasksController.CreateTasks);

routes.put('/tasks/:id',TasksController.UpdateTasks);

routes.delete('/tasks/:id', TasksController.DeleteTasks);

module.exports = routes