// Arrow function

// let add = (a = 0, b = 0) => {
//     let sum = a + b;
//     return sum;
// }


/*
    Declare arrow function without curly brackets and return keyword, the arrow will return the output from the function
*/
let add = (a = 0, b = 0) => a + b;

console.log(add(10, 40));

// =================================

const greet = (name) => {
    return "Hi! " + name + " Guten Nacht";
}

console.log(greet("Elon"));

// ==================================

// If we have only one parameter, this mathod will work
const greet2 = name => "Hi! " + name + " Guten Abend";

console.log(greet2("Steve"));