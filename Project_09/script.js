const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});


equalsButton.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
});
