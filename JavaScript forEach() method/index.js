console.log("JavaScript forEach() method");


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube)
// numbers.forEach(display)

// function display(element) {
//     console.log(element);

// }

// function double(elements, index, array) {
//     array[index] = elements * 2
// }
// function triple(elements, index, array) {
//     array[index] = elements * 3
// }

// function square(elements, index, array) {
//     array[index] = Math.pow(elements, 2)
// }
// function cube(elements, index, array) {
//     array[index] = Math.pow(elements, 3)
// }


let fruits = ["Apple", "Orange", "Mango", "Banana", "Litchu"];

fruits.forEach(upperCase)
fruits.forEach(display)

function display(element) {
    console.log(element);   
}

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}