// Get page elements
const submitStoryButton = document.getElementById("submitStoryButton");
const titleField = document.getElementById("titleField");
const summaryField = document.getElementById("summaryField");
const contentField = document.getElementById("contentField");

// Other variables
var parsedBlanks = [];

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
    } else {
        // Add this information to the databse
        // addNewStory(parsedBlanks, contentField.value, summaryField.value, titleField.value);

        // goToSubmissionScreen();
    }    
}

function parseContent() {
    // Parse out the elements following the <:WORD:> format
    var content = contentField.value;
    var split1 = content.split(/[<][:]/);
    var numBlanks = 0;
    var blanks = "";

    for (i = 0; i < split1.length; i++) {
        // Get each word
        var word = split1[i];

        // If the word doesn't contain the parsing tokens, continue
        if (!word.includes(":>")) {
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

        // count number of found words
        numBlanks++;
   }
   
   return (numBlanks === 0) ? false : true;
}

function goToSubmissionScreen() {
   // window.location.href = "404.html";
}