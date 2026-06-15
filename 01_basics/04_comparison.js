// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 10); // true
// console.log(10 <= 9); // false
// console.log(10 == "10"); // true (loose equality, performs type coercion)
// console.log(10 === "10"); // false (strict equality, no type coercion)
// console.log(10 != "10"); // false (loose inequality, performs type coercion)
// console.log(10 !== "10"); // true (strict inequality, no type coercion)

console.log("12" > "2"); // false (string comparison, compares character by character)
console.log("apple" < "banana"); // true (string comparison, compares character by character)
console.log("apple" > "Apple"); // true (string comparison, uppercase letters are considered smaller than lowercase letters)


console.log(null == undefined); // true (loose equality, null and undefined are considered equal)
console.log(null === undefined); // false (strict equality, null and undefined are not the same type)


console.log(null > 0); // false (null is converted to 0, so this is 0 > 0)
console.log(null == 0); // false (loose equality, null is not equal to 0)
console.log(null >= 0); // true (null is converted to 0, so this is 0 >= 0)


console.log(undefined > 0); // false (undefined is converted to NaN, and any comparison with NaN is false)
console.log(undefined == 0); // false (loose equality, undefined is not equal to 0)
console.log(undefined >= 0); // false (undefined is converted to NaN, and any comparison with NaN is false)