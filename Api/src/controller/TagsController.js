const Tags = require('../models/Tags')

module.exports = {
    async GetTags(req, res) {
        try {
            const tags = await Tags.findAll()
            return res.status(200).json(tags)
        } catch (error) {
            console.error('Erro ao buscar tags:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
    async CreateTags(req, res) {
        try {
            const { name, color } = req.body
            if (!name || !color) {
                return res.status(400).json({ error: 'Os campos name e color devem estar preenchidos' })
            }
            const tags = await Tags.create({ name, color })
            return res.status(201).json({ sucess: 'Tag criada com sucesso', tags })
        } catch (error) {
            console.error('Erro ao criar tag:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
    async UpdateTags(req, res) {
        try {
            const { id } = req.params
            const { name, color } = req.body
            if (!name || !color) {
                return res.status(400).json({ error: 'Os campos name e color devem estar preenchidos' })
            }
            const tags = await Tags.findByPk(id)
            if (!tags) {
                return res.status(404).json({ error: 'Tag não encontrada' })
            }
            tags.name = name    
            tags.color = color
            tags.save() 
            return res.status(200).json({ message: 'Tag atualizada com sucesso' })
        } catch (error) {    
            console.error('Erro ao atualizar tag:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
    async DeleteTags(req, res) {
        try {
            const { id } = req.params
            const tags = await Tags.findByPk(id)
            if (!tags) {
                return res.status(404).json({ error: 'Tag não encontrada' })
            }
            tags.destroy({ where: { id } })
            return res.status(200).json({ message: 'Tag deletada com sucesso' })
        } catch (error) {
            console.error('Erro ao deletar tag:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
   