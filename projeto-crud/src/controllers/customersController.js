const CustomersModel = require('../models/customers')

function add(request, response){
    const {
        name,
        age,
        email,
        password,
    } = request.body;

    const register = new CustomersModel({
        name,
        age,
        email,
        password,
    });

    register.save();

    response.send('Cadastro realizado');
}

module.exports = {
    add
};