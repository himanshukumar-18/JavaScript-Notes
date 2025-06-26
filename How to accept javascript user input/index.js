/*
    How to accept user input
    1. easy way = window prompt
    2. proffssional way = HTML textbox 
*/ 

// let username;

// username = window.prompt("What's your username?")

// console.log(usernamehimanshu);

let username;

document.getElementById("mySubmit").addEventListener("click", () => {

    username = document.getElementById("myText").value;

    document.getElementById("myH1").textContent = `Hello ${username}`;

    console.log(username);

})
