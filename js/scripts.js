var operator = null;
var inputValueMemo = 0;

function getContentClick(event) {
    const value = event.target.innerHTML;
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerHTML);
    filterAction(value);
}

const filterAction = (value) => {
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(',') : null;

    value === "+" ? setOperation('+') : null;
    value === "-" ? setOperation('-') : null;
    value === "x" ? setOperation('*') : null;
    value === "/" ? setOperation('/') : null;
    value === "%" ? setOperation('%') : null;
    value === "+/-" ? setOperation('+/-') : null;

    value === "=" ? calculation() : null;

    value === "AC" ? clearScreen('0') : null;
}

function addNumberInput(value) {
    const inputScreen = document.querySelector(".calculator__screen");
    const inputValue = inputScreen.value;
    if (inputValue === "0" && inputValue.length === 1 && inputValue !== ",") {
        inputScreen.value = value;
        return;
    }
    if (inputScreen.value === "" && value === ',') {
        inputScreen.value = 0 + value;
        return;
    }

    inputScreen.value = inputValue + value;
}

function setOperation(operator) {
    const inputScreenValue = document.querySelector('.calculator__screen').value;
    this.operator = operator;
    if ( inputScreenValue !== "0" && inputScreenValue !== ""){
        calculation();
    }
}

//Calculo
function calculation(){
    const inputScreen = document.querySelector('.calculator__screen');
    let firstValue = transformCommaToPoint(this.inputValueMemo);
    let secondValue = transformCommaToPoint(inputScreen.value);
    let total = 0;

    // Operacion Suma
    if ( this.operator === '+' && inputScreen.value !== "" ){
        total = firstValue + secondValue;
    } else
    if (this.operator === '-' && inputScreen.value !== "" ){
        if (firstValue !== 0) {
            total = firstValue - secondValue;
        } else {
            total = secondValue;
        }
    } else 
    if (this.operator === '*' && inputScreen.value !== "") {
        if (firstValue !== 0) {
            total = firstValue * secondValue;
        } else {
            total = secondValue;
        }
    } else 
    if (this.operator === '/' && inputScreen.value !== "") {
        if (firstValue !== 0) {
            total = firstValue / secondValue;
        } else {
            total = secondValue;
        }
    } else
    if (this.operator === "%" && inputScreen.value !== "" ){
        total = secondValue / 100;
    } else 
    if (this.operator === "+/-" && inputScreen.value !== "" ){
        if (secondValue > 0) {
            total = -secondValue;
        } 
    } else { total = firstValue;}

    total = transformPointToComma(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}

function transformCommaToPoint (value) {
    if ( typeof value !== "number" ) {
        let resultTransform = value.replace(',', '.');
        return parseFloat(resultTransform);
    }
    return value;
}

function transformPointToComma(value) {
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace('.', ',');
    return resultTransform;
}



// ########################################################

function clearScreen(value) {
    const inputScreen = document.querySelector(".calculator__screen");
    inputScreen.value = value;
    inputValueMemo = 0;
    this.operator = null;
}