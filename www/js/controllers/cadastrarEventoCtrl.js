angular.module('cadastrarEventoCtrls', []).controller('cadastrarEventoCtrl', ['$scope', '$state', '$stateParams', 'eventoService',
    function ($scope, $state, $stateParams, eventoService) {

        $scope.addEvento = function (evento) {


            //scope.imgURL = document.getElementById("files");
            ///INICIO DO UPLOAD
            //indow.previewFile = function previewFile() {
            //   var storage = firebase.storage();

            //   var file = document.getElementById("files").files[0];
            //   console.log(file);

            //   var storageRef = firebase.storage().ref();

            //   //dynamically set reference to the file name
            //   if (key) {
            //       var thisRef = storageRef.child('images/eventos/' + key + '/' + file.name);
            //   }else {
            //       var petKey = PetService.getNewPetKey().key;
            //       $scope.key = petKey;
            //       console.log(petKey);

            //       var thisRef = storageRef.child('images/adocao/' + petKey + '/' + file.name);

            //   }


            //   //put request upload file to firebase storage
            //   thisRef.put(file).then(function (snapshot) {
            //       var url = snapshot.downloadURL;


            //       document.getElementById('linkbox').innerHTML = '<img src="' + url + '" style=" width: 100px; " />';


            //       $scope.pet.imgURL = url;
            //       console.log(url);
            //   });


            evento.id = eventoService.getNewKey().key;

            eventoService.newEvento(evento).then(function (snap) {
                console.log(snap);
                swal({
                    title: "Cadastrado com Sucesso",
                    text: "Boa Sorte",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
                $state.go("tabsController.principal");

            });


            $scope.evento = {};
        };


    }])
