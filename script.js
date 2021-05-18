// Calculator buttons reference
const operand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
const deleteMemory = document.querySelector('.delete');
// Display screen: displayInput for entered numbers and displayOperation for current operation
const displayInput = document.querySelector('#input');
const displayOperation = document.querySelector('#operation');
// Variables ti keep track of current operation
const numbers = [];
const operators = [];
let currentOperand = '';
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
        currentOperand += e.target.textContent;
        displayInput.textContent = currentOperand;
    });
});

// Add eventListener() and functionality to operators
operator.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if(currentOperand !== '') { // Condition to and operand and then delete. So it only gets pushed to the array once
            numbers.push(currentOperand);
            currentOperand = '';
        }
        if(numbers.length === operators.length + 1) { // Condition to create an array elements for operators array only if it follows an operand and not another operator
            operators.push('current operator');
            operators[operators.length - 1] = e.target.textContent;
            displayOperation.textContent += displayInput.textContent + e.target.textContent;
        } else {
            operators[operators.length - 1] = e.target.textContent;
            displayOperation.textContent += displayInput.textContent + e.target.textContent; 
        }
    });
});

// Add eventListener() and functionality to equal button
equal.addEventListener('click', function(e) {
    numbers.push(currentOperand);
    result = Number.parseInt(numbers[0]); // The first element in the numbers array is the first operand
    console.log(result);
    for(let i = 0; i < operators.length; i++) {
        switch(operators[i]) {
            case '+':
                result += Number.parseInt(numbers[i + 1]);
                break;
            case '-':
                result -= Number.parseInt(numbers[i + 1]);
                break;
            case '*':
                result *= Number.parseInt(numbers[i + 1]);
                break;
            case '/':
                result /= Number.parseInt(numbers[i + 1]);
                break;
        }
    }   
    displayOperation.textContent += displayInput.textContent 
    displayInput.textContent = result;  
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