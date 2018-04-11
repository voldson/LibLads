var server = require('http'); // http is a module

// what is the url made up of?
// This is the maximum information that a domain can contain
// [protocol]://[subdoman].[websiteName].[tld]:[port]/[path]?[query]=[string]#[hash]

server.createServer(engine = function(req, resp) {
    resp.writeHead(200, {'Content-Type' : 'text/plain', 'Custom-Header': 'Test'});
    resp.end('Hello World');
}).listen(1058);