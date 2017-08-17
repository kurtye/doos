angular.module('cadastrarEventoCtrls', []).controller('cadastrarEventoCtrl', ['$scope', '$state', '$stateParams', 'eventoService',
    '$cordovaImagePicker',
    function ($scope, $state, $stateParams, eventoService, $cordovaImagePicker) {


      $scope.imgURL = document.getElementById("files");

      //INICIO DO UPLOAD
      window.previewFile = function previewFile() {
        //var storage = firebase.storage();

        var file = document.getElementById("files").files[0];

        var id = user.userId;

        var storageRef = firebase.storage().ref();

        //dynamically set reference to the file name
        var thisRef = storageRef.child('images/' + id + '/' + file.name);


        //put request upload file to firebase storage
        thisRef.put(file).then(function (snapshot) {
          var url = snapshot.downloadURL;
          $scope.instaURL = url;

          document.getElementById('linkbox').innerHTML = '<img src="' + url + '" style="width: 100%;" />';

          $rootScope.instaURL = url;
          $scope.instaPet = {
            "usuario": user.userId,
            "nomeUsuario": user.displayName,
            "email": user.email,
            "fotoUsuario": user.imageUrl,
            "instaFoto": url
          };

        });

        //get request to get URL for uploaded file
        thisRef.getDownloadURL().then(function (url) {

        })

      };//FIM UPLOAD DE IMAGEM


        $scope.addEvento = function (evento) {

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
