// singleton
// Object.create()

// literals {}
const myId = Symbol("123");

const user = {
    [myId]: 23432534,
    name: "israfil",
    "full name": "israfil mallick",
    age: 24,
    email: "israfil@gmail.com",
    country: "bangladesh",
};


// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);

// console.log(user[myId]);

user.isLoggedIn = true;
user.email = "israfil@microsoft.com";

// Object.freeze(user);
// user.email = "israfil@openai.com";

// console.log(user);

user.greeting1 = function () {
    console.log("Hello, there!");
}

console.log(user.greeting1);
user.greeting1();

user.greeting2 = function () {
    console.log(`Hello, ${this.name}`);
}

user.greeting2();