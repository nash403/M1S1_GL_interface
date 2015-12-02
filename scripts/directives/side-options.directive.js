angular
  .module('pmr')
  .directive('sideOptions',['users',function (users){
    return {
      restrict:'EA',
      scope:{},
      replace:true,
      templateUrl:'views/navbar-login/navbar-login.view.html',
      link: function(scope){
        scope.isloggedin = false;
        scope.haserror=false;
        scope.signin = function (l,m){
          console.log("sign");
          scope.isloggedin = users.signin(l,m);
          scope.haserror = users.isloggedin;
        }
        scope.deco = function(){
          users.deco();
          scope.isloggedin = false;
          scope.haserror = false;
        }
      }
    }
  }]);
