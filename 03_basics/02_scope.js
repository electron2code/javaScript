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