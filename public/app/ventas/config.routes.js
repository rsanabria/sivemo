(function () {
    'use strict';

    angular
        .module('app.ventas')
          .run(appRun);   
        
        appRun.$inject = ['routeService'];

        function appRun(routeService) {
            routeService.configRoutes(routes());
        }
  
  function routes() {
  return [
    {url:'/eventos', config : {templateUrl : 'app/ventas/eventos.html', controller:'EventosCtrl', controllerAs:'vm', title:'eventos', secure: true }},
     
     {url:'/ventas/:id', config : {templateUrl : 'app/ventas/venta.html', controller:'VentasCtrl', controllerAs:'vm', title:'venta', secure: true }}
  ]
  }
})();