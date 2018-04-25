// Get page elements
const submitStoryButton = document.getElementById("submitStoryButton");
const titleField = document.getElementById("titleField");
const summaryField = document.getElementById("summaryField");
const contentField = document.getElementById("contentField");

// Other variables
var blanks = "";
var numBlanks = 0;
var newContent = "";
var titles = [];

// Add event listener
submitStoryButton.addEventListener("click", validateStory);

// Callbacks
function validateStory() {
    // Validate that title is filled out
    if (titleField.value === "") {
        alert("Please enter a title.");
    } else if (summaryField.value === "") {
        alert("Please provide a summary of your story.");
    } else if (parseContent() === false) {
        alert("Please provide at least one valid blank for your story.");
    } else if (checkIfStoryExists(titleField.value)) {
        alert("A story by that name already exists. Please change the title.");
    } else {
        //addNewStoryToDB(blanks, newContent, summaryField.value, titleField.value, numBlanks);
    }    
}

function checkIfStoryExists(checkTitle) {
    // Read in the stories in the database
    var storyTitles = [];
    dbRefEmptyStories.once('value', function (snap) { 
        Object.keys(snap.val()).forEach(function(title) {
            
        });
        const data = snapshot.val();

        // get childKey exists status
        var exists = data.hasOwnProperty(childKey);
        titles = storyTitles;
    });

    for (var i = 0; i < titles.length; i++) {
        var current = new String(titles[i]).valueOf();
        var check = new String(titles[i]).valueOf();
        if (current === check) {
            return true;
        }
    }
    return false;
}

// Use the parsing tokens to save the blanks
function parseContent() {
    // Parse out the elements following the <:WORD:> format
    var content = contentField.value;
    var split1 = content.split(/[<][:]/);

    for (var i = 0; i < split1.length; i++) {
        // Get each word
        var word = split1[i];

        // If the word doesn't contain the parsing tokens, continue
        if (!word.includes(":>")) {
            newContent += word;
            continue;
        }
        
        // Check if the last two characters in the word are ":>"
        var parsedWord = word;
        var lastChar = word.charAt(word.length - 2);
        var lastChar2 = word.charAt(word.length - 3);
        
        

        // Parse out the ending tokens
        var splitEndTokens = word.split(/[:][>]/);
        parsedWord = splitEndTokens[0];

        // Append it to the string
        blanks += (numBlanks === 0) ? parsedWord : ("," + parsedWord);
        newContent += "==&&&==" + splitEndTokens[1];

        // count number of found words
        numBlanks++;
   }

   return (numBlanks === 0) ? false : true;
}
