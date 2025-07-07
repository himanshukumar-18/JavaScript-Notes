console.log("How to SHUFFLE AN ARRAY");

const cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(cards)
console.log(cards);


function shuffle(aray) {

    for(let i = cards.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1))

        [aray[i], aray[random]] = [aray[random], aray[i]];
    }

}      









