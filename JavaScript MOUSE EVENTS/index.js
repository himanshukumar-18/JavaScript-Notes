console.log(`JavaScript MOUSE EVENTS`);

const box = document.getElementById("box");

// box.addEventListener("click", changeColor)

// function changeColor(event) {

//     event.target.style.backgroundColor = "#000"
//     event.target.style.color = "#fff"
//     event.target.style.outlineColor = "blue"

// }

box.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "#000"
    event.target.style.color = "#fff"
    event.target.style.outlineColor = "blue"
})

box.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "pink"
})

box.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "bisque"
})