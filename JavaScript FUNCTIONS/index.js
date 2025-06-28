console.log("JavaScript FUNCTIONS");

// function happybirthday(user, age) {
//     console.log("Happy Birthday To You!!");
//     console.log(`Happy Birthday Dear ${user}`);
//     console.log(`You are ${age} old.`);
// }

// happybirthday("Himanshu",18);



function addNum(a, b){

    let result = a + b;
    return result;

}

let answer = addNum(5, 5);

console.log(answer);


function isEven(num) {
   return num % 2 === 0 ? "true":"false"
}

console.log(isEven(5));

function isValidEmail(email) {
    return email.includes("@") ? true : false
}

console.log(isValidEmail("Himanshu@example.com "));



