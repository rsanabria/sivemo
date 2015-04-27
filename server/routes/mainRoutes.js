'use strict';
var express = require('express');
var main = require('../controllers/mainController');
//para probar
var Usuario = require('../config/db.js').Usuario;
//
var mainRouter = express.Router();
module.exports = function (app){

	mainRouter
        .get('/holaMundo',main.holaMundo)
        .get('/setup', function(req, res) {
        var usuario = new Usuario( {
            nombre : "Rodrigo Sanabria",
            usuario : 'rodrigosanabria',
            password : "1403"
        });
        usuario.save( function(err) {
            if (err) throw err;
            
            console.log("usuario guardado exitosamente");
            res.json({success: true});
        });
        
    });

    
    app.use('/', mainRouter);
};
