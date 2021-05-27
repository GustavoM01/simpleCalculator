// Calculator buttons reference
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
const deleteMemory = document.querySelector('.delete');
// Display screen: displayInput for entered numbers and displayOperation for current operation
const displayInput = document.querySelector('#input');
const displayOperation = document.querySelector('#operation');
// Variables to keep track of current operation
const numbers = [];
const operators = [];
let numberPressed = false;
let currentOperand = '';
let currentOperator = '';
let result = 0;
let previousResult = false;


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
        currentOperand += e.target.textContent;
        displayInput.textContent = currentOperand;
        numberPressed = true;
    });
});

// Add eventListener() and functionality to operators
operator.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
            if(numberPressed === false) {
                operators[operators.length -1] = e.target.textContent;
            }else{
                if(previousResult) {
                    displayOperation.textContent = '';
                }
                numbers.push(currentOperand);
                operators.push(e.target.textContent);
                displayOperation.textContent += currentOperand + e.target.textContent;
                currentOperand = '';
                numberPressed = false;
                previousResult = false;
            }
    });
});

// Add eventListener() and functionality to equal button
equal.addEventListener('click', function(e) {
    numbers.push(currentOperand);
    result = Number.parseFloat(numbers[0]); // The first element in the numbers array is the first operand
    for(let i = 0; i < operators.length; i++) {
        switch(operators[i]) {
            case '+':
                result += Number.parseFloat(numbers[i + 1]);
                break;
            case '-':
                result -= Number.parseFloat(numbers[i + 1]);
                break;
            case '*':
                result *= Number.parseFloat(numbers[i + 1]);
                break;
            case '/':
                result /= Number.parseFloat(numbers[i + 1]);
                break;
        }
    }   
    displayOperation.textContent += displayInput.textContent; 
    displayInput.textContent = result;
    numbers.splice(0, numbers.length);
    operators.splice(0, operators.length);
    currentOperand = result.toString();
    previousResult = true;
});

// Add eventListener() and functionality to delete button
deleteMemory.addEventListener('click', function(e) {
    currentOperand = '';
    numbers.splice(0, numbers.length);
    operators.splice(0, operators.length);
    result = 0;
    displayInput.textContent = '';
    displayOperation.textContent = '';
});