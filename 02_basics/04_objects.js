
// Singleton
// const tinderUser = new Object();

// console.log(tinderUser);

// Object literal
const tinderUser = {};

tinderUser.name = "alyssa";
tinderUser.age = 18;
tinderUser.isLoggedIn = true;

// console.log(tinderUser);


// Nested Object
const regularUser = {
    username: {
        userFullName: {
            firstName: "Israfil",
            lastName: "Mallick",
        }
    }
}

console.log(regularUser.username?.userFullName?.firstName);


const obj1 = {a: "1", b: "2"};
const obj2 = {c: "3", d: "4"};

//Marging two objects in a new object
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
console.log(obj3);



const users = [
    {id: 1, name: "alyssa"},
    {id: 2, name: "dianna"},
    {id: 3, name: "sophia"}
];

console.log(users[0].name);

console.log(Object.keys(tinderUser)); // [ 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'alyssa', 18, true ]
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));


// _____________________________Object_Destructuring____________________________

const course = {
    name: "AI engineering",
    price: 999,
    instructor: "Israfil",
}

const {name: courseName, price, instructor: teacher} = course;

console.log(courseName, price, teacher);