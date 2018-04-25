var fillinButton = document.getElementById("fillInButton");
var createButton = document.getElementById("createButton");

showStory();

fillinButton.addEventListener("click", goToFillin);
createButton.addEventListener("click", goToCreate);

function showStory() {
    var div = document.getElementById("mainDiv");
    var str = '<label>Your Story!</label><textarea readonly>';
    str += localStorage.getItem("story");
    str += '</textarea>';
    div.innerHTML = str;
}