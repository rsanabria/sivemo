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
      vm.logOut = logOut;
      vm.isLogged = isLogged;
      vm.isAdmin = isAdmin;
      init();
      
      function init() {
        authService.checkLogIn();
        //isLogged();
      }
      
      function logIn() {
        authService.login(vm.formData);
      }
        function logOut() {
            authService.logOut();
            
        }
      function isLogged() {
        //authService.isLogged();
       return authService.checkLogIn();
      }
      function isAdmin() {
        return authService.checkIsAdmin();
      }
        

    }
})();