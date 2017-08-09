angular.module('queroIrCtrls', []).controller('queroIrCtrl', ['$scope', '$stateParams',

    function ($scope, $stateParams) {

        $scope.percent = 0;

        $scope.changePercent = function (newPercent) {
            $scope.percent = newPercent;
        }


    }])