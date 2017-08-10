angular.module('comprarCtrls', []).controller('comprarCtrl', ['$scope', '$stateParams', 'eventoService',
    function ($scope, $stateParams, eventoService) {

        var eventos = [];
        $scope.eventos = eventos;

        eventoService.getEventosAbertos().on("child_added", function (snap) {
            eventos.unshift(snap.val());
        });

    }])
