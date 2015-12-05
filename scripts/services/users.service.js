angular
  .module('pmr')
  .factory('users',[function(){
    var users = {
      "pmr" : {
        mdp:"pmr",
        subscribedto:[
          {
            date:(new Date(2015, 11, 24)).setHours(0,0,0,0),
            cr:0
          },
          {
            date:(new Date(2015, 11, 24)).setHours(0,0,0,0),
            cr:2
          }
        ]
      }
    };
    var c = "pmr";
    var adm = false;
    return {
      signin: function (login,mdp) {
        if (login == "admin" && mdp == "admin") { this.isloggedin=true;adm=true;c=login;return true;}
        if (users[login] && users[login].mdp == mdp) { this.isloggedin=true;c=login;return true;}
        return false;
      },
      deco: function(){
        this.isloggedin = false;
        if (adm)adm = false;
        c = null;
      },
      isloggedin:true,
      current: function() { return c;},
      isSubcribed: function (date,cr){
        if (!this.isloggedin) return false;
        var dayToCheck = (new Date(date)).setHours(0,0,0,0);
        for (var i = 0; i < users[this.current()].subscribedto.length; i++) {
          var currentDay = new Date(users[this.current()].subscribedto[i].date).setHours(0,0,0,0);
          if (dayToCheck == currentDay)
            if (users[this.current()].subscribedto[i].cr == cr) return true;
        }
        return false;
      },
      subscribe: function (date,cr) {
        if (!this.isloggedin) return false;
        users[this.current()].subscribedto.push({
          date:new Date(date).setHours(0,0,0,0),
          cr:cr
        });
        return true;
      },
      unsubscribe: function(date,cr) {
        if (!this.isloggedin) return false;
        var dayToCheck = new Date(date).setHours(0,0,0,0);
        for (var i = 0; i < users[this.current()].subscribedto.length; i++) {
          var currentDay = new Date(users[this.current()].subscribedto[i].date).setHours(0,0,0,0);
          if (dayToCheck == currentDay)
            if (users[this.current()].subscribedto[i].cr == cr) {
              users[this.current()].subscribedto.splice(i,1);
              return true;
            }
        }
        return false;
      }
    }
  }]);
