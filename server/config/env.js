var path        = require('path'),
    roothPath   = path.normalize(__dirname + '/../../');

module.exports = {
    dev : {
        db : 'mongodb://localhost/mean',
        roothPath : roothPath,
        port: process.env.PORT || 8080
    }

}
