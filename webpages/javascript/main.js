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

// The list of stories
let emptyStories = [];

// Create reference to the database
const dbRefEmptyStories = firebase.database().ref().child('emptyStories');
const dbRefCurrentUsers = firebase.database().ref().child('currentUsers');

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
     dbRefEmptyStories.child(titleText).set(data);
 
     // goToConfirm();
 }

// Sign in a user
function signInUser(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(function (user) {
        addUserToDB(user.uid, "", "");
        goToChoice();
    }, function(error) {
        alert(error.message);
    });
}

// Create a user
function createUser(email, pass) {
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (user) {
        addUserToDB(user.uid, "", "");
        goToChoice();
    }, function(error) {
        alert(error.message);
    });
}

// Sync object changes
dbRefEmptyStories.on('child_added', function(snap) { 
    console.log(snap.val());
    emptyStories.push(snap.val());
    console.log(emptyStories);
});
dbRefEmptyStories.on('child_removed', function(snap) { 
    // emptyStories = emptyStories.filter(item => item !== snap.val());
    console.log(snap.val());
});

// Moving screens
function goToLogin() {
    window.location.href = "../login.html";
}
function goToSignup() {
    window.location.href = "../signup.html";
}
function goToChoice() {
    window.location.href = "../choice.html";
}
function goToFillin() {
    window.location.href = "../fillin.html";
}
function goToCreate() {
    window.location.href = "../create.html";
}
function goToConfirm() {
    window.location.href = "../confirm.html";
}
function goToStory() {
    window.location.href = "../story.html";
}