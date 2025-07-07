console.log("Learn JavaScript CLOSURES");



function outer() {

    let meaasge = "!hello"
    function inner() {
        console.log(meaasge);
    }

    inner()

}

// outer()


function counter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increase to ${count}`);
    }

    function getCount() {
        return count;
    }

    return { increment, getCount }

}

let counteer = counter();

// counteer.increment()
// // counteer.increment()
// counteer.increment()
// // counteer.increment()
// // counteer.increment()

// console.log(`The current count is ${counteer.getCount()}`);



function scoreGame() {

    let score = 0;

    function increaseScore(point) {
        score += point;
        console.log(`+${point}pts`);
    }

    function decreaseScore(point) {
        score -= point;
        console.log(`-${point}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}

}

let score = scoreGame();

score.increaseScore(6);
score.decreaseScore(1);
console.log(`The final score is ${score.getScore()}`);











