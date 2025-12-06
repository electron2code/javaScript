const friendsList1 = ["Alyssa", "Dianna", "Steve", "John", "Emma"];
const friendsList2 = ["Kate", "Smith", "Jack"];

// friendsList1.push(friendsList2);
// console.log(friendsList1);

// const friends = friendsList1.concat(friendsList2);
// console.log(friends);

const friends = [...friendsList1, ...friendsList2];
console.log(friends);

const nestedArray = [1, 2, 3, [4, 5], 6, [7 , [8, 9]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);

console.log(Array.isArray(friends));
console.log(Array.from("Israfil")); // ['I', 's', 'r', 'a', 'f', 'i', 'l']

const score1 = 100;
const score2 = 300;
const score3 = 500;

const scores = Array.of(score1, score2, score3);
console.log(scores);