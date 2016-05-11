"use strict";

class Message {
    constructor(data) {
        this.type = data.type;
        this.room = data.room;
        this.sender = data.sender;
        this.text = data.text;
        this.time = new Date().getTime() / 1000;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Message;
