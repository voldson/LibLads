var http = require('http'); // http is a module
var server = http.createServer(engine);

// Everytime a request is received, this function is called
server.listen(1058, function() {
    console.log('Server received a request');
});

function engine(req, resp) {
    // console.log(resp);
    resp.writeHead(200, {'Content-Type' : 'text/plain', 'Custom-Header': 'Test'});
    resp.end('Hello World. Request from page: ' + req.url);
}