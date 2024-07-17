console.group("Hello World");

const accountId = 225349
let accountEmail = 'Demo@gamil.com'
var accountPassward = "123456"
accountCity = 'jaipur'
// accountId = 395289 // in case of const

accountEmail = 'Do@gamil.com'
accountPassward = "654321"
accountCity = 'pune'
let accountState ; //no value in this variable 

//console.log(accountId,accountEmail,accountPassward, accountCity, accountState)
console.table(
    [accountId,accountEmail,accountPassward, accountCity, accountState]
)
