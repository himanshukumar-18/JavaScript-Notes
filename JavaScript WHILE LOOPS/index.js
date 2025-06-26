console.log("JavaScript WHILE LOOPS");


// let userName = "";

// while (userName === "" || userName === null) {
//     userName = window.prompt(`Enter Your Name: `);
// }

// console.log(`Hello ${userName}`);


// let user;

// do {
//     user = window.prompt("Enter Your Name: ")
// } while (user === "" || user === null)

// console.log(`user: ${user}`);


// let isLoggin = false;
// let userName;
// let password;

// while (!isLoggin) {
//     userName = window.prompt(`Enter Your Username: `);
//     password = window.prompt(`Enter Your Password: `);

//     if (userName === "himanshu@example" && password === "himanshu@620") {
//         isLoggin = true;
//         console.log("You are login!");
//     } else {
//         console.log("Try Again!")
//     }
// }


let isLoggin = true;
let userName;
let password;

do {
    userName = window.prompt(`Enter Your Username: `);
    password = window.prompt(`Enter Your Password: `);

    if (userName === "himanshu@example" && password === "himanshu@620") {
        isLoggin = true;
        console.log("You are login!");
    } else {
        console.log("Try Again!")
    }
} while (!isLoggin)