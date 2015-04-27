var express = require('express');
var auth = require('../controllers/authController.js');
var authRoutes = express.Router();

module.exports = function (app) {
    auth.init(app);
    
    authRoutes
        .use('/secure',auth.middleware)
        .get('/secure/', auth.isLogged)
        .get('/secure/usuarios', auth.usuarios)
        .post('/authenticate',auth.authenticate);
    app.use('/auth', authRoutes);
    
    

}


