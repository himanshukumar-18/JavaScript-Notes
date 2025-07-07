console.log(`JavaScript ELEMENT SELECTORS`);

let myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow"
myHeading.style.textAlign = "center"
myHeading.style.padding = "20px"
myHeading.style.color = "#232323"

let fruit = document.getElementsByClassName("fruits")
// console.log(fruit);

// fruit[0].style.backgroundColor = "red"
// fruit[0].style.color = "#fff"
// fruit[0].style.fontSize = "22px"
// fruit[0].style.marginTop = "20px"
// fruit[0].style.textAlign = "center"

// fruit[1].style.backgroundColor = "orange"
// fruit[1].style.color = "#fff"
// fruit[1].style.fontSize = "22px"
// fruit[1].style.marginTop = "20px"
// fruit[1].style.textAlign = "center"

// fruit[2].style.backgroundColor = "brown"
// fruit[2].style.color = "#fff"
// fruit[2].style.fontSize = "22px"
// fruit[2].style.marginTop = "20px"
// fruit[2].style.textAlign = "center"

// for(let myFruit of fruit) {
//     myFruit.style.margin = "15px"
//     myFruit.style.backgroundColor = "purple"
//     myFruit.style.fontSize = "24px"
//     myFruit.style.textAlign = "center"
//     myFruit.style.padding = "auto"
// }

Array.from(fruit).forEach((f) => {
        f.style.margin = "15px"
        f.style.backgroundColor = "purple"
        f.style.fontSize = "24px"
        f.style.textAlign = "center"
        f.style.padding = "auto"
})