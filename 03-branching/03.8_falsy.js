console.log('"" == false',"" == false);
console.log("[] == false", [] == false);
console.log("0 == false", 0 == false);
console.log("undefined == false", undefined == false);
console.log("null == false", null == false);
console.log("NaN == false", NaN == false);

// undefined, null & NaN is considered true.
// unless put in an if statement,
// then it is considered false.

// below statements will not print
if (undefined) {
    console.log("undefined");
}

if (null) {
    console.log(null);
}

if (NaN) {
    console.log("Not a number detected");
}

// 0 is considered false
if (0) {
    console.log("Zero found");
}