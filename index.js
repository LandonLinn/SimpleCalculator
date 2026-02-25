// Copyright
const date = new Date();
const year = date.getFullYear();
const copyright = document.getElementById("copyright");
copyright.textContent = `© ${year}, Landon Linn`

// Get Input & Previous Input ID's
const previousInput = document.getElementById("previous");
const currentInput = document.getElementById("current");

// Set input string variable
let input = "";

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



// const decimal = document.getElementById("decimal");
// decimal.addEventListener("click", () => primaryPress(decimal.textContent));
// const negation = document.getElementById("negation");


// Hide previous input at start
previousInput.classList.add("hidden");

// ---- Numbers ----

// Number Handling
function numberPress(value){

    // Set Clear to C
    clearButton.textContent = "C";

    console.log(value)
    if (input === "0") {
        // If input is at default, replace with new number
        input = value
    }
    else if (input[-1] === "."){
        return;
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
}



