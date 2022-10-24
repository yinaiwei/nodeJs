const http = require('http')

//返回一个新建的 http.Server 实例。
const server = http.createServer(function(request,reponse){
    reponse.writeHead(200, {'Content-Type': 'text/plain'});
    reponse.end("Hello,world\n")
})

server.listen(8888)