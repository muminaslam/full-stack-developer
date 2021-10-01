// Callback function

let arr = ["Eat", "run", "sleep", "wake", "study"];

// let callbackFunction = () => {
//     console.log("Executed!");
// }

// arr.forEach(callbackFunction);

// In here forEach() fucntion returns the array values/elements inside the array

let callbackFunction = (list, index) => {
    console.log(list, index);
}

// arr.forEach(callbackFunction);

arr.forEach((list, index) => {
    console.log(list, index);
});