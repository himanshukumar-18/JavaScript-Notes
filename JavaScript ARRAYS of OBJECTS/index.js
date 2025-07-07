console.log("JavaScript ARRAYS of OBJECTS");

const fruits = [
    {name:"Apple", color:"Red", c: 55},
    {name:"Orange", color:"Orange", c: 20},
]

fruits.push({name:"grapges", color:"green"})

// console.log(fruits[0].name);
// console.log(fruits[0].color);
// console.log(fruits[1].name);
// console.log(fruits[1].color);
// console.log(fruits[2].name);
// console.log(fruits[2].color);

// fruits.map((fruit) => console.log(fruit.name));
// fruits.forEach((fruit) => console.log(fruit.color))

// const redFruit = fruits.filter(fruit => fruit.color === "Red")
// console.log(redFruit);

const max = fruits.reduce((max, fruit) => fruit.c > max.c ? fruit : max)

console.log(max);





