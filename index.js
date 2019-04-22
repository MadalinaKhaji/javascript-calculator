let screen = document.getElementById('screen');
let computation = {
    value1: 'bananas',
    operation: 'bananas',
    value2: 'bananas'
};

function showOnScreen(valueToShow) {
    if (checkDot(valueToShow)) {
        screen.innerHTML += valueToShow;
    }
}

function checkDot(valueToCheck) {
    let canShow = true;
    if(valueToCheck === '.') {
        if(screen.innerHTML === '') {
            canShow = false;
        } 
        if(screen.innerHTML.includes(valueToCheck)) {
            canShow = false;
        }
    }
    return canShow;
}

function clearScreen() {
    screen.innerHTML = '';
}

function deleteLastInput() {
    let newScreen = screen.innerHTML.slice(0, screen.innerHTML.length-1);
    screen.innerHTML = newScreen;
}

function setOperator(operator) {
    if(computation.operation === 'bananas') {
        computation.value1 = +screen.innerHTML;
        computation.operation = operator;
    } else {
        computation.operation = operator;
    }
    clearScreen();
}

function setEqual() {
    if(computation.operation !== 'bananas') {
        computation.value2 = +screen.innerHTML;
        let result = calculateTwoNumbers(computation.value1, computation.operation, computation.value2);
        computation.value1 = result;
        computation.operation = 'bananas';
        clearScreen();
        showOnScreen(result);
    } else {
        console.log('nothing at all');
    }
}

function calculateTwoNumbers( firstValue, operator, secondValue) {
    if(operator === 'plus') {
        return firstValue + secondValue;
    } else if(operator === 'minus') {
        return firstValue - secondValue;
    } else if(operator === 'times') {
        return firstValue * secondValue;
    } else if(operator === 'divide') {
        return firstValue / secondValue;
    }
}