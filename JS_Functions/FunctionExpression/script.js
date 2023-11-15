// //example : using function declaration
// function square(num){
//     return num*num;
// }

// //example : using function expression(anonymous)
// const square = function(num){
//     return num*num;
// }

// console.log(square(3)); //output: 9

//example : using function expression(named)
// const square = function calSquare(num){
//     return num*num;
// }

// console.log(square(3)); 

//Example : using arrow function
const square = (num) => {
    return num*num;
}

console.log(square(4));