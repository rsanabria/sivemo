'use strict';

var express         = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    morgan          = require('morgan'),
    db              = require('./db.js');


module.exports = function () {
    
    //Initialize express app
    var app = express();
    
    //Configuration
    if (process.env.NODE_ENV === 'dev') {
        app.use(morgan('dev'));
    }
    //app.use(express.static('../../public'));
    app.use('/', express.static('./public'));
    app.use(bodyParser.json());
    app.use(methodOverride());


    require('../routes/mainRoutes.js')(app);

    return app;

}