console.log("The JavaScript SUPER keyword");

class Animal {

    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    move(speed) {
        console.log(`This ${this.name} move at a speed of ${speed}mph`);

    }

}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed)
    }

}

class Lion extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed
    }

    run() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed)
    }

}

const rabbit = new Rabbit("Rabbit", 1, 12,);
const lion = new Lion("Lion", 5,10);

console.log(rabbit.name, rabbit.age, rabbit.runSpeed)
rabbit.run();
console.log(lion.name, lion.age, lion.runSpeed) 
lion.run();
