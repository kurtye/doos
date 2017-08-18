angular.module('pGinaDoEventoCtrls', []).controller('pGinaDoEventoCtrl', ['$scope', '$state', '$stateParams', 'eventoService', 'usuarioService',
    function ($scope, $state, $stateParams, eventoService, usuarioService) {


        eventoService.getDetalhesEvento($stateParams.id).once('child_added').then(function (snap) {
            $scope.evento = snap.val();
            eventoService.verificarBotao($scope.evento.id).once('value', function (snap) {
                var status = snap.val();
                if (status == 2) {
                    $scope.aprovado = 2;
                } else {
                    $scope.aprovado = 1;
                }
            });
        });

        $scope.apoiar = function (id) {
            eventoService.setCount(id);
            $scope.apoiado = true;
        };

        eventoService.verificarApoio().once('child_added').then(function (snap) {
            console.log(snap.val(), 'val');
            if (snap.val() == $stateParams.id) {
                $scope.apoiado = true;
                console.log('true');

            } else {
                $scope.apoiado = false;
                console.log('false');
            }
        });


    }]);