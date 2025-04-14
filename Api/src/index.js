const express = require('express')
const routes = require('./routes/routes')
const app = express()
const port = 3000
const cors = require('./middlewares/corsMiddlewares')

require('./database')

app.use(express.json())
app.use(cors)
app.use(routes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})