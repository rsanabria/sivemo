(function () {
    'use strict';

    angular
        .module('app.ventas')
        .controller('EventosCtrl', EventosCtrl);

    EventosCtrl.$inject = ['dataService','logger'];

    function EventosCtrl(dataService, logger) {
      var vm = this;
        vm.listaTodo = [];
        vm.agregarTodo = agregarTodo;
        vm.eliminarTodo = eliminarTodo;
        vm.eventos = [{"nombre" : "Rolling Stones", "lugares": 15},
                     {"nombre" : "The Killers", "lugares": 150},
                      {"nombre" : "Opera", "lugares": 1005}
                     ]
      init();
      
      function init() {
      }
        
    function agregarTodo (todo) {
        vm.listaTodo.push(todo);
        vm.todo = "";
    
    }
        
    function eliminarTodo ( todo) {
        var indice = vm.listaTodo.indexOf(todo);
        vm.listaTodo.splice(indice,1);
    }
      

        

    }
})();