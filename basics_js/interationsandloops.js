// console.log("interations and loops");

// For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let index=0; index <= 10; index++){
//     const element = index
//     console.log(element)
// }

// for (let i=0; i <= 10; i++){
//     const element = i
//     console.log(element)
// }

// for (let i=0; i <= 10; i++){
//     const element = i
//     if (element == 5) {
//         console.log("5 is number")
//     }
//     console.log(element)
// }

// outer loop and inner loop
for (let i = 0; i <= 10; i++) {
  //console.log(`outer loop value: ${i}`)
  for (let j = 0; j <= 10; j++) {
    //console.log(`inner loop value of j is ${j} and inner loop value of i is ${i}`)
    //console.log( i + "*" + j + "=" + i*j)
  }
}

myArray = ["flash", "superman", "batman"];
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //console.log(element);
}
// without use the i++ only use the i then loop is print flash infinite time. use ++ in the loops.

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    //console.log(`detected 5`);
    break;
  }
  //console.log(`value of index is : ${index}`);
}

//without use break values is
/*
value of index is : 1      
value of index is : 2
value of index is : 3
value of index is : 4
detected 5
value of index is : 5 // 5th value is print without using break and continue keyword
value of index is : 6
value of index is : 7
value of index is : 8
value of index is : 9
value of index is : 10
value of index is : 11
value of index is : 12
value of index is : 13
value of index is : 14
value of index is : 15
value of index is : 16
value of index is : 17
value of index is : 18
value of index is : 19
value of index is : 20
 */

// with break keyword
// value of index is : 1
// value of index is : 2
// value of index is : 3
// value of index is : 4
// detected 5

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    //console.log(`detected 5`) ;
    continue;
  }
  //console.log(`value of index is : ${index}`)
}
//continue keyword is skip the particular condition value.
/*
value of index is : 1
value of index is : 2
value of index is : 3
value of index is : 4
detected 5
// 5th value is not print with using break and continue keyword.
value of index is : 6
value of index is : 7
value of index is : 8
value of index is : 9
value of index is : 10
value of index is : 11
value of index is : 12
value of index is : 13
value of index is : 14
value of index is : 15
value of index is : 16
value of index is : 17
value of index is : 18
value of index is : 19
value of index is : 20
*/

//while loop condition
// In all loops initionlization , increment/ decrement and conditions all are used in the loop
// while (condition) {

// }
let index = 0;
while (index <= 10) {
  //console.log(`value of index is : ${index}`);
  index = index + 2;
}

let myarray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myarray.length) {
  //console.log(`values is : ${myarray[arr]}`);
  arr = arr + 1;
}
// dowhile loop.

// do {

// } while (condition);

let score = 0;
do {
  //console.log(`score value ${score}`);
  score++;
} while (score <= 10);

// simple example of do while loop firstly check the do then condition.
// but the score is 11 then what is the result
let scores = 11;
do {
  //console.log(`score value ${scores}`); // output is score value 11 because check the do not while because condition is not fullfill
  scores++;
} while (scores <= 10);

// Hign Order Array loop

// https://www.geeksforgeeks.org/differences-between-the-for-in-for-of-loops-in-javascript/
// for of loop

// for (const iterator of object) {

// }
const myarr = [1, 2, 3, 4, 5, 6];
for (const num of myarr) {
  //console.log(num);
}

const greetings = "hello world";

for (const greet of greetings) {
  //console.log(greet);
}
//The Map object holds key-value pairs.
// only unique values in the map. no duplicate values
// const map = new Map();
// map.set('IN', 'India')
// map.set('USA', "United States of America")
// map.set('FR', 'France')
// map.set('IN', 'India') // only unique value no duplicate and in same order .

//console.log(map)
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/
// // array destructor
// // for (const [key, value] of map) {
//      console.log(key ,':-', value)
// // }
//output
/*
IN :- India
USA :- United States of America
FR :- France
*/

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'PUBG'
// }

// this syntax is not for object
// for (const [key, value] of myObject) {
//     console.log(key ,':-', value)
// }
// note: for of work in the map but not in the object .

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "ruby", "swift", "c++"];
for (const key in programming) {
  //console.log(key);
  //console.log(programming);
  //console.log(programming[key]);
}
// In case of array only key show but in the object keyvalue show
/*
0 console.log(key) 
1
2
3
js console.log(programming[key])
ruby
swift
c++
*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

// note : . A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
// for (const key in map) {
//   console.log(key);
// }
// use the object using the for-in loop and use the array use the for-of loop and other methods used in the array like forEach , map, filter, reduce etc method used...

// forEach loop
const coding = ["js", "ruby", "c++", "java", "css", "html"];
// coding.forEach(function (items){
//     console.log(items)
// })
//arrow function
// coding.forEach( (items)=> {
//     console.log(items)
// })
//callback function used in forEach

// normal function : function name(){}
// callback function :  function (){}

// function printMe (items){
//     console.log(items)
// }
// // only refrence not excute
// coding.forEach(printMe)

// coding.forEach((items, index, arr)=>{
//     console.log(items, index, arr)
// })

const mycoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// mycoding.forEach((items)=>{
//     console.log(items.languageFileName, '||', items.languageName)
// })

/* Note :  forEach not return the value  */

//******  map, filter and reduce
/* */
const myNums = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// filter return the value and in filter use the callback function inside the callback use the condition
//use this type of callback function then not use the curly braces
// const newnum= myNums.filter( (num)=> (num > 4))
//use this type of callback function then use the curly braces and return keyword.
// *********** using filter
// const newnum = myNums.filter( (num) => {
//     return num > 4
// })

//******** using forEach */
const newnum = [];
// myNums.forEach( (num)=> {
//     if(num> 4){
//         newnum.push(num)
//     }
// })
// console.log(newnum)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

// userBooks = books.filter( (bk) => {
//     return bk.publish >= 1995
// })
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
//console.log(userBooks)
// Note : filter only return value and true and false
const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnumbers = MyNumbers.map((nums) => {
  return nums + 10;
});
//console.log(newnumbers)

// chaining map().map()
// map().filter() etc

// const newnumbers = MyNumbers
//             .map((nums) =>  nums * 10)
//             .map( (nums) => nums + 1)
//             .filter ((nums) => nums >=40)
//console.log(newnumbers);

// reduce method ******

const myNumb = [1, 2, 3, 4, 5, 6];
//initialValue is 0
// const TotalNum = myNumb.reduce(function (acc, currval) {
//   console.log(`accumulator value :  ${acc} and  currentValue : ${currval} `);
//   return acc + currval;
// }, 0);

// using aarrow function
//const TotalNum = myNumb.reduce((acc, currval) => acc + currval, 0);
//console.log(TotalNum)

const shoppingCart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "python",
    price: 1999,
  },
  {
    itemName: "html,css",
    price: 999,
  },
  {
    itemName: "frame works",
    price: 3999,
  },
];

//console.log(shoppingCart)
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
//console.log(priceToPay)
// const sum = (a, b) => {
//   return Math.round(1 + (a * b) / 4);
// };
// console.log(sum(2, 3));
