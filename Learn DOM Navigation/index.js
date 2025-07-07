console.log(`JavaScript Error handling`);

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .Children

// .firstElementChild

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "red";

// const ulEle = document.querySelectorAll("ul");

// ulEle.forEach((a) => {
//     const first = a.firstElementChild;
//     first.style.backgroundColor = "red"
// })




// lastElementChild

// const element = document.getElementById("fruits");
// const firstChild = element.lastElementChild;
// firstChild.style.backgroundColor = "red";

// const ulEle = document.querySelectorAll("ul");

// ulEle.forEach((a) => {
//     const first = a.lastElementChild;
//     first.style.backgroundColor = "red"
// })





// .nextElementSibling
// let element = document.getElementById("Apple");
// let next = element.nextElementSibling;
// next.style.backgroundColor = "red"


// .previousElementSibling
// let element = document.getElementById("Mango");
// let next = element.previousElementSibling;

// next.style.backgroundColor = "red"


// .parentElement

// let element = document.getElementById("Apple");
// let parent = element.parentElement;
// parent.style.backgroundColor = "red"



// .children

let element  = document.getElementById("fruits");
let children = element.children;
// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "red"
// })

children[1].style.backgrounColor = "red";