import {Sequelize} from 'sequelize'
import {dbinfo} from './dbinfo.js'


const sequelize = new Sequelize(dbinfo.database, dbinfo.username, dbinfo.password, {
    host: dbinfo.host,
    dialect: dbinfo.dialect,
    logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));


export default sequelize
