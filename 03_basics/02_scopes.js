var c = 600;
let a = 300;
const b = 400;

if (true) {
    let a = 30;
    const b = 50;
    var c = 60; // it changes the global c

    console.log("inner:", a);
    console.log("inner:", b);
}

console.log("outer:", a);
console.log("outer:", b);
console.log(c);


function one() {
    const username = "israfil";

    function two() {
        const website = "youtube";

        console.log(username);
    }

    // console.log(website); // ReferenceError: website is not defined

    two();
}

// one();


if (true) {
    const username = "israfil";

    if (true) {
        const website = " youtube";

        console.log(username + website);
    }

    // console.log(website); // ReferenceError: website is not defined
}




// ____________________Interesting___________________

addOne(5);

function addOne(num) {
    return num + 1;
}


// addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
    return num + 2;
}
