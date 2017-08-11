angular.module('principalCtrls', []).controller('principalCtrl', ['$scope', '$state', '$stateParams', 'eventoService',
    function ($scope, $state, $stateParams, eventoService) {

        var eventos = [];
        $scope.eventos = eventos;
        console.log(eventos);
        eventoService.getEventos().on("child_added", function (snap) {
            eventos.unshift(snap.val());
            $scope.$apply();
        });

        $scope.irParaEvento = function (id) {
            $state.go('tabsController.pGinaDoEvento/:id', {id: id});

        };

    }]);