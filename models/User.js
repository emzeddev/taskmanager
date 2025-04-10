import {DataTypes} from 'sequelize'
import sequelize from '../config/db.js'

const User = sequelize.define('User' , {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

User.associate = function (models) {
    User.hasMany(models.Task, {
        foreignKey: 'userId',
        as: 'tasks',
    });
};

export default User