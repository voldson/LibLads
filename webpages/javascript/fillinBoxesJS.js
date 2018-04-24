//placeholder amount of boxes
var amount = 6;

//placeholder string
var databaseStr = 'ADJECTIVE,ADJECTIVE,ADJECTIVE,ADVERB,NOUN,NOUN';

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
	var str = '<td><input type="text" name="fill" placeholder="'
	str += ph;
	str += '"></td>'
	boxesTab.innerHTML += str;
}