const path = require('path');
const fs = require('fs');

let modelsLoadingOk = 0;
let modelsLoadingFail = [];
let modelsRelationFail = [];

function details(models){

    console.log(`~~~~~~~~~~~~~~~\nTotal Models:${models}`);
    console.log(`\n> Model Loading  ->   Success:${modelsLoadingOk}   Fail:${modelsLoadingFail.length}`);
    if(modelsLoadingFail.length > 0){
        console.log(modelsLoadingFail);
    }
    console.log(`\n> Model Relation ->   Fail:${modelsRelationFail.length}`);
    if(modelsRelationFail.length > 0){
        console.log(modelsRelationFail);
    }
}



async function setupModels(database){  

    for(index in database.models){
        try{
            database.models[index].init(database.sequelize);
            modelsLoadingOk += 1;
        }
        catch(err){
            modelsLoadingFail.push(database.models[index]);
        }
    }

    for(index in database.models){
        try{
            database.models[index].relations(database.models);
        }
        catch(err){
              modelsRelationFail.push(err.message);
        }
    }


    details(Object.keys(database.models).length);
}


async function loadModels(database){
    let directoryPath = path.join(__dirname, '/../models');
    
    fs.readdirSync(directoryPath).forEach(file =>{
        try{
            model = require(directoryPath + '/' + file);  
            database.models[model.name] = model;
            console.log(`[OK] Load File ${file}`);
        }catch(err){
            console.log(`[FAIL] Load File ${file}`);
        }

    }) ;
}






module.exports =  async (database) =>  await loadModels(database)
                                        .then(
                                        await setupModels(database));