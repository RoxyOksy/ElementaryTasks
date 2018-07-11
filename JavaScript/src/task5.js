function getFibonacciSequence(context) {
    var start, finish;
    context.hasOwnProperty('min') ? start = numberValidation(context.min) : start = 1;
    context.hasOwnProperty('max') ? finish = numberValidation(context.max) : finish = 21;

    [start, finish]  = swap(start,finish);

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