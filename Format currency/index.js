console.log(`Format currency`);


let number = 123456.78954;

// number = number.toLocaleString("hi-IN");



number = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"})

console.log(number);
