//Activity 8: Quote of The Day Generator - Async

console.log("Quote API Integration");

//{Part A: Quote API Integration}
const QUOTE_API = 'https://dummyjson.com/quotes/random';

let appState = {
    currentQuote: null,
    isLoading: false
};

async function fetchQuote() {
    try {
        showLoading(true);
        hideError();
        console.log("Fetching a random quote.");
        const response = await fetch(QUOTE_API);
        if (!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Quote data: ", data);
        return data;
    } catch (error) {
        console.error("Error fetching quote:", error);
        showError(`Failed to fetch quote: ${error.message}`);
        return null;
    } finally {
        showLoading(false);
    }
}

async function getNewQuote() {
    console.log("Getting new quote.");
    const quote = await fetchQuote();
    if (quote) {
        appState.currentQuote = quote;
        displayQuote(quote);
        console.log("New quote successful.");
    }
}

//{Part B: Quote Display Functions}

function displayQuote(quote) {
    const container = document.getElementById('quoteContainer');
    const quoteCard = document.createElement('div');
    quoteCard.className = 'quote-card';
    quoteCard.innerHTML = `
        <p class="quote-text">${quote.quote}</p>
        <p class="quote-author">&mdash; ${quote.author}</p>
    `;
     container.innerHTML = '';
     container.appendChild(quoteCard);
     console.log(`Quote displayed by ${quote.author}`);
}

function showLoading(show) {
    const loadingIndicator = document.getElementById("loadingIndicator");
    const button = document.getElementById("getQuoteBtn");
    if (show) {
        loadingIndicator.classList.remove("hidden");
        button.disabled = true;
        appState.isLoading = true;
    } else {
        loadingIndicator.classList.add("hidden");
        button.disabled = false;
        appState.isLoading = false;
    }
}

function showError(message) {
    const errorDisplay = document.getElementById("errorDisplay");
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorDisplay.classList.remove("hidden");
}

function hideError() {
  const errorDisplay = document.getElementById("errorDisplay");
  errorDisplay.classList.add("hidden");
}

function handleGetQuote() {
  getNewQuote();
}

function handleRetry() {
  getNewQuote();
}

function initializeApp() {
    console.log("Starting app:");
    document.getElementById("getQuoteBtn").addEventListener("click", handleGetQuote);
    document.getElementById("retryBtn").addEventListener("click", handleRetry);
    console.log("App initialized.")
}

initializeApp();