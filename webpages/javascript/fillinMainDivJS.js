//placeholder title
var title = 'TITLE';

//placeholder description
var desc = 'DESCRIPTION';

var div = document.getElementById("mainDiv");
var str = '<label>'
str += title;
str +=  '</label><p>'
str += desc;
str += '</p>';

div.innerHTML = str
//<label>Title</label>
//<p>Description</p>