const express = require('express');
const path = require('path');
const app = express();

// *MVC -> MODEL VIEW CONTROLLER

// *definindo os arquivos estáticos
const staticForder = path.join(__dirname, 'views');
const expressStatic = express.static(staticForder);
app.use(expressStatic);

// *definindo os arquivos públicos
const publicForder = path.join(__dirname, 'public');
const expressPublic = express.static(publicForder);
app.use(expressPublic);


// *rotas
app.get('/', (request, response) =>{
    response.render('views/index');
});

app.get('/sobre', (req, res) => {
    res.send('Sobre Nós');  
})

// *erro 404
app.use((req, res) => {
    res.send("ERRO 404: PAGE NOT FOUND!");
})

// *executando o servidor
const port  = process.env.PORT||8080;
app.listen(port, () => console.log('Server is listening on port ' + port));