let score = "33jihb";

//console.log(score);
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber)

//33 => 33 number 
// string "demo" => demo
// "33abc" => NaN
// true => 1; false => 0
// undefined => NaN
// null => 0

let isLoggedIn = 0;
let boleanIsLoggedIN = Boolean(isLoggedIn);
//console.log(boleanIsLoggedIN)

// boolean 1 => true, 0 => false, " " empty string  =>  false,  "demo" => true

let someNumber = 33;
let stringNumber = String(someNumber);
//console.log(stringNumber) // 33 
//console.log(typeof  stringNumber) // string 

//
//alert
//shows a message.
//prompt
//shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
//confirm
//shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.


//*************** Operations ****************//
/*---{https://tc39.es/ecma262/#sec-type-conversion}-----*/
// console.log(1 +1);
// console.log(1 + 1 + "1")
// console.log("1" + 1 + 1)


let gamecounter = 100;
gamecounter++;
//console.log(gamecounter) ;
//Pre-Increment
/*
result = ++var1;
var = var + 1;
result = var;
*/
//Post-Increment
/*
result = var1++;
result = var;
var = var + 1;
*/


/// ****** Basic operators
/*
Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %, // 1, the remainder of 5 divided by 2
Exponentiation **. alert( 2 ** 2 ); // 2² = 4
*/

//Comparisons
/*
console.log('2' == 2); // false
console.log("2" === 2); //false
console.log(2 > 1); // true
*/

//console.log(null == undefined) //true
//console.log(null === undefined) //false
// console.log(null > 0);  // false
// console.log(undefined == 0) // false

const id = Symbol('123');
const accountId = Symbol('123');
//console.log(id === accountId); values are same but reture values are not same because use the datatype symbol.


//bigint datatypes

const bigNum = BigInt(123456789876543223456789876543234567);
//console.log(bigNum)

// Non primitive (reference)

//object{}, array[], function name(params) {}

const Myfunction = function (){
    console.log("MY function datatype")
}
//Myfunction(); // call the function
//console.log(typeof Myfunction, "is a datatype of js");

//Non primitive datatype is also reture the object or object datatype.

// symbol datatype is symbol.

/* ********************************************** */

// Memory 1)stack, 2) Heap 
// Stack Memory (primitive datatape)
// Heap Memory (non-primitive datatype)

let userName = "demodemo";
let userAnother = userName;

userAnother ="randomrandom"
//console.log(userName);
//console.log(userAnother);
//In case of stack memory copy the value to other. and original value is same. 

// In case of Heap Memory  not copy the value only reference value  to another value.
//example // Heap Memory (non-primitive datatype)
const UserOne ={
    email: "demo@gmail.com",
    upi:"user@oyi"
}

let UserTwo = UserOne;
UserTwo.email = "random@gmail.com"

//console.log(UserOne.email);
//console.log(UserTwo.email);





