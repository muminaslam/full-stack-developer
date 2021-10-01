function greet(){
    console.log("Guten Morgen");
}

greet();

// Function with input parameters

function greet2(name){
    console.log("Guten Nacht " + name);
}

greet2("Elon Mask");

function details(name,age){
    console.log(name, age);
}

details("Aslam");

// Set default parameter values

function personal(name = "Steve", age = "55"){
    console.log("Hey! " + name + " your age is " + age);
}

personal("chingiskhan", 200);

// Addition

function sum(a, b){
    console.log("a + b = ", a + b);
}

sum(20);// Number +  undefined returns a "NaN" value

// Return statement

function sum(a, b){
    var add = a + b;
    return add;
}

console.log(sum(20, 30));
// OR

let result = sum(30,40);
console.log(result);

// Function in as an expresstion


console.log(add(50, 60));

// function add(a = 0, b = 0){
//     let sum = a + b;
//     return sum;
// }

let add = function(a = 0, b = 0){
    let sum = a + b;
    return sum;
}



let greeting = function(name = "Peter"){
    console.log("Hey! " + name + " Guten Morgen");
}

console.log(greeting("Aslam"));