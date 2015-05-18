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
          console.log(data[0]);
          vm.eventos = data;
        });
      init();
      
      function init() {
      }
    }
})();