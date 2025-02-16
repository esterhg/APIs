const {Sequelize} = require('sequelize');

const{config}= require('../database/conexion');

const setupModels = require('./../models');

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect:'mysql'
    }
);
 //sinconisan con los modelos si una tabla no esta creada la va a crear 
sequelize.sync();
setupModels(sequelize);

module.exports=sequelize;
