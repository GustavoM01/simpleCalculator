// Calculator buttons reference
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
const deleteMemory = document.querySelector('.delete');
// Display screen: displayInput for entered numbers and displayOperation for current operation
const displayInput = document.querySelector('#input');
const displayOperation = document.querySelector('#operation');
// Variables ti keep track of current operation
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
            displayInput.textContent = operandOne;
        } else {
            operandTwo += e.target.textContent;
            displayInput.textContent = operandTwo;
        }
    });
});

// Add eventListener() and functionality to operators
operator.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
       operatorSign = e.target.textContent;
       displayOperation.textContent = displayInput.textContent + e.target.textContent;
    });
});

// Add eventListener() and functionality to equal button
equal.addEventListener('click', function(e) {
    switch(operatorSign) {
        case '+':
            result = addNumbers(Number.parseInt(operandOne), Number.parseInt(operandTwo));
            break;
        case '-':
            result = substractNumbers(Number.parseInt(operandOne), Number.parseInt(operandTwo));
            break;
        case '*':
            result = multiplyNumbers(Number.parseInt(operandOne), Number.parseInt(operandTwo));
            break;
        case '/':
            result = divideNumbers(Number.parseInt(operandOne), Number.parseInt(operandTwo));
            break;
    }
    displayOperation.textContent = operandOne + operatorSign + operandTwo;
    displayInput.textContent = result;
});

// Add eventListener() and functionality to delete button
deleteMemory.addEventListener('click', function(e) {
    operandOne = '';
    operandTwo = '';
    operatorSign = '';
    result = 0;
    displayInput.textContent = '';
    displayOperation.textContent = '';
});