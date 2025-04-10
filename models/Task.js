import { DataTypes } from "sequelize";
import sequelize from '../config/db.js'

const Task = sequelize.define("Task" , {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Task.associate = function (models) {
    Task.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });
};

export default Task;
