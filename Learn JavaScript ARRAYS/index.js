console.log("JLearn JavaScript ARRAYS");

let fruits = ["apple", "banana", "orange"];
fruits.sort().reverse();

// fruits[0] = "pineapple"
// fruits.push("root")
// fruits.pop()
// fruits.unshift("hello")
// fruits.shift()

let numFruits = fruits.length;
let index = fruits.indexOf("orange")

// console.log(index);

for(let i = fruits.length - 1; i>=0 ; i-- ) {
    // console.log(fruits[i]);
    
}

for(let fruit of fruits) {
    console.log(fruit);
    
}
