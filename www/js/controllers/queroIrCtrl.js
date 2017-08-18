angular.module('queroIrCtrls', []).controller('queroIrCtrl', ['$scope', '$stateParams', 'eventoService',

  function ($scope, $stateParams, eventoService) {


    $scope.changePercent = function (newPercent) {

      $scope.percent = newPercent;

    }

    var eventos = [];


    $scope.eventos = eventos;


    eventoService.getProjetos().on("child_added", function (snap) {
      eventos.unshift(snap.val());
    });

    $scope.like = function (id) {
      eventoService.setCount(id);
    };


    console.log(eventos)

  }]);
