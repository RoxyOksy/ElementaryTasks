function numberValidation(num){
    var isValid = Number(num);
    if(isNaN(isValid)){
        console.log('Ошибка данных');
        isValid = 10;
    }
    return Math.abs(isValid);
}