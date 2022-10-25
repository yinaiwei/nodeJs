const http = require('http');

const server = http.createServer(function(request,reponse){
    reponse.writeHead(200, {'Content-Type': 'text/plain'});
    reponse.end("Hello,world\n");
});

server.listen(8888);