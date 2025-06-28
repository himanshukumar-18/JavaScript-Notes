console.log("Build this JavaScript Dice Roller program");

const input = document.getElementById("myinput");
const btn = document.getElementById("mybtn");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

btn.addEventListener("click", () => {

    const numDice = input.value
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        // console.log(value);
        values.push(value)
        images.push(`<img src="assets/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.innerText = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('')

})




