let countLable = document.getElementById("display");
let increase = document.getElementById("inc");
let decrease = document.getElementById("dec");
let reset = document.getElementById("res");

let count = 0;

increase.addEventListener("click", () => {
    if (count < 10) {
        count++;
        countLable.innerText = count;
    }
})

decrease.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countLable.innerText = count;
    }
})

reset.addEventListener("click", () => {
    count = 0;
    countLable.innerText = count;
})