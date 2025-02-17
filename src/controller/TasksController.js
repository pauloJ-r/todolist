const Tasks = require('../models/Tasks')
module.exports = {
    async CreateTasks(req, res) {
    try {
       const {title, status, priority, description} = req.body
       
       if (!title || !status || !priority ) {
           return res.status(400).json({error: 'Os campos devem estar preenchidos'})
           
       }else if (priority < 1 || priority > 10) {
           return res.status(400).json({error: 'A prioridade deve estar entre 1 e 10'})

       }else if (status !== 'Em andamento' && status !== 'Finalizado' && status !== 'Pendente') {
           return res.status(400).json({error: 'O status deve ser "Em andamento" ou "Finalizado ou "Pendente"'})
       }

       const tasks = await Tasks.create({title, status, priority, description})
   
       return res.status(201).json({sucess: 'Tarefa criada com sucesso', tasks})
       
   } catch (error) {
       console.error('Erro ao criar tarefa:', error);
       return res.status(500).json({ error: 'Erro interno do servidor' });
   }
   },
   async GetTasks (req, res) {
    try {
        const tasks = await Tasks.findAll()
        return res.status(200).json(tasks)
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
   },
   async UpdateTasks(req, res) {
    try {
       const { id } = req.params;
       const { title, status, priority, description } = req.body;
       
       if (!title || !status || !priority) {
         return res.status(400).json({ error: 'Os campos title, status e priority devem estar preenchidos' });
     }

     
     if (priority < 1 || priority > 10) {
         return res.status(400).json({ error: 'A prioridade deve estar entre 1 e 10' });
     }

     
     if (status !== 'Em andamento' && status !== 'Finalizado' && status !== 'Pendente') {
         return res.status(400).json({ error: 'O status deve ser "Em andamento", "Finalizado" ou "Pendente"' });
     }

       const tasks = await Tasks.findByPk(id);
       if (!tasks) {
          return res.status(404).json({ error: 'Tarefa não encontrada' });
       } if ((title, status, priority, description)) {
          tasks.title = title;
          tasks.status = status;
          tasks.priority = priority;
          tasks.description = description;
       }
       tasks.save()
       tasks.update({ title, status, priority, description }, { where: { id } });

       return res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
    } catch (error) {
       console.error('Erro ao atualizar tarefa:', error);
       return res.status(500).json({ error: 'Erro interno do servidor' });
    }
 },

 async DeleteTasks(req, res) {
    try {
       const { id } = req.params;

       const tasks = await Tasks.findByPk(id);
       if (!tasks) {
          return res.status(404).json({ error: 'Tarefa não encontrada' });
       }
       tasks.destroy({ where: { id } });

       return res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
       console.error('Erro ao deletar tarefa:', error);
       return res.status(500).json({ error: 'Erro interno do servidor' });
    }
 }
}