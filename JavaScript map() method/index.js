console.log("JavaScript map() method");


const number = [1, 2, 3, 4, 5];

const sqr = number.map(sqrNumber);
const cube = number.map(cubeNumber);
console.log(sqr);
console.log(cube);

function sqrNumber(element) {
    return Math.pow(element, 2);
}
function cubeNumber(element) {
    return Math.pow(element, 3);
}

const date = ['2025-1-10', '2026-2-20', '2027-3-30'];

const arrange = date.map(display);
console.log(arrange);

function display(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

