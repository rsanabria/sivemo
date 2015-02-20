(function () {
    'use strict';

    angular
        .module('app.main')
          .run(appRun);   
        
        appRun.$inject = ['routeService'];

        function appRun(routeService) {
            routeService.configRoutes(routes());
        }
  
  function routes() {
  return [
    {url:'/', config : {templateUrl : 'app/main/main.html', controller:'MainCtrl', controllerAs:'vm', title:'main' }}
  ]
  }
})();