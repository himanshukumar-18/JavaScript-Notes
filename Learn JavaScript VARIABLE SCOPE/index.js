console.log("Learn JavaScript VARIABLE SCOPE");

function function1() {
    let x = 1;
    console.log(x);
    
}


function function2() {
    let x = 2;
    console.log(x);
}

function1()
function2()



let a = 5;

function abc() {
    console.log(a);
}

abc();
