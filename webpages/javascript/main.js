// Initialize firebase
var config = {
    apiKey: "AIzaSyDTkmR5lJoQ7-ndUQ5Zqt83LbjYJLOIP24",
    authDomain: "liblads-80e29.firebaseapp.com",
    databaseURL: "https://liblads-80e29.firebaseio.com",
    projectId: "liblads-80e29",
    storageBucket: "liblads-80e29.appspot.com",
    messagingSenderId: "1014749515123"
};

firebase.initializeApp(config)

// Create reference to the database
const dbRefEmptyStories = firebase.database().ref().child('emptyStories');
const dbRefCurrentUsers = firebase.database().ref().child('currentUsers');

// Sign in a user
function signInUser(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(function (user) {
        addUserToDB(user.uid, "", "");
    }, function(error) {
        console.log(error.message);
    });
}

// Create a user
function createUser(email, pass) {
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (user) {
        addUserToDB(user.uid, "", "");
    }, function(error) {
        console.log(error.message);
    });
}

// Adding a user to the database
function addUserToDB(userID, currentStory, blankFillers) {
    var data = {
        "blankFillers": blankFillers,
        "currentStory": currentStory
    };

    dbRefCurrentUsers.child(userID).set(data).then(function(dbRefCurrentUsers) {
        console.log("Initialized user data");
    });
}

// Writing a story to the database
function addNewStoryToDB(parsedBlanks, contentText, summaryText, titleText, numBlanks) {
    // Put together the element to add to the database
     var data = {
         "blanks": parsedBlanks,
         "content": contentText,
         "numBlanks": numBlanks,
         "summary": summaryText,
         "title": titleText
     };
     alert("adding story 2");
     dbRefEmptyStories.child(titleText).set(data);
 
     console.log("added story"); 
 }

// Check for signing in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("Successfully signed in: " + user.email);
    } else {
        // No user is signed in
        console.log("no user");
    }
});