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
      init();
      
      function init() {
      }
        
    function agregarTodo (todo) {
        vm.listaTodo.push(todo);
        vm.todo = "";
        
    
    }
      

        

    }
})();