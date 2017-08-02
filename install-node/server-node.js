/**
 * Created by richardcj on 2/8/17.
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'});
    response.end('Wake up, Eliot...\n');
});

//run server

var port = 3000;

server.listen(port, 'localhost');

console.log(`Server Run localhost:${port}`);