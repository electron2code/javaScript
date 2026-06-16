// 7 primitive data types in JavaScript

// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Symbol
// 6. Null
// 7. Undefined

const score = 100; // number
const name = "Israfil"; // string
const isActive = true; // boolean
const bigIntValue = 9007199254740991n; // BigInt
const uniqueId = Symbol("id"); // symbol
const emptyValue = null; // null
let notAssigned; // undefined


// Non-primitive data type
// 1. Object (includes arrays, functions, etc.)

const friends = ["Alice", "Bob", "Charlie"]; // array (which is a type of object)
const person = { name: "Alice", age: 30 }; // object
const greet = function() { // function (which is also a type of object)
    console.log("Hello!");
}

console.log(typeof friends); // object
console.log(typeof person); // object
console.log(typeof greet); // function




// Stack (primitive data types) vs Heap (non-primitive data types)
let channelName = "freeCodeCamp"; // This is stored in the stack because it's a primitive data type
let anotherChannelName = channelName; // This creates a copy of the value in channelName

anotherChannelName = "engineeringMind";

console.log("Channel Name:", channelName); // This will print "freeCodeCamp" because it's a primitive data type and was copied
console.log("Another Channel Name:", anotherChannelName); // This will print "engineeringMind" because it's a separate variable with its own value


const user = { name: "Alice", age: 30 }; // This is stored in the heap because it's a non-primitive data type
const anotherUser = user; // This creates a reference to the same object in the heap

anotherUser.name = "Bob"; // This modifies the name property of the object that both user and anotherUser reference

console.log("User Name:", user.name);