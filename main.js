/* Purpose of this File
 *  Start up the server, direct requests to the right place
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

var webPath = '\\webpages\\html';
var cssPath = '\\webpages\\css';

app.use(express.static('webpages'));

app.get(/^(.+)$/, function(req, resp) {
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
});

app.listen(1058, function() {
    console.log("Listening at port 1058");
});