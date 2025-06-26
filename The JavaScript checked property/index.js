console.log("The JavaScript checked property");

let myCheckBox = document.getElementById("mycheck");
let visa = document.getElementById("visaBtn");
let masterCard = document.getElementById("masterCard");
let qr = document.getElementById("qr");
let mySubmit = document.getElementById("mysubmit");
let subResult = document.getElementById("subResult");
let cardResult = document.getElementById("paymentResult");

mySubmit.addEventListener("click", () => {
    if (myCheckBox.checked) {
        console.log("You are subscribe!");
        subResult.innerText = `You are subscribe!`;
    }
    else {
        console.log("You are not subscribe!");
        subResult.innerText = `You are not subscribe!`;
    }

    if (visa.checked) {
        cardResult.innerText = `You are paying with visa.`;

        console.log("You are paying with visa.");

    }
    else if (masterCard.checked) {
        cardResult.innerText = `You are paying with master card.`;

        console.log("You are paying with master card.");
    }
    else if (qr.checked) {
        cardResult.innerText = `You are paying with qr.`;

        console.log("You are paying with qr.");
    }
    else {
        cardResult.innerText = `You are not select payment method.`;

        console.log("You are not select payment method.");
    }
})