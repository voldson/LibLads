// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const loginButton = document.getElementById("loginButton");
const auth = firebase.auth();

// Set action listeners
loginButton.addEventListener("click", authenticateLogin);

// Callbacks
function authenticateLogin() {
    var email = emailField.textContent;
    var pass = passField.textContent;

    // Firebase code
    auth.signInWithEmailAndPassword(email, pass);

    goToChoiceScreen();
}
function goToChoiceScreen() {
    window.location.href = "../html/choice.html";
}