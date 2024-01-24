let operand1_area = document.querySelector('#operand1_area');
let operand2_area = document.querySelector('#operand2_area');
let result_area = document.querySelector('#result_area');
let which_operand = 0;

// create string vars that will hold operand1 and operand2
let operand1 = '';
let operand2 = '';
let operator = '';
let result;
// create boolean operand1finished var that will switch to true when +-*/ are clicked and false when = is clicked
let operand1finished = false;
let resultGiven = false;
// function addToOperand1(numberbutton) will add string '1', '2' to operand1 and return operand1
function addToOperand1(numberbutton) {
    operand1 += numberbutton;
    operand1_area.textContent = parseInt(operand1);
    which_operand = 1;
    return operand1;    
}
// function addToOperand2(numberbutton) will add string '1', '2' to operand1 and return operand1
function addToOperand2(numberbutton) {
    operand2 += numberbutton;
    operand2_area.textContent = parseInt(operand2);
    which_operand = 2;
    return operand2;    
}
// function addToOperand(numberbutton) checks whether operand1finished is true and runs addToOperandx(numberbutton) returning operand1 or operand2
function addToOperand(numberbutton) {
    if (resultGiven == false) { 
        if (operand1finished == false) { return addToOperand1(numberbutton); }
        else { return addToOperand2(numberbutton) }
    } else if (operator !== '') {
        operand1 = result;
        operand1_area.textContent = parseInt(operand1);
        result = '';
        resultGiven = false;
        result_area.textContent = result;
        return addToOperand2(numberbutton);
    }
}
// function determineOperator(operatorbutton) sets operator = '+' '-' '/' '*' and turns operand1finished = true
function determineOperator(operatorbutton) {
    if (operator == '') {
        operator = operatorbutton;
        operand1finished = true;
    } else if (operand1 !== '' & operand2 !== '') {
        operation();
        operator = operatorbutton;
        operand1finished = true;
    }
}
// function operation parses operator1 and operator2 into integers, then uses checks the var operation and does the calculation 
//      and sets operand1finished = false
function operation() {
    switch (operator) {
        case '+':
            result = parseInt(operand1) + parseInt(operand2);
            result_area.textContent = result;
            break;
        case '-':
            result = parseInt(operand1) - parseInt(operand2);  
            result_area.textContent = result;
            break;
        case '*':
            result = parseInt(operand1) * parseInt(operand2);  
            result_area.textContent = result;
            break;
        case '/':
            if (parseInt(operand2) == 0 ) {
                alert('ERROR');
                clear();
                break;
            } else {
                result = parseInt(operand1) / parseInt(operand2);  
                result_area.textContent = result;
                break;
            }
        default:
            alert('ERROR');
            clear();
            break;
    }
    operand1finished = false;
    resultGiven = true;
    operand1 = '';
    operand1_area.textContent = '';
    operand2 = '';
    operand2_area.textContent = '';
    which_operand = 0;
    operator = '';
}
// create addeventlisteners to all buttons that start the function with the parameter
let button1 = document.querySelector('#b1');
let button2 = document.querySelector('#b2');
let button3 = document.querySelector('#b3');
let button4 = document.querySelector('#b4');
let button5 = document.querySelector('#b5');
let button6 = document.querySelector('#b6');
let button7 = document.querySelector('#b7');
let button8 = document.querySelector('#b8');
let button9 = document.querySelector('#b9');
let button0 = document.querySelector('#b0');
let buttonPlus = document.querySelector('#bPlus');
let buttonMinus = document.querySelector('#bMinus');
let buttonMultiply = document.querySelector('#bMultiply');
let buttonDivide = document.querySelector('#bDivide');
let buttonEquals = document.querySelector('#bEquals');

button1.addEventListener('click', () => addToOperand('1'));
button2.addEventListener('click', () => addToOperand('2'));
button3.addEventListener('click', () => addToOperand('3'));
button4.addEventListener('click', () => addToOperand('4'));
button5.addEventListener('click', () => addToOperand('5'));
button6.addEventListener('click', () => addToOperand('6'));
button7.addEventListener('click', () => addToOperand('7'));
button8.addEventListener('click', () => addToOperand('8'));
button9.addEventListener('click', () => addToOperand('9'));
button0.addEventListener('click', () => addToOperand('0'));

buttonPlus.addEventListener('click', () => determineOperator('+'));
buttonMinus.addEventListener('click', () => determineOperator('-'));
buttonMultiply.addEventListener('click', () => determineOperator('*'));
buttonDivide.addEventListener('click', () => determineOperator('/'));

buttonEquals.addEventListener('click', () => operation());

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            addToOperand('1')
            break;
        case '2':
            addToOperand('2')
            break;
        case '3':
            addToOperand('3')
            break;
        case '4':
            addToOperand('4')
            break;
        case '5':
            addToOperand('5')
            break;
        case '6':
            addToOperand('6')
            break;
        case '7':
            addToOperand('7')
            break;
        case '8':
            addToOperand('8')
            break;
        case '9':
            addToOperand('9')
            break;
        case '0':
            addToOperand('0')
            break;
        case '+':
            determineOperator('+')
            break;
        case '-':
            determineOperator('-')
            break;
        case '*':
            determineOperator('*')
            break;
        case '/':
            determineOperator('/')
            break;
        case 'Enter':
            operation();
            break;
        case '=':
            operation();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'Delete':
            clear();
            break;
    }
})

// add a clear button
function clear() {
    operand1 = '';
    operand2 = '';
    operator = '';
    result = '';
    operand1_area.textContent = '';
    operand2_area.textContent = '';
    result_area.textContent = '';
    operand1finished = false;
    resultGiven = false;
}

let buttonClear = document.querySelector('#bClear');
buttonClear.addEventListener('click', () => clear());

// Add a “backspace” button, so the user can undo if they click the wrong number.

function backspace() {
    if (which_operand == 1) {
        operand1 = operand1.slice(0, -1);
        if (operand1 !== '') { operand1_area.textContent = parseInt(operand1); }
        else { operand1_area.textContent = '' };
    } else if (which_operand == 2) {
        operand2 = operand2.slice(0, -1);
        if (operand2 !== '') { operand2_area.textContent = parseInt(operand2); }
        else { operand2_area.textContent = '' };
    }
}

let buttonBackspace = document.querySelector('#bBackspace');
buttonBackspace.addEventListener('click', () => backspace());

// You should round answers with long decimals so that they don’t overflow the screen.
// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5.

// Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
// host on pages