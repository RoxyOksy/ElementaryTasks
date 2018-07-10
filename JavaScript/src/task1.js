/*Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
*  *  *  *  *  *
  *  *  *  *  *  *
*  *  *  *  *  *
  *  *  *  *  *  *
Программа запускается через вызов главного класса с параметрами.*/

function getChessBoard(a = 4, b = 12, simbol = '*'){
    a = numberValidation(a);
    b = numberValidation(b);

    var board = '';
        for (var row = 0; row < a; row++) {
            for (var col = 0; col < b; col++) {
                if ((row + col) % 2 === 0) {
                    board += simbol;
                } else {
                    board += '&#160';
                }
            }
        board += '<br/>';
        }

    showResult('#chessBoard', board);

    return board;
}