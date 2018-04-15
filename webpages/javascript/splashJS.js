// Get page elements
const splashLoginButton = document.getElementById("splashLoginButton");
const splashSignupButton = document.getElementById("splashSignupButton");

// Add event listeners
splashLoginButton.addEventListener("click", goToLoginScreen);
splashSignupButton.addEventListener("click", goToSignupScreen);

// Callbacks
function goToLoginScreen() {
    window.location.href = "../html/login.html";
}
function goToSignupScreen() {
    window.location = "../html/signup.html"
}