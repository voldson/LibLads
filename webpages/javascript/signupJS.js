// Get page elements
const emailField = document.getElementById("emailField");
const passField = document.getElementById("passField");
const repassField = document.getElementById("repassField");
const signupButton = document.getElementById("signupButton");

// Add event listeners
signupButton.addEventListener("click", authenticateSignup);

// Callbacks
function authenticateSignup() {
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
        console.log("Sign-up button pressed");
        // firebase code
        var error;
        console.log("error variable created");
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        console.log("Promise item returned");
        promise.catch(e => error = e);
        console.log("Sign-up button pressed");

        console.log(promise + "\nError: " + error);
/*
        if (error) {
            console.log(error.message);
        } else {
           // goToChoiceScreen();
        }*/
    }
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

function goToChoiceScreen() {
   // window.location.href = "choice.html";
}