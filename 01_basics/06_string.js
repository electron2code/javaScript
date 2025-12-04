const name = "Israfil";
const repoCount = 50;

// string interpolation 
console.log(`Hello, ${name} you have ${repoCount} repositories on github`);



const courseName = new String("JavaScript");

console.log(typeof courseName);
console.log(courseName.length);
console.log(courseName.__proto__);

console.log(courseName.charAt(4)); // S
console.log(courseName.charCodeAt(5)); // 99 == c


const str1 = "Cats are the best!";

// endsWith(searchString)
// endsWith(searchString, endPosition)
console.log(str1.endsWith("best!")); // true
console.log(str1.endsWith("best", 17)); // true


const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // true

console.log(sentence.indexOf("quick")); // 4


const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.lastIndexOf("dog")); // 38

const paragraph1 = paragraph.replace("dog", "cat");
console.log(paragraph1);

const paragraph2 = paragraph.replaceAll("dog", "cat");
console.log(paragraph2);

const userInput = "      JavaScript Course       \n  \n";
console.log(userInput.trim());

const score = "33";
console.log(score.padEnd(5, "0")); // 33000
console.log(score.padStart(5, "#")); // ###33


const mood = "happy!";
console.log(`I feel ${mood.repeat(3)}`);




const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"


const browserName = "Mozilla";
console.log(browserName.substring(0, 4)); // Mozi
// console.log(browserName.substring(-5)); // negative indexing is now allowed


const message = "Hello Israfil you are learning javaScript.";
const words = message.split(" ");
console.log(words);


const username = "Electron2Code";
const lowerUsername = username.toLowerCase();
console.log(lowerUsername); // electron2code


const word1 = "Hello ";
console.log(word1.concat("World")); // Hello World