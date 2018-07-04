function getFibonacciSequence(start = 1, finish = 21) {
    start = numberValidation(start);
    finish = numberValidation(finish);
    var result = '';

    if (start > finish) {
        var n = finish;
        finish = start;
        start = n;
    }

    var arr = [1, 1];
    var i = 0;
    var next;

    for (var i = 0; ; i++) { 
        next = arr[i] + arr[i + 1];
        if (next <= finish) {
            arr.push(next);
        } else break;
    }

    function isStart(element) {
        return element >= start;
    }

    var startIndex = arr.findIndex(isStart);
    arr = arr.slice(startIndex);

    result = '<p>Числа Фибоначчи в диапазоне от ' + start + ' до ' + finish + '</p>' + arr.join(', ');
    showResult('#fibonacciSequence', result);
}