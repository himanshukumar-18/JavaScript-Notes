console.log(`JavaScript console.time()`);

console.time("test")

for (let i = 0; i < 10000000; i++) {
  //do some code here
}

console.timeEnd("test")