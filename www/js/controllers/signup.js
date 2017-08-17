angular.module('signupCtrls', []).controller('signupCtrl', ['$scope', '$stateParams', '$document', '$state', 'UsuarioService',
  function ($scope, $stateParams, $document, $state, UsuarioService) {

    $scope.doSignup = function (userSignup) {


      if ($document[0].getElementById("cuser_name").value != "" && $document[0].getElementById("cuser_pass").value != "") {


        firebase.auth().createUserWithEmailAndPassword(userSignup.cusername, userSignup.cpassword).then(function () {

          //console.log("Signup successful");

          var user = firebase.auth().currentUser;

          user.sendEmailVerification().then(function (result) {
            console.log(result)
          }, function (error) {
            console.log(error)
          })


          name = userSignup.displayName;
          email = userSignup.email;
          photoUrl = userSignup.photoURL;
          uid = userSignup.uid;
          state = userSignup.state;




          UsuarioService.setUser({
            "displayName": userSignup.displayname,
            "email": user.email,
            "imageUrl": user.photoURL,
            "userId": user.uid,
            "state": userSignup.state

          });



          user.updateProfile({
            displayName: userSignup.displayname,
            photoURL: userSignup.photoprofile,
            state : userSignup.state


          }).then(function () {
            // Update successful.
            $state.go("login");
          }, function (error) {
            // An error happened.
            console.log(error);
          });
          alert("Sucesso,verifique seu email e confirme")
          return false;



        }, function (error) {
          // An error happened.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);

          if (errorCode === 'auth/weak-password') {
            alert('Senha está fraca, escolha uma senha mais segura.');
            return false;
          } else if (errorCode === 'auth/email-already-in-use') {
            alert('O email já está sendo usado.');
            return false;
          }


        });


      } else {

        alert('Entre com email e senha');
        return false;

      }//end check client username password


    };// end $scope.doSignup()


  }]);
