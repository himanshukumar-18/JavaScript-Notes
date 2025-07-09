console.log(`What are JavaScript PROMISES?`);

// function walkDog(callback) {

//     setTimeout(() => {
//         console.log("You walk the dog.")
//         callback()
//     }, 1500)
// }

// function cleanKitchen(callback) {

//     setTimeout(() => {
//         console.log("You clean the kitchen.")
//         callback()
//     }, 2500)
// }

// function takeOutTrash(callback) {

//     setTimeout(() => {
//         console.log("you take out the trash.")
//         callback()
//     }, 500)
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finish all the chores")
//         })
//     })
// })




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

            const trans = false;

            if (trans) {
                resolve("you take out the trash.")
            } else {
                reject("clean the trans")
            }
        }, 500)
    })
}

walkDog().then((value) => { console.log(value); return cleanKitchen() })
    .then((value) => { console.log(value); return takeOutTrash() })
    .then((value) => { console.log(value); console.log("You finsih all the work") })
    .catch((error) => { console.log(error) })