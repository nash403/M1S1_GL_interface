angular
  .module('pmr')
  .directive('pmrClassement',['userSeances', function (userSeances){
    return {
      restrict:'EA',
      link: function(scope){
        scope.myseances = userSeances.get();
      }
    }
  }]);
