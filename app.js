var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data, cb) {
    console.log(data);
    cb('confirmed message');
  });
  
   socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});





