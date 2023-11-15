// //Creating an array using array literal
// let courses = ["HTML", "CSS", "JavaScript"];
// console.log(courses);
// -----------------------------------------------------------------
//Creating an array using the Javascript new keyword
// let arr1 = new Array(3);
// arr1[0] = 10;
// arr1[1] = 20;
// arr1[2] = 30;
// console.log(arr1);

// //Initializing while declaring
// let arr2 = new Array(10, 20, 30, 40, 50);
// console.log(arr2);

// //Creates an array of 5 undefined elements
// let arr3 = new Array(5);
// console.log(arr3);

// Creates an array with one element
// let arr4 = new Array("1BHK");
// console.log(arr4);
// ------------------------------------------------------------------------
// //Accessing array element using index number
// const courses = ["HTML", "CSS", "JavaScript"];
// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);
// ---------------------------------------------------------------------
// Change element from a pre-defined array
// const courses = ["HTML", "CSS", "JavaScript"];
// console.log(courses[0]);
// console.log(courses[1] = "NODE Js");
// console.log(courses[2]);
// --------------------------------------------------------------------------
// // Convert an array to String 
// const courses  = ["HTML", "CSS", "JavaScript"];
// console.log(courses.toString());
// -----------------------------------------------------------------------------
// Inreasing
// const courses  = ["HTML", "CSS", "JavaScript"];
// courses.length = 5; //Increasing array length to 5
// console.log(courses);

// // Decreasing
// const courses = ["HTML", "CSS", "JavaScript"];
// courses.length = 2; //Decreasing array length to 2
// console.log(courses);
// ---------------------------------------------------------------------------------

// const courses = ["HTML", "CSS", "JavaScript"];
// courses.length = 5; //Increasing array length to 5
// console.log("Array after increased length: ",courses);

// courses[3] = "Php";
// courses[4] = "React js";
// console.log("Array after re-initializing: ", courses);
// ---------------------------------------------------------------------------------------
// Iterate using for loop
// const courses  = ["HTML", "CSS", "JavaScript"];
// for (let i = 0; i < courses.length; i++) {
//     const element = courses[i];
//     console.log(element);
// }

// Iterate using for each loop
// const courses  = ["HTML", "CSS", "JavaScript"];
// courses.forEach(myFucntion);
// function myFucntion(element){
//     console.log(element);
// }
// -------------------------------------------------------------------------------------------
// Adding new elements to an Array
// const courses  = ["HTML", "CSS", "JavaScript"];
// console.log("Original Array: ", courses);
// courses.push("React");
// console.log("Array after adding an element: ", courses);

//adding element using length property
// const courses  = ["HTML", "CSS", "JavaScript"];
// console.log("Original Array: ", courses);
// courses[courses.length] = "React";
// console.log("Array after adding an element: ", courses);