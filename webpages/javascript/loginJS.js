// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const loginButton = document.getElementById("loginButton");

// Set action listeners
loginButton.addEventListener("click", authenticateLogin);

// Callbacks
function authenticateLogin() {
    var email = emailField.value;
    var password = passField.value;

   // Firebase code
   auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log("Sign in error");
  });
}
function goToChoiceScreen() {
    window.location.href = "choice.html";
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      console.log("User signed in");
    } else {
      // User is signed out.
      // ...
      console.log("User signed out");
    }
  });