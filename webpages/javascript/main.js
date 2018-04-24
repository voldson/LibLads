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

// Global variables
const auth = firebase.auth();

// Create reference to the database
const dbRefEmptyStories = firebase.database().ref().child('emptyStories');
const dbRefCurrentUsers = firebase.database().ref().child('currentUsers');

// Sign in a user
function signInUser(email, pass) {
    var hadError = false;

    // Firebase code
    auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        hadError = true;
        // ...
        console.log(errorCode + ": " + errorMessage);
    });

    if (!hadError) {
        addUserToDB(auth.uid, "", "");
    }
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
    /*var dbRefThisUser = firebase.database().ref('currentUsers/' + userID);
    dbRefThisUser.set({
        "userID": userID,
        "currentStory": currentStory,
        "blankFillers": blankFillers
    });*/

    console.log("blankFillers:", blankFillers, "\ncurrentStory:", currentStory, "\nuserID:", userID);

    var data = {
        "blankFillers": blankFillers,
        "currentStory": currentStory
    };

    dbRefCurrentUsers.child(userID).set(data).then(function(dbRefCurrentUsers) {
        console.log("Initialized user data");
    })
}

// Check for signing in and out
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        console.log("Successfully signed in: " + user.email);
    } else {
      // No user is signed in.
      /*db.ref("/currentUsers/" + user.uid).remove()
        .then(function() {
            console.log("Successfully signed out: " + user.email);
        })
        .catch(function(err) {
            console.log("Error signing out " + user.email + "\n" + err.message);
        });*/
        console.log("no user");
    }
  });


// Writing a story to the database
function addNewStoryToDB(parsedBlanks, contentText, summaryText, titleText) {
    // Put together the element to add to the database
    var story = {
        blanks: parsedBlanks,
        content: contentText,
        creator: auth.uid,
        numBlanks: parsedBlanks.length,
        summary: summaryText,
        title: titleText
    };

    // Get a key for the new story to be added
    var newStoryKey = db

    dbRefEmptyStories.on('value', snap => {
        dbRefEmptyStories.set
    });
}