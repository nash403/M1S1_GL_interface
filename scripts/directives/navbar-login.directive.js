angular
  .module('pmr')
  .directive('navbarLogin',['users',function (users){
    return {
      restrict:'EA',
      scope:{},
      replace:true,
      templateUrl:'views/navbar-login/navbar-login.view.html',
      link: function(scope){
        console.log("toto");
        scope.isloggedin = false;
        scope.haserror=false;
        scope.signin = function (l,m){
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
