var translateBtn = document.querySelector("#btn-translate");
var inputArea = document.querySelector("#txt-area");
var outputArea = document.querySelector(".output");

translateBtn.addEventListener("click",clickHandler);

function clickHandler() {
    console.log(inputArea.value);
    
    outputArea.innerText = "🍌🍌🍌🍌 " + inputArea.value;
}