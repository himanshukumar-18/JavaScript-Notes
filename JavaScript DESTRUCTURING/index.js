console.log("JavaScript DESTRUCTURING");

// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

// console.log(a, b);



//swap two element in an array

const color = ["red", "green", "blue", "black", "white"];

[color[0], color[4]] = [color[4], color[0]];

// console.log(color);

// assign array element to variables

const [fistEle, secEle, thirEle, ...extraColor] = color;

// console.log(fistEle, secEle, thirEle, extraColor);




//destructure object element

const personOne =  {

    firstName: "Himanshu",
    lastName: "Kumar",
    age: 18,
    job: "Software Developer"

}

const personTwo =  {

    firstName: "Golu",
    lastName: "Rana",
    age: 20
    
}

// const {firstName, lastName, age ,job="Unemployed"} = personTwo;

// console.log(firstName, lastName, age, job);



// destructure in function parameters

function displayPerson({firstName, lastName, age, job="unepmployed"}){

    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)

}

displayPerson(personTwo)




