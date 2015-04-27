(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('authService',  authService);
  authService.$inject = ['$window','$http', 'logger'];
    

    function authService($window, $http, logger) {
      var checkLogIn = false;
        var service = {
            login : login,
            isLogged: isLogged,
            checkLogIn: checkLogIn
        };

        return service;
      
      function login(usuario) {
        return $http.post('/auth/authenticate', usuario).then(function (res) {
          var success = res.data.success;
          if (success) {
            $window.sessionStorage.token = res.data.token;
            logger.success(res.data.message);
          } else {
            logger.warning(res.data.message);
          }
        });
        
      }
      function isLogged() {
        $http.defaults.headers.common['X-Access-Token'] =  $window.sessionStorage.token;
         return $http.get('/auth/secure').then(function(res) {
          var success = res.data.success;
          if (success) {
             var checkLogIn = false;
          } else {
            logger.error(res.data.message);
              var checkLogIn = false;
          }
        }).catch( function(err){
          logger.error(err.message);
            var checkLogIn = false;;
        });
      }


 /*       function getHola() {
            return $http.get('/holaMundo')
            .then( function(response) {
              return response.data;
            })
            .catch( function(err) {
              logger.error(err.data);
            });
        }*/
    }
})();
