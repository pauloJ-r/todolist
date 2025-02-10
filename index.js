const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const tasks = [
       
   {
        id: 1,
        title: 'Tarefa 1',
        status: 'Pendente',
        priority: 1,
        description: 'Descrição da tarefa 1',
    },
  
]
app.get('/tasks', function (req, res) {
  res.send(tasks)
});

app.post ('/tasks', function (req, res) {
    tasks.push(req.body)
    res.send('Tarefa criada')
})

app.delete ('/tasks/:id', function (req, res) {
    const id = parseInt(req.params.id, 10)
    const index = tasks.findIndex(task => task.id === id)
    
    if (index === -1) {
        res.status(404).send('Tarefa não encontrada')
    } else {
        tasks.splice(index, 1)
        res.send('Tarefa excluída')
    }
})

app.put ('/tasks/:id', function (req, res) {
    const id = parseInt(req.params.id, 10)
    const index = tasks.findIndex(task => task.id === id)
    
    if (index === -1) {
        res.status(404).send('Tarefa não encontrada')
    } else {
        tasks[index] = req.body
        res.send('Tarefa atualizada')
    }
})

app.listen(port, () => {
    console.log(`o servidor está rodando na porta ${port}`)
})