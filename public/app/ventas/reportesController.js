(function () {
    'use strict';

    angular
        .module('app.ventas')
        .controller('ReportesCtrl', ReportesCtrl);

    ReportesCtrl.$inject = ['$scope','dataService','logger'];

    function ReportesCtrl($scope,dataService, logger) {
      var vm = this;
      vm.fechas =[];
      var fechas = [];
      vm.reportes = []; 
      vm.fecha;
      var dateA;
      dataService.getFechas()
        .success(function(data) {
        var contador=0;
        for (var i =0;i < data.length;i++) {
          dateA = new Date(data[i].fecha_venta);
          if(contador> 0) {
            if(dateA.toString().substr(0,16) !=  vm.fechas[contador-1].toString().substr(0,16) ) {
              vm.fechas.push(new Date(data[i].fecha_venta)); 
            contador+= 1;
          }
          } else {
            vm.fechas.push(new Date(data[i].fecha_venta)); 
            contador+= 1;
          }
        }
      });
      
       init();
      $scope.$watch(function() { return vm.fecha}, actualizarQuery);
      
     
      
      function actualizarQuery (current, original) {
        if ( current != undefined || current != original){
          //ejecutar query
          dataService.generarReporte(vm.fecha)
            .success(function(data){
            vm.reportes = data;
            logger.info("Reporte Generado del Día " +  vm.fecha.toString().substr(0,16));
          });

        }
      }
      
      function init() {
      }
    }
})();