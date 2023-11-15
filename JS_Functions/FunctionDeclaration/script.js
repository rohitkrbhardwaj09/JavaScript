const a= 12;
const b= 4;
// const aPlusB = a+b;
// console.log("the sum is:", aPlusB);
sum(a, b);

//
//do something else
//

const c= 2;
const d= 24;
// const cPlusD = c+d;
// console.log("the sum is:", cPlusD);
sum(c, d);

//
//do something else
//

const e= 5;
const f= 14;
// const ePlusF = e+f;
// console.log("the sum is:", ePlusF);
sum(e, f);

//
//We can do this all things using function -> there we dont need to write same code for same task.
//

//
//FUNCTION:
// A function is a block of code that performs a specific task. Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.
//
function sum(num1, num2){
    const result = num1 + num2;
    console.log("the sum is:", result);
}