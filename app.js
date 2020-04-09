
/* CARREGA TODAS DEPENDENCIAS DO PROJETO

    Foi criado um método para que a ordem do carregamento das dependencias seja respeitado.
    Caso seja necessário adicionar mais dependencias, como dotenv, morgan, basta adicionar
    no método loadDependencies.
    
*/

async function loadDependencies(){
    await require('./src/database/database');
    require('./src/server');
}

loadDependencies();