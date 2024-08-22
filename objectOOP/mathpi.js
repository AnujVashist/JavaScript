const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// getOwnPropertyDescriptor show the hide properties in javascript

console.log(descriptor);
/*
output
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

console.log(Math.PI);
Math.PI = 5; // no change the value of PI it is universal constant
console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: true,
});

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
