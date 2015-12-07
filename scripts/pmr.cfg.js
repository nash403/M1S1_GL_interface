angular
  .module('pmr')
  .config(routeCfg)

  routeCfg.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeCfg ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    // Définition des états
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl : 'views/home.view.html'
      })
      .state('planning', {
        url : '/planning',
        templateUrl : 'views/seances/seances.view.html'
      })
      .state('planning.inscription', {
        url: '/planning/inscription',
        templateUrl: 'views/seances/inscription.view..html'
      })
      .state('seances', {
        url : '/seances',
        templateUrl : 'views/seances/mes-seances.view.html'
      })
      .state('classement', {
        url : '/classement',
        templateUrl : 'views/classement/historique.view.html'
      })
      .state('historique', {
        url : '/historique',
        templateUrl : 'views/classement/classement.view.html'
      })
      .state('videos', {
        url : '/videos',
        templateUrl : 'views/videos/mes-videos.view.html'
      })
      .state('fidelite', {
        url : '/fidelite',
        templateUrl : 'views/fidelisation/pts-fidelite.view.html'
      })
      .state('idee', {
        url : '/idee',
        templateUrl : 'views/boite-idees/idees.view.html'
      })
  }
