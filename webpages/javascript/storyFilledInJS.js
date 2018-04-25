//story placeholder
var content = 'The ==&&&== ==&&&== ==&&&== jumped over the ==&&&== ==&&&== ==&&&==';

var div = document.getElementById("mainDiv");
var str = '<label>Your Story!</label><p>';
str += makeStory("");
str += '</p>';
div.innerHTML = str;

function makeStory(emptyStory) {
    /*var blanks = emptyStory.blanks;
    var numBlanks = emptyStory.numBlanks;
    var content = emptyStory.content;
    var newContent = "";
    var arrFillers = currentBlanks.split(",");
    var splitContent = content.split("==&&&==");
    var currentBlankIndex = 0;*/
    var numBlanks = 6;
    var content = 'The ==&&&== ==&&&== ==&&&== jumped over the ==&&&== ==&&&== ==&&&==';
    var newContent = "";
    //var arrFillers = currentBlanks.split(",");
    var arrFllers = "1,2,3,4,5,6";
    var splitContent = content.split(" ");
    var splitFillers = content.split(",");
    var currentBlankIndex = 0;
    
    for (var i = 0; i < splitContent.length; i++) {
        var phrase = splitContent[i];

        console.log("Phrase: " + phrase);

        if (phrase.includes("==&&&==")) {
            newContent += splitFillers[currentBlankIndex++];
        } else {
            newContent += phrase;
        }
    }
    console.log("new content: " + newContent);

    return newContent;
}