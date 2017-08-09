angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('tabsController.comprar', {
    url: '/comprar',
    views: {
      'tab2': {
        templateUrl: 'templates/comprar.html',
        controller: 'comprarCtrl'
      }
    }
  })

  .state('tabsController.principal', {
    url: '/principal',
    views: {
      'tab1': {
        templateUrl: 'templates/principal.html',
        controller: 'principalCtrl'
      }
    }
  })

  .state('tabsController.queroIr', {
    url: '/queroir',
    views: {
      'tab3': {
        templateUrl: 'templates/queroIr.html',
        controller: 'queroIrCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.pGinaDoEvento', {
    url: '/pagEvento',
    views: {
      'tab2': {
        templateUrl: 'templates/pGinaDoEvento.html',
        controller: 'pGinaDoEventoCtrl'
      }
    }
  })

  .state('sobreNS', {
    url: '/sobre',
    templateUrl: 'templates/sobreNS.html',
    controller: 'sobreNSCtrl'
  })

  .state('perfil', {
    url: '/perfilUsuario',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

  .state('histRicoDeTickets', {
    url: '/historico',
    templateUrl: 'templates/histRicoDeTickets.html',
    controller: 'histRicoDeTicketsCtrl'
  })

  .state('termosECondiEsDeUso', {
    url: '/termos',
    templateUrl: 'templates/termosECondiEsDeUso.html',
    controller: 'termosECondiEsDeUsoCtrl'
  })

  .state('polTicaDePrivacidade', {
    url: '/politicaPrivacidade',
    templateUrl: 'templates/polTicaDePrivacidade.html',
    controller: 'polTicaDePrivacidadeCtrl'
  })

  .state('comoFunciona', {
    url: '/comoFunciona',
    templateUrl: 'templates/comoFunciona.html',
    controller: 'comoFuncionaCtrl'
  })

  .state('cadastrarEvento', {
    url: '/cadastrarEvento',
    templateUrl: 'templates/cadastrarEvento.html',
    controller: 'cadastrarEventoCtrl'
  })

    .state('contador', {
      url: '/contador',
      templateUrl: 'templates/contador.html',
      controller: 'contadorCtrl'
    })

$urlRouterProvider.otherwise('/login')


});
