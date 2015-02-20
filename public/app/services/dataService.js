(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('dataService', ['$http', dataService]);
    

    function dataService($http) {
        var service = {
            getHola: getHola
        };

        return service;

        function getHola() {
            return $http.get('/holaMundo');
        }
    }
})();
