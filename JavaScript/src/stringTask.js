// Программа, которая будет иметь два режима:
// 1.	Считать количество вхождений строки в тексте. 
// 2.	Делать замену строки на другую в тексте.
// Программа должна принимать аргументы на вход при запуске:
// 1.	<путь к файлу> <строка для подсчёта>
// 2.	<путь к файлу> <строка для поиска> <строка для замены>

window.onload = function(){
    var input = document.querySelector('input[name="find"]');

    input.oninput = function(){ 
        var findText = input.value;
        var text = document.querySelector('#mytext').textContent;
        var arr = text.split(findText);
        result(arr.length - 1);
    }
    function result (value){
        var inputResult = document.querySelector('input[name="result"]');
        inputResult.value = value;
    }
        
}