angular.module('comprarCtrls', []).controller('comprarCtrl', ['$scope', '$state', '$stateParams', 'eventoService',
    function ($scope, $state, $stateParams, eventoService) {

        var eventos = [];
        $scope.eventos = eventos;

        eventoService.getEventosAbertos().on("child_added", function (snap) {
            eventos.unshift(snap.val());
        });

        $scope.irParaEvento = function (id) {
            $state.go('tabsController.pGinaDoEvento/:id', {id: id});

        };

    }])
