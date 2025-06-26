console.log("Learn JavaScript STRING SLICING");


// const fullName = "Himanshu Kumar";

// let firstName = fullName.slice(0, 8);
// let lastName = fullName.slice(9, 14);
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ") + 1)
 
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);






const email = "himanshu@example.com"

const userName = email.slice(0, email.indexOf("@"));
const extension= email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);

