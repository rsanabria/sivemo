(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['dataService','authService', 'logger'];

    function MainCtrl(dataService, authService, logger ) {
      var vm = this;
    vm.sivemo = "Hola Sivemo";
      vm.logIn = logIn;
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
      function logIn() {
        authService.isLogged();
      }
        

    }
})();