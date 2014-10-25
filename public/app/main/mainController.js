(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'mainService'];

    function MainCtrl($scope, mainService) {
        mainService.getHola().success(function (data) {
            $scope.mensaje = data;
        });
    }
})();