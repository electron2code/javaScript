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
