console.log("JavaScript ASYNC/AWAIT");


function walkDog() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const dogWalk = true;

            if (dogWalk) {
                resolve("You walk the dog.")
            } else {
                reject("You didn't walk the dog")
            }
        }, 1500)
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const clean = false;

            if (clean) {
                resolve("You clean the kitchen.")
            } else {
                reject("Please clean the kitchen")
            }
        }, 2500)
    })
}

function takeOutTrash() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const trans = true;

            if (trans) {
                resolve("you take out the trash.")
            } else {
                reject("clean the trans")
            }
        }, 500)
    })
}

async function doChores() {

    try {
        const dogResult = await walkDog();
        console.log(dogResult)

        const kitchenResult = await cleanKitchen();
        console.log(kitchenResult)

        const trash = await takeOutTrash();
        console.log(trash)
    } catch (error) {
        console.error(error)
    }
}

doChores()