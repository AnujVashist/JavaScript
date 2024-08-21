// var a = 10;
// let b = 20;
// const c = 30;

let b = 200;

if (true) {
  var a = 10;
  let b = 20;
  //console.log("Inner value ", b);
  const c = 30;
}

//console.log(b);
// console.log(b);
// console.log(c);

// parent function
function one() {
  const UserName = "macBook";

  // child function
  function Two() {
    const website = "youtub.com";

    //console.log(UserName);
  }

  //console.log(website);

  Two();
}

one();

//  child function access the parent function variables   . note;

if (true) {
  const Username = "MicroSoft";

  if (Username === "MicroSoft") {
    const website = " youtube";
    // console.log(Username + website);
  }
  //console.log(website);
}
//console.log(Username);

// ++++++++++++++++++++ interesting ++++++++++

function addOne(num) {
  return num + 1;
}
addOne(5);
// variables hold all value in the js . like function ,json value etc varibales are very powerfull in the js .

//this type of code is exprestions.

//Cannot access 'addTwo' before initialization
//because not direct use the function. hold value in the variable that is not access the addTwo() function value and this is same as arrow function .
//addTwo(5);

const addTwo = function (num) {
  return num + 2;
};

// arrow function es6 and this keyword.
//current context of this user is {} inside the {} curry brases
const user = {
  name: "Ram",
  email: "emial@gmail.com",
  welcomeMessages: function () {
    console.log(`${this.name} , welcome to website`);
    console.log(this); // this keyword output is {name: 'sam',email: 'emial@gmail.com',welcomeMessages: [Function: welcomeMessages]}
  },
};

//===== this keyword used in the  object not in the function.

// user.welcomeMessages();
// user.name = "sam";
// user.welcomeMessages();

//console.log(this); // output of this keyword is empty object {}. current context oe value of this console is empty . no globle scope value in this code .

// arrow function

function one() {
  let Username = "samy";
  //console.log(this.Username);
}
//one(); // undefined . why Undefined out .solution in line no . 78 .

const Two = function two() {
  let Username = "samy";
  console.log(this.Username);
};

//arrow function

// const chai = () => {
//   let username = "sam";
//   console.log(this);
// };

// chai();

//basic arrow function

// const addNum = (num1, num2) => {
//   return num1 + num2;
// }; // explicitly return return keyword lgana hai

//const addNum = (num1, num2) => num1 + num2; // implicit return nhi lgana hai
//const addNum = (num1, num2) => (num1 + num2); // both are same
// object pass in the arrow function
const addNum = (num1, num2) => ({
  name: "sam",
});
//console.log(addNum(3, 4));

// Immediately Invoked Function Expressions(IIFE)

function chai() {
  console.log("DB CONNECTED");
}
//chai();

// globle scopes value poluted / polution

// what is IIFE ? Jo function immedatly excute ho ja ye . globle scope k polution se problem hoti hai aur delared value se to iife ka use krte hai .
// use polution ko htane k liye iife ka use hota hai sath m immidetly use or excute k liye bi use hota hai.
// syntax  () ()
(function chaiANDcode() {
  // named iife
  console.log("DB CONNECTED Two");
})();
// using arrow function and last m semi-column lgana must hai iife k case m .
(() => {
  console.log("DB CONNECTED three");
})();

// parameter pass
((name) => {
  console.log(`DB CONNECTED three,  ${name}`);
})("macbook");
