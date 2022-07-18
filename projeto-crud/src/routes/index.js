const router = require('express').Router();

const CustomersController = require('../controllers/customersController');
const IndexController = require('../controllers/indexController');

//* rotas
router.get('/', IndexController.index);
router.get('/register', CustomersController.index);
router.post('/register/add', CustomersController.add);
router.get('/list', CustomersController.listUsers);
router.get('/edit', CustomersController.formEdit);
router.post('/edit/:id', CustomersController.edit);
router.get('/remove/:id', CustomersController.remove);


module.exports = router;