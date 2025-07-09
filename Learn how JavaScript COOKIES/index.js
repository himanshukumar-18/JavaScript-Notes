console.log("Learn how JavaScript COOKIES");

// console.log(navigator.cookieEnabled)

// document.cookie = "fullName=Golu Kumar; expires=Sun 1 January 2030 12:00:00 UTC; path=/"

// document.cookie = "surName=Rana; expires=Sun 1 January 2030 12:00:00 UTC; path=/"

// console.log(document.cookie)
// deleteCookie("email") 


const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const btn = document.getElementById("btn")
const cookie = document.getElementById("getCookie")

btn.addEventListener("click", () => {

    setCookie("firstName", firstName.value, 365)
    setCookie("lastName", lastName.value, 365)
})

cookie.addEventListener("click", () => {

    firstName.value = getCookie("firstName")
    lastName.value = getCookie("lastName")
})


function setCookie(name, value, expires) {

    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000)
    let expire = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expire}; path=/`
}

function deleteCookie(name) {
    setCookie(name, null, null)
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    let = result = null;

    cArray.forEach((e) => {

        if (e.indexOf(name) == 0) {
            result = e.substring(name.length + 1)
        }
    })

    return result;
}
