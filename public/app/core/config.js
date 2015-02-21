(function() {
'use strict';
  var core = angular.module('app.core');
  core.config(toastrconfig);
  core.config(configure);
  
  toastrconfig.$inject = ['toastr'];
  configure.$inject = ['$routeProvider', 'routeHelperProvider'];
  
  function toastrconfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }
  function configure($routeProvider,routeHelperProvider) {
    routeHelperProvider.config.$routeProvider = $routeProvider;
  }

})();