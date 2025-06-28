console.log("Learn 2D ARRAYS in JavaScript");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"]
];

// // row 1
// matrix[0][0] = "X";
// matrix[0][1] = "O";
// matrix[0][2] = "X";


// // row 2
// matrix[1][0] = "O";
// matrix[1][1] = "X";
// matrix[1][2] = "O";

// // row 3
// matrix[2][0] = "X";
// matrix[2][1] = "O";
// matrix[2][2] = "X";

for (let row of matrix) {

    let rowString = row.join(' ')
    console.log(rowString);

}