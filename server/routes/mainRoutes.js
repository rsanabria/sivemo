'use strict';

var main = require('../controllers/mainController');

module.exports = function (app){

	app.route('/holaMundo')
		.get(main.holaMundo);
};
