/*
    OPERATORS
    =========
    1. Arithmetic Operator
    2. Assignment Operator
    3. Comparison Operator
    4. Logical Operator    
*/

/* Arithmetic Operator
   =================== */

   var a = 10;
   var b = 20;

   console.log("a + b = ", a + b);
   console.log("a - b = ", a - b);
   console.log("a * b = ", a * b);
   console.log("a / b = ", a / b);
   console.log("b % a = ", b % a);
   console.log("a % b = ", a % b);

    //Increment
   console.log("a+=1: ", a+=1);
   console.log("a++:", a++); //first console the value of a then increment
   console.log("a: ", a);
   console.log("++b: ", ++b);// First increment the value of b and then console
   console.log("a--: ", a--);
   console.log("a: ", a);

   /*
        Assignment Operator
        ===================*/
    console.log("a = 25:", a = 25);

    /*
        Comparison Operator
        ===================*/

        var x = 10;
        var y = "10";

    console.log("x == y: ", x == y);//Check the values of the two varaibles
    console.log("a != b: ", a != b);
    console.log("a > b: ", a > b);
    console.log("a < b: ", a < b);
    console.log("x === y: ", x === y);//Check the data type of the two variables

    /*
        Logical Operator
        ================*/
    console.log("AND Operator");
    console.log("true && true: ", true && true);
    console.log("true && false: ", true && false);
    console.log("false && true: ", false && true);
    console.log("false && false: ", false && false);

    console.log("OR Operator");
    console.log("true || true: " + true || true);
    console.log("true || false: " + true || false);
    console.log("false || true: " + false || true);
    console.log("false || false: " + false || false);

    
