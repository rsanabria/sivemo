(function () {
    'use strict';

    angular
        .module('routes')
        .provider('routeHelper', routeHelper);
  

    

    function routeHelper() {
      this.config = {
        // These are the properties we need to set
         $routeProvider: undefined

      };
      this.$get = function() {
        return {
          config: this.config
        };
      };
 
      }
})();