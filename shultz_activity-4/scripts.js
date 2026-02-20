// Activity 4: Interactive To-Do List
console.log("Activity 4: Interactive To-Do List");

//Global variables
let tasks = [];
let taskIdCounter = 1;

// {Part A: Element Creation}

console.log("Element Creation Demo");

//Creating three different elements
const demoDiv = document.createElement("div");
console.log("Created div element.");
const demoSpan = document.createElement("span");
console.log("Created span element.");
const demoButton = document.createElement("button");
console.log("Created button element.");

//Setting Properties
demoDiv.textContent = "This is an example of a Div created.";
console.log("Div textContent: ", demoDiv.textContent);
demoDiv.id = "demo-div";
console.log("Div id: ", demoDiv.id);
console.log("Div after setting the properties: ", demoDiv);
demoSpan.innerHTML = "<strong>Demo span using HTML</strong>";
demoButton.textContent = "Demo Button";

// {Part B: Element Styling}

console.log("Element Style Demos");

//Direct mod
demoDiv.style.backgroundColor = "blue";
console.log("Background color added");
demoDiv.style.padding = "5px";
console.log("Padding added");
demoDiv.style.border = "1px dashed lightblue";
console.log("Border added");

//Classlist stuff
demoDiv.classList.add("demo-class");
demoDiv.classList.add("highlighted");
console.log("demoDiv classList: ", demoDiv.classList);
console.log("Does demoDiv has 'demo-class'?: ", demoDiv.classList.contains("demo-class"));

demoDiv.classList.remove("highlighted");
console.log("Highlighted removed from demoDiv");

demoDiv.classList.toggle("active");
console.log("Active toggled in demo-div");

//add spacing styles
demoSpan.style.marginTop = "10px";
demoSpan.style.display = "block";
console.log("Spacing styles added to demoSpan");
demoButton.style.marginTop = "10px";
demoButton.style.display = "block";
console.log("Spacing styles added to demoButton");

// {Part C: Element Appending}
console.log("Element Append Demo");
const outputDiv = document.getElementById("output");
console.log("Output Div before: ", outputDiv.children.length, " children");

//appending elements
outputDiv.appendChild(demoDiv);
outputDiv.appendChild(demoButton);
outputDiv.appendChild(demoSpan);
console.log("Output Div after: ", outputDiv.children.length, " children");

// {Part D: Core Functionality}
console.log("Core Functionality (addTask and createTaskElement)");

function addTask() {
    //nabs the input
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    //makes sure the name is not empty
    if (taskText === "") {
        alert("Please enter a name for the next task");
        console.log("Attempted adding tas with empty name");
        return;
    }

    //creates the next blank element and adds it to the array
    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(task);
    console.log("Task added to array:", task);

    //Creates the item in the lists and appends the element to it.
    const listItem = createTaskElement(task);
    const toDoList = document.getElementById("todo-list");
    toDoList.appendChild(listItem);

    //Flushes the taskInput
    taskInput.value = "";

    //Updates the task status
    updateTaskStats();

    console.log(`Task "${taskText}" added, Total Tasks: "${tasks.length}"`);
}

function createTaskElement(task) {
    //creates the item and it's span.
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    console.log("listItem created.")
    listItem.setAttribute("data-task-id", task.id);
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;
    console.log("testSpan created.");

    //Creates status' span
    const statusSpan = document.createElement("span");
    statusSpan.className = "task-status";
    console.log("Status span created.");

    //sets the initial state
    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className += " status-done";
    } else {
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className += " status-pending";
    }

    //Appends it to the list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(statusSpan);
    
    // Click event for toggling completion
    listItem.onclick = function() {
        toggleTaskCompletion(task.id);
    };
    
    console.log("Created task element:", listItem);
    return listItem;
}

// {Part E: Task State Management}

function toggleTaskCompletion(taskId) {
    console.log(`Toggling completion for task ID: ${taskId}`);
    
    // Finds task in array, and toggles completeion
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        console.error(`Task with ID ${taskId} not found`);
        return;
    }
    task.completed = !task.completed;
    console.log(`Task "${task.text}" is now ${task.completed ? 'completed' : 'pending'}`);

    //Finds and updates DOM Element
    const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const statusSpan = listItem.querySelector(".task-status");
    
    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className = "task-status status-done";
    } else {
        listItem.classList.remove("done");
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className = "task-status status-pending";
    }

    // Update the task statistics
    updateTaskStats();
}

function updateTaskStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    // Update all revelant DOM elements
    document.getElementById("taskCount").textContent = `(${totalTasks} task${totalTasks !== 1 ? 's' : ''})`;
    document.getElementById("totalTasks").textContent = `Total: ${totalTasks}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completedTasks}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pendingTasks}`;
    
    console.log(`Stats updated - Total: ${totalTasks}, Completed: ${completedTasks}, Pending: ${pendingTasks}`);

    // Enter key functionality for input
    document.getElementById("taskInput").onkeydown = function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    };
}

// Initialize application
console.log("To-Do List application initialized successfully!");
console.log("Try adding some tasks and clicking them to mark as complete!");

// Display  demo content
const initialDemo = `
    <h3>DOM Manipulation Demonstrations</h3>
    <p>Element creation examples loaded above</p>
    <p>Styling and classList demonstrations complete</p>
    <p>Ready to create and manage to-do tasks!</p>
`;

setTimeout(() => {
    document.getElementById("output").innerHTML = initialDemo + document.getElementById("output").innerHTML;
}, 100);