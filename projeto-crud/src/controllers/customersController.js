const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/password');

const defaultTitle = 'CAdastro de Clientes'

function index(request, response){
    response.render('register', {
        title: defaultTitle,
    });
}

async function add(request, response){
    const {
        name,
        age,
        email,
        password,
    } = request.body;

    const passwordCryto = await crypto(password);

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCryto,
    });

    register.save();

    response.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}

async function listUsers(request, response){

    const users = await CustomersModel.find()

    response.render('listUsers', {
        title: 'Listagem de Usuários',
        users,
    }); 

}

async function formEdit(request, response){
    const {id} = request.query;

    const user = await CustomersModel.findById(id);

    response.render('editUsers',{
        title:'Editar usuário',
        user,
    })
}

async function edit(request, response){
    const {
        name,
        age,
        email,
    } = request.body;

    const {id} = request.params;

    const user = await CustomersModel.findById(id);

    user.name = name;
    user.age = age;
    user.email = email;

    user.save();

    response.render('editUsers', {
        title: 'Editar Usuário',
        user,
        message: 'Usuário alterado com sucesso',
    });

}

async function remove(request, response){
    const {id} = request.params;

    const remove = await CustomersModel.deleteOne({_id: id});

    if(remove.ok){
        response.render('listUsers', {
            title: 'Listagem de Usuários',
            users,
        });
    }
}



module.exports = {
    add,
    index,
    listUsers,
    formEdit,
    edit,
    remove,
};