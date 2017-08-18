angular.module('pGinaDoEventoCtrls', []).controller('pGinaDoEventoCtrl', ['$scope', '$stateParams', 'eventoService',
    function ($scope, $stateParams, eventoService) {

        console.log($stateParams);

        eventoService.getDetalhesEvento($stateParams.id).on('child_added', function (snap) {
            $scope.evento = snap.val();
            $scope.$apply();

        });


    }]) 