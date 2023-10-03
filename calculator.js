document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let prevInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "=") {
                if (currentInput !== "") {
                    if (prevInput !== "") {
                        currentInput = eval(prevInput + operator + currentInput).toString();
                        display.value = currentInput;
                        operator = "";
                        prevInput = "";
                    }
                }
            } else if (value === "C") {
                currentInput = "";
                operator = "";
                prevInput = "";
                display.value = "";
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    if (operator === "") {
                        prevInput = currentInput;
                        currentInput = "";
                        operator = value;
                    } else {
                        prevInput = eval(prevInput + operator + currentInput).toString();
                        display.value = prevInput;
                        currentInput = "";
                        operator = value;
                    }
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
