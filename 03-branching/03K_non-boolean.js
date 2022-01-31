const prompt = require('prompt-sync')();

console.log("3 || 4 => ", 3 || 4); 
// 3 is a non-falsy value -- hence short circuit will happen
// expression evaluates to 3

console.log("0 || 4 => ", 0 || 4);
// 0 is a falsy value -- no short circuit. JS moves on to 4.


let name = Number(prompt("Enter a name: "));
// if name is empty, set to N/A
name = name || "N/A";
// if user enters "" for name
// name = "" || "N/A"
// name = "N/A"

// if the user enters "ahkow" for name
// name = "ahkow" || "N/A"
// name = "ahkow"

console.log("1 && 2 =>", 1 && 2);
console.log("1 && null =>", 1 && null);