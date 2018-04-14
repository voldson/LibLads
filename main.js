/* Purpose of this File
 *  Start up the server, direct requests to the right place
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var confirm = require('prompt-confirm');
var prompt = new confirm("Please try again");
var app = express();

var webPath = '\\webpages\\html';
var cssPath = '\\webpages\\css';

app.use(express.static('webpages'));

// Home splash screen
app.get('/', toSplash);

// Sign-in button is pressed from splash screen
app.get('/login', toLogin);

// Sign-up button is pressed from splash screen
app.get('/sign-up', toSignUp);

// Login button is pressed from login screen
app.post('/login', authenticateLogin);

// Sign-Up button is pressed from signup screen
app.post('/sign-up', redirectToChoice);

// Redirected to choice from previous post
app.get('/choice', toChoice);

// Fill-In Button is pressed from choice screen
app.get('/fill-in', toFillIn);

// Create Button is pressed from choice screen
app.get('/create', toCreate);

// Submit Story Button is pressed from create screen
app.post('/submit-story', toSubmitStory);

// See Story (change name) is pressed from fillin screen
app.get('/see-story', toSeeStory);

app.listen(1058, function() {
    // Display on the console that the server is running
    console.log("Listening at port 1058");
});

// Will move these to different files later
function toSplash(req, resp) {
    resp.sendFile('splash.html', {root: path.join(__dirname, webPath)});
}
function toLogin(req, resp) {
    resp.sendFile('login.html', {root: path.join(__dirname, webPath)});    
}
function toSignUp(req, resp) {
    resp.sendFile('signup.html', {root: path.join(__dirname, webPath)});    
}
function authenticateLogin(req, resp) {
    // Check first that they typed something
    
}
function redirectToChoice(req, resp) {
    resp.redirect('/choice');
}
function toChoice(req, resp) {
    resp.sendFile('choice.html', {root: path.join(__dirname, webPath)});
}
function toFillIn(req, resp) {
    resp.sendFile('fillin.html', {root: path.join(__dirname, webPath)});
}
function toCreate(req, resp) {
    resp.sendFile('create.html', {root: path.join(__dirname, webPath)});
}
function toSubmitStory(req, resp) {
    // TODO actual confirmation that they submitted their story
    // Temp, send to error page
    resp.sendFile('404.html', {root: path.join(__dirname, webPath)});
}
function toSeeStory(req, resp) {
        // TODO actual completed version of their story
    // Temp, send to error page
    resp.sendFile('404.html', {root: path.join(__dirname, webPath)});
}

/*function anyRequest(req, resp) {
    // Check if a file exists
    try {
        // If there was no file path, send them to the login page
        if (req.params[0] == '/') {
            resp.sendFile('login.html', {root: path.join(__dirname, webPath)});
        } else if (fs.statSync(path.join(__dirname, webPath, fileName, )).isFile()) {
            resp.sendFile(fileName, {root: path.join(__dirname, webPath)});
        } 
    } catch (error) {
        resp.sendFile('404.html', {root: path.join(__dirname, webPath)});
    }
}*/