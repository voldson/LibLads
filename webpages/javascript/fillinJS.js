// Get page elements
const seeStoryButton = document.getElementById("seeStoryButton");
var boxesTab = document.getElementById("words");

// Add event listeners
//seeStoryButton.addEventListener("click", goToSeeStoryScreen);
seeStoryButton.addEventListener("click", createArray)

// Callbacks
function goToSeeStoryScreen() {
    // window.location.href = "../html/seestory.html";
    window.location.href = "story.html";
}

function createArray() {
	alert(boxesTab.rows[0].cells[0].value);
}