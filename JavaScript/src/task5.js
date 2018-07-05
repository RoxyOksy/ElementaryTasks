function isHappyTicket(start = 0,finish = 99){
    var isHappySimple = 0;
    var isHappyComplex = 0;

    for (var current = start; current <= finish; current++){
        var ticket = getTicket(current);

        var leftPart = ticket.substr(0, 3);
        var rightPart = ticket.substr(3);      
        if(sumDigits(leftPart) === sumDigits(rightPart)){
            isHappySimple++;
        } 
   
        var odd = ticket.split('').filter(function(e,key){            
            return (key+1)%2 !== 0;
        });
        var even = ticket.split('').filter(function(e,key){
            return (key+1)%2 === 0;
        }); 

        if(sumDigits(even) === sumDigits(odd)){
            isHappyComplex++;
        }       
    }

    function getTicket(num){
        return String('000000' + num).slice(-6);
    }
    
    function sumDigits(numberString){
        var sum = 0;
        for(var i = 0; i < numberString.length; i++){
            sum += Number(numberString[i]);
        }
        return sum;
    }

    var winner = 'простой способ';
    if(isHappySimple === isHappyComplex){
        winner = 'оба способа';
    } else if(Math.max(isHappySimple, isHappyComplex) === isHappyComplex){
        winner = 'сложный способ';
    }

    var result = 'Количество счастливых билетиков в диапазоне от ' + start + ' до ' + finish + '.<br/>';
    result += 'Победитель: ' + winner + ' подсчёта.' + '<br/>';
    result += '1. Простой способ подсчета: ' + isHappySimple + '<br/>';
    result += '2. Сложный способ подсчета: ' + isHappyComplex + '<br/>';
    
    showResult('#isHappyTicket', result);  
    
    return result;
}


