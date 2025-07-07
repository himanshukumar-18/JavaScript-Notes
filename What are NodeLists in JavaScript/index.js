console.log(`What are NodeLists in JavaScript?`);

const btn = document.querySelectorAll("#buttons");

console.log(btn)


// add html/css proprties

// btn.forEach((button) => {
//     button.style.backgroundColor = "purple"
//     button.textContent += "😜"
// })




// click event listner

// btn.forEach(button => {
//     button.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = "orange"
//     })
// })


//mouseover + mouseout event listner

btn.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red"
    })

    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "skyblue"
    })
})




// add new element

const newBtn = document.createElement("button");

newBtn.textContent = "button 5"
newBtn.id = "buttons"

document.body.appendChild(newBtn)