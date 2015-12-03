angular
  .module('pmr')
  .directive('sideOptions',[function (){
    return {
      restrict:'EA',
      replace:true,
      templateUrl:'views/side-nav/side-options.view.html',
      link: function(scope){
        scope.options = [
          {
            name:"Planning",
            id:"planning",
            selected:true
          },
          {
            name:"Mon classement",
            id:"classement",
            selected:false
          },
          {
            name:"Historique des scores",
            id:"historique",
            selected:false
          },
          {
            name:"Mes points de fidélité",
            id:"fidelite",
            selected:false
          },
          {
            name:"Mes vidéos",
            id:"videos",
            selected:false
          },
          {
            name:"Boîte à idéee",
            id:"idee",
            selected:false
          }];
      }
    }
  }]);
