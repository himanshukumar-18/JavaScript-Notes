console.log("JavaScript NUMBER GUESSING GAME ");

// Number Guessing Game

let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1) + min)


let attempts = 0;
let guess;
let run = true;

while (run) {

    guess = window.prompt(`Guess the number between ${min} - ${max}`)

    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please Enter Valid Number.")
    } else if (guess < min || guess > max) {
        window.alert("Please Enter Valid Number.")
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low Try Again!!")
        } else if (guess > answer) {
            window.alert("Too High Try Again!!")
        } else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`)
            run = false;
        }
    }
}

