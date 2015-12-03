angular
  .module('pmr')
  .directive('pmrPlanning',[function (){
    return {
      restrict:'EA',
      template:'<uib-datepicker ng-model="dt" min-date="mindate" show-weeks="true" class="well well-sm"></uib-datepicker>',
      replace:true,
      scope:{},
      link: function(scope,element,attrs){
        console.log(scope);
        scope.dt = new Date();
        scope.minDate = scope.minDate ? null : new Date();
      }
    }
  }]);
