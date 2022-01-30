// Data types in Javascript
// - Numbers
//      > Integers
//      > floats
// - Strings
// - Booleans
// aka primitive data types (basic data types) or values => values are data

// integer
42

// Strings --> text
"she sells seashells by the seashore"
"jack and jill went up the hill"
'asd1234!' // open with single quote, must end with single quote, same goes for double quote

// Boolean values
// true or false (boolean in javascript is all lower case, while in python it is uppercase)

// Variables
// variables basically store values

// create js variable
// use the word 'let'
let secretOfLife = 42; 
// Camel case (above) is preferred in javascript
// let super_long_variable_name = 15; --- snake case
// only python uses snake case, other programming languages use Camel case
// no number as first character, no spaces allowed. But '$' and '_' is allowed.

console.log(SecretOfLife);
// console.log is equivalent to python print()
// imagine console to be a container that can have many functions
// many functions and log is one of those functions
// the dot means 'belongs to'. (use the log function that belongs to the console)
// think of the . as the 's'
// console.log ==> console's.log function

// you can 'let' a variable once (*normally)
// let secretOfLife = 42; ==> cannot redeclare variables. will result in error.

// you can reassign new values to an existing variable
secretOfLife = 43;
console.log("secretOfLife =", secretOfLife)
// cannot use 'let' to recreate a variable that already exists