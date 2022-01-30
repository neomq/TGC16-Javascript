// const means 'constant'
const pi = 3.14; // cannot be reassigned
// pi = 3.1417; <== cannot reassign
// console.log(pi); // will result in error

// traditional programmer;s idea of const
// const is used to reflect values that have importantce in the program and never changes.
// those values have semantic significance - make sense outside of the program e.g. pi, gst rate
const gst = 0.07;

// Significant of JS developers use const for any variables that will not be reassigned
const weight = 87;
const height = 1.71;
console.log(weight/height**2);

let fruits = ["apples", "oranges", "bananas"];
const primes = [11, 17, 21];
primes[0] = 13; // assigned to one element, not affected by const
console.log(primes);
// primes = [15,17,21]; // reassigned to the entire array, therefore affected by const and will crash