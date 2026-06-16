const myArray = [1, 2, 3, 4, 5];
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(typeof myArray); // Output: object

const myNewArray = new Array(1, 2, 3, 4, 5);
console.log(myNewArray); // Output: [1, 2, 3, 4, 5]
console.log(typeof myNewArray); // Output: object

// console.log(myArray[0]); // Output: 1
// console.log(myArray[2]); // Output: 3
// console.log(myArray[5]); // Output: undefined (index out of bounds)

// console.log(myArray.length); // Output: 5

myArray[2] = 10; // This changes the value at index 2 to 10
console.log(myArray); // Output: [1, 2, 10, 4, 5]


myArray.push(6); // This adds 6 to the end of the array
console.log(myArray); // Output: [1, 2, 10, 4, 5, 6]

myArray.pop(); // This removes the last element from the array
console.log(myArray); // Output: [1, 2, 10, 4, 5]

myArray.unshift(0); // This adds 0 to the beginning of the array
console.log(myArray); // Output: [0, 1, 2, 10, 4, 5]

myArray.shift(); // This removes the first element from the array
console.log(myArray); // Output: [1, 2, 10, 4, 5]



console.log(myArray.indexOf(3)); // Output: 2 (index of the first occurrence of 3)
console.log(myArray.indexOf(10)); // Output: 2 (index of the first occurrence of 10)
console.log(myArray.includes(20)); // Output: false (20 is not present in the array)

const partOfMyArray = myArray.slice(1, 4); // This creates a new array containing elements from index 1 to index 3 (4 is not included)
console.log(partOfMyArray); // Output: [2, 10, 4]  

const portionOfMyArray = myArray.splice(1, 2); // This removes 2 elements starting from index 1 and returns the removed elements
console.log(portionOfMyArray); // Output: [2, 10] (the removed elements)
console.log(myArray); // Output: [1, 4, 5] (the original array after the splice operation)