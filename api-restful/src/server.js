const express = require('express');
//const path = require('path');

const routes = require('./routes/routes');
const db = require('./database/db');

const app = express();


//* Conexão com o banco de dados
db.connect();

//* habilita server para receber dados no formato JSON
app.use(express.json());

//* definindo as rotas
app.use('/api', routes);

// *executando o servidor
const port  = process.env.PORT||8080;
app.listen(port, () => console.log('Server is listening on port ' + port));