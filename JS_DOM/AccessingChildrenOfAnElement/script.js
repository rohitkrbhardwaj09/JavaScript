console.log(document.body.firstChild);
console.log(document.body.lastChild);
let arr = Array.from(document.body.childNodes);
console.log(arr);


let  element = document.body;
console.log(element.childNodes[0] === element.firstChild); //true
console.log(element.childNodes.length-1 === element.lastChild); //false
