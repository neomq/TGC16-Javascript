const prompt = require('prompt-sync')();

// in JavaScript, { ... } forms a scope
// use {} to group statements together 

let age = parseInt(prompt("Please enter your age: "))
// statement above not inside curly braces - known as global scope

if (age < 67) {
    console.log("You are",age,'years old');
    console.log("You cannot retire yet");
    console.log("Your CPF money is still frozen");
    let x = 42;
    if (x >= 42) {
        console.log(x);
    }
}
console.log(x);