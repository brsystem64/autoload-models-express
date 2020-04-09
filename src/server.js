const express = require('express')
const app = express();
const Cidade = require('./models/Cidade');

const _PORTA = 3000;


// EXEMPLO DE ROTA COM CONSULTA NO BANCO
app.get('/',  async (req, res) => 
        res.json(
            await Cidade.findByPk(1,{
                include: {association:'Estado'}}
            )
        )
    )
;





app.listen(3000, () => console.log(`Servidor ouvindo na porta ${_PORTA}`));