const score = 100;

// console.log("Score:", score); // Output: Score: 100

let balance = new Number(250); // This creates a Number object, which is not recommended
// console.log("Balance:", balance); // Output: Balance: 250.75    
// console.log(typeof balance); // Output: object

// console.log(balance.toString()); // Output: "250"

// console.log(balance.toFixed(2)); // Output: "250.00"

const myOtherNumber = 123.8934;
// console.log(myOtherNumber.toPrecision(2)); // Output: "123"

const myNewBalance = 10000000;

// console.log(myNewBalance.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // Output: "₹1,00,00,000.00"



// _____________________Math________________________

// console.log(Math);
// console.log(Math.PI);

// console.log(Math.sqrt(16)); // Output: 4
// console.log(Math.abs(-5)); // Output: 5
// console.log(Math.pow(2, 3)); // Output: 8
// console.log(Math.round(4.7)); // Output: 5
// console.log(Math.floor(4.7)); // Output: 4
// console.log(Math.ceil(4.2)); // Output: 5
// console.log(Math.max(1, 5, 3)); // Output: 5
// console.log(Math.min(1, 5, 3)); // Output: 1

console.log(Math.random()); // Output: A random number between 0 (inclusive) and 1 (exclusive)

const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // This will give a random number between 10 (inclusive) and 20 (inclusive)
console.log(randomInRange);
