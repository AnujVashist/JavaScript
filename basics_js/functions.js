// functions

function addTwoNumbers(number1, number2) {
  //one way
  let result = number1 + number2;
  //return result;
  // Another way
  //console.log("hiiii"); //working in return as per function rule
  //return number1 + number2;
  // console.log("hiiii") not working in return as per function rule
}

const result = addTwoNumbers(9, 3);
//console.log(result);

function loginUserMessage(userName) {
  // both are same conditions
  // if (userName === undefined) {
  //     console.log(`please enter your name`)
  //     return
  // }
  //   if (!userName) {
  //     console.log(`please enter your name`);
  //     return;
  //   }
  //   return `${userName} just logged in`;
}
//console.log(loginUserMessage("User")); // User just logged in
console.log(loginUserMessage()); //please enter your name

// default value in the function parameter pass
function loginUserMessage(userName = "sam") {
  // both are same conditions
  // if (userName === undefined) {
  //     console.log(`please enter your name`)
  //     return
  // }
  // use the default value so if else conditionis not used because default value is sam bydefault
  if (!userName) {
    console.log(`please enter your name`);
    return;
  }
  return `${userName} just logged in`;
}
// console.log(loginUserMessage());
// ...num is the rest operator
function calculateCarPrice(...num) {
  return num;
}
//console.log(calculateCarPrice(200,400,600,2000)); // [ 200, 400, 600, 2000 ]

function calculateCarPrice1(valu1, valu2, ...num) {
  return num;
}
//console.log(calculateCarPrice1(200,400,600,2000)); // [600, 2000]

const user = {
  username: "ram kumar",
  price: 199,
};

function handleprice(anyone) {
  return `UserName is ${anyone.username} and price is ${anyone.price} `;
}
// console.log(handleprice(user));
// console.log(handleprice({
//     username : "parul",
//     price : 399
// }))

const myNewArray = [200, 400, 600, 800];

function arraySecondValue(getvalue) {
  return getvalue[3];
}

//console.log(arraySecondValue(myNewArray))
//console.log(arraySecondValue([200, 400, 500, 7000]));
