// Get page elements
const indexLoginButton = document.getElementById("splashLoginButton");
const indexSignupButton = document.getElementById("splashSignupButton");

// Add event listeners
indexLoginButton.addEventListener("click", goToLoginScreen);
indexSignupButton.addEventListener("click", goToSignupScreen);

// Callbacks
function goToLoginScreen() {
    window.location.href = "../html/login.html";
}
function goToSignupScreen() {
    window.location = "../html/signup.html"
}