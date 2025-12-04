// Primitive:
// 7 types of primitive data in javaScript;
// Number, String, Boolean, null, undefined, Symbol, BigInt;

const score = 100; // number
const name = "Israfil"; // string
const isLoggedIn = true; // boolean
const outsideTemperature = null; // the null object means empty or no value
// typeof null is object but it is a standalone value for representing empty.

// let location; // undefiend
// let location = undefined // undefiend 

const id = Symbol("123");
const unotherId = Symbol("123");  // symbol

console.log(id === unotherId); // false

const bigNumber = 9999999999999999n; // bigint
console.log(typeof bigNumber);


// Reference (Non-Primitive)
// Array, Object, Function

const friends = ["Janne", "Karolina", "Maria", "Sophia"]; // this is an array object
// typeof friends array is an object

const user = {
    id: 1213,
    username: "israfil",
    email: "israfil@google.com"
} // object

const greet = function () {
    console.log("Hello, world");
} // this is a function object

console.log(typeof greet);
