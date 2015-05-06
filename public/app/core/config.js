(function() {
'use strict';
  var core = angular.module('app.core');
  core.config(toastrconfig);
  core.config(configure);
  core.config(htmlMode);
  core.run(rutaSeguras);
  
  toastrconfig.$inject = ['toastr'];
  configure.$inject = ['$routeProvider', 'routeHelperProvider'];
  rutaSeguras.$inject = ['$window', '$rootScope', '$location', 'logger', 'authService'];
  htmlMode.$inject = ['$locationProvider'];
  
  function toastrconfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }
  function configure($routeProvider,routeHelperProvider) {
    routeHelperProvider.config.$routeProvider = $routeProvider;
  }
  
  function rutaSeguras($window, $rootScope,$location, logger, authService) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if( next.secure) {
        authService.isLogged().then(function(){
          
           //console.log(authService.checkLogIn());
          if (authService.checkLogIn() != true) {
            $location.url("/");
            //$window.location.href = "/";
            event.preventDefault();
          }
        });
       } else if (!next.secure && authService.checkLogIn() == true) {
         console.log("prueba " + authService.checkLogIn()); 
         event.preventDefault();
        }
          //Look at the next parameter value to determine if a redirect is needed        
  });

  }
  function htmlMode($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('');
  }
  
  

})();