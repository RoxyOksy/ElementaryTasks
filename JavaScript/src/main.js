window.onload = function(){

    getChessBoard(4, 12, '&#x265e');
    selectingOfEnvelopes();
    comparingTriangles([
        {name: 'ABC', a: 4, b: 5, c: 6},
        {name: 'KLM', a: 40, b: 50, c: 60},
        {name: 'STR', a: 6, b: 7, c: 8},
        {name: 'XYZ', a: 60, b: 70, c: 80},
    ]);
    isPalindrom('1234321');
    isHappyTicket();
    getNaturalNumbers(4,120.9);
    getFibonacciSequence();
    
    // вывод решения по нажатию кнопки
    document.querySelector('#tasks').onclick = function(event){
        var target = event.target;
        if(target.tagName != 'BUTTON'){
            return;
        }
        getClick(target);        
    };
    
    function getClick(target){
        target.parentNode
            .querySelector('.result')
            .classList.toggle('hidden');
    }
}