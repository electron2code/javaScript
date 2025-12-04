"use strict"; // treat all js code as newer version


// alert(3 + 3); // in nodejs environment alert function is not available. we need a browser;

// console.log(3 
//     + 3);  // there readability is poor 

// code readability should be high;

const name = "Israfil"; // string
const age = 24; // number
const points = 5.9; // number
const isLoggedIn = true; // boolean
const temperature = null; // standalone value
let location; // undefined
const id = Symbol('123');

const user = {
    id: 43434,
    username: "israfil",
} // object

const bigintNumber = 900719925474099105n;

console.log(typeof bigintNumber); // bigint

console.log(typeof location); // undefined
