// global and block scope example

let a = 100;
const b = 200;
var c = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("Inner", a);
}

console.log("outer", a);
console.log(c);


function one() {
    const username = "israfil";

    function two() {
        const website = "e2c.io";
        console.log(username);
    }

    // console.log(website); ReferenceError: website is not defined
    two();

}

one();



//_______________________Hoisting_____________________

greetUser1("israfil");

function greetUser1(username) {
    console.log(`Hello ${username}`);
}



// greetUser2("sam"); // ReferenceError: Cannot access 'greetUser2' before initialization

const greetUser2 = function (username) {
    console.log(`Hello from greeting 2, ${username}`);
}
