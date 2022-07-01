const express = require('express');
const { request } = require('http');
const fs = require('fs');
const path = require('path');


const app = express();

//* configurando EJS
app.set('view engine', 'ejs');

// *MVC -> MODEL VIEW CONTROLLER

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


// *rotas
app.get('/', (request, response) =>{
     // ! Também, com a utilização do template engine, se torna desnecessário indicar em que pasta está o arquivo estático
    //response.render('views/index');
    response.render('index', {
        title: 'Home'
    });
});

app.get('/posts', (req, res) => {
    res.render('posts', {

        title: 'Posts',
        posts: [
            {
                title: 'Novidades do mundo da tecnologia',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, hic possimus accusantium accusamus non, magnam voluptates reprehenderit officia aliquam ut. Eius, sequi soluta quibusdam hic commodi tempora repellendus modi?',
                stars: 3
            },
            {
                title: 'Criando um servidor com NodeJS',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, hic possimus accusantium accusamus non, magnam voluptates reprehenderit officia aliquam ut. Eius, sequi soluta quibusdam hic commodi tempora repellendus modi?',
                
            },
            {
                title: 'JavaScrip é a linguagem mais usada no mundo',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis, hic possimus accusantium accusamus non, magnam voluptates reprehenderit officia aliquam ut. Eius, sequi soluta quibusdam hic commodi tempora repellendus modi?',
                stars: 5
            }
        ]
    });  
});

app.get('/cadastro-posts', (request, response) => {
    const {c} = request.query
    response.render('cadastro-posts', {
        title: 'Cadastrar Post',
        cadastrado: c,
    });
});

app.post('/salvar-post', (request, response) => {
    const {titulo, texto} = request.body;

    const data = fs.readFileSync('./store/posts.json');
    const posts = JSON.parse(data);

    posts.push({
        titulo: titulo,
        texto: texto,
    })

    const postsToString = JSON.stringify(posts);
    fs.writeFileSync('./store/posts.json', postsToString);

    console.log('ok');
    response.redirect('cadastro-posts?c=1');
});

// *erro 404
app.use((req, res) => {
    res.send("ERRO 404: PAGE NOT FOUND!");
})

// *executando o servidor
const port  = process.env.PORT||8080;
app.listen(port, () => console.log('Server is listening on port ' + port));