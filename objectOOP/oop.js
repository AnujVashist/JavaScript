// const user = {
//   username: "hitesh",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     //console.log("Got user details from database");
//     console.log(`Username: ${this.username}`);
//     console.log(this);
//   },
// };

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);
//console.log(User);
// console.log(
//   `User name is ${User.userName}. LoginCount is ${User.LoginCount}, and the signedIn is ${User.signedIn}`
// );
//console.log(User.getUserDetails());

// jb bi this keyword ka use kr te hai to current context ki baat kr rhe hai

//console.log(this);
//########################
//const promiseOne = new Promise();
//const date = new Date();

// new keyword is a constructor function

// new keyword ka use hm ek hi obejct literal say se multiple instaces bna skho
function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = () => {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
// In the left side varibale is this.username . and right side value is username this is pass the value
/*
const userOne = user("demo-demo", 9, true);
const userTwo = user("User_TWo", 12, false);
*/
// this userTwo is overright the userOne value. this mean UserOne is "User_TWo", 12, false
// this is not good .
// console.log(userOne);

// this overwrite problem solve using new keyword aur instance
const userOne = new user("demo-demo", 9, true);
const userTwo = new user("User_TWo", 12, false);
// console.log(userOne);
// console.log(userTwo);

//both values are different not overright the value because use the new keyword

// constructor functiuon provide the new instance

// Step 1: jb bi new keyword use hota hai to empty object create hota hai. //jis ko instance bola ja ta hai
// Step 2: constrcutor function call hota hai new keyword k karan
// Step 3: jitne bi arguments hote hai un ko pack kr ta hai aur un ko dede ta hai
// Step 4: function m miljate hai

// basically constructor property is referce of current context or khud hi k bare m refrence hoti hai

//console.log(userOne.constructor); // output is [Function: user]

// one more method is instanceof

// syntax of instanceof is -----object instanceof constructor-----

//// commit text
