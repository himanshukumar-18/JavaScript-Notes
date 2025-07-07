console.log(`How to ADD/CHANGE HTML using JavaScript`);

// ex 1


// step 1 CREATE THE ELEMENT
// let newH1 = document.createElement("h1"); 

// step 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like JavaScript!"
// newH1.id = "myh1"
// newH1.style.textAlign = "center"
// newH1.style.color = "red"
// newH1.style.fontSize = "28px"

// step 3 APPEND ELEMENT DOM
// document.body.prepend(newH1)
// document.getElementById("box1").append(newH1)

// let box2 = document.getElementById("box1");
// document.body.insertBefore(newH1, box2)

// const box = document.querySelectorAll(".boxes");
// document.body.insertBefore(newH1, box[1])

// remove html element
// document.body.removeChild(newH1)
// document.getElementById("box1").removeChild(newH1)



const newLiItems = document.createElement("li");

newLiItems.textContent = "Mango";
newLiItems.id = "Mango";
newLiItems.style.fontWeight = 600
newLiItems.style.color = "blue"
newLiItems.style.fontSize = "28px"

// document.getElementById("fruits").appendChild(newLiItems)

const orange = document.getElementById("Apple");
document.getElementById("fruits").insertBefore(newLiItems, orange)


   