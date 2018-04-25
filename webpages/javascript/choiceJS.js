// Get page elements
const fillinButton = document.getElementById("fillinButton");
const createButton = document.getElementById("createButton");
test = "test";

// Add event listeners
fillinButton.addEventListener("click", goToFillinScreen);
createButton.addEventListener("click", goToCreateScreen);

// Callbacks
function goToFillinScreen() {
    window.location.href = "fillin.html";
}
function goToCreateScreen() {
    window.location = "create.html"
}