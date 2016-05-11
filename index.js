"use strict";

var config = require('./config/app.json')
    , express = require('express')
    , web = express()
    , http = require('http').Server(web)
    , logger = require('log4js')
    , App = require('./app/App.js')
    , ChatServer = require('./app/ChatServer.js')
    , log
    , app;

web.use(express.static('public'));

logger.loadAppender('file');
logger.addAppender(logger.appenders.file(config.logs.file), 'App');
log = logger.getLogger('App');
log.setLevel(config.logs.level);

app = new App(config, log);
app.addModule(new ChatServer(app, http));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var TestBroadcast = require('./modules/TestBroadcast.js');

app.addModule(new TestBroadcast(app));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.init();
http.listen(config.network.port);
