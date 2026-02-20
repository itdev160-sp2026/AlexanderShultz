// Activity 3: Dynamic Greeting Card
console.log("Activity 3: Dynamic Greeting Card");

// {Part A}
console.log("DOM Selections");
//Returns the elements with the greeting-message, greeting image, and name input
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

console.log("Greeting message element:", greetingMessage);
console.log("Greeting image element:", greetingImage);
console.log("Name input element:", nameInput);
//Returns the first instances of a button element, and the card-container class
const cardContainer = document.querySelector(".card-container");
const firstButton = document.querySelector("button");

console.log("Card container:", cardContainer);
console.log("First button:", firstButton);
//selects all buttons, and returns the amount of buttons
const allButtons = document.querySelectorAll("button");
console.log(`Found ${allButtons.length} buttons:`, allButtons);

// {Part B}
console.log("Content Modifications");

console.log("Original message textContent:", greetingMessage.textContent);
console.log("Original image alt attribute:", greetingImage.getAttribute("alt"));

// {Part C}
console.log("Attribute Modifications");

console.log("Image src:", greetingImage.getAttribute("src"));
console.log("Image has 'src' attribute:", greetingImage.hasAttribute("src"));

// Card Data
const greetings = {
    birthday: {
        message: "Happy Birthday!",
        image: "https://picsum.photos/id/1/300/200?text=Happy+Birthday!",
        alt: "Birthday celebration greeting"
    },
    holiday: {
        message: "Happy Holidays!",
        image: "https://picsum.photos/id/12/300/200?text=Happy+Holidays!",
        alt: "Holiday celebration greeting"
    },
    thankYou: {
        message: "Thank You!",
        image: "https://picsum.photos/id/47/300/200?text=Thank+You!",
        alt: "Thank you greeting"
    },
    welcome: {
        message: "Welcome!",
        image: "https://picsum.photos/id/237/200/300?text=Welcome",
        alt: "Welcome greeting"
    }
};

// {Part D}
console.log("Function of the greeting cards");

function updateGreeting(type) {
    const greeting = greetings[type];
    
    if (greeting) {
        // Update the message
        greetingMessage.textContent = greeting.message;
        
        // Update the image
        greetingImage.setAttribute("src", greeting.image);
        greetingImage.setAttribute("alt", greeting.alt);
        
        console.log(`Updated greeting to: ${type}`);
        console.log(`Message: ${greeting.message}`);
        console.log(`Image: ${greeting.image}`);
    } else {
        //chucks an error
        console.error(`Greeting type "${type}" not found`);
    }
}

//several different functions to use repeatibly.
function setBirthdayGreeting() {
    updateGreeting("birthday");
}

function setHolidayGreeting() {
    updateGreeting("holiday");
}

function setThankYouGreeting() {
    updateGreeting("thankYou");
}

function setRandomGreeting() {
    const types = Object.keys(greetings);
    const randomType = types[Math.floor(Math.random() * types.length)];
    updateGreeting(randomType);
    console.log(`Random greeting selected: ${randomType}`);
}

// {Part E}
function personalizeGreeting() {
    const name = nameInput.value.trim();
    
    //makes sure the name is not empty
    if (name === "") {
        alert("Please enter a name to personalize the greeting!");
        console.log("Personalization attempted with empty name");
        return;
    }
    
    // Get current message and add name
    const currentMessage = greetingMessage.textContent;
    const personalizedMessage = `${currentMessage}\n\nDear ${name}!`;
    
    greetingMessage.innerHTML = personalizedMessage.replace('\n\n', '<br><br>');
    
    console.log(`Personalized greeting for: ${name}`);
    console.log(`Full message: ${personalizedMessage}`);
    
    // Clear input
    nameInput.value = "";
}

// Display message on page load
document.getElementById("output").innerHTML = `
    <h3>DOM Manipulation Demo Loaded!</h3>
    <p>Successfully selected and ready to manipulate DOM elements</p>
    <p>Check the console for detailed demonstrations of DOM operations</p>
`;

console.log("Dynamic Greeting Card application loaded successfully!");