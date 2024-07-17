const name = "ramdom name";
const repocount = 50;

// console.log(name + "  "+ repocount); //old way 

//console.log(`Hello my name is ${name} & my repo is ${repocount}.`); // new way to right string.

const gameName = new String("javascript"); // string as an object 
//console.log(gameName);
//console.log(gameName.length);
console.log(gameName.__proto__); // outout is { not empty }
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.toString());
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf("a"))
// console.log(gameName.slice(0,4));
//console.log(gameName.slice(-9,3));
// console.log(gameName.substring(1, 6))


const newStringOne = "    trim String one    ";
console.log(newStringOne.trim());

const newUrl = "https//demo.1234%20random";
console.log(newUrl.replace('%20', "_"));
console.log(newUrl.includes('demo'));

const gameMode = new String ("mode1-mode2-mode3");
console.log(gameMode.split("-")) ;


