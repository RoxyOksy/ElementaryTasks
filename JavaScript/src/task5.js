function getFibonacciSequence(start = 1, finish = 21) {
    start = numberValidation(start);
    finish = numberValidation(finish);    

    if (start > finish) {
        var temp = finish;
        finish = start;
        start = temp;
    }

    var arr = [1, 1];
    var next;

    for (var i = 0; ; i++) { 
        next = arr[i] + arr[i + 1];
        if (next <= finish) {
            arr.push(next);
        } else break;
    }

    var startIndex = arr.findIndex(function(element){
        return element >= start;
    });
    arr = arr.slice(startIndex);

    var result = '';
    result = '<p>Числа Фибоначчи в диапазоне от ' + start + ' до ' + finish + '</p>' + arr.join(', ');
    showResult('#fibonacciSequence', result);
    
    return arr;
}