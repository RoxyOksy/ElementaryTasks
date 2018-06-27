// Программа, выполняющая вывод треугольников в порядке убывания их площади
//Результат выводится в консоль
window.onload=function(){

    function geronTriangles (name,a,b,c,arrTriangles){
        if ( (a == 0) || (b == 0) || (c == 0) ) {
            return console.log('Нажата отмена'); 
        }

        if( parseFloat(a) && parseFloat(b) && parseFloat(c) && ( ( a + b > c ) && ( b + c > a ) && ( a + c > b ) ) ){
            if(( a > 0 ) && ( b > 0 ) && ( c > 0) ){
                
                var p = (a+b+c)*0.5;
                var square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
                console.log('[' + name + ']: ' + square);
                arrTriangles.push([name, square.toFixed(2)]);
                return arrTriangles;
            }
        } else console.log('Данные некорректны'); 
    }

    function compare(arrTriangles){
        arrTriangles.sort(function(a, b) {
            return b[1] - a[1];
        });

        var result = '';
        var num = 1;        
        arrTriangles.forEach(function(i){
            result += num + '. [' + i[0] + ']: ' + i[1]  + ' см' + '\n';
            num++;
        });        
            
        return result;
    }

    var arrTriangles = [];
    var triangles_1 = geronTriangles("triangle",30,40,50,arrTriangles);
    var triangles_2 = geronTriangles("triangle2",3,4,5,arrTriangles);
    var triangles_3 = geronTriangles("triangle3",6,7,8,arrTriangles);

    console.log(compare(arrTriangles));

}    