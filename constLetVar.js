const accountId = 12345
let accountEmail = "abc@example.com"
var accountPassword = "123abc"
accountCity = "Pune"    //JS allows you to take use varibale like this without declaring const, let or var but this is not ideal/preferable.
let accountState    //this will give "undefined" value


// accountId = 54321       // Not allowed
accountEmail = "def@example.com"
accountPassword = "fx23@r3"
accountCity = "Delhi"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountId, accountEmail, accountPassword, accountCity, accountState);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/