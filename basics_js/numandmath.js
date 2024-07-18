const num = 400;
//console.log(num);

const balance = new Number(100);
//console.log(balance)

//console.log(balance.toString()); // convert to string
//console.log(balance.toFixed(3));

const otherNumber = new Number(1414.6969);
//console.log(otherNumber.toPrecision(6));

const hundreds =  new Number(1000000);
//console.log(hundreds.toLocaleString()); // outpur is 1,000,000 as US based pattern.

//console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 as indian standard pattern.

/***************** Maths *****************/
/*
console.log(Math); // Math is an object and so mamy properties in the math 
console.log(Math.abs(-4)); // only -ve sign change to +ve sign that is absolute 
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,6,8,9,2));
console.log(Math.max(4,6,8,9,2));
*/

//console.log(Math.random()); //output value upto 0 to 1 only like 0.9383596792373881,0.23576614536225526 etc.
//console.log(Math.floor(Math.random()* 10 )+ 1)


const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min +1) + min));