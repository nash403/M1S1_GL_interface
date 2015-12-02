angular
  .module('pmr')
  .factory('users',[function(){
    var users = {
      "pmr" : "pmr",
      "admin":"admin"
    }
    return {
      signin: function (login,mdp) {
        console.log("sign serv");
        if (users[login] && users[login] == mdp) { this.isloggedin=true;return true;}
        return false;
      },
      deco: function(){
        this.isloggedin = false;
      },
      isloggedin:false
    }
  }]);
