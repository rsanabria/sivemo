(function () {
    'use strict';

    angular
        .module('app.ventas')
        .controller('VentasCtrl', VentasCtrl);

    VentasCtrl.$inject = ['$scope', 'dataService','logger'];

    function VentasCtrl($scope,dataService, logger) {
      var vm = this;
      var eventoBD = {"nombre" : "Rolling Stones","lugaresDisponibles": 50, "precio":500};
      vm.formData = {};
      vm.formData.numBoletos = 0;
      vm.evento = {};
      vm.evento.nombre = eventoBD.nombre;
      vm.evento.lugares = eventoBD.lugaresDisponibles;
      vm.evento.precio = eventoBD.precio;
      vm.ticket = ticket;
      $scope.$watch(function() { return vm.formData.numBoletos}, revisarBoletos)
                      
      init();
      
      function init() {

      }
      
      function ticket(){
        alert("Confirmar Venta?");
        logger.info(vm.formData.nombre + "\n" + vm.formData.correo + "\n" + vm.formData.numBoletos);
        vm.formData = {};
      }
      
      function revisarBoletos (current, original) {
        if ( current > eventoBD.lugaresDisponibles){
          alert("No hay tantos lugares");
          vm.formData.numBoletos = current-(current-eventoBD.lugaresDisponibles);
        }
      }
      
     
    }
})();