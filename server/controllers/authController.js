'use strict';
var jwt = require('jsonwebtoken'),
    app,
Usuario = require('../config/db.js').Usuario;

exports.init = function(expressApp) {
    app = expressApp;
    return exports;
}
exports.isLogged = function (req, res) {
    res.json({success: true, usuario: req.decoded.usuario, message: 'Hola' + req.decoded.usuario});
    
};
exports.usuarios = function (req, res) {
    Usuario.find({}, function (err, usuarios) {
        if (err) {
            console.log(err);
        }
        res.json(usuarios);
    });
};
exports.authenticate = function (req, res) {
    var query =  Usuario.findOne({ usuario: req.body.usuario});
    query.exec(revisarAuth);
    
    function revisarAuth(err, user) {
        if (err) {
            throw err;
        }
        if (!user) {
            res.json({success: false, message: 'Usuario no encontrado'});
        } else if (user) {
            //revisar contraseña
            if ( user.password != req.body.password) {
                res.json({success: false, message: 'Error de Contraseña'});
            } else {
                // Creacion del token
                var token = jwt.sign({usuario : user.usuario, nombre: user.nombre}, "sivemo"/*app.get('superSecret')*/, {expiresInMinutes: 1});
                res.json({
                    success: true,
                    message: "Bienvenido "+ user.nombre,
                    token : token
                })
                
            }
        }
    }
}
exports.signUp = function (req, res) {
  var usuario = new Usuario(req.body);
  usuario.save(function (err) {
    if (err) {
      res.json({success : false, message : "No se pudo crear el usuario"});
    } else {
      res.send(usuario);
    }
  })
}

exports.middleware = function(req, res, next) {
    var token = req.body.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, "sivemo"/*app.get('superSecret')*/, function(err, decoded) {
           if(err) {
                res.json({success : false, message : "Inicia Sesión para continuar"});
           } else {
               req.decoded = decoded;
               next();
           }
            
        });
    } else {
        return res.status(403).send({
            success : false,
            message : "Inicia Sesión para continuar"
            
        })
    }
}