function getNaturalNumbers(n=10, m=25.01){
    n = numberValidation(n); 
    
    var start = Math.ceil(Math.sqrt(m));
    var finish = start + n;
    var msg = start;
    var result = 'Ряд натуральных чисел длиной ' + n + ', квадрат которых не меньше ' + m + '<br/>'; 

    for (var i = start + 1; i<finish; i++){
        msg +=  ', ' + i;
    }
    
    result += msg;
    showResult('#naturalNumbers', result);
    
    return result; 
}                    
