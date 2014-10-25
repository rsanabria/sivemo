(function () {
    'use strict';

    angular
        .module('app')
        .factory('mainService', ['$http', mainService]);
    

    function mainService($http) {
        var service = {
            getHola: getHola
        };

        return service;

        function getHola() {
            return $http.get('/holaMundo');
        }
    }
})();
