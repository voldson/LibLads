//placeholder amount of boxes
var amount = 6;

//placeholder string
var databaseStr = 'ADJECTIVE,ADJECTIVE,ADJECTIVE,ADVERB,NOUN,NOUN';
var boxesTab = document.getElementById("words");

for (var i = 0; i < amount; i++) {
	var ph = 'NOUN';
	var str = '<td><input type="text" name="fill" placeholder="'
	str += ph;
	str += '"></td>'
	boxesTab.innerHTML += str;
}
//<td><input type="text" name="fill" placeholder="NOUN"></td>