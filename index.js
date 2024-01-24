let operand1_area = document.querySelector('#operand1_area');
let operand2_area = document.querySelector('#operand2_area');
let result_area = document.querySelector('#result_area');

// create string vars that will hold operand1 and operand2
let operand1 = '';
let operand2 = '';
let operator = '';
let result;
// create boolean operand1finished var that will switch to true when +-*/ are clicked and false when = is clicked
let operand1finished = false;
// function addToOperand1(numberbutton) will add string '1', '2' to operand1 and return operand1
function addToOperand1(numberbutton) {
    operand1 += numberbutton;
    operand1_area.textContent = operand1;
    return operand1;    
}
// function addToOperand2(numberbutton) will add string '1', '2' to operand1 and return operand1
function addToOperand2(numberbutton) {
    operand2 += numberbutton;
    operand2_area.textContent = operand2;
    return operand2;    
}
// function addToOperand(numberbutton) checks whether operand1finished is true and runs addToOperandx(numberbutton) returning operand1 or operand2
function addToOperand(numberbutton) {
    if (operand1finished == false) { return addToOperand1(numberbutton); }
    else { return addToOperand2(numberbutton) }
}
// function determineOperator(operatorbutton) sets operator = '+' '-' '/' '*' and turns operand1finished = true
function determineOperator(operatorbutton) {
    operator = operatorbutton;
    operand1finished = true;
}
// function operation parses operator1 and operator2 into integers, then uses checks the var operation and does the calculation 
//      and sets operand1finished = false
function operation() {
    switch (operator) {
        case '+':
            result = parseInt(operand1) + parseInt(operand2);
            result_area.textContent = result;
            operand1finished = false;
            break;
        case '-':
            result = parseInt(operand1) - parseInt(operand2);  
            result_area.textContent = result;
            operand1finished = false;
            break;
        case '*':
            result = parseInt(operand1) * parseInt(operand2);  
            result_area.textContent = result;
            operand1finished = false;
            break;
        case '/':
            result = parseInt(operand1) / parseInt(operand2);  
            result_area.textContent = result;
            operand1finished = false;
            break;
        default:
            alert('ERROR');
            break;
    }
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

// add a clear button
// Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42.
// Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
// You should round answers with long decimals so that they don’t overflow the screen.
// Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
// Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5.
// Add a “backspace” button, so the user can undo if they click the wrong number.
// Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
// Add keyboard support!