//Activity 6: Function and Scope Demonstrations

console.log("Activity 6: Functions and Scope Demonstrations");

//{Part A: Function Demonstrations}

console.log("Function Demonstration:");

// Function declaration
function demonstrateDeclaration(message) {
  console.log("Function declaration:", message);
  return `Processed: ${message}`;
}

// Function expression
const demonstrateExpression = function (message) {
  console.log("Function expression:", message);
  return `Processed: ${message}`;
};

// Arrow function
const demonstrateArrow = (message) => {
  console.log("Arrow function:", message);
  return `Processed: ${message}`;
};

console.log("Testing different function types:");
console.log(demonstrateDeclaration("Declaration"));
console.log(demonstrateExpression("Expression"));
console.log(demonstrateArrow("Arrow"));

//Scope demonstration

console.log("Scope Demonstration:");

let globalVariable = "Global";

function scopeDemo() {
  let localVariable = "Local";

  console.log("Inside function:");
  console.log("- Can access global:", globalVariable);
  console.log("- Can access local:", localVariable);

  function nestedFunction() {
    let nestedVariable = "Nested";
    console.log("Inside nested function:");
    console.log("- Can access global:", globalVariable);
    console.log("- Can access local:", localVariable);
    console.log("- Can access nested:", nestedVariable);
  }

  nestedFunction();
  // console.log(nestedVariable); // This would throw a error, due to it being not instigated.
}

scopeDemo();
console.log("Outside function:");
console.log("- Can access global:", globalVariable);
// console.log(localVariable); // This would throw an error, due to it, once again, not being instigated.

console.log("\nFunction demonstrations complete");
console.log("Check the to-do list below for the enhanced app.");