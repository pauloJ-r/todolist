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
          defaultValue: "Pedente",
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
        modelName: "Tasks", // Nome do modelo
        tableName: "tasks", // Nome da tabela no banco
        timestamps: true, // Cria `createdAt` e `updatedAt` automaticamente
      }
    );
  }
}

module.exports = Tasks;
