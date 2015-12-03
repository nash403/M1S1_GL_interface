angular
  .module('pmr')
  .directive('sideOption',[function (){
    return {
      restrict:'EA',
      link: function(scope,element,attrs){
        scope.toggle = () => {
          scope.opt.selected = !scope.opt.selected;
        }
      }
    }
  }]);
