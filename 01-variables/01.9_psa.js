const prompt = require('prompt-sync')();

let psi = parseFloat(prompt("Please enter the psi: "));
let quality = 0; // define quality as global scope

if (psi <= 150) {
    quality = "Healthy"; // WARNING! The quality variable here
                        // is not available at line 13!
} else if (psi <= 300) {
    quality = "Unhealthy";
} else {
    quality = "Hazardous";
}
console.log(quality);