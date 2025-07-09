console.log("How to FETCH data from an API using JavaScript");

// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => {

//         if (!response.ok) {
//             throw new Error("Could not fetch resource.")
//         }

//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => {console.log(error)}) 

const btn = document.getElementById("fetchBtn")

async function fecthData() {

    try {

        const input = document.getElementById("apiInput").value.toLowerCase();
        const display = document.getElementById("apiImages")


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)

        if (!response.ok) {
            throw new Error("Could not fetch resource.")
        }

        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        display.src = pokemonSprite
        display.style.display = "block"

    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener("click", () => {
    fecthData()
})