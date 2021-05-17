// Calculator buttons reference
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
// Display screen: displayInput for entered numbers and displayOperation for current operation
const displayInput = document.querySelector('#input');
const displayOperation = document.querySelector('#operation');
// Variables ti keep track of current operation
let operation = '';
let operandOne = '';
let operandTwo = '';
let operatorSign = '';
let result = 0;

// Functions for each operator
const addNumbers = function(a, b) {
    return a + b;
}
const substractNumbers = function(a, b) {
    return a - b;
}
const multiplyNumbers = function(a, b) {
    return a * b;
}
const divideNumbers = function(a, b) {
    return a / b;
}

// Add eventListener() and functionality to numbers
operand.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if(operatorSign === ''){
            operandOne += e.target.textContent;
        } else {
            operandTwo += e.target.textContent;
        }
    });
});

// Add eventListener() and functionality to operators
operator.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
       operatorSign = e.target.textContent;
    });
});

// Add eventListener() and functionality to equal button
equal.addEventListener('click', function(e) {
    switch(operatorSign) {
        case '+':
            result = addNumbers(operandOne, operandTwo);
            break;
        case '-':
            result = substractNumbers(operandOne, operandTwo);
            break;
        case '*':
            result = multiplyNumbers(operandOne, operandTwo);
            break;
        case '/':
            result = divideNumbers(operandOne, operandTwo);
            break;
    }
});