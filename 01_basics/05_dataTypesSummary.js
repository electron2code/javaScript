// 7 primitive data types in JavaScript

// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Symbol
// 6. Null
// 7. Undefined

const score = 100; // number
const name = "Israfil"; // string
const isActive = true; // boolean
const bigIntValue = 9007199254740991n; // BigInt
const uniqueId = Symbol("id"); // symbol
const emptyValue = null; // null
let notAssigned; // undefined


// Non-primitive data type
// 1. Object (includes arrays, functions, etc.)

const friends = ["Alice", "Bob", "Charlie"]; // array (which is a type of object)
const person = { name: "Alice", age: 30 }; // object
const greet = function() { // function (which is also a type of object)
    console.log("Hello!");
}

console.log(typeof friends); // object
console.log(typeof person); // object
console.log(typeof greet); // function