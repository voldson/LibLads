// Get page elements
const seeStoryButton = document.getElementById("seeStoryButton");
var amount;
var databaseStr;
var title;
var desc;
var content;

readFromDB();

// Add event listeners
seeStoryButton.addEventListener("click", function() {
    if (!allHaveText()) {
        alert("Please enter text into each of the boxes.");
    } else {
        makeStory();
        goToStory();
    }
});

function readFromDB() {
    // Read in the stories in the database
    var emptyStories = [];
    dbRefEmptyStories.once('value', function (snap) { 
        Object.keys(snap.val()).forEach(function(title) {
            emptyStories.push(snap.val()[title]);
        });

        // Get a random story
        var storyIndex = 0;

        // Get the variables necessary for the program
        amount = emptyStories[storyIndex].numBlanks;
        databaseStr = emptyStories[storyIndex].blanks;
        title = emptyStories[storyIndex].title;
        desc = emptyStories[storyIndex].summary;
        content = emptyStories[storyIndex].content;
       
        // Get the base page set up
        fillinMainDiv();
    });
}

function fillinMainDiv() {
    var div = document.getElementById("mainDiv");
    var str = '<label>'
    str += title;
    str +=  '</label><p>'
    str += desc;
    str += '</p>';

    div.innerHTML = str

    fillinBoxes();
}

function fillinBoxes() {
    var boxesTab = document.getElementById("words");
    var descriptors = [];
    var tempStr = '';
    var arrCount = 0;

    for (var i = 0; i < databaseStr.length; i++) {
        if(databaseStr.charAt(i) == ',') {
            descriptors[arrCount] = tempStr;
            arrCount += 1;
            tempStr = '';
        }
        else if(i == (databaseStr.length - 1)) {
            tempStr += databaseStr.charAt(i);
            descriptors[arrCount] = tempStr;
            arrCount += 1;
            tempStr = '';
        }
        else{
            tempStr += databaseStr.charAt(i);
        }
    }

    for (var i = 0; i < amount; i++) {
        //var ph = 'NOUN';
        var ph = descriptors[i];
        var str = `<td><input type="text" id="box${i}" name="fill" placeholder="`;
        str += ph;
        str += '"></td>'
        boxesTab.innerHTML += str;
    }
}

function makeStory() {
    var story;
    var blankFillers = setCurrentBlankFillers();
    var splitContent = content.split(" ");
    var splitFillers = blankFillers.split(",");
    var currentBlankIndex = 0;
    var newContent = "";

    for (var i = 0; i < splitContent.length; i++) {
        var phrase = splitContent[i];

        if (phrase.includes("==&&&==")) {
            newContent += "<strong>" + splitFillers[currentBlankIndex++] + "</strong>";
        } else {
            newContent += phrase;
        }

        newContent += " ";
    }

    localStorage.setItem("story", newContent);
    
    setStory(newContent);
}

function setCurrentBlankFillers() {
	var blankFillers = "";

	for (var i = 0; i < amount; i++) {
		word = document.getElementById(`box${i}`).value;
		blankFillers += word + ",";
	}	
	return blankFillers;
}

function allHaveText() {
	for (var i = 0; i < amount; i++) {
		word = document.getElementById(`box${i}`).value;

		if (word === "") {
			return false;
		}
	}	
	return true;
}
