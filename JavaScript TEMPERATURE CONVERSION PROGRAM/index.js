console.log("JavaScript TEMPERATURE CONVERSION PROGRAM");

let input = document.getElementById("myinput");
let celsiusToFahreneit = document.getElementById("mycheck1");
let fahreneitToCelsius = document.getElementById("mycheck2");
let conversionBtn = document.getElementById("mybtn");
let result = document.getElementById("result");

let temp;


conversionBtn.addEventListener("click", () => {

    if (celsiusToFahreneit.checked) {
        temp = Number(input.value)
        temp = temp * 9 / 5 + 1;
        result.textContent = temp.toFixed(1) + " " + "Fahreneit"
    }

    else if (fahreneitToCelsius.checked) {
        temp = Number(input.value)
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + " " + "Celsius"
    }

    else {
        result.textContent = "Select a unit!!"
    }

})
