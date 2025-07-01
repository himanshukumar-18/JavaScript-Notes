console.log("Learn JavaScript CALLBACKS ");


// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function goodBy() {
//     console.log("good bye!");
// }

// hello(goodBy)

function sum(callback, x, y) {

    let result = x + y;
    callback(result)

}

function display(result) {
    console.log(result);
}

sum(display, 5, 5)