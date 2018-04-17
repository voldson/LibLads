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
const auth = firebase.auth();