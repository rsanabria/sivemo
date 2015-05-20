(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('authService',  authService);
  authService.$inject = ['$window', '$location', '$http', 'logger'];
    

    function authService( $window, $location, $http, logger) {
      var check,isAdmin,user_id;
        var service = {
            login : login,
            isLogged: isLogged,
            logOut : logOut,
            checkLogIn: getCheckLogIn,
          checkIsAdmin : checkIsAdmin,
          getUserId : getUserId
        };

        return service;
      
      function login(usuario) {
        return $http.post('/auth/authenticate', usuario).then(function (res) {
          var success = res.data.success;
          if (success) {
            $window.sessionStorage.token = res.data.token;
            $window.sessionStorage.isAdmin = res.data.isAdmin;
            $window.sessionStorage._id = res.data._id;
            setIsAdmin(res.data.isAdmin);
            setUserId(res.data._id);
            logger.success(res.data.message);
            $location.url('/eventos');
          } else {
            logger.warning(res.data.message);
          }
        });
        
      }
      function isLogged() {
        $http.defaults.headers.common['X-Access-Token'] =  $window.sessionStorage.token;
         return $http.get('/auth/secure').then(function(res) {
          var success = res.data.success;
           //console.log("success: "+ success);
          if (success) {
            //console.log("success: "+ success);
              setCheckLogIn(true);
          } else {
              delete $window.sessionStorage.token;
            logger.error(res.data.message);
              setCheckLogIn(false);
          }
        }).catch( function(err){
          logger.error(err.data.message);
            delete $window.sessionStorage.token;
            setCheckLogIn(false);
        });
      }
      function logOut() {
        delete $window.sessionStorage.token;
        setIsAdmin(false);
        delete $window.sessionStorage._id;
        delete $window.sessionStorage.isAdmin;
        logger.success("Sesión Cerrada");
        setCheckLogIn(false);
        $location.url("/");
        //$window.location.href = "/";
        
      }
      function getCheckLogIn() {
        return check;
      }
      function setCheckLogIn(checkValue) {
        check = checkValue;
      }
      function setIsAdmin(checkValue) {
        isAdmin = checkValue;
      }
      function checkIsAdmin(){
        if($window.sessionStorage.isAdmin != undefined) {
          isAdmin = window.sessionStorage.isAdmin;
          return isAdmin;
        }else {
          return isAdmin;
        }
        
      }
      
      function setUserId(id) {
        user_id = id;
      }
      function getUserId(){
        if($window.sessionStorage._id != undefined) {
          user_id = $window.sessionStorage._id
          return user_id;
        }else {
          return user_id;
        }
        
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
