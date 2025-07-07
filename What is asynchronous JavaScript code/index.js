console.log(`What is asynchronous JavaScript code?`);

// synchronous
// console.log("TaskTwo");
// console.log("TaskThree");
// console.log("TaskFour");




// asunchronous
// setTimeout(() => { console.log("TaskOne") }, 3000)

function one(callBack) {
    setTimeout(() => { console.log("TaskOne"); callBack() }, 3000)
}

function two() {
    console.log("TaskTwo");
    console.log("TaskThree");
    console.log("TaskFour");
}

one(two)