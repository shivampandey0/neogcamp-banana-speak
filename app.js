const translateBtn = document.querySelector("#btn-translate");
const inputArea = document.querySelector("#txt-area");
const outputArea = document.querySelector(".output");

const url = "https://api.funtranslations.com/translate/minion.json"

const clickHandler =() =>{
    const url = constructURL(inputArea.value);
    fetch(url)
    .then(response => response.json())
    .then(data => outputArea.innerText = data.contents.translated)
    .catch(errorHandler);  
}

const constructURL = inputText => {
    const encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`
}

const errorHandler = error => outputArea.innerText = "Oops we hit the bananaa error\n " + error;


translateBtn.addEventListener("click", clickHandler);
