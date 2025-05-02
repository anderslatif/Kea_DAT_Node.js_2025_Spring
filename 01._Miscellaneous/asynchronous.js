// Javascript is single-threaded, everything runs on the main-thread

// database interaction, file handling, fetch / HTTP requests (network)

// Solution 1: callback functions

// Problem: callback hell, pyramid of doom

// Solution 2: promises (syntactic sugar for callbacks)

// Problem: Nested promises

// Solution 3: async/await (syntactic sugar for promises)

// pending, fulfilled
        // resolved / rejected
        
/* new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Oops, an error occured";
            resolve("Everything went well");
        } catch (error) {
            reject(error);
        }
    }, 2000);
})
.then((result) => console.log(result))
.catch((error) => console.log(error)); */

/* assignment Create a promisified function
that is, a function that returns a new promise
the function should be called myPromise
and it should either resolve as "Something Good" or reject as "Something Bad" 
create a 3 second timeout to simulate asynchronous behavior
*/

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Show the stacktrace");
                resolve("Something Good")
            } catch (error) {
                reject(error);
            }
        }, 3000);
    });
}

// myPromise()
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

// try {
//     const result = await myPromise()
//     console.log(result);    
// } catch (error) {
//     console.log(error);
// }


/* assignment
    try to simulate the fetch function
    call it myFetch
    it should return the promise json() after 2.5 seconds
    so that you can call response.json() on it
    as much as possible try to imagine how fetch works and simulate the underlying code
*/
function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve("Data from the server"))
            });
        }, 2500);
    });
}


// myFetch("http://www.myserver.com")
// .then((response) => response.json())
// .then((result) => console.log(result));


// IIFE
(async function() {
    const response = await myFetch();
    const result = await response.json();
    console.log(result);
})();

