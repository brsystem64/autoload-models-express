const { Model, DataTypes} = require('sequelize')

class Cidade extends Model{
    static init(sequelize){
        super.init({
           id:{
               field: 'id_cidade',
               type: DataTypes.INTEGER,
               primaryKey:true,
               autoIncrement:true
           },
           nome: DataTypes.STRING
        },{
            sequelize, tableName:"tb_cidade"
        });
    }

    static relations(models){
        try{
            this.belongsTo(models.Estado, {foreignKey:'id_estado', as: 'Estado'});
        
        }catch(err){
            throw new Error(err);
        }

    }
   
}

module.exports = Cidade;