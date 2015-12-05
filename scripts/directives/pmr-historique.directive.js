angular
  .module('pmr')
  .directive('pmrHistorique',['historique', function (historique){
    return {
      restrict:'EA',
      link: function(scope){
        scope.all = historique.get();
      }
    }
  }]);
