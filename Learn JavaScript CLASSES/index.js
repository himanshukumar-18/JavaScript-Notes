console.log("JavaScript CONSTRUCTORS");

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.fuleType = function() {console.log(`Petrol`)}
}

const car1 = new Car("Ford", "mustang", 2025, "Blue");
const car2 = new Car("Hero", "Splender", 2025, "full-black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);


console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car1.fuleType()


