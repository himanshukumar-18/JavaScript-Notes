console.log("JS METHOD CHAINING");

let userName = window.prompt("Enter Your Username: ");

// no method chaining


// userName = userName.trim();

// let firstLetter = userName.charAt(0);
// firstLetter  = firstLetter.toUpperCase();

// let extraAll = userName.slice(1);
// extraAll = extraAll.toLowerCase();

// userName = firstLetter + extraAll;

// console.log(userName);

// chaining method

userName = userName.trim().charAt(0).toLocaleUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);





