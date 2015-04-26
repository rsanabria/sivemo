'use strict';

var express         = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    morgan          = require('morgan'),
    jsw             = require('jsonwebtoken'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    env             = process.env.NODE_ENV || 'dev',
    config          = require('./env.js')[env],
    db              = require('./db.js');


module.exports = function () {
    
    //Initialize express app
    var app = express();
    
    //Configuration
    if (process.env.NODE_ENV === 'dev') {
        app.use(morgan('dev'));
    }
    app.set('superSecret', config.secret);
    app.use('/', express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    //jwt

    require('../routes/mainRoutes.js')(app);
    require('../routes/authRoutes.js')(app);

    return app;

}