'use strict';

var env = process.env.NODE_ENV || 'dev',
    config = require('./server/config/env')[env];




var app = require('./server/config/express')();

app.listen(config.port);

console.log("App esuchando en el puerto " + config.port);
