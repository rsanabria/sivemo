(function () {
    'use strict';

    angular
        .module('routes')
        .factory('routeService', routeService);
  
    routeService.$inject = ['routeHelper'];
    

    function routeService(routeHelper) {
      var $routeProvider = routeHelper.config.$routeProvider;
      var service = {
        configRoutes : configRoutes
      }
      return service;
    
      function configRoutes(routes) {
        routes.forEach(function(route) {
          $routeProvider.when(route.url, route.config);
        });
        $routeProvider.otherwise({redirectTo: '/'});
      }
    }
})();