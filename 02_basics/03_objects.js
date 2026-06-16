// Singleton
// Object.create()

// literals

const userId = Symbol("userId123");

const user = {
    [userId]: "43546546546",
    name: "Israfil",
    ["full name"]: "Israfil Mallick",
    age: 23,
    isLoggedIn: true,
    localtions: ["Manikganj", "Dhaka"],
}

console.log(user);
console.log(user.name);

user.name = "alyssa";
user.email = "alyssa@google.com";
user["full name"] = "Alyssa karson";

console.log(user["name"]);
console.log(user["full name"]);
console.log(user.email);
console.log(user[userId]);


user.greeting = function () {
    console.log("Hello world");
}

user.greetingTwo = function () {
    console.log(`Hello, ${this.name}`);
}

console.log(user.greeting);
user.greeting();