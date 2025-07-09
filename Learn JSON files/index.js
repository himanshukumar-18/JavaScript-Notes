console.log("Learn JSON files");

// const name = ["rana", "golu", "riya", "chiku", "himanshu"]
// const jsonString = JSON.stringify(name);

// console.log(jsonString)


// const person = {
//     "name": "Himanshu",
//     "age": 30,
//     "isEmployed": true
// }

// const jsonString = JSON.stringify(person)

// console.log(jsonString)


// const people = `[
//     {
//         "name": "Himanshu",
//         "age": 30,
//         "isEmployed": true
//     },
//     {
//         "name": "Golu",
//         "age": 18,
//         "isEmployed": true
//     }
// ]`

// const jsonpersue = JSON.parse(people)

// console.log(jsonpersue)

fetch("peoples.json").then((res) => res.json())
                    .then((value) => value.forEach(values => console.log(values)))