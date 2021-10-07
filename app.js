
// const createRow = (user) => {
//     let newRow = document.createElement("tr");
//     let element = `
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.username}</td>
//     `
//     newRow.innerHTML = element;
//     return newRow;
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(user => {
//             table.appendChild(createRow(user));
//         });
//     });

/*
    Async & await
*/
// ===============

const fetchData = async () => {
    // await = wait until the fetch is resolved.
    // Once its resolved, it will assign the value to the response variable

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //response isnot a promise instead its an actual value because you were added an awit next to it
    console.log(response);
    const data = await response.json();
    console.log(data);
}

fetchData();
