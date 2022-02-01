
const prompt = require('prompt-sync')();

let limit = parseInt(prompt("Enter the upper limit: "));

for (let x = 0; x < limit; ++x) {
    console.log(x);
}

// initialiser (x = 0) happens only once

// ++x is a pre fix increment (used because it's slightly faster?)
// x++ is a post fix increment

// increment can also be written as x += 1

// for loop is a short form for a while loop which is written in many lines
// programmers are lazy and want to type as little as possible