const { Model, DataTypes } = require('sequelize');

class Tags extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'Tags',
            tableName: 'tags'
        });
    }
}

module.exports = Tags;
