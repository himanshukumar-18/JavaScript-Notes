console.log("What is THIS in JavaScript");


const person = {
    firstName: "Himanshu",
    lastName: "Kumar",
    age: 18,
    isEmployed: true,
    sayHello: function() {console.log(`My name is ${this.firstName}`)}
}

person.sayHello()