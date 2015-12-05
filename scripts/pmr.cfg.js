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
  }
