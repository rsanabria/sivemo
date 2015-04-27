var mongoose = require('mongoose');


module.exports = new mongoose.Schema( {
    nombre: String,
    usuario: String,
    password : String
});