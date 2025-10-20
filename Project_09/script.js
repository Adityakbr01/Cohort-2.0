const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";

// Loop through all buttons and handle click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Clear the display
clearButton.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});

// Evaluate expression
equalsButton.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
});
