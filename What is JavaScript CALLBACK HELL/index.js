console.log(`What is JavaScript CALLBACK HELL`);

// function task1() {
//     console.log("Task 1")
// }

// function task2() {
//     console.log("Task 2")
// }

// function task3() {
//     console.log("Task 3")
// }

// function task4() {
//     console.log("Task 4")
// }

// function task5() {
//     console.log("Task 5")
// }

// task1()
// task2()
// task3()
// task4()
// task5()
// console.log("All task are completed")




// function task1() {
//     setTimeout(() => {
//         console.log("Task 1 completed")
//     }, 2000)
// }

// function task2() {
//     setTimeout(() => {
//         console.log("Task 2 completed")
//     }, 1000)
// }

// function task3() {
//     setTimeout(() => {
//         console.log("Task 3 completed")
//     }, 1500)
// }

// function task4() {
//     setTimeout(() => {
//         console.log("Task 4 completed")
//     }, 3000)
// }

// function task5() {
//     setTimeout(() => {
//         console.log("Task 5 completed")
//     }, 500)
// }

// task1()
// task2()
// task3()
// task4()
// task5()
// console.log("All task are completed")






function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completed");
        callback();
    }, 2000)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed")
        callback()
    }, 1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed")
        callback()
    }, 1500)
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 completed")
        callback()
    }, 3000)
}

function task5(callback) {
    setTimeout(() => {
        console.log("Task 5 completed")
        callback()
    }, 500)
}


task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                     console.log("All task complete")
                })
            })
        })
    })
})

