const { Model, DataTypes} = require('sequelize')

class Estado extends Model{
    static init(sequelize){
        super.init({
           id:{
               field: 'id_estado',
               type: DataTypes.TINYINT,
               primaryKey:true,
               autoIncrement:true
           },
           nome: DataTypes.STRING,
           UF: DataTypes.STRING
        },{
            sequelize, tableName:"tb_estado"
        });
    }

    static relations( models){
        Estado.hasMany(models.Cidade, {foreignKey:'id_estado', as:'Estado'});

    }




}

module.exports = Estado;