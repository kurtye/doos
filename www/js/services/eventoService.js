angular.module('eventoServices', []).service('eventoService', [function () {

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
}]);