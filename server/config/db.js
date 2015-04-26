var mongoose = require('mongoose'),
    env      = process.env.NODE_ENV || 'dev'
    config   = require('./env.js')[env];


//Conexión
var db = mongoose.connect(config.db, function(err){
    if(err){
        console.log('\x1b[31m', 'No se pudo conectar a MongoDB!');
        console.log(err);
    }
    else {
        console.log("Conexión a MongoDB!");
    }
});

//SCHEMAS

//  var schemaName = require('../server/models/modelName.js)
var usuarioSchema = require('../models/usuario.js');
//Modelos

// exports.modelName = db.model('colectionName', schemaName)
exports.Usuario = db.model('Usuario', usuarioSchema);
