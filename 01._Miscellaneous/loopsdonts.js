/* 
    Rules: Always use loop methods in modern JS. 
    for loops are only used when finger counting is needed (counting to a number).

    Here are 8 arguments for why loop methods (forEach, map, filter, sort, find, reduce) are better.
*/

const numbers = [6, 7, 8, 9];

/* 
Argument 1: Brevity
Argument 2: Clarity (loop methods communicate intend)
Argument 3: No accidental indexing errors (out of bounds)
*/
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach((number) => console.log(number));

/*
Argument 4: Avoids for of/in numbers confusion
Argument 5: Able to access both element and index at the same time
*/
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2" <- strings
}

for (let i of list) {
   console.log(i); // 4, 5, 6 <- numbers
}

/* 
Argument 6: Avoids side effects!!!
Argument 7: Shorter and more readable / maintainable
*/
let oddIndexSideEffect = [];
let index = 0;
for (number of numbers) {
    if (index % 2 === 1) {
        oddIndexSideEffect.push(Number(number));
    }
    index++;
}
console.log(oddIndexSideEffect);

const oddNumbers = numbers.filter((element, index) => index % 2 === 1);
console.log(oddNumbers);

/* Argument 8: Doesn't mutate the original list */
for (index in numbers) {
    numbers[index] = numbers[index] * 2;    
}

// Use .map to avoid side effect / mutating the original list
const doubledList = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubledList);
