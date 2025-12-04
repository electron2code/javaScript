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



// +++++++++++++++++++++ Memory for differents data types +++++++++++++++++++ 

// Stack (primitive), Heap (Non-primitive)

let score1 = 100;
let score2 = score1;  // there copying value from score1, not score1's memory address;

console.log(score2);
score2 = 30;

console.log(score1);

const user1 = {
    id: 10,
    username: "israfil",
    email: "israfil@google.com",
}

const user2 = user1 
// there is copying user1 memory address in user2 if we change user2 this going to change user1 alson

user2.email = "e2c@gmail.com";

console.log(user1.email);

/*
    the value of a non-primitve is stored in heap memory and assigning the address
    to a memory in stack changing value in the stack memory applys in heap memory address
*/