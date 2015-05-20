'use strict';

var Eventos = require('../config/db.js').Eventos;
var Ventas = require('../config/db.js').Ventas;
var transporter;
exports.init = function(transp) {
    transporter = transp;
    return exports;
}

//nodemailer
var mailOptions = {
    from: 'Boletos <sivemo@mail.ee>', // sender address
};
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
  
exports.eventoVendido = function (req, res) {
  console.log("evento");
  console.log(req.query);
  console.log(req.body);
  if(req.body.cliente) {
  mailOptions.to  = req.body.cliente.correo;
  mailOptions.subject = "tus boletos de " + req.body.nombreEvento;
  mailOptions.html = "<h1>"+req.body.nombreEvento+'</h1>' + "<p>"+req.body.cliente.nombre+":</p>"+ "<p> Compraste: " + req.query.numBoletos + "Boletos, Con un total de: $"+req.body.total+"</p>" + "<p>Presenta este correo para entrar a tu evento</p>"; 
  }
  Eventos.query('UPDATE agenda_eventos SET BOLETOS=BOLETOS-'+req.query.numBoletos+ ' WHERE ID='+req.query.id, function(err, result){
    if (err) {
      console.log('ERROR: ' + err.code);
       res.status(500).send({success: false, message: "hubo un problema Por favor Intentalo más tarde"});
      
    } else {
      res.send({success: true, message: result});
      transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
    }
  });
}

exports.generarVenta = function (req, res) {
  console.log(req.body);
  var venta = new Ventas(req.body);
  
  venta.save(function (err) {
    if (err) {
      console.log(err);
       res.status(500).send({success: false, message: "hubo un problema Por favor Intentalo más tarde"});
    } else {
      res.json({success: true, message: "Boleto(s) Vendido(s)"});
    }
  });
}

exports.getFechas = function (req, res) {
  console.log("hola");
  var query = Ventas.find({}, 'fecha_venta');
  query.exec(function(err, fechas) {
    console.log(fechas);
    res.json(fechas);
  })
}
