var socket = io();

socket.on('chat.broadcast', function(message){
    console.log(message);
});

socket.on('chat.message', function(message){
    console.log(message);
});
