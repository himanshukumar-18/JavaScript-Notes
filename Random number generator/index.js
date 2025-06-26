console.log("Random Number");

// let min = 50;
// let max = 100;

// let random = Math.random();
// let random = Math.random() * 6;
// let random = Math.floor(Math.random() * 6);
// let random = Math.floor(Math.random() * 6) + 1;
// let random = Math.floor(Math.random() * (max - min)) + max;

// console.log(random);


let mybtn = document.getElementById("mybtn");
let mylable = document.getElementById("mylable");
let mylable2 = document.getElementById("mylable2")
let mylable3 = document.getElementById("mylable3")

let min = 1;
let max = 6;
let randomNum;

mybtn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * max) + min
    mylable.innerText = randomNum;
})

mybtn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * max) + min
    mylable2.innerText = randomNum;
})

mybtn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * max) + min
    mylable3.innerText = randomNum;
})