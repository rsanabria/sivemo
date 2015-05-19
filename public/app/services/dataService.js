(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('dataService',  dataService);
  dataService.$inject = ['$http', 'logger'];
    

    function dataService($http,logger) {
        var service = {
            getHola: getHola,
          getEventos : getEventos,
          getEvento : getEvento,
          generarVenta : generarVenta
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
      
        function getEventos() {
            return $http.get('/api/getEventos')
            .then( function(response) {
              return response.data;
            })
            .catch( function(err) {
              logger.error(err.data);
            });
        }
      
      function getEvento(id) {
        return $http.get('/api/getEvento/' + id)
            .then( function(response) {
              return response.data;
            })
            .catch( function(err) {
              logger.error(err.data);
            });
      }
      
      function generarVenta(data) {
        return $http.post('/api/generarVenta',data)
          .then(function(response) {
          return response.data;
        })
        .catch( function(err) {
          logger.error(err.data);
        });
      }
    }
})();
