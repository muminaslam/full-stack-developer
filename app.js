// console.log(this);// "this" keyword is pointing to the window object
// console.log(this.alert("Hello"));

// JavaScript Object

/*
var car = {
    model: "Lexus",
    manufacture: "Toyota",
    color: "white",
    speed: function(a="100km/h"){
        console.log(a);
    }
}

// console.log(car);
// console.log(typeof car);
// console.log(car.model);
// console.log(car.manufacture);
// console.log(car.color);
// car.speed("200Km/h");

*/

// ============================================================
// Use "this" keyword inside the object

/*
var manufacture = "Tesla";
var car = {
    model: "Lexus",
    manufacture: "Toyota",
    color: "White",
    speed: function(){
        // console.log(this)

        // console.log(this.manufacture);// Using "this" keyword now object is pointing to the property "manufactuere" inside the "car" object
        let manufacture = "BMW";
        console.log(manufacture);//It's referring to the variable outside the "car" object. So, output will be "Tesla" not "Toyota"
    }
}

car.speed();
// If we use "this" keyword in root or outside any function or object it will point to the globall "window" object

// Now If we use "this" keyword inside the function. it will point to the object of "car"

*/

// ===============================================================
// Template String
/*
var car = {
    model: "GT-R",
    manufacture: "Nissan",
    color: "Silver",
    speed: function(){
        // console.log(this.model + " is manufactured by  " + this.manufacture);

        // Template String
        console.log(`${this.model} is manufacured by ${this.manufacture}`);
    }
}
car.speed();
*/

// ========================================================

var car = {
    model: "GT-R",
    manufacture: "Nissan",
    color: "White",
    speed: () => {
        // "this" keyword inside the arrow function points to the window object instead of inside the "car" object
        console.log(this);
        console.log(`${this.model} was manufactured by ${this.manufacture}`);//The output will be "undefined wwas manufactured by undefined" because "this" kwyword is pointing to the global or window object instead of "car" object
        console.log(`${car.model} was manufactured by ${car.manufacture}`);
    }
}

car.speed();