console.log(`JavaScript Error handling`);

// error will be generated 
//network error
//prmoise rejection
//security error

// console.lag("hii")

// try {
//     console.log(x);
// } catch (error) {
//     console.log(error);
// }


// try {
//     console.lag("Hello!")
// } catch (error) {
//     console.log(error)
// } finally {
//     //close file
//     //close connection
//     //release resources
//     console.log("You have reached the end!");
// }


// const dividend = window.prompt("Enter a dividend: ");
// const divisor = window.prompt("Enter a divisor: ");

// const result = dividend / divisor;

// console.log(result10);


try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error(`You can't divide by zero`)
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error(`Values must be a number!f`)
    }

    const result = dividend / divisor;
    console.log(result);
} catch (error) {
    console.error(error)
}