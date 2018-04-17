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

    // Firebase code
    const promise = auth.signInWithEmailAndPassword(email, pass);
    //promise.catch(e => console.log(e.message));
    console.log(promise);
    //goToChoiceScreen();
}
function goToChoiceScreen() {
    window.location.href = "choice.html";
}