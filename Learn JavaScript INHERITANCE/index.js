console.log("Learn JavaScript INHERITANCE ");

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is eating`);
    }

}

class Rabbit extends Animal {
    name = "Rabbit"
}

class Fish extends Animal {
    name = "Fish"
}

const rabbit = new Rabbit();
console.log(rabbit.name);
rabbit.eat()

