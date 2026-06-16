const localFriends = ['Alice', 'Bob', 'Charlie'];
const schoolFriends = ['Dave', 'Eve', 'Frank'];

const allFriends = localFriends.concat(schoolFriends); // This creates a new array that combines the elements of both arrays
console.log(allFriends); // Output: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']


const numbers1 = [1, 3, 4, 5];
const numbers2 = [6, 7, 8, 9];

const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);

const nestedArray = [1, 2, 3, [4, 5, [6, 7]], [8, 9]]

console.log(nestedArray);

const flatedArray = nestedArray.flat(Infinity);
console.log(flatedArray);

console.log(Array.isArray("Israfil"));
console.log(Array.from("Israfil"));

const score1 = 5;
const score2 = 7;
const score3 = 9;
console.log(Array.of(score1, score2, score3));
