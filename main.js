var inputElement = document.getElementById('output-value');
var arrayValue = [];

function clickBtn(){
    var numberBtns = document.querySelectorAll('.number');
    
    numberBtns = Array.from(numberBtns);
    numberBtns.forEach(function(numberBtn){
        numberBtn.onclick = function(){
            var check = checkEqual(arrayValue[arrayValue.length-1]);
                if(check == true){
                    arrayValue = [];
                    inputNumber(value);
                }
            numberBtn.classList.toggle('numberclick');
            var value = numberBtn.getAttribute("id");
            inputNumber(value);
            setTimeout(function(){
                numberBtn.classList.remove('numberclick');
            },100);
        }
    })
}

function clickOperator(){
    var operatorBtns = document.querySelectorAll('.operator');
    operatorBtns = Array.from(operatorBtns);
    operatorBtns.forEach(function(operatorBtn){
        var attr = operatorBtn.getAttribute('id');
        var check = checkOpetator(attr)
        if(check){
            operatorBtn.onclick = function(){
                var checkPrev = checkOpetator(arrayValue[arrayValue.length-1]);
                var check = checkEqual(arrayValue[arrayValue.length-1]);
                if(check == true){
                    arrayValue.pop();
                }
                if(checkPrev == true){
                    return;
                }
                if(arrayValue.length == 0){
                    arrayValue = ["0"];
                    arrayValue.push(attr);
                }
                else if(arrayValue.length > 10){
                    return;
                }else{
                    arrayValue.push(attr);
                }
                inputElement.innerText = arrayValue.join('');
            }
        }
    });
}

function checkOpetator(operator){
    if(operator == '%' ||operator == '-' ||operator == '*' ||operator == '/' ||operator == '+') {
        return true;
    }
}

function checkEqual(operator){
    if(operator == '='){
        return true;
    }
}

function inputNumber(value){

    var length = arrayValue.length;

    if(typeof value === 'undefined' || length > 10){
        return;
    }else{
        arrayValue.push(value);
    }
    
    inputElement.innerText = arrayValue.join('');
}

function clean(){
    var cleanBtn = document.getElementById('clear');
    cleanBtn.onclick = function(){
        arrayValue = [];
        inputElement.innerText = arrayValue.join('');
    }
}

function backSpace(){
    var backSpaceBtn = document.getElementById('backspace');
    backSpaceBtn.onclick = function(){
        arrayValue.pop();
        inputElement.innerText = arrayValue.join('');
    }
}

function equal(){
    var equalBtn = document.getElementById('=');
    equalBtn.onclick = function(){
        var string = arrayValue.innerText = arrayValue.join('');
        var result = eval(string);
        inputElement.innerText = result;
        result = result.toString();
        arrayValue = [result,'='];
        console.log(arrayValue)
    }
}

clickBtn();
inputNumber();
clean();
clickOperator();
backSpace();
equal()