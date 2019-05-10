var http = require('http');  
var userCount = 0;  
var server = http.createServer(function (req, res) {   

if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello! / ');
    res.end();
}

if (req.url == '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello! /test ');
    res.end();
}
    
    
if (req.url != '/favicon.ico') 
{
    userCount++;  
     console.log('We have had ' + userCount + ' visits!\n');  
}
  
});  
server.listen(9090);  
console.log('server running...')

