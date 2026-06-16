"use strict";

const user = {
    username: "Israfil",
    isLoggedIn: true,
    loginCount: 3,

    welcomeMessage: function () {
        console.log(`welcome, ${this.username}`);
        console.log(this);
    }
}

user.welcomeMessage();

user.username = "sam";

user.welcomeMessage();

console.log(this);


function myFunction() {
    console.log(this); // in strict mode this would be undefined
}

myFunction();

const myArrowfunction = () => {
    console.log(this);
}

myArrowfunction();



// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(2, 5));

const handleObjectFun = (username, email) => ({username, email});

console.log(handleObjectFun("israfil", "israfil@google.com"));
