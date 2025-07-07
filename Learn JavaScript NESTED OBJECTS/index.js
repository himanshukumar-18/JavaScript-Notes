console.log("Learn JavaScript NESTED OBJECTS");

const details = {
    fullName: "Himanshu Kumar",
    age: 20,
    isStudent: true,
    hobbies: ["Gaming", "Coding", "Travling"],
    address: {
        local: "Lutta",
        city: "Hzb",
        State: "Jh",
        country: "India"
    }
}


// console.log(details.fullName);
// console.log(details.age);
// console.log(details.isStudent);
// // console.log(details.hobbies[0]);
console.log(details.address);

// for(let hobbie in details.hobbies) {
//     console.log(details.hobbies[hobbie]);   
// }

// for(let adress in details.address) {
//     console.log(details.address[adress]);   
// }




class Person {

    constructor(name, age, ...address) {
        this.name = name,
        this.age = age,
        this.address = new Address(...address)
    }

}


class Address {

    constructor(street, city, country) {
        this.street = street,
        this.city = city,
        this.country = country
    }

}

const personOne = new Person("Himanshu", 20, "lutta", "Hazarbag", "India");
console.log(personOne.address.city);




