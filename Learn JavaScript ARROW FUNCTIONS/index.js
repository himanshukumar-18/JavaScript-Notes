console.log("JavaScript FUNCTION EXPRESSIONS");

// function decleration

function hello() {
    console.log(`Hello!`);
    
}

// function expression

const hello2 = function () {
    console.log(`Hello`);
}

console.log(hello2);

setTimeout(function() {
    console.log("Himanshu Kumar");
    
}, 2000)


const number = [1, 2, 3, 4, 5, 6];
const sqr = number.map(function(e){
    return Math.pow(e, 2)
})

const cube = number.map(function(e){
    return Math.pow(e, 3)
})

const total = number.reduce(function(prev, next){
    return prev + next 
})

console.log(total);


console.log(cube);
