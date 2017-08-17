angular.module('eventoServices', []).service('eventoService', ['usuarioService', function (usuarioService) {

    this.getEventos = function () {
        return firebase.database().ref('eventos');
    }

    this.getEventosAbertos = function () {
        return firebase.database().ref('eventos').orderByChild('status').equalTo(2);
    }

    this.getProjetos = function () {
        return firebase.database().ref('eventos').orderByChild('status').equalTo(1);
    }

    this.getNewKey = function () {
        return firebase.database().ref('eventos').push();
    };

    this.newEvento = function (evento) {
        return firebase.database().ref('eventos/' + evento.id).set(evento);

    };

    this.getDetalhesEvento = function (id) {
        return firebase.database().ref('eventos').orderByChild('id').equalTo(id);
    };

    this.setCount = function (evento) {
        //var userId = firebase.auth().currentUser.uid;
        var queroIrRef = firebase.database().ref('usuarios/' + 1 + '/queroIr');
        var statusRef = firebase.database().ref('eventos/' + evento + '/status');
        var qtdAtualRef = firebase.database().ref('eventos/' + evento + '/qtdAtual');
        firebase.database().ref('eventos/' + evento + '/qtdPessoas').once('value', function (snap) {
            var qtdPessoas = snap.val();
            qtdAtualRef.transaction(function (snap) {
                var qtd = snap;
                var novaQtd = qtd + 1;
                console.log(snap);

                qtdAtualRef.set(novaQtd).then(function (result) {
                    setHistorico(evento);
                });
                if (novaQtd >= qtdPessoas) {
                    console.log(novaQtd);
                    statusRef.set(2).then(function (result) {
                        return "Status Alterado";
                    });
                }else {
                    return;
                }

            });
        });


    };

    // retorna o array com os ids dos eventos que o usuario quis ir;
    this.getHistorico = function (evento) {
        //var user = usuarioService.getUsuario();
        //var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('usuarios/' + 1 + '/queroIr');
    };

    var setHistorico = function (evento) {
        //var userId = firebase.auth().currentUser.uid;
        var queroIrRef = firebase.database().ref('usuarios/' + 1 + '/queroIr');
        queroIrRef.once('value', function (snap) {
            var hist = snap.val();
            hist.unshift(evento);
            queroIrRef.set(hist).then(function (result) {
                return result;
            });
        });


    }
}]);