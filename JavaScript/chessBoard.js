/*Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
*  *  *  *  *  *
  *  *  *  *  *  *
*  *  *  *  *  *
  *  *  *  *  *  *
Программа запускается через вызов главного класса с параметрами.*/

window.onload=function(){

    function chessBoard(a=4,b=12){
        a = parseInt(a), b = parseInt(b);

        if (isNaN(a) || isNaN(b)){
            console.log(a, b);
            return document.write("Введите числовые значения");
        }

        var table = new Array(a);
        for (var i = 0; i < table.length; i++) { // В таблице a строк
            table[i] = new Array(b);            // В строке b столбцов
        }
        
        // Инициализация массива
        for (var row = 0; row < table.length; row++) {
            for (var col = 0; col < table[row].length; col++) {
                if((row+col) %2 == 0){
                    table[row][col] = document.write("*");
                } else document.write("&#160");
            }
            document.write("<br>");
        }
    }

    try{  
        chessBoard(10,16);
    } catch(e){
        document.write(e+'<br>Ошибка ввода данных');
    }
    
}