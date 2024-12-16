'use strict';

const input = document.getElementById('input');

// Hold the equation
let equation = "";

// button controller
const buttons = [
    {
        value: 1,
        styling: 'normal',
        clicked: () => updateInput(1),
    },
    {
        value: 2,
        styling: 'normal',
        clicked: () => updateInput(2),
    },
    {
        value: 3,
        styling: 'normal',
        clicked: () => updateInput(3),
    },
    {
        value: '+',
        styling: 'operator',
        clicked: () => updateInput('+'),
    },
    {
        value: 4,
        styling: 'normal',
        clicked: () => updateInput(4),
    },
    {
        value: 5,
        styling: 'normal',
        clicked: () => updateInput(5),
    },
    {
        value: 6,
        styling: 'normal',
        clicked: () => updateInput(6),
    },
    {
        value: 'x',
        styling: 'operator',
        clicked: () => updateInput('*'),
    },
    {
        value: 7,
        styling: 'normal',
        clicked: () => updateInput(7),
    },
    {
        value: 8,
        styling: 'normal',
        clicked: () => updateInput(8),
    },
    {
        value: 9,
        styling: 'normal',
        clicked: () => updateInput(9),
    },
    {
        value: '-',
        styling: 'operator',
        clicked: () => updateInput('-'),
    },
    {
        value: 'C',
        styling: 'operator',
        clicked: () => clearInput(),
    },
    {
        value: 0,
        styling: 'normal',
        clicked: () => updateInput(0)
    },
    {
        value: '.',
        styling: 'operator',
        clicked: () => updateInput('.')
    },
    {
        value: '/',
        styling: 'operator',
        clicked: () => updateInput('/')
    },
    {
        value: '=',
        styling: 'equal',
        clicked: () => solveEquation()
    },
]

// Add buttons to Calculator
const buttonContainer = document.getElementById("button-container")

for (let i = 0; i < buttons.length; i++){

    // Create button
    const button = document.createElement("button"); 
    button.textContent = buttons[i].value;

    // Control styling
    if (buttons[i].styling === 'normal'){
        button.classList.add("normal");
    } 
    else if(buttons[i].styling === 'operator') {
        button.classList.add("operator");
    } else {
        button.classList.add("equal");
    }

    // Add function
    button.addEventListener('click', buttons[i].clicked);
    
    // Add created button to container
    buttonContainer.append(button);    
}

function updateInput(value) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = equation[equation.length - 1];

    // Allow a decimal only if the last segment of the equation (after the last operator) doesn't already contain one
    if (value === '.') {
        const lastSegment = equation.split(/[\+\-\*\/]/).pop();
        if (lastSegment.includes('.')) return;
    }

    // Prevent consecutive operators
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    // Append the value to the equation and update the display
    equation += value;
    input.textContent = equation;
    adjustFontSize();
}

function solveEquation() {
    try {
        const result = eval(equation);
        console.log(result);
        equation = result.toFixed(2).toString();
        input.textContent = equation;
        adjustFontSize();
    } catch (error) {
        input.textContent = "Error";
        equation = "";
        adjustFontSize();
    }
}

function clearInput() {
    equation = '';
    input.textContent = '0';
    adjustFontSize();
}

// Function to adjust font size based on input length
function adjustFontSize() {
    const maxLength = 15;  // Maximum length before font size is adjusted
    const inputLength = equation.length;
    
    if (inputLength > maxLength) {
        const fontSize = Math.max(20, 42 - (inputLength - maxLength) * 2); // Decrease font size for long equations
        input.style.fontSize = fontSize + "px";
    } else {
        input.style.fontSize = "42px";  // Reset to default font size
    }
}
