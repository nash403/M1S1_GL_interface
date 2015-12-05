angular
  .module('pmr')
  .directive('pmrPlanning',['seances', 'users', function (seances,users){
    return {
      restrict:'EA',
      controllerAs:'$ctrl',
      bindToController:true,
      controller: ['$scope', function($scope){
        //console.log(seances);
        var today = new Date();
        $scope.dt = today;
        $scope.minDate = new Date();
        $scope.maxDate = (new Date()).setDate($scope.dt.getDate()+365);
        $scope.getCreneaux = (date) => { return seances.get(date); };
        $scope.currentCr = $scope.getCreneaux($scope.dt);
        $scope.noCreneau = $scope.currentCr.length == 0?false:true;
        $scope.$watch(()=>{ return $scope.dt; },(newValue,oldValue) => {
          if (newValue != oldValue) {
            $scope.currentCr = $scope.getCreneaux($scope.dt);
          }
        });
        $scope.$watch(()=>{ return $scope.currentCr.length; },(newValue,oldValue) => {
          if (newValue != oldValue) {
            $scope.noCreneau = newValue == 0? false : true;
          }
        });
        $scope.isCo = () => {
          return users.isloggedin;
        }
        $scope.isIn = (date,cr) => {
          return users.isSubcribed(new Date(date),cr);
        }
        $scope.getDayClass = function(date, mode) {
          if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);
            for (var i=0;i<seances.all().length;i++){
              var currentDay = new Date(seances.all()[i].date).setHours(0,0,0,0);
              if (dayToCheck === currentDay) {
                return (seances.all()[i].creneaux.length>0)?'full':'';
              }
            }
          }
          return '';
        };
      }]
    }
  }]);
