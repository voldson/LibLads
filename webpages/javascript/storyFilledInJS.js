var div = document.getElementById("mainDiv");

var str = '<label>Your Story!</label><p>';
str += localStorage.getItem("story");
str += '</p>';
div.innerHTML = str;
