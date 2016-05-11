"use strict";

var Message = require('../app/Message.js');

class TestBroadcast {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.app.log.info('TestBroadcast init');
        setInterval(this.sendBroadcast.bind(this), 1000);
    }

    sendBroadcast() {
        var message = new Message({
            type: 0,
            room: 0,
            sender: 'Test Bot',
            text: 'Test message',
        });

        this.app.log.debug('TestBroadcast :: send test message');
        this.app.emit('chat.broadcast', message);
    }
}

module.exports = TestBroadcast;
