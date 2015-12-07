angular
  .module('pmr')
  .directive('sideOptions',['users','$state', function (users,$state){
    return {
      restrict:'EA',
      replace:true,
      templateUrl:'views/side-nav/side-options.view.html',
      link: function(scope){
        scope.isCo = () => {
          return users.isloggedin;
        }
        scope.options = [
          {
            name:"Planning des séances",
            id:"planning",
            requireCo:false
          },
          {
            name:"Mes séances",
            id:"seances",
            requireCo:true
          },
          {
            name:"Mon classement",
            id:"classement",
            requireCo:true
          },
          {
            name:"Historique des scores",
            id:"historique",
            requireCo:true
          },
          {
            name:"Mes points de fidélité",
            id:"fidelite",
            requireCo:true
          },
          {
            name:"Mes vidéos",
            id:"videos",
            requireCo:true
          },
          {
            name:"Boîte à idéee",
            id:"idee",
            requireCo:true
          }];
      }
    }
  }]);
