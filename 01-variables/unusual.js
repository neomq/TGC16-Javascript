let something;
console.log("something=", something)
// result in error - undefined

let s = something + 10;
console.log("s =", s);
// result in error NaN (not a number)

let v = s + 20;
console.log("v =", v);
// result in error NaN (not a number)

let i = 22/0;
console.log("i =", i);
// result in error - infinity

// null is ALWAYS explicitly assigned by programmer
// null has the same meaning as undefined, meaning nothing
let meaningOfLife = null;