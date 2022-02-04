const prompt = require('prompt-sync')();
// if we use non-boolean values for OR operator, JavaScript will evaluate to the first truthly values
// as a rule of thumb, anything that is not the following is truthly:
// - empty string 
// - empty array
// - 0
// - 0.0
// - NaN
// - undefined
// - null

let n = 3 || 4;
console.log('let n = 3 || 4 =>', n);

console.log('undefined || 10 =>', undefined || 10);

console.log('NaN || 10 =>', NaN || 10);

let number = parseInt(prompt("Please enter a number: "));
number = number || 0;

// for AND operator
console.log("3 && -1 =>", 3 && -1);
console.log("3 && false =>", 3 && false);
console.log("3 && true =>", 3 && true);