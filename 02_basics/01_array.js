// Array

const myArray = [1, 2, 3, 5, 6, 7];

// console.log(myArray);
// console.log(typeof myArray); // object

const myNewArray = new Array(1, 2, 3, 5, 7);
// console.log(myNewArray);

myArray.push(9);
// console.log(myArray);

myArray.pop();
// console.log(myArray);

myArray.unshift(10);
// console.log(myArray);

myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

// console.log(myArray.join("<=>"));


console.log(myArray.slice(1, 4));

const extractedPart = myArray.splice(1, 2, 1, 2);
console.log("extractedPart", extractedPart); // extractedPart [ 2, 3 ]
console.log("original", myArray); // original [ 1, 1, 2, 5, 6, 7 ]