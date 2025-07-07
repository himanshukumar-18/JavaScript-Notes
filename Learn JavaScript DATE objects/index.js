console.log("Learn JavaScript DATE objects");

//  date(year, month, day, hour, minute, sec, ms);

const date = new Date();

console.log(date);

const year = date.getFullYear();
console.log(`year: ${year}`);

const month = date.getMonth();
console.log(`month: ${month}`);

const day = date.getDay();
console.log(`day: ${day}`);

const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

console.log(`hour: ${hour} minute: ${min} sec: ${sec}`);













