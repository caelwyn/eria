"use strict";

var util = require('util')
    , EventEmitter  = require('events');

class App {
    constructor(config, log) {
        this.modules = [];
        this.config = config;
        this.log = log;
    }

    addModule(module) {
        this.modules.push(module);
    }

    init() {
        this.log.info('App init');

        this.modules.forEach((module) => {
            module.init();
        });
    }
}

util.inherits(App, EventEmitter);
module.exports = App;
