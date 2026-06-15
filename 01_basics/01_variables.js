const accountId = 1234567890;
let accountName = "John Doe";
var accountPassword = "password123";  // prefer not to use var, because it has function scope and can lead to unexpected behavior
accountCity = "New York"; 

let accountStatus; // This variable is declared but not initialized, so it will be undefined

// accountId = 9876543210; // This will cause an error because accountId is a constant
accountName = "Jane Smith"; // This is allowed because accountName is declared with let
accountPassword = "newpassword456"; // This is allowed because accountPassword is declared with var
accountCity = "Los Angeles"; // This is allowed because accountCity is declared without a keyword

console.log("Account ID:", accountId);
console.log("Account Name:", accountName);
console.log("Account Password:", accountPassword);
console.log("Account City:", accountCity);
console.log("Account Status:", accountStatus); // This will print undefined