angular
  .module('pmr')
  .directive('sideOption',['$state',function ($state){
    return {
      restrict:'EA',
      link: function(scope,element,attrs){
        scope.toggle = (id) => {
          $state.go(id);
        }
        scope.compatible = (id) => {
          return $state.is(id);
        }
      }
    }
  }]);
