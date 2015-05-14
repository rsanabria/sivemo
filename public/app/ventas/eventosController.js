(function () {
    'use strict';

    angular
        .module('app.ventas')
        .controller('EventosCtrl', EventosCtrl);

    EventosCtrl.$inject = ['dataService','logger'];

    function EventosCtrl(dataService, logger) {
      var vm = this;
        vm.listaTodo = [];
        vm.eventos = [{"nombre" : "Rolling Stones", "lugares": 15, "_id" : "5467A", "precio": 500},
                     {"nombre" : "The Killers", "lugares": 150, "_id" : "5467B", "precio": 1500 },
                      {"nombre" : "Opera", "lugares": 1005, "_id" : "5467AC", "precio": 200}
                     ]
      init();
      
      function init() {
      }
    }
})();