const name = "Israfil";
const repoCount = 50;

console.log(`Hello, ${name}! You have ${repoCount} repositories.`); // Template literals allow for embedding expressions and variables directly in the string using ${}

const appName = new String("Electron2Code");

console.log(typeof appName); // object (because it's a String object, not a primitive string)
console.log(appName[0]); // E 
console.log(appName.length); // 13

console.log(appName.__proto__); // This will show the prototype of the String object, which includes methods like toUpperCase, toLowerCase, etc.

console.log(appName.toUpperCase()); // ELECTRON2CODE
console.log(appName.charAt(9)); // C
console.log(appName.indexOf("Code")); // 9

console.log(appName.includes("Code")); // true

const partsOfString = appName.substring(0, 8); // This will extract the substring from index 0 to index 8 (not including index 8)
console.log(partsOfString); // Electron 

const anotherPartsOfString = appName.slice(0, 8); 
// This will also extract the substring from index 0 to index 8 (not including index 8) and is similar to
// substring, but can also handle negative indices

console.log(anotherPartsOfString); // Electron

const userName = "   Israfil   ";
console.log(userName.trim()); // This will remove the leading and trailing whitespace from the string, resulting in "Israfil"


const url = "https://www.electron2code.com/ai%20projects/voice%20assistant";

console.log(url.replace(/%20/g, "-")); // resulting in "https://www.electron2code.com/ai-projects/voice-assistant"

const urlParts = url.split("/"); // This will split the URL into an array of parts based on the "/" delimiter
console.log(urlParts); // ["https:", "", "www.electron2code.com", "ai%20projects", "voice%20assistant"]


console.log(url.startsWith("https")); // true
console.log(url.endsWith("voice%20assistant")); // true