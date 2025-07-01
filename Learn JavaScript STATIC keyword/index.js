console.log("Learn JavaScript STATIC keyword");

class Math{
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2
    }

    static getCircumFerence(radius) {
        return 2 * this.PI * radius
    }

    static getArea(radius) {
        return this.PI * radius * radius
    }
}

console.log(Math.PI);
console.log(Math.getDiameter(50));
console.log(Math.getCircumFerence(10));
console.log(Math.getArea(20));


class User{

    static userCount = 0

    constructor(userName) {
        this.userName = userName,
        User.userCount++;
    }
    
}

const userOne = new User("Golu Sharma");
const userTwo = new User("Himanshu Kumar");

console.log(userOne.userName);
console.log(userTwo.userName);

console.log(`user:  ${User.userCount}`);


