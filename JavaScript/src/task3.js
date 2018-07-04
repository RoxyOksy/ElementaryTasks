function comparingTriangles(arrayOfTriangles){
    var result = ' ';
    var squares = [];
    for(var i=0; i<arrayOfTriangles.length; i++){
        var triangle = arrayOfTriangles[i];
        squares.push (
            getSquare(triangle.name, triangle.a, triangle.b, triangle.c)
        );
    }

    var arrResult = compare(squares);

    arrResult.forEach(function(item, i){
        result += item.name + ' = ' + item.square + '<br/>';
    })
    showResult('#comparingTriangles', result);

}

function getSquare(name,a,b,c){                          
    var p = (a+b+c)*0.5;
    var square = Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(2);
    var obj = {name: name, square: square};              
    return obj;
}

function compare(squares){
    squares.sort(function(a, b) {
        return b.square - a.square;
    });
    return squares;
}