const Tags = require('../models/Tags');
const Tasks = require('../models/Tasks');
const TasksTags = require('../models/TasksTags');
const { Op } = require('sequelize');


module.exports = {
    async getAllTasksWithTags(req, res) {
        try {
            const tasksWithTags = await Tasks.findAll({
                include: [
                { 
                    model: Tags, 
                    through: TasksTags, 
                    as: "tags",
                    required: true 
                }
            ]
            });
            return res.status(200).json(tasksWithTags);
        } catch (error) {
            console.error('Erro ao buscar tarefas e tags:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
    

    async getTasksByTag(req, res) {
        try {
            const { tag_id } = req.params;
            if (!tag_id) {
                return res.status(400).json({ error: 'O ID da tag deve ser fornecido' });
            }

            const tasks = await TasksTags.findAll({
                where: { tag_id },
                include: [{ model: Tasks, as: 'task' }]
            });

            return res.status(200).json(tasks);
        } catch (error) {
            console.error('Erro ao buscar tarefas por tag:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async removeTaskFromTag(req, res) {
        try {
            const { task_id, tag_id } = req.body;
            if (!task_id || !tag_id) {
                return res.status(400).json({ error: 'Os campos task_id e tag_id são obrigatórios' });
            }

            const deleted = await TasksTags.destroy({
                where: { task_id, tag_id }
            });

            if (deleted) {
                return res.status(200).json({ success: 'Relação removida com sucesso' });
            } else {
                return res.status(404).json({ error: 'Relação não encontrada' });
            }
        } catch (error) {
            console.error('Erro ao remover tarefa da tag:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    async filterTasksByTags(req, res) {
        try {
            const { tags } = req.query; 
            if (!tags) {
                return res.status(400).json({ error: 'IDs das tags devem ser fornecidos' });
            }
    
            const tagIds = tags.split(',').map(id => Number(id));
    
            const tasks = await Tasks.findAll({
                include: [
                    {
                        model: Tags,
                        as: 'tags', // Alias definido na associação
                        where: { id: { [Op.in]: tagIds } }, // Filtro de tags
                        through: { attributes: [] } // Oculta a tabela intermediária
                    }
                ]
            });
    
            return res.status(200).json(tasks);
        } catch (error) {
            console.error('Erro ao filtrar tarefas por tags:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
    async createTaskTag(req, res) {
        try {
            const { task_id, tag_id } = req.body;
            if (!task_id || !tag_id) {
                return res.status(400).json({ error: 'Os campos task_id e tag_id são obrigatórios' });
            }

            const taskTag = await TasksTags.create({ task_id, tag_id });

            return res.status(201).json({ success: 'Relação criada com sucesso', taskTag });
        } catch (error) {
            console.error('Erro ao criar relação de tarefa e tag:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
};
