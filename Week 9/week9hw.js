
// Function 1: no parameters
function greetuser() {
    console.log("--- Hello, User ---");
}

greetuser();

// Function 2: with parameters
function numberSum(a, b) {
    return (a + b);
}
let sum = numberSum(10, 66);
console.log("The sum of the these two numbers are: "+ sum)

// Function 3: nested function with user input

function sqaure(num){
    return num * num;
}

function printSquare(num){
    console.log("Square is : " + sqaure(num));
}

let userInput = Number(prompt("Enter a number:"));

printSquare(userInput);