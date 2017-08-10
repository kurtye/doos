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

}]);