console.log(`JavaScript KEY EVENTS`);

const box = document.getElementById("box");

// document.addEventListener("keyup", () => {

//     box.textContent = "Up";
//     box.style.backgroundColor = "Red"

// })

// document.addEventListener("keydown", () => {

//     box.textContent = "Down"
//     box.style.backgroundColor = "purple"

// })

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {

    if (event.key.startsWith("Arrow")) {

        switch (event.key) {

            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;

        }


        box.style.top = `${y}px`
        box.style.left = `${x}px`
    }

})
