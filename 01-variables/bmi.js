const prompt = require('prompt-sync')();


// eqv in python:
// float (input("Please enter your weight"))
let weight = parseFloat(prompt("Please enter your weight: "));
let height = parseFloat(prompt("Please enter your height: "));
let bmi = weight / height ** 2;
console.log("bmi = ", bmi)