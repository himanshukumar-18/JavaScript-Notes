console.log("Learn JavaScript SWITCHES");

let day = "Pizza";

switch (day) {
    case 1:
        console.log("It is monday.")
        break;
    case 2:
        console.log("It is tuesday.");
        break;
    case 3:
        console.log("It is wednesday.");
        break;
    case 4:
        console.log("It is thursday.");
        break;
    case 5:
        console.log("It is friday.");
        break;
    case 6:
        console.log("It is saturday.");
        break;
    case 7:
        console.log("It is sunday.");
        break;
    default:
        console.log(`${day} is not a day.`)
}





let score = 60;
let grade;

switch (true) {
    case score >= 90:
        grade = "A"
        console.log(grade);
        break;
    case score >= 80:
        grade = "B"
        console.log(grade);
        break;
    case score >= 70:
        grade = "C" 
        console.log(grade);
        break;
    case score >= 60:
        grade = "D"
        console.log(grade);
        break;
    default:
        grade = "F"
        console.log(grade);
}