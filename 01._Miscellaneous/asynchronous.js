// Javascript is single-threaded, everything runs on the main-thread

// database interaction, file handling, fetch / HTTP requests (network)

// Solution 1: callback functions

// callback hell, pyramid of doom

// Solution 2: promises (syntactic sugar for callbacks)

// pending, fulfilled
        // resolved / rejected
        
new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Everything went well");
        reject("Something went wrong");
    }, 2000);
})
.then((result) => console.log(result))
.catch((error) => console.log(error));
