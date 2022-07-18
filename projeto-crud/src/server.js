const express = require('express');
const path = require('path');

const routes = require('./routes');
const db = require('./database');

const app = express();


//* Conexão com o banco de dados
db.connect();

//* configurando EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// *definindo os arquivos estáticos
// ! No caso da utilização de um template engine não se faz necessário definir os arquivos estáticos
/*const staticForder = path.join(__dirname, 'views');
const expressStatic = express.static(staticForder);
app.use(expressStatic);*/

// *definindo os arquivos públicos
const publicForder = path.join(__dirname, 'public');
const expressPublic = express.static(publicForder);
app.use(expressPublic);

//! habilita o server a receber o BODY de um POST
app.use(express.urlencoded({extended: true}));

//* definindo as rotas
app.use('/', routes);

// *erro 404
app.use((req, res) => {
    res.send("ERRO 404: PAGE NOT FOUND!");
})

// *executando o servidor
const port  = process.env.PORT||8080;
app.listen(port, () => console.log('Server is listening on port ' + port));