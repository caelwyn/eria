"use strict";

var SocketServer = require('socket.io')
    , Client = require('./Client.js');

class ChatServer {
    constructor(app, http) {
        var self = this;

        self.io = SocketServer(http);
        self.app = app;
        self.clients = {};

        self.io.on('connection', (socket) => {
            var client = new Client(self.app, socket);

            self.app.log.info(`ChatServer :: incoming connection ${socket.id}`);

            socket.on('disconnect', () => {
                self.app.log.info(`Client ${socket.id} disconnected`);
                client.destroy();
            });

        });
    }

    initApp() {
        var self = this;

        self.sendBroadcast = (message) => {
            self.io.emit('chat.broadcast', message);
        };
        self.app.on('chat.broadcast', self.sendBroadcast);
    }

    init() {
        var self = this;

        self.app.log.info('ChatServer init');

        self.initApp();
    }
}

module.exports = ChatServer;
