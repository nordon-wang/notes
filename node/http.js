const http = require('http');

http.createServer((rq,rs) => {
    rs.writeHead(200,{
        'Content-Type':'text/html'
    });

    rs.write('<h1>http-server</h1>');
    rs.end('http server');
}).listen(8989);

console.log('http-server begin');
