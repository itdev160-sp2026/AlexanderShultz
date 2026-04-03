//Activity 8: Async. Javascript Demos
console.log("Activity 8: Async. Javascript Demo");

//{Part A: Async. Javascript Demos}
console.log("Async. Javascript Demonstration");

console.log("Starting setTimeout demo...");
console.log("1. This should log instantly.");
setTimeout(() => {
    console.log("3. This should log third (due to setTimeout)");
}, 1000);

console.log("2. This should log second (placed after setTimeout)");

console.log("Event loop demo:");
console.log("A. Syncronous code.");

setTimeout(() => {
    console.log("C. Async. callback (0ms setTimeout)");
}, 0);

console.log("B. More sync. code");

console.log("Promise demo:");

const simplePromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.3;
    setTimeout(() => {
        if (success) {
            resolve("Promise succeed!");
        } else {
            resolve("Promise failed...");
        }
    }, 500)
});

function demonstratePromise() {
    console.log("Promise demo with .then/.catch:");

    simplePromise
        .then((result) => {
            console.log("Promise success: ", result);
        })
        .catch((error) => {
            console.log("Promise error: ", error);
        });
}

async function demonstrateAsyncAwait() {
    console.log("Promise demo with async/wait:");

    try {
        const result = await simplePromise;
        console.log("Async/await success: ", result);
    } catch (error) {
        console.log("Async/await failure: ", error);
    }
}

demonstratePromise();
demonstrateAsyncAwait();

function demonstrateFetch() {
    console.log("Fetch demo:");

    fetch ("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            console.log("Response Object: ", response);
            console.log("Response Status: ", response.status);
            console.log("Response OK?: ", response.ok);
            return response.json();
        })
        .then((data) => {
            console.log("JSON data: ", data);   
        })
        .catch((error) => {
            console.error("Fetch error: ", error);
        });
}

async function demonstrateFetchAsync() {
    console.log("Fetch demo with async/await:");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/2"
        );
        console.log("Async response object: ", response);
        console.log("Async response status: ", response.status);
        const data = await response.json();
        console.log("Async JSON data:", data);
    } catch (error) {
        console.error("Async fetch error: ", error)
    }
}

demonstrateFetch();
demonstrateFetchAsync();