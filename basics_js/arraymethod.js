const Demo = [1,2,3 , [4,7,8,3,6,3,8,[2,1,4,2,1]]];
const random = Demo.flat(2);
//console.log(random);

const marvel_heros = ['thor', 'ironman', 'spiderman', true ,2345];
const dc_heros = ['superman', 'batman', 'flash'];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ] array as a value 
//console.log(marvel_heros[3][1]);
const all_heros =  marvel_heros.concat(dc_heros);
//console.log(all_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// spread operator
const all_type_heros = [...marvel_heros, ...dc_heros];
//console.log(all_type_heros);

//console.log(Array.isArray('ironman')); // output is false because it is not a array(is Array check array or not)
//console.log(Array.from('ironman'))
//console.log(Array.from({name: "ironman"})); // interseting because object convert in array.

const score1 = 100;
const score2 = 200;
const score3 = 300;

//console.log(Array.of(score1, score2, score3)); //output is [ 100, 200, 300 ]

const myArr = [0,1,2,3,4,5,6];
//console.log(myArr[2]); //length of the array (2)
// myArr.push(7)
// myArr.pop();
// myArr.unshift(9)
// myArr.shift()
//console.log(myArr.includes(9)); // 9 is present in the myArr or not
//console.log(myArr.indexOf(9)); //-1 
const myArr2  = ["ironman", "thor"];

const myArr3 = new Array(1,3,5,6,9)

const newArr = myArr.join();
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr); //string


// slice and splice
/*
console.log("A", myArr); //A [0, 1, 2, 3,4, 5, 6]

const myn1 = myArr.slice(1,3);

console.log(myn1); //[ 1, 2 ]

console.log("B", myArr); //B [0, 1, 2, 3,4, 5, 6]

// important difference is in the splice method change the original array.
const myn2 = myArr.splice(1,3);

console.log(myn2); //[ 1, 2, 3 ]

console.log("c", myArr); //c [ 0, 4, 5, 6 ]

*/

