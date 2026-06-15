let temperature = undefined;
let convertedTemperature = Number(temperature); // This converts the string to a number
console.log(typeof convertedTemperature); // This will print "number"
console.log(convertedTemperature);

// "33" => 33
// "" => 0
// "abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0



let isActive = NaN;
let convertedIsActive = Boolean(isActive); // This converts the number to a boolean
console.log(typeof convertedIsActive);
console.log(convertedIsActive);

// 1 => true
// 0 => false
// "" => false
// "abc" => true
// " " => true
// null => false
// undefined => false
// NaN => false

let count = 42;
let convertedCount = String(count); // This converts the number to a string
console.log(typeof convertedCount);
console.log(convertedCount);


// ___________________ Operations ___________________
let num1 = 10;
let num2 = "5";
let sum = num1 + num2; // This will perform string concatenation, resulting in "105"
console.log(sum);

console.log(1 + 2 + "3");  // "33"
console.log("1" + 2 + 3); // "123"

console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN


// Prefix and Postfix Increment/Decrement
let a = 10;
let b = 20;

let x = a++; // increment a after assigning its value to x.
let y = ++b; // increment b before assigning its value to y.

console.log("a:", a);
console.log("b:", b);
console.log("x:", x);
console.log("y:", y);
