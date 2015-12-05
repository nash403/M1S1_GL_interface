angular
  .module('pmr',['ui.router','ui.bootstrap','ngAnimate'])
  .controller('ctrlGnl',['$scope','$uibModal',function ($scope,$uibModal) {
    $scope.close = () => {
      $scope.alertdonation = {};
      $scope.donatestatus = false;
    }
    $scope.close();
    $scope.donate = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/donate.view.html',
        controller: 'ModalInstanceCtrl',
        size: 'md',
        resolve: {
          seance: function () {
            return {};
          }
        }
      });

      modalInstance.result.then(function () {
        $scope.donatestatus = true;
        $scope.alertdonation = {
          type:'success',
          msg:"Donation prise en compte ! Merci :)"
        };
      }, function () {
        $scope.donatestatus = true;
        $scope.alertdonation = {
          type:'danger',
          msg:"Vous n'avez rien donné :("
        }
      });
    }
  }]);
