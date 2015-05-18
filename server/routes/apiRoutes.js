'use strict';
var express = require('express');
var api = require('../controllers/apiController');
//para probar
var Usuario = require('../config/db.js').Usuario;
//
var apiRouter = express.Router();
module.exports = function (app){

	apiRouter
  
    .get('/getEventos', api.getEventos);


    
    app.use('/api', apiRouter);
};
