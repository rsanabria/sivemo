(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('dataService',  dataService);
  dataService.$inject = ['$http', 'logger'];
    

    function dataService($http,logger) {
        var service = {
            getHola: getHola
        };

        return service;

        function getHola() {
            return $http.get('/holaMundo')
            .then( function(response) {
              return response.data;
            })
            .catch( function(err) {
              logger.error(err.data);
            });
        }
    }
})();
