const accountId = 98765
let accountEmail = "nikhil12@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail ="kulkarni@gmail.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
