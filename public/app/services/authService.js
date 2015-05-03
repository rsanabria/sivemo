(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('authService',  authService);
  authService.$inject = ['$window', '$location', '$http', 'logger'];
    

    function authService( $window, $location, $http, logger) {
      var check;
        var service = {
            login : login,
            isLogged: isLogged,
            logOut : logOut,
            checkLogIn: getCheckLogIn
        };

        return service;
      
      function login(usuario) {
        return $http.post('/auth/authenticate', usuario).then(function (res) {
          var success = res.data.success;
          if (success) {
            $window.sessionStorage.token = res.data.token;
            logger.success(res.data.message);
            $location.url('/todo');
          } else {
            logger.warning(res.data.message);
          }
        });
        
      }
      function isLogged() {
        $http.defaults.headers.common['X-Access-Token'] =  $window.sessionStorage.token;
         return $http.get('/auth/secure').then(function(res) {
          var success = res.data.success;
           console.log("success: "+ success);
          if (success) {
            console.log("success: "+ success);
              setCheckLogIn(true);
          } else {
              delete $window.sessionStorage.token;
            logger.error(res.data.message);
              setCheckLogIn(false);
          }
        }).catch( function(err){
          logger.error(err.message);
            delete $window.sessionStorage.token;
            setCheckLogIn(false);
        });
      }
      function logOut() {
        delete $window.sessionStorage.token;
        logger.success("Sesión Cerrada");
        $window.location.href = "/";
        
      }
      function getCheckLogIn() {
        return check;
      }
      function setCheckLogIn(checkValue) {
        check = checkValue;
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
