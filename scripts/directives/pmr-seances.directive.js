angular
  .module('pmr')
  .directive('pmrSeances',['users', function (users){
    return {
      restrict:'EA',
      link: function(scope){
        scope.myseances = users.mesSeances();
      }
    }
  }]);
