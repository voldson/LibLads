// Get page elements
const seeStoryButton = document.getElementById("seeStoryButton");

readFromDB();

// Add event listeners
seeStoryButton.addEventListener("click", function() {
    if (!allHaveText()) {
        alert("Please enter text into each of the boxes.");
    } else {
        readFromDB();
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
        var numBlanks = emptyStories[storyIndex].numBlanks;
        var blanks = emptyStories[storyIndex].blanks;
        var title = emptyStories[storyIndex].title;
        var summary = emptyStories[storyIndex].summary;
       
        // Get the base page set up
        fillinMainDiv(numBlanks, blanks, title, summary);
    });
}

function fillinMainDiv(amount, databaseStr, title, desc) {
    var title = title;
    var desc = desc;

    var div = document.getElementById("mainDiv");
    var str = '<label>'
    str += title;
    str +=  '</label><p>'
    str += desc;
    str += '</p>';

    div.innerHTML = str

    fillinBoxes(amount, databaseStr);
}

function fillinBoxes(amount, databaseStr) {
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

    // Put together the story
    makeStory(amount);
}

function makeStory(amount) {
    var story;
    var blankFillers = setCurrentBlankFillers(amount);
    
    // Fully append everything
    var div = document.getElementById("mainDiv");
    var str = '<label>Your Story!</label><p>';
    str += story;
    str += '</p>';
    div.innerHTML = str;
}

function setCurrentBlankFillers(amount) {
	var blankFillers = "";

	for (var i = 0; i < amount; i++) {
		word = document.getElementById(`box${i}`).value;

		blankFillers += word + ",";
	}	
	return blankFillers;
}

function allHaveText(amount) {
	for (var i = 0; i < amount; i++) {
		word = document.getElementById(`box${i}`).value;

		if (word === "") {
			return false;
		}
	}	
	return true;
}
