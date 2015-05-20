var mongoose = require('mongoose'),
    mysql    = require('mysql'),
    env      = process.env.NODE_ENV || 'dev',
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

//MYSQL
var conMysql = mysql.createConnection(config.mysql); 

/*  conMysql.query('SELECT * FROM agenda_eventos', function (err, rows) {
  if (err) {
    console.log(' no se pudo conectar a MYSQL!');
    console.log(err.code);
    
  } else {
    console.log("Conexión a Mysql");
    console.log(rows[0]);
  }
});*/
//conMysql.query

//SCHEMAS

//  var schemaName = require('../server/models/modelName.js)
var usuarioSchema = require('../models/usuario.js');
var ventasSchema = require('../models/ventas.js');
//Modelos

// exports.modelName = db.model('colectionName', schemaName)
exports.Usuario = db.model('Usuario', usuarioSchema);
exports.Eventos = conMysql;
exports.Ventas = db.model('Ventas',ventasSchema);