function swap(a,b){
    if (a > b) {
        a = a + b;
        b = a - b;
        a = a - b;        
    }
    return [a,b];
}