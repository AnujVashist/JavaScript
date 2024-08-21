//js main topics is objects and events.

//console.log("object")

// object literals not create singleton and using construtor create singleton

//object literals

// use the symbol in object

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Sam",
  "full name ": "Sam Kumar", // this type of value not access using dot notation
  age: 18,
  [mySymbol]: "keys90", // symbol used in the object using [ ] brackets like
  email: "sam@google.com",
  isLoggedin: false,
  lastLogginDays: ["Monday", "Friday"],
  method: function () {
    console.log("Hello, I'm a method!");
  },

  // method2: () => {
  //     console.log("Hello, I'm a method!");
  // }
};

jsUser.greeting = function () {
  console.log("hello Js User");
};
jsUser.greetingTwo = function () {
  console.log(`hello Js User ${this.email}`);
};
//console.log(jsUser.greeting); //[Function (anonymous)]
//console.log(jsUser.greeting());
//console.log(jsUser.greetingTwo());

jsUser.age = 25;
//console.log(jsUser.age);
//console.log(jsUser)
// Object.freeze(jsUser.age); // freeze the value
jsUser.age = 35;
//console.log(jsUser.age);

//console.log(jsUser)

/*
     name : "Sam"
    "full name " : "Sam Kumar"
    both are same because name is act as a string in object
    name : "Sam"
    (key : value) pair in the object
*/
//console.log(jsUser.name); // Sam
//console.log(jsUser["full name "]);
// console.log(typeof jsUser.mySymbol);
//console.log(typeof jsUser[mySymbol]);

// singleton object
const tinderUser = new Object();
(tinderUser.id = "123abc"),
  (tinderUser.name = "sammy"),
  (tinderUser.isLoggedIn = false);
//console.log(tinderUser); // output is {}

/*
// not a singleton object
const User = {}
console.log(User) // output is {}.
*/

const regularUser = {
  email: "sam@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sam",
      lastname: "kumar",
    },
  },
};

//console.log(regularUser.fullname.userfullname.lastname)

const key1 = { 1: "a", 2: "b" };
const key2 = { 3: "c", 4: "d" };

//const key3 = {key1, key2};
//console.log(key3)
// combine the values in an object
//const key3 = Object.assign({}, key1, key2)

//using spread operator. (combine the values in an object)
const key3 = { ...key1, ...key2 };
//console.log(key3);

//******************* */
//database se value

const Users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "j@gmail.com",
  },
  {
    id: 3,
    email: "i@gmail.com",
  },
  {
    id: 4,
    email: "k@gmail.com",
  },
];
/*
console.log(tinderUser); //{ id: '123abc', name: 'sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
*/

// de-structuring -----
const course = {
  coursename: "frontend development",
  price: "999",
  courseInstructor: "sam is a instructor od frontend development",
};

// const {courseInstructor} = course; //both are same {courseInstructor} or {courseInstructor : Instructor}
const { courseInstructor: Instructor } = course;
// console.log(courseInstructor);
//console.log(Instructor);

// json formatt and api used in the code .
// https://jsonformatter.org/
// https://randomuser.me/
