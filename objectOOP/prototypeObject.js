function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 4;
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// function is function and object both .
// Array and Object is also a Object.

//******* new keyword *********** */
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  //console.log(`price is ${this.score}`);
};

const tea = new createUser("tea", 250);
const chai = new createUser("chai", 25);

chai.printMe();
