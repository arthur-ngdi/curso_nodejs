const router = require('express').Router();

const CustomersController = require('../controllers/customersController');

//* rotas
router.get('/', (request, response) =>{
    // ! Também, com a utilização do template engine, se torna desnecessário indicar em que pasta está o arquivo estático
   //response.render('views/index');
   response.render('index', {
       title: 'Home'
   });
});

router.get('/register', (request, response) =>{
    response.render('register', {
        title: 'Cadastro de Clientes',
    })
});

router.post('/register/add', CustomersController.add);

module.exports = router;