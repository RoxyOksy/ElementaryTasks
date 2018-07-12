function numberValidation(num){
    var isValid = Number(num, 10);

    if(isNaN(isValid)){
        console.log('Ошибка данных');
        isValid = 10;
    }
    
    return Math.abs(isValid);
}