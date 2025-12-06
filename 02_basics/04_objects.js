// Objects with constructor
// const tinderUser = new Object();

// Object with literals
const tinderUser = {};
tinderUser.id = 12345;
tinderUser.name = "israfil";
tinderUser.email = "israfil@google.com";

console.log(tinderUser);

const regularUser = {
    name: {
        username: "israfil",
        fullName: {
            firstName: "Israfil",
            lastName: "Mallick",
        }
    },
    id: 23243,
}

console.log(regularUser.name.fullName?.firstName);

const obj1 = {
    name: "karolina",
    email: "karolina@gmail.com",
}

const obj2 = {
    followers: 435,
    following: 232,
}

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("email"));