var translateBtn = document.querySelector("#btn-translate");
var inputArea = document.querySelector("#txt-area");
var outputArea = document.querySelector(".output");
translateBtn.addEventListener("click",clickHandler);

var url = "https://api.funtranslations.com/translate/mindion.json"

function clickHandler() {
    var url = constructURL(inputArea.value);
    fetch(url)
    .then(response => response.json())
    .then(data => outputArea.innerText = data.contents.translated)
    .catch(errorHandler);
   
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`
}

function errorHandler(error) {
    outputArea.innerText = "Oops we hit the bananaa error\n " + error;
}