(function () {
    'use strict';

    angular
        .module('app.ventas')
        .controller('VentasCtrl', VentasCtrl);

    VentasCtrl.$inject = ['$location', '$routeParams', '$scope','authService', 'dataService','logger'];

    function VentasCtrl($location, $routeParams, $scope, authService, dataService, logger) {
      var vm = this;
      var eventoBD = {};
      vm.tipoTarjeta = false;
      vm.formData = {};
      vm.formData.num_boletos = 1;
      vm.evento = {};
       vm.evento.precio = 0;
      vm.ticket = ticket;

      dataService.getEvento($routeParams.id).then(function(data){
        eventoBD = data[0];
        vm.evento.nombre = eventoBD.NOMBRE;
        vm.evento.lugares = eventoBD.BOLETOS;
        vm.evento.precio = eventoBD.PRECIO;
      });
      
      $scope.$watch(function() { return vm.formData.num_boletos}, revisarBoletos)
                      
      init();
      
      function init() {
        vm.formData.vendedor = authService.getUserId();
      }
      
      
      function revisarBoletos (current, original) {
        if ( current > eventoBD.BOLETOS){
          alert("No hay tantos lugares");
          vm.formData.num_boletos = current-(current-eventoBD.BOLETOS);
        }
      }
      
      
      function ticket() {
        vm.formData.fecha_venta = Date.now();
        vm.formData.nombreEvento = vm.evento.nombre;
        vm.formData.total = vm.formData.num_boletos * vm.evento.precio ;
        dataService.venderEvento($routeParams.id,vm.formData.num_boletos, vm.formData).then(function(data){
          dataService.generarVenta(vm.formData).then(function(data){
            logger.info(data.message);
            $location.url('/eventos');

          });
         
        });
      }
      

      
     
    }
})();