console.log("JavaScript random password generator");


function generatePassword(passwordLength, includeUppercase, includeLowercase, includeSymbols, includeNumber) {

    const lowerCaseChar = "abcdefghijklmnopqrstuvwxzy";
    const UpperCaseChar = lowerCaseChar.toUpperCase();
    const numberChar = "0123456789";
    const symbolsChar = "!@#$%^&*()_+=";

    let allowChar = "";
    let password = "";

    allowChar += includeLowercase ? lowerCaseChar : "";
    allowChar += includeUppercase ? UpperCaseChar : "";
    allowChar += includeNumber ? numberChar : "";
    allowChar += includeSymbols ? symbolsChar : "";

    console.log(passwordLength);


    if (passwordLength <= 0) {
        return `(Password length must be at least 1)`
    }

    if (allowChar.passwordLength === 0) {
        return `(At least 1 set of character needs to be selected)`
    }

    for (let i = 0; i < passwordLength; i++) {
        const random = Math.floor(Math.random() * allowChar.length)
        password += allowChar[random];
    }

    return password;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;



const password = generatePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeSymbols,
    includeNumber
)

console.log(`Generated Password: ${password}`);







