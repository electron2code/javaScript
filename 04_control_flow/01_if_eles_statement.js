const hours = new Date().getHours();
console.log(hours);

if (hours < 12) {
    console.log("Good morning");
}

if (hours < 12) {
    console.log("Good morning.");
} else if (hours < 20) {
    console.log("Good day.");
} else {
    console.log("Good evening.");
}

// ternary operator

const age = 20;

age >= 18 
    ? console.log("You are welcome to register") 
    : console.log("You are not eligible to register");



const username = "israfil";

const hostOrGuest = username === "israfil" ? "HOST" : "GUEST";

console.log(`${username} logged in as ${hostOrGuest}`);



// nullish coalescing operators:
let fetchedCartPrice = null;
fetchedCartPrice = fetchedCartPrice ?? 0;

console.log(fetchedCartPrice);

// in nullish coalescing (??) operations if first operands is null or undefined then the second operands is execute 