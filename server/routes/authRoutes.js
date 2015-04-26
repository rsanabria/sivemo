var express = require('express');
var Usuario = require('../config/db.js').Usuario;
var authRoutes = express.Router();

module.exports = function (app) {
    
    authRoutes
        .get('/', function(req,res) {
            res.json( {message: 'Probando la autenticacion'});
    })
        .get('/usuarios', function(req, res) {
            Usuario.find({}, function (err, usuarios) {
                if (err)
                    console.log(err);
                res.json(usuarios);
            });
        });
    app.use('/auth', authRoutes);
}