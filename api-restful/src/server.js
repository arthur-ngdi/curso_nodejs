const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');
const db = require('./database/db');

const app = express();

//* Conexão com o banco de dados
db.connect();

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br'
]

//* habilita CORS
app.use(cors({
    origin: function(origin, callback){
        let allowed = true;

        //mobile app
        if(!origin) allowed = true;

        if(!allowedOrigins.includes(origin)) allowed = false;

        callback(null, allowed);
    }


}));

//* habilita server para receber dados no formato JSON
app.use(express.json());

//* definindo as rotas
app.use('/api', routes);

// *executando o servidor
const port  = process.env.PORT||8080;
app.listen(port, () => console.log('Server is listening on port ' + port));