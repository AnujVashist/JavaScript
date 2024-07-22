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
for (let i = 0; i <= 10; i++){
    //console.log(`outer loop value: ${i}`)
    for(let j = 0; j <= 10; j++){
        //console.log(`inner loop value of j is ${j} and inner loop value of i is ${i}`)
        //console.log( i + "*" + j + "=" + i*j)
    }
}

myArray = ['flash', 'superman', 'batman']
//console.log(myArray.length)
for (let i = 0; i < myArray.length; i++ ){
    const element = myArray[i]
    //console.log(element)
}
 // without use the i++ only use the i then loop is print flash infinite time. use ++ in the loops.

 // break and continue

 for (let index = 1; index <= 20; index++) {
    if(index == 5){
       //console.log(`detected 5`) ;
       break;
    }
    //console.log(`value of index is : ${index}`)
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
    if(index == 5){
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
// In all loops initionlization , increment/ decrement and conditions all aare used in the loop 
// while (condition) {
    
// }
let index = 0
while (index <= 10) {
    //console.log(`value of index is : ${index}`)
    index = index +2
}


let myarray = ['flash', 'batman', 'superman']
let arr = 0;
while(arr < myarray.length){
    //console.log(`values is : ${myarray[arr]}`)
    arr = arr + 1;
}
// dowhile loop.

// do {
    
// } while (condition);

let score = 0;
do {
    //console.log(`score value ${score}`)
    score++
} while (score <= 10);

// simple example of do while loop firstly check the do then condition.
// but the score is 11 then what is the result 
let scores = 11;
do { 
    //console.log(`score value ${scores}`) // output is score value 11 because check the do not while because condition is not fullfill
    scores++
} while (scores <= 10);

// Hign Order Array loop 
// for of loop 

// for (const iterator of object) {
    
// }
const myarr = [1,2,3,4,5,6]
for (const num of myarr) {
    //console.log(num)
    
}

const greetings = "hello world"

for (const greet of greetings){
    //console.log(greet)
}
//The Map object holds key-value pairs
// const map = New Map();


