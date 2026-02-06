// Activity 2: Age Checker Application

// Function to check age and display result
function checkAge() {
    //Sets variables
    const ageInput = document.getElementById("ageInput");
    const resultDiv = document.getElementById("result");
    const inputValue = ageInput.value.trim();

    //Cleans up stuff
    console.log(`User input: "${inputValue}"`);
    resultDiv.className = "";

    //Checks to see if the input is empty.
    if (inputValue === "") {
        resultDiv.innerText = "Please enter your age";
        resultDiv.className = "invalid";
        console.log("Result: no input")
        return;
    }
    //converts the input into a number
    let age = Number(inputValue);

     // Check if input is a valid number
    if (isNaN(age)) {
        resultDiv.innerText = "Invalid age - please enter a number";
        resultDiv.className = "invalid";
        console.log("Result: Not a number");
        return;
    }
    // Check for realistic age range
    if (age > 150 || age < 0) {
        resultDiv.innerText = "Invalid age - please enter a realistic age (0-150)";
        resultDiv.className = "invalid";
        console.log("Result: Age out of acceptable range");
        return;
    }
     // Determine if adult or minor
    if (age < 18) {
        resultDiv.innerText = `You are ${age} years old - You are a minor`;
        resultDiv.className = "minor";
        console.log(`Result: Adult ( with age: ${age})`);
    } else {
        resultDiv.innerText = `You are ${age} years old - You are an adult`;
        resultDiv.className = "adult";
        console.log(`Result: Minor ( with age: ${age})`);
    }
}