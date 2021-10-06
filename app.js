const a = document.querySelectorAll('input')[0];
const b = document.querySelectorAll('input')[1];
const add = document.getElementById("add");
const multiply = document.getElementById("multiply");
const result = document.querySelector(".result");


const sum = () => {
    // const result = a.value + b.value
    // console.log(typeof result)
    const output = parseInt(a.value) + parseInt(b.value);
    console.log(output);

    result.innerHTML = output;
}

const product = () => {
    const output = parseInt(a.value) * parseInt(b.value);
    result.innerHTML = output;
}

// add.addEventListener("click", sum);
// multiply.addEventListener("click", product);


// Optimized Solution
// ==================
const calculate = (event, operator) => {
    console.log(event.target);

    if(operator == "add"){
        const output = parseInt(a.value) + parseInt(b.value);
        console.log(output);
        result.innerHTML = output;
    }else if (operator == "multiply"){
        const output = parseInt(a.value) * parseInt(b.value);
        console.log(output);
        result.innerHTML = output;
    }
}

add.addEventListener("click", function(event){
    return calculate(event, "add");
});

multiply.addEventListener("click", function(event){
    return calculate(event, "multiply");
});

