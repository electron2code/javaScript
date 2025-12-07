"use strict";

const user = {
    id: 121212,
    username: "israfil",
    email: "israfil@gmail.com",
    isLoggedIn: true,
    welcomeMessage: function () {
        console.log(`Hello, ${this.username}, welcome to onboard.`);
        console.log(this);
    }
}

// user.welcomeMessage();

// user.username = "sam";
// user.email = "sam@gmail.com";

// user.welcomeMessage();

function logToConsole() {
    const username = "israfil";
    console.log(this);
}

logToConsole();

// console.log(Window); Not available in nodejs

console.log(this);


// Note::

// Environment       | console.log(this) (Outside) | logToConsole() (Inside)
// Browser,          |             Window          |         Window
// Browser (Strict)  |             Window          |        undefined
// Node.js           |       {} (module.exports)   |       Global Object


const arrowLogToConsole = () => {
    console.log(this);
}

arrowLogToConsole();


// arrow functions

// const addTowNumbers = (num1, num2) => {
//     return num1 + num2;
// }

const addTowNumbers = (num1, num2) =>  num1 + num2; // implicit return

console.log(addTowNumbers(10, 5));

const handleUserData = () => ({username: "israfil", id: 34353});

console.log(handleUserData());