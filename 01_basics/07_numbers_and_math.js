const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

const cartPrice = 499.899323
// console.log(balance.toFixed(2));
// console.log(cartPrice.toFixed(2));

// console.log(cartPrice.toPrecision(2)); // 5.0e+2
// console.log(cartPrice.toPrecision(3)); // 500

const collectedPoints = 10430430;
// console.log(collectedPoints.toLocaleString("en-IN"));


const value = "33a";
const valueInNumber = Number(value);
// console.log(isNaN(valueInNumber)); // true

const gamePoints = 5.5;
const intGamePoints = parseInt(gamePoints);
// console.log(intGamePoints); // 5

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// _________________________ Math ________________________

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.3));
// console.log(Math.round(5.5));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log(Math.log2(1000));
// console.log(Math.acos(0));

console.log(Math.random());
console.log(Math.random() * 10);

// print random number in the console between 1 and 10 including.
console.log(Math.floor(Math.random() * 10) + 1);




// print random number in range 10 to 20;
const min = 10;
const max = 20;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + 10;
console.log(randomNumber);
