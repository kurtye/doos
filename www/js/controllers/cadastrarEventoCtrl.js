angular.module('cadastrarEventoCtrls', []).controller('cadastrarEventoCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

      $scope.addEvento = function (evento) {

        firebase.database().ref('eventos/').push(evento);


        $state.go("tab.principal");

        swal({
          title: " Cadastrado com Sucesso",
          text: "Boa Sorte",
          type: "success",
          showConfirmlButton: false,
          timer: 2000
        });

        $scope.evento = {};
      };


    }])
