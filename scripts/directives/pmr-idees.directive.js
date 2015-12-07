angular
  .module('pmr')
  .directive('pmrIdees',['users', function (users){
    return {
      restrict:'EA',
      link: function(scope){
        scope.idees = [
          {
            titre:"Avoir des boissons gratuites à la fin des séances",
            date:(new Date(2015, 07, 2)).setHours(8,45,34,0),
            mess:"Ce serait cool non ????",
            commentaires:[
              {
                author:"toto4",
                mess:"Très bonne idée !!"
              },
              {
                author:"toto2",
                mess:"J'approuve !!!"
              },
              {
                author:"toto1",
                mess:"+1"
              },
              {
                author:"toto9",
                mess:"Et des petits gateaux aussi !! :)"
              }
            ],
            likes:23
          },
          {
            titre:"Faire des séances à thème !! ",
            date:(new Date(2015, 10, 1)).setHours(18,5,4,0),
            mess:"Je pensais à ça l'autre jour à Halloween",
            commentaires:[
              {
                author:"toto8",
                mess:"Why not !!"
              },
              {
                author:"toto2",
                mess:"Quels thèmes par exemples?",
              }
            ],
            likes:3
          },
          {
            titre:"Avoir des photos personnalisées à la fin des séances",
            date:(new Date(2015, 11, 1)).setHours(20,22,17,0),
            mess:"On pourrait les partager avec la famille ou autre",
            commentaires:[
              {
                author:"toto3",
                mess:"Pas mauvaise idée !!"
              },
              {
                author:"toto8",
                mess:"+1"
              },
              {
                author:"toto2",
                mess:"+1"
              }
            ],
            likes:12
          }
        ];
        scope.adding = '';
        scope.incr = (index) => {
          scope.idees[index].likes++;
        }
        scope.decr = (index) => {
          if (scope.idees[index].likes > 0) scope.idees[index].likes--;
        }
        scope.post = (index,me) => {
          scope.idees[index].commentaires.push({author:users.current(),mess:me});
          me = "";
        }
      }
    }
  }]);
