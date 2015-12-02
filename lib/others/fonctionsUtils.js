function merge(obj1,obj2){
    var obj3 = [];
    for(var attrname in obj1){
        obj3.push(obj1[attrname]);
    }
    for(var attrname in obj2)
    {
        obj3.push(obj2[attrname]);
    }
    return obj3;
}

// Formatte un entier pour renvoyer une chaîne de la forme hh:mm:ss
function formatTime (value) {
    if( value < 0){
        return "00:00";
    }
    var secondes =  Math.floor(value / 1000) % 60;
    var res = Math.floor(value / 60000) ;
    var minutes = res > 59 ? res % 60 : res;
    var hours = res > 59 ? Math.floor(res / 60) : 0;
    var tab = hours == 0 ? [minutes.checkFormat(),secondes.checkFormat()] : [hours.checkFormat(), minutes.checkFormat(),secondes.checkFormat()];
    return  tab.join(':');
}

function formatTimeHour (value) {
    if( value < 0){
        return "00s";
    }
    var secondes =  Math.floor(value / 1000) % 60;
    var res = Math.floor(value / 60000) ;
    var minutes = res > 59 ? res % 60 : res;
    var hours = res > 59 ? Math.floor(res / 60) : 0;
    if(hours > 0)
        return  hours.checkFormat()+"h "+minutes.checkFormat()+"m "+secondes.checkFormat()+"s ";
    if(minutes > 0)
        return  minutes.checkFormat()+"m "+secondes.checkFormat()+"s ";
    return  secondes.checkFormat()+"s ";
}

Number.prototype.checkFormat = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}

function merge(obj1,obj2){
            var obj3 = [] ; 
            for (var attrname in obj1) { 
                obj3.push(obj1[attrname]); 
            } 
            for (var attrname in obj2) { 
                obj3.push(obj2[attrname]); 
            } 
            return obj3; 
        }