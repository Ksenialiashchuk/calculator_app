import './style.css';

const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const subDisplay = document.querySelector('.subDisplay');

let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';
let awaitingSecondValue = false;

buttons.addEventListener('click', (event) => {
    const button = event.target;
    const action = button.dataset.action;
    const buttonContent = button.textContent;

    if (button.tagName !== 'BUTTON') {
        return;
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        handleOperator(action);
    }

    if (action === 'calculate') {
        calculateResult();
    }

    if (action === 'clear') {
        clearAll();
    }

    if (action === 'invert') {
        invertNumber();
    }

    if (action === 'percent') {
        applyPercent();
    }

    if (!action) {
        handleNumber(buttonContent);
    }
});

function handleNumber(number) {
    function checkIsDotTypedTwice(value) {
        if (typeof value !== 'string') {
            console.warn('checkIsDotTypedTwice received a non-string value:', value);
            return false;
        }
        if (number === '.') {
            return value.includes('.');
        }
        return false;
    }

    console.log('firstValue:', firstValue, 'secondValue:', secondValue);

    if (awaitingSecondValue) {
        if (secondValue.length > 8 || checkIsDotTypedTwice(secondValue)) {
            return;
        }

        if (number === '.' && secondValue === '') {
            secondValue = '0';
        }

        secondValue += number;
        display.textContent = secondValue;
    } else {
        if (firstValue.length > 8 || checkIsDotTypedTwice(firstValue)) {
            return;
        }

        if (number === '.' && firstValue === '') {
            firstValue = '0';
        }

        firstValue += number;
        display.textContent = firstValue;
    }
}

function handleOperator(selectedOperator) {
    if (!firstValue) return;

    const operators = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '÷',
    };

    subDisplay.textContent = operators[selectedOperator];

    operator = selectedOperator;
    awaitingSecondValue = true;
    secondValue = '';
}

function calculateResult() {
    if (!firstValue || !secondValue || !operator) return;

    const firstNum = parseFloat(firstValue);
    const secondNum = parseFloat(secondValue);

    const precision = 1000;

    function checkAfterDot(number) {
        const stringNumber = number.toString();

        const lengthAfterDot = stringNumber.lastIndexOf('.') === -1
            ? 0
            : stringNumber.length - stringNumber.lastIndexOf('.');

        if (lengthAfterDot > 4) {
            return number.toFixed(4);
        }

        return number;
    }

    function addOperation() {
        return (firstNum * precision + secondNum * precision) / precision;
    }

    function subtract() {
        return (firstNum * precision - secondNum * precision) / precision;
    }

    function multiply() {
        return (firstNum * precision) * (secondNum * precision) / precision * 0.001;
    }

    function divide() {
        return secondNum === 0 ? '0' : firstNum / secondNum;
    }

    const operations = {
        add: addOperation(),
        subtract: subtract(),
        multiply: multiply(),
        divide: divide(),
    };

    result = checkAfterDot(operations[operator]);

    display.textContent = result;
    firstValue = result;

    subDisplay.textContent = '';
    operator = '';
    awaitingSecondValue = false;
}

function clearAll() {
    firstValue = '';
    secondValue = '';
    operator = '';
    result = '';

    display.textContent = '0';
    awaitingSecondValue = false;
    subDisplay.textContent = '';
}

function invertNumber() {
    if (awaitingSecondValue) {
        const invertedValue = parseFloat(secondValue) * -1;
        if (isNaN(invertedValue)) {
            display.textContent = secondValue || '0';
        } else {
            secondValue = invertedValue.toString();
            display.textContent = secondValue;
        }
    } else {
        const invertedValue = parseFloat(firstValue) * -1;
        if (isNaN(invertedValue)) {
            display.textContent = firstValue || '0';
        } else {
            firstValue = invertedValue.toString();
            display.textContent = firstValue;
        }
    }
}

function applyPercent() {
    function limitLength(value) {
        const stringValue = value.toString();
        return stringValue.length > 8 ? stringValue.slice(0, 8) : stringValue;
    }

    if (awaitingSecondValue) {
        const percentValue = parseFloat(secondValue) / 100;
        if (isNaN(percentValue)) {
            display.textContent = secondValue || '0';
        } else {
            secondValue = limitLength(percentValue.toString());
            display.textContent = secondValue;
        }
    } else {
        const percentValue = parseFloat(firstValue) / 100;
        if (isNaN(percentValue)) {
            display.textContent = firstValue || '0';
        } else {
            firstValue = limitLength(percentValue.toString());
            display.textContent = firstValue;
        }
    }
}
function themeToggler() {
    document.body.classList.toggle("dark-theme");
}

document.querySelector('.button-theme').addEventListener('click', themeToggler);

