angular.module('queroIrCtrls', []).controller('queroIrCtrl', ['$scope', '$state', '$stateParams', 'eventoService',

    function ($scope, $state, $stateParams, eventoService) {


        $scope.changePercent = function (newPercent) {

            $scope.percent = newPercent;

        }

        var eventos = [];


        $scope.eventos = eventos;


        eventoService.getProjetos().on("child_added", function (snap) {
            var val = snap.val();
            var percent = val.qtdAtual / val.qtdPessoas * 100;
            eventos.unshift(val);
        });

        $scope.like = function (id) {
            eventoService.setCount(id);
        };

        $scope.irParaEvento = function (id) {
            $state.go('tabsController.pGinaDoEvento/:id', {id: id});

        };

    }]);
