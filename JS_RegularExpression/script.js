// function searchInString(){
//     let str = "My name is Rohit Bhardwaj and My email id is rohitkrbhardwaj09@gmail.com";
//     let n = str.search(/rohitkrbhardwaj09/);
//     console.log(n);
// }

// searchInString();

//Use a regular expression to do a case-insensitive search
// if exist 
// function searchInString() {
//     let str = "My name is Rohit Bhardwaj and My email id is rohitkrbhardwaj09@gmail.com";
//     let n = str.search(/rohit bhardwaj/i);
//     console.log(n);
// }

// searchInString();

// if not exist

// function searchInString() {
//     let str = "My name is Rohit Bhardwaj and My email id is rohitkrbhardwaj09@gmail.com";
//     let n = str.search(/rohit kumar bhardwaj/i);
//     console.log(n);
// }

// searchInString();

// --------------------------------------------------------------------------------------------------
//replace
// function replaceInString(){
//     let str = "My name is Rohit Bhardwaj and My email id is rohitkrbhardwaj09@gmail.com";
//     let n = str.replace(/rohitkrBhardwaj09/i, "me.rohitbhardwaj9");
//     console.log(n);
// }

// replaceInString();
// --------------------------------------------------------------------------------------------------------

//Creating a regular expression
// let re = /hi/;
// or 
// let re = new RegExp('hi');

// let result = re.test('hi jhon');
// console.log(result);

// The ignore case
// let re = /hi/i;
// let result = re.test("Hi Jhon");

// console.log(result);
// let re = new RegExp('hi', 'i');
// let result = re.test('HI Jhon');

// console.log(result);

// The global case
// let message = 'Hi, are you there? hi, HI...';
// let re = /hi/gi;

// let matches = [];
// let match;

// console.log(match);

// do {
//     match = re.exec(message);
//     if (match) {
//         matches.push(match);
//     }
// } while (match != null);

// console.log(matches);

// // Searching the String
// let str = "Are you OK? Yes, I am OK";
// let result = str.match(/OK/gi);

// console.log(result);

// // Repalcing the String
// let str = "Are you OK? Yes, I'm OK.";
// let result = str.replace('OK', 'fine');

// console.log(result);

//repalceing the String from all the occurences
// let str = 'Are you OK? Yes, I am OK.';
// let result = str.replace(/OK/g, 'fine');

// console.log(result);
/////////////////////////////////////////////////////////
// let message = 'Hi, are you there? hi, HI...';
// let re = /hi/gi;

// let matches = [];
// let match;

// do {
//     match = re.exec(message);
//     if (match) {
//         matches.push(match);
//     }
// } while (match != null);

// console.log(matches);

//digit character
// let phone = '+1-(408)-555-0105';
// let re = /\d/;
// console.log(phone.match(re));

// //using global flag
// let phone = '+1-(408)-555-0105';
// let re = /\d/g;

// console.log(phone.match(re));

//using join
// let phone = '+1-(408)-555-0105';
// let re = /\d/g;
// let numbers = phone.match(re);
// let phoneNo = numbers.join('');

// console.log(phoneNo);

// console.log('+1-(408)-555-0115'.match(/\d/g).join(''));

// space character 
let text="Is this all there is?"
let pattern = /\s/g;

let result = text.match(pattern);
console.log(result)