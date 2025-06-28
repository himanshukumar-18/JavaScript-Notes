console.log("JavaScript REST PARAMETERS");


function openFridge(...foods) {
    console.log(foods);
}



let food1 = "cake";
let food2 = "choclate";
let food3 = "pizza";
let food4 = "samosa";
let food5 = "rosagulla";


// openFridge(food1, food2, food3, food4, food5);


function sum(...num) {
    let result = 0;
    for(let number of num) {
        result += number
    }

    return result;
}

let total = sum(5,5);
// console.log(`your total is $${total}`);


function getAvg(...num) {
    let result = 0;
    for(let number of num) {
        result += number
    }

    return result / num.length;
}

let avg = getAvg(10, 100, 50, 80, 77);
console.log(avg);


function fullName(...name) {
    return name.join(" ");
}

let checkName = fullName("mr", "himanshu", "kumar", "rana");
console.log(checkName);





