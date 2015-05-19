(function () {
    'use strict';

    angular
        .module('app.ventas')
        .controller('EventosCtrl', EventosCtrl);

    EventosCtrl.$inject = ['dataService','logger'];

    function EventosCtrl(dataService, logger) {
      var vm = this;
        vm.listaTodo = [];
      vm.eventos = [];
        dataService.getEventos().then(function(data){
          vm.eventos = data;
        });
      init();
      
      function init() {
      }
    }
})();