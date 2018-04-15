// Get page elements
const fillinButton = document.getElementById("fillinButton");
const createButton = document.getElementById("createButton");

// Add event listeners
fillinButton.addEventListener("click", goToFillinScreen);
createButton.addEventListener("click", goToCreateScreen);

// Callbacks
function goToFillinScreen() {
    window.location.href = "../html/fillin.html";
}
function goToCreateScreen() {
    window.location = "../html/create.html"
}