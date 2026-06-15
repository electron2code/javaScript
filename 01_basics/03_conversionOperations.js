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