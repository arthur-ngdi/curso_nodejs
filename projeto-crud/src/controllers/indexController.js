function index(request, response){
    // ! Também, com a utilização do template engine, se torna desnecessário indicar em que pasta está o arquivo estático
   //response.render('views/index');
   response.render('index', {
       title: 'Home'
   });
}

module.exports = {
    index,
}