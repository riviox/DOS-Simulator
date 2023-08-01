// Symulator Calculator

let calcDisplay = document.getElementById('calcDisplay');
let currentValue = '';
let currentOperator = '';
let result = 0;
let isDecimalAdded = false;

function appendNumber(number) {
  currentValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentValue !== '') {
    if (currentOperator !== '') {
      calculate();
    }
    result = parseFloat(currentValue);
    currentOperator = operator;
    currentValue = '';
    isDecimalAdded = false;
    updateDisplay();
  }
}

function appendDecimalPoint() {
  if (currentValue === '') {
    currentValue += '0';
  }
  if (!isDecimalAdded) {
    currentValue += '.';
    isDecimalAdded = true;
  }
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  currentOperator = '';
  result = 0;
  isDecimalAdded = false;
  updateDisplay();
}

function calculate() {
  if (currentValue !== '') {
    switch (currentOperator) {
      case '+':
        result += parseFloat(currentValue);
        break;
      case '-':
        result -= parseFloat(currentValue);
        break;
      case '*':
        result *= parseFloat(currentValue);
        break;
      case '/':
        result /= parseFloat(currentValue);
        break;
    }
    currentValue = result.toString();
    currentOperator = '';
    isDecimalAdded = false;
    updateDisplay();
  }
}

function updateDisplay() {
  calcDisplay.innerText = currentValue || '0';
}
