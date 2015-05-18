var path        = require('path'),
    roothPath   = path.normalize(__dirname + '/../../');

module.exports = {
    dev : {
        db : 'mongodb://admin:sivemo14@ds061741.mongolab.com:61741/sivemo',
        mysql : {
        host : 'db4free.net',
        user : 'siadev1',
        password : 'siadev1',
        database : 'siadev1',
        charset : 'utf8_general_ci'
        },
        roothPath : roothPath,
        secret : 'sivemo14031992',
        port: process.env.PORT || 8080
    }

}
