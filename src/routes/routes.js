const {Router} = require('express')
const Tasks = require('../models/Tasks')
const TasksController = require('../controller/TasksController')
const TagsController = require('../controller/TagsController')
const routes = Router()

// Rotas de tarefas
routes.get('/tasks', TasksController.GetTasks);

routes.post('/tasks', TasksController.CreateTasks);

routes.put('/tasks/:id',TasksController.UpdateTasks);

routes.delete('/tasks/:id', TasksController.DeleteTasks);

// Rotas de tags
routes.get('/tags', TagsController.GetTags);

routes.post('/tags', TagsController.CreateTags);   

routes.put('/tags/:id',TagsController.UpdateTags);

routes.delete('/tags/:id', TagsController.DeleteTags);

module.exports = routes