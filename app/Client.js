"use strict";

class Client {
    constructor(app, socket) {
        var self = this;

        self.app = app;
        self.socket = socket;

        self.init();
    }

    init() {
        var self = this;

        self.sendMessageFromClient = (message) => {
            self.app.emit('chat.message', message);
        };

        self.sendMessageToClient = (message) => {
            self.socket.emit('chat.message', message);
        };

        self.socket.on('chat.message', self.sendMessageFromClient);
        self.app.on('chat.message', self.sendMessageToClient);
    }

    destroy() {
        var self = this;

        self.app.removeListener('chat.message', self.sendMessageToClient);
        self.socket.removeListener('chat.message', self.sendMessageFromClient);
    }
}

module.exports = Client;
