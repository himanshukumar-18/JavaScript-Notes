console.log(`Learn JavaScript setTimeout()`);

function hello() {
    window.alert("Hello JavaScript");
}

// setTimeout(hello, 1000)

const btnStart = document.getElementById("mybtn");
const btnStop = document.getElementById("mybtn2");

let timer;

btnStart.addEventListener("click", () => {

  timer = setTimeout(() => {window.alert("Start")}, 2000)

})

btnStop.addEventListener("click", () => {
    clearTimeout(timer)
})

