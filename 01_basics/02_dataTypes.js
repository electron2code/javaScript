"use strict"; // This line enables strict mode, which helps catch common coding mistakes and "unsafe" actions such as assigning to undeclared variables.

// undeclearedVariable = "I am a global variable"; // This will cause an error because we are in strict mode

// console.log(undeclearedVariable);

// Data Types in JavaScript
let name = "Alice"; // String
let age = 30; // Number
let isStudent = false; // Boolean
let bigNumber = 9007199254740991n; // BigInt
let symbol = Symbol("unique"); // Symbol
let temperature = null; // Null
let status; // Undefined


console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof symbol); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof temperature); // object
console.log(typeof status); // undefined

let object = { name: "Alice", age: 30 }; // Object
console.log(typeof object); // object