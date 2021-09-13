var translateBtn = document.querySelector("#btn-translate");
var inputArea = document.querySelector("#txt-area");
var outputArea = document.querySelector(".output");

var isLeapYear = false;

translateBtn.addEventListener("click",clickHandler);

function clickHandler() {
    let year = inputArea.value;

    if (year % 4 == 0) {

        if (year % 100 ==0) {

            if (year % 400 ==0) {
                console.log("reached");

                isLeapYear = true;
            } else {
                isLeapYear = false;
            }

        }
            isLeapYear = true;


        
    } else {
        isLeapYear = false;
    }

    if (isLeapYear) {
            outputArea.innerText = "It's a leap year " + inputArea.value;

    }else{
        outputArea.innerText = "It's not a leap year " + inputArea.value;

    }
    
}