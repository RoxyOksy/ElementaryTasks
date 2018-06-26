    // Программа позволяет вывести все числа Фибоначчи, которые находятся в указанном диапазоне.
    // Диапазон задаётся двумя аргументами при вызове функции. Числа выводятся через запятую по возрастанию.
    // Fn = Fn-1 + Fn-2 - формула для вычисления чисел Фибоначчи

    window.onload = function () {

        function fib(start = 1, finish = 21) {
            var msg = '';
            if (isNaN(start || finish)) {
                start = 1, finish = 21;
                msg = 'Введены некорректные данные, выведен диапазон по умолчанию с 1 до 21:<br>';
            } else if (start <= 0) {
                start = 1;
                msg = 'Диапазон чисел Фибоначчи лежит в пределах положительных чисел.<br> Расчитано стартовое значение по умолчанию = 1<br>';
            }
            if (finish < 0) {
                finish = 21;
                msg = 'Диапазон чисел Фибоначчи лежит в пределах положительных чисел.<br> Выведен диапазон по умолчанию с 1 до 21: <br>';
            }

            if (start > finish) {
                var n = finish;
                finish = start;
                start = n;
            }

            var arr = [1, 1];
            var i = 0;
            var next;

            // цикл
            for (var i = 0;; i++) {
                next = arr[i] + arr[i + 1];
                if (next <= finish) {
                    arr.push(next);
                } else break;
            }

            // рекурсия
            // f(arr, i, finish);
            // function f(arr, i, finish){
            //     var next=arr[i]+arr[i+1];
            //     if(next<finish){
            //         arr.push(next);
            //         i++;
            //         f(arr, i, finish);
            //     }
            //     return arr;
            // }  

            function isStart(element) {
                return element >= start;
            }

            var startIndex = arr.findIndex(isStart);
            arr = arr.slice(startIndex);
            document.write(msg + '<p>Числа Фибоначчи в диапазоне от ' + start + ' до ' + finish + '</p>' + arr.join(', '));
        }

        try {
            fib(5,100);
        } catch (e) {
            document.write(e + '<br>Ошибка ввода данных');
        }
    }