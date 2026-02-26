// Copyright
const date = new Date();
const year = date.getFullYear();
const copyright = document.getElementById("copyright");
copyright.textContent = `© ${year}, Landon Linn`

// Get Input & Previous Input ID's
let previousInput = document.getElementById("previous");
let currentInput = document.getElementById("current");

// Set variable
let input = "0";
let operationCounter = 0;
let operandFinder = "";
let expOne = "";
let expTwo = "";

// Get Control Buttons (Green)
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deletePress);
const clearButton = document.getElementById("clear")
clearButton.addEventListener("click", clearPress);

// Get Primary Buttons (Gray)
const numberZero = document.getElementById("zero");
numberZero.addEventListener("click", () => numberPress(numberZero.textContent));
const numberOne = document.getElementById("one")
numberOne.addEventListener("click", () => numberPress(numberOne.textContent));
const numberTwo = document.getElementById("two");
numberTwo.addEventListener("click", () => numberPress(numberTwo.textContent));
const numberThree = document.getElementById("three");
numberThree.addEventListener("click", () => numberPress(numberThree.textContent));
const numberFour = document.getElementById("four");
numberFour.addEventListener("click", () => numberPress(numberFour.textContent));
const numberFive = document.getElementById("five");
numberFive.addEventListener("click", () => numberPress(numberFive.textContent));
const numberSix = document.getElementById("six");
numberSix.addEventListener("click", () => numberPress(numberSix.textContent));
const numberSeven = document.getElementById("seven");
numberSeven.addEventListener("click", () => numberPress(numberSeven.textContent));
const numberEight = document.getElementById("eight");
numberEight.addEventListener("click", () => numberPress(numberEight.textContent));
const numerNine = document.getElementById("nine");
numerNine.addEventListener("click", () => numberPress(numerNine.textContent));

// Hide previous input at start
previousInput.classList.add("hidden");

// ---- Operations ----
const operations = ["+", "-", "*", "/"];

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => decimalPress(decimal.textContent));
const percent = document.getElementById("percent");
percent.addEventListener("click", () => percentPress(percent.textContent));

const add = document.getElementById("add");
add.addEventListener("click", () => operationPress(add.id));
const subtract = document.getElementById("subtract");
subtract.addEventListener("click", () => operationPress(subtract.id));
const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => operationPress(multiply.id));
const divide = document.getElementById("divide");
divide.addEventListener("click", () => operationPress(divide.id));
const equal = document.getElementById("equal");
equal.addEventListener("click", () => solve());

// -- Manipulators

// Decimal Handling
function decimalPress(value){
    if(input.slice(-1) === "."){
        return;
    } else {

        input += value;
        // Update Number
        currentInput.textContent = input;
    }

}

function percentPress(value){
    if(input.slice(-1) === "%" || input === "0"){
        return;
    } else {

        input += value;
        // Update Number
        currentInput.textContent = input;
    }
}

// -- Operations

function operationPress(operand, value){

    if(operationCounter != 0){
        alert("Only one operation: Clear or solve to start over.")
    } else{
        // Operation counter + 1
        operationCounter += 1;
        // Set first half to expOne -- also check for percentage
        if(input.includes("%")){

            expOne = Number(input.slice(0,-1)) / 100;

        } else {
            expOne = Number(input.slice(0));
        }   
        console.log(typeof expOne, expOne)

        // Add
        if (operand === "add") {
            input += "+";
            operandFinder = "add";
        }

        // Subtract
        else if(operand === "subtract"){
            input += "-";
            operandFinder = "subtract";
        }

        // Multiply
        else if(operand === "multiply"){
            input += "*";
            operandFinder = "multiply";
        }

        // Divide
        else if (operand === "divide"){
            input += "/";
            operandFinder = "divide";
        }
    }
    
    currentInput.textContent = input;
}

// Check for percent
function percentCheck(index){
     // Slice & put input into previous textContent and set input and expressions back to 0
    if(input.includes("%")){
        expTwo = Number(input.slice(index + 1, -1) / 100);
    } else{
        expTwo = Number(input.slice(index + 1, -1));
    }

    return expTwo;
}

// Solve
function solve(){
    let solution = null;
    let operandIndex = null;

   if(operandFinder === "add"){
        operandIndex = input.indexOf("+")
        solution = expOne + percentCheck(operandIndex);
   }

   // If solved with a percent and no operand
   else{
     solution = Number(input.slice(0,-1)) / 100;
   }


    previousInput.textContent = input;
    previousInput.classList.remove("hidden");
    // Set currentInput to solution
    currentInput.textContent = solution;
    return;
}

// ---- Numbers ----

// Number Handling
function numberPress(value){

    // Set Clear to C
    if(value !== "0"){
        clearButton.textContent = "C";
    }
   
    if (input === "0") {
        // If input is at default, replace with new number
        input = value
    } else {
        // Add new number to current input
        input += value;
    }
    
    // Update Number
    currentInput.textContent = input;
}


// ----- Controls -----

// Delete Button - Substring until last digit in input string
function deletePress(){
    if (input.length > 0) {

        if (input.length === 1) {
            input = 0
        } else{
            input = input.slice(0, -1)
        }  
    }

    // Update Number
    currentInput.textContent = input;
}

function clearPress(){
    // Reset to AC
    clearButton.textContent = "AC";
    // Set input back to 0
    input = "0";
    // Update Number
    currentInput.textContent = input;

    // Clear and hide previous
    previousInput.textContent = "";
    previousInput.classList.add("hidden");

    // Set operationCounter back to 0
    operationCounter = 0;
}



