let password = "rotiprata123";
if (password === "rotiprata123") {
    console.log("Login Successful");
} else {
    console.log("Wrong Password");
}

let score = 81;
if (score >= 90) {
    console.log("Distinction");
} else if (score >= 80){
    console.log("A")
} else if (score >= 70){
    console.log("B")
} else if (score >= 60){
    console.log("C")
} else if (score >= 50){
    console.log("D")
} else {
    console.log("F")
}
// else if is used for mutually exclusive clauses

// replicate the above code without using any else-if
if (score >= 90) {
    console.log("AD");
} 
if (score >= 80 && score < 90) {
    console.log("A");
}

// do not use single equal in comparison
// '=' is an assignment operator
// x = 43 ==> 43 evaluates to true
// example below will not work

if (x=43) {
    console.log("Secret of life is found")
} else {
    console.log("Sorry not found");
}
console.log(x);

