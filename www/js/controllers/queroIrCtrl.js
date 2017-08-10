angular.module('queroIrCtrls', []).controller('queroIrCtrl', ['$scope', '$stateParams', 'eventoService',

    function ($scope, $stateParams, eventoService) {

        $scope.percent = 0;

        $scope.changePercent = function (newPercent) {
            $scope.percent = newPercent;
        }


        var eventos = [];
        $scope.eventos = eventos;

        eventoService.getProjetos().on("child_added", function (snap) {
            eventos.unshift(snap.val());
        });

    }])