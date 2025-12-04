const score = "33";

const scoreInNumber = Number(score);

console.log(typeof scoreInNumber);
console.log(scoreInNumber);

// Number Conversion 

// "33" => 33
// "33aa" => NaN
// null => 0
// undefined => NaN
// "" => 0
// "   " => 0
// "Israfil" => NaN

const isLoggedIn = null;

const isLoggedInInBoolean = Boolean(isLoggedIn);

console.log(typeof isLoggedInInBoolean);
console.log(isLoggedInInBoolean);

// Boolean Conversion
// 1 => true
// 0 = > false
// " " => true
// "" => false
// null => false
// undefined => false


const humanLanguage = undefined;

const humanLanguageInString = String(humanLanguage);

console.log(typeof humanLanguageInString);
console.log(humanLanguageInString);


//_______________________Arithmetic and more operations____________________________

let value = 3;
let negValue = -value;

console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2 % 3);

const str1 = "hello";
const str2 = " israfil";

const str3 = str1 + str2;
// console.log(str3);

console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // converted to number 1
console.log(+""); // converted to number 0

console.log(+"Israfil"); // converted to NaN




// postfix
let a = 10;
let b = a++; // incrementing value of a after assigning to variable b;

console.log(a, b);


// prefix
let x = 20;
let y = ++x; // incrementing value of x before assigning to variable y;
console.log(x, y);


