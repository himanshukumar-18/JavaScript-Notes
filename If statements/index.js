console.log("If statements in JavaScript are easy 🤔");

// let age = 12;

// if (age >= 18) {
//     console.log("You are allow to enter this site.");
// } else {
//     console.log("You must be 18+ to enter this site.");

// }


// let time = 2;

// if (time < 12) {
//     console.log("Good Morning!");

// } else {
//     console.log("Good Afternoon!");

// }


// let isStudent = true;

// if (isStudent) {
//     console.log("You are student!");

// } else {
//     console.log("You are not a student!");

// }

// let age = 20;
// let isLicense = true;

// if (age >= 18) {
//     console.log("You are allow to drive!");

//     if (isLicense) {
//         console.log("You have your license!");
//     } else {
//         console.log("You do not have a license!");

//     }
// } else {
//     console.log("You must be 18+ to drive!");

// }


// let age = 20;

// if (age >= 100) {
//     console.log("You are too old to enter this site");
// }
// else if (age == 0) {
//     console.log("You can't enter: you were just born.");

// }
// else if (age >= 18) {
//     console.log("allow");
// }
// else if (age < 0) {
//     console.log("your age can't be below 0");
// }
// else {
//     console.log("not allow");

// }



let myBtn = document.getElementById("mybtn");
let myText = document.getElementById("mytext");
let result = document.getElementById("result");
let age;

myBtn.addEventListener("click", () => {

    age = myText.value

    if (age >= 100) {
        result.innerText = "You are too old to enter this site";

        console.log("You are too old to enter this site");
    }
    else if (age == 0) {
        result.innerText = "You can't enter: you were just born.";

        console.log("You can't enter: you were just born.");
    }
    else if (age >= 18) {
        result.innerText = "allow";

        console.log("allow");
    }
    else if (age < 0) {
        result.innerText = "your age can't be below 0";
        console.log("your age can't be below 0");
    }
    else {
        result.innerText = "not allow";

        console.log("not allow");
    }

})