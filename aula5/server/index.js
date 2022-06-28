const http = require('http');
const fs = require("fs");


const server = http.createServer(function(request, response){
    console.log(request.url)

    if(request.url === "/"){
        fs.readFile("../client/index.html", function(error, content){
            response.end(content);
        });
    }else{
        response.end("ERROR: 404: page not found");
    }
    
})

server.listen(8080);
console.log('Servidor rodando na porta 8080');