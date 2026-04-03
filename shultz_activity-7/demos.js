//Activity 7: Array and Object Demonstrations

console.log("Activity 7: Array and Object Demonstrations");

//{Part A: Array and Object Demonstrations}

console.log("Array Demonstration:");

// Creating arrays
const number = [1, 2, 3, 4, 5];
const colors = new Array('red', 'green', 'blue');
const mixed = [42, 'hello', true, null, {name: 'John'}];

console.log("Numbers array:", number);
console.log("Colors array:", colors);
console.log("Mixed array:", mixed);

// Array methods demonstrations
console.log("\nArray Methods:");
const fruits = ['apple', 'banana'];
console.log("Original fruits:", fruits);

fruits.push('orange');
console.log("After push('orange'):", fruits);

const lastFruit = fruits.pop();
console.log("After pop():", fruits, "- removed:", lastFruit);

fruits.unshift('grape');
console.log("After unshift('grape'):", fruits);

const firstFruit = fruits.shift();
console.log("After shift():", fruits, "- removed:", firstFruit);

// Array iteration
console.log("\nArray Iteration:");
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}

console.log("For/of loop:");
for (const number of numbers) {
    console.log(`Value: ${number}`);
}

console.log("forEach method:");
numbers.forEach((number, index) => {
    console.log(`forEach - Index ${index}: ${number}`);
});

console.log("map method (double values):");
const doubled = numbers.map(number => number * 2);
console.log("Doubled:", doubled);

console.log("filter method (even numbers only):");
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Object demonstrations
console.log("Object demonstrations:");

// Creating objects
const person = {
    firstName: 'Testy',
    lastName: 'Test',
    age: 25,
    city: 'Testvile',
    isEmployed: true
};

console.log("Person object:", person);

// Access methods
console.log("Dot notation - firstName:", person.firstName);
console.log("Bracket notation - lastName:", person['lastName']);

// Dynamic access
const propertyName = 'age';
console.log(`Dynamic access (${propertyName}):`, person[propertyName]);

// Adding and modifying properties
person.email = 'john.doe@email.com';
person['phone'] = '555-1234';
person.age = 31;

console.log("After adding/modifying properties:", person);

// Deleting properties
delete person.phone;
console.log("After deleting phone:", person);

// Object Arrays
console.log("\nObject arrays");

const items = [
    { name: 'Laptop', price: 999.99, inStock: true },
    { name: 'Mouse', price: 29.99, inStock: true },
    { name: 'Monitor', price: 249.99, inStock: false }
];

console.log("Items array:", items);

// array methods
const availableItems = items.filter(item => item.inStock);
console.log("In stock items:", availableItems);

const itemNames = items.map(item => item.name);
console.log("Item names:", itemNames);

const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
console.log(`Total price: $${totalPrice.toFixed(2)}`);

console.log("\nDemonstrations done");
console.log("Check the product catalog below for the application.");