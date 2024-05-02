
let http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url=='/'){
        response.write(<h1> Welcome</h1>);
    }
    else if(request.url=='/home'){
        response.write(<h1> Welcome Home Page</h1>);
    }
    response.end();
}).listen(9090);