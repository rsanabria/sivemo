(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['dataService','logger'];

    function MainCtrl(dataService, logger) {
      var vm = this;
      init();
      
      function init() {
        return getHola().then(function registroMensaje(){
          logger.info('Mensaje Recibido');
        });
      }
      
      function getHola() {
        return  dataService.getHola().then(function (mensaje) {
          vm.hola = {mensaje : mensaje};
          return vm.hola;
        });
      }

        

    }
})();