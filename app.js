
/*
    let variable type
    Variable scope
*/
// ==========================


// let a = 20;
// var b = 45;
// console.log(a, b);
// a = 30;
// b = 15;
// console.log(a, b);

// if(true){
//     var Name = "Elon Mask";
//     // console.log(name);
// }

// console.log(Name);

if(true){
    let Name = "Steve Jobs";
}

// console.log(Name);

// if(true){
//     console.log(Name);
// }

// var - Global Scope
// for(var i = 0; i <= 10; i++){

// }
// console.log(i);

// let local scope

// for(let i = 0; i < 10; i++){

// }
// console.log(i)

// Can't access child scope from parent
// But can access parent scope from child
/*
if(true){
    // var car = "Lamborgini";
    console.log(car); //prompt as "Undefined"

    if(true){
        var car = "Lamborgini";
    }
}
*/

const print = () => {
    var car ="MG";

    if(true){
        console.log(car);
    }

    return car;
}
print();

// console.log(car);




