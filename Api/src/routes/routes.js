const {Router} = require('express')
const Tasks = require('../models/Tasks')
const TasksController = require('../controller/TasksController')
const TagsController = require('../controller/TagsController')
const TasksTagsController = require('../controller/TasksTagsController')
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

// Rotas de tarefas por tag
routes.get('/tasks/tags/all', TasksTagsController.getAllTasksWithTags);

routes.get('/tasks/tags', TasksTagsController.filterTasksByTags);

routes.get('/tasks/:tag_id', TasksTagsController.getTasksByTag);

routes.post('/tasks/tags', TasksTagsController.createTaskTag);

routes.delete('/tasks/tags/:id', TasksTagsController.removeTaskFromTag);

module.exports = routes