'use strict';

var Eventos = require('../config/db.js').Eventos;

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