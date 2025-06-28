console.log("JavaScript SPREAD OPERATOR");

let number = [1, 2, 3, 4, 5];
let maximun = Math.max(...number)

console.log(maximun);

let userName = "Golu Rana";
let letter = [...userName].join("-");

console.log(letter);


let fruits = ["Orange", "Banana", "Pineapple"];
let newFruits = ["apple", "litchi", "mango"];

let spread = [...fruits, ...newFruits]

console.log(spread  );


