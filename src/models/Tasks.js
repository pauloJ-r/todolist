const {Model, DataTypes} = require('sequelize')

class Tasks extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            status: DataTypes.ENUM('Em andamento', 'Finalizado'),
            priority: DataTypes.INTEGER, validator: {
                min: 1,
                max: 10
            },
            description: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Tasks