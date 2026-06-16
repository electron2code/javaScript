const myDate = new Date();
console.log(myDate); // Outputs the current date and time
console.log(typeof myDate); // Outputs "object"

console.log(myDate.toString()); // Outputs the date in a human-readable format

const specificDate = new Date("Tue Jun 16 2026 11:45:25 GMT+0600 (Bangladesh Standard Time)");
console.log(specificDate.toLocaleString()); // Outputs the specific date in a locale-sensitive format


// syntaxt:
// Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date

const myCreatedDate = new Date(2027, 0, 15, 10, 30, 0, 500); // Note: Months are zero-indexed (0 = January, 1 = February, ..., 5 = June)
console.log(myCreatedDate.toLocaleString()); // Outputs the created date in a locale-sensitive format


const myTimestamp = Date.now(); // This gives the current timestamp in milliseconds since January 1, 1970
console.log(myTimestamp); // Outputs the current timestamp

const pastDate = new Date("2020-01-01");
const pastTimestamp = pastDate.getTime();
console.log(pastTimestamp); // Outputs the timestamp for the past date

const futureDate = new Date("2025-12-31");
const futureTimestamp = futureDate.getTime();
console.log(futureTimestamp); // Outputs the timestamp for the future date