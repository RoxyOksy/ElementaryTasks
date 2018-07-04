/*Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
*  *  *  *  *  *
  *  *  *  *  *  *
*  *  *  *  *  *
  *  *  *  *  *  *
Программа запускается через вызов главного класса с параметрами.*/

function getChessBoard(a, b, simbol){
  
  var board = init(a, b, simbol);

  showResult('#chessBoard', board);
}

function init(a = 4, b = 12, simbol = '*') { 
  var a = numberValidation(a);
  var b = numberValidation(b);

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
  return board;       
}