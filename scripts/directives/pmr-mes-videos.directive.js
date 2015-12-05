angular
  .module('pmr')
  .directive('pmrMesVideos',['userSeances', function (userSeances){
    return {
      restrict:'EA',
      link: function(scope){
        scope.myseances = userSeances.get();
      }
    }
  }]);
