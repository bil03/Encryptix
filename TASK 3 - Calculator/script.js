let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = String(number);
  } else {
    displayValue += String(number);
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = displayValue.slice(-1);
  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    displayValue = displayValue.slice(0, -1) + operator;
  } else {
    displayValue += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = String(eval(displayValue));
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}
