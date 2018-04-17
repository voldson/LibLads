// Get page elements
const submitStoryButton = document.getElementById("submitStoryButton");

// Add event listener
submitStoryButton.addEventListener("click", validateStory);

// Callbacks
function validateStory() {
    // Save the Title
    // Save the Summary
    // Save the Story

    // Validate that none of these are identical to anything else in the database

    goToSubmissionScreen();
}

function goToSubmissionScreen() {
    window.location.href = "404.html";
}