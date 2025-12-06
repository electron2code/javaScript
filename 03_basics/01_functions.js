function sayHello() {
    console.log("Hello, world");
}

// sayHello();
// sayHello();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(10, 5);
// addTwoNumbers(10, "5");

// function addTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(20, 10);
// console.log(result);

// function getLoginMessage(username) {
//     return `${username} is just logged in`;
// }



// function getLoginMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} is just logged in`;
// }

// default value of a parameter

function getLoginMessage(username="guest") {
    return `${username} is just logged in`;
}


// console.log(getLoginMessage("israfil"));
// console.log(getLoginMessage());



// rest parameters

// function calculateCartPrice(...nums) {
//     return nums;
// }


function calculateCartPrice(val1, val2, ...nums) {
    return nums;
}

console.log(calculateCartPrice(100, 88, 99.8, 59.9));


// function greetNewUser(userObj) {
//     console.log(`hello, ${userObj.username} welcome on board.
//     You have ${userObj.coins} coins.`);
// }

function greetNewUser({username, coins}) {
    console.log(`hello, ${username} welcome on board.
    You have ${coins} coins.`);
}

const databaseUser = {
    username: "sam",
    coins: 50,
}

greetNewUser(databaseUser);

