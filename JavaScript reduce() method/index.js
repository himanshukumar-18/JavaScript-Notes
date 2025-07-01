console.log("JavaScript reduce() method");

const price = [5, 10, 30, 60, 80, 40, 60, 80, 90, 10];
const total = price.reduce(sum);

console.log(`$${total}`);



function sum(prev, next) {
    return prev + next
}


const grade = [60, 89, 90, 100, 77, 88];
const maxmium = grade.reduce(getMax);

console.log(maxmium);


function getMax(prev, next) {
    return Math.max(prev, next)
}