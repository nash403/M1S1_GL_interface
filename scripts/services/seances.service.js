angular
  .module('pmr')
  .factory('seances',function(){
    var seances = [
      {
        date: (new Date(2015, 11, 24)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(8,45,0,0),
            fin:(new Date(2015, 11, 24)).setHours(11,0,0,0),
            participating:10
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:2
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(8,45,0,0),
            fin:(new Date(2015, 11, 24)).setHours(11,0,0,0),
            participating:4,
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:2
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10,
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10
          },
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:8
          }
        ]
      },
      {
        date: (new Date(2015, 11, 18)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:6
          }
        ]
      },
      {
        date: (new Date(2015, 11, 15)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10
          }
        ]
      },
      {
        date: (new Date(2015, 11, 8)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10
          }
        ]
      },
      {
        date: (new Date(2015, 11, 31)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10
          }
        ]
      },
      {
        date: (new Date(2015, 11, 30)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:10
          }
        ]
      },
      {
        date: (new Date(2015, 11, 22)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:9
          }
        ]
      },
      {
        date: (new Date(2015, 11, 9)),
        creneaux:[
          {
            debut: (new Date(2015, 11, 24)).setHours(11,30,0,0),
            fin:(new Date(2015, 11, 24)).setHours(12,30,0,0),
            participating:1
          }
        ]
      }
    ];
    return {
      all: () => { return seances; },
      get: function (date){
        if (!date) return [];
        var dayToCheck = new Date(date).setHours(0,0,0,0);
        for (var i=0;i<this.all().length;i++){
          var currentDay = new Date(this.all()[i].date).setHours(0,0,0,0);
          if (dayToCheck === currentDay) {
            return this.all()[i].creneaux;
          }
        }
        return [];
      }
    }
  });
