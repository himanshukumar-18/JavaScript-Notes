console.log("Learn JavaScript SORTING");

// const numbers = [1, 10, 2, 9, 8, 7 , 5, 4, 1, 3, 6];

// numbers.sort((a, b) =>  b - a);
// console.log(numbers);



// const student = [
//     {
//         name: "Arav",
//         age: 12,
//         cgpa: 1.2
//     },
//     {
//         name: "Babu",
//         age: 15,
//         cgpa: 2
//     }
// ]

// student.sort((a, b) => a.name.localeCompare(b.name))

// console.log(student);




const students = [

    {
        fullName: "himanshu",
        age: 22,
        cgpa: 2
    },
    {
        fullName: "golu",
        age: 12,
        cgpa: 4
    },
    {
        fullName: "Tanisha",
        age: 19,
        cgpa: 3
    },
    {
        fullName: "riya",
        age: 11,
        cgpa: 8
    },
    {
        fullName: "ravi",
        age: 22,
        cgpa: 6
    }
]

const sorted = students.sort((a, b) => a.fullName.localeCompare(b.fullName))

console.log(sorted)
