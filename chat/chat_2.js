var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('chat_2.html');
});

users = [];
io.on('connection', function(socket) {
   console.log('A user connected');
   
   socket.on('subscribe', function(room,data) {
        console.log('joining room', room);
        socket.emit('userSet', {username: data});
        socket.join(room);
        
    });

    socket.on('send message', function(data) {
        console.log('sending room post', data.room);
        socket.broadcast.to(data.room).emit('conversation private post', {
            message: data.message,
            user:data.user
        });
    });

});

http.listen(3002, function() {
   console.log('listening on localhost:3000');
});