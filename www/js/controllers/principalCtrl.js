angular.module('principalCtrls', []).controller('principalCtrl', ['$scope', '$stateParams', 'eventoService',
    function ($scope, $stateParams, eventoService) {

        var eventos = [];
        $scope.eventos = eventos;

        eventoService.getEventos().on("child_added", function (snap) {
            eventos.unshift(snap.val());
        });


    }]);