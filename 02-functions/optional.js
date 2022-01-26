const prompt = require('prompt-sync')();


// an optional argumant thas a default value 
// if gstPercentage is not given a value, then it defaults to 0.0
function calculateWithGST(bill, gstPercentage=0.07) {
    let gst = bill * gstPercentage;
    let total = bill + gst;
    return total;
}

let bill = parseFloat(prompt("Please enter the bill: "));
let total = calculateWithGST(bill, 0.07);
console.log("Total = ", total);

let totalInSydney = calculateWithGST(bill, 0.07);

