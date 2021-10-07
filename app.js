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

// let response = fetch('https://jsonplaceholder.typicode.com/users').then(resData => resData.json()).then(data => {
//     // console.log(responseData);
//     // let parseData = responseData.json();
//     // console.log(parseData);
//     console.log(data);
// });

const list = document.querySelector("ul");

// let arr = ["one", "two", "three"];
// arr.forEach(chore => {
//     const element = document.createElement("li");
//     const textNode = document.createTextNode(chore);
//     element.appendChild(textNode);

//     element.addEventListener("click", (e) => {
//         // console.log(e.target.innerHTML);
//         // e.target.remove();
//         const userInput = prompt("Are you sure that you want to delete ${chore}");
//         if(userInput == "yes"){
//             e.target.remove();
//         }
//     });

//     list.appendChild(element);
// });


// let Name = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello Aslam");
//     }, 3000);
// });

// console.log(value);

// setTimeout(() => {
//     console.log(value);
// }, 3000);

// Name.then(name => { console.log(name) });


//    ul = document.querySelector("ul");

//     let response = fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(data => {
//         console.log(data);

//         append_data = (element)=>{
//             lielement = document.createElement("li");
//             user_detail = element['name']+element['username']+element['email']
//             textnode = document.createTextNode(user_detail);
//             lielement.appendChild(textnode);
//             ul.appendChild(lielement);
//         }
//         data.forEach(append_data);
//     })


const table = document.querySelector("table"); 

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(user => {
//             // console.log(user)
//             let newRow = document.createElement("tr");
//             let dataID = document.createElement("td");
//             let dataIDtextNode = document.createTextNode(user.id);
//             dataID.appendChild(dataIDtextNode);
//             newRow.appendChild(dataID);

//             table.appendChild(newRow);
//         });

//     });


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(user => {
//             // console.log(user)
//             let newRow = document.createElement("tr");
//             let element = `
//                 	<td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.username}</td>
//             `
//             console.log(element);

//             //appendChild() accepts only node element
//             //newRow.appendChild(element);//Prompt an error, because we are appending "string" value(element) instead of a node

//             newRow.innerHTML = element;
//             table.appendChild(newRow);
//         });

//     });


// Optimized solution

const createRow = (user) => {
    let newRow = document.createElement("tr");
    let element = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
    `
    newRow.innerHTML = element;
    return newRow;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(user => {
            table.appendChild(createRow(user));
        });
    });