const myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

const myCreatedDate = new Date("2011-10-10T14:48:00.000+09:00");

const timestamp = Date.now();
console.log(timestamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.toLocaleString());

console.log(myCreatedDate.getUTCDay());
