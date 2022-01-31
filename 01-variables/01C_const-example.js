// const means 'constant'
const pi = 3.14; // cannot be reassigned
// pi = 3.1417; <== cannot reassign
// console.log(pi); // will result in error

// traditional programmer;s idea of const
// const is used to reflect values that have importantce in the program and never changes.
// those values have semantic significance - make sense outside of the program e.g. pi, gst rate
const gst = 0.07;

// Significant of JS developers use const for any variables that will not be reassigned
// e.g. say programmers do not want the weight and height to be changeable
// or wants to prevent the variable from being overwritten
const weight = 87; 
const height = 1.71;
console.log(weight/height**2);

// If const array...
const primes = [11, 17, 21];
primes[0] = 13; 
console.log(primes);
// example above will not result in error. 
// primes[0]=13 --- assigned to one element in the array, not affected by const.
// const only applies to the entire array.

// primes = [15,17,21];
// above example reassigned to the entire array, therefore affected by const and will crash

// * codes should not confuse people.
// * if additional explanation is required, then it is not a good coding practice.
// * try not to use const for everything.