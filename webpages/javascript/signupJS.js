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
        alert("The passwords do not match.");
    } else if (!validEmail(email)) {
        // Invalid email
        alert("Please enter a valid email.");
    } else {
        createUser(email, pass);
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