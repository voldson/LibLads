// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const loginButton = document.getElementById("loginButton");

// Set action listeners
loginButton.addEventListener("click", authenticateLogin);

// Callbacks
function authenticateLogin() {
    var email = emailField.textContent;
    var pass = passField.textContent;

    // Firebase code

    goToChoiceScreen();
}
function goToChoiceScreen() {
    window.location.href = "../html/choice.html";
}