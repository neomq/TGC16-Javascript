// How to add prompt to your program
// in the terminal:
// yarn add prompt-sync

// either
// 1. do it once per new directory
// 2. or do it in the workspace directory

//import in prompt sync into our program
const prompt = require('prompt-sync')();

let s = prompt("Whats your name? ");
console.log("Hi", s);
