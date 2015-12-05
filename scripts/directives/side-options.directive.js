angular
  .module('pmr')
  .directive('sideOptions',['users', function (users){
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
            selected:false,
            requireCo:false
          },
          {
            name:"Mon classement",
            id:"classement",
            selected:false,
            requireCo:true
          },
          {
            name:"Historique des scores",
            id:"historique",
            selected:false,
            requireCo:true
          },
          {
            name:"Mes points de fidélité",
            id:"fidelite",
            selected:false,
            requireCo:true
          },
          {
            name:"Mes vidéos",
            id:"videos",
            selected:false,
            requireCo:true
          }/*,
          {
            name:"Boîte à idéee",
            id:"idee",
            selected:false,
            requireCo:true
          }*/];
      }
    }
  }]);
