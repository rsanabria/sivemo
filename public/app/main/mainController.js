(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['dataService'];

    function MainCtrl(dataService) {
        var vm = this;
        dataService.getHola().then(function (mensaje) {
          vm.hola = {mensaje : mensaje.data};
        })
        

    }
})();