// the logical OR short circuit
let x = 4;
let y = 5;
console.log (x == 4 || y > 100 || y < -100 || y > 2000 + x);
// first condition evaluates to true
// hence computer will not execute the rest

function f1() {
    console.log("f1");
    return true;
}

function f2() {
    console.log("f2");
    return false;
}

// f2 won't be called at all due to logical or short circuit
console.log(f1() || f2());


let n1 = 3;
let n2 = 10;
console.log(n2 < 10 && n1 - n2 > 100 && n2 - n1 < 100 && n1 === 3);

console.log('------------');
console.log(f2() && f1());