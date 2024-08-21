const temperature = 40;

// if (temperature <= 40) {
//   console.log("less than 50 degree");
// } else {
//   console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, ===, !=

const score = 200;
if (score > 100) {
  const power = "fly";
  //console.log(`user power is : ${power}`);
}
//show the error in case of const or let because both are used in the block scope but var is used and no error show because var is globle scope .
//console.log(`user power is : ${power}`);

// implicity scope or maanliziye yhe scope hai only for one line code excution only
//const balance = 1000;
// if (balance > 500) console.log("implicity scope test");
// nesting conditions
const balance = 899;

// if (balance < 500) {
//   console.log("less then 500");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else if (balance < 900) {
//   console.log("less then 900");
// } else {
//   console.log("less then 1200");
// }

// ************************************

const userLoggedIn = true;
const debitCard = true;
const loggedInFromgoogle = false;
const loggedInFromgEmail = true;

// if (userLoggedIn && debitCard && 2 === 2) {
//   console.log("Allow to buy course");
// }

// if (loggedInFromgoogle || loggedInFromgEmail) {
//   console.log("Log In Successfully");
// }

// switch statement
// syntax of switch statement
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

const month = 3;

//(break) example : jese ki case 3 match ho gya or break nhi hai to case3 ki value ya console ki value k sath baki bchi hui values bi dedeta hai sath m default case ki bi .

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("feb");
//     break;
//   case 3:
//     console.log("mar");
//     break;
//   case 4:
//     console.log("apr");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("june");
//     break;
//   case 7:
//     console.log("july");
//     break;
//   case 8:
//     console.log("aug");
//     break;
//   case 9:
//     console.log("sep");
//     break;
//   case 10:
//     console.log("oct");
//     break;
//   case 11:
//     console.log("nov");
//     break;
//   case 12:
//     console.log("dec");
//     break;
//   default:
//     console.log("default case");
//     break;
// }

const months = "apr";

//(break) example : jese ki case 3 match ho gya or break nhi hai to case3 ki value ya console ki value k sath baki bchi hui values bi dedeta hai sath m default case ki bi .

// switch (months) {
//   case "Jan":
//     console.log("Jan");
//     break;
//   case "feb":
//     console.log("feb");
//     break;
//   case "mar":
//     console.log("mar");
//     break;
//   case "apr":
//     console.log("apr");
//     break;
//   default:
//     console.log("default case");
//     break;
// }

// truthy values
// Manle na ki value shi hai or galat hai us ko hi truthy and falsy values bolte hai

const Email = "h@gmail.com";

// if (Email) {
//   console.log("got user email");
// } else {
//   console.log(`don't have user email`);
// }

// falsy values : false, 0, -0, null, undefined, bigint (0n) is falsy value, "" (empty),  NaN.
// Truthy values : "0", 'false', " " space is a value in the  string, [] Array empty, {} Object empty, function(){}

const Array1 = [];
// if (Array1.length === 0) {
//   console.log("Array is empty");
// }

const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//   console.log("Object is empty");
// }

// false == 0
// false == ''
// 0 == ''

// Nullish coalescing Operator (??)  : null , undefined
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10; // 5
//val1 = null ?? 10; // 10
//val1 = undefined ?? 10; //

val1 = null ?? 15 ?? 20; // 15 only center value show

//console.log(val1);

// ternary operator

// condition ? true :  false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);
