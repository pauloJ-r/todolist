const {Router} = require('express')
const Tasks = require('./models/Tasks')

const routes = Router()

routes.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})
routes.post('/tasks', async (req, res) =>{
    const {title, status, priority, description} = req.body

    const tasks = await Tasks.create({title, status, priority, description})

    res.json({tasks})

})

module.exports = routes