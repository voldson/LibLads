// Get page elements
const submitStoryButton = document.getElementById("submitStoryButton");
const titleField = document.getElementById("titleField");
const summaryField = document.getElementById("summaryField");
const contentField = document.getElementById("contentField");

// Other variables
const title;
const summary;
const content;
var parsedBlanks = [];

// Add event listener
submitStoryButton.addEventListener("click", validateStory);

// Callbacks
function validateStory() {
    // Parse out the blanks
    parseContent();

    // Add this information to the databse
    addNewStory(parsedBlanks, contentField.value, summaryField.value, titleField.value);

    // goToSubmissionScreen();
}

function parseContent() {
    // Parse out the elements following the <:WORD:> format
    parsedBlanks.push("test blank");
}

function goToSubmissionScreen() {
   // window.location.href = "404.html";
}