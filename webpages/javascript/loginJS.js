// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const loginButton = document.getElementById("loginButton");

// Set action listeners
loginButton.addEventListener("click", authenticateLogin);

// Callbacks
function authenticateLogin() {
  var email = emailField.value;
  var pass = passField.value;

  signInUser(email, pass);

  // if all is fine, go to the choice screen to continue
  goToChoiceScreen();
}

function goToChoiceScreen() {
  window.location.href = "choice.html";
}