// what is a function?
// Reusable block of code designed to perform a task

// function greetUser(){
//     console.log("Hello There");

// }
// greetUser(); // calls the fuction

// Fuction Structure
// Keyword, fuction: tells JS we're defining a funtion
// Name, idenify the fuction
// Parameter, Variables inside the parenthesse that receive datd
// Body, the code between {}

// Parameter and arguments =
// Parameter: place holders when defining a fuction 
// Arguments: actual value when calling it

// function greet(name) { // name is a paramter
//     console.log("Hello"+ name);
    
// }

// greet("Sebastian"); // Sebastian is the argument


// Function that will add two numbers together
// then console the total

// function addNumbers(a,b){
//     return (a+b);
// }

// let total = addNumbers(4,6);
// console.log("The total is: "+ total)


// return sends a value back to where the fuction was called
// console.log just prints it

// return is like your fuction handing you back notes with the answer written on it
// console.log is your fuction yelling the answer out loud, we hear it but we cant use it again 



// create me a fuction that will count to 5 by 1s

// function countToN(n){
//     for (let i = 1; i <= n; i++){
//         console.log(i);
//     }
// }

// countToN(5);



// Nested Functions
// Function can call another fuction inside of it

// function sqaure(num){
//     return num * num;
// }

// function printSquare(num){
//     console.log("Square is : " + sqaure(num));
// }


// printSquare(6);


// Greets the user, asks for their name, then prints is


// function usernamae(){
//     let name = prompt("What us your name? ");
//     console.log("Welcome, " + name);
// }



// usernamae();