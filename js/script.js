// Selects the HTML element that will display the greeting
const greetingElement = document.getElementById("greeting");

// Gets the current hour (0–23) from the user's system time
const currentHour = new Date().getHours();

// Declaring a variable to store the greeting message
let message;

// Checks the time and assigns the appropriate greeting
if (currentHour < 12) {
  message = "Good Morning!"; // From 00:00 to 11:59
} else if (currentHour < 18) {
  message = "Good Afternoon!"; // From 12:00 to 17:59
} else {
  message = "Good Evening!";   // From 18:00 to 23:59
}

// Displays the greeting message inside the selected HTML element
greetingElement.textContent = message;

// Implement show/hide project descriptions on button click // 
// Get all buttons that show project details
const buttons = document.querySelectorAll(".showDetails");

// Loop through each button
buttons.forEach(function(button) {

    // Add a click event to each button
    button.addEventListener("click", function() {

        // Find the description that belongs to the same project
        const description = button.parentElement.querySelector(".projectDescription");
       
        // Check if the description is currently visible
        if (description.style.display === "block") {
            // Hide the description
            description.style.display = "none";
            // Change the button text back to "Show details"
            button.textContent = "Show details";
        } 
        else {
            // Show the description
            description.style.display = "block";
            // Change the button text to "Hide details"
            button.textContent = "Hide details";
        }

    });

});

// Validates user input and shows a confirmation message// 
// Get form and input elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

// Listen for form submission
form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Define email regex to check the validatiy of the entered email 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the name field is empty
    if (name === "") {
        formMessage.textContent = "Please enter your name.";
    }
    // Check if the name length is less than 3 characters
    else if (name.length < 3) {
        formMessage.textContent = "Name must be at least 3 characters long.";
    } 
    // Check if the email field is empty
    else if (email === "") {
        formMessage.textContent = "Please enter your email.";
    }
    // Check if the email format is valid
    else if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
    }
     // Check if the message field is empty
    else if (message === "") {
        formMessage.textContent = "Please enter your message.";
    }
    // Check if the message is less than 8 characters
    else if (message.length < 8) {
    formMessage.textContent = "Message must be at least 8 characters long.";
    }       
    // If all inputs are valid, show success message
    else {
        formMessage.textContent = "Your message has been sent successfully!";
        form.reset();
    }

});

// Clear the form message when the user starts typing again to avoid confusion
nameInput.addEventListener("input", function() {
    clearMessage();
});

emailInput.addEventListener("input", function() {
    clearMessage();
});

messageInput.addEventListener("input", function() {
    clearMessage();
});

function clearMessage() {
    formMessage.textContent = "";
}

// Fetching inspirational quotes
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("anotherQuoteBtn");
const quoteError = document.getElementById("quoteError");

async function loadQuote() {
    quoteText.textContent = "Loading quote...";
    quoteAuthor.textContent = "";
    quoteError.textContent = "";

    try {
        //fetch the 
        const response = await fetch("https://dummyjson.com/quotes/random");

        // check the responce 
        if (!response.ok) {
            throw new Error("Failed to fetch quote.");
        }

        const data = await response.json();
        // show the result 
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;
    } catch (error) {
        // handle the error 
        quoteText.textContent = "No quote available right now.";
        quoteAuthor.textContent = "";
        quoteError.textContent = "Sorry, the quote could not be loaded. Please try again.";
    }
}

newQuoteBtn.addEventListener("click", loadQuote);

// call the function to load one quote automatically when the page opens
loadQuote();


// Add timer to show how long the user has been on the site
const timerElement = document.getElementById("timer");

let secondsSpent = 0;

function updateTimer() {
    // find the value of hours, minutes and seconds
    const hours = Math.floor(secondsSpent / 3600);
    const minutes = Math.floor((secondsSpent % 3600)/ 60);
    const seconds = secondsSpent % 60;

    // formate numbers to be at least 2 characters long, and add 0 at the beginning if it was less than 2 characters. 
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");


    // display the time
    timerElement.textContent = `Time spent on this site: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    secondsSpent++;
}
updateTimer();
// Run this function again and again every 1000 milliseconds, which is every second 
setInterval(updateTimer, 1000);

// Dark mode toggle
// Getting the button
const themeBtn = document.getElementById("themeToggleBtn");

// Get saved theme from browser storage (if user selected before)
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    // adds class dark-mode to body so that it uses the dark-mode colors
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "Light Mode";
}

// Toggle when button is clicked
themeBtn.addEventListener("click", function() {
    // Remove dark-mode class if it exists, otherwise add it 
    document.body.classList.toggle("dark-mode");

    // Save the current theme so it can be remembered after refresh
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "Dark Mode";
    }
});