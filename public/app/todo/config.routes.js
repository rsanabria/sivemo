(function () {
    'use strict';

    angular
        .module('app.todo')
          .run(appRun);   
        
        appRun.$inject = ['routeService'];

        function appRun(routeService) {
            routeService.configRoutes(routes());
        }
  
  function routes() {
  return [
    {url:'/todo', config : {templateUrl : 'app/todo/todo.html', controller:'TodoCtrl', controllerAs:'vm', title:'todo' }}
  ]
  }
})();