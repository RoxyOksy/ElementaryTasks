function getNaturalNumbers(n=10, m=25.01){
    n = numberValidation(n); 
    m = numberValidation(m);
    
    var start = Math.ceil(Math.sqrt(m)),
        finish = start + n,
        msg = start,
        result = 'Ряд натуральных чисел длиной ' + n + ', квадрат которых не меньше ' + m + '<br/>'; 

    for (var i = start + 1; i<finish; i++){
        msg +=  ', ' + i;
    }
    
    result += msg;
    showResult('#naturalNumbers', result);

    return msg; 
}                    
