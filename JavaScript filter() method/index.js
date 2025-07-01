console.log("JavaScript filter() method");

let number = [1, 2, 3, 4, 5, 6, 7];

let evenNumbers = number.filter(isEven);
let oddNumbers= number.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);



function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}


const age = [18, 20, 22, 17, 19, 70];
const adult = age.filter(isAdult);

console.log(adult);


function isAdult(e) {
    return e > 18;
}
 


