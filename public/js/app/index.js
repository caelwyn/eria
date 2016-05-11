var socket = io();

socket.on('chat.broadcast', function(message){
    console.log(message);
});

socket.on('chat.message', function(message){
    console.log(message);
});


setInterval(function() {
    socket.emit('chat.message', {'message': 'test'});
}, 1000);