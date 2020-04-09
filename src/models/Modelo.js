const { Model, DataTypes} = require('sequelize')

// É NECESSÁRIO EXTENDER A MODELD DO SEQUELIZE
class MODELO extends Model{

    //ESSE MÉTODO É DO PROPRIO SEQUELIZE, É NECESSÁRIO EM TODOS MODELS PARA O MAPEAMENTO
    static init(sequelize){
        super.init({
            // PARA QUE O SEQUELIZE REALIZE O MAPEAMENTO, DESCREVE A TABELA AQUI
        });
    }


    // MÉTODO AGRUPADOR DOS RELACIONAMENTOS DA CLASSE
    static relations( models){
      // DESCREVA AS RELAÇÕES DESTA CLASSE AQUI, VOCE PODE USAR O NOME OU THIS
      //EX:   modelo.hasOne(...)        ou this.hasOne(...)
    }




}

module.exports = MODELO;