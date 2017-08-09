angular.module('contadorCtrls', []).controller('contadorCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

        $scope.contador = function () {
            for (var i = 0; i < 60; i++) {
                this.ammount = i;
            }
        }
    }])