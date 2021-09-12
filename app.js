var translateBtn = document.querySelector("#btn-translate");
var inputArea = document.querySelector("#txt-area");

translateBtn.addEventListener("click",clickHandler);

function clickHandler() {
    console.log("clicked");
    console.log(inputArea.value);
}