// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const repassField = document.getElementById("repassField");
const signupButton = document.getElementById("signupButton");

// Add event listeners
signupButton.addEventListener("click", function() {
    var email = emailField.value;
    var pass = passField.value;
    var repass = repassField.value;

    // Validate information
   if (pass !== repass) {
        // Passwords don't match
        console.log("passwords don't match");
    } else if (!validEmail(email)) {
        // Invalid email
        console.log("invalid email");
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log("Create user error");
          });

          goToChoiceScreen();
    }
});

function validEmail(email) {
    var hasAt = email.includes("@");
    var hasCom = email.includes(".com");
    var hasOrg = email.includes(".org");
    var hasGov = email.includes(".gov");
    var hasEdu = email.includes(".edu");

    if (hasAt && (hasCom || hasOrg || hasGov || hasEdu)) {
        return true;
    } else {
        return false;
    }
}

function goToChoiceScreen() {
    window.location.href = "choice.html";
}