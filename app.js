// Object Methods

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

console.log(car);
console.log(Object);

// "Object" is a global object and if you create any custom objects like "car",it will be the children object of global "Object"
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.hasOwnProperty());
console.log(car.hasOwnProperty("model"));//It checks whether a property exist or not in object. In here it checks the "model" property is available or not in the "car" object