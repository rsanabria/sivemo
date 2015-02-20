(function() {
'use strict';
  var core = angular.module('app.core');
  core.config(configure);
  configure.$inject = ['$routeProvider', 'routeHelperProvider'];
  function configure($routeProvider,routeHelperProvider) {
    routeHelperProvider.config.$routeProvider = $routeProvider;
  }

})();