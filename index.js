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


app.listen(port, () => {
    console.log(`o servidor está rodando na porta ${port}`)
})