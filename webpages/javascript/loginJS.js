// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const loginButton = document.getElementById("loginButton");

// Set action listeners
loginButton.addEventListener("click", validateLogin);

// Callbacks
function validateLogin() {
  var email = emailField.value;
  var pass = passField.value;

  // Check that text was entered
  if (email === "") {
    alert("Please enter your email.");
  } else if (pass === "") {
    alert("Please enter your password.");
  } else {
    signInUser(email, pass);
  }
}