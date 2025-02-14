// forEach, map, filter, reduce, findIndex, find

const myNumbers = [1, 2, 3, 4, 5, 6];

// assignment: get a list of the numbers doubled

const doubledNumbers = myNumbers.map((myNumber) => myNumber * 2);

// console.log(myNumbers);

const satellites = [
    {
        name: "International Space Station",
        height: 12_000
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James Webb",
        height: 27_000
    }
];

const satellitesAdjustedHeight = satellites.map((satellite) => ({
    height: satellite.name === "MIR" ? satellite.height : satellite.height - 3000,
    name: satellite.name
}));

// console.log(satellitesAdjustedHeight);

// assignment: lower the height for all satellites by 3.000 except for MIR

const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"];

// assignment: make a list that reacts as many times as above with thumbs up

const updatedReactions = listOfReactions.map((reaction) => "thums up");


