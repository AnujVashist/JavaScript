const myArr = [];
//%DebugPrint(myArr);

// continious , holey - two type of array

// SMI = small integer
//Packed Elememnt
// Double (float, string, function )

// Array  a ander elements and object k ander properties.

//******************************* */
const ArrTwo = [1, 2, 3, 4, 5];
//PACKED-SMI-ELEMENTS(continuous)

ArrTwo.push(6.0); // when you push the double value then no change it . ||\/|| when you push the single value then aalso change it.
//PACKED-DOUBLE-ELEMENTS

ArrTwo.push("7");
//PACKED-ELEMENTS

ArrTwo[10] = 11;
//HOLEY_ELEMENTS

//console.log(ArrTwo);
//console.log(ArrTwo.length);
//console.log(ArrTwo[9]);

// no holes in the array then only one aur two check only
// bound check
//hasOwnProperty(ArrTwo, 9)

// these all condition only for holes
// bound check  // value hai 9 position pr hi nhi
//hasOwnProperty(ArrTwo, 9)
//hasOwnProperty(ArrTwo,protoType, 10)
//hasOwnProperty(Object,protoType, 10)

//NOTE:- holes are very expensive in js

const ArrThree = [1, 2, 3, 4, 5];
//console.log(ArrThree[8]); //undefined // out of bound

// continuses type array optimisation
//SMI > DOUBLE  > PACKED

// Holey type array optimisation
//H_SMI > H_DOUBLE  > H_PACKED

// HOLEY Array because this emply by default
const ArrFour = new Array(3);

// just three holes.HOLEY-SMI-ELEMENTS

ArrFour[0] = "1"; //HOLEY_ELEMENTS
ArrFour[1] = "2"; //HOLEY_ELEMENTS
ArrFour[2] = "3"; //HOLEY_ELEMENTS

// SMI > PACKED one step save
const ArrFive = [];
ArrFive.push("1"); // PACKED_ELEMENTS
ArrFive.push("2"); // PACKED_ELEMENTS
ArrFive.push("3"); // PACKED_ELEMENTS

const ArrSix = [1, 2, 3, 4, 5];

ArrSix.push(Infinity); // DOUBLE
ArrSix.push(NAN); // DOUBLE

// use the internal methods of array , object like for, forEach, forin , forof etc... // optimisation is easy
