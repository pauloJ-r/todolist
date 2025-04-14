const { Model, DataTypes } = require('sequelize');
const Tasks = require('./Tasks');
const Tags = require('./Tags');

class TasksTags extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            task_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'tasks', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            tag_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'tags', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        }, {
            sequelize,
            tableName: 'tasks_tags',
            timestamps: false
        });
    }
    static associate(models) {
        this.belongsTo(models.Tasks, { foreignKey: 'task_id' });
        this.belongsTo(models.Tags, { foreignKey: 'tag_id' });
    }
}

module.exports = TasksTags;
