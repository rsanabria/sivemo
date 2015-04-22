(function () {
    'use strict';

    angular
        .module('app.todo')
        .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['dataService','logger'];

    function TodoCtrl(dataService, logger) {
      var vm = this;
        vm.listaTodo = [];
        vm.agregarTodo = agregarTodo;
        vm.eliminarTodo = eliminarTodo;
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