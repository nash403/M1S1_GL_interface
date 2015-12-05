angular
  .module('pmr')
  .directive('pmrPlanning',['seances', 'users','$location', function (seances,users,$location){
    return {
      restrict:'EA',
      controllerAs:'$ctrl',
      bindToController:true,
      controller: ['$scope','$uibModal', function($scope,$uibModal){
        //console.log(seances);
        var today = new Date();
        $scope.dt = today;
        $scope.minDate = new Date();
        $scope.maxDate = (new Date()).setDate($scope.dt.getDate()+365);
        $scope.getCreneaux = (date) => { return seances.get(date); };
        $scope.currentCr = $scope.getCreneaux($scope.dt);
        $scope.noCreneau = $scope.currentCr.length == 0?false:true;
        $scope.newSc = false;
        $scope.alert = {};
        $scope.closeAlert = () => {
          $scope.alert = {};
          $scope.newSc = false;
        }
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
        $scope.sinscrire = (date, creneau,idx) => {
          console.log('aaaaa',idx);
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/seances/inscription.view.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
              seance: function () {
                return {
                  date:date,
                  cr:creneau,
                  id:idx
                };
              }
            }
          });

          modalInstance.result.then(function (sc) {
            $scope.newSc = true;
            console.log("gzgzr",sc);
            users.subscribe(sc.date,sc.id);
            $scope.alert = {
              type:'success',
              msg:"Inscription à la séance prise en compte."
            }
            console.log(users.isSubcribed(new Date(sc.date),sc));
          }, function () {
            $scope.newSc = true;
            $scope.alert = {
              type:'danger',
              msg:"Inscription à la séance annulée."
            }
          });
        };
        $scope.desinscrire = (date, creneau,idx) => {
          console.log('aaaaa',idx);
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'views/seances/desinscription.view.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm',
            resolve: {
              seance: function () {
                return {
                  date:date,
                  cr:creneau,
                  id:idx
                };
              }
            }
          });

          modalInstance.result.then(function (sc) {
            $scope.newSc = true;
            users.unsubscribe(sc.date,sc.id);
            $scope.alert = {
              type:'success',
              msg:"Désinscription à la séance prise en compte."
            }
          }, function () {
            $scope.newSc = true;
            $scope.alert = {
              type:'danger',
              msg:"Vous n'avez pas annulé la séance."
            }
          });
        };
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
  }])
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, seance) {
    $scope.sc = seance;

    $scope.valider = function () {
      $scope.sc.cr.participating--;
      $uibModalInstance.close($scope.sc);
    };
    $scope.ok = function () {
      $scope.sc.cr.participating++;
      $uibModalInstance.close($scope.sc);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
