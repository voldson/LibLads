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
  console.log("got to function");
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
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }
  });