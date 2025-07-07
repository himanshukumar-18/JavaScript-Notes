console.log("JavaScript GETTERS & SETTERS")

class Rectangle {

    constructor(w, h) {
        this.w = w,
            this.h = h
    }

    set w(newW) {
        if (newW > 0) {
            this._width = newW;
        } else {
            console.error("Width must be a postive number")
        }
    }

    set h(newH) {
        if (newH > 0) {
            this._height = newH;
        } else {
            console.error("Height must be a postive number")
        }
    }

    get w() {
        return `${this._width.toFixed(1)}cm`
    }

    get h() {
        return `${this._height.toFixed(1)}cm`
    }

    get area() {
        return (this._width * this._height).toFixed(1);
    }

}

// const rectangle = new Rectangle(10, 20);

// console.log(rectangle.w);
// console.log(rectangle.h);
// console.log(rectangle.area);




class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age
    }

    set firstName(newFirstName) {

        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._newFirstName = newFirstName
        } else {
            console.error(`Enter Valid firstName`)
        }

    }

    set lastName(newLastName) {

        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._newLastName = newLastName
        } else {
            console.error(`Enter Valid lastName`)
        }

    }

    set age(newAge) {

        if (newAge > 0) {
            this._newAge = newAge
        } else {
            console.error(`Enter Valid Age Number`)
        }

    }

    get firstName() {
        return this._newFirstName
    }

    get lastName() {
        return this._newLastName
    }

    get age() {
        return this._newAge
    }

}

const personOne = new Person("Golu", "Rana", 18);

console.log(personOne.firstName);
console.log(personOne.lastName);
console.log(personOne.age);

