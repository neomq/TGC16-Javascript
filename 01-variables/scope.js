const prompt = require('prompt-sync')();

// in javascript {....} forms a scope
let age = parseInt(prompt("please enter your age: ")) //global scope - any statement not inside curly brackets
if (age < 67) {
    console.log("You cannot retire yet");
    console.log("Your CPF money is still frozen");
    let x = 42;
}
console.log(x)