// javascript is very lassire faire when it comes to data types

console.log("1" + 1);
// when add string tgt, JS will auto convert the integer 1 to a string
// => console.log("1" + "1")

console.log("1" - 1);
// JS will automatically convert the "1" to integer
// => console.log(1 - 1)

// even if it doesn't crash when we mix data types it is prudent convert
// to make sure that all variables are in their correct data type

// Data conversion functions
let number = parseInt("42"); // returns int 42
let pi = parseFloat("3.14"); //return float 3.14
let d = Number("2"); // no preference or if not sure user will give integer or float
let f = Number("3.14"); // return float 3.14

// Convert to string
let secretOfLife = 42 + ""; // shortcut to convert to string