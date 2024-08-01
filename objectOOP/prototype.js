let myName = "samsung          ";
//console.log(myName.length);
//console.log(myName.trim().length); // this way is good but use extra ordinary way

//console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: () => {
    console.log(`spidy power is ${spiderman}`);
  },
};
//console.log(this);

// Factory functions
Object.prototype.samsung = function () {
  //console.log("samsung function is present in all object");
};
Array.prototype.apple = function () {
  //console.log("apple function is present in all object");
};
// basically this factory function create a function and this function is aviable in all non privitive datatype so access this function array, string and function
heroPower.samsung();
//heroPower.apple(); // In this case no access of apple array access because this is object and apple is array
myHeros.samsung();
myHeros.apple(); // IN this case access only for array not for string, function, etc .this is array

///________
// Important Note:- (Array, string , function)---> [Object] ----> null
///________

// prototype inheritance
const user = {
  userName: "demo",
  email: "email@gmail.com",
};
const teacher = {
  makevideo: true,
};
const teachingsupport = {
  isavailable: false,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: teachingsupport, //ander
};

teacher.__proto__ = user; // bhar bi de skte hai aur ander bi

// modren syntax of prototype inheritance
Object.setPrototypeOf(teachingsupport, teacher);

let anotherUser = "samsungM31       ";

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(`Thislength is : ${this.trim().length}`);
};
anotherUser.trueLenght();

"apple".trueLenght();
"icetea".trueLenght();

/*
samsungM31       
Thislength is : 10
apple
Thislength is : 5
icetea
Thislength is : 6
*/

// this mtlb jis
