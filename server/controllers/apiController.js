'use strict';

var Eventos = require('../config/db.js').Eventos;
var Ventas = require('../config/db.js').Ventas;

exports.holaMundo = function (req, res) {
    
    res.send("Hola Angular!");
    
};

exports.getEventos = function (req, res) {
  
  Eventos.query('SELECT * FROM agenda_eventos', function (err, rows) {
  if (err) {
    console.log(' no se pudo conectar a MYSQL!');
    res.json({success: false, message: err.code});
    
  } else {
    res.json(rows);

  }
});
  
}

exports.getEvento = function (req, res) {
  Eventos.query('SELECT * FROM agenda_eventos WHERE ID='+req.params.id, function(err, row) {
    if (err) {
          console.log(' no se pudo conectar a MYSQL!');
    res.json({success: false, message: err.code});
    } else {
      res.json(row);
    }
  });
}
  
exports.updateEvento = function (req, res) {
  Eventos.query('UPDATE agenda_eventos SET BOLETOS=BOLETOS-'+req.query.numBoletos+ ' WHERE ID='+req.query.id, function(err, result){
    if (err) {
      console.log('ERROR: ' + err.code);
      res.json({success: false, message: err.code});
      
    } else {
      console.log(result);
      res.send({success: true, message: result});
    }
  });
}

exports.generarVenta = function (req, res) {
  console.log(req.body);
  var venta = new Ventas(req.body);
  
  venta.save(function (err) {
    if (err) {
      console.log(err);
      res.json({success : false, message: err});
    } else {
      res.json({success: true, message: "venta guardada"});
    }
  });
}
