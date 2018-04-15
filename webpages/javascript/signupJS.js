// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const repassField = document.getElementById("repassField");
const signupButton = document.getElementById("signupButton");

// Add event listeners
signupButton.addEventListener("click", authenticateSignup);

// Callbacks
function authenticateSignup() {
    var email = emailField.textContent;
    var pass = passField.textContent;
    var repass = repassField.textContent;

    // Validate information
   /*
   if (pass !== repass) {
        // Passwords don't match
    } else if (!validEmail(email)) {
        // Invalid email
    } else if (!signupUser(email)) {
        // Attempt signing up user
    }
    */

    goToChoiceScreen();
}

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

function signupUser(email) {

}

function goToChoiceScreen() {
    window.location.href = "../html/choice.html";
}