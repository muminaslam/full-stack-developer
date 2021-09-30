
// var list = document.querySelectorAll("ul")[0];
/*
    - quyerSelectorAll outputs an array like object
    - To access the html element should mention the array position at the end
    - querySelectorAll("ul")[0];
    - In here the "ul" html element in the first array position of "0";
*/


// var list = document.getElementsByTagName("ul")[0];
/*
    - The problem you have is that getElementsByTagName() (note the plural implied by the 's' in the name of the function)
    - returns an array of DOM nodes, not a single DOM node, which is what appendChild() expects to work on; 
    - therefore you need to identify which of the array of nodes you want to work with:
    - To access the html element should mention the array position at the end
    - getElementsByTagName("ul")[0];
    - In here the "ul" html element in the first array position of "0";
*/


var list = document.querySelector("ul");

console.log(list);

var toDoList = ["Go to GYM", "Practice the web development", "Do the assignments"];

for(let i = 0; i < toDoList.length; i++){
    console.log(toDoList[i]);
    var liElement = document.createElement("li");
    // console.log(liElement);
    var content = document.createTextNode(toDoList[i]);
    liElement.appendChild(content);
    list.appendChild(liElement);
}