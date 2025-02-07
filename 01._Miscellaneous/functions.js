// hoisting
console.log(getRandomInt(0, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) - min);
};

// logs the function reference
// console.log(getRandomInt);


// action is a callback function
// a callback is a function that is passed as a parameter to another function
// possibly with the aim of calling it later (but not necessarily)

                        // name: string  action: function
function genericPerformer(name, action) {
    return action(name);
}

// Lasse coding
const codingAction = (name) => {
    return `${name} likes coding.`;
};

console.log(genericPerformer("Lasse", codingAction));


function sleepingAction(name) {
    return `${name} loves sleeping`;
}

// Desired result:  Andreas loves sleeping
console.log(genericPerformer("Andreas", sleepingAction));


console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`));