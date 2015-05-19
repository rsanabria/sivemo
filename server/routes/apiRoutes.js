'use strict';
var express = require('express');
var api = require('../controllers/apiController');
//para probar
var Usuario = require('../config/db.js').Usuario;
//
var apiRouter = express.Router();
module.exports = function (app){

	apiRouter
  
    .get('/getEventos', api.getEventos)
    .get('/getEvento/:id',api.getEvento)
    .get('/updateEvento', api.updateEvento)
    .post('/generarVenta', api.generarVenta);

    
    app.use('/api', apiRouter);
};
