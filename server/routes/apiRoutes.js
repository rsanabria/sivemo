'use strict';
var express = require('express');
var api = require('../controllers/apiController');
//para probar
var Usuario = require('../config/db.js').Usuario;
//
var apiRouter = express.Router();
module.exports = function (app, transporter){

   api.init(transporter);
	apiRouter
  
    .get('/getEventos', api.getEventos)
    .get('/getEvento/:id',api.getEvento)
    .post('/eventoVendido', api.eventoVendido)
    .post('/generarVenta', api.generarVenta)
    .get('/getFechas', api.getFechas)
    .get('/reporte', api.reporte)

    
    app.use('/api', apiRouter);
};
