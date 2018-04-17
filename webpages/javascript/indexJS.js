// Get page elements
const indexLoginButton = document.getElementById("indexLoginButton");
const indexSignupButton = document.getElementById("indexSignupButton");

// Add event listeners
indexLoginButton.addEventListener("click", goToLoginScreen);
indexSignupButton.addEventListener("click", goToSignupScreen);

// Callbacks
function goToLoginScreen() {
    window.location.href = "login.html";
}
function goToSignupScreen() {
    window.location = "signup.html"
}