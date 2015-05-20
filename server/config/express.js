'use strict';

var express         = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    morgan          = require('morgan'),
    jsw             = require('jsonwebtoken'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    nodemailer      = require('nodemailer'),
    wellknown       = require('nodemailer-wellknown'),
    env             = process.env.NODE_ENV || 'dev',
    config          = require('./env.js')[env],
    db              = require('./db.js');


module.exports = function () {
    //configuracion de Correo
    //var config = wellknown('Gmail');
    var transporter = nodemailer.createTransport(config.email);
    //Initialize express app
    var app = express();
    
    //Configuration
    if (process.env.NODE_ENV === 'dev') {
        app.use(morgan('dev'));
    }
    app.set('superSecret', config.secret);
    app.use('/', express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    //jwt

    require('../routes/apiRoutes.js')(app, transporter);
    require('../routes/authRoutes.js')(app);
    
    app.route('/*')
     .get( function html5 (req, res) {
      res.sendFile('index.html', {'root' : './public'});
    });

    return app;

}