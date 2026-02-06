console.log("Activity 2: Operations + Control Flow")
//{Part A}
console.log("Aritmetic based operations:")
let a = 9
let b = 4

console.log(`a = ${a}, b = ${b}`);
console.log(`Addition (a + b): ${a + b}`);
console.log(`Subtraction (a - b): ${a - b}`);
console.log(`Multiplication (a * b): ${a * b}`);
console.log(`Division (a / b): ${a / b}`);
console.log(`Mod (a % b): ${a % b}`);

console.log("Operator Precedence:");
console.log(`8 + 3 * 7 = ${8 + 3 * 7} (multiplication comes first)`);
console.log(`(2 + 3) * 4 = ${(8 + 3) * 7} (parentheses comes first)`);
//{Part B}
let x = 5;
let y = "5";
let z = 10;

console.log(`x = ${x} (number), y = "${y}" (string), z = ${z}`);
console.log(`x == y: ${x == y} (loose comparison)`);
console.log(`x === y: ${x === y} (strict comparison)`);
console.log(`x != y: ${x != y} (loose incomparison)`);
console.log(`x !== y: ${x !== y} (strict incomparison)`);
console.log(`x > z: ${x > z} (greater than)`);
console.log(`x < z: ${x < z} (less than)`);
console.log(`x >= 5: ${x >= 5} (greater than or equal)`);
console.log(`x <= 5: ${x <= 5} (less than or equal)`);
//{Part C}
console.log("Logical Operations:")
let isAdult = true
let hasLicense = false;
let age = 20;

console.log(`isAdult = ${isAdult}, hasLicense = ${hasLicense}, age = ${age}`);
console.log(
  `isAdult && hasLicense: ${isAdult && hasLicense} (AND (both inputs must be true))`,
);
console.log(
  `isAdult || hasLicense: ${isAdult || hasLicense} (OR (one input can be true))`,
);
console.log(`!hasLicense: ${!hasLicense} (NOT (flips input))`);
console.log(
  `age >= 18 && age < 65: ${age >= 18 && age < 65} (combines condition)`,
);
//{Part D}
console.log("Conditionals:")
let score = 85;

console.log(`Score: ${score}`);
if (score >= 90) {
  console.log("Grade: A (Above or equals 90)");
} else if (score >= 80) {
  console.log("Grade: B (Above or equals 80)");
} else if (score >= 70) {
  console.log("Grade: C (Above or equals 70)");
} else if (score >= 60) {
  console.log("Grade: D (Above or equals 60)");
} else {
  console.log("Grade: F (Defualt case)");
}
//{Part E}
console.log("Switch statement:");

let dayOfWeek = 5;

console.log(`Day number: ${dayOfWeek}`);
switch (dayOfWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day number, default case");
}
//{Part F}
document.getElementById("output").innerHTML =
  "<h3>Check the console for demonstrations on operators and conditionals.</h3>";