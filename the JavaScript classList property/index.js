console.log(`the JavaScript classList property`);

const btn = document.querySelectorAll("#buttons");

// btn.classList.add("enabled")
// btn.classList.remove("enabled")

// btn.classList.add("hover")

// btn.addEventListener("mouseover", (e) => {
//     e.target.classList.add("hover")
// })

// btn.addEventListener("mouseout", (e) => {
//     e.target.classList.remove("hover")
// })


// btn.addEventListener("click", event => {

//     // event.target.classList.replace("enabled", "disbled")

//     if (event.target.classList.contains("disable")) {
//             event.target.textContent += "Added"
//     } else {
//         event.target.classList.replace("enabled", "disable")
//     }

// })

// btn.forEach((b) => {
//     b.classList.add("enabled")
// })

// btn.forEach((b) => {
//     b.classList.remove("disable")
// })

btn.forEach((b) => {
    b.addEventListener("mouseover", (e) => {
        e.target.classList.toggle("hover")
    })
})

btn.forEach((b) => {
    b.addEventListener("mouseout", (e) => {
        e.target.classList.toggle("enabled")
    })
})