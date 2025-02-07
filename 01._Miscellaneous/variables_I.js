
// avoid var 
// var name = 'Anders';

// const name = 'Anders';

// const is NOT a constant
// that means that const CAN have its value changed
// const is a constant in the DECLARATION
// const MUST be declared as it is initialized

// name = 'Thea';

const me = {};

me.name = "Anders";

console.log(typeof me.name);


const hobbies = ["sleeping", "coding"];

hobbies.pop();

hobbies.push("drawing", "painting");

console.log(hobbies);


const jsObject = {
    whatAmI: "jsObject",
    // comment
};

// " vs. ' vs. `

const dancerName = "Computer";

// "" or '' or `` = string literals
console.log("I can't dance!");
console.log('I can "dance"!');
// ` (backticks)
// `` = template strings
// ${} syntax = string interpolation
console.log(`${dancerName} can dance '"""''
    line 1
    line 2    
    '""''''"""''`);



// console.log , vs. + 

const assignmentDescription = "...and the value is...";
const value = 4;

// don't use plus in console.log to avoid type coercion
console.log(assignmentDescription, value);


// data types
// number, string, boolean, bigint, null, undefined, symbol, object

