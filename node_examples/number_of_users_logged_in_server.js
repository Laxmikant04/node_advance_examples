var app = require('express')();
var http = require('http').Server(app);
var count =0;
var io= require('socket.io')(http);

http.listen(9090, function() {
    console.log('listening on localhost:9090');
 });


io.sockets.on('connection',function(socket){
    count++;
    console.log('Number of users - '+count)
    
    socket.on('disconnect',function () {
        count --;
        console.log('Number of users - '+count)
    })


});

app.get('/', function(req, res) {
    res.sendfile('number_of_users_logged_in_client.html');
 });

 app.get('/test', function(req, res) {
    res.send('sample-test');
 });

