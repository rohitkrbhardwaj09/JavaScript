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
function replaceInString(){
    let str = "My name is Rohit Bhardwaj and My email id is rohitkrbhardwaj09@gmail.com";
    let n = str.replace(/rohitkrBhardwaj09/i, "me.rohitbhardwaj9");
    console.log(n);
}

replaceInString();