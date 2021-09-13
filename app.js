var translateBtn = document.querySelector("#btn-translate");
var inputArea = document.querySelector("#txt-area");
var outputArea = document.querySelector(".output");

var isPrimeNum = false;

translateBtn.addEventListener("click",clickHandler);

function clickHandler() {
    let date = inputArea.value;
    let day = date.split("/");

    if (day[0] == 0 || day[0] == 1) {
        isPrimeNum = false;
        
    } else {
        let half = day[0]/2;
        let flag =0;

        for (let i = 2; i <= half; i++){
            if (day[0] % i ==0) {
                isPrimeNum = false;
                flag = 1;
                break;
            }
        }

        if (flag ==0) {
            isPrimeNum = true;
        }
        
    }

    if (isPrimeNum) {
            outputArea.innerText = "It's a prime date " + inputArea.value;

    }else{
        outputArea.innerText = "It's not a prime date " + inputArea.value;

    }
    
}