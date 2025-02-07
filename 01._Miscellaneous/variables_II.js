"use strict";

// totalGlobalVariable = "Never EVER!!! do this";
// var globalVariable = "Also NEVER do this!";

// global scope

// rules:
// always use const if you can get away with it
// otherwise use let

function myFunction() {
    // function scope
}

{
    // block scope
    var myValue = true;
    {
        var myValue = false;
    }
    // console.log(myValue);
}

{
    let myValue = true;
    {
        let myValue = false;
    }
    // console.log(myValue);
}

for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }