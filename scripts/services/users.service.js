angular
  .module('pmr')
  .factory('users',[function(){
    console.log("toto1");
    var users = {
      "pmr" : "pmr",
      "admin":"admin"
    }
    var loggedin=false;
    return {
      signin: function (login,mdp) {
        if (users[login] && users[login] == mdp) { loggedin=true;return true;}
        return false;
      },
      deco: function(){
        loggedin = false;
      }
      isloggedin:loggedin
    }
  }]);
