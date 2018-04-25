var fillinButton = document.getElementById("fillInButton");
var createButton = document.getElementById("createButton");

showStory();

fillinButton.addEventListener("click", goToFillin);
createButton.addEventListener("click", goToCreate);

function showStory() {
    var div = document.getElementById("mainDiv");
    var str = '<label>Your Story!</label><p>';
    str += localStorage.getItem("story");
    str += '</p>';
    div.innerHTML = str;
}