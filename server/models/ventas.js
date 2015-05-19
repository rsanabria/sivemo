var mongoose = require('mongoose');
var Usuario  = require('../config/db.js').Usuario;

module.exports = new mongoose.Schema( {
    vendedor:  {type: mongoose.Schema.ObjectId, ref: 'Usuario'},
    fecha_venta : Date,
    num_boletos : Number,
    total : Number
});