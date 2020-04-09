const Sequelize = require('sequelize');
const dbConfig = require('./database.json');
const autoload = require('./../helper//autoloadhelper');

var database = null;


async function loadDB(){

    sequelize = new Sequelize(dbConfig["development"]);
    
    await sequelize.authenticate()
    .then(() => console.log('[OK] Carregando BD'))
    .catch(err => console.log('[FAIL] Carregando BD: ', err))
    
    database =  {
        sequelize,
        Sequelize,
        models : {}
        
    }
    
    await autoload(database);

    return database;
}


    
module.exports = database == null ? loadDB() : database;