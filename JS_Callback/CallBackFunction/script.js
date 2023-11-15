// const calculate = (a, b, operation) => {
//     return operation(a, b);
// }

// const result = calculate(3, 4, function (num1, num2) {
//     return num1 + num2;
// });

// console.log(result);

// ---------------------------------------------------------------
// const calculate = (a, b, operation) => {
//     return operation(a, b);
// }

// const subtraction = (a, b) => a - b;

// const subResult = calculate(8, 3, subtraction);

// console.log(subResult);
// --------------------------------------------------------------------
// const calculate = (a, b, operation) => {
//     return operation(a, b);
// }

// function multiply(a, b){
//     return a*b;
// }

// const mulResult = calculate(2, 4, multiply);

// console.log(mulResult)
// ----------------------------------------------------------------------
// function mainFunction(callback){
//     console.log("Performing operation...");

//     // Use setTimeout to simulate an asynchronous operation
//     setTimeout(function() {
//         callback("Operation Complete");
//     }, 1000);
// }

// //define the callback function
// function callbackFunction(result){
//     console.log("Result: "+ result);
// }

// //call the main function with the callback function
// mainFunction(callbackFunction);
// ------------------------------------------------------------------------------
// Callback with Array.forEach 
// //Define the array numbers
// var numbers = [1, 2, 3, 4, 5];

// //Define the main function
// function mainFunction(callback){
//     console.log("Performing operation...");
//     //Use Array.forEach to loop through the Array of numbers
//     numbers.forEach(callback);
// }

// //Define the callback function
// function callbackFunction(number){
//     console.log("Result: "+number);
// }

// //call the main function with the callback function
// mainFunction(callbackFunction);