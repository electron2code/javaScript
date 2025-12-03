const accountId = 12344556;
let accountEmail = "israfil@google.com";
var accountPassword = "1234";
accountCity = "Dhaka";

// accountId = 3434354; // TypeError: Assignment to constant variable.

accountEmail = "dev.israfil@e2c.com";
accountPassword = "9993";
accountCity = "MJ";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


/*
    Try never use var keyword to declare a variable, 
    cause of issues in scope.
*/
