function comparingTriangles(arrayOfTriangles){
    var squares = [];

    for(var i=0; i<arrayOfTriangles.length; i++){
        var triangle = arrayOfTriangles[i];
        squares.push (
            getSquare(triangle.name, triangle.a, triangle.b, triangle.c)
        );
    }

    var arrResult = compare(squares);

    var result = '';
    arrResult.forEach(function(item, i){
        result += item.name + ' = ' + item.square + '<br/>';
    })

    showResult('#comparingTriangles', result);
    
    return arrResult;
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