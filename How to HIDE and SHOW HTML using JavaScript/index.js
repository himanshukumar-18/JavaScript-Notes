console.log(`How to HIDE and SHOW HTML using JavaScript`);

const img = document.getElementById("img");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {

    if (img.style.display === "none") {
        img.style.display = "block"
        btn.textContent = "Hide"
    } else {
        img.style.display = "none"
        btn.textContent = "Unhide"
    }
})