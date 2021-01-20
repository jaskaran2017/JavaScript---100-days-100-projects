// Initiallizing variables
const display1 = document.querySelector(".display-1")
const display2 = document.querySelector(".display-2")
const tempDisplay = document.querySelector(".temp-display")
const numberEl = document.querySelectorAll(".number")
const operationEl = document.querySelectorAll(".operation")
const clearAllEl = document.querySelector(".all-clear")
const equalEl = document.querySelector(".equal")
const clearLastEL = document.querySelector(".last-entity-clear")

let dis1 = ""; //digit in first display
let dis2 = ""; // digit in second display
let result = null; // digit in third display
let lastopert = ''; // for operators
let haveDot = false; // to prevent '.' more than once

// adding forEach loop to grab all the numbers
numberEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true; // this will add '.' between the digits
        } else if (e.target.innerText === '.' && haveDot) {
            return;  // this will prevent the '.' if already its present
        }
        dis2 += e.target.innerText;
        display2.innerText = dis2; // our initial entry will be reflected here
    })
});

// adding forEach loop to grab all the operators
operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2) result; // here we will check if there is any digit present or it empty. if empty we will proceed further 
        haveDot = false;
        const actionName = e.target.innerText;
        if (dis1 && dis2 && lastopert) {
            MathOperation() // This function will be executed when we have two separate numbers in display
        } else {
            result = parseFloat(dis2); // parseFloat method will convert our entries into integers as initially they are strings
        }
        clearDis(actionName); //this function will clear the display after we got result or after math operation executed
        lastopert = actionName;
        console.log(result);
    })
})

// function to clear the display

function clearDis(name = '') {
    dis1 += dis2 + "" + name + '';
    display1.innerText = dis1;
    display2.innerText = '';
    dis2 = '';
    tempDisplay.innerText = result;
};

// function to perform all the mathematical operations

function MathOperation() {
    if (lastopert === 'X') {
        result = parseFloat(result) * parseFloat(dis2);
    } else if (lastopert === '+') {
        result = parseFloat(result) + parseFloat(dis2);
    } else if (lastopert === '/') {
        result = parseFloat(result) / parseFloat(dis2);

    } else if (lastopert === '-') {
        result = parseFloat(result) - parseFloat(dis2);

    } else if (lastopert === '%')
        result = parseFloat(result) % parseFloat(dis2);

};

//function to get final result displayed 

equalEl.addEventListener('click', (e) => {
    console.log("clicked")
    if (!dis1 || !dis2) return;
    haveDot = false;
    MathOperation();
    clearDis();
    display2.innerText = result;
    tempDisplay.innerText = '';
    dis2 = result;
    dis1 = '';
});

// function to clear the old results 
clearAllEl.addEventListener('click', (e) => {
    console.log('clicked');
    display1.innerText = '0';
    display2.innerText = '0';
    dis1 = '';
    dis2 = '';
    result = '';
    tempDisplay.innerText = '0';
});

//  funtion to delete wrong value entered while operation

clearLastEL.addEventListener('click', (e) => {
    display2.innerText = '';
    dis2 = '';
});

// funtion to link this app with the kay board key for smooth operation
window.addEventListener('keydown', (e) => {
    if (
        // here we will recognize all the numbers or operands
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonEl(e.key);
    } else if (

        // here we will recognize all the operators
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('X');    //this line of code tell our programe that 'X' is used as '*' or multiply operand 
    } else if (e.key == 'Enter' || e.key === '=') {
        clickEqual();
    } else if (e.key == '<') {
        clearLastEntry(e.key);
    } else if (e.key === 'c') {
        clearAll(e.key);
    }
});

// this function is for making entry of numbers through key board
function clickButtonEl(key) {
    numberEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
};

// this function is for making entry of operands through key board
function clickOperation(key) {
    operationEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
};

// funtion for getting final result
function clickEqual(key) {
    equalEl.click();
}

//   funtion to delete wrong value entered while operation by keyboard
function clearLastEntry(key) {
    display2.innerText = '';
    dis2 = '';


}

// function to clear the old results by keyboard
function clearAll(key) {
    display1.innerText = '0';
    display2.innerText = '0';
    dis1 = '';
    dis2 = '';
    result = '';
    tempDisplay.innerText = '0';
}
