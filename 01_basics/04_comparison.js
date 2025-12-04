// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("201" > 2);

// unexpected behavior in comparison when comparing number as string
// NOTE: alway convert the string before number to avoid error.
// console.log("2" < "100"); // false
// console.log("2" > "100"); // true


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true


console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false


// strict equality check ( === )
console.log("2" === 2);