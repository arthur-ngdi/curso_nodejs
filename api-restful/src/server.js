const express = require('express');
//const path = require('path');

const routes = require('./routes/routes');
//const db = require('./database');

const app = express();


//* Conexão com o banco de dados
//db.connect();

//! habilita o server a receber o BODY de um POST
app.use(express.urlencoded({extended: true}));

//* definindo as rotas
app.use('/api', routes);

// *executando o servidor
const port  = process.env.PORT||8080;
app.listen(port, () => console.log('Server is listening on port ' + port));