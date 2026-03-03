//Activity 5: Simple Math Operations
console.log("Activity 5: Simple Math Operators");

//{Part A: Element Selection/Setup}
console.log("Element Selection/Setup");

//Elements for event handling
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.getElementById("clear");
const resultDiv = document.getElementById("result");

console.log("Number1 input:", number1Input);
console.log("Number2 input:", number2Input);
console.log("Operator buttons:", operationButtons);
console.log("Result Area:", resultDiv);

//{Part B: Event Object Handler}
function logEventDetails(event) {
    console.log("Event Details:");
    console.log("- Type:", event.type);
    console.log("- Target:", event.target);
    console.log("- Target TagName:", event.target.tagName);
    console.log("- Target TextContent:", event.target.tagName);
    console.log("- CurrentTarget:", event.currentTarget);
}

//{Part C: Math Functions}

function addNumbers(num1, num2) {
    const result = num1 + num2;
    console.log(`Addition: ${num1} + ${num2} = ${result}`);
    return result;
}

function subtractNumbers(num1, num2) {
    const result = num1 - num2;
    console.log(`Subtraction: ${num1} - ${num2} = ${result}`);
    return result;
}

function multiplyNumbers(num1, num2) {
    const result = num1 * num2;
    console.log(`Multiplication: ${num1} * ${num2} = ${result}`);
    return result;
}

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        console.error("Division by zero attempted!");
        return "Error: Cannot divide by zero";
    }
    const result = num1 / num2;
    console.log(`Division: ${num1} / ${num2} = ${result}`);
    return result;
}

//{Part D: Input validation + Result display}
function validateInputs() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    console.log("Validating inputs...");

    if (isNaN(num1) || number1Input.value.trim() === "") {
        showError("Please enter a valid first number");
        return null;
    }

    if (isNaN(num2) || number2Input.value.trim() === "") {
        showError("Please enter a valid second number");
        return null;
    }

    console.log(`Inputs validated: ${num1}, ${num2}`);
    return { num1, num2 };
}

function showResult(result, operation) {
    resultDiv.textContent = `Result = ${result}`;
    resultDiv.className = "Result Success";
    console.log(`Displaying result: ${result} for operation: ${operation}`);
}

function showError(message) {
  resultDiv.textContent = message;
  resultDiv.className = "result error";
  console.error(`Displaying error: ${message}`);
}

function clearAll() {
  number1Input.value = "";
  number2Input.value = "";
  resultDiv.textContent = "Result will appear here";
  resultDiv.className = "result";
  console.log("All inputs and results cleared");
}

//Event handling
function handleOperationClick(event) {
  console.log("\nPerforming Operations...");
  logEventDetails(event);

  const operation = event.target.dataset.operation;
  console.log(`Operation selected: ${operation}`);

  const inputs = validateInputs();
  if (!inputs) {
    return; // Failed
  }

  const { num1, num2 } = inputs;
  let result;

  // Perform calculation based on operation
  switch (operation) {
    case "add":
      result = addNumbers(num1, num2);
      showResult(result, "addition");
      break;
    case "subtract":
      result = subtractNumbers(num1, num2);
      showResult(result, "subtraction");
      break;
    case "multiply":
      result = multiplyNumbers(num1, num2);
      showResult(result, "multiplication");
      break;
    case "divide":
      result = divideNumbers(num1, num2);
      if (typeof result === "string") {
        showError(result);
      } else {
        showResult(result, "division");
      }
      break;
    default:
      console.error(`Unknown operation: ${operation}`);
      showError("Unknown operation");
  }
}
//Event Listeners
console.log("Event Listeners being set up...");

//{Method 1: addEventListener() for operators}
operationButtons.forEach((button) => {
  button.addEventListener("click", handleOperationClick);
  console.log(`Added listener to ${button.textContent} button`);
});

//{Method 2: addEventListener() for clear}
clearButton.addEventListener("click", function (event) {
  console.log("\nClear button clicked");
  logEventDetails(event);
  clearAll();
});

// Demonstrate different event types
number1Input.addEventListener("focus", function (event) {
  console.log("Number1 input focused");
  event.target.style.backgroundColor = "#e3f2fd";
});

number1Input.addEventListener("blur", function (event) {
  console.log("Number1 input lost focus");
  event.target.style.backgroundColor = "";
});

number2Input.addEventListener("focus", function (event) {
  console.log("Number2 input focused");
  event.target.style.backgroundColor = "#e3f2fd";
});

number2Input.addEventListener("blur", function (event) {
  console.log("Number2 input lost focus");
  event.target.style.backgroundColor = "";
});

// Add mouseover/mouseout events for feedback
operationButtons.forEach((button) => {
  button.addEventListener("mouseover", function (event) {
    console.log(`Mouse over ${event.target.textContent} button`);
  });

  button.addEventListener("mouseout", function (event) {
    console.log(`Mouse left ${event.target.textContent} button`);
  });
});

console.log("All event listeners attached.");
console.log("Math Operations initialized.");
console.log("Try entering numbers and clicking operation buttons.");