(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['dataService','authService', 'logger'];

    function MainCtrl(dataService, authService, logger ) {
      var vm = this;
      vm.formData = {}
    vm.sivemo = "Hola Sivemo";
      vm.logIn = logIn;
      init();
      
      function init() {
      }
      
      function logIn() {
        authService.login(vm.formData);
      }
        

    }
})();