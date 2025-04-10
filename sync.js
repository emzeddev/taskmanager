import sequelize from "./config/db.js";
import User from './models/User.js'
import Task from './models/Task.js'

const dbSync = async () => {
    try {
        await sequelize.sync({force: true})
        console.log('Database synced')
    }catch(err) { 
        console.log(err.message)
    }
}

dbSync()