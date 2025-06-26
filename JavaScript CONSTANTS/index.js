console.log(`JavaScript CONSTANTS`);
 
const PI = 3.14159;
let radius;
let circumference;

// PI = 4.55;

// radius = window.prompt("Enter the radius of the circle:");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);


document.getElementById("mybtn").addEventListener("click", function() {
    radius = document.getElementById("mytext").value;

    radius = Number(radius);

    circumference = 2 * PI * radius;
    document.getElementById("myh3").innerHTML = `Circumference: ${circumference}cm`;

    console.log(`Circumference: ${circumference}cm`);
})