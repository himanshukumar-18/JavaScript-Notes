console.log(`The JavaScript DOM explained`);

document.title = "My Website";
document.body.style.backgroundColor = "#000000";

const userName = ""
let welcomeMsg =  document.getElementById("welcome-msg");

// console.dir(document)

welcomeMsg.style.color = "#fff"
welcomeMsg.textContent += userName ? userName : " Guest";




