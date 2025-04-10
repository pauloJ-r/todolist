const { Model, DataTypes } = require("sequelize");

class Tasks extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
        type: DataTypes.ENUM("Pendente", "Em andamento", "Finalizado"),
          defaultValue: "Pendente",
          allowNull: false,
        },
        priority: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 10,
          },
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Tasks", 
        tableName: "tasks",
        timestamps: true, 
        
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.Tags, { through: models.TasksTags, foreignKey: "task_id", as : 'tags' });
    }
  
}

module.exports = Tasks;
