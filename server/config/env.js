var path        = require('path'),
    roothPath   = path.normalize(__dirname + '/../../');

module.exports = {
    dev : {
        db : 'mongodb://admin:sivemo14@ds061741.mongolab.com:61741/sivemo',
        roothPath : roothPath,
        secret : 'sivemo14031992',
        port: process.env.PORT || 8080
    }

}
