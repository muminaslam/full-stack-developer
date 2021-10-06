// JavaScript Promises
// Promises has three values like FulFiled, Rejected and Pending
// Promises is an object and it "promises to return a value".

// setTimeout( ()=> {
//     console.log("Steve Jobs");
// }, 0);

// console.log("Elon Mask");
// console.log("Tony Stark");

// var data = fetch("https://jsonplaceholder.typicode.com/todos/10");
// console.log(data);

// let value = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello");
//     }, 3000);
// });

// let response = fetch('https://jsonplaceholder.typicode.com/users')

// // console.log(data)


// setTimeout(() => {
//     console.log(response);
//     const data = response.json();
//     console.log(data);
// }, 2000);

let response = fetch('https://jsonplaceholder.typicode.com/users').then(resData => resData.json()).then(data => {
    // console.log(responseData);
    // let parseData = responseData.json();
    // console.log(parseData);
    console.log(data);
});
